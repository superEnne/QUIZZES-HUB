import { Link } from "react-router-dom";

// Color palette per subject for variety
const COLORS = [
  { bg: "#f3eeff", border: "rgba(174,142,240,0.4)", badge: "#ede0ff", badgeText: "#7c55c8", dot: "#9370db" },
  { bg: "#fce7f3", border: "rgba(249,123,173,0.35)", badge: "#ffe0ef", badgeText: "#be4e8b", dot: "#f97bad" },
  { bg: "#eff6ff", border: "rgba(147,197,253,0.4)", badge: "#dbeafe", badgeText: "#3b6cd4", dot: "#93c5fd" },
  { bg: "#f0fdf4", border: "rgba(134,239,172,0.4)", badge: "#dcfce7", badgeText: "#25855a", dot: "#86efac" },
  { bg: "#fff7ed", border: "rgba(253,186,116,0.4)", badge: "#ffedd5", badgeText: "#b45309", dot: "#fdba74" },
  { bg: "#fdf4ff", border: "rgba(216,180,254,0.4)", badge: "#f3e8ff", badgeText: "#7c3aed", dot: "#d8b4fe" },
  { bg: "#f0fdfa", border: "rgba(94,234,212,0.4)", badge: "#ccfbf1", badgeText: "#0f766e", dot: "#5eead4" },
];

export default function SubjectCard({ subject, index }) {
  const c = COLORS[index % COLORS.length];
  const hasContent = subject.reviewers && subject.reviewers.length > 0;
  const delay = `${index * 70}ms`;

  return (
    <Link to={`/subject/${subject.id}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        className="card anim-fade-up"
        style={{
          animationDelay: delay,
          padding: "1.5rem",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          background: `linear-gradient(145deg, #ffffff 60%, ${c.bg} 100%)`,
        }}
      >
        {/* Top color strip */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${c.dot}, ${c.badge})`,
          borderRadius: "20px 20px 0 0",
        }} />

        {/* Code badge */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem", marginTop: "0.25rem" }}>
          <span
            style={{
              padding: "0.25rem 0.7rem",
              borderRadius: "999px",
              fontSize: "0.68rem",
              fontWeight: 800,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              background: c.badge,
              color: c.badgeText,
              border: `1.5px solid ${c.border}`,
            }}
          >
            {subject.code}
          </span>

          {/* Arrow icon */}
          <div style={{
            width: "28px", height: "28px",
            borderRadius: "8px",
            background: c.badge,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke={c.badgeText} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Subject name */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "#2d1f5e",
          lineHeight: 1.3,
          marginBottom: "0.5rem",
        }}>
          {subject.name}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: "0.82rem",
          color: "var(--text-soft)",
          lineHeight: 1.6,
          marginBottom: "1rem",
        }}>
          {subject.description}
        </p>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <div style={{
              width: "7px", height: "7px",
              borderRadius: "50%",
              background: hasContent ? c.dot : "#ddd",
              boxShadow: hasContent ? `0 0 6px ${c.dot}` : "none",
            }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: hasContent ? c.badgeText : "#aaa" }}>
              {hasContent ? `${subject.reviewers.length} ${subject.reviewers.length === 1 ? "Reviewer" : "Reviewers"}` : "No reviewers yet"}
            </span>
          </div>

          <span style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "0.2rem 0.65rem",
            borderRadius: "999px",
            background: hasContent ? c.badge : "#f5f5f5",
            color: hasContent ? c.badgeText : "#bbb",
          }}>
            {hasContent ? "Open" : "Soon"}
          </span>
        </div>
      </div>
    </Link>
  );
}
