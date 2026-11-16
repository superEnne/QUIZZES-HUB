# Graph Report - QUIZZES HUB  (2026-11-16)

## Corpus Check
- 36 files · ~112,351 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .css 2)

## Summary
- 266 nodes · 492 edges · 11 communities
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Quiz Engine and Grading
- Pointers PDF Generator
- Project Knowledge and Deployment
- Dependencies and Build
- Subject Page Sections
- Exam Builders and Answer Verification
- EA Finals Exam Content
- CC6 Finals Exam Content
- WD Finals Exam Content
- OOP Finals Exam Content
- Lint Rules

## God Nodes (most connected - your core abstractions)
1. `QuizPage()` - 27 edges
2. `SubjectPage()` - 11 edges
3. `react-router-dom` - 9 edges
4. `WD Finals mock exam (172 MC + 18 output tracing)` - 9 edges
5. `OOP Finals mock exam (123 MC incl. 8 code items)` - 9 edges
6. `Rule` - 8 edges
7. `CC6 Finals Pointers PDF (7 pages)` - 8 edges
8. `Pointers PDF rules` - 8 edges
9. `OOP Finals Pointers PDF (6 pages)` - 8 edges
10. `build()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Generic pointers PDF builder` --semantically_similar_to--> `build()`  [INFERRED] [semantically similar]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Review Material layout (IPT1 Week 6/7)` --rationale_for--> `Rule`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → Subject Exam Reviewers/CC6/source/make_pdf.py
- `Optional timer toggle (off by default)` --rationale_for--> `ExamCard()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/components/ExamCard.jsx
- `Balanced True/False with one-fact false statements` --references--> `TYPES`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/components/TypeBadge.jsx
- `Finals-only exam slots` --references--> `termStyle()`  [INFERRED]
  docs/PROJECT_KNOWLEDGE.md → src/data/exams.js

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Reviewer build pipeline** — subject_exam_reviewers_cc6_source_questions, subject_exam_reviewers_cc6_source_pointers, subject_exam_reviewers_cc6_source_make_exam, subject_exam_reviewers_cc6_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Mock exam flow** — src_components_examcard_examcard, src_data_exams_getexambyid, src_pages_quizpage_quizpage, src_pages_quizpage_quizpage_update [EXTRACTED 1.00]
- **WD reviewer build pipeline** — subject_exam_reviewers_wd_source_questions, subject_exam_reviewers_wd_source_pointers, subject_exam_reviewers_wd_source_make_exam, subject_exam_reviewers_wd_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **Output tracing grading** — src_pages_quizpage_outputtracingquestion, src_pages_quizpage_squash, src_pages_quizpage_questionpoints, src_pages_quizpage_quizpage_handlenonmcanswer [EXTRACTED 1.00]
- **EA reviewer build pipeline** — subject_exam_reviewers_ea_source_questions, subject_exam_reviewers_ea_source_pointers, subject_exam_reviewers_ea_source_make_exam, subject_exam_reviewers_ea_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]
- **OOP reviewer build pipeline** — subject_exam_reviewers_oop_source_questions, subject_exam_reviewers_oop_source_pointers, subject_exam_reviewers_oop_source_make_exam, subject_exam_reviewers_oop_source_make_pdf, src_data_exams_exams, src_data_exams_pointers [EXTRACTED 1.00]

## Communities (11 total, 0 thin omitted)

### Community 0 - "Quiz Engine and Grading"
Cohesion: 0.07
Nodes (35): Mock exam mode, Seven question types, Quiz mode, TypeBadge(), TYPES, getReviewerById(), getSubjectById(), checkIdentAnswer() (+27 more)

### Community 1 - "Pointers PDF Generator"
Cohesion: 0.07
Nodes (14): Review Material layout (IPT1 Week 6/7), PDF-standard Times font fallback, build(), bullets_for(), esc(), Rule, build(), bullets_for() (+6 more)

### Community 2 - "Project Knowledge and Deployment"
Cohesion: 0.10
Nodes (20): Project Knowledge (doc), graphify query and rebuild, Lilac / pink glass-card theme, Quiz vs Flash Card rule, QuizHub study site, Vercel deployment (quizzes-hub.vercel.app), index.html app shell, dependencies (+12 more)

### Community 3 - "Dependencies and Build"
Cohesion: 0.10
Nodes (24): devDependencies, oxlint@^1.75.0, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, @types/react@^19.2.17, @types/react-dom@^19.2.3, vite@^8.2.0, @vitejs/plugin-react@^6.0.4 (+16 more)

### Community 4 - "Subject Page Sections"
Cohesion: 0.17
Nodes (16): react-router-dom, ClockIcon(), ExamCard(), PointersCard(), ReviewerCard(), exams, getExamById(), getExamsBySubject() (+8 more)

### Community 5 - "Exam Builders and Answer Verification"
Cohesion: 0.18
Nodes (7): Workflow for a new subject reviewer, build(), place(), run_java(), build_output(), run_console(), run_dom()

### Community 6 - "EA Finals Exam Content"
Cohesion: 0.12
Nodes (11): CPIC phase diagram read from slide image, EA Ch 10 - Developing an EA Management Plan, EA Ch 11 - Investment Planning and Project Management, EA Ch 9 - Developing Future Architecture Views, EA Finals mock exam (97 MC + 49 True/False), EA Finals Pointers PDF (6 pages), build(), build() (+3 more)

### Community 7 - "CC6 Finals Exam Content"
Cohesion: 0.18
Nodes (10): Ch 5 - Database Query Languages, Ch 6 - Data Organization and Architecture, Ch 7 - Data Governance, Ch 8 - Special Purpose Databases and Trends, CC6 Finals mock exam (179 MC, 120 min), CC6 Finals Pointers PDF (7 pages), Chapter 8 slide gaps, build_questions() (+2 more)

### Community 8 - "WD Finals Exam Content"
Cohesion: 0.29
Nodes (8): Tips for Output Tracing (pointers section), WD Ch 5 - Advanced CSS, WD Ch 6 - Introduction to JavaScript and DOM, WD Ch 7 - Web Hosting, WD Finals mock exam (172 MC + 18 output tracing), WD FT Quiz 1 and 2 items, WD Finals Pointers PDF (6 pages), build_mc()

### Community 9 - "OOP Finals Exam Content"
Cohesion: 0.39
Nodes (7): OOP Finals mock exam (123 MC incl. 8 code items), OOP M10 - Code Reuse and Class Hierarchy, OOP M11 - Interfaces, OOP M12 - Abstract Class and Interface, OOP M13 - Polymorphism, OOP M14 - Modularity, OOP Finals Pointers PDF (6 pages)

### Community 10 - "Lint Rules"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

## Knowledge Gaps
- **5 isolated node(s):** `Chapter 8 slide gaps`, `PDF-standard Times font fallback`, `index.html app shell`, `graphify query and rebuild`, `CPIC phase diagram read from slide image`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 62 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `pointers` connect `Subject Page Sections` to `WD Finals Exam Content`, `OOP Finals Exam Content`, `EA Finals Exam Content`, `CC6 Finals Exam Content`?**
  _High betweenness centrality (0.201) - this node is a cross-community bridge._
- **What connects `Chapter 8 slide gaps`, `PDF-standard Times font fallback`, `index.html app shell` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Quiz Engine and Grading` be split into smaller, more focused modules?**
  _Cohesion score 0.06638714185883997 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `Subject Page Sections` to `Quiz Engine and Grading`, `Project Knowledge and Deployment`, `Dependencies and Build`?**
  _High betweenness centrality (0.161) - this node is a cross-community bridge._
- **Should `Pointers PDF Generator` be split into smaller, more focused modules?**
  _Cohesion score 0.07058823529411765 - nodes in this community are weakly interconnected._
- **Why does `QuizPage()` connect `Quiz Engine and Grading` to `Project Knowledge and Deployment`, `Subject Page Sections`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Should `Project Knowledge and Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.09788359788359788 - nodes in this community are weakly interconnected._