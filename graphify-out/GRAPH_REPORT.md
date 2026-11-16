# Graph Report - QUIZZES HUB  (2026-11-16)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 537 nodes · 1043 edges · 22 communities (20 shown, 2 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b4a0f609`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Quiz Engine, Grading and Exam Parts
- IPT1 PDF Builder
- App Shell, Lock and Routing
- Dependencies and Build
- Subject Page, Exam and Pointer Cards
- Exam Builders and Exam Content
- WD Figures (diagrams)
- Lock Encryption Script
- CC6 Figures (diagrams)
- IPT1 Figures (diagrams)
- Lint Rules
- EA Figures (diagrams)
- OOP Figures (diagrams)
- WD PDF Builder
- EA PDF Builder
- Pointers PDF Generator
- CC6 PDF Rule Flowable
- OOP PDF Builder
- CC6 PDF Builder
- OOP Finals Content
- WD Finals Content

## God Nodes (most connected - your core abstractions)
1. `QuizPage()` - 36 edges
2. `Figure` - 28 edges
3. `Figure` - 28 edges
4. `Figure` - 28 edges
5. `Figure` - 28 edges
6. `Figure` - 28 edges
7. `react-router-dom` - 11 edges
8. `App()` - 10 edges
9. `unlockSubject()` - 10 edges
10. `SubjectPage()` - 10 edges

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

## Communities (22 total, 2 thin omitted)

### Community 0 - "Quiz Engine, Grading and Exam Parts"
Cohesion: 0.06
Nodes (47): Exam parts: take a finals mock exam by chapter/module, Mock exam mode, Seven question types, Quiz mode, TypeBadge(), TYPES, getExamById(), getReviewerById() (+39 more)

### Community 1 - "IPT1 PDF Builder"
Cohesion: 0.22
Nodes (4): build(), bullets_for(), esc(), Rule

### Community 2 - "App Shell, Lock and Routing"
Cohesion: 0.07
Nodes (37): COMPROG3 Finals Exam Reviewer (Ch 6-8, VB.NET), Project Knowledge (doc), graphify query and rebuild, Lilac / pink glass-card theme, QuizHub study site, Subject password lock (encrypted payload), Vercel deployment (quizzes-hub.vercel.app), index.html app shell (+29 more)

### Community 3 - "Dependencies and Build"
Cohesion: 0.10
Nodes (24): devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, @types/react@^19.2.17, @types/react-dom@^19.2.3, vite@^8.2.0, @vitejs/plugin-react@^6.0.4 (+16 more)

### Community 4 - "Subject Page, Exam and Pointer Cards"
Cohesion: 0.10
Nodes (24): CPIC phase diagram read from slide image, EA Ch 10 - Developing an EA Management Plan, EA Ch 11 - Investment Planning and Project Management, EA Ch 9 - Developing Future Architecture Views, EA Finals mock exam (97 MC + 49 True/False), EA Finals Pointers PDF (6 pages), IPT1 Finals mock exam (176 MC, 3 lessons), Quiz vs Flash Card rule (+16 more)

### Community 5 - "Exam Builders and Exam Content"
Cohesion: 0.08
Nodes (21): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, Workflow for a new subject reviewer (+13 more)

### Community 6 - "WD Figures (diagrams)"
Cohesion: 0.10
Nodes (6): _arrow(), _box(), _box_h(), Figure, _label(), _lines()

### Community 7 - "Lock Encryption Script"
Cohesion: 0.11
Nodes (10): args, base, iv, manifest, outPath, pass, payload, salt (+2 more)

### Community 8 - "CC6 Figures (diagrams)"
Cohesion: 0.11
Nodes (6): _arrow(), _box(), _box_h(), Figure, _label(), _lines()

### Community 9 - "IPT1 Figures (diagrams)"
Cohesion: 0.10
Nodes (6): _arrow(), _box(), _box_h(), Figure, _label(), _lines()

### Community 10 - "Lint Rules"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 11 - "EA Figures (diagrams)"
Cohesion: 0.11
Nodes (6): _arrow(), _box(), _box_h(), Figure, _label(), _lines()

### Community 12 - "OOP Figures (diagrams)"
Cohesion: 0.11
Nodes (6): _arrow(), _box(), _box_h(), Figure, _label(), _lines()

### Community 13 - "WD PDF Builder"
Cohesion: 0.22
Nodes (4): build(), bullets_for(), esc(), Rule

### Community 14 - "EA PDF Builder"
Cohesion: 0.21
Nodes (4): build(), bullets_for(), esc(), Rule

### Community 16 - "CC6 PDF Rule Flowable"
Cohesion: 0.20
Nodes (3): Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, Rule

### Community 17 - "OOP PDF Builder"
Cohesion: 0.21
Nodes (4): build(), bullets_for(), esc(), Rule

### Community 18 - "CC6 PDF Builder"
Cohesion: 0.50
Nodes (3): build(), bullets_for(), esc()

### Community 20 - "OOP Finals Content"
Cohesion: 0.33
Nodes (7): OOP Finals mock exam (123 MC incl. 8 code items), OOP M10 - Code Reuse and Class Hierarchy, OOP M11 - Interfaces, OOP M12 - Abstract Class and Interface, OOP M13 - Polymorphism, OOP M14 - Modularity, OOP Finals Pointers PDF (6 pages)

### Community 21 - "WD Finals Content"
Cohesion: 0.40
Nodes (5): Tips for Output Tracing (pointers section), WD Ch 5 - Advanced CSS, WD Ch 6 - Introduction to JavaScript and DOM, WD Ch 7 - Web Hosting, WD Finals Pointers PDF (6 pages)

## Knowledge Gaps
- **6 isolated node(s):** `IPT1 Finals Pointers PDF (6 pages, bundled sources)`, `PDF-standard Times font fallback`, `graphify query and rebuild`, `index.html app shell`, `CPIC phase diagram read from slide image` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 146 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pointers` connect `Subject Page, Exam and Pointer Cards` to `WD Finals Content`, `App Shell, Lock and Routing`, `OOP Finals Content`, `Exam Builders and Exam Content`?**
  _High betweenness centrality (0.201) - this node is a cross-community bridge._
- **What connects `IPT1 Finals Pointers PDF (6 pages, bundled sources)`, `PDF-standard Times font fallback`, `graphify query and rebuild` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine, Grading and Exam Parts` be split into smaller, more focused modules?**
  _Cohesion score 0.057342657342657345 - nodes in this community are weakly interconnected._
- **Why does `Workflow for a new subject reviewer` connect `Exam Builders and Exam Content` to `Subject Page, Exam and Pointer Cards`, `Pointers PDF Generator`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Should `App Shell, Lock and Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.07197763801537387 - nodes in this community are weakly interconnected._
- **Why does `CC6 Finals Pointers PDF (7 pages)` connect `Exam Builders and Exam Content` to `CC6 PDF Builder`, `Subject Page, Exam and Pointer Cards`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Should `Dependencies and Build` be split into smaller, more focused modules?**
  _Cohesion score 0.10256410256410256 - nodes in this community are weakly interconnected._