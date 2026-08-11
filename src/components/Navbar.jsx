import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1.5px solid rgba(174,142,240,0.2)",
        boxShadow: "0 2px 16px rgba(147,112,219,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1.25rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div
            style={{
              width: "36px", height: "36px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #9370db, #c084f5)",
              boxShadow: "0 4px 12px rgba(147,112,219,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2.5L15.5 6.5V12.5L9 16.5L2.5 12.5V6.5L9 2.5Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
              <circle cx="9" cy="9.5" r="2.5" fill="white"/>
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#6340ad", lineHeight: 1.1 }}>
              QuizHub
            </p>
            <p style={{ fontSize: "0.65rem", color: "#a08ac4", fontWeight: 600, lineHeight: 1 }}>
              3rd Year · 1st Sem
            </p>
          </div>
        </Link>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {!isHome && (
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="btn-ghost" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Subjects
              </button>
            </Link>
          )}
          <span
            style={{
              padding: "0.3rem 0.85rem",
              borderRadius: "999px",
              fontSize: "0.7rem",
              fontWeight: 700,
              background: "var(--lilac-100)",
              color: "var(--lilac-600)",
              border: "1.5px solid var(--lilac-200)",
              whiteSpace: "nowrap",
            }}
          >
            AY 2026–2027
          </span>
        </div>
      </div>
    </nav>
  );
}
