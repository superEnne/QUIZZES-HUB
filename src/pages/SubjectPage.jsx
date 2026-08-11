import { useParams, Link } from "react-router-dom";
import { getSubjectById } from "../data/subjects";
import ReviewerCard from "../components/ReviewerCard";

const FLOWER  = "/Untitled design.png";
const SPARKLE = "/Untitled design (3).png";

export default function SubjectPage() {
  const { subjectId } = useParams();
  const subject = getSubjectById(subjectId);

  if (!subject) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "64px" }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-mid)", marginBottom: "1rem" }}>
            Subject not found
          </p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className="btn-ghost">Go back home</button>
          </Link>
        </div>
      </div>
    );
  }

  const hasReviewers = subject.reviewers && subject.reviewers.length > 0;

  return (
    <div style={{ minHeight: "100vh", paddingTop: "64px", position: "relative", zIndex: 1 }}>
      {/* Decorative blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* ── Header band ── */}
      <div style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)",
        padding: "2.5rem 1.25rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>
          {/* Floating flower top-right */}
          <img
            src={FLOWER}
            alt=""
            aria-hidden="true"
            className="anim-float"
            style={{
              position: "absolute",
              right: 0, top: "-20px",
              width: "clamp(70px, 14vw, 160px)",
              opacity: 0.85,
              pointerEvents: "none",
            }}
          />

          {/* Breadcrumb */}
          <div className="anim-slide-left" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", marginBottom: "1.25rem" }}>
            <Link to="/" style={{ color: "var(--text-mid)", textDecoration: "none", fontWeight: 600 }}>
              All Subjects
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "var(--text-soft)", flexShrink: 0 }}>
              <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ color: "var(--lilac-600)", fontWeight: 700 }}>{subject.code}</span>
          </div>

          {/* Subject header */}
          <div className="anim-fade-up" style={{ display: "flex", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.25rem 0.75rem",
                borderRadius: "999px",
                fontSize: "0.68rem",
                fontWeight: 800,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                background: "var(--lilac-100)",
                color: "var(--lilac-600)",
                border: "1.5px solid var(--lilac-200)",
                marginBottom: "0.6rem",
              }}>
                {subject.code} · 3rd Year 1st Sem
              </span>

              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                fontWeight: 700,
                color: "#2d1f5e",
                lineHeight: 1.2,
                marginBottom: "0.6rem",
              }}>
                {subject.name}
              </h1>

              <p style={{
                fontSize: "0.9rem",
                color: "var(--text-mid)",
                maxWidth: "520px",
                lineHeight: 1.65,
              }}>
                {subject.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content sections ── */}
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem 4rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>

        {/* ── Quizzes section ── */}
        {(() => {
          const quizzes = subject.reviewers.filter(r => !r.quizletLink || (r.questions && r.questions.length > 0));
          return (
            <div>
              <div
                className="anim-fade-up"
                style={{ animationDelay: "80ms", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "var(--lilac-600)", flexShrink: 0 }}>
                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 6a1.5 1.5 0 1 1 3 0c0 .83-.67 1.26-1.17 1.57C7.9 7.87 7.5 8.1 7.5 8.5v.5h1V8.5c0-.1.08-.19.33-.36.59-.38 1.67-1.08 1.67-2.14a2.5 2.5 0 0 0-5 0h1Zm.5 4.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="currentColor"/>
                  </svg>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#2d1f5e" }}>
                    Quizzes
                  </h2>
                </div>
                {quizzes.length > 0 && (
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, background: "var(--lilac-100)", color: "var(--lilac-600)", border: "1.5px solid var(--lilac-200)" }}>
                    {quizzes.length} {quizzes.length === 1 ? "item" : "items"}
                  </span>
                )}
              </div>

              {quizzes.length > 0 ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>
                  {quizzes.map((reviewer, i) => (
                    <ReviewerCard key={reviewer.id} reviewer={reviewer} subjectId={subject.id} index={i} />
                  ))}
                </div>
              ) : (
                <div className="card anim-fade-up" style={{ animationDelay: "120ms", padding: "2.5rem 2rem", textAlign: "center" }}>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-soft)" }}>No quizzes added yet.</p>
                </div>
              )}
            </div>
          );
        })()}

        {/* ── Flash Cards section ── */}
        {(() => {
          const flashCards = subject.reviewers.filter(r => r.quizletLink && (!r.questions || r.questions.length === 0));
          if (flashCards.length === 0) return null;
          return (
            <div>
              <div
                className="anim-fade-up"
                style={{ animationDelay: "120ms", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "var(--lilac-600)", flexShrink: 0 }}>
                    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M5 7h6M5 9.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#2d1f5e" }}>
                    Flash Cards
                  </h2>
                </div>
                <span style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, background: "var(--lilac-100)", color: "var(--lilac-600)", border: "1.5px solid var(--lilac-200)" }}>
                  {flashCards.length} {flashCards.length === 1 ? "module" : "modules"}
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "1rem" }}>
                {flashCards.map((reviewer, i) => (
                  <ReviewerCard key={reviewer.id} reviewer={reviewer} subjectId={subject.id} index={i} />
                ))}
              </div>
            </div>
          );
        })()}

        {/* Empty state — no content at all */}
        {!hasReviewers && (
          <div
            className="card anim-fade-up"
            style={{ animationDelay: "120ms", padding: "4rem 2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
          >
            <img src={SPARKLE} alt="" style={{ width: "80px", opacity: 0.65 }} className="anim-twinkle" />
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--text-mid)", marginBottom: "0.4rem" }}>
                No Reviewers Yet
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-soft)", maxWidth: "320px", lineHeight: 1.6 }}>
                Reviewers for <strong style={{ color: "var(--text-mid)" }}>{subject.name}</strong> will appear here once they are added.
              </p>
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="btn-ghost" style={{ marginTop: "0.5rem" }}>Back to All Subjects</button>
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}
