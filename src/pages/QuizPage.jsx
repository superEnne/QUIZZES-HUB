import { useState } from "react";
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

function getGrade(pct) {
  if (pct >= 90) return { label: "Excellent!", color: "#22c55e", bg: "#dcfce7", border: "#86efac" };
  if (pct >= 75) return { label: "Good Job!", color: "#9370db", bg: "#f3eeff", border: "#c9b4f8" };
  if (pct >= 60) return { label: "Fair",       color: "#f59e0b", bg: "#fffbeb", border: "#fde68a" };
  return              { label: "Keep Practicing", color: "#f43f5e", bg: "#fff1f2", border: "#fecdd3" };
}

// ── Small breadcrumb arrow ───────────────────────────────────────────────────
function ChevRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function QuizPage() {
  const { subjectId, reviewerId } = useParams();
  const navigate = useNavigate();

  const subject  = getSubjectById(subjectId);
  const reviewer = getReviewerById(subjectId, reviewerId);

  const [quizState, setQuizState]           = useState(STATE.IDLE);
  const [shuffled, setShuffled]             = useState([]);
  const [current, setCurrent]               = useState(0);
  const [selected, setSelected]             = useState(null);
  const [revealed, setRevealed]             = useState(false);
  const [score, setScore]                   = useState(0);
  const [answers, setAnswers]               = useState([]);
  const [doShuffle, setDoShuffle]           = useState(true);

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
    setCurrent(0); setSelected(null); setRevealed(false); setScore(0); setAnswers([]);
    setQuizState(STATE.QUIZ);
  }

  function handleSelect(oi) {
    if (revealed) return;
    setSelected(oi);
    setRevealed(true);
    const q = shuffled[current];
    const ok = oi === q.answer;
    if (ok) setScore(s => s + 1);
    setAnswers(prev => [...prev, { question: q.question, selected: oi, correct: q.answer, isCorrect: ok, options: q.options }]);
  }

  function handleNext() {
    if (current + 1 >= shuffled.length) setQuizState(STATE.RESULT);
    else { setCurrent(c => c + 1); setSelected(null); setRevealed(false); }
  }

  const progress = shuffled.length > 0 ? ((current + (revealed ? 1 : 0)) / shuffled.length) * 100 : 0;
  const pct      = shuffled.length > 0 ? Math.round((score / shuffled.length) * 100) : 0;

  /* ─────────────────── START SCREEN ─────────────────── */
  if (quizState === STATE.IDLE) {
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
            {/* Illustration */}
            <img src={CANDY} alt="" className="anim-float" style={{ width: "100px", margin: "0 auto 1.25rem", display: "block" }} />

            {/* Code badge */}
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
            <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", fontWeight: 600, marginBottom: "1.75rem" }}>
              {questions.length} {questions.length === 1 ? "question" : "questions"} total
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

            {/* Start button */}
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
          {/* Score card */}
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
              You got <strong style={{ color: grade.color }}>{score}</strong> out of <strong style={{ color: grade.color }}>{shuffled.length}</strong> questions correct.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
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
              <div
                key={i}
                className="card anim-fade-up"
                style={{ padding: "1.25rem", animationDelay: `${i * 40}ms` }}
              >
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
                  <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#2d1f5e", lineHeight: 1.5 }}>{a.question}</p>
                </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ─────────────────── QUIZ SCREEN ─────────────────── */
  const q = shuffled[current];

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
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#9370db" }}>{score} correct</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question card */}
        <div key={current} className="card anim-scale-in" style={{ padding: "clamp(1.25rem, 4vw, 2rem)", marginBottom: "1rem" }}>
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

          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {q.options.map((opt, oi) => {
              let cls = "quiz-option";
              if (revealed) {
                if (oi === q.answer) cls += oi === selected ? " selected-correct" : " correct";
                else if (oi === selected) cls += " selected-wrong";
              }
              return (
                <button key={oi} className={cls} onClick={() => handleSelect(oi)} disabled={revealed}>
                  <span className="option-letter">{String.fromCharCode(65 + oi)}</span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback + Next */}
        {revealed && (
          <div className="anim-fade-up" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
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
            <button className="btn-primary" onClick={handleNext} style={{ padding: "0.7rem 1.75rem", fontSize: "0.875rem" }}>
              {current + 1 >= shuffled.length ? "See Results" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
