import { termStyle } from "../data/exams";

// Card for a downloadable PDF reviewer (shown in the "Reviewer Pointers" section).
export default function PointersCard({ item, index }) {
  const t = termStyle(item.term);

  return (
    <div
      className="card anim-fade-up"
      style={{ animationDelay: `${index * 60}ms`, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      {/* Title & description */}
      <div>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1rem",
          fontWeight: 700,
          color: "#2d1f5e",
          marginBottom: "0.35rem",
          lineHeight: 1.3,
        }}>
          {item.title}
        </h3>
        {item.description && (
          <p style={{ fontSize: "0.82rem", color: "var(--text-soft)", lineHeight: 1.5 }}>
            {item.description}
          </p>
        )}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {item.term && (
          <span className="badge" style={{ background: t.bg, color: t.color, border: `1.5px solid ${t.border}` }}>
            {item.term}
          </span>
        )}
        <span className="badge badge-blue">PDF{item.pages ? ` · ${item.pages} pages` : ""}</span>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "auto" }}>
        <a href={item.file} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", flex: 1, minWidth: "120px" }}>
          <button className="btn-primary" style={{ width: "100%", padding: "0.65rem 1rem", fontSize: "0.85rem" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
              <path d="M5.5 2H2.5C2.22 2 2 2.22 2 2.5v9c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5V8.5M8 2h4v4M7 7L12 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View PDF
          </button>
        </a>
        <a href={item.file} download style={{ textDecoration: "none", flex: "0 0 auto", minWidth: "120px" }}>
          <button className="btn-ghost" style={{ width: "100%", padding: "0.65rem 1rem", fontSize: "0.85rem" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <path d="M8 2v8m0 0L4.75 6.75M8 10l3.25-3.25M2.75 12.5v.75c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75v-.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download
          </button>
        </a>
      </div>
    </div>
  );
}
