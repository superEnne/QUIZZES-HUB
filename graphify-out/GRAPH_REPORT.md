# Graph Report - QUIZZES HUB  (2026-11-15)

## Corpus Check
- 28 files · ~81,252 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 2)

## Summary
- 213 nodes · 376 edges · 9 communities
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Quiz Engine and Grading
- Pointers PDF Generator
- WD Finals Exam Content
- Dependencies and Tooling
- App Shell and Deployment
- Subject Page Sections
- CC6 Finals Exam Content
- Build and Lint Scripts
- Lint Rules

## God Nodes (most connected - your core abstractions)
1. `QuizPage()` - 25 edges
2. `SubjectPage()` - 11 edges
3. `react-router-dom` - 9 edges
4. `WD Finals mock exam (172 MC + 18 output tracing)` - 9 edges
5. `Rule` - 8 edges
6. `CC6 Finals Pointers PDF (7 pages)` - 8 edges
7. `build()` - 7 edges
8. `run_dom()` - 7 edges
9. `Rule` - 7 edges
10. `build()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Generic pointers PDF builder` --semantically_similar_to--> `build()`  [INFERRED] [semantically similar]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Review Material layout (IPT1 Week 6/7)` --rationale_for--> `Rule`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Optional timer toggle (off by default)` --rationale_for--> `ExamCard()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/components/ExamCard.jsx
- `Finals-only exam slots` --references--> `termStyle()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/data/exams.js
- `How to add an exam reviewer (guide)` --references--> `SubjectPage()`  [INFERRED]
  Subject Exam Reviewers/HOW TO ADD AN EXAM REVIEWER.txt → src/pages/SubjectPage.jsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Reviewer build pipeline** — subject_exam_reviewers_cc6_source_questions, subject_exam_reviewers_cc6_source_pointers, subject_exam_reviewers_cc6_source_make_exam, subject_exam_reviewers_cc6_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Mock exam flow** — src_components_examcard_examcard, src_data_exams_getexambyid, src_pages_quizpage_quizpage, src_pages_quizpage_quizpage_update [EXTRACTED 1.00]
- **WD reviewer build pipeline** — subject_exam_reviewers_wd_source_questions, subject_exam_reviewers_wd_source_pointers, subject_exam_reviewers_wd_source_make_exam, subject_exam_reviewers_wd_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Output tracing grading** — src_pages_quizpage_outputtracingquestion, src_pages_quizpage_squash, src_pages_quizpage_questionpoints, src_pages_quizpage_quizpage_handlenonmcanswer [EXTRACTED 1.00]

## Communities (9 total, 0 thin omitted)

### Community 0 - "Quiz Engine and Grading"
Cohesion: 0.07
Nodes (35): Mock exam mode, Seven question types, Quiz mode, TypeBadge(), TYPES, getReviewerById(), getSubjectById(), checkIdentAnswer() (+27 more)

### Community 1 - "Pointers PDF Generator"
Cohesion: 0.08
Nodes (10): Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, build(), bullets_for(), esc(), Rule, build(), bullets_for() (+2 more)

### Community 2 - "WD Finals Exam Content"
Cohesion: 0.11
Nodes (16): Workflow for a new subject reviewer, Tips for Output Tracing (pointers section), WD Ch 5 - Advanced CSS, WD Ch 6 - Introduction to JavaScript and DOM, WD Ch 7 - Web Hosting, WD Finals mock exam (172 MC + 18 output tracing), WD FT Quiz 1 and 2 items, WD Finals Pointers PDF (6 pages) (+8 more)

### Community 3 - "Dependencies and Tooling"
Cohesion: 0.11
Nodes (25): dependencies, react@^19.2.8, react-dom@^19.2.8, react-router-dom@^7.18.2, devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3 (+17 more)

### Community 4 - "App Shell and Deployment"
Cohesion: 0.13
Nodes (14): Project Knowledge (doc), graphify query and rebuild, Lilac / pink glass-card theme, Quiz vs Flash Card rule, QuizHub study site, Vercel deployment (quizzes-hub.vercel.app), index.html app shell, App() (+6 more)

### Community 5 - "Subject Page Sections"
Cohesion: 0.20
Nodes (13): react-router-dom, ClockIcon(), ExamCard(), PointersCard(), ReviewerCard(), exams, getExamById(), getExamsBySubject() (+5 more)

### Community 6 - "CC6 Finals Exam Content"
Cohesion: 0.27
Nodes (9): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, pointers (+1 more)

### Community 7 - "Build and Lint Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 8 - "Lint Rules"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

## Knowledge Gaps
- **4 isolated node(s):** `Chapter 8 slide gaps`, `PDF-standard Times font fallback`, `index.html app shell`, `graphify query and rebuild`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 45 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react-router-dom` connect `Subject Page Sections` to `Quiz Engine and Grading`, `Dependencies and Tooling`, `App Shell and Deployment`?**
  _High betweenness centrality (0.193) - this node is a cross-community bridge._
- **What connects `Chapter 8 slide gaps`, `PDF-standard Times font fallback`, `index.html app shell` to the rest of the system?**
  _4 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine and Grading` be split into smaller, more focused modules?**
  _Cohesion score 0.06676342525399129 - nodes in this community are weakly interconnected._
- **Why does `SubjectPage()` connect `Subject Page Sections` to `Quiz Engine and Grading`, `WD Finals Exam Content`, `App Shell and Deployment`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Should `Pointers PDF Generator` be split into smaller, more focused modules?**
  _Cohesion score 0.08258258258258258 - nodes in this community are weakly interconnected._
- **Why does `pointers` connect `CC6 Finals Exam Content` to `WD Finals Exam Content`, `Subject Page Sections`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **Should `WD Finals Exam Content` be split into smaller, more focused modules?**
  _Cohesion score 0.10752688172043011 - nodes in this community are weakly interconnected._