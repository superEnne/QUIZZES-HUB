# Graph Report - QUIZZES HUB  (2026-11-16)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 300 nodes · 559 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6a0f678a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Quiz Engine and Grading
- Pointers PDF Generator
- App Shell and Subject Lock
- Dependencies and Build
- Subject Page Sections
- Exam Builders and Answer Verification
- EA and CC6 Finals Exam Content
- Lock Encryption Script
- WD Finals Exam Content
- OOP Finals Exam Content
- Lint Rules
- Project Knowledge and Deployment
- EA PDF Rule Flowable
- WD PDF Rule Flowable

## God Nodes (most connected - your core abstractions)
1. `QuizPage()` - 27 edges
2. `SubjectPage()` - 11 edges
3. `react-router-dom` - 10 edges
4. `unlockSubject()` - 9 edges
5. `WD Finals mock exam (172 MC + 18 output tracing)` - 9 edges
6. `OOP Finals mock exam (123 MC incl. 8 code items)` - 9 edges
7. `Rule` - 8 edges
8. `getSubjectById()` - 8 edges
9. `App()` - 8 edges
10. `LockGate()` - 8 edges

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
- **EA reviewer build pipeline** — subject_exam_reviewers_ea_source_questions, subject_exam_reviewers_ea_source_pointers, subject_exam_reviewers_ea_source_make_exam, subject_exam_reviewers_ea_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Mock exam flow** — src_components_examcard_examcard, src_data_exams_getexambyid, src_pages_quizpage_quizpage, src_pages_quizpage_quizpage_update [EXTRACTED 1.00]
- **OOP reviewer build pipeline** — subject_exam_reviewers_oop_source_questions, subject_exam_reviewers_oop_source_pointers, subject_exam_reviewers_oop_source_make_exam, subject_exam_reviewers_oop_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Output tracing grading** — src_pages_quizpage_outputtracingquestion, src_pages_quizpage_squash, src_pages_quizpage_questionpoints, src_pages_quizpage_quizpage_handlenonmcanswer [EXTRACTED 1.00]
- **Reviewer build pipeline** — subject_exam_reviewers_cc6_source_questions, subject_exam_reviewers_cc6_source_pointers, subject_exam_reviewers_cc6_source_make_exam, subject_exam_reviewers_cc6_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **WD reviewer build pipeline** — subject_exam_reviewers_wd_source_questions, subject_exam_reviewers_wd_source_pointers, subject_exam_reviewers_wd_source_make_exam, subject_exam_reviewers_wd_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]

## Communities (14 total, 2 thin omitted)

### Community 0 - "Quiz Engine and Grading"
Cohesion: 0.07
Nodes (35): Mock exam mode, Seven question types, Quiz mode, TypeBadge(), TYPES, getReviewerById(), getSubjectById(), checkIdentAnswer() (+27 more)

### Community 1 - "Pointers PDF Generator"
Cohesion: 0.08
Nodes (16): Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, build(), bullets_for(), esc(), Rule, build(), bullets_for() (+8 more)

### Community 2 - "App Shell and Subject Lock"
Cohesion: 0.11
Nodes (27): Quiz vs Flash Card rule, index.html app shell, dependencies, react@^19.2.8, react-dom@^19.2.8, react-router-dom@^7.18.2, react, react-dom (+19 more)

### Community 3 - "Dependencies and Build"
Cohesion: 0.10
Nodes (24): devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, @types/react@^19.2.17, @types/react-dom@^19.2.3, vite@^8.2.0, @vitejs/plugin-react@^6.0.4 (+16 more)

### Community 4 - "Subject Page Sections"
Cohesion: 0.23
Nodes (11): ClockIcon(), ExamCard(), PointersCard(), ReviewerCard(), exams, getExamById(), getExamsBySubject(), getPointersBySubject() (+3 more)

### Community 5 - "Exam Builders and Answer Verification"
Cohesion: 0.11
Nodes (12): Workflow for a new subject reviewer, build_questions(), sub(), How to add an exam reviewer (guide), Mock exam entry format, Per-subject source/ folder, build(), place() (+4 more)

### Community 6 - "EA and CC6 Finals Exam Content"
Cohesion: 0.15
Nodes (16): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, CPIC phase diagram read from slide image (+8 more)

### Community 7 - "Lock Encryption Script"
Cohesion: 0.12
Nodes (10): args, base, iv, manifest, outPath, pass, payload, salt (+2 more)

### Community 8 - "WD Finals Exam Content"
Cohesion: 0.29
Nodes (8): Tips for Output Tracing (pointers section), WD Ch 5 - Advanced CSS, WD Ch 6 - Introduction to JavaScript and DOM, WD Ch 7 - Web Hosting, WD Finals mock exam (172 MC + 18 output tracing), WD FT Quiz 1 and 2 items, WD Finals Pointers PDF (6 pages), build_mc()

### Community 9 - "OOP Finals Exam Content"
Cohesion: 0.39
Nodes (7): OOP Finals mock exam (123 MC incl. 8 code items), OOP M10 - Code Reuse and Class Hierarchy, OOP M11 - Interfaces, OOP M12 - Abstract Class and Interface, OOP M13 - Polymorphism, OOP M14 - Modularity, OOP Finals Pointers PDF (6 pages)

### Community 10 - "Lint Rules"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 11 - "Project Knowledge and Deployment"
Cohesion: 0.22
Nodes (7): Project Knowledge (doc), graphify query and rebuild, Lilac / pink glass-card theme, QuizHub study site, Vercel deployment (quizzes-hub.vercel.app), COLORS, rewrites

## Knowledge Gaps
- **5 isolated node(s):** `PDF-standard Times font fallback`, `graphify query and rebuild`, `index.html app shell`, `Chapter 8 slide gaps`, `CPIC phase diagram read from slide image`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 83 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pointers` connect `EA and CC6 Finals Exam Content` to `WD Finals Exam Content`, `OOP Finals Exam Content`, `App Shell and Subject Lock`, `Subject Page Sections`?**
  _High betweenness centrality (0.195) - this node is a cross-community bridge._
- **What connects `PDF-standard Times font fallback`, `graphify query and rebuild`, `index.html app shell` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine and Grading` be split into smaller, more focused modules?**
  _Cohesion score 0.06638714185883997 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `App Shell and Subject Lock` to `Quiz Engine and Grading`, `Dependencies and Build`, `Subject Page Sections`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Should `Pointers PDF Generator` be split into smaller, more focused modules?**
  _Cohesion score 0.07738095238095238 - nodes in this community are weakly interconnected._
- **Why does `exams` connect `Subject Page Sections` to `App Shell and Subject Lock`, `Exam Builders and Answer Verification`, `EA and CC6 Finals Exam Content`, `WD Finals Exam Content`, `OOP Finals Exam Content`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Should `App Shell and Subject Lock` be split into smaller, more focused modules?**
  _Cohesion score 0.11261261261261261 - nodes in this community are weakly interconnected._