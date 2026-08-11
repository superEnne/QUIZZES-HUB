import { useState } from "react";
import { subjects } from "../data/subjects";
import SubjectCard from "../components/SubjectCard";

// Decorative asset paths (from /public)
const FLOWER = "/Untitled design.png";
const CANDY  = "/Untitled design (1).png";
const HEARTS = "/Untitled design (2).png";
const SPARKLE = "/Untitled design (3).png";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filtered = subjects.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.code.toLowerCase().includes(search.toLowerCase())
  );

  const totalReviewers = subjects.reduce((a, s) => a + (s.reviewers?.length || 0), 0);
  const totalQuestions = subjects.reduce(
    (a, s) => a + (s.reviewers?.reduce((ra, r) => ra + (r.questions?.length || 0), 0) || 0),
    0
  );

  return (
    <div style={{ minHeight: "100vh", paddingTop: "64px", position: "relative", zIndex: 1 }}>
      {/* ── Decorative blobs ── */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* ── Hero section ── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "3rem 1.25rem 2.5rem",
          background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>
          {/* Floating decoratives — hidden on very small screens via media-like inline */}
          <img
            src={FLOWER}
            alt=""
            aria-hidden="true"
            className="anim-float"
            style={{
              position: "absolute",
              right: "-10px",
              top: "-30px",
              width: "clamp(90px, 18vw, 200px)",
              opacity: 0.9,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
          <img
            src={SPARKLE}
            alt=""
            aria-hidden="true"
            className="anim-twinkle"
            style={{
              position: "absolute",
              right: "clamp(80px, 16vw, 190px)",
              top: "20px",
              width: "clamp(50px, 8vw, 100px)",
              opacity: 0.75,
              pointerEvents: "none",
              userSelect: "none",
            }}
          />

          {/* Label */}
          <div className="anim-fade-up" style={{ marginBottom: "0.75rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.3rem 0.85rem",
                borderRadius: "999px",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "var(--lilac-100)",
                color: "var(--lilac-600)",
                border: "1.5px solid var(--lilac-200)",
              }}
            >
              <span style={{
                width: "6px", height: "6px",
                borderRadius: "50%",
                background: "var(--lilac-500)",
                boxShadow: "0 0 6px var(--lilac-400)",
                display: "inline-block",
              }} />
              Select a Subject
            </span>
          </div>

          {/* Headline */}
          <div className="anim-fade-up" style={{ animationDelay: "60ms", marginBottom: "0.75rem" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                fontWeight: 700,
                color: "#2d1f5e",
                lineHeight: 1.15,
                maxWidth: "580px",
              }}
            >
              Choose your{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #9370db, #f97bad)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                subject.
              </span>
            </h1>
          </div>

          <p className="anim-fade-up" style={{
            animationDelay: "100ms",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            color: "var(--text-mid)",
            maxWidth: "480px",
            lineHeight: 1.65,
            marginBottom: "2rem",
          }}>
            Pick a subject to browse reviewers and start practicing. More content will be added over time.
          </p>

          {/* Stats row */}
          <div
            className="anim-fade-up"
            style={{
              animationDelay: "140ms",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "0",
            }}
          >
            {[
              { label: "Subjects", value: subjects.length },
              { label: "Reviewers", value: totalReviewers },
              { label: "Questions", value: totalQuestions },
            ].map((stat) => (
              <div key={stat.label} className="stat-chip">
                <span style={{
                  fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                  fontWeight: 800,
                  fontFamily: "'Playfair Display', serif",
                  color: "#9370db",
                  lineHeight: 1,
                }}>
                  {stat.value}
                </span>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--text-soft)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem 4rem" }}>
        {/* Search bar */}
        <div className="anim-fade-up" style={{ animationDelay: "160ms", marginBottom: "1.75rem", position: "relative", maxWidth: "420px" }}>
          <svg
            style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--lilac-400)", flexShrink: 0 }}
            width="16" height="16" viewBox="0 0 16 16" fill="none"
          >
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            className="input-field"
            type="text"
            placeholder="Search subjects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 270px), 1fr))",
            gap: "1.1rem",
          }}>
            {filtered.map((subject, i) => (
              <SubjectCard key={subject.id} subject={subject} index={i} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "5rem 1rem" }}>
            <img src={HEARTS} alt="" style={{ width: "80px", margin: "0 auto 1rem", display: "block", opacity: 0.6 }} />
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-mid)", marginBottom: "0.4rem" }}>
              No subjects found
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-soft)" }}>Try a different search.</p>
          </div>
        )}

        {/* Bottom decoration */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          marginTop: "4rem",
          opacity: 0.5,
        }}>
          <img src={CANDY} alt="" style={{ width: "60px" }} className="anim-float-delay" />
          <img src={SPARKLE} alt="" style={{ width: "50px" }} className="anim-twinkle" />
          <img src={HEARTS} alt="" style={{ width: "55px" }} className="anim-float" />
        </div>
      </div>
    </div>
  );
}
