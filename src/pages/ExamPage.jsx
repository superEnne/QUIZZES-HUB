import { useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { getSubjectById } from "../data/subjects";
import { getExamById, examStats, termStyle } from "../data/exams";
import TypeBadge from "../components/TypeBadge";

const FLOWER  = "/Untitled design.png";
const CANDY   = "/Untitled design (1).png";
const SPARKLE = "/Untitled design (3).png";

function ChevRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: "var(--text-soft)", flexShrink: 0 }}>
      <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/** Does a topic contain the search text anywhere? */
function matchesTopic(topic, q) {
  if (!q) return true;
  const haystack = [
    topic.heading,
    topic.summary,
    topic.code,
    ...(topic.points || []),
    ...(topic.terms || []).flatMap((t) => [t.term, t.definition]),
  ].filter(Boolean).join(" ").toLowerCase();
  return haystack.includes(q);
}

// ── Key term tile (definition can be hidden for self-testing) ────────────────
function TermItem({ term, definition, hidden }) {
  const [shown, setShown] = useState(false);
  const masked = hidden && !shown;

  return (
    <div style={{
      padding: "0.75rem 0.9rem",
      borderRadius: "12px",
      background: "#faf5ff",
      border: "1.5px solid var(--lilac-200)",
      display: "flex", flexDirection: "column", gap: "0.3rem",
    }}>
      <p style={{ fontSize: "0.85rem", fontWeight: 800, color: "#2d1f5e", lineHeight: 1.35 }}>{term}</p>
      {masked ? (
        <button
          onClick={() => setShown(true)}
          style={{
            padding: "0.45rem 0.6rem",
            borderRadius: "8px",
            border: "1.5px dashed var(--lilac-300)",
            background: "white",
            color: "var(--lilac-600)",
            fontSize: "0.75rem",
            fontWeight: 700,
            fontFamily: "inherit",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          Tap to reveal definition
        </button>
      ) : (
        <p style={{ fontSize: "0.8rem", color: "var(--text-mid)", lineHeight: 1.55 }}>{definition}</p>
      )}
    </div>
  );
}

// ── One topic in the study notes ─────────────────────────────────────────────
function TopicCard({ topic, index, hideDefs, delay }) {
  const paragraphs = (topic.summary || "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <section
      id={`topic-${index}`}
      className="card anim-fade-up"
      style={{ animationDelay: delay, padding: "clamp(1.25rem, 4vw, 1.75rem)", scrollMarginTop: "84px" }}
    >
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.9rem" }}>
        <span style={{
          minWidth: "30px", height: "30px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #9370db, #c084f5)",
          color: "white",
          fontSize: "0.8rem", fontWeight: 800,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 3px 10px rgba(147,112,219,0.35)",
        }}>
          {index + 1}
        </span>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.05rem, 3vw, 1.25rem)",
          fontWeight: 700,
          color: "#2d1f5e",
          lineHeight: 1.3,
          paddingTop: "0.15rem",
        }}>
          {topic.heading}
        </h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        {paragraphs.map((p, i) => (
          <p key={i} style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{p}</p>
        ))}

        {topic.points?.length > 0 && (
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
            {topic.points.map((pt, i) => (
              <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.875rem", color: "#2d1f5e", lineHeight: 1.6 }}>
                <span style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: "var(--lilac-400)", flexShrink: 0, marginTop: "0.55rem",
                }} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}

        {topic.code && (
          <pre style={{
            background: "#1e1e2e",
            color: "#cdd6f4",
            borderRadius: "12px",
            padding: "1rem 1.15rem",
            fontSize: "0.8rem",
            lineHeight: 1.65,
            fontFamily: "'Fira Code', 'Fira Mono', 'Cascadia Code', monospace",
            border: "1.5px solid #313244",
            margin: 0,
          }}>
            <code>{topic.code}</code>
          </pre>
        )}

        {topic.terms?.length > 0 && (
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text-soft)", marginBottom: "0.5rem" }}>
              Key Terms
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 230px), 1fr))", gap: "0.6rem" }}>
              {topic.terms.map((t, i) => (
                // Remount when the toggle flips so revealed tiles hide again.
                <TermItem key={`${i}-${hideDefs}`} term={t.term} definition={t.definition} hidden={hideDefs} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Empty state used by both tabs ────────────────────────────────────────────
function EmptyState({ title, text }) {
  return (
    <div className="card anim-fade-up" style={{ padding: "3.5rem 2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.9rem" }}>
      <img src={SPARKLE} alt="" style={{ width: "70px", opacity: 0.65 }} className="anim-twinkle" />
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--text-mid)" }}>{title}</h3>
      <p style={{ fontSize: "0.85rem", color: "var(--text-soft)", maxWidth: "340px", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function ExamPage() {
  const { subjectId, examId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [hideDefs, setHideDefs] = useState(false);

  const subject = getSubjectById(subjectId);
  const exam = getExamById(subjectId, examId);

  if (!subject || !exam) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "64px" }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-mid)", marginBottom: "1rem" }}>
            Exam reviewer not found
          </p>
          <Link to={subject ? `/subject/${subjectId}` : "/"} style={{ textDecoration: "none" }}>
            <button className="btn-ghost">Go back</button>
          </Link>
        </div>
      </div>
    );
  }

  const stats = examStats(exam);
  const t = termStyle(exam.term);
  const notes = exam.notes || [];
  const questions = exam.questions || [];

  // Tab lives in the URL (?tab=notes|mock) so "back" from the mock exam lands on the right tab.
  const tabParam = searchParams.get("tab");
  const tab = tabParam === "notes" || tabParam === "mock" ? tabParam : (stats.topics > 0 || stats.questions === 0 ? "notes" : "mock");
  const setTab = (value) => setSearchParams({ tab: value }, { replace: true });

  const q = query.trim().toLowerCase();
  const visibleTopics = notes.map((topic, i) => ({ topic, i })).filter(({ topic }) => matchesTopic(topic, q));
  const types = [...new Set(questions.map((x) => x.type || "mc"))];

  function jumpTo(i) {
    document.getElementById(`topic-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const statChips = [
    { label: "Topics", value: stats.topics },
    { label: "Key Terms", value: stats.terms },
    { label: "Questions", value: stats.questions },
    ...(exam.timeLimit ? [{ label: "Minutes", value: exam.timeLimit }] : []),
  ];

  return (
    <div style={{ minHeight: "100vh", paddingTop: "64px", position: "relative", zIndex: 1 }}>
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* ── Header band ── */}
      <div style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)",
        padding: "2.5rem 1.25rem 1.75rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>
          <img
            src={FLOWER}
            alt=""
            aria-hidden="true"
            className="anim-float"
            style={{ position: "absolute", right: 0, top: "-20px", width: "clamp(70px, 14vw, 160px)", opacity: 0.85, pointerEvents: "none" }}
          />

          {/* Breadcrumb */}
          <div className="anim-slide-left" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            <Link to="/" style={{ color: "var(--text-mid)", textDecoration: "none", fontWeight: 600 }}>All Subjects</Link>
            <ChevRight />
            <Link to={`/subject/${subjectId}`} style={{ color: "var(--text-mid)", textDecoration: "none", fontWeight: 600 }}>{subject.code}</Link>
            <ChevRight />
            <span style={{ color: "var(--lilac-600)", fontWeight: 700 }}>{exam.title}</span>
          </div>

          <div className="anim-fade-up" style={{ maxWidth: "640px" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.25rem 0.75rem",
              borderRadius: "999px",
              fontSize: "0.68rem",
              fontWeight: 800,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              background: t.bg,
              color: t.color,
              border: `1.5px solid ${t.border}`,
              marginBottom: "0.6rem",
            }}>
              {exam.term} · {subject.code}
            </span>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              fontWeight: 700,
              color: "#2d1f5e",
              lineHeight: 1.2,
              marginBottom: "0.6rem",
            }}>
              {exam.title}
            </h1>

            <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
              {exam.description || `Read through the study notes for ${subject.name}, then test yourself with a timed mock exam.`}
            </p>
          </div>

          {/* Stats + pointers download */}
          <div className="anim-fade-up" style={{ animationDelay: "60ms", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
            {statChips.map((s) => (
              <div key={s.label} className="stat-chip">
                <span style={{ fontSize: "clamp(1.15rem, 4vw, 1.5rem)", fontWeight: 800, fontFamily: "'Playfair Display', serif", color: "#9370db", lineHeight: 1 }}>
                  {s.value}
                </span>
                <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-soft)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {s.label}
                </span>
              </div>
            ))}
            {exam.pointersPdf && (
              <a
                href={exam.pointersPdf}
                download
                style={{ textDecoration: "none" }}
              >
                <button className="btn-primary" style={{ padding: "0.75rem 1.4rem", fontSize: "0.85rem" }}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M8 2v8m0 0L4.75 6.75M8 10l3.25-3.25M2.75 12.5v.75c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75v-.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download Pointers (PDF)
                </button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.25rem 4rem" }}>
        {/* Tabs */}
        <div
          role="tablist"
          className="anim-fade-up"
          style={{
            animationDelay: "100ms",
            display: "inline-flex",
            padding: "4px",
            gap: "4px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.7)",
            border: "1.5px solid var(--border)",
            marginBottom: "1.5rem",
            maxWidth: "100%",
          }}
        >
          {[
            { key: "notes", label: "Study Notes", count: stats.topics },
            { key: "mock",  label: "Mock Exam",   count: stats.questions },
          ].map(({ key, label, count }) => {
            const active = tab === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(key)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.45rem",
                  padding: "0.55rem 1.1rem",
                  minHeight: "40px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  background: active ? "linear-gradient(135deg, #9370db, #b98aee)" : "transparent",
                  color: active ? "#fff" : "var(--text-mid)",
                  boxShadow: active ? "0 4px 12px rgba(147,112,219,0.35)" : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {label}
                <span style={{
                  fontSize: "0.68rem",
                  padding: "0.1rem 0.45rem",
                  borderRadius: "999px",
                  background: active ? "rgba(255,255,255,0.25)" : "var(--lilac-100)",
                  color: active ? "#fff" : "var(--lilac-600)",
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── STUDY NOTES TAB ── */}
        {tab === "notes" && (
          notes.length === 0 ? (
            <EmptyState
              title="No study notes yet"
              text="Notes for this exam will show up here once they're added."
            />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {/* Toolbar: search + hide definitions */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ position: "relative", flex: "1 1 260px", maxWidth: "420px" }}>
                  <svg
                    style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--lilac-400)" }}
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                  >
                    <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Search notes and terms..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>

                {stats.terms > 0 && (
                  <button
                    onClick={() => setHideDefs((v) => !v)}
                    aria-pressed={hideDefs}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.6rem",
                      padding: "0.6rem 1rem",
                      minHeight: "44px",
                      borderRadius: "14px",
                      background: "var(--lilac-50)",
                      border: "1.5px solid var(--lilac-200)",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#2d1f5e",
                    }}
                  >
                    <span style={{
                      width: "18px", height: "18px",
                      borderRadius: "6px",
                      background: hideDefs ? "linear-gradient(135deg, #9370db, #c084f5)" : "white",
                      border: hideDefs ? "none" : "1.5px solid var(--lilac-300)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {hideDefs && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                    Hide definitions (self-test)
                  </button>
                )}
              </div>

              {/* Topic jump list */}
              {notes.length > 2 && !q && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {notes.map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => jumpTo(i)}
                      style={{
                        padding: "0.35rem 0.8rem",
                        borderRadius: "999px",
                        border: "1.5px solid var(--lilac-200)",
                        background: "rgba(255,255,255,0.7)",
                        color: "var(--lilac-600)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        fontFamily: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      {i + 1}. {topic.heading}
                    </button>
                  ))}
                </div>
              )}

              {visibleTopics.length > 0 ? (
                visibleTopics.map(({ topic, i }, n) => (
                  <TopicCard key={i} topic={topic} index={i} hideDefs={hideDefs} delay={`${Math.min(n, 6) * 50}ms`} />
                ))
              ) : (
                <div className="card" style={{ padding: "2.5rem 2rem", textAlign: "center" }}>
                  <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-mid)", marginBottom: "0.3rem" }}>No topics match "{query}"</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-soft)" }}>Try a different word.</p>
                </div>
              )}
            </div>
          )
        )}

        {/* ── MOCK EXAM TAB ── */}
        {tab === "mock" && (
          questions.length === 0 ? (
            <EmptyState
              title="No mock exam yet"
              text="Questions for this mock exam will show up here once they're added."
            />
          ) : (
            <div className="card anim-fade-up" style={{ maxWidth: "560px", padding: "clamp(1.5rem, 5vw, 2.5rem)", textAlign: "center" }}>
              <img src={CANDY} alt="" className="anim-float" style={{ width: "90px", margin: "0 auto 1rem", display: "block" }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.3rem, 4vw, 1.75rem)", fontWeight: 700, color: "#2d1f5e", marginBottom: "0.4rem" }}>
                {exam.term} Mock Exam
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", fontWeight: 600, marginBottom: "0.85rem" }}>
                {questions.length} {questions.length === 1 ? "question" : "questions"}
                {exam.timeLimit ? ` · ${exam.timeLimit}-minute time limit` : " · untimed"}
              </p>

              {types.length > 0 && (
                <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                  {types.map((ty) => <TypeBadge key={ty} type={ty} />)}
                </div>
              )}

              <ul style={{
                listStyle: "none",
                textAlign: "left",
                padding: "1rem 1.25rem",
                borderRadius: "14px",
                background: "var(--lilac-50)",
                border: "1.5px solid var(--lilac-200)",
                display: "flex", flexDirection: "column", gap: "0.5rem",
                marginBottom: "1.5rem",
              }}>
                {[
                  exam.timeLimit
                    ? `The ${exam.timeLimit}-minute timer starts when you begin.`
                    : "There's no timer, so take your time.",
                  ...(exam.timeLimit ? ["When time runs out the exam ends, and unanswered questions count as wrong."] : []),
                  "You'll see the answer after each question and a full review at the end.",
                ].map((rule, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "var(--text-mid)", lineHeight: 1.55 }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--lilac-400)", flexShrink: 0, marginTop: "0.5rem" }} />
                    {rule}
                  </li>
                ))}
              </ul>

              <Link to={`/subject/${subjectId}/exam/${exam.id}/mock`} style={{ textDecoration: "none", display: "block" }}>
                <button className="btn-primary" style={{ width: "100%", padding: "0.9rem", fontSize: "0.95rem" }}>
                  Go to Mock Exam
                </button>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
