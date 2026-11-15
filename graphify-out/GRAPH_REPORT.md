# Graph Report - QUIZZES HUB  (2026-11-15)

## Corpus Check
- 23 files · ~65,040 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 2)

## Summary
- 173 nodes · 291 edges · 9 communities
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Quiz Engine and Question Types
- CC6 Finals Exam Content
- Pointers PDF Generator
- App Shell and Deployment
- Subject Page Sections
- Dependencies and Tooling
- Typed-Answer Questions
- Build and Lint Scripts
- Lint Rules

## God Nodes (most connected - your core abstractions)
1. `QuizPage()` - 25 edges
2. `SubjectPage()` - 11 edges
3. `react-router-dom` - 9 edges
4. `Rule` - 8 edges
5. `CC6 Finals Pointers PDF (7 pages)` - 8 edges
6. `App()` - 7 edges
7. `CC6 Finals mock exam (179 MC, 120 min)` - 7 edges
8. `build()` - 6 edges
9. `ExamCard()` - 6 edges
10. `PointersCard()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Finals-only exam slots` --references--> `termStyle()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/data/exams.js
- `Review Material layout (IPT1 Week 6/7)` --rationale_for--> `Rule`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `How to add an exam reviewer (guide)` --references--> `SubjectPage()`  [INFERRED]
  Subject Exam Reviewers/HOW TO ADD AN EXAM REVIEWER.txt → src/pages/SubjectPage.jsx
- `Quiz writing rules` --rationale_for--> `build_questions()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_exam.py
- `CC6 Finals Pointers PDF (7 pages)` --references--> `build()`  [EXTRACTED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Reviewer build pipeline** — subject_exam_reviewers_cc6_source_questions, subject_exam_reviewers_cc6_source_pointers, subject_exam_reviewers_cc6_source_make_exam, subject_exam_reviewers_cc6_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Mock exam flow** — src_components_examcard_examcard, src_data_exams_getexambyid, src_pages_quizpage_quizpage, src_pages_quizpage_quizpage_update [EXTRACTED 1.00]

## Communities (9 total, 0 thin omitted)

### Community 0 - "Quiz Engine and Question Types"
Cohesion: 0.10
Nodes (19): Seven question types, Quiz mode, TypeBadge(), TYPES, getReviewerById(), ChevRight(), EnumerationQuestion(), fmtClock() (+11 more)

### Community 1 - "CC6 Finals Exam Content"
Cohesion: 0.11
Nodes (16): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, Workflow for a new subject reviewer (+8 more)

### Community 2 - "Pointers PDF Generator"
Cohesion: 0.11
Nodes (6): Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, build(), bullets_for(), esc(), Rule

### Community 3 - "App Shell and Deployment"
Cohesion: 0.14
Nodes (17): Project Knowledge (doc), Lilac / pink glass-card theme, QuizHub study site, Vercel deployment (quizzes-hub.vercel.app), index.html app shell, dependencies, react@^19.2.8, react-dom@^19.2.8 (+9 more)

### Community 4 - "Subject Page Sections"
Cohesion: 0.19
Nodes (14): Mock exam mode, Quiz vs Flash Card rule, ClockIcon(), ExamCard(), PointersCard(), ReviewerCard(), getExamById(), getExamsBySubject() (+6 more)

### Community 5 - "Dependencies and Tooling"
Cohesion: 0.14
Nodes (19): devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, @types/react@^19.2.17, @types/react-dom@^19.2.3, vite@^8.2.0, @vitejs/plugin-react@^6.0.4 (+11 more)

### Community 6 - "Typed-Answer Questions"
Cohesion: 0.17
Nodes (12): checkIdentAnswer(), CodeBlock(), FillCodeQuestion(), handleKeyDown(), handleSubmit(), IdentificationQuestion(), handleKeyDown(), handleSubmit() (+4 more)

### Community 7 - "Build and Lint Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 8 - "Lint Rules"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

## Knowledge Gaps
- **5 isolated node(s):** `Project Knowledge (doc)`, `Vercel deployment (quizzes-hub.vercel.app)`, `Chapter 8 slide gaps`, `PDF-standard Times font fallback`, `index.html app shell`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 49 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react-router-dom` connect `App Shell and Deployment` to `Quiz Engine and Question Types`, `Subject Page Sections`, `Dependencies and Tooling`?**
  _High betweenness centrality (0.227) - this node is a cross-community bridge._
- **What connects `Project Knowledge (doc)`, `Vercel deployment (quizzes-hub.vercel.app)`, `Chapter 8 slide gaps` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine and Question Types` be split into smaller, more focused modules?**
  _Cohesion score 0.1010752688172043 - nodes in this community are weakly interconnected._
- **Why does `CC6 Finals Pointers PDF (7 pages)` connect `CC6 Finals Exam Content` to `Pointers PDF Generator`, `Subject Page Sections`?**
  _High betweenness centrality (0.179) - this node is a cross-community bridge._
- **Should `CC6 Finals Exam Content` be split into smaller, more focused modules?**
  _Cohesion score 0.10666666666666667 - nodes in this community are weakly interconnected._
- **Why does `SubjectPage()` connect `Subject Page Sections` to `CC6 Finals Exam Content`, `App Shell and Deployment`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **Should `Pointers PDF Generator` be split into smaller, more focused modules?**
  _Cohesion score 0.10507246376811594 - nodes in this community are weakly interconnected._