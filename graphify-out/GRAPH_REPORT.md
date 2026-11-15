# Graph Report - QUIZZES HUB  (2026-11-15)

## Corpus Check
- 32 files · ~96,017 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 2)

## Summary
- 237 nodes · 426 edges · 9 communities
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Quiz Engine and Grading
- Pointers PDF Generator
- CC6 and EA Finals Exam Content
- App Shell and Dependencies
- Subject Page Sections
- WD Finals Exam Content
- Project Knowledge and Deployment
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
8. `Rule` - 7 edges
9. `build()` - 7 edges
10. `run_dom()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Generic pointers PDF builder` --semantically_similar_to--> `build()`  [INFERRED] [semantically similar]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Finals-only exam slots` --references--> `termStyle()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/data/exams.js
- `Review Material layout (IPT1 Week 6/7)` --rationale_for--> `Rule`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `EA Finals mock exam (97 MC + 49 True/False)` --references--> `build()`  [EXTRACTED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/EA/source/make_exam.py
- `Optional timer toggle (off by default)` --rationale_for--> `ExamCard()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/components/ExamCard.jsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Reviewer build pipeline** — subject_exam_reviewers_cc6_source_questions, subject_exam_reviewers_cc6_source_pointers, subject_exam_reviewers_cc6_source_make_exam, subject_exam_reviewers_cc6_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Mock exam flow** — src_components_examcard_examcard, src_data_exams_getexambyid, src_pages_quizpage_quizpage, src_pages_quizpage_quizpage_update [EXTRACTED 1.00]
- **WD reviewer build pipeline** — subject_exam_reviewers_wd_source_questions, subject_exam_reviewers_wd_source_pointers, subject_exam_reviewers_wd_source_make_exam, subject_exam_reviewers_wd_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Output tracing grading** — src_pages_quizpage_outputtracingquestion, src_pages_quizpage_squash, src_pages_quizpage_questionpoints, src_pages_quizpage_quizpage_handlenonmcanswer [EXTRACTED 1.00]
- **EA reviewer build pipeline** — subject_exam_reviewers_ea_source_questions, subject_exam_reviewers_ea_source_pointers, subject_exam_reviewers_ea_source_make_exam, subject_exam_reviewers_ea_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]

## Communities (9 total, 0 thin omitted)

### Community 0 - "Quiz Engine and Grading"
Cohesion: 0.07
Nodes (33): Mock exam mode, Quiz mode, TypeBadge(), getReviewerById(), getSubjectById(), checkIdentAnswer(), ChevRight(), CodeBlock() (+25 more)

### Community 1 - "Pointers PDF Generator"
Cohesion: 0.07
Nodes (14): Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, build(), bullets_for(), esc(), Rule, build(), bullets_for() (+6 more)

### Community 2 - "CC6 and EA Finals Exam Content"
Cohesion: 0.09
Nodes (24): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, CPIC phase diagram read from slide image (+16 more)

### Community 3 - "App Shell and Dependencies"
Cohesion: 0.09
Nodes (26): index.html app shell, dependencies, react@^19.2.8, react-dom@^19.2.8, react-router-dom@^7.18.2, devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3 (+18 more)

### Community 4 - "Subject Page Sections"
Cohesion: 0.16
Nodes (17): Quiz vs Flash Card rule, react-router-dom, App(), ClockIcon(), ExamCard(), Navbar(), PointersCard(), ReviewerCard() (+9 more)

### Community 5 - "WD Finals Exam Content"
Cohesion: 0.14
Nodes (12): Tips for Output Tracing (pointers section), WD Ch 5 - Advanced CSS, WD Ch 6 - Introduction to JavaScript and DOM, WD Ch 7 - Web Hosting, WD Finals mock exam (172 MC + 18 output tracing), WD FT Quiz 1 and 2 items, WD Finals Pointers PDF (6 pages), build() (+4 more)

### Community 6 - "Project Knowledge and Deployment"
Cohesion: 0.22
Nodes (7): Project Knowledge (doc), graphify query and rebuild, Lilac / pink glass-card theme, QuizHub study site, Vercel deployment (quizzes-hub.vercel.app), COLORS, rewrites

### Community 7 - "Build and Lint Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 8 - "Lint Rules"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

## Knowledge Gaps
- **5 isolated node(s):** `Chapter 8 slide gaps`, `PDF-standard Times font fallback`, `index.html app shell`, `graphify query and rebuild`, `CPIC phase diagram read from slide image`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 54 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pointers` connect `CC6 and EA Finals Exam Content` to `Subject Page Sections`, `WD Finals Exam Content`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **What connects `Chapter 8 slide gaps`, `PDF-standard Times font fallback`, `index.html app shell` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine and Grading` be split into smaller, more focused modules?**
  _Cohesion score 0.06980392156862746 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `Subject Page Sections` to `Quiz Engine and Grading`, `App Shell and Dependencies`?**
  _High betweenness centrality (0.178) - this node is a cross-community bridge._
- **Should `Pointers PDF Generator` be split into smaller, more focused modules?**
  _Cohesion score 0.06693877551020408 - nodes in this community are weakly interconnected._
- **Why does `SubjectPage()` connect `Subject Page Sections` to `Quiz Engine and Grading`, `CC6 and EA Finals Exam Content`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **Should `CC6 and EA Finals Exam Content` be split into smaller, more focused modules?**
  _Cohesion score 0.08602150537634409 - nodes in this community are weakly interconnected._