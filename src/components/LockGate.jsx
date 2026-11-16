import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSubjectById } from "../data/subjects";
import { isLocked, unlockSubject, tryResumeUnlock } from "../lib/lock";

// Wraps a subject's pages. If the subject is locked, shows a sign-in card first.
export default function LockGate({ children }) {
  const { subjectId } = useParams();
  const subject = getSubjectById(subjectId);
  const [locked, setLocked] = useState(() => isLocked(subjectId));
  const [resuming, setResuming] = useState(() => isLocked(subjectId));
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    const nowLocked = isLocked(subjectId);
    setLocked(nowLocked);
    setResuming(nowLocked);
    if (nowLocked) {
      tryResumeUnlock(subjectId).then((ok) => {
        if (!alive) return;
        if (ok) setLocked(false);
        setResuming(false);
      });
    }
    return () => { alive = false; };
  }, [subjectId]);

  if (!locked) return children;

  async function submit(e) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const ok = await unlockSubject(subjectId, user, pass);
      if (ok) {
        setLocked(false);
      } else {
        setError("Wrong username or password.");
        setPass("");
      }
    } catch {
      setError("Could not unlock right now. Please try again.");
    }
    setBusy(false);
  }

  return (
    <div style={{ minHeight: "100vh", paddingTop: "64px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="card anim-scale-in" style={{ width: "100%", maxWidth: "380px", margin: "2rem 1.25rem", padding: "2rem 1.75rem", position: "relative" }}>
        <div style={{
          width: "52px", height: "52px", borderRadius: "16px", margin: "0 auto 1rem",
          background: "linear-gradient(135deg, #ede0ff, #ffe0ef)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" stroke="#7c55c8" strokeWidth="1.8" />
            <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="#7c55c8" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="15.5" r="1.4" fill="#7c55c8" />
          </svg>
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 700, color: "#2d1f5e", textAlign: "center", marginBottom: "0.3rem" }}>
          {subject ? subject.code : "Subject"} is locked
        </h2>
        <p style={{ fontSize: "0.85rem", color: "var(--text-soft)", textAlign: "center", marginBottom: "1.5rem", lineHeight: 1.5 }}>
          Sign in to open these reviewers.
        </p>

        {resuming ? (
          <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-soft)" }}>Checking…</p>
        ) : (
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <input
              className="input-field"
              style={{ paddingLeft: "1rem" }}
              placeholder="Username"
              autoComplete="username"
              autoCapitalize="none"
              spellCheck={false}
              value={user}
              onChange={(e) => setUser(e.target.value)}
              disabled={busy}
              autoFocus
            />
            <input
              className="input-field"
              style={{ paddingLeft: "1rem" }}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              disabled={busy}
            />
            {error && (
              <p role="alert" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#be4e8b", textAlign: "center" }}>{error}</p>
            )}
            <button type="submit" className="btn-primary" disabled={busy || !user || !pass} style={{ width: "100%", padding: "0.7rem 1rem", marginTop: "0.25rem" }}>
              {busy ? "Unlocking…" : "Unlock"}
            </button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button type="button" className="btn-ghost" style={{ width: "100%", padding: "0.6rem 1rem" }}>Back to subjects</button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
