# QuizHub - Project Knowledge

What has been learned about this project while building the Exam Reviewer feature and the CC6 Finals reviewer. Read this before changing the site or making a new reviewer.

## 1. Project Overview

QuizHub is a study site for 3rd Year, 1st Semester (AY 2026-2027) subjects. It is deployed on Vercel at quizzes-hub.vercel.app and lives locally in `D:\QUIZZES HUB`.

- Stack: React 19, Vite 8, react-router-dom 7, Tailwind v4 (barely used).
- Styling: mostly inline styles plus shared classes in `src/index.css` (card, btn-primary, btn-ghost, badge-lilac / badge-pink / badge-blue, quiz-option, stat-chip, input-field, anim-* animations).
- Theme: lilac / pink glass cards, Playfair Display headings, Plus Jakarta Sans body, floating PNG decorations from `public/` ("Untitled design*.png").
- Lint: oxlint. One known pre-existing warning: unused `HEARTS` constant in QuizPage.jsx.

## 2. Routes and Pages

- `/` -> HomePage: subject grid with search and stat chips (subjects, reviewers, questions).
- `/subject/:subjectId` -> SubjectPage: sections in this order - Exam Reviewers, Reviewer Pointers, Quizzes, Flash Cards.
- `/subject/:subjectId/quiz/:reviewerId` -> QuizPage (quiz mode) for a reviewer from subjects.js.
- `/subject/:subjectId/exam/:examId` -> QuizPage with `mode="exam"` for a mock exam from exams.js.

## 3. Data Model

### subjects.js (quizzes and flash cards)
- 7 subjects: ea, cc6, oop, comprog3, ipt1, wd, sia. Each has id, code, name, description, color, reviewers[].
- A reviewer with questions is a Quiz. A reviewer with only a quizletLink and no questions is a Flash Card.
- File is about 360 KB of JSON-style data.

### exams.js (exam reviewers and PDF pointers)
- `exams[subjectId]` -> list of mock exams. Fields: id, term, title, description, timeLimit (minutes or null), questions[].
- Only Finals slots exist (Prelim and Midterm were removed by request). Empty exams show "Coming soon".
- `pointers[subjectId]` -> downloadable PDF reviewers. Fields: id, term, title, description, file (path under /public), pages.
- Helpers: getExamsBySubject, getExamById, getPointersBySubject, termStyle (term colors: Prelim blue, Midterm lilac, Pre-Finals orange, Finals pink).

### Question types (shared by quizzes and mock exams)
mc, true_false, identification, enumeration, output_tracing, fill_code, matching. Scoring is per item: a matching set or enumeration is worth one point per item. mc / true_false use `answer` as the option index; identification supports `altAnswers`; any question can have `explanation`.

## 4. Components

- Navbar: fixed top bar, logo, back-to-subjects button.
- SubjectCard: home page subject tile.
- ReviewerCard: quiz or Quizlet flash card tile.
- ExamCard: mock exam tile with term badge, time limit, question count, "Start Mock Exam" (or "Coming Soon").
- PointersCard: PDF reviewer tile with "View PDF" (new tab) and "Download".
- TypeBadge: question-type pill, shared by QuizPage.

## 5. Mock Exam Mode (QuizPage)

- QuizPage reads the exam with getExamById when `mode="exam"`, otherwise getReviewerById.
- The timer is optional: a "Use a N-minute timer" toggle on the start screen, off by default (user request). timeLimit only sets the length.
- When on, the timer counts down to a fixed end timestamp (endsAt) checked every 250 ms, so it stays accurate when a browser throttles timers in background tabs. A tick-by-tick setTimeout would drift.
- Timer pill turns amber at 5 minutes and red at 1 minute. When time runs out the exam ends, shows "Time's up", and unanswered questions count as wrong.

### Output tracing scoring
- A multi-line output is worth one point per line, like a 5-pt snippet on a written quiz. Lines are checked in order.
- Matching is exact per line (trimmed, inner spaces collapsed) and keeps case and symbols, so "1" does not match "-1". The old loose normalize() would have accepted it.
- Near misses get a self-grade choice: "Count all lines as correct" or "Keep x / N".
- Multi-line input: Enter adds a line, Ctrl+Enter checks. An optional `instruction` field replaces the default hint (used for DOM "what does the page display" items).
- Exit and "Back to <code>" return to the subject page.

## 6. CC6 Finals Exam Reviewer

- Subject: CC 6 - Information Management. Coverage: Chapters 5 to 8.
  - Chapter 5 - Database Query Languages (query language, procedural vs declarative, SQL sub-languages DQL/DDL/DCL/DML/TCL, NoSQL, GraphQL, SPARQL, PL/SQL, Prisma, MQL, use cases).
  - Chapter 6 - Data Organization and Architecture (data architecture, conceptual/logical/physical models, TOGAF and its 4 pillars, DAMA-DMBOK 2, Zachman, warehouse/mart/lake, data fabric vs mesh, data organization and classification).
  - Chapter 7 - Data Governance (definition, program scope, business drivers, goals and principles, operating models, data stewardship, data policies, data asset valuation, DG activities).
  - Chapter 8 - Special Purpose Databases (real-time, temporal, spatial and its operations, XML, graph, active, mobile) and Trends (serverless, cloud-native, embedding AI, data analytics, data mining).
- Mock exam: 179 multiple choice questions (Ch5 35, Ch6 39, Ch7 70, Ch8 35), 120-minute limit, answer letters balanced (45/45/44/45), each explanation names its chapter.
- Pointers PDF: `public/pointers/CC6_Finals_Pointers.pdf`, 7 pages.
- Sources: `Subject Exam Reviewers/CC6/source/` holds questions.py, pointers.py, make_pdf.py, make_exam.py. `cc6_finals.json` is the generated exam object.
- Gaps in the Chapter 8 slides: the cloud-native slide repeats the serverless text, multimedia databases have no definition, and the temporal database slide has a self-contradicting sentence. These were left out of the questions.

## 6b. WD Finals Exam Reviewer

- Subject: WD - Web Development. Coverage (from the instructor's announcement): Chapter 5 Advanced CSS (Part 1 and 2), Chapter 6 Introduction to JavaScript (Structure, Style, Interactivity, Variables, Types, DOM), Chapter 7 Web Hosting. Exam type: Multiple Choice and JavaScript Output Tracing.
- Modules used: Week 11 Advanced CSS Part 1 (hover, transition, transform, animation), Week 12 Part 2 (display, float, responsive design, media queries, flexbox, grid), Week 13 Intro to JavaScript, Week 14 DOM, Week 16 Web Hosting.
- Mock exam: 190 questions = 172 multiple choice (Ch5 78, Ch6 64, Ch7 30) + 18 output tracing (87 output lines); 259 scoreable items. Answer letters balanced 43/43/43/43.
- The 50 matching items of WD FT Quiz 1 and Quiz 2 are included as multiple choice with the quiz's wording, plus Quiz 1's enumeration as MC. The 3 Quiz 2 output-tracing snippets are included as-is.
- Output tracing follows the quiz's difficulty: about 5 console.log lines per snippet testing global vs local scope, nested functions, var hoisting, block scope, return vs console.log, string and number methods, arrays, const objects, null/undefined. Two DOM items ask what the page displays after a script runs.
- Answer keys are generated by running the code: Node for console snippets, jsdom for DOM snippets (with an innerText shim, since jsdom lacks it). Nothing is typed by hand.
- Pointers PDF: `public/pointers/WD_Finals_Pointers.pdf`, 6 pages, with a "Tips for Output Tracing" section.
- Sources: `Subject Exam Reviewers/WD/source/` (questions.py, pointers.py, make_pdf.py, make_exam.py). make_exam.py needs Node and a folder with jsdom installed.

## 6c. EA Finals Exam Reviewer

- Subject: EA - Enterprise Architecture. Coverage (instructor's announcement): Chapters 9-11. Exam type: MC and T/F.
- Modules: Week 9 Developing Future Architecture Views, Week 10 Developing an EA Management Plan, Lecture 11 The Role of Investment Planning and Project Management. The CPIC phase diagram on Lecture 11 slide 8 is an image (Planning, Selection, Control, Evaluation around the Project Management Plan) and was read from the picture.
- Mock exam: 146 questions = 97 multiple choice (Ch9 45, Ch10 36, Ch11 16) + 49 True or False (28 true, 21 false). MC letters balanced 24/24/24/25. Optional 90-minute timer.
- False statements change one key fact, and their explanation gives the correct fact.
- Distractors were lengthened until the correct option is the longest in only 37% of MC items (it started at 50%).
- Pointers PDF: `public/pointers/EA_Finals_Pointers.pdf`, 6 pages. Sources: `Subject Exam Reviewers/EA/source/`.

## 6d. OOP Finals Exam Reviewer

- Subject: OOP - Object Oriented Programming. Coverage: Modules 10-14 (Code Reuse and Class Hierarchy, Interfaces, Abstract Class and Interface, Polymorphism, Modularity). Exam type: multiple choice only.
- Mock exam: 123 multiple choice questions (M10 15, M11 18, M12 24, M13 29, M14 29), including 8 code-reading items. Letters balanced 31/31/30/31. Optional 90-minute timer.
- Code-reading items are Java programs compiled and run with javac/java by make_exam.py; the real output (lines joined with " / ") is the correct option.
- New engine feature: an mc question may include `code`, shown as a code block above the options and in the answer review.
- Module errors avoided: the Square area prints 9.0 (not 9) and the Manager pay 11000.0 (float), the overriding example output has a typo (C.c1()6 / D.d1()), and the visibility diagram's order (private, protected, default, public) conflicts with real Java, so no ranking question was made.
- Two tables are images in the PDFs (abstract class vs interface, Table 11-2; accessibility, Table 8-1); they were read from the page images.
- Distractors rewritten until the correct option is the longest in 36% of items (it started at 69%).
- Pointers PDF: `public/pointers/OOP_Finals_Pointers.pdf`, 6 pages. Sources: `Subject Exam Reviewers/OOP/source/`.

## 7. Reviewer-Making Rules (the user's preferences)

The user provides the modules per subject and decides the question types.

### Quiz / mock exam rules
- Do not turn learning objectives into questions.
- Leave out redundant or overcomplicated details that will not end up in the exam.
- Word usage must be exactly or very close to the module materials.
- Distractors should be real terms from the same chapter so they are plausible.
- Balance the correct answer letters, and avoid making the correct option the longest one (aim for about a third of items or less; write wrong options with the same length and style as the right one).
- Verify any code output by running the code (Node/jsdom for JavaScript, javac/java for Java) instead of trusting the module's printed output.
- When the user provides quizzes for the subject, include their items in the exam (same wording) and match the quiz's output-tracing difficulty.
- The user chooses the question types per subject (CC6: multiple choice; WD: multiple choice + output tracing; EA: multiple choice + True or False; OOP: multiple choice).
- Keep True/False roughly balanced (about 40-50% false) so guessing "True" does not pay off.

### Pointers PDF rules
- Times New Roman 12, proper indentation, black text only.
- A clear module summary explanation that is not text heavy.
- Compact all the modules into one document.
- Layout follows the user's "Review Material" PDFs (for example the IPT1 Week 6 and Week 7 reviews): centered bold title, italic subtitle, numbered part headings with a rule under them, short intro paragraphs, "Term - meaning" bullets. The review files are a format basis only; their content is unrelated to the modules.
- The PDF is shown on the site as a Reviewer Pointers card (like a Flash Card), not as on-page notes.

## 8. Workflow and Gotchas

- The site files are on the user's Windows PC. The local node_modules is a Windows install, so builds are verified in a separate Linux scratch copy (`npm ci` then `vite build` and `oxlint`).
- Times New Roman cannot be embedded unless the font files are copied into the project; the PDF currently uses the PDF-standard Times font, which Windows viewers display as Times New Roman.
- Deleting files in the project needs the user's permission each session.
- To publish changes: commit and push to github.com/superEnne/QUIZZES-HUB, which is connected to Vercel. Vercel then rebuilds the site.
- `vercel.json` rewrites every path to /index.html so direct links and refreshes (e.g. /subject/cc6) work; real files like PDFs are still served first.
- make_pdf.py is generic: it reads TITLE, SUBTITLE, FOOTER, PDF_TITLE, INTRO, CHAPTERS, COMPARISONS from the subject's pointers.py.
- graphify: `graphify query "<question>"` answers from graphify-out/graph.json; rebuild the graph after changing code or docs. `.graphifyignore` keeps build output, images, PDFs and raw quiz text out of the graph.
- To add a new subject's reviewer: write questions and pointers in a `source/` folder like CC6, generate the PDF and exam JSON, add the exam under `exams[subjectId]` and the PDF under `pointers[subjectId]`, put the PDF in `public/pointers/`.
