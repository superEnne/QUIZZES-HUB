import { Link } from "react-router-dom";
import { termStyle } from "../data/exams";

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="6" cy="6" r="4.75" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M6 3.5V6l1.75 1.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Card for a timed mock exam. "Start Mock Exam" opens the exam's start screen.
export default function ExamCard({ exam, subjectId, index }) {
  const t = termStyle(exam.term);
  const count = exam.questions?.length || 0;
  const ready = count > 0;

  return (
    <div
      className="card anim-fade-up"
      style={{
        animationDelay: `${index * 60}ms`,
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(145deg, #ffffff 60%, ${t.bg} 140%)`,
      }}
    >
      {/* Top color strip */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "4px",
        background: `linear-gradient(90deg, ${t.strip}, ${t.bg})`,
      }} />

      {/* Term + time limit */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
        <span style={{
          padding: "0.25rem 0.7rem",
          borderRadius: "999px",
          fontSize: "0.68rem",
          fontWeight: 800,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          background: t.bg,
          color: t.color,
          border: `1.5px solid ${t.border}`,
        }}>
          {exam.term}
        </span>
        {exam.timeLimit ? (
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", fontWeight: 700, color: "var(--text-soft)" }}>
            <ClockIcon /> {exam.timeLimit} min
          </span>
        ) : null}
      </div>

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
          {exam.title}
        </h3>
        <p style={{ fontSize: "0.82rem", color: "var(--text-soft)", lineHeight: 1.5 }}>
          {exam.description || (ready ? "Timed mock exam." : "The mock exam will appear here once it's added.")}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {ready ? (
          <span className="badge badge-lilac">{count} {count === 1 ? "question" : "questions"}</span>
        ) : (
          <span className="badge" style={{ background: "#f5f5f5", color: "#aaa", border: "1.5px solid #eee" }}>
            Coming soon
          </span>
        )}
      </div>

      {/* Action */}
      <div style={{ marginTop: "auto" }}>
        {ready ? (
          <Link to={`/subject/${subjectId}/exam/${exam.id}`} style={{ textDecoration: "none", display: "block" }}>
            <button className="btn-primary" style={{ width: "100%", padding: "0.65rem 1rem", fontSize: "0.85rem" }}>
              Start Mock Exam
            </button>
          </Link>
        ) : (
          <button className="btn-primary" disabled style={{ width: "100%", padding: "0.65rem 1rem", fontSize: "0.85rem" }}>
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}
