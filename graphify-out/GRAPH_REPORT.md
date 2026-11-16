# Graph Report - QUIZZES HUB  (2026-11-16)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 317 nodes · 599 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6da35dcb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Quiz Engine, Grading and Exam Parts
- Pointers PDF Generator
- Subject Lock (decrypt and unlock)
- Dependencies and Build
- App Shell, Pages and Cards
- Exam Builders, WD and Code Verification
- CC6, EA and OOP Finals Exam Content
- Lock Encryption Script
- PDF Rule Flowables
- Lint Rules
- Project Knowledge and Deployment

## God Nodes (most connected - your core abstractions)
1. `QuizPage()` - 36 edges
2. `SubjectPage()` - 11 edges
3. `unlockSubject()` - 10 edges
4. `react-router-dom` - 10 edges
5. `OOP Finals mock exam (123 MC incl. 8 code items)` - 10 edges
6. `tryResumeUnlock()` - 9 edges
7. `WD Finals mock exam (172 MC + 18 output tracing)` - 9 edges
8. `Rule` - 8 edges
9. `App()` - 8 edges
10. `LockGate()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Generic pointers PDF builder` --semantically_similar_to--> `build()`  [INFERRED] [semantically similar]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Finals-only exam slots` --references--> `termStyle()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/data/exams.js
- `Review Material layout (IPT1 Week 6/7)` --rationale_for--> `Rule`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Seven question types` --references--> `isChoiceType()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/pages/QuizPage.jsx
- `Optional timer toggle (off by default)` --rationale_for--> `ExamCard()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/components/ExamCard.jsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **EA reviewer build pipeline** — subject_exam_reviewers_ea_source_questions, subject_exam_reviewers_ea_source_pointers, subject_exam_reviewers_ea_source_make_exam, subject_exam_reviewers_ea_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Mock exam flow** — src_components_examcard_examcard, src_data_exams_getexambyid, src_pages_quizpage_quizpage, src_pages_quizpage_quizpage_update [EXTRACTED 1.00]
- **OOP reviewer build pipeline** — subject_exam_reviewers_oop_source_questions, subject_exam_reviewers_oop_source_pointers, subject_exam_reviewers_oop_source_make_exam, subject_exam_reviewers_oop_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Output tracing grading** — src_pages_quizpage_outputtracingquestion, src_pages_quizpage_squash, src_pages_quizpage_questionpoints, src_pages_quizpage_quizpage_handlenonmcanswer [EXTRACTED 1.00]
- **Reviewer build pipeline** — subject_exam_reviewers_cc6_source_questions, subject_exam_reviewers_cc6_source_pointers, subject_exam_reviewers_cc6_source_make_exam, subject_exam_reviewers_cc6_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **WD reviewer build pipeline** — subject_exam_reviewers_wd_source_questions, subject_exam_reviewers_wd_source_pointers, subject_exam_reviewers_wd_source_make_exam, subject_exam_reviewers_wd_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]

## Communities (11 total, 1 thin omitted)

### Community 0 - "Quiz Engine, Grading and Exam Parts"
Cohesion: 0.06
Nodes (44): Exam parts: take a finals mock exam by chapter/module, Mock exam mode, Quiz mode, TypeBadge(), getReviewerById(), checkIdentAnswer(), ChevRight(), CodeBlock() (+36 more)

### Community 1 - "Pointers PDF Generator"
Cohesion: 0.07
Nodes (17): Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, build(), bullets_for(), esc(), Rule, build(), bullets_for() (+9 more)

### Community 2 - "Subject Lock (decrypt and unlock)"
Cohesion: 0.20
Nodes (13): COMPROG3 Finals Exam Reviewer (Ch 6-8, VB.NET), Subject password lock (encrypted payload), submit(), decryptWithKeyBytes(), fromB64(), inject(), listeners, loadBox() (+5 more)

### Community 3 - "Dependencies and Build"
Cohesion: 0.08
Nodes (29): dependencies, react@^19.2.8, react-dom@^19.2.8, react-router-dom@^7.18.2, devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3 (+21 more)

### Community 4 - "App Shell, Pages and Cards"
Cohesion: 0.13
Nodes (22): Quiz vs Flash Card rule, index.html app shell, react, react-router-dom, App(), ClockIcon(), ExamCard(), LockGate() (+14 more)

### Community 5 - "Exam Builders, WD and Code Verification"
Cohesion: 0.12
Nodes (15): Tips for Output Tracing (pointers section), WD Ch 5 - Advanced CSS, WD Ch 6 - Introduction to JavaScript and DOM, WD Ch 7 - Web Hosting, WD Finals mock exam (172 MC + 18 output tracing), WD FT Quiz 1 and 2 items, WD Finals Pointers PDF (6 pages), build() (+7 more)

### Community 6 - "CC6, EA and OOP Finals Exam Content"
Cohesion: 0.07
Nodes (31): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, CPIC phase diagram read from slide image (+23 more)

### Community 7 - "Lock Encryption Script"
Cohesion: 0.11
Nodes (10): args, base, iv, manifest, outPath, pass, payload, salt (+2 more)

### Community 10 - "Lint Rules"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 11 - "Project Knowledge and Deployment"
Cohesion: 0.22
Nodes (7): Project Knowledge (doc), graphify query and rebuild, Lilac / pink glass-card theme, QuizHub study site, Vercel deployment (quizzes-hub.vercel.app), COLORS, rewrites

## Knowledge Gaps
- **5 isolated node(s):** `PDF-standard Times font fallback`, `graphify query and rebuild`, `index.html app shell`, `Chapter 8 slide gaps`, `CPIC phase diagram read from slide image`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 84 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pointers` connect `CC6, EA and OOP Finals Exam Content` to `Subject Lock (decrypt and unlock)`, `App Shell, Pages and Cards`, `Exam Builders, WD and Code Verification`?**
  _High betweenness centrality (0.224) - this node is a cross-community bridge._
- **What connects `PDF-standard Times font fallback`, `graphify query and rebuild`, `index.html app shell` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine, Grading and Exam Parts` be split into smaller, more focused modules?**
  _Cohesion score 0.06284153005464481 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `App Shell, Pages and Cards` to `Quiz Engine, Grading and Exam Parts`, `Dependencies and Build`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Should `Pointers PDF Generator` be split into smaller, more focused modules?**
  _Cohesion score 0.06708595387840671 - nodes in this community are weakly interconnected._
- **Why does `Subject password lock (encrypted payload)` connect `Subject Lock (decrypt and unlock)` to `App Shell, Pages and Cards`, `Lock Encryption Script`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Should `Dependencies and Build` be split into smaller, more focused modules?**
  _Cohesion score 0.0846774193548387 - nodes in this community are weakly interconnected._