// Encrypts a subject's reviewers, exams and pointers PDF so only people with the
// username + password can open them on the site.
//
//   node scripts/lock-subject.mjs <subjectId> --user <username> --pass <password>
//
// Reads   locked-src/<subjectId>.json   (plaintext manifest, git-ignored)
// Writes  src/data/locked/<subjectId>.enc.json   (ciphertext only; safe to commit)
//
// Crypto (matches src/lib/lock.js): PBKDF2-SHA256, 600,000 iterations, 16-byte salt
// -> 256-bit AES-GCM key, 12-byte IV. The key material is `${username}\0${password}`
// (username trimmed + lower-cased). Wrong credentials make AES-GCM decryption fail,
// so the site never stores or compares the password itself.
// The credentials are never written anywhere: pass them on the command line each time.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { webcrypto as crypto } from "node:crypto";

const ITERATIONS = 600_000;
const args = process.argv.slice(2);
const subjectId = args[0];
const opt = (name) => { const i = args.indexOf(name); return i > -1 ? args[i + 1] : undefined; };
const user = opt("--user"), pass = opt("--pass");
if (!subjectId || subjectId.startsWith("--") || !user || !pass) {
  console.error("Usage: node scripts/lock-subject.mjs <subjectId> --user <username> --pass <password>");
  process.exit(1);
}

const srcPath = resolve("locked-src", `${subjectId}.json`);
const base = dirname(srcPath);
const manifest = JSON.parse(readFileSync(srcPath, "utf8"));
const readJson = (p) => JSON.parse(readFileSync(resolve(base, p), "utf8"));

const payload = {
  subject: subjectId,
  reviewers: manifest.reviewers ? readJson(manifest.reviewers) : [],
  exams: (manifest.exams || []).map(readJson),
  pointers: (manifest.pointers || []).map(({ pdf, ...rest }) => ({
    ...rest,
    pdfBase64: pdf ? readFileSync(resolve(base, pdf)).toString("base64") : undefined,
  })),
};

const b64 = (u8) => Buffer.from(u8).toString("base64");
const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const material = await crypto.subtle.importKey(
  "raw", new TextEncoder().encode(`${user.trim().toLowerCase()}\u0000${pass}`), "PBKDF2", false, ["deriveBits"]);
const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations: ITERATIONS }, material, 256);
const key = await crypto.subtle.importKey("raw", bits, "AES-GCM", false, ["encrypt"]);
const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(JSON.stringify(payload)));

const outPath = resolve("src/data/locked", `${subjectId}.enc.json`);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify({ v: 1, kdf: "PBKDF2-SHA256", iterations: ITERATIONS, salt: b64(salt), iv: b64(iv), data: b64(new Uint8Array(ct)) }));
const q = payload.reviewers.reduce((n, r) => n + (r.questions?.length || 0), 0) + payload.exams.reduce((n, e) => n + e.questions.length, 0);
console.log(`Locked ${subjectId}: ${payload.reviewers.length} reviewers, ${payload.exams.length} exams, ${payload.pointers.length} pointers, ${q} questions -> ${outPath}`);
