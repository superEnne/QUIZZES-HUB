import { Link } from "react-router-dom";

export default function ReviewerCard({ reviewer, subjectId, index }) {
  const delay = `${index * 60}ms`;
  const questionCount = reviewer.questions ? reviewer.questions.length : 0;

  return (
    <div
      className="card anim-fade-up"
      style={{ animationDelay: delay, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
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
          {reviewer.title}
        </h3>
        {reviewer.description && (
          <p style={{ fontSize: "0.82rem", color: "var(--text-soft)", lineHeight: 1.5 }}>
            {reviewer.description}
          </p>
        )}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <span className="badge badge-lilac">
          {questionCount} {questionCount === 1 ? "question" : "questions"}
        </span>
        {reviewer.quizletLink && (
          <span className="badge badge-blue">Quizlet</span>
        )}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "auto" }}>
        {questionCount > 0 ? (
          <Link to={`/subject/${subjectId}/quiz/${reviewer.id}`} style={{ textDecoration: "none", flex: 1, minWidth: "120px" }}>
            <button className="btn-primary" style={{ width: "100%", padding: "0.65rem 1rem", fontSize: "0.85rem" }}>
              Start Quiz
            </button>
          </Link>
        ) : reviewer.quizletLink ? null : (
          <button className="btn-primary" disabled style={{ flex: 1, minWidth: "120px", padding: "0.65rem 1rem", fontSize: "0.85rem" }}>
            No Questions Yet
          </button>
        )}

        {reviewer.quizletLink && (
          <a
            href={reviewer.quizletLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", flex: questionCount > 0 ? "0 0 auto" : 1, minWidth: "120px" }}
          >
            <button
              className={questionCount > 0 ? "btn-ghost" : "btn-primary"}
              style={{ width: "100%", padding: "0.65rem 1rem", fontSize: "0.85rem", gap: "0.4rem" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <path d="M5.5 2H2.5C2.22 2 2 2.22 2 2.5v9c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5V8.5M8 2h4v4M7 7L12 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Open Quizlet
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
