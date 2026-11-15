import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SubjectPage from "./pages/SubjectPage";
import QuizPage from "./pages/QuizPage";
import ExamPage from "./pages/ExamPage";

export default function App() {
  return (
    <BrowserRouter>
      {/* Animated background orbs */}
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="bg-orb bg-orb-2" aria-hidden="true" />
      <div className="bg-orb bg-orb-3" aria-hidden="true" />

      <Navbar />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/subject/:subjectId/quiz/:reviewerId" element={<QuizPage />} />
          <Route path="/subject/:subjectId/exam/:examId" element={<ExamPage />} />
          <Route path="/subject/:subjectId/exam/:examId/mock" element={<QuizPage mode="exam" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
