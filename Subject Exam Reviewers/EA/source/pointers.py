# EA Finals pointers - Chapters 9 to 11.
# Source for the downloadable PDF (make_pdf.py).

TITLE = "EA - Enterprise Architecture"
SUBTITLE = "Finals Exam Pointers - Chapters 9 to 11"
FOOTER = "EA Finals Pointers"
PDF_TITLE = "EA Finals Exam Pointers - Chapters 9 to 11"
INTRO = ("This reviewer compacts Chapters 9 to 11 into one place: how future EA views are documented, "
         "how the EA Management Plan manages the move from current to future, and how capital planning and "
         "project management fund and deliver the changes. Quick comparisons are at the end.")

CHAPTERS = [
  {
    "num": 1, "title": "Developing Future Architecture Views", "chapter": "Chapter 9",
    "sections": [
      {"heading": "The Future (\"To-Be\") View",
       "text": "The future view documents the IT resources that will be active several years from now. It is the "
               "\"to-be\" view, while the \"as-is\" view documents current IT resources. If little EA planning has "
               "happened, the future view should show how duplication in function will be eliminated.",
       "points": ["Analogy - like a full set of blueprints for modifying an existing home or building a new one",
                  "Why it matters - supports resource planning and decision-making, and promotes communication about changes",
                  "Early-stage initiatives are left out until they have firm sponsor backing, strong business cases, and viable technical solutions; candidate initiatives go in a special section of the EA Management Plan",
                  "Key rule - use the same documentation techniques for current and future views so changes are easy to compare"]},
      {"heading": "Future CONOPS Scenarios",
       "text": "Concept of Operations (CONOPS) scenarios have been used as a military planning tool for millennia, much "
               "like thinking ahead in chess. They identify a range of operating options and planning assumptions.",
       "terms": [("Defensive moves", "the enterprise's probable responses"),
                 ("Offensive moves", "the enterprise's initiatives")],
       "points": ["Scenarios document the current and several plausible future operating environments",
                  "Choose them using internal and external factors from the SWOT Analysis",
                  "Several scenarios are needed because it is impossible to predict which factors will come into play"]},
      {"heading": "Strategic Level",
       "points": ["Artifacts - Strategic Plan (S-1), SWOT Analysis (S-2), CONOPS Scenario (S-3), CONOPS Diagram (S-4), Balanced Scorecard (S-5)",
                  "E-Business or E-Government Plan - details how IT initiatives support the Strategic Plan",
                  "Updated plans are published every few years; the future view holds draft changes that have executive sponsorship",
                  "Future scenarios are documented like the current one: an integrated narrative and set of planning assumptions",
                  "Future strategic goals - changes to goals or new goals not yet formally adopted; they direct future scenarios",
                  "Strategic initiatives support high-level resource planning, the capital planning and investment control (CPIC) process",
                  "Changed goals and initiatives need new or modified outcome and output measures"]},
      {"heading": "Business Level",
       "points": ["Artifacts - Business Plan (B-1), Node Connectivity (B-2), Swim Lane Process (B-3), Business Process/Service Model (B-4), Process/Product Matrix (B-5), Use Case (B-7), Investment Business Case (B-8)",
                  "Drivers - factors that change business services: new customer requirements, competitive strategies, new technologies, resource availability",
                  "Four types of change - new process, elimination, major reengineering, minor improvement",
                  "Line-of-business managers periodically review services for ones that are obsolete, duplicative, or low value",
                  "Document only changes with executive sponsorship; this keeps upward alignment (with strategy) and downward alignment (lower three levels)"]},
      {"heading": "Project Plans and Business Cases",
       "terms": [("Project Management Plan (PMP)", "living document; current view made in the requirements planning stage; kept until the system is disposed"),
                 ("SADMs", "Systems Analysis and Design Methods; waterfall or rapid application development may not need a future PMP, but incremental (phased) or evolutionary (spiral) methods benefit from one, e.g. phased ERP projects"),
                 ("Investment business case", "the part of the PMP that shows the investment's value; tied to the budget, reviewed at least annually; benefits must exceed costs and ROI must meet targets (opportunity cost); otherwise cancel or modify")]},
      {"heading": "Information Level",
       "points": ["Artifacts - Knowledge Management Plan (D-1), Information Exchange Matrix (D-2), Object State-Transition (D-3), Object Event Sequence (D-4), Logical (D-5) and Physical (D-6) Data Models, CRUD Matrix (D-7), Data Dictionary/Object Library (D-8)",
                  "Future data model changes can use special notation such as dashed lines and symbols",
                  "OO approach - objects are modified with minimal effort; object reuse lowers upgrade costs"]},
      {"heading": "Data Dictionaries and Object Libraries",
       "terms": [("Data Dictionary", "taxonomies and standard formats; does not store actual data"),
                 ("Object Library", "stores formats/standards and the actual code modules; several versions of an object can be kept"),
                 ("Encapsulation", "protection of parts of the code module from alteration")]},
      {"heading": "Systems/Services Level",
       "points": ["Artifacts - System Interface Diagram (SA-1) through Web Application Diagram (SA-9), including System Evolution Diagram (SA-8)",
                  "APIs - designed interface points in commercial software; open standards for wide integration or proprietary to one vendor",
                  "Interface diagrams show where information exchanges occur; web services exchange information through the NAP/ESB Web Service Platform",
                  "Standards - e.g. WSDL descriptions of web services in the UDDI Registry"]},
      {"heading": "Infrastructure Level",
       "points": ["Artifacts - Network Connectivity (NI-1), Network Inventory (NI-2), Capital Equipment Inventory (NI-3), Building Blueprints (NI-4), Network Center (NI-5), Cable Plant (NI-6), Rack Elevation (NI-7)",
                  "Networks - changes to integrated voice, data, and video components; standards such as the OSI and TCP/IP models",
                  "Security - changes to standards, plans, testing, certification, and the COOP Plan",
                  "Future EACRs - archive of approved, but yet to be implemented EA Change Requests",
                  "Hardware/Software List - anticipated changes in quantity and type of products"]},
    ],
  },
  {
    "num": 2, "title": "Developing an EA Management Plan", "chapter": "Chapter 10",
    "sections": [
      {"heading": "What the Plan Is",
       "text": "The EA Management Plan describes how the enterprise manages the transition from current processes and "
               "resources to future ones. The transition is ongoing, because new resources become part of the current EA.",
       "points": ["Contents - performance gaps, resource requirements, planned solutions, sequencing plan, and summaries of current and future architecture; also governance, implementation methodology, and documentation framework",
                  "A living document updated at regular intervals (e.g. annually) for clear version control; archived in the on-line EA repository",
                  "Analogy - the architect's project plan: design, approach, timeframe, and sequencing of the remodeling work"]},
      {"heading": "Plan Outline",
       "terms": [("Part 1. EA Program Management", "governance and principles, support for strategy and business, roles and responsibilities, program budget, performance measures"),
                 ("Part 2. Current Architecture Summary", "strategic goals, business services and information flows, systems and applications, technology infrastructure, IT security, EA standards, workforce requirements"),
                 ("Part 3. Future Architecture Summary", "future operating scenarios, planning assumptions, updating views, sequencing plan, configuration management"),
                 ("Part 4. EA Glossary and References", "glossary, acronym list, and bibliography; helps create common terms since EA is still emerging")]},
      {"heading": "Part 1 - EA Program Management",
       "points": ["Governance - narrative of EA policy plus a flow chart of how and when decisions are made",
                  "EA principles - the enterprise's values for EA, e.g. open sharing of information, stakeholder participation, IT is a means not an end, commercial products on open standards, EA adds value",
                  "Support for strategy - executives must see EA's value for the outcomes that matter to them",
                  "Budget - by fiscal year and total lifecycle to show total cost of ownership (TCO); the first estimate is the baseline, and scope changes change the baseline"],
       "terms": [("Outcome measures", "progress toward a new end-state; quantitative and qualitative; tied to goal attainment, e.g. reduce IT project planning costs by 10% in one year"),
                 ("Output measures", "data on activities and things; usually quantitative, e.g. number of IT projects planned that year")]},
      {"heading": "EA Roles and Responsibilities (shown in a table)",
       "terms": [("Sponsor", "champion of the EA program; provides resources"),
                 ("CIO", "facilitates the EA program, leads resolution of high-level issues, integrates EA with other governance"),
                 ("Chief Architect", "manages the program, selects the framework, identifies standards, manages configuration management"),
                 ("Line of Business Managers", "requirements identification for each LOB"),
                 ("Solutions / Systems / Data Architects", "problem solving / systems analysis and design / database analysis and design"),
                 ("EA Tool Expert", "maintains the EA software application and repository"),
                 ("End-User Representative", "end-user requirements and QA feedback"),
                 ("Webmaster / Research Analyst", "EA website support / requirements analysis")]},
      {"heading": "Part 2 - Current Architecture Summary",
       "text": "Gives an integrated, top-down or bottom-up view of how current components support each other, without "
               "duplicating the full documentation.",
       "points": ["Business services - EA components are a means; do not procure without a strong business case",
                  "Systems and applications - comment on integration, scalability, user satisfaction, and reliance on proprietary solutions",
                  "Technology infrastructure - how voice, data, and video networks create a \"seamless\" infrastructure",
                  "IT security - only high-level descriptions; specific security information could reveal vulnerabilities",
                  "EA standards - the Technical Standards Reference Model (TSRM) for voice, data, video, and security",
                  "Workforce - people are often the most valuable resource; plan training"]},
      {"heading": "Part 3 - Future Architecture Summary",
       "points": ["Example scenarios - (1) status quo, (2) aggressive strategy in a good market, (3) defensive strategy in a down-turn",
                  "Planning assumptions - new capabilities and resources needed for the selected scenario",
                  "Updates are made top-down, starting with strategic goals and initiatives",
                  "Sequencing Plan - tasks, milestones, and timeframe for implementing new components",
                  "Configuration Management - standardized review of changes; standards followed or waived; documented waiver process; waivers with time limits; version control enforced"]},
    ],
  },
  {
    "num": 3, "title": "Investment Planning and Project Management", "chapter": "Chapter 11",
    "sections": [
      {"heading": "Capital Planning (CPIC)",
       "text": "Capital planning is the management and decision-making process for planning, selecting, controlling, and "
               "evaluating investments in resources, including EA components. EA is only effective if resources are "
               "applied to gaps in operational performance; with no gaps, no new components are needed.",
       "points": ["Analogy - the design must meet the owner's requirements within budget, and the architect works with a builder on construction, schedule, and budget",
                  "CPIC promotes - finding performance gaps, choosing components to close them, business cases (alternatives, alignment, value), managing the investment portfolio, maximizing value, and a culture of learning",
                  "A significant part of IT governance is implemented through CPIC, overseen by an Executive Steering Committee of top executives"]},
      {"heading": "The Four CPIC Phases (a cycle around the Project Management Plan)",
       "terms": [("Planning", "requirements, business case, project plan; produces proposed investments"),
                 ("Selection", "funding decision and project sequencing"),
                 ("Control", "ongoing projects checked for cost, schedule, performance, and risk"),
                 ("Evaluation", "Post-Implementation Review (PIR) of completed projects and review of operational systems for continuing value; lessons learned feed operational upgrades back into Planning")]},
      {"heading": "Project Management",
       "text": "Project and program management develops, implements, operates, improves, and retires enterprise resources.",
       "terms": [("Project", "a temporary endeavor that creates a unique product, service, or result"),
                 ("Program", "an ongoing endeavor that manages existing processes/resources or oversees new ones through projects")],
       "points": ["Five aspects PMs manage - scope, costs, schedule, product performance, and risk",
                  "PMP sections - project requirements, strategic alignment, architectural alignment, business case (alternatives, cost-benefit, ROI), project controls (budget, schedule and WBS, metrics, risk), project enterprise, security and privacy"]},
    ],
  },
]

COMPARISONS = [
  ("As-is vs. To-be", "As-is = current IT resources. To-be = future view, several years ahead."),
  ("Defensive vs. Offensive moves", "Defensive = probable responses. Offensive = initiatives."),
  ("Upward vs. Downward alignment", "Upward = with strategic goals and initiatives. Downward = lower three levels adjusted to support changes."),
  ("Data Dictionary vs. Object Library", "Dictionary = formats only, no actual data. Library = formats plus the actual code modules."),
  ("Outcome vs. Output measures", "Outcome = progress to a new end-state (goal attainment). Output = counts of activities and things."),
  ("EA Management Plan vs. PMP", "EA Management Plan = whole-enterprise transition. PMP = one project's plan, at the center of CPIC."),
  ("Future PMP needed?", "Not for waterfall or RAD (one effort). Yes for incremental (phased) or spiral (evolutionary)."),
  ("Selection vs. Control vs. Evaluation", "Selection = funding decision. Control = ongoing projects. Evaluation = PIR and continuing value."),
  ("Project vs. Program", "Project = temporary and unique. Program = ongoing."),
]


# Diagrams drawn under the section with the same heading (see figures.py).
FIGURES = {
  "The Future (\"To-Be\") View": {"type": "flow", "caption": "Moving from the current view to the future view.",
      "boxes": ["Current view|\"as-is\": IT resources active today", "EA Management Plan|transition and sequencing plan", "Future view|\"to-be\": IT resources years from now"],
      "labels": ["managed by", "leads to"], "shade": [1]},
  "Strategic Level": {"type": "stack", "caption": "The five levels of the EA framework; updates are made top-down.",
      "side": "top-down", "boxes": ["Strategic Level|goals and initiatives", "Business Level|products, services, processes",
      "Information Level|data and information flows", "Systems/Services Level|systems and applications",
      "Infrastructure Level|networks and infrastructure"], "shade": [0]},
  "Future CONOPS Scenarios": {"type": "flow", "caption": "How future CONOPS scenarios are chosen and used.",
      "boxes": ["SWOT Analysis|internal and external factors", "Several future scenarios|good and bad environments", "Planning assumptions|defensive and offensive moves"]},
  "Plan Outline": {"type": "columns", "caption": "The four parts of the EA Management Plan.", "cols": [
      {"title": "Part 1|EA Program Management", "rows": ["Governance and principles", "Roles", "Budget", "Measures"]},
      {"title": "Part 2|Current Architecture", "rows": ["Goals, services", "Systems", "Infrastructure", "Standards, workforce"]},
      {"title": "Part 3|Future Architecture", "rows": ["Future scenarios", "Planning assumptions", "Sequencing plan", "Configuration mgmt."]},
      {"title": "Part 4|Glossary and References", "rows": ["Glossary", "Acronym list", "Bibliography"]}]},
  "Part 1 - EA Program Management": {"type": "columns", "caption": "Outcome vs. output measures.", "cols": [
      {"title": "Outcome measures", "rows": ["Progress toward a new end-state", "Tied to goal attainment", "e.g., reduce planning costs by 10%"]},
      {"title": "Output measures", "rows": ["Data on activities and things", "Usually quantitative", "e.g., number of IT projects planned"]}]},
  "The Four CPIC Phases (a cycle around the Project Management Plan)": {"type": "cycle", "caption": "The CPIC cycle around the Project Management Plan.",
      "center": "Project Management Plan|(PMP)", "boxes": ["Plan|requirements, business case", "Select|funding decision", "Control|cost, schedule, risk", "Evaluate|PIR, continuing value"]},
}
