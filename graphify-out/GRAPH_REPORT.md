# Graph Report - QUIZZES HUB  (2026-11-16)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 324 nodes · 611 edges · 13 communities
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9978b57a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Quiz Engine, Grading, Parts and Paywall
- Pointers PDF Generator
- Subject Lock (decrypt and unlock)
- Dependencies and Build
- Subject Page, Exam and Pointer Cards
- Exam Builders, WD and Code Verification
- EA Finals Exam Content
- Lock Encryption Script
- OOP Finals Exam and PDF
- App Shell, Routing and Scroll
- Lint Rules
- Project Knowledge and Deployment
- CC6 Finals Exam Content

## God Nodes (most connected - your core abstractions)
1. `QuizPage()` - 39 edges
2. `react-router-dom` - 11 edges
3. `unlockSubject()` - 10 edges
4. `SubjectPage()` - 10 edges
5. `App()` - 10 edges
6. `OOP Finals mock exam (123 MC incl. 8 code items)` - 10 edges
7. `tryResumeUnlock()` - 9 edges
8. `WD Finals mock exam (172 MC + 18 output tracing)` - 9 edges
9. `Rule` - 8 edges
10. `getSubjectById()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Generic pointers PDF builder` --semantically_similar_to--> `build()`  [INFERRED] [semantically similar]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Review Material layout (IPT1 Week 6/7)` --rationale_for--> `Rule`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Timer counts down to a fixed end time` --references--> `fmtClock()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/pages/QuizPage.jsx
- `Finals-only exam slots` --references--> `termStyle()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/data/exams.js
- `OOP output tracing items run with javac/java` --rationale_for--> `run_java()`  [EXTRACTED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/OOP/source/make_exam.py

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **EA reviewer build pipeline** — subject_exam_reviewers_ea_source_questions, subject_exam_reviewers_ea_source_pointers, subject_exam_reviewers_ea_source_make_exam, subject_exam_reviewers_ea_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Mock exam flow** — src_components_examcard_examcard, src_data_exams_getexambyid, src_pages_quizpage_quizpage, src_pages_quizpage_quizpage_update [EXTRACTED 1.00]
- **OOP reviewer build pipeline** — subject_exam_reviewers_oop_source_questions, subject_exam_reviewers_oop_source_pointers, subject_exam_reviewers_oop_source_make_exam, subject_exam_reviewers_oop_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Output tracing grading** — src_pages_quizpage_outputtracingquestion, src_pages_quizpage_squash, src_pages_quizpage_questionpoints, src_pages_quizpage_quizpage_handlenonmcanswer [EXTRACTED 1.00]
- **Reviewer build pipeline** — subject_exam_reviewers_cc6_source_questions, subject_exam_reviewers_cc6_source_pointers, subject_exam_reviewers_cc6_source_make_exam, subject_exam_reviewers_cc6_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **WD reviewer build pipeline** — subject_exam_reviewers_wd_source_questions, subject_exam_reviewers_wd_source_pointers, subject_exam_reviewers_wd_source_make_exam, subject_exam_reviewers_wd_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]

## Communities (13 total, 0 thin omitted)

### Community 0 - "Quiz Engine, Grading, Parts and Paywall"
Cohesion: 0.06
Nodes (46): Exam parts: take a finals mock exam by chapter/module, Joke paywall after 5 answers (GCash QR, 60 s, once per attempt), Seven question types, Quiz mode, TypeBadge(), TYPES, getReviewerById(), checkIdentAnswer() (+38 more)

### Community 1 - "Pointers PDF Generator"
Cohesion: 0.07
Nodes (14): Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, build(), bullets_for(), esc(), Rule, build(), bullets_for() (+6 more)

### Community 2 - "Subject Lock (decrypt and unlock)"
Cohesion: 0.15
Nodes (19): COMPROG3 Finals Exam Reviewer (Ch 6-8, VB.NET), Subject password lock (encrypted payload), LockGate(), submit(), SubjectCard(), getSubjectById(), subjects, decryptWithKeyBytes() (+11 more)

### Community 3 - "Dependencies and Build"
Cohesion: 0.10
Nodes (24): devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, @types/react@^19.2.17, @types/react-dom@^19.2.3, vite@^8.2.0, @vitejs/plugin-react@^6.0.4 (+16 more)

### Community 4 - "Subject Page, Exam and Pointer Cards"
Cohesion: 0.13
Nodes (19): Mock exam mode, Workflow for a new subject reviewer, Quiz vs Flash Card rule, ClockIcon(), ExamCard(), PointersCard(), ReviewerCard(), exams (+11 more)

### Community 5 - "Exam Builders, WD and Code Verification"
Cohesion: 0.12
Nodes (14): Tips for Output Tracing (pointers section), WD Ch 5 - Advanced CSS, WD Ch 6 - Introduction to JavaScript and DOM, WD Ch 7 - Web Hosting, WD Finals mock exam (172 MC + 18 output tracing), WD FT Quiz 1 and 2 items, WD Finals Pointers PDF (6 pages), build() (+6 more)

### Community 6 - "EA Finals Exam Content"
Cohesion: 0.24
Nodes (7): CPIC phase diagram read from slide image, EA Ch 10 - Developing an EA Management Plan, EA Ch 11 - Investment Planning and Project Management, EA Ch 9 - Developing Future Architecture Views, EA Finals mock exam (97 MC + 49 True/False), EA Finals Pointers PDF (6 pages), build()

### Community 7 - "Lock Encryption Script"
Cohesion: 0.11
Nodes (10): args, base, iv, manifest, outPath, pass, payload, salt (+2 more)

### Community 8 - "OOP Finals Exam and PDF"
Cohesion: 0.13
Nodes (11): OOP Finals mock exam (123 MC incl. 8 code items), OOP M10 - Code Reuse and Class Hierarchy, OOP M11 - Interfaces, OOP M12 - Abstract Class and Interface, OOP M13 - Polymorphism, OOP M14 - Modularity, OOP Finals Pointers PDF (6 pages), build() (+3 more)

### Community 9 - "App Shell, Routing and Scroll"
Cohesion: 0.19
Nodes (11): index.html app shell, dependencies, react@^19.2.8, react-dom@^19.2.8, react-router-dom@^7.18.2, react, react-dom, react-router-dom (+3 more)

### Community 10 - "Lint Rules"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 11 - "Project Knowledge and Deployment"
Cohesion: 0.22
Nodes (7): Project Knowledge (doc), graphify query and rebuild, Lilac / pink glass-card theme, QuizHub study site, Vercel deployment (quizzes-hub.vercel.app), COLORS, rewrites

### Community 12 - "CC6 Finals Exam Content"
Cohesion: 0.18
Nodes (10): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, build_questions() (+2 more)

## Knowledge Gaps
- **5 isolated node(s):** `PDF-standard Times font fallback`, `graphify query and rebuild`, `Chapter 8 slide gaps`, `CPIC phase diagram read from slide image`, `index.html app shell`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 85 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pointers` connect `Subject Page, Exam and Pointer Cards` to `Subject Lock (decrypt and unlock)`, `Exam Builders, WD and Code Verification`, `EA Finals Exam Content`, `OOP Finals Exam and PDF`, `CC6 Finals Exam Content`?**
  _High betweenness centrality (0.223) - this node is a cross-community bridge._
- **What connects `PDF-standard Times font fallback`, `graphify query and rebuild`, `Chapter 8 slide gaps` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine, Grading, Parts and Paywall` be split into smaller, more focused modules?**
  _Cohesion score 0.06187202538339503 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `App Shell, Routing and Scroll` to `Quiz Engine, Grading, Parts and Paywall`, `Subject Lock (decrypt and unlock)`, `Dependencies and Build`, `Subject Page, Exam and Pointer Cards`?**
  _High betweenness centrality (0.128) - this node is a cross-community bridge._
- **Should `Pointers PDF Generator` be split into smaller, more focused modules?**
  _Cohesion score 0.06901960784313725 - nodes in this community are weakly interconnected._
- **Why does `QuizPage()` connect `Quiz Engine, Grading, Parts and Paywall` to `App Shell, Routing and Scroll`, `Subject Lock (decrypt and unlock)`, `Subject Page, Exam and Pointer Cards`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Should `Subject Lock (decrypt and unlock)` be split into smaller, more focused modules?**
  _Cohesion score 0.1477832512315271 - nodes in this community are weakly interconnected._