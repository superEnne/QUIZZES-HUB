# Graph Report - QUIZZES HUB  (2026-11-16)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 342 nodes · 644 edges · 12 communities (11 shown, 1 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ea3d975f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Quiz Engine, Grading and Exam Parts
- Pointers PDF Generator
- App Shell, Lock and Routing
- Dependencies and Build
- Subject Page, Exam and Pointer Cards
- Exam Builders and Answer Verification
- Lock Encryption Script
- Vercel Deployment
- Lint Rules
- Question Types and EA Content
- CC6, OOP and IPT1 Exam Content
- WD Finals Exam and PDF

## God Nodes (most connected - your core abstractions)
1. `QuizPage()` - 36 edges
2. `react-router-dom` - 11 edges
3. `App()` - 10 edges
4. `unlockSubject()` - 10 edges
5. `SubjectPage()` - 10 edges
6. `OOP Finals mock exam (123 MC incl. 8 code items)` - 10 edges
7. `tryResumeUnlock()` - 9 edges
8. `exams` - 9 edges
9. `Pointers PDF rules` - 9 edges
10. `WD Finals mock exam (172 MC + 18 output tracing)` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Generic pointers PDF builder` --semantically_similar_to--> `build()`  [INFERRED] [semantically similar]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Review Material layout (IPT1 Week 6/7)` --rationale_for--> `Rule`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Lilac/pink palette only (no yellow/green outliers)` --rationale_for--> `SubjectCard()`  [EXTRACTED]
  docs/PROJECT_KNOWLEDGE.md → src/components/SubjectCard.jsx
- `Optional timer toggle (off by default)` --rationale_for--> `ExamCard()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/components/ExamCard.jsx
- `Finals-only exam slots` --references--> `termStyle()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/data/exams.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **EA reviewer build pipeline** — subject_exam_reviewers_ea_source_questions, subject_exam_reviewers_ea_source_pointers, subject_exam_reviewers_ea_source_make_exam, subject_exam_reviewers_ea_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Mock exam flow** — src_components_examcard_examcard, src_data_exams_getexambyid, src_pages_quizpage_quizpage, src_pages_quizpage_quizpage_update [EXTRACTED 1.00]
- **OOP reviewer build pipeline** — subject_exam_reviewers_oop_source_questions, subject_exam_reviewers_oop_source_pointers, subject_exam_reviewers_oop_source_make_exam, subject_exam_reviewers_oop_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Output tracing grading** — src_pages_quizpage_outputtracingquestion, src_pages_quizpage_squash, src_pages_quizpage_questionpoints, src_pages_quizpage_quizpage_handlenonmcanswer [EXTRACTED 1.00]
- **Reviewer build pipeline** — subject_exam_reviewers_cc6_source_questions, subject_exam_reviewers_cc6_source_pointers, subject_exam_reviewers_cc6_source_make_exam, subject_exam_reviewers_cc6_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **WD reviewer build pipeline** — subject_exam_reviewers_wd_source_questions, subject_exam_reviewers_wd_source_pointers, subject_exam_reviewers_wd_source_make_exam, subject_exam_reviewers_wd_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]

## Communities (12 total, 1 thin omitted)

### Community 0 - "Quiz Engine, Grading and Exam Parts"
Cohesion: 0.07
Nodes (43): Exam parts: take a finals mock exam by chapter/module, Mock exam mode, Quiz mode, getReviewerById(), getSubjectById(), checkIdentAnswer(), ChevRight(), CodeBlock() (+35 more)

### Community 1 - "Pointers PDF Generator"
Cohesion: 0.06
Nodes (19): IPT1 Finals Pointers PDF (6 pages, bundled sources), Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, build(), bullets_for(), esc(), Rule, build() (+11 more)

### Community 2 - "App Shell, Lock and Routing"
Cohesion: 0.08
Nodes (35): COMPROG3 Finals Exam Reviewer (Ch 6-8, VB.NET), Project Knowledge (doc), graphify query and rebuild, Lilac / pink glass-card theme, Quiz vs Flash Card rule, QuizHub study site, Subject password lock (encrypted payload), index.html app shell (+27 more)

### Community 3 - "Dependencies and Build"
Cohesion: 0.10
Nodes (24): devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, @types/react@^19.2.17, @types/react-dom@^19.2.3, vite@^8.2.0, @vitejs/plugin-react@^6.0.4 (+16 more)

### Community 4 - "Subject Page, Exam and Pointer Cards"
Cohesion: 0.16
Nodes (16): IPT1 Finals mock exam (176 MC, 3 lessons), ClockIcon(), ExamCard(), PointersCard(), ReviewerCard(), exams, getExamById(), getExamsBySubject() (+8 more)

### Community 5 - "Exam Builders and Answer Verification"
Cohesion: 0.15
Nodes (9): Workflow for a new subject reviewer, build(), place(), build(), place(), run_java(), build_output(), run_console() (+1 more)

### Community 7 - "Lock Encryption Script"
Cohesion: 0.11
Nodes (10): args, base, iv, manifest, outPath, pass, payload, salt (+2 more)

### Community 10 - "Lint Rules"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 11 - "Question Types and EA Content"
Cohesion: 0.14
Nodes (11): CPIC phase diagram read from slide image, EA Ch 10 - Developing an EA Management Plan, EA Ch 11 - Investment Planning and Project Management, EA Ch 9 - Developing Future Architecture Views, EA Finals mock exam (97 MC + 49 True/False), EA Finals Pointers PDF (6 pages), Seven question types, TypeBadge() (+3 more)

### Community 12 - "CC6, OOP and IPT1 Exam Content"
Cohesion: 0.10
Nodes (17): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, OOP Finals mock exam (123 MC incl. 8 code items) (+9 more)

### Community 13 - "WD Finals Exam and PDF"
Cohesion: 0.13
Nodes (12): Tips for Output Tracing (pointers section), WD Ch 5 - Advanced CSS, WD Ch 6 - Introduction to JavaScript and DOM, WD Ch 7 - Web Hosting, WD Finals mock exam (172 MC + 18 output tracing), WD FT Quiz 1 and 2 items, WD Finals Pointers PDF (6 pages), build_mc() (+4 more)

## Knowledge Gaps
- **6 isolated node(s):** `PDF-standard Times font fallback`, `IPT1 Finals Pointers PDF (6 pages, bundled sources)`, `CPIC phase diagram read from slide image`, `Chapter 8 slide gaps`, `graphify query and rebuild` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 94 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pointers` connect `Subject Page, Exam and Pointer Cards` to `App Shell, Lock and Routing`, `Question Types and EA Content`, `CC6, OOP and IPT1 Exam Content`, `WD Finals Exam and PDF`?**
  _High betweenness centrality (0.220) - this node is a cross-community bridge._
- **What connects `PDF-standard Times font fallback`, `IPT1 Finals Pointers PDF (6 pages, bundled sources)`, `CPIC phase diagram read from slide image` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine, Grading and Exam Parts` be split into smaller, more focused modules?**
  _Cohesion score 0.0655367231638418 - nodes in this community are weakly interconnected._
- **Why does `exams` connect `Subject Page, Exam and Pointer Cards` to `App Shell, Lock and Routing`, `Question Types and EA Content`, `CC6, OOP and IPT1 Exam Content`, `WD Finals Exam and PDF`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Should `Pointers PDF Generator` be split into smaller, more focused modules?**
  _Cohesion score 0.05576923076923077 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `App Shell, Lock and Routing` to `Quiz Engine, Grading and Exam Parts`, `Dependencies and Build`, `Subject Page, Exam and Pointer Cards`?**
  _High betweenness centrality (0.124) - this node is a cross-community bridge._
- **Should `App Shell, Lock and Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.07908163265306123 - nodes in this community are weakly interconnected._