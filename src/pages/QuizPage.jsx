import { useState, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getSubjectById, getReviewerById } from "../data/subjects";

const SPARKLE = "/Untitled design (3).png";
const CANDY   = "/Untitled design (1).png";
const HEARTS  = "/Untitled design (2).png";

const STATE = { IDLE: "idle", QUIZ: "quiz", RESULT: "result" };

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * How many scoreable ITEMS a question is worth.
 * A 6-pair matching set is worth 6, an "enumerate 3" is worth 3, everything
 * else is worth 1. Scoring in items keeps every score a whole number and makes
 * "2 correct" mean 2 actual items, not a fraction of a question.
 */
function questionPoints(q) {
  const type = q.type || "mc";
  if (type === "matching")    return q.pairs?.length || 1;
  if (type === "enumeration") return q.minCount ?? q.count ?? q.items?.length ?? 1;
  return 1;
}

/** Total items in a set of questions. */
function totalPointsOf(qs) {
  return qs.reduce((sum, q) => sum + questionPoints(q), 0);
}

/** Safety net: scores are whole numbers now, but never print a long float. */
function fmtScore(n) {
  const rounded = Math.round((n + Number.EPSILON) * 100) / 100;
  if (Number.isInteger(rounded)) return String(rounded);
  return rounded.toFixed(2).replace(/0$/, "");
}

function getGrade(pct) {
  if (pct >= 90) return { label: "Excellent!", color: "#22c55e", bg: "#dcfce7", border: "#86efac" };
  if (pct >= 75) return { label: "Good Job!", color: "#9370db", bg: "#f3eeff", border: "#c9b4f8" };
  if (pct >= 60) return { label: "Fair",       color: "#f59e0b", bg: "#fffbeb", border: "#fde68a" };
  return              { label: "Keep Practicing", color: "#f43f5e", bg: "#fff1f2", border: "#fecdd3" };
}

/** Normalize a string for loose comparison */
function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9.]/g, " ").replace(/\s+/g, " ").trim();
}

/** Check if user's answer matches the correct answer (or any altAnswers) */
function checkIdentAnswer(userInput, question) {
  const userNorm = normalize(userInput);
  if (!userNorm) return false;
  const allAnswers = [question.answer, ...(question.altAnswers || [])];
  return allAnswers.some(ans => normalize(ans) === userNorm);
}

// ── Small breadcrumb arrow ───────────────────────────────────────────────────
function ChevRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─────────────── TYPE BADGE ──────────────────────────────────────────────────
function TypeBadge({ type }) {
  const map = {
    mc:             { label: "Multiple Choice", color: "#7c3aed", bg: "#f3e8ff" },
    identification: { label: "Identification",  color: "#0369a1", bg: "#e0f2fe" },
    enumeration:    { label: "Enumeration",     color: "#047857", bg: "#d1fae5" },
    output_tracing: { label: "Output Tracing",  color: "#b45309", bg: "#fef3c7" },
    fill_code:      { label: "Fill the Code",   color: "#be185d", bg: "#fce7f3" },
    matching:       { label: "Matching Type",   color: "#0e7490", bg: "#cffafe" },
  };
  const t = map[type] || map.mc;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "0.2rem 0.65rem",
      borderRadius: "999px",
      fontSize: "0.68rem", fontWeight: 800,
      letterSpacing: "0.06em", textTransform: "uppercase",
      background: t.bg, color: t.color,
      border: `1.5px solid ${t.color}22`,
    }}>
      {t.label}
    </span>
  );
}

// ─────────────── IDENTIFICATION QUESTION ────────────────────────────────────
function IdentificationQuestion({ q, onAnswer }) {
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selfGraded, setSelfGraded] = useState(null); // for after-reveal self-grade
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  function handleSubmit() {
    if (!input.trim() || revealed) return;
    const correct = checkIdentAnswer(input, q);
    setIsCorrect(correct);
    setRevealed(true);
    if (correct) onAnswer(true);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSubmit();
  }

  function handleSelfGrade(correct) {
    setSelfGraded(correct);
    onAnswer(correct);
  }

  const showSelfGrade = revealed && isCorrect === false && selfGraded === null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {/* Input area */}
      <div style={{ position: "relative" }}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={revealed}
          placeholder="Type your answer here…"
          style={{
            width: "100%",
            padding: "0.85rem 1rem",
            borderRadius: "12px",
            border: revealed
              ? `2px solid ${isCorrect ? "#86efac" : "#fca5a5"}`
              : "2px solid var(--lilac-200)",
            background: revealed
              ? (isCorrect ? "#f0fdf4" : "#fff1f2")
              : "white",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: revealed
              ? (isCorrect ? "#15803d" : "#dc2626")
              : "#2d1f5e",
            outline: "none",
            transition: "border-color 200ms, background 200ms",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Submit button (before reveal) */}
      {!revealed && (
        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!input.trim()}
          style={{ width: "100%", padding: "0.8rem", fontSize: "0.875rem" }}
        >
          Submit Answer
        </button>
      )}

      {/* Reveal panel */}
      {revealed && (
        <div style={{
          padding: "1rem 1.25rem",
          borderRadius: "14px",
          background: "#faf5ff",
          border: "1.5px solid var(--lilac-200)",
        }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text-soft)", marginBottom: "0.35rem" }}>
            Correct Answer
          </p>
          <p style={{ fontSize: "1rem", fontWeight: 700, color: "#2d1f5e", marginBottom: q.explanation ? "0.6rem" : 0 }}>
            {q.answer}
            {q.altAnswers?.length > 0 && (
              <span style={{ fontSize: "0.78rem", color: "var(--text-soft)", fontWeight: 500, marginLeft: "0.5rem" }}>
                (also: {q.altAnswers.join(", ")})
              </span>
            )}
          </p>
          {q.explanation && (
            <p style={{ fontSize: "0.8rem", color: "var(--text-mid)", lineHeight: 1.55 }}>{q.explanation}</p>
          )}
        </div>
      )}

      {/* Self-grade for wrong answers */}
      {showSelfGrade && (
        <div style={{
          padding: "0.85rem 1rem",
          borderRadius: "12px",
          background: "#fffbeb",
          border: "1.5px solid #fde68a",
          display: "flex", flexDirection: "column", gap: "0.5rem",
        }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#92400e" }}>
            Your answer wasn't an exact match — did you get it right?
          </p>
          <p style={{ fontSize: "0.8rem", color: "#92400e", fontStyle: "italic" }}>Your answer: "{input}"</p>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
            <button
              onClick={() => handleSelfGrade(true)}
              style={{
                flex: 1, padding: "0.6rem", borderRadius: "10px",
                background: "#dcfce7", border: "1.5px solid #86efac",
                color: "#15803d", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer",
              }}
            >
              I got it right
            </button>
            <button
              onClick={() => handleSelfGrade(false)}
              style={{
                flex: 1, padding: "0.6rem", borderRadius: "10px",
                background: "#fee2e2", border: "1.5px solid #fca5a5",
                color: "#dc2626", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer",
              }}
            >
              I got it wrong
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────── CODE BLOCK ─────────────────────────────────────────────────
function CodeBlock({ code }) {
  return (
    <pre style={{
      background: "#1e1e2e",
      color: "#cdd6f4",
      borderRadius: "12px",
      padding: "1rem 1.15rem",
      fontSize: "0.8rem",
      lineHeight: 1.65,
      overflowX: "auto",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      fontFamily: "'Fira Code', 'Fira Mono', 'Cascadia Code', monospace",
      border: "1.5px solid #313244",
      margin: 0,
    }}>
      <code>{code}</code>
    </pre>
  );
}

// ─────────────── OUTPUT TRACING QUESTION ────────────────────────────────────
function OutputTracingQuestion({ q, onAnswer }) {
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selfGraded, setSelfGraded] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  function handleSubmit() {
    if (!input.trim() || revealed) return;
    const correct = checkIdentAnswer(input, q);
    setIsCorrect(correct);
    setRevealed(true);
    if (correct) onAnswer(true);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  function handleSelfGrade(correct) {
    setSelfGraded(correct);
    onAnswer(correct);
  }

  const showSelfGrade = revealed && isCorrect === false && selfGraded === null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {/* Code to trace */}
      <CodeBlock code={q.code} />

      {/* Instruction chip */}
      <div style={{
        padding: "0.55rem 0.85rem",
        borderRadius: "10px",
        background: "#fef3c7",
        border: "1.5px solid #fde68a",
        fontSize: "0.78rem",
        color: "#92400e",
        fontWeight: 600,
      }}>
        Type exactly what this code prints to the console.
      </div>

      {/* Input */}
      <textarea
        ref={inputRef}
        rows={q.answer.includes("\n") ? 2 : 1}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={revealed}
        placeholder={q.answer.includes("\n") ? "Type output (use Shift+Enter for new line)..." : "Type the output here…"}
        style={{
          width: "100%",
          padding: "0.85rem 1rem",
          borderRadius: "12px",
          border: revealed
            ? `2px solid ${isCorrect ? "#86efac" : "#fca5a5"}`
            : "2px solid #fde68a",
          background: revealed ? (isCorrect ? "#f0fdf4" : "#fff1f2") : "white",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: revealed ? (isCorrect ? "#15803d" : "#dc2626") : "#2d1f5e",
          outline: "none",
          transition: "border-color 200ms, background 200ms",
          boxSizing: "border-box",
          fontFamily: "'Fira Code', 'Fira Mono', monospace",
          resize: "vertical",
          minHeight: "48px",
        }}
      />

      {/* Submit button */}
      {!revealed && (
        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!input.trim()}
          style={{ width: "100%", padding: "0.8rem", fontSize: "0.875rem" }}
        >
          Check Output
        </button>
      )}

      {/* Answer reveal panel */}
      {revealed && (
        <div style={{
          padding: "1rem 1.25rem",
          borderRadius: "14px",
          background: "#faf5ff",
          border: "1.5px solid var(--lilac-200)",
        }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text-soft)", marginBottom: "0.35rem" }}>
            Expected Output
          </p>
          <p style={{
            fontSize: "1rem", fontWeight: 700, color: "#2d1f5e",
            marginBottom: q.explanation ? "0.6rem" : 0,
            fontFamily: "'Fira Code', 'Fira Mono', monospace",
            whiteSpace: "pre-wrap",
          }}>
            {q.answer}
            {q.altAnswers?.length > 0 && (
              <span style={{ fontSize: "0.78rem", color: "var(--text-soft)", fontWeight: 500, marginLeft: "0.5rem" }}>
                (also: {q.altAnswers.join(", ")})
              </span>
            )}
          </p>
          {q.explanation && (
            <p style={{ fontSize: "0.8rem", color: "var(--text-mid)", lineHeight: 1.55 }}>{q.explanation}</p>
          )}
        </div>
      )}

      {/* Self-grade fallback */}
      {showSelfGrade && (
        <div style={{
          padding: "0.85rem 1rem", borderRadius: "12px",
          background: "#fffbeb", border: "1.5px solid #fde68a",
          display: "flex", flexDirection: "column", gap: "0.5rem",
        }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#92400e" }}>
            Your answer wasn't an exact match — did you get it right?
          </p>
          <p style={{ fontSize: "0.8rem", color: "#92400e", fontStyle: "italic" }}>Your answer: "{input}"</p>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
            <button
              onClick={() => handleSelfGrade(true)}
              style={{ flex: 1, padding: "0.6rem", borderRadius: "10px", background: "#dcfce7", border: "1.5px solid #86efac", color: "#15803d", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}
            >I got it right</button>
            <button
              onClick={() => handleSelfGrade(false)}
              style={{ flex: 1, padding: "0.6rem", borderRadius: "10px", background: "#fee2e2", border: "1.5px solid #fca5a5", color: "#dc2626", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}
            >I got it wrong</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────── FILL CODE QUESTION ─────────────────────────────────────────
function FillCodeQuestion({ q, onAnswer }) {
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selfGraded, setSelfGraded] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  function handleSubmit() {
    if (!input.trim() || revealed) return;
    const correct = checkIdentAnswer(input, q);
    setIsCorrect(correct);
    setRevealed(true);
    if (correct) onAnswer(true);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSubmit();
  }

  function handleSelfGrade(correct) {
    setSelfGraded(correct);
    onAnswer(correct);
  }

  const showSelfGrade = revealed && isCorrect === false && selfGraded === null;

  // Build the filled-in code to show on reveal
  const filledCode = q.code.replace("____", `[${q.answer}]`);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {/* Code with blank */}
      <CodeBlock code={q.code} />

      {/* Instruction chip */}
      <div style={{
        padding: "0.55rem 0.85rem",
        borderRadius: "10px",
        background: "#fce7f3",
        border: "1.5px solid #f9a8d4",
        fontSize: "0.78rem",
        color: "#9d174d",
        fontWeight: 600,
      }}>
        Type the missing keyword or value to fill the blank (____)
      </div>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={revealed}
        placeholder="Type the missing word…"
        style={{
          width: "100%",
          padding: "0.85rem 1rem",
          borderRadius: "12px",
          border: revealed
            ? `2px solid ${isCorrect ? "#86efac" : "#fca5a5"}`
            : "2px solid #f9a8d4",
          background: revealed ? (isCorrect ? "#f0fdf4" : "#fff1f2") : "white",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: revealed ? (isCorrect ? "#15803d" : "#dc2626") : "#2d1f5e",
          outline: "none",
          transition: "border-color 200ms, background 200ms",
          boxSizing: "border-box",
          fontFamily: "'Fira Code', 'Fira Mono', monospace",
        }}
      />

      {/* Submit button */}
      {!revealed && (
        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!input.trim()}
          style={{ width: "100%", padding: "0.8rem", fontSize: "0.875rem" }}
        >
          Submit Answer
        </button>
      )}

      {/* Answer reveal — show filled-in code */}
      {revealed && (
        <div style={{
          padding: "1rem 1.25rem",
          borderRadius: "14px",
          background: "#faf5ff",
          border: "1.5px solid var(--lilac-200)",
        }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text-soft)", marginBottom: "0.5rem" }}>
            Answer: <span style={{ color: "#be185d", fontFamily: "'Fira Code', monospace", fontSize: "0.85rem" }}>{q.answer}</span>
            {q.altAnswers?.length > 0 && (
              <span style={{ fontSize: "0.75rem", color: "var(--text-soft)", fontWeight: 500, marginLeft: "0.5rem" }}>
                (also: {q.altAnswers.join(", ")})
              </span>
            )}
          </p>
          <CodeBlock code={filledCode} />
          {q.explanation && (
            <p style={{ fontSize: "0.8rem", color: "var(--text-mid)", lineHeight: 1.55, marginTop: "0.6rem" }}>{q.explanation}</p>
          )}
        </div>
      )}

      {/* Self-grade fallback */}
      {showSelfGrade && (
        <div style={{
          padding: "0.85rem 1rem", borderRadius: "12px",
          background: "#fffbeb", border: "1.5px solid #fde68a",
          display: "flex", flexDirection: "column", gap: "0.5rem",
        }}>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#92400e" }}>
            Your answer wasn't an exact match — did you get it right?
          </p>
          <p style={{ fontSize: "0.8rem", color: "#92400e", fontStyle: "italic" }}>Your answer: "{input}"</p>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
            <button
              onClick={() => handleSelfGrade(true)}
              style={{ flex: 1, padding: "0.6rem", borderRadius: "10px", background: "#dcfce7", border: "1.5px solid #86efac", color: "#15803d", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}
            >I got it right</button>
            <button
              onClick={() => handleSelfGrade(false)}
              style={{ flex: 1, padding: "0.6rem", borderRadius: "10px", background: "#fee2e2", border: "1.5px solid #fca5a5", color: "#dc2626", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}
            >I got it wrong</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────── ENUMERATION QUESTION ───────────────────────────────────────
function EnumerationQuestion({ q, onAnswer }) {
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState(() => q.items.map(() => false));
  const [graded, setGraded] = useState(false);

  function handleReveal() {
    setRevealed(true);
  }

  function toggleItem(i) {
    if (!revealed || graded) return;
    setChecked(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }

  function handleSubmit() {
    // Guard: without this, tapping "I'm done grading" more than once scored the
    // question again each time (and duplicated it in the answer review).
    if (graded) return;
    setGraded(true);
    const required = q.minCount ?? q.count;
    // One point per item you knew, capped at the number required.
    const gotCount = Math.min(checked.filter(Boolean).length, required);
    onAnswer({
      correct: gotCount >= required,
      scoreDelta: gotCount,
      correctCount: gotCount,
      totalCount: required,
    });
  }

  const checkedCount = checked.filter(Boolean).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {/* Required count info */}
      <div style={{
        padding: "0.75rem 1rem",
        borderRadius: "12px",
        background: "var(--lilac-50)",
        border: "1.5px solid var(--lilac-200)",
        fontSize: "0.8rem",
        color: "var(--text-mid)",
        fontWeight: 600,
      }}>
        Recall <strong style={{ color: "#7c3aed" }}>{q.minCount ?? q.count}</strong> item{(q.minCount ?? q.count) !== 1 ? "s" : ""}
        {q.minCount && q.items.length > q.count && ` (from ${q.items.length} possible)`}
      </div>

      {/* Reveal button */}
      {!revealed && (
        <button
          className="btn-primary"
          onClick={handleReveal}
          style={{ width: "100%", padding: "0.8rem", fontSize: "0.875rem" }}
        >
          Reveal Answers
        </button>
      )}

      {/* Items list */}
      {revealed && (
        <>
          <div style={{
            padding: "0.75rem 1rem",
            borderRadius: "12px",
            background: "#fffbeb",
            border: "1.5px solid #fde68a",
            fontSize: "0.8rem",
            color: "#92400e",
            fontWeight: 600,
          }}>
            Check off the items you knew — then tap "I'm done grading".
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {q.items.map((item, i) => (
              <button
                key={i}
                onClick={() => toggleItem(i)}
                style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  background: checked[i] ? "#f0fdf4" : "#faf5ff",
                  border: `1.5px solid ${checked[i] ? "#86efac" : "var(--lilac-200)"}`,
                  textAlign: "left", cursor: "pointer",
                  transition: "all 180ms",
                }}
              >
                <span style={{
                  width: "22px", height: "22px",
                  borderRadius: "6px",
                  background: checked[i] ? "linear-gradient(135deg, #22c55e, #4ade80)" : "white",
                  border: checked[i] ? "none" : "1.5px solid var(--lilac-300)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "all 180ms",
                }}>
                  {checked[i] && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <span style={{ fontSize: "0.875rem", fontWeight: checked[i] ? 700 : 500, color: checked[i] ? "#15803d" : "#2d1f5e" }}>
                  {item}
                </span>
              </button>
            ))}
          </div>

          {q.explanation && (
            <div style={{
              padding: "0.75rem 1rem",
              borderRadius: "12px",
              background: "#faf5ff",
              border: "1.5px solid var(--lilac-200)",
              fontSize: "0.8rem",
              color: "var(--text-mid)",
              lineHeight: 1.55,
            }}>
              {q.explanation}
            </div>
          )}

          <div className="quiz-action-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-mid)" }}>
              {checkedCount} / {q.minCount ?? q.count} checked
            </span>
            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={graded}
              style={{ padding: "0.7rem 1.5rem", fontSize: "0.875rem" }}
            >
              {graded ? "Graded" : "I'm done grading"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ─────────────── MATCHING TYPE QUESTION ─────────────────────────────────────
function MatchingQuestion({ q, onAnswer }) {
  const [selections, setSelections] = useState(() => q.pairs.map(() => null));
  const [revealed, setRevealed] = useState(false);

  function selectOption(rowIndex, key) {
    if (revealed) return;
    setSelections(prev => {
      const next = [...prev];
      next[rowIndex] = key;
      return next;
    });
  }

  const allAnswered = selections.every(s => s !== null);

  function handleCheck() {
    if (revealed || !allAnswered) return;
    setRevealed(true);
    const total = q.pairs.length;
    const correctCount = q.pairs.reduce((acc, p, i) => acc + (selections[i] === p.correct ? 1 : 0), 0);
    onAnswer({
      correct: correctCount === total,
      // One point per correctly matched pair — 2 of 6 right scores 2, not 0.33.
      scoreDelta: correctCount,
      userSelections: selections,
      correctCount,
      totalCount: total,
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {/* Column B legend */}
      <div style={{
        padding: "0.85rem 1rem",
        borderRadius: "12px",
        background: "var(--lilac-50)",
        border: "1.5px solid var(--lilac-200)",
      }}>
        <p style={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-soft)", marginBottom: "0.5rem" }}>
          Column B
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          {q.rightOptions.map(opt => (
            <div key={opt.key} style={{ fontSize: "0.8rem", color: "#2d1f5e", display: "flex", gap: "0.5rem", lineHeight: 1.5 }}>
              <strong style={{ color: "#0e7490", minWidth: "1.3em", flexShrink: 0 }}>{opt.key}.</strong>
              <span>{opt.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instruction chip */}
      {!revealed && (
        <div style={{
          padding: "0.55rem 0.85rem",
          borderRadius: "10px",
          background: "#cffafe",
          border: "1.5px solid #a5f3fc",
          fontSize: "0.78rem",
          color: "#0e7490",
          fontWeight: 600,
        }}>
          Tap a letter next to each item in Column A to match it with Column B.
        </div>
      )}

      {/* Column A rows with selectable options */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {q.pairs.map((p, i) => {
          const sel = selections[i];
          const isRowCorrect = revealed && sel === p.correct;
          return (
            <div key={i} style={{
              padding: "0.75rem 0.9rem",
              borderRadius: "12px",
              background: revealed ? (isRowCorrect ? "#f0fdf4" : "#fff1f2") : "#faf5ff",
              border: `1.5px solid ${revealed ? (isRowCorrect ? "#86efac" : "#fca5a5") : "var(--lilac-200)"}`,
              transition: "all 180ms",
            }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2d1f5e", marginBottom: "0.55rem" }}>
                {i + 1}. {p.left}
              </p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {q.rightOptions.map(opt => {
                  const isSelected = sel === opt.key;
                  const showAsCorrect = revealed && opt.key === p.correct;
                  const showAsWrongSelected = revealed && isSelected && opt.key !== p.correct;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => selectOption(i, opt.key)}
                      disabled={revealed}
                      style={{
                        minWidth: "34px",
                        padding: "0.4rem 0.6rem",
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        cursor: revealed ? "default" : "pointer",
                        background: showAsCorrect ? "#22c55e" : showAsWrongSelected ? "#f43f5e" : isSelected ? "#0e7490" : "white",
                        color: (showAsCorrect || showAsWrongSelected || isSelected) ? "white" : "#0e7490",
                        border: `1.5px solid ${showAsCorrect ? "#22c55e" : showAsWrongSelected ? "#f43f5e" : isSelected ? "#0e7490" : "var(--lilac-200)"}`,
                        transition: "all 150ms",
                      }}
                    >
                      {opt.key}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Check button */}
      {!revealed && (
        <button
          className="btn-primary"
          onClick={handleCheck}
          disabled={!allAnswered}
          style={{ width: "100%", padding: "0.8rem", fontSize: "0.875rem" }}
        >
          Check Answers
        </button>
      )}

      {/* Result summary */}
      {revealed && (
        <div style={{
          padding: "0.85rem 1rem",
          borderRadius: "12px",
          background: "#faf5ff",
          border: "1.5px solid var(--lilac-200)",
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "#2d1f5e",
          textAlign: "center",
        }}>
          {q.pairs.filter((p, i) => selections[i] === p.correct).length} / {q.pairs.length} correct
          {q.explanation && (
            <p style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--text-mid)", marginTop: "0.5rem", lineHeight: 1.55 }}>
              {q.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────── MAIN QUIZ PAGE ──────────────────────────────────────────────
export default function QuizPage() {
  const { subjectId, reviewerId } = useParams();
  const navigate = useNavigate();

  const subject  = getSubjectById(subjectId);
  const reviewer = getReviewerById(subjectId, reviewerId);

  const [quizState, setQuizState] = useState(STATE.IDLE);
  const [shuffled, setShuffled]   = useState([]);
  const [current, setCurrent]     = useState(0);
  const [score, setScore]         = useState(0);
  const [answers, setAnswers]     = useState([]);
  const [doShuffle, setDoShuffle] = useState(true);

  // MC-specific state
  const [selected, setSelected]   = useState(null);
  const [revealed, setRevealed]   = useState(false);

  // Per-question answered flag (ident/enum self-report before next)
  const [qAnswered, setQAnswered] = useState(false);

  if (!subject || !reviewer) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "64px", padding: "6rem 1.25rem 2rem" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-mid)", marginBottom: "1rem" }}>Reviewer not found.</p>
          <Link to="/" style={{ textDecoration: "none" }}><button className="btn-ghost">Home</button></Link>
        </div>
      </div>
    );
  }

  const questions = reviewer.questions || [];

  function startQuiz() {
    setShuffled(doShuffle ? shuffleArray(questions) : [...questions]);
    setCurrent(0); setScore(0); setAnswers([]);
    setSelected(null); setRevealed(false); setQAnswered(false);
    setQuizState(STATE.QUIZ);
  }

  // Called by MC handler
  function handleMcSelect(oi) {
    if (revealed) return;
    setSelected(oi);
    setRevealed(true);
    const q = shuffled[current];
    const ok = oi === q.answer;
    if (ok) setScore(s => s + 1);
    setAnswers(prev => [...prev, {
      type: "mc",
      question: q.question,
      selected: oi,
      correct: q.answer,
      isCorrect: ok,
      options: q.options,
      explanation: q.explanation,
    }]);
    setQAnswered(true);
  }

  // Called by Identification, Enumeration, OutputTracing, FillCode (boolean),
  // and Matching (object: { correct, scoreDelta, userSelections, correctCount, totalCount })
  function handleNonMcAnswer(result) {
    const q = shuffled[current];
    const isObject = typeof result === "object" && result !== null;
    const isCorrect = isObject ? result.correct : result;
    const scoreDelta = isObject ? result.scoreDelta : (result ? 1 : 0);
    setScore(s => s + scoreDelta);
    setAnswers(prev => [...prev, {
      type: q.type,
      question: q.question,
      isCorrect,
      answer: q.answer,
      items: q.items,
      pairs: q.pairs,
      userSelections: isObject ? result.userSelections : undefined,
      correctCount: isObject ? result.correctCount : undefined,
      totalCount: isObject ? result.totalCount : undefined,
      code: q.code,
      explanation: q.explanation,
    }]);
    setQAnswered(true);
  }

  function handleNext() {
    if (current + 1 >= shuffled.length) {
      setQuizState(STATE.RESULT);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
      setQAnswered(false);
    }
  }

  const progress    = shuffled.length > 0 ? ((current + (qAnswered ? 1 : 0)) / shuffled.length) * 100 : 0;
  // Scored in items, not questions: a 6-pair matching set contributes 6.
  const totalPoints = totalPointsOf(shuffled);
  const pct         = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;

  /* ─────────────────── START SCREEN ─────────────────── */
  if (quizState === STATE.IDLE) {
    const types = [...new Set(questions.map(q => q.type || "mc"))];
    return (
      <div style={{ minHeight: "100vh", paddingTop: "64px", position: "relative", zIndex: 1 }}>
        <div className="blob blob-1" /><div className="blob blob-2" />

        <div style={{ maxWidth: "540px", margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
          {/* Breadcrumb */}
          <div className="anim-slide-left" style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", marginBottom: "1.5rem", color: "var(--text-soft)", flexWrap: "wrap" }}>
            <Link to="/" style={{ color: "var(--text-mid)", textDecoration: "none", fontWeight: 600 }}>Subjects</Link>
            <ChevRight />
            <Link to={`/subject/${subjectId}`} style={{ color: "var(--text-mid)", textDecoration: "none", fontWeight: 600 }}>{subject.code}</Link>
            <ChevRight />
            <span style={{ color: "var(--lilac-600)", fontWeight: 700 }}>{reviewer.title}</span>
          </div>

          <div className="card anim-fade-up" style={{ padding: "clamp(1.5rem, 5vw, 2.5rem)", textAlign: "center" }}>
            <img src={CANDY} alt="" className="anim-float" style={{ width: "100px", margin: "0 auto 1.25rem", display: "block" }} />
            <span className="badge badge-lilac" style={{ marginBottom: "0.85rem", display: "inline-flex" }}>{subject.code}</span>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 5vw, 2rem)",
              fontWeight: 700,
              color: "#2d1f5e",
              marginBottom: "0.5rem",
              lineHeight: 1.25,
            }}>
              {reviewer.title}
            </h1>

            {reviewer.description && (
              <p style={{ fontSize: "0.875rem", color: "var(--text-soft)", marginBottom: "0.4rem", lineHeight: 1.6 }}>
                {reviewer.description}
              </p>
            )}

            {/* Type badges */}
            {types.length > 0 && (
              <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                {types.map(t => <TypeBadge key={t} type={t} />)}
              </div>
            )}

            <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", fontWeight: 600, marginBottom: "1.75rem" }}>
              {questions.length} {questions.length === 1 ? "question" : "questions"} total
              {totalPointsOf(questions) !== questions.length && (
                <span style={{ color: "var(--text-soft)", fontWeight: 500 }}> · {totalPointsOf(questions)} scoreable items</span>
              )}
            </p>

            {/* Shuffle toggle */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.85rem",
              padding: "1rem 1.25rem",
              borderRadius: "14px",
              background: "var(--lilac-50)",
              border: "1.5px solid var(--lilac-200)",
              marginBottom: "1.5rem",
              textAlign: "left",
              cursor: "pointer",
            }} onClick={() => setDoShuffle(v => !v)}>
              <div style={{
                width: "20px", height: "20px",
                borderRadius: "6px",
                background: doShuffle ? "linear-gradient(135deg, #9370db, #c084f5)" : "white",
                border: doShuffle ? "none" : "1.5px solid var(--lilac-300)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                transition: "all 200ms",
              }}>
                {doShuffle && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#2d1f5e" }}>Shuffle Questions</p>
                <p style={{ fontSize: "0.775rem", color: "var(--text-soft)" }}>Randomize the order each time</p>
              </div>
            </div>

            {questions.length > 0 ? (
              <button className="btn-primary" onClick={startQuiz} style={{ width: "100%", padding: "0.9rem", fontSize: "0.95rem" }}>
                Start Quiz
              </button>
            ) : (
              <button className="btn-primary" disabled style={{ width: "100%", padding: "0.9rem", fontSize: "0.95rem" }}>
                No Questions Available
              </button>
            )}

            {reviewer.quizletLink && (
              <a href={reviewer.quizletLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block", marginTop: "0.75rem" }}>
                <button className="btn-ghost" style={{ width: "100%", padding: "0.8rem" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M5.5 2H2.5C2.22 2 2 2.22 2 2.5v9c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5V8.5M8 2h4v4M7 7L12 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Open in Quizlet
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────── RESULT SCREEN ─────────────────── */
  if (quizState === STATE.RESULT) {
    const grade = getGrade(pct);
    return (
      <div style={{ minHeight: "100vh", paddingTop: "64px", position: "relative", zIndex: 1 }}>
        <div className="blob blob-1" /><div className="blob blob-2" />
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2.5rem 1.25rem 4rem" }}>
          <div className="card anim-scale-in" style={{ padding: "2.5rem", textAlign: "center", marginBottom: "1.5rem" }}>
            <img src={SPARKLE} alt="" className="anim-twinkle" style={{ width: "80px", margin: "0 auto 1rem", display: "block" }} />
            <div style={{
              width: "100px", height: "100px",
              borderRadius: "50%",
              background: grade.bg,
              border: `2px solid ${grade.border}`,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.25rem",
              boxShadow: `0 0 30px ${grade.border}`,
            }}>
              <span style={{ fontSize: "1.75rem", fontWeight: 800, fontFamily: "'Playfair Display', serif", color: grade.color, lineHeight: 1 }}>
                {pct}%
              </span>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: grade.color }}>Score</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "#2d1f5e", marginBottom: "0.4rem" }}>
              {grade.label}
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", marginBottom: "1.75rem" }}>
              You got <strong style={{ color: grade.color }}>{fmtScore(score)}</strong> out of <strong style={{ color: grade.color }}>{totalPoints}</strong> items correct
              {totalPoints !== shuffled.length && <> across <strong style={{ color: grade.color }}>{shuffled.length}</strong> questions</>}.
            </p>
            <div className="result-actions" style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => setQuizState(STATE.IDLE)} style={{ padding: "0.75rem 2rem" }}>
                Try Again
              </button>
              <Link to={`/subject/${subjectId}`} style={{ textDecoration: "none" }}>
                <button className="btn-ghost" style={{ padding: "0.75rem 1.5rem" }}>
                  Back to {subject.code}
                </button>
              </Link>
            </div>
          </div>

          {/* Answer review */}
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#2d1f5e", marginBottom: "1rem" }}>
            Answer Review
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {answers.map((a, i) => (
              <div key={i} className="card anim-fade-up" style={{ padding: "1.25rem", animationDelay: `${i * 40}ms` }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                  <span style={{
                    minWidth: "26px", height: "26px",
                    borderRadius: "8px",
                    background: a.isCorrect ? "#dcfce7" : "#fee2e2",
                    color: a.isCorrect ? "#15803d" : "#dc2626",
                    fontSize: "0.72rem", fontWeight: 800,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    border: `1.5px solid ${a.isCorrect ? "#86efac" : "#fca5a5"}`,
                  }}>
                    {i + 1}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <TypeBadge type={a.type || "mc"} />
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#2d1f5e", lineHeight: 1.5, marginTop: "0.4rem" }}>{a.question}</p>
                  </div>
                </div>

                {/* MC review */}
                {a.type === "mc" && a.options && (
                  <div style={{ paddingLeft: "2.1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {a.options.map((opt, oi) => {
                      const isCorrect = oi === a.correct;
                      const isWrong   = oi === a.selected && !isCorrect;
                      return (
                        <div key={oi} style={{
                          fontSize: "0.8rem",
                          padding: "0.5rem 0.85rem",
                          borderRadius: "10px",
                          background: isCorrect ? "#f0fdf4" : isWrong ? "#fff1f2" : "#faf5ff",
                          border: `1px solid ${isCorrect ? "#86efac" : isWrong ? "#fca5a5" : "#e9d5ff"}`,
                          color: isCorrect ? "#166534" : isWrong ? "#991b1b" : "var(--text-soft)",
                          fontWeight: isCorrect || isWrong ? 700 : 400,
                        }}>
                          {isCorrect && "Correct: "}
                          {isWrong && "Your answer: "}
                          {opt}
                        </div>
                      );
                    })}
                    {a.explanation && (
                      <p style={{ fontSize: "0.78rem", color: "var(--text-soft)", marginTop: "0.4rem", lineHeight: 1.5, paddingLeft: "0.25rem" }}>
                        {a.explanation}
                      </p>
                    )}
                  </div>
                )}

                {/* Identification review */}
                {a.type === "identification" && (
                  <div style={{ paddingLeft: "2.1rem" }}>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-soft)", marginBottom: "0.35rem" }}>
                      Correct answer: <strong style={{ color: "#2d1f5e" }}>{a.answer}</strong>
                    </p>
                    {a.explanation && (
                      <p style={{ fontSize: "0.78rem", color: "var(--text-soft)", lineHeight: 1.5 }}>{a.explanation}</p>
                    )}
                  </div>
                )}

                {/* Enumeration review */}
                {a.type === "enumeration" && a.items && (
                  <div style={{ paddingLeft: "2.1rem" }}>
                    {a.totalCount != null && (
                      <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--lilac-700)", marginBottom: "0.5rem" }}>
                        {a.correctCount} / {a.totalCount} recalled
                      </p>
                    )}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "0.5rem" }}>
                      {a.items.map((item, ii) => (
                        <div key={ii} style={{ fontSize: "0.8rem", color: "#2d1f5e", display: "flex", gap: "0.4rem", alignItems: "center" }}>
                          <span style={{ color: "var(--lilac-600)", fontWeight: 800 }}>{ii + 1}.</span> {item}
                        </div>
                      ))}
                    </div>
                    {a.explanation && (
                      <p style={{ fontSize: "0.78rem", color: "var(--text-soft)", lineHeight: 1.5 }}>{a.explanation}</p>
                    )}
                  </div>
                )}

                {/* Output Tracing review */}
                {a.type === "output_tracing" && (
                  <div style={{ paddingLeft: "2.1rem" }}>
                    {a.code && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <pre style={{
                          background: "#1e1e2e", color: "#cdd6f4",
                          borderRadius: "10px", padding: "0.65rem 0.9rem",
                          fontSize: "0.72rem", lineHeight: 1.6,
                          overflowX: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word",
                          fontFamily: "'Fira Code', 'Fira Mono', monospace",
                          border: "1.5px solid #313244", margin: 0,
                        }}><code>{a.code}</code></pre>
                      </div>
                    )}
                    <p style={{ fontSize: "0.8rem", color: "var(--text-soft)", marginBottom: "0.35rem" }}>
                      Expected output: <strong style={{ color: "#2d1f5e", fontFamily: "'Fira Code', monospace", whiteSpace: "pre-wrap" }}>{a.answer}</strong>
                    </p>
                    {a.explanation && (
                      <p style={{ fontSize: "0.78rem", color: "var(--text-soft)", lineHeight: 1.5 }}>{a.explanation}</p>
                    )}
                  </div>
                )}

                {/* Fill Code review */}
                {a.type === "fill_code" && (
                  <div style={{ paddingLeft: "2.1rem" }}>
                    {a.code && (
                      <div style={{ marginBottom: "0.5rem" }}>
                        <pre style={{
                          background: "#1e1e2e", color: "#cdd6f4",
                          borderRadius: "10px", padding: "0.65rem 0.9rem",
                          fontSize: "0.72rem", lineHeight: 1.6,
                          overflowX: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word",
                          fontFamily: "'Fira Code', 'Fira Mono', monospace",
                          border: "1.5px solid #313244", margin: 0,
                        }}><code>{a.code.replace("____", `[${a.answer}]`)}</code></pre>
                      </div>
                    )}
                    <p style={{ fontSize: "0.8rem", color: "var(--text-soft)", marginBottom: "0.35rem" }}>
                      Answer: <strong style={{ color: "#be185d", fontFamily: "'Fira Code', monospace" }}>{a.answer}</strong>
                    </p>
                    {a.explanation && (
                      <p style={{ fontSize: "0.78rem", color: "var(--text-soft)", lineHeight: 1.5 }}>{a.explanation}</p>
                    )}
                  </div>
                )}

                {/* Matching review */}
                {a.type === "matching" && a.pairs && (
                  <div style={{ paddingLeft: "2.1rem" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-mid)", marginBottom: "0.5rem" }}>
                      {a.correctCount} / {a.totalCount} correct
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      {a.pairs.map((p, ii) => {
                        const userSel = a.userSelections?.[ii];
                        const ok = userSel === p.correct;
                        return (
                          <div key={ii} style={{
                            fontSize: "0.78rem",
                            padding: "0.4rem 0.65rem",
                            borderRadius: "8px",
                            background: ok ? "#f0fdf4" : "#fff1f2",
                            border: `1px solid ${ok ? "#86efac" : "#fca5a5"}`,
                            color: ok ? "#166534" : "#991b1b",
                          }}>
                            {ii + 1}. {p.left} — <strong>{userSel ?? "—"}</strong>
                            {!ok && <span style={{ color: "var(--text-soft)" }}> (correct: {p.correct})</span>}
                          </div>
                        );
                      })}
                    </div>
                    {a.explanation && (
                      <p style={{ fontSize: "0.78rem", color: "var(--text-soft)", lineHeight: 1.5, marginTop: "0.5rem" }}>{a.explanation}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────── QUIZ SCREEN ─────────────────── */
  const q = shuffled[current];
  const qType = q.type || "mc";

  return (
    <div style={{ minHeight: "100vh", paddingTop: "64px", position: "relative", zIndex: 1 }}>
      <div className="blob blob-1" /><div className="blob blob-2" />

      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem 1.25rem 4rem" }}>
        {/* Top bar */}
        <div className="anim-slide-left" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <div>
            <span className="badge badge-lilac" style={{ marginBottom: "0.25rem", display: "inline-flex" }}>{subject.code}</span>
            <p style={{ fontSize: "0.78rem", color: "var(--text-soft)", fontWeight: 500 }}>{reviewer.title}</p>
          </div>
          <button
            className="btn-ghost"
            style={{ padding: "0.5rem 1rem", fontSize: "0.78rem" }}
            onClick={() => {
              if (window.confirm("Exit quiz? Your progress will be lost.")) navigate(`/subject/${subjectId}`);
            }}
          >
            Exit
          </button>
        </div>

        {/* Progress */}
        <div className="anim-fade-in" style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-mid)" }}>
              Question {current + 1} <span style={{ color: "var(--text-soft)" }}>/ {shuffled.length}</span>
            </span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#9370db", whiteSpace: "nowrap" }}>
              {fmtScore(score)} <span style={{ color: "var(--text-soft)" }}>/ {totalPoints}</span> correct
            </span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question card */}
        <div key={current} className="card anim-scale-in" style={{ padding: "clamp(1.25rem, 4vw, 2rem)", marginBottom: "1rem" }}>
          {/* Type badge inside card */}
          <div style={{ marginBottom: "0.75rem" }}>
            <TypeBadge type={qType} />
          </div>

          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1rem, 3.5vw, 1.2rem)",
            fontWeight: 700,
            color: "#2d1f5e",
            lineHeight: 1.55,
            marginBottom: "1.5rem",
          }}>
            {q.question}
          </p>

          {/* ── Multiple Choice ── */}
          {qType === "mc" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {q.options.map((opt, oi) => {
                let cls = "quiz-option";
                if (revealed) {
                  if (oi === q.answer) cls += oi === selected ? " selected-correct" : " correct";
                  else if (oi === selected) cls += " selected-wrong";
                }
                return (
                  <button key={oi} className={cls} onClick={() => handleMcSelect(oi)} disabled={revealed}>
                    <span className="option-letter">{String.fromCharCode(65 + oi)}</span>
                    {opt}
                  </button>
                );
              })}
              {revealed && q.explanation && (
                <div style={{
                  marginTop: "0.5rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  background: "#faf5ff",
                  border: "1.5px solid var(--lilac-200)",
                  fontSize: "0.8rem",
                  color: "var(--text-mid)",
                  lineHeight: 1.55,
                }}>
                  {q.explanation}
                </div>
              )}
            </div>
          )}

          {/* ── Identification ── */}
          {qType === "identification" && (
            <IdentificationQuestion
              key={current}
              q={q}
              onAnswer={(correct) => handleNonMcAnswer(correct)}
            />
          )}

          {/* ── Enumeration ── */}
          {qType === "enumeration" && (
            <EnumerationQuestion
              key={current}
              q={q}
              onAnswer={(correct) => handleNonMcAnswer(correct)}
            />
          )}

          {/* ── Output Tracing ── */}
          {qType === "output_tracing" && (
            <OutputTracingQuestion
              key={current}
              q={q}
              onAnswer={(correct) => handleNonMcAnswer(correct)}
            />
          )}

          {/* ── Fill Code ── */}
          {qType === "fill_code" && (
            <FillCodeQuestion
              key={current}
              q={q}
              onAnswer={(correct) => handleNonMcAnswer(correct)}
            />
          )}

          {/* ── Matching Type ── */}
          {qType === "matching" && (
            <MatchingQuestion
              key={current}
              q={q}
              onAnswer={(result) => handleNonMcAnswer(result)}
            />
          )}
        </div>

        {/* Next button / MC feedback bar */}
        {qAnswered && (
          <div className="quiz-action-row anim-fade-up" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            {qType === "mc" && (
              <div style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.6rem 1rem",
                borderRadius: "12px",
                background: selected === q.answer ? "#dcfce7" : "#fee2e2",
                color: selected === q.answer ? "#15803d" : "#dc2626",
                border: `1.5px solid ${selected === q.answer ? "#86efac" : "#fca5a5"}`,
                fontSize: "0.875rem",
                fontWeight: 700,
              }}>
                {selected === q.answer
                  ? <><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> Correct</>
                  : <><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> Incorrect</>
                }
              </div>
            )}
            {qType !== "mc" && <div />}
            <button className="btn-primary" onClick={handleNext} style={{ padding: "0.7rem 1.75rem", fontSize: "0.875rem" }}>
              {current + 1 >= shuffled.length ? "See Results" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
