# Graph Report - QUIZZES HUB  (2026-11-16)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 538 nodes · 1046 edges · 27 communities (23 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a1d91ce0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Quiz Engine, Grading and Exam Parts
- IPT PDF Builder
- App Shell, Lock and Routing
- Misc 2
- Subject Page, Exam and Pointer Cards
- Exam Builders (OOP)
- WD Figures (diagrams)
- Lock Encryption Script
- CC6 Figures (diagrams) 2
- IPT Figures (diagrams)
- Lint Rules
- EA Figures (diagrams)
- OOP Figures (diagrams)
- WD PDF Builder
- EA PDF Builder 2
- CC6 PDF Builder
- CC6 Figures (diagrams)
- OOP PDF Builder
- Exam Builders (IPT)
- OOP Finals Content
- Exam Builders (WD)
- HOW Finals Content
- Exam Builders (CC6)
- CC6 Finals Content
- Exam Builders (EA)
- EA PDF Builder

## God Nodes (most connected - your core abstractions)
1. `QuizPage()` - 36 edges
2. `Figure` - 28 edges
3. `Figure` - 28 edges
4. `Figure` - 28 edges
5. `Figure` - 28 edges
6. `Figure` - 28 edges
7. `react-router-dom` - 11 edges
8. `OOP Finals mock exam (123 MC incl. 8 code items)` - 11 edges
9. `App()` - 10 edges
10. `unlockSubject()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Generic pointers PDF builder` --semantically_similar_to--> `build()`  [INFERRED] [semantically similar]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Finals-only exam slots` --references--> `termStyle()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/data/exams.js
- `Review Material layout (IPT1 Week 6/7)` --rationale_for--> `Rule`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Lilac/pink palette only (no yellow/green outliers)` --rationale_for--> `SubjectCard()`  [EXTRACTED]
  docs/PROJECT_KNOWLEDGE.md → src/components/SubjectCard.jsx
- `Quiz writing rules` --rationale_for--> `build_questions()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_exam.py

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **EA reviewer build pipeline** — subject_exam_reviewers_ea_source_questions, subject_exam_reviewers_ea_source_pointers, subject_exam_reviewers_ea_source_make_exam, subject_exam_reviewers_ea_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Mock exam flow** — src_components_examcard_examcard, src_data_exams_getexambyid, src_pages_quizpage_quizpage, src_pages_quizpage_quizpage_update [EXTRACTED 1.00]
- **OOP reviewer build pipeline** — subject_exam_reviewers_oop_source_questions, subject_exam_reviewers_oop_source_pointers, subject_exam_reviewers_oop_source_make_exam, subject_exam_reviewers_oop_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Output tracing grading** — src_pages_quizpage_outputtracingquestion, src_pages_quizpage_squash, src_pages_quizpage_questionpoints, src_pages_quizpage_quizpage_handlenonmcanswer [EXTRACTED 1.00]
- **Reviewer build pipeline** — subject_exam_reviewers_cc6_source_questions, subject_exam_reviewers_cc6_source_pointers, subject_exam_reviewers_cc6_source_make_exam, subject_exam_reviewers_cc6_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **WD reviewer build pipeline** — subject_exam_reviewers_wd_source_questions, subject_exam_reviewers_wd_source_pointers, subject_exam_reviewers_wd_source_make_exam, subject_exam_reviewers_wd_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]

## Communities (27 total, 4 thin omitted)

### Community 0 - "Quiz Engine, Grading and Exam Parts"
Cohesion: 0.06
Nodes (47): Exam parts: take a finals mock exam by chapter/module, Mock exam mode, Seven question types, Quiz mode, TypeBadge(), TYPES, getReviewerById(), getSubjectById() (+39 more)

### Community 1 - "IPT PDF Builder"
Cohesion: 0.17
Nodes (5): IPT1 Finals Pointers PDF (6 pages, bundled sources), build(), bullets_for(), esc(), Rule

### Community 2 - "App Shell, Lock and Routing"
Cohesion: 0.07
Nodes (35): COMPROG3 Finals Exam Reviewer (Ch 6-8, VB.NET), Project Knowledge (doc), graphify query and rebuild, Lilac / pink glass-card theme, QuizHub study site, Subject password lock (encrypted payload), Vercel deployment (quizzes-hub.vercel.app), index.html app shell (+27 more)

### Community 3 - "Misc 2"
Cohesion: 0.10
Nodes (24): devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, @types/react@^19.2.17, @types/react-dom@^19.2.3, vite@^8.2.0, @vitejs/plugin-react@^6.0.4 (+16 more)

### Community 4 - "Subject Page, Exam and Pointer Cards"
Cohesion: 0.22
Nodes (12): Quiz vs Flash Card rule, ClockIcon(), ExamCard(), PointersCard(), ReviewerCard(), getExamById(), getExamsBySubject(), getPointersBySubject() (+4 more)

### Community 5 - "Exam Builders (OOP)"
Cohesion: 0.22
Nodes (6): build(), place(), run_java(), build_output(), run_console(), run_dom()

### Community 6 - "WD Figures (diagrams)"
Cohesion: 0.11
Nodes (6): _arrow(), _box(), _box_h(), Figure, _label(), _lines()

### Community 7 - "Lock Encryption Script"
Cohesion: 0.11
Nodes (10): args, base, iv, manifest, outPath, pass, payload, salt (+2 more)

### Community 8 - "CC6 Figures (diagrams) 2"
Cohesion: 0.10
Nodes (6): _arrow(), _box(), _box_h(), Figure, _label(), _lines()

### Community 9 - "IPT Figures (diagrams)"
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
Cohesion: 0.21
Nodes (4): build(), bullets_for(), esc(), Rule

### Community 14 - "EA PDF Builder 2"
Cohesion: 0.27
Nodes (3): build(), bullets_for(), esc()

### Community 15 - "CC6 PDF Builder"
Cohesion: 0.31
Nodes (3): build(), bullets_for(), esc()

### Community 16 - "CC6 Figures (diagrams)"
Cohesion: 0.20
Nodes (3): Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, Rule

### Community 17 - "OOP PDF Builder"
Cohesion: 0.17
Nodes (4): build(), bullets_for(), esc(), Rule

### Community 20 - "OOP Finals Content"
Cohesion: 0.39
Nodes (7): OOP Finals mock exam (123 MC incl. 8 code items), OOP M10 - Code Reuse and Class Hierarchy, OOP M11 - Interfaces, OOP M12 - Abstract Class and Interface, OOP M13 - Polymorphism, OOP M14 - Modularity, OOP Finals Pointers PDF (6 pages)

### Community 21 - "Exam Builders (WD)"
Cohesion: 0.29
Nodes (8): Tips for Output Tracing (pointers section), WD Ch 5 - Advanced CSS, WD Ch 6 - Introduction to JavaScript and DOM, WD Ch 7 - Web Hosting, WD Finals mock exam (172 MC + 18 output tracing), WD FT Quiz 1 and 2 items, WD Finals Pointers PDF (6 pages), build_mc()

### Community 22 - "HOW Finals Content"
Cohesion: 0.20
Nodes (8): IPT1 Finals mock exam (176 MC, 3 lessons), Workflow for a new subject reviewer, exams, pointers, How to add an exam reviewer (guide), Mock exam entry format, Reviewer Pointers entry format, Per-subject source/ folder

### Community 23 - "Exam Builders (CC6)"
Cohesion: 0.31
Nodes (8): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, build_questions()

### Community 25 - "Exam Builders (EA)"
Cohesion: 0.32
Nodes (7): CPIC phase diagram read from slide image, EA Ch 10 - Developing an EA Management Plan, EA Ch 11 - Investment Planning and Project Management, EA Ch 9 - Developing Future Architecture Views, EA Finals mock exam (97 MC + 49 True/False), EA Finals Pointers PDF (6 pages), build()

## Knowledge Gaps
- **6 isolated node(s):** `IPT1 Finals Pointers PDF (6 pages, bundled sources)`, `PDF-standard Times font fallback`, `graphify query and rebuild`, `index.html app shell`, `Chapter 8 slide gaps` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 146 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pointers` connect `HOW Finals Content` to `App Shell, Lock and Routing`, `Subject Page, Exam and Pointer Cards`, `OOP Finals Content`, `Exam Builders (WD)`, `Exam Builders (CC6)`, `Exam Builders (EA)`?**
  _High betweenness centrality (0.201) - this node is a cross-community bridge._
- **What connects `IPT1 Finals Pointers PDF (6 pages, bundled sources)`, `PDF-standard Times font fallback`, `graphify query and rebuild` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine, Grading and Exam Parts` be split into smaller, more focused modules?**
  _Cohesion score 0.05698778833107191 - nodes in this community are weakly interconnected._
- **Why does `Workflow for a new subject reviewer` connect `HOW Finals Content` to `Exam Builders (IPT)`, `Exam Builders (OOP)`, `CC6 PDF Builder`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Should `App Shell, Lock and Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.07372549019607844 - nodes in this community are weakly interconnected._
- **Why does `CC6 Finals Pointers PDF (7 pages)` connect `Exam Builders (CC6)` to `Subject Page, Exam and Pointer Cards`, `HOW Finals Content`, `CC6 PDF Builder`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Should `Misc 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10256410256410256 - nodes in this community are weakly interconnected._