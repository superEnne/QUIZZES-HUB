// Password lock for subjects marked `"locked": true` in subjects.js.
//
// The locked subject's reviewers, exams and pointers PDF are NOT in the plain bundle:
// they live encrypted in src/data/locked/<id>.enc.json (made by scripts/lock-subject.mjs)
// and are only loaded on the lock screen. The username + password derive the AES key
// (PBKDF2-SHA256 -> AES-GCM); a wrong pair simply fails to decrypt. Nothing to compare,
// no password in the code, so editing JS in the browser does not reveal the content.
import { subjects } from "../data/subjects";
import { exams, pointers } from "../data/exams";

const PAYLOADS = {
  comprog3: () => import("../data/locked/comprog3.enc.json"),
};

const SESSION_PREFIX = "qh-unlock:";
const unlocked = new Set();
const listeners = new Set();

const fromB64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const toB64 = (u8) => btoa(String.fromCharCode(...u8));

export function isLocked(subjectId) {
  const s = subjects.find((x) => x.id === subjectId);
  return !!(s && s.locked) && !unlocked.has(subjectId);
}

export function subscribeLock(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

async function loadBox(subjectId) {
  const load = PAYLOADS[subjectId];
  if (!load) throw new Error("No encrypted payload for " + subjectId);
  const mod = await load();
  return mod.default || mod;
}

async function decryptWithKeyBytes(box, keyBytes) {
  const key = await crypto.subtle.importKey("raw", keyBytes, "AES-GCM", false, ["decrypt"]);
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: fromB64(box.iv) }, key, fromB64(box.data));
  return JSON.parse(new TextDecoder().decode(plain));
}

function inject(subjectId, payload) {
  const subject = subjects.find((x) => x.id === subjectId);
  subject.reviewers = payload.reviewers || [];
  exams[subjectId] = payload.exams || [];
  pointers[subjectId] = (payload.pointers || []).map(({ pdfBase64, ...p }) => {
    if (!pdfBase64) return p;
    const url = URL.createObjectURL(new Blob([fromB64(pdfBase64)], { type: "application/pdf" }));
    return { ...p, file: url };
  });
  unlocked.add(subjectId);
  listeners.forEach((fn) => fn(subjectId));
}

/** Try the username + password. Resolves true on success, false on wrong credentials. */
export async function unlockSubject(subjectId, username, password) {
  const box = await loadBox(subjectId);
  const material = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(`${username.trim().toLowerCase()}\u0000${password}`), "PBKDF2", false, ["deriveBits"]);
  const bits = new Uint8Array(await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: fromB64(box.salt), iterations: box.iterations }, material, 256));
  let payload;
  try {
    payload = await decryptWithKeyBytes(box, bits);
  } catch {
    return false;
  }
  try { sessionStorage.setItem(SESSION_PREFIX + subjectId, toB64(bits)); } catch { /* storage unavailable */ }
  inject(subjectId, payload);
  return true;
}

/** Re-open a subject already unlocked in this browser tab (key kept in sessionStorage, never the password). */
export async function tryResumeUnlock(subjectId) {
  if (!isLocked(subjectId)) return true;
  let saved = null;
  try { saved = sessionStorage.getItem(SESSION_PREFIX + subjectId); } catch { /* storage unavailable */ }
  if (!saved) return false;
  try {
    const box = await loadBox(subjectId);
    inject(subjectId, await decryptWithKeyBytes(box, fromB64(saved)));
    return true;
  } catch {
    try { sessionStorage.removeItem(SESSION_PREFIX + subjectId); } catch { /* ignore */ }
    return false;
  }
}

export function lockSubjectAgain(subjectId) {
  try { sessionStorage.removeItem(SESSION_PREFIX + subjectId); } catch { /* ignore */ }
  window.location.reload();
}
