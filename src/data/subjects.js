// To add quiz questions, fill in the `questions` array inside each reviewer.

export const subjects = [
  {
    "id": "ea",
    "code": "EA",
    "name": "Enterprise Architecture",
    "description": "Covers frameworks, models, and strategies for aligning IT infrastructure with business goals.",
    "color": "#7c3aed",
    "reviewers": [
      {
        "id": "quiz1_mc",
        "title": "Quiz 1 — Multiple Choice",
        "description": "100-item multiple choice quiz covering Parts 1–3 of the EA reviewer.",
        "quizletLink": null,
        "questions": [
          {
            "id": 1,
            "question": "Which of the following best defines an \"Enterprise\"?",
            "options": [
              "An organization that only exists in the private sector.",
              "A single software system used to manage corporate data.",
              "An organization or sub-activity whose boundary is defined by commonly-held goals, processes, and resources.",
              "A strict set of technology standards for network infrastructure."
            ],
            "answer": 2
          },
          {
            "id": 2,
            "question": "What is the definition of \"Enterprise Architecture\" (EA)?",
            "options": [
              "The process of coding software for enterprise-level deployment.",
              "The analysis and documentation of an enterprise in its current and future states from an integrated strategy, business, and technology perspective.",
              "A strictly technology-driven process for upgrading IT systems.",
              "The physical blueprint for constructing an organization's headquarters."
            ],
            "answer": 1
          },
          {
            "id": 3,
            "question": "What does the equation \"EA = S + B + T\" stand for?",
            "options": [
              "Enterprise Architecture = Systems + Budgets + Timelines",
              "Enterprise Architecture = Strategy + Business + Technology",
              "Enterprise Architecture = Security + Baselines + Tools",
              "Enterprise Architecture = Standards + Business + Tactics"
            ],
            "answer": 1
          },
          {
            "id": 4,
            "question": "In the context of the EA management program, what is \"Governance\"?",
            "options": [
              "The physical servers that run the enterprise.",
              "The specific steps used to establish the EA program.",
              "The planning, decision-making, and oversight processes and groups that determine how the EA is developed and maintained.",
              "The documentation of the \"as-is\" state of the organization."
            ],
            "answer": 2
          },
          {
            "id": 5,
            "question": "Which core element of EA identifies the specific steps to establish and maintain an EA program?",
            "options": [
              "Artifacts",
              "Methodology",
              "Framework",
              "Standards"
            ],
            "answer": 1
          },
          {
            "id": 6,
            "question": "What is the purpose of an EA \"Framework\"?",
            "options": [
              "It provides the physical boundaries of the office network.",
              "It identifies the scope of the overall architecture and the type and relationship of the various sub-architecture levels and threads.",
              "It stores the financial data of the enterprise.",
              "It acts as the legal governing body of the organization."
            ],
            "answer": 1
          },
          {
            "id": 7,
            "question": "In EA, what are \"Artifacts\"?",
            "options": [
              "Outdated technology components no longer in use.",
              "Physical hardware used in network infrastructure.",
              "The types and methods of documentation used in each sub-architecture area, such as documents, diagrams, and models.",
              "The employees who manage the EA repository."
            ],
            "answer": 2
          },
          {
            "id": 8,
            "question": "Which core element identifies proven ways to implement parts of the overall architecture?",
            "options": [
              "Best Practices",
              "Standards",
              "Governance",
              "Framework"
            ],
            "answer": 0
          },
          {
            "id": 9,
            "question": "How does EA provide \"Strategic Alignment\"?",
            "options": [
              "By ensuring all employees work the same hours.",
              "By connecting goals, activities, and resources, maximizing efficiency and effectiveness.",
              "By eliminating all outdated technologies instantly.",
              "By allowing technology to drive business planning."
            ],
            "answer": 1
          },
          {
            "id": 10,
            "question": "Which management program element supports financial control and configuration management?",
            "options": [
              "Resource Oversight",
              "Strategic Alignment",
              "Standardized Policy",
              "Decision Support"
            ],
            "answer": 3
          },
          {
            "id": 11,
            "question": "What is the \"Current Architecture\"?",
            "options": [
              "The planned capabilities of the enterprise in five years.",
              "The \"to-be\" view of the architecture.",
              "The baseline inventory of EA components that currently exist within the enterprise at each level of the framework (the \"as-is\" view).",
              "Only the physical hardware currently in use."
            ],
            "answer": 2
          },
          {
            "id": 12,
            "question": "What does the \"Future Architecture\" document?",
            "options": [
              "The history of the company's technology failures.",
              "Only the emerging technologies that have not yet been invented.",
              "The new or modified EA components needed to close an existing performance gap or support a new strategic initiative (the \"to-be\" view).",
              "The current operating state of the enterprise."
            ],
            "answer": 2
          },
          {
            "id": 13,
            "question": "What is the purpose of the \"EA Management Plan\"?",
            "options": [
              "To hire new IT staff.",
              "To articulate the EA program and documentation approach, and provide a sequencing plan for managing the transition to the future environment.",
              "To define the legal structure of the enterprise.",
              "To strictly monitor employee internet usage."
            ],
            "answer": 1
          },
          {
            "id": 14,
            "question": "Which of the following is considered a \"Thread\" in EA documentation?",
            "options": [
              "Marketing",
              "IT-related security",
              "Facilities management",
              "Financial auditing"
            ],
            "answer": 1
          },
          {
            "id": 15,
            "question": "What is a \"Line of Business\" (LOB)?",
            "options": [
              "A single software application.",
              "A distinct area of activity within the enterprise, such as manufacturing or internal administrative functions.",
              "The direct reporting line from staff to CEO.",
              "A strictly external supply chain."
            ],
            "answer": 1
          },
          {
            "id": 16,
            "question": "What defines an \"Architecture Segment\"?",
            "options": [
              "A part of the overall EA that documents one or more lines of business at all levels and threads, capable of existing as a stand-alone part.",
              "A fragment of a broken database.",
              "A specific time period during which the EA is active.",
              "A single server rack in the data center."
            ],
            "answer": 0
          },
          {
            "id": 17,
            "question": "What is a \"Vertical Component\"?",
            "options": [
              "A goal, process, program, or resource that serves several lines of business.",
              "A hierarchical organizational chart.",
              "A changeable goal, process, program, or resource that serves exactly one line of business.",
              "A system that only operates in the cloud."
            ],
            "answer": 2
          },
          {
            "id": 18,
            "question": "What is a \"Horizontal (Crosscutting) Component\"?",
            "options": [
              "A component that serves only one specific department.",
              "A changeable goal, process, program, or resource that serves several lines of business.",
              "The physical floor plan of the enterprise.",
              "A technology that has been decommissioned."
            ],
            "answer": 1
          },
          {
            "id": 19,
            "question": "What is a \"Reference Architecture\"?",
            "options": [
              "A dictionary of business terms.",
              "The part of an EA that provides standards and documentation for a particular type of capability throughout the enterprise (e.g., cloud computing).",
              "A list of competitors' architectures.",
              "A textbook used to train new architects."
            ],
            "answer": 1
          },
          {
            "id": 20,
            "question": "What is the main function of the \"EA Repository\"?",
            "options": [
              "To securely destroy old data.",
              "To act as a website and database that stores EA documentation and provides links to EA tools to make them useable by stakeholders.",
              "To automatically write code for new applications.",
              "To manage the company's financial accounts."
            ],
            "answer": 1
          },
          {
            "id": 21,
            "question": "Why is EA considered a \"Meta-Discipline\"?",
            "options": [
              "Because it only deals with metadata.",
              "Because it is purely theoretical and has no practical application.",
              "Because it serves as an umbrella or \"meta-context\" for all other management and technology best practices.",
              "Because it was invented by a company named Meta."
            ],
            "answer": 2
          },
          {
            "id": 22,
            "question": "Which area is NOT typically listed as a thread present across all levels of the EA3 framework?",
            "options": [
              "Security",
              "Standards",
              "Skills",
              "Sales"
            ],
            "answer": 3
          },
          {
            "id": 23,
            "question": "Under the EA Management Program, what does \"Resource Oversight\" provide?",
            "options": [
              "A lifecycle approach to development/management.",
              "A way to bypass IT security.",
              "Financial audits of the CEO.",
              "Marketing strategies."
            ],
            "answer": 0
          },
          {
            "id": 24,
            "question": "How does EA handle \"Standards\"?",
            "options": [
              "It ignores external standards to focus on internal ones.",
              "It relies solely on proprietary vendor solutions.",
              "It draws on accepted international, national, and industry standards to promote non-proprietary solutions and enhance component integration.",
              "It assumes standards are only relevant to the technology level."
            ],
            "answer": 2
          },
          {
            "id": 25,
            "question": "Which is an example of a Horizontal (Crosscutting) Component?",
            "options": [
              "A specialized robotic arm for one manufacturing line.",
              "An enterprise-wide email system.",
              "A localized sales database for a single store.",
              "A custom marketing strategy for a specific product."
            ],
            "answer": 1
          },
          {
            "id": 26,
            "question": "What is the definition of \"Culture\" in an enterprise context?",
            "options": [
              "The financial standing of the organization.",
              "The beliefs, customs, values, structure, normative rules, and material traits of a social organization.",
              "The specific software programs used by HR.",
              "The physical architecture of the office building."
            ],
            "answer": 1
          },
          {
            "id": 27,
            "question": "How is a \"Stakeholder\" defined in the EA program?",
            "options": [
              "Only the executives who fund the project.",
              "Only the IT staff who implement the technology.",
              "Everyone who is or will be affected by a policy, program, project, activity, or resource.",
              "External customers only."
            ],
            "answer": 2
          },
          {
            "id": 28,
            "question": "According to the Leavitt Diamond, what are the four interacting components of an organization?",
            "options": [
              "Task, Structure, People, Technology",
              "Time, Space, Money, Power",
              "Teams, Strategy, Products, Tactics",
              "Task, Security, Policy, Tools"
            ],
            "answer": 0
          },
          {
            "id": 29,
            "question": "In the Parsons/Thompson Model, what is the \"Institutional Level\"?",
            "options": [
              "Where the actual \"product\" of the organization is processed.",
              "Where mediation between the organization and the task environment occurs.",
              "Where the organization establishes rules and relates to the larger society to secure legitimacy, meaning, and higher-level support.",
              "Where independent workers form external networks."
            ],
            "answer": 2
          },
          {
            "id": 30,
            "question": "In the Parsons/Thompson Model, what is the function of the \"Managerial Level\"?",
            "options": [
              "Processing the actual product of the organization.",
              "Mediating between the organization and the immediate task environment, administering internal affairs, and handling resources/products.",
              "Interacting exclusively with society for higher-level meaning.",
              "Writing software code for the technical level."
            ],
            "answer": 1
          },
          {
            "id": 31,
            "question": "In the Parsons/Thompson Model, what characterizes the \"Technical Level\"?",
            "options": [
              "It is where the organization establishes its overarching rules.",
              "It is a highly political and unformalized area.",
              "It is where the actual \"product\" is processed, acting \"rationally\" and trying to seal off functions from external uncertainties.",
              "It strictly handles public relations."
            ],
            "answer": 2
          },
          {
            "id": 32,
            "question": "What is the definition of \"Change Management\"?",
            "options": [
              "The automated process of updating software versions.",
              "The process of setting expectations and involving stakeholders in how a process/activity will change, so they have some control and are more accepting.",
              "Randomly altering business processes to see what works best.",
              "Firing employees who resist new technology."
            ],
            "answer": 1
          },
          {
            "id": 33,
            "question": "Why is the \"Home Architecture Analogy\" relevant to enterprise structure and culture?",
            "options": [
              "It proves that businesses should be run from home.",
              "It shows that an architect must understand the composition, preferences, and activities of the occupants (people) to produce an effective design.",
              "It implies that building a house is cheaper than building an EA.",
              "It suggests that IT infrastructure should look like a residential building."
            ],
            "answer": 1
          },
          {
            "id": 34,
            "question": "According to the text, what happens if an EA program introduces changes without giving stakeholders some level of control?",
            "options": [
              "The changes are implemented twice as fast.",
              "The EA program may be resisted by stakeholders.",
              "The stakeholders will automatically support the EA.",
              "The technology will fail to run."
            ],
            "answer": 1
          },
          {
            "id": 35,
            "question": "Which of the following is a way to successfully manage change and increase stakeholder control?",
            "options": [
              "Keeping EA plans a secret until launch.",
              "Involving stakeholders in EA program establishment and regularly communicating activities.",
              "Excluding user input from decision-making.",
              "Overpromising what the EA program can accomplish."
            ],
            "answer": 1
          },
          {
            "id": 36,
            "question": "Enterprise Architecture is as much about people and social interaction as it is about:",
            "options": [
              "Marketing and sales.",
              "Processes and resource utilization.",
              "Legal compliance and taxation.",
              "Hardware manufacturing."
            ],
            "answer": 1
          },
          {
            "id": 37,
            "question": "How does the presence of an EA program affect organizational change?",
            "options": [
              "It completely stops change from occurring.",
              "It causes change to happen in a disjointed, independent manner.",
              "It coordinates change so it is driven by new strategies and business requirements, rather than just new technologies.",
              "It ensures change is only driven by IT departments."
            ],
            "answer": 2
          },
          {
            "id": 38,
            "question": "When matching the EA3 Cube Framework to the Parsons/Thompson Model, the \"Goals & Initiatives\" level generally aligns with which Parsons/Thompson level?",
            "options": [
              "Technical Level",
              "Managerial Level",
              "Institutional Level",
              "Independent Worker"
            ],
            "answer": 2
          },
          {
            "id": 39,
            "question": "In the Organizational Network Model, what connects the Executive Team to the Functional Teams?",
            "options": [
              "Physical network cables.",
              "Lines of communication and organizational structure within the Organizational Boundary.",
              "External suppliers.",
              "The Technical Level only."
            ],
            "answer": 1
          },
          {
            "id": 40,
            "question": "Why do enterprise cultures differ even within the same organization (sub-enterprises)?",
            "options": [
              "Because they use different computers.",
              "Because culture is an amalgamation of the distinct values, beliefs, habits, and preferences of all people in that specific area.",
              "Because IT policies enforce different cultures.",
              "Because stakeholders do not exist in sub-enterprises."
            ],
            "answer": 1
          },
          {
            "id": 41,
            "question": "In the Leavitt Diamond, if the \"Technology\" component is changed, what is the expected result?",
            "options": [
              "No other components will be affected.",
              "Only the \"Structure\" will change.",
              "The Task, Structure, and People components will also be affected.",
              "The enterprise will automatically fail."
            ],
            "answer": 2
          },
          {
            "id": 42,
            "question": "Which field is considered a contributing field to the \"Organizational Theory\" influence on EA?",
            "options": [
              "Computer Science",
              "Engineering",
              "Sociology",
              "Information Security"
            ],
            "answer": 2
          },
          {
            "id": 43,
            "question": "Which field is considered a contributing field to the \"Systems Theory\" influence on EA?",
            "options": [
              "Psychology",
              "Operations Research",
              "Political Science",
              "Sociology"
            ],
            "answer": 1
          },
          {
            "id": 44,
            "question": "What defines an \"Organization\" versus an \"Enterprise\" in the context of the EA3 framework alignment?",
            "options": [
              "Organizations only involve technology.",
              "Enterprises are types of social organizations where concepts of organizational theory are applicable.",
              "Organizations have no stakeholders.",
              "Enterprises do not have a culture."
            ],
            "answer": 1
          },
          {
            "id": 45,
            "question": "Which of the following is NOT one of the contributing concepts from Organizational Theory to EA?",
            "options": [
              "Beliefs",
              "Culture",
              "Systems Lifecycle Development",
              "Bureaucracy"
            ],
            "answer": 2
          },
          {
            "id": 46,
            "question": "In the Parsons/Thompson model, which level tries to \"seal off\" its functions from external uncertainties?",
            "options": [
              "Institutional",
              "Managerial",
              "Technical",
              "Executive"
            ],
            "answer": 2
          },
          {
            "id": 47,
            "question": "Managing stakeholder expectations involves:",
            "options": [
              "Telling them the EA will fix every problem immediately.",
              "Ensuring they understand realistically what the EA program can and cannot do.",
              "Forcing them to read the entire EA framework manual.",
              "Ignoring their concerns to maintain project speed."
            ],
            "answer": 1
          },
          {
            "id": 48,
            "question": "What is the ultimate risk of ignoring the culture and structure of an enterprise when building an EA?",
            "options": [
              "The EA software will crash.",
              "The EA will not accurately reflect organizational goals or gain stakeholder support.",
              "The EA will be completed too quickly.",
              "The enterprise will be forced to change its name."
            ],
            "answer": 1
          },
          {
            "id": 49,
            "question": "An EA program acts as a bridge between different stakeholders, such as:",
            "options": [
              "Only internal employees.",
              "Business units, IT teams, and executives.",
              "Only the CEO and the Chief Architect.",
              "Only external customers and vendors."
            ],
            "answer": 1
          },
          {
            "id": 50,
            "question": "What is a key characteristic of the Managerial level in organizational structure?",
            "options": [
              "It strictly deals with raw material input.",
              "It is less formalized and more political as it mediates between the organization and the task environment.",
              "It establishes the highest level of societal rules.",
              "It is completely isolated from all external forces."
            ],
            "answer": 1
          },
          {
            "id": 51,
            "question": "What is the primary overall value of Enterprise Architecture?",
            "options": [
              "It guarantees an immediate increase in stock price.",
              "It enhances resource-planning capabilities and supports better decision-making.",
              "It eliminates the need for human workers.",
              "It allows the enterprise to operate without a budget."
            ],
            "answer": 1
          },
          {
            "id": 52,
            "question": "Which of the following is considered a Financial Risk associated with implementing an EA?",
            "options": [
              "The EA tools are too difficult to use.",
              "Stakeholders refuse to participate in the EA process.",
              "The significant cost of establishing current/future views, plans, and regular updates.",
              "The enterprise's strategic goals are too vague."
            ],
            "answer": 2
          },
          {
            "id": 53,
            "question": "How does EA enhance \"Top-down planning\"?",
            "options": [
              "By starting with technology upgrades first.",
              "By beginning with considerations for strategy and business, enhanced by holistic perspectives of the enterprise.",
              "By eliminating the need for executive input.",
              "By allowing individual programs to plan independently."
            ],
            "answer": 1
          },
          {
            "id": 54,
            "question": "How does EA enhance \"Bottom-up planning\"?",
            "options": [
              "It coordinates what would otherwise be disparate and separate program-level planning activities.",
              "It forces lower-level employees to create the strategic vision.",
              "It ignores LOB requirements in favor of executive mandates.",
              "It mandates the use of legacy systems."
            ],
            "answer": 0
          },
          {
            "id": 55,
            "question": "Which of the following is a risk defined as \"Loss of Key Personnel\"?",
            "options": [
              "Losing executives who do not understand EA.",
              "The departure of skilled architects, analysts, and developers, creating delays and affecting implementation costs.",
              "Firing employees who resist change.",
              "The retirement of the company founder."
            ],
            "answer": 1
          },
          {
            "id": 56,
            "question": "What is the risk associated with \"Lack of Acceptance\"?",
            "options": [
              "The EA tools are incompatible with current hardware.",
              "The EA represents a new way of looking at resources that stakeholders may reject, preventing the realization of value.",
              "The budget is not approved by the finance department.",
              "The strategic goals are not accepted by the public."
            ],
            "answer": 1
          },
          {
            "id": 57,
            "question": "What is \"Risk Mitigation\" in the context of an EA program?",
            "options": [
              "Ignoring uncertainties until they become problems.",
              "Actions that lower uncertainty, such as strengthening executive support, ensuring trained backups, and using detailed methodologies.",
              "Eliminating all technology from the enterprise to prevent cyber attacks.",
              "Only addressing financial costs."
            ],
            "answer": 1
          },
          {
            "id": 58,
            "question": "How does an EA help quantify value through \"Shortening Planning Cycles\"?",
            "options": [
              "By skipping the planning phase entirely.",
              "By providing a robust repository of on-line information regarding current and future processes, reducing time spent gathering data separately.",
              "By limiting the number of people allowed in planning meetings.",
              "By outsourcing planning to a third party."
            ],
            "answer": 1
          },
          {
            "id": 59,
            "question": "How does EA contribute to the \"Reduction of Duplicative Resources\"?",
            "options": [
              "By firing half of the IT staff.",
              "By aiding the visualization of where current resource value areas overlap, allowing for the elimination of redundant data or systems.",
              "By buying more servers to handle data overload.",
              "By isolating business units so they cannot share resources."
            ],
            "answer": 1
          },
          {
            "id": 60,
            "question": "What is meant by quantifying value through \"Reduced Re-work\"?",
            "options": [
              "Never updating software applications.",
              "Avoiding conflicting program-level initiatives and misunderstandings through holistic planning and standard modeling techniques.",
              "Lowering the quality standards of final products.",
              "Outsourcing all development work."
            ],
            "answer": 1
          },
          {
            "id": 61,
            "question": "How does EA quantify value through \"Fewer People in a Process\"?",
            "options": [
              "By arbitrarily firing employees to meet budget cuts.",
              "By supporting Business Process Reengineering (BPR) to eliminate repetitive parts of a process, equating to payroll savings.",
              "By replacing all staff with Artificial Intelligence.",
              "By making employees work longer hours."
            ],
            "answer": 1
          },
          {
            "id": 62,
            "question": "When quantifying EA program costs, which approach is recommended?",
            "options": [
              "Looking only at the initial purchase price of EA software tools.",
              "Approaching it from a program lifecycle view (implementation, maintenance, and refreshment phases).",
              "Calculating only the salaries of the IT department.",
              "Ignoring indirect costs completely."
            ],
            "answer": 1
          },
          {
            "id": 63,
            "question": "In linking EA and Strategy, what are \"Strategic Goals\"?",
            "options": [
              "The business and technology activities that execute the mission.",
              "The primary objectives of the enterprise, typically requiring several years to accomplish.",
              "The outcome metrics that identify when a project is finished.",
              "The daily operational targets of individual workers."
            ],
            "answer": 1
          },
          {
            "id": 64,
            "question": "In linking EA and Strategy, what are \"Strategic Initiatives\"?",
            "options": [
              "Outcome measures that define when the enterprise \"wins.\"",
              "The primary objectives requiring several years to accomplish.",
              "The business and technology activities, programs, and projects that enable the accomplishment of strategic goals.",
              "The software applications used by the HR department."
            ],
            "answer": 2
          },
          {
            "id": 65,
            "question": "In linking EA and Strategy, what are \"Strategic Measures\"?",
            "options": [
              "The physical dimensions of the enterprise's facilities.",
              "Outcome measures that identify when a strategic initiative has successfully met a strategic goal.",
              "The budget allocated to the EA program.",
              "The number of employees in a line of business."
            ],
            "answer": 1
          },
          {
            "id": 66,
            "question": "When linking EA and Business Planning, why is it important to document business activities?",
            "options": [
              "To justify increasing executive bonuses.",
              "To support Business Process Improvement (BPI) and identify inputs, outputs, outcomes, and links between processes.",
              "To eliminate the need for technology entirely.",
              "To find reasons to terminate employees."
            ],
            "answer": 1
          },
          {
            "id": 67,
            "question": "When linking EA and Technology Planning, what is the primary role of technology?",
            "options": [
              "To act as the sole catalyst for organizational change.",
              "To dictate the strategic goals of the enterprise.",
              "To serve as a resource that enables information and resource flows to support business products/services, which achieve strategic goals.",
              "To consume as much of the budget as possible."
            ],
            "answer": 2
          },
          {
            "id": 68,
            "question": "Why is \"bottom-up planning\" (technology driving change) considered risky for resource-constrained enterprises?",
            "options": [
              "Because technology changes too slowly.",
              "Because the expense of duplicative, non-strategic technologies cannot be afforded.",
              "Because it requires hiring too many executives.",
              "Because strategy is irrelevant in small enterprises."
            ],
            "answer": 1
          },
          {
            "id": 69,
            "question": "Which of the following is considered a direct cost of an EA program?",
            "options": [
              "The general electricity bill of the entire company.",
              "Salary/benefits for a Chief Architect and EA team staff.",
              "The marketing budget for the enterprise's core product.",
              "The cost of raw materials for manufacturing."
            ],
            "answer": 1
          },
          {
            "id": 70,
            "question": "What is a key risk related to \"Documentation Tools\" in EA?",
            "options": [
              "They are too cheap and lack basic functionality.",
              "They are difficult to use for producing intuitive and informative \"management views\" of detailed EA information.",
              "They are illegal to use in most countries.",
              "They automatically delete old data."
            ],
            "answer": 1
          },
          {
            "id": 71,
            "question": "How does EA improve communication?",
            "options": [
              "By creating a common language and standardized approaches across the organization.",
              "By forcing everyone to learn advanced programming languages.",
              "By eliminating the need for face-to-face meetings.",
              "By keeping information restricted to the executive team."
            ],
            "answer": 0
          },
          {
            "id": 72,
            "question": "Does EA replace strategic planning or business process improvement?",
            "options": [
              "Yes, EA completely replaces all other forms of planning.",
              "Yes, EA makes BPI obsolete.",
              "No, EA does not replace them, but enhances them by contributing useful, integrated information.",
              "No, EA has no relationship to strategic planning."
            ],
            "answer": 2
          },
          {
            "id": 73,
            "question": "What role does an alternatives analysis, cost-benefit analysis, and ROI calculation play in an EA program?",
            "options": [
              "They are used to punish failed projects.",
              "They are the primary measures for evaluating the EA program's contribution to profitability/mission success (building a business case).",
              "They are only used when closing a business down.",
              "They are strictly required for IT security purposes."
            ],
            "answer": 1
          },
          {
            "id": 74,
            "question": "How does EA help with \"More Effective Planning Meetings\"?",
            "options": [
              "By providing catered food for the attendees.",
              "By allowing meetings to be conducted entirely via email.",
              "By presenting a common baseline of reference information, reducing ambiguity.",
              "By eliminating the need to have an agenda."
            ],
            "answer": 2
          },
          {
            "id": 75,
            "question": "What is a key step in identifying supporting technologies through EA?",
            "options": [
              "Buying the most expensive software available.",
              "Analyzing business requirements and activities to reveal critical dependencies (e.g., marketing needs sales data, manufacturing needs robotics).",
              "Waiting for vendors to pitch their products.",
              "Copying the exact technology stack of a competitor."
            ],
            "answer": 1
          }
        ]
      },
      {
        "id": "quiz_quizlet_mod1",
        "title": "Mod 1 — Quizlet Flash Cards",
        "description": "EA 1 flash cards on Quizlet — study and review Module 1 using the Quizlet set.",
        "quizletLink": "https://quizlet.com/ph/1198950424/ea-1-flash-cards/?i=719e9i&x=1jqt",
        "questions": []
      },
      {
        "id": "quiz_quizlet_mod2",
        "title": "Mod 2 — Quizlet Flash Cards",
        "description": "EA 2 flash cards on Quizlet — study and review Module 2 using the Quizlet set.",
        "quizletLink": "https://quizlet.com/ph/1198955731/ea-2-flash-cards/?i=719e9i&x=1jqt",
        "questions": []
      },
      {
        "id": "quiz_quizlet_mod3",
        "title": "Mod 3 — Quizlet Flash Cards",
        "description": "EA 3 flash cards on Quizlet — study and review Module 3 using the Quizlet set.",
        "quizletLink": "https://quizlet.com/ph/1199322177/ea-3-flash-cards/?i=719e9i&x=1jqt",
        "questions": []
      }
    ]
  },
  {
    "id": "cc6",
    "code": "CC 6",
    "name": "Information Management Lec",
    "description": "Covers database design, data modeling, SQL, and information systems management.",
    "color": "#9333ea",
    "reviewers": []
  },
  {
    "id": "oop",
    "code": "OOP",
    "name": "Object Oriented Programming",
    "description": "Covers OOP principles, Java fundamentals, UML, constructors, classes, and objects.",
    "color": "#0369a1",
    "reviewers": [
      {
        "id": "oop_output_tracing_v2",
        "title": "OOP Output Tracing Quiz (75 Items)",
        "description": "75-item output tracing reviewer (Easy, Intermediate, Hard) covering Constructors, this() chaining, Method Overloading, Static vs Instance state, and Object Reference mutability.",
        "quizletLink": null,
        "questions": [
          {
            "id": 1,
            "type": "output_tracing",
            "question": "Item 1 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee(10, 5000);\nSystem.out.println(e1.getId());",
            "answer": "10",
            "explanation": "Trace result: 10."
          },
          {
            "id": 2,
            "type": "output_tracing",
            "question": "Item 2 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee();\nSystem.out.println(e1.getId());",
            "answer": "100",
            "explanation": "Trace result: 100."
          },
          {
            "id": 3,
            "type": "output_tracing",
            "question": "Item 3 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee();\nSystem.out.println(e1.getSalary());",
            "answer": "500.0",
            "explanation": "Trace result: 500.0."
          },
          {
            "id": 4,
            "type": "output_tracing",
            "question": "Item 4 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee(20, 3000);\ne1.setSalary(3500);\nSystem.out.println(e1.getSalary());",
            "answer": "3500.0",
            "explanation": "Trace result: 3500.0."
          },
          {
            "id": 5,
            "type": "output_tracing",
            "question": "Item 5 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee.message();",
            "answer": "Employee created",
            "altAnswers": [
              "Employee, created",
              "Employee\ncreated"
            ],
            "explanation": "Trace result: Employee created."
          },
          {
            "id": 6,
            "type": "output_tracing",
            "question": "Item 6 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee();\ne1.message();",
            "answer": "Employee created",
            "altAnswers": [
              "Employee, created",
              "Employee\ncreated"
            ],
            "explanation": "Trace result: Employee created."
          },
          {
            "id": 7,
            "type": "output_tracing",
            "question": "Item 7 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee(7, 1000);\ne1.setId(99);\nSystem.out.println(e1.getId());",
            "answer": "99",
            "explanation": "Trace result: 99."
          },
          {
            "id": 8,
            "type": "output_tracing",
            "question": "Item 8 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(5, 2);\nSystem.out.println(c1.getAns());",
            "answer": "3.0",
            "explanation": "Trace result: 3.0."
          },
          {
            "id": 9,
            "type": "output_tracing",
            "question": "Item 9 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(2.0, 3.0);\nSystem.out.println(c1.getAns());",
            "answer": "5.0",
            "explanation": "Trace result: 5.0."
          },
          {
            "id": 10,
            "type": "output_tracing",
            "question": "Item 10 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nSystem.out.println(m1.getCalculate(0));",
            "answer": "12",
            "explanation": "Trace result: 12."
          },
          {
            "id": 11,
            "type": "output_tracing",
            "question": "Item 11 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nSystem.out.println(m1.getCalculate(1));",
            "answer": "4",
            "explanation": "Trace result: 4."
          },
          {
            "id": 12,
            "type": "output_tracing",
            "question": "Item 12 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nSystem.out.println(m1.getCalculate(2));",
            "answer": "32",
            "explanation": "Trace result: 32."
          },
          {
            "id": 13,
            "type": "output_tracing",
            "question": "Item 13 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nSystem.out.println(m1.getCalculate(3));",
            "answer": "2",
            "explanation": "Trace result: 2."
          },
          {
            "id": 14,
            "type": "output_tracing",
            "question": "Item 14 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nc1.add();\nSystem.out.println(c1.getNumber());",
            "answer": "1",
            "explanation": "Trace result: 1."
          },
          {
            "id": 15,
            "type": "output_tracing",
            "question": "Item 15 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nc1.add(5);\nSystem.out.println(c1.getNumber());",
            "answer": "5",
            "explanation": "Trace result: 5."
          },
          {
            "id": 16,
            "type": "output_tracing",
            "question": "Item 16 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nc1.add();\nc1.add();\nSystem.out.println(c1.getNumber());",
            "answer": "2",
            "explanation": "Trace result: 2."
          },
          {
            "id": 17,
            "type": "output_tracing",
            "question": "Item 17 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nc1.initialize();\nSystem.out.println(c1.getReused());",
            "answer": "1",
            "explanation": "Trace result: 1."
          },
          {
            "id": 18,
            "type": "output_tracing",
            "question": "Item 18 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount() {\n        this(\"Unknown\");\n    }\n    public BankAccount(String owner) {\n        this(owner, 100);\n    }\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n    public void deposit(double amt) { balance = balance + amt; }\n    public void withdraw(double amt) { balance = balance - amt; }\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\n// Code to trace:\nBankAccount b1 = new BankAccount(\"Maria\", 200);\nSystem.out.println(b1.getBalance());",
            "answer": "200.0",
            "explanation": "Trace result: 200.0."
          },
          {
            "id": 19,
            "type": "output_tracing",
            "question": "Item 19 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount() {\n        this(\"Unknown\");\n    }\n    public BankAccount(String owner) {\n        this(owner, 100);\n    }\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n    public void deposit(double amt) { balance = balance + amt; }\n    public void withdraw(double amt) { balance = balance - amt; }\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\n// Code to trace:\nBankAccount b1 = new BankAccount(\"Maria\", 200);\nb1.deposit(50);\nSystem.out.println(b1.getBalance());",
            "answer": "250.0",
            "explanation": "Trace result: 250.0."
          },
          {
            "id": 20,
            "type": "output_tracing",
            "question": "Item 20 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount() {\n        this(\"Unknown\");\n    }\n    public BankAccount(String owner) {\n        this(owner, 100);\n    }\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n    public void deposit(double amt) { balance = balance + amt; }\n    public void withdraw(double amt) { balance = balance - amt; }\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\n// Code to trace:\nBankAccount b1 = new BankAccount(\"Maria\", 200);\nb1.withdraw(75);\nSystem.out.println(b1.getBalance());",
            "answer": "125.0",
            "explanation": "Trace result: 125.0."
          },
          {
            "id": 21,
            "type": "output_tracing",
            "question": "Item 21 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Item {\n    private String name;\n    private static int count = 0;\n\n    public Item(String name) {\n        this.name = name;\n        count = count + 1;\n    }\n    public String getName() { return name; }\n    public int getMyCount() { return count; }\n    public static int getCount() { return count; }\n}\n\n// Code to trace:\nItem i1 = new Item(\"Pen\");\nSystem.out.println(i1.getName());",
            "answer": "Pen",
            "explanation": "Trace result: Pen."
          },
          {
            "id": 22,
            "type": "output_tracing",
            "question": "Item 22 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Item {\n    private String name;\n    private static int count = 0;\n\n    public Item(String name) {\n        this.name = name;\n        count = count + 1;\n    }\n    public String getName() { return name; }\n    public int getMyCount() { return count; }\n    public static int getCount() { return count; }\n}\n\n// Code to trace:\nItem i1 = new Item(\"Pen\");\nSystem.out.println(i1.getMyCount());",
            "answer": "1",
            "explanation": "Trace result: 1."
          },
          {
            "id": 23,
            "type": "output_tracing",
            "question": "Item 23 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Rectangle {\n    private double length;\n    private double width;\n\n    public Rectangle() {\n        this(1, 1);\n    }\n    public Rectangle(double side) {\n        this(side, side);\n    }\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    public double area() { return length * width; }\n    public double perimeter() { return 2 * (length + width); }\n    public void setLength(double length) { this.length = length; }\n}\n\n// Code to trace:\nRectangle r1 = new Rectangle(4, 5);\nSystem.out.println(r1.area());",
            "answer": "20.0",
            "explanation": "Trace result: 20.0."
          },
          {
            "id": 24,
            "type": "output_tracing",
            "question": "Item 24 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Rectangle {\n    private double length;\n    private double width;\n\n    public Rectangle() {\n        this(1, 1);\n    }\n    public Rectangle(double side) {\n        this(side, side);\n    }\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    public double area() { return length * width; }\n    public double perimeter() { return 2 * (length + width); }\n    public void setLength(double length) { this.length = length; }\n}\n\n// Code to trace:\nRectangle r1 = new Rectangle(4, 5);\nSystem.out.println(r1.perimeter());",
            "answer": "18.0",
            "explanation": "Trace result: 18.0."
          },
          {
            "id": 25,
            "type": "output_tracing",
            "question": "Item 25 [Part 1 (Easy)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Rectangle {\n    private double length;\n    private double width;\n\n    public Rectangle() {\n        this(1, 1);\n    }\n    public Rectangle(double side) {\n        this(side, side);\n    }\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    public double area() { return length * width; }\n    public double perimeter() { return 2 * (length + width); }\n    public void setLength(double length) { this.length = length; }\n}\n\n// Code to trace:\nRectangle r1 = new Rectangle(3);\nSystem.out.println(r1.area());",
            "answer": "9.0",
            "explanation": "Trace result: 9.0."
          },
          {
            "id": 26,
            "type": "output_tracing",
            "question": "Item 26 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee();\nSystem.out.println(e1.getId() + \" \" + e1.getSalary());",
            "answer": "100 500.0",
            "altAnswers": [
              "100, 500.0",
              "100\n500.0"
            ],
            "explanation": "Trace result: 100 500.0."
          },
          {
            "id": 27,
            "type": "output_tracing",
            "question": "Item 27 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator();\nSystem.out.println(c1.getAns());",
            "answer": "2.0",
            "explanation": "Trace result: 2.0."
          },
          {
            "id": 28,
            "type": "output_tracing",
            "question": "Item 28 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(9);\nSystem.out.println(c1.getAns());",
            "answer": "9.0",
            "explanation": "Trace result: 9.0."
          },
          {
            "id": 29,
            "type": "output_tracing",
            "question": "Item 29 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(5, 1);\nSystem.out.println(c1.getAns(0));",
            "answer": "8.0",
            "explanation": "Trace result: 8.0."
          },
          {
            "id": 30,
            "type": "output_tracing",
            "question": "Item 30 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(5, 1);\nSystem.out.println(c1.getAns(1));",
            "answer": "16.0",
            "explanation": "Trace result: 16.0."
          },
          {
            "id": 31,
            "type": "output_tracing",
            "question": "Item 31 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator();\nSystem.out.println(c1.getAns(0));",
            "answer": "4.0",
            "explanation": "Trace result: 4.0."
          },
          {
            "id": 32,
            "type": "output_tracing",
            "question": "Item 32 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(9);\nSystem.out.println(c1.getAns(1));",
            "answer": "81.0",
            "explanation": "Trace result: 81.0."
          },
          {
            "id": 33,
            "type": "output_tracing",
            "question": "Item 33 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nm1.setCalculate(10, 2);\nSystem.out.println(m1.getCalculate(0));",
            "answer": "12",
            "explanation": "Trace result: 12."
          },
          {
            "id": 34,
            "type": "output_tracing",
            "question": "Item 34 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nm1.setCalculate(10, 2);\nSystem.out.println(m1.getCalculate(3));",
            "answer": "5",
            "explanation": "Trace result: 5."
          },
          {
            "id": 35,
            "type": "output_tracing",
            "question": "Item 35 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nSystem.out.println(m1.getCalculate(0));\nm1.setCalculate(1, 1);\nSystem.out.println(m1.getCalculate(0));",
            "answer": "12\n2",
            "altAnswers": [
              "12 2",
              "12, 2"
            ],
            "explanation": "two separate println calls -> two lines: default numA=8,numB=4 gives getCalculate(0)=12 first; after setCalculate(1,1), getCalculate(0)=2"
          },
          {
            "id": 36,
            "type": "output_tracing",
            "question": "Item 36 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nc1.add(3);\nc1.add();\nSystem.out.println(c1.getNumber());",
            "answer": "4",
            "explanation": "Trace result: 4."
          },
          {
            "id": 37,
            "type": "output_tracing",
            "question": "Item 37 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nc1.add(4);\nc1.initialize();\nSystem.out.println(c1.getNumber() + \" \" + c1.getReused());",
            "answer": "0 1",
            "altAnswers": [
              "0, 1",
              "0\n1"
            ],
            "explanation": "Trace result: 0 1."
          },
          {
            "id": 38,
            "type": "output_tracing",
            "question": "Item 38 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nCounter c2 = new Counter();\nc1.add(2);\nc2.add(9);\nSystem.out.println(c1.getNumber() + \" \" + c2.getNumber());",
            "answer": "2 9",
            "altAnswers": [
              "2, 9",
              "2\n9"
            ],
            "explanation": "Trace result: 2 9."
          },
          {
            "id": 39,
            "type": "output_tracing",
            "question": "Item 39 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount() {\n        this(\"Unknown\");\n    }\n    public BankAccount(String owner) {\n        this(owner, 100);\n    }\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n    public void deposit(double amt) { balance = balance + amt; }\n    public void withdraw(double amt) { balance = balance - amt; }\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\n// Code to trace:\nBankAccount b1 = new BankAccount();\nSystem.out.println(b1.getOwner() + \" \" + b1.getBalance());",
            "answer": "Unknown 100.0",
            "altAnswers": [
              "Unknown, 100.0",
              "Unknown\n100.0"
            ],
            "explanation": "Trace result: Unknown 100.0."
          },
          {
            "id": 40,
            "type": "output_tracing",
            "question": "Item 40 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount() {\n        this(\"Unknown\");\n    }\n    public BankAccount(String owner) {\n        this(owner, 100);\n    }\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n    public void deposit(double amt) { balance = balance + amt; }\n    public void withdraw(double amt) { balance = balance - amt; }\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\n// Code to trace:\nBankAccount b1 = new BankAccount(\"Jake\");\nSystem.out.println(b1.getOwner() + \" \" + b1.getBalance());",
            "answer": "Jake 100.0",
            "altAnswers": [
              "Jake, 100.0",
              "Jake\n100.0"
            ],
            "explanation": "Trace result: Jake 100.0."
          },
          {
            "id": 41,
            "type": "output_tracing",
            "question": "Item 41 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount() {\n        this(\"Unknown\");\n    }\n    public BankAccount(String owner) {\n        this(owner, 100);\n    }\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n    public void deposit(double amt) { balance = balance + amt; }\n    public void withdraw(double amt) { balance = balance - amt; }\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\n// Code to trace:\nBankAccount b1 = new BankAccount(\"Jake\");\nb1.deposit(20);\nb1.withdraw(5);\nSystem.out.println(b1.getBalance());",
            "answer": "115.0",
            "explanation": "Trace result: 115.0."
          },
          {
            "id": 42,
            "type": "output_tracing",
            "question": "Item 42 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Item {\n    private String name;\n    private static int count = 0;\n\n    public Item(String name) {\n        this.name = name;\n        count = count + 1;\n    }\n    public String getName() { return name; }\n    public int getMyCount() { return count; }\n    public static int getCount() { return count; }\n}\n\n// Code to trace:\nItem i1 = new Item(\"Pen\");\nItem i2 = new Item(\"Notebook\");\nSystem.out.println(i1.getMyCount());",
            "answer": "2",
            "explanation": "Trace result: 2."
          },
          {
            "id": 43,
            "type": "output_tracing",
            "question": "Item 43 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Item {\n    private String name;\n    private static int count = 0;\n\n    public Item(String name) {\n        this.name = name;\n        count = count + 1;\n    }\n    public String getName() { return name; }\n    public int getMyCount() { return count; }\n    public static int getCount() { return count; }\n}\n\n// Code to trace:\nItem i1 = new Item(\"Pen\");\nItem i2 = new Item(\"Notebook\");\nItem i3 = new Item(\"Eraser\");\nSystem.out.println(i2.getMyCount() + \" \" + i3.getMyCount());",
            "answer": "3 3",
            "altAnswers": [
              "3, 3",
              "3\n3"
            ],
            "explanation": "Trace result: 3 3."
          },
          {
            "id": 44,
            "type": "output_tracing",
            "question": "Item 44 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Item {\n    private String name;\n    private static int count = 0;\n\n    public Item(String name) {\n        this.name = name;\n        count = count + 1;\n    }\n    public String getName() { return name; }\n    public int getMyCount() { return count; }\n    public static int getCount() { return count; }\n}\n\n// Code to trace:\nItem i1 = new Item(\"Pen\");\nItem i2 = new Item(\"Notebook\");\nSystem.out.println(Item.getCount());",
            "answer": "2",
            "explanation": "Trace result: 2."
          },
          {
            "id": 45,
            "type": "output_tracing",
            "question": "Item 45 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Rectangle {\n    private double length;\n    private double width;\n\n    public Rectangle() {\n        this(1, 1);\n    }\n    public Rectangle(double side) {\n        this(side, side);\n    }\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    public double area() { return length * width; }\n    public double perimeter() { return 2 * (length + width); }\n    public void setLength(double length) { this.length = length; }\n}\n\n// Code to trace:\nRectangle r1 = new Rectangle();\nSystem.out.println(r1.area());",
            "answer": "1.0",
            "explanation": "Trace result: 1.0."
          },
          {
            "id": 46,
            "type": "output_tracing",
            "question": "Item 46 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Rectangle {\n    private double length;\n    private double width;\n\n    public Rectangle() {\n        this(1, 1);\n    }\n    public Rectangle(double side) {\n        this(side, side);\n    }\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    public double area() { return length * width; }\n    public double perimeter() { return 2 * (length + width); }\n    public void setLength(double length) { this.length = length; }\n}\n\n// Code to trace:\nRectangle r1 = new Rectangle();\nSystem.out.println(r1.perimeter());",
            "answer": "4.0",
            "explanation": "Trace result: 4.0."
          },
          {
            "id": 47,
            "type": "output_tracing",
            "question": "Item 47 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Rectangle {\n    private double length;\n    private double width;\n\n    public Rectangle() {\n        this(1, 1);\n    }\n    public Rectangle(double side) {\n        this(side, side);\n    }\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    public double area() { return length * width; }\n    public double perimeter() { return 2 * (length + width); }\n    public void setLength(double length) { this.length = length; }\n}\n\n// Code to trace:\nRectangle r1 = new Rectangle(2, 6);\nr1.setLength(10);\nSystem.out.println(r1.area());",
            "answer": "60.0",
            "explanation": "Trace result: 60.0."
          },
          {
            "id": 48,
            "type": "output_tracing",
            "question": "Item 48 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee(50, 800);\nEmployee e2 = new Employee();\nSystem.out.println(e1.getId() + \" \" + e2.getId());",
            "answer": "50 100",
            "altAnswers": [
              "50, 100",
              "50\n100"
            ],
            "explanation": "Trace result: 50 100."
          },
          {
            "id": 49,
            "type": "output_tracing",
            "question": "Item 49 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee();\ne1.setId(300);\nEmployee e2 = new Employee();\nSystem.out.println(e1.getId() + \" \" + e2.getId());",
            "answer": "300 100",
            "altAnswers": [
              "300, 100",
              "300\n100"
            ],
            "explanation": "Trace result: 300 100."
          },
          {
            "id": 50,
            "type": "output_tracing",
            "question": "Item 50 [Part 2 (Intermediate)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(3, 8);\nCalculator c2 = new Calculator(3.0, 8.0);\nSystem.out.println(c1.getAns() + \" \" + c2.getAns());",
            "answer": "-5.0 11.0",
            "altAnswers": [
              "-5.0, 11.0",
              "-5.0\n11.0"
            ],
            "explanation": "Trace result: -5.0 11.0."
          },
          {
            "id": 51,
            "type": "output_tracing",
            "question": "Item 51 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Item {\n    private String name;\n    private static int count = 0;\n\n    public Item(String name) {\n        this.name = name;\n        count = count + 1;\n    }\n    public String getName() { return name; }\n    public int getMyCount() { return count; }\n    public static int getCount() { return count; }\n}\n\n// Code to trace:\nItem i1 = new Item(\"Pen\");\nItem i2 = new Item(\"Notebook\");\nItem i3 = new Item(\"Eraser\");\nSystem.out.println(i1.getMyCount() + \" \" + i2.getMyCount() + \" \" + i3.getMyCount());",
            "answer": "3 3 3",
            "altAnswers": [
              "3, 3, 3",
              "3\n3\n3"
            ],
            "explanation": "static count is shared by all objects — every object reports the current total, not the count at the moment it was created"
          },
          {
            "id": 52,
            "type": "output_tracing",
            "question": "Item 52 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Item {\n    private String name;\n    private static int count = 0;\n\n    public Item(String name) {\n        this.name = name;\n        count = count + 1;\n    }\n    public String getName() { return name; }\n    public int getMyCount() { return count; }\n    public static int getCount() { return count; }\n}\n\n// Code to trace:\nItem i1 = new Item(\"Pen\");\nSystem.out.println(Item.getCount());\nItem i2 = new Item(\"Notebook\");\nSystem.out.println(Item.getCount());\nSystem.out.println(i1.getMyCount());",
            "answer": "1\n2\n2",
            "altAnswers": [
              "1 2 2",
              "1, 2, 2"
            ],
            "explanation": "i1.getMyCount() reports the LIVE static count, not the count frozen at i1's own creation — this is the key static-field trap"
          },
          {
            "id": 53,
            "type": "output_tracing",
            "question": "Item 53 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(10, 4);\nCalculator c2 = new Calculator();\nCalculator c3 = new Calculator(7);\nSystem.out.println(c1.getAns() + \" \" + c2.getAns() + \" \" + c3.getAns());",
            "answer": "6.0 2.0 9.0",
            "altAnswers": [
              "6.0, 2.0, 9.0",
              "6.0\n2.0\n9.0"
            ],
            "explanation": "c1: Calculator(10,4) -> ans = 10-4 = 6.0 c2: Calculator() -> this(4,2) -> ans = 4-2 = 2.0 c3: Calculator(7) -> this(6.0,3.0) -> ans = 6.0+3.0 = 9.0"
          },
          {
            "id": 54,
            "type": "output_tracing",
            "question": "Item 54 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(4, 4);\nSystem.out.println(c1.getAns(0) + \" \" + c1.getAns(1));",
            "answer": "0.0 0.0",
            "altAnswers": [
              "0.0, 0.0",
              "0.0\n0.0"
            ],
            "explanation": "Calculator(4,4) -> ans = 4-4 = 0.0; getAns(0)=0+0=0.0, getAns(1)=0*0=0.0"
          },
          {
            "id": 55,
            "type": "output_tracing",
            "question": "Item 55 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator();\nSystem.out.println(c1.getAns(1));",
            "answer": "4.0",
            "explanation": "Calculator() -> ans=2.0; getAns(1) -> ans*ans = 4.0"
          },
          {
            "id": 56,
            "type": "output_tracing",
            "question": "Item 56 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(7);\nSystem.out.println(c1.getAns(0));",
            "answer": "18.0",
            "explanation": "Calculator(7) -> ans=9.0; getAns(0) -> ans+ans = 18.0"
          },
          {
            "id": 57,
            "type": "output_tracing",
            "question": "Item 57 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nMDAS m2 = new MDAS();\nm1.setCalculate(20, 5);\nSystem.out.println(m1.getCalculate(3) + \" \" + m2.getCalculate(3));",
            "answer": "4 2",
            "altAnswers": [
              "4, 2",
              "4\n2"
            ],
            "explanation": "m1.setCalculate(20,5) changes ONLY m1 -> m1.getCalculate(3)=20/5=4; m2 is untouched, still default 8,4 -> m2.getCalculate(3)=8/4=2"
          },
          {
            "id": 58,
            "type": "output_tracing",
            "question": "Item 58 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nm1.setCalculate(m1.getCalculate(0), m1.getCalculate(1));\nSystem.out.println(m1.getCalculate(2));",
            "answer": "48",
            "explanation": "default numA=8,numB=4: a=getCalculate(0)=12, b=getCalculate(1)=4; setCalculate(12,4); getCalculate(2)=12*4=48"
          },
          {
            "id": 59,
            "type": "output_tracing",
            "question": "Item 59 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nc1.add();\nc1.add(4);\nc1.initialize();\nc1.add(2);\nSystem.out.println(c1.getNumber() + \" \" + c1.getReused());",
            "answer": "2 1",
            "altAnswers": [
              "2, 1",
              "2\n1"
            ],
            "explanation": "Trace result: 2 1."
          },
          {
            "id": 60,
            "type": "output_tracing",
            "question": "Item 60 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nc1.initialize();\nc1.initialize();\nc1.add(3);\nc1.initialize();\nSystem.out.println(c1.getNumber() + \" \" + c1.getReused());",
            "answer": "0 3",
            "altAnswers": [
              "0, 3",
              "0\n3"
            ],
            "explanation": "Trace result: 0 3."
          },
          {
            "id": 61,
            "type": "output_tracing",
            "question": "Item 61 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount() {\n        this(\"Unknown\");\n    }\n    public BankAccount(String owner) {\n        this(owner, 100);\n    }\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n    public void deposit(double amt) { balance = balance + amt; }\n    public void withdraw(double amt) { balance = balance - amt; }\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\n// Code to trace:\nBankAccount b1 = new BankAccount();\nBankAccount b2 = new BankAccount(\"Sam\");\nBankAccount b3 = new BankAccount(\"Sam\", 500);\nSystem.out.println(b1.getBalance() + \" \" + b2.getBalance() + \" \" + b3.getBalance());",
            "answer": "100.0 100.0 500.0",
            "altAnswers": [
              "100.0, 100.0, 500.0",
              "100.0\n100.0\n500.0"
            ],
            "explanation": "Trace result: 100.0 100.0 500.0."
          },
          {
            "id": 62,
            "type": "output_tracing",
            "question": "Item 62 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount() {\n        this(\"Unknown\");\n    }\n    public BankAccount(String owner) {\n        this(owner, 100);\n    }\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n    public void deposit(double amt) { balance = balance + amt; }\n    public void withdraw(double amt) { balance = balance - amt; }\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\n// Code to trace:\nBankAccount b1 = new BankAccount(\"Ana\");\nb1.deposit(100);\nBankAccount b2 = b1;\nb2.withdraw(50);\nSystem.out.println(b1.getBalance());",
            "answer": "150.0",
            "explanation": "b1 starts at 100.0 via this(\"Ana\",100); deposit(100) -> 200.0; b2=b1 means BOTH names point to the SAME object; b2.withdraw(50) -> 150.0; b1 sees the same change -> 150.0"
          },
          {
            "id": 63,
            "type": "output_tracing",
            "question": "Item 63 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Rectangle {\n    private double length;\n    private double width;\n\n    public Rectangle() {\n        this(1, 1);\n    }\n    public Rectangle(double side) {\n        this(side, side);\n    }\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    public double area() { return length * width; }\n    public double perimeter() { return 2 * (length + width); }\n    public void setLength(double length) { this.length = length; }\n}\n\n// Code to trace:\nRectangle r1 = new Rectangle();\nRectangle r2 = new Rectangle(5);\nRectangle r3 = new Rectangle(2, 8);\nSystem.out.println(r1.area() + \" \" + r2.area() + \" \" + r3.area());",
            "answer": "1.0 25.0 16.0",
            "altAnswers": [
              "1.0, 25.0, 16.0",
              "1.0\n25.0\n16.0"
            ],
            "explanation": "Trace result: 1.0 25.0 16.0."
          },
          {
            "id": 64,
            "type": "output_tracing",
            "question": "Item 64 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Rectangle {\n    private double length;\n    private double width;\n\n    public Rectangle() {\n        this(1, 1);\n    }\n    public Rectangle(double side) {\n        this(side, side);\n    }\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    public double area() { return length * width; }\n    public double perimeter() { return 2 * (length + width); }\n    public void setLength(double length) { this.length = length; }\n}\n\n// Code to trace:\nRectangle r1 = new Rectangle(4);\nr1.setLength(9);\nSystem.out.println(r1.area() + \" \" + r1.perimeter());",
            "answer": "36.0 26.0",
            "altAnswers": [
              "36.0, 26.0",
              "36.0\n26.0"
            ],
            "explanation": "Rectangle(4) -> this(4,4): length=4,width=4; setLength(9) changes ONLY length -> length=9, width=4 (unchanged); area=9*4=36.0; perimeter=2*(9+4)=26.0"
          },
          {
            "id": 65,
            "type": "output_tracing",
            "question": "Item 65 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee();\nEmployee e2 = new Employee();\ne1.setSalary(999);\nSystem.out.println(e1.getSalary() + \" \" + e2.getSalary());",
            "answer": "999.0 500.0",
            "altAnswers": [
              "999.0, 500.0",
              "999.0\n500.0"
            ],
            "explanation": "Trace result: 999.0 500.0."
          },
          {
            "id": 66,
            "type": "output_tracing",
            "question": "Item 66 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Employee {\n    private int id;\n    private double salary;\n\n    public Employee() {\n        this(100, 500);\n    }\n    public Employee(int id, double salary) {\n        this.id = id;\n        this.salary = salary;\n    }\n    public void setId(int idNum) { id = idNum; }\n    public int getId() { return id; }\n    public void setSalary(double salary) { this.salary = salary; }\n    public double getSalary() { return salary; }\n    public static void message() {\n        System.out.println(\"Employee created\");\n    }\n}\n\n// Code to trace:\nEmployee e1 = new Employee(1, 100);\ne1.setId(e1.getId() + 9);\nSystem.out.println(e1.getId());",
            "answer": "10",
            "explanation": "Trace result: 10."
          },
          {
            "id": 67,
            "type": "output_tracing",
            "question": "Item 67 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(6, 2);\ndouble x = c1.getAns();\nCalculator c2 = new Calculator((int) x, 1);\nSystem.out.println(c2.getAns());",
            "answer": "3.0",
            "explanation": "c1=Calculator(6,2) -> ans=4.0; x=4.0; (int)x=4; c2=Calculator(4,1) -> Calculator(int,int) -> ans=4-1=3.0"
          },
          {
            "id": 68,
            "type": "output_tracing",
            "question": "Item 68 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nint a = m1.getCalculate(0);\nint b = m1.getCalculate(1);\nm1.setCalculate(a, b);\nSystem.out.println(m1.getCalculate(0));",
            "answer": "16",
            "explanation": "a=8+4=12, b=8-4=4; setCalculate(12,4); getCalculate(0)=12+4=16"
          },
          {
            "id": 69,
            "type": "output_tracing",
            "question": "Item 69 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Item {\n    private String name;\n    private static int count = 0;\n\n    public Item(String name) {\n        this.name = name;\n        count = count + 1;\n    }\n    public String getName() { return name; }\n    public int getMyCount() { return count; }\n    public static int getCount() { return count; }\n}\n\n// Code to trace:\nItem i1 = new Item(\"A\");\nItem i2 = new Item(\"B\");\nItem i3 = i2;\nItem i4 = new Item(\"C\");\nSystem.out.println(i3.getMyCount());",
            "answer": "3",
            "explanation": "i3 = i2 does NOT create a new Item — i3 just points to the same object as i2. The static counter only increases when \"new\" runs, so after i1,i2,i4 are created, count=3; i3.getMyCount() reads that same live count = 3"
          },
          {
            "id": 70,
            "type": "output_tracing",
            "question": "Item 70 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Counter {\n    private int number = 0;\n    private int reused = 0;\n\n    public void add() { number = number + 1; }\n    public void add(int x) { number = number + x; }\n    public void initialize() {\n        number = 0;\n        reused = reused + 1;\n    }\n    public int getNumber() { return number; }\n    public int getReused() { return reused; }\n}\n\n// Code to trace:\nCounter c1 = new Counter();\nCounter c2 = new Counter();\nc1.add(5);\nc2 = c1;\nc2.add(5);\nSystem.out.println(c1.getNumber() + \" \" + c2.getNumber());",
            "answer": "10 10",
            "altAnswers": [
              "10, 10",
              "10\n10"
            ],
            "explanation": "c2 = c1 makes c2 point to the SAME Counter object as c1; c1.add(5) -> number=5; c2.add(5) on the same object -> number=10; both c1 and c2 report 10"
          },
          {
            "id": 71,
            "type": "output_tracing",
            "question": "Item 71 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Calculator {\n    private int numA;\n    private int numB;\n    private double ans;\n\n    public Calculator() {\n        this(4, 2);\n    }\n    public Calculator(int numA) {\n        this(6.0, 3.0);\n    }\n    public Calculator(int numA, int numB) {\n        this.ans = numA - numB;\n    }\n    public Calculator(double numA, double numB) {\n        this.ans = numA + numB;\n    }\n    public double getAns() {\n        return ans;\n    }\n    public double getAns(int n) {\n        if (n == 0)\n            return ans + ans;\n        else\n            return ans * ans;\n    }\n}\n\n// Code to trace:\nCalculator c1 = new Calculator(10, 5);\nSystem.out.println(c1.getAns(0) + c1.getAns(1));",
            "answer": "35.0",
            "explanation": "ans=10-5=5.0; getAns(0)=5+5=10.0; getAns(1)=5*5=25.0; 10.0 + 25.0 = 35.0, ordinary numeric addition since both are double"
          },
          {
            "id": 72,
            "type": "output_tracing",
            "question": "Item 72 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class BankAccount {\n    private String owner;\n    private double balance;\n\n    public BankAccount() {\n        this(\"Unknown\");\n    }\n    public BankAccount(String owner) {\n        this(owner, 100);\n    }\n    public BankAccount(String owner, double balance) {\n        this.owner = owner;\n        this.balance = balance;\n    }\n    public void deposit(double amt) { balance = balance + amt; }\n    public void withdraw(double amt) { balance = balance - amt; }\n    public double getBalance() { return balance; }\n    public String getOwner() { return owner; }\n}\n\n// Code to trace:\nBankAccount b1 = new BankAccount();\nb1.deposit(b1.getBalance());\nSystem.out.println(b1.getBalance());",
            "answer": "200.0",
            "explanation": "BankAccount() -> this(\"Unknown\") -> this(\"Unknown\",100) -> balance=100.0; deposit(b1.getBalance()) = deposit(100.0) -> balance=200.0"
          },
          {
            "id": 73,
            "type": "output_tracing",
            "question": "Item 73 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Rectangle {\n    private double length;\n    private double width;\n\n    public Rectangle() {\n        this(1, 1);\n    }\n    public Rectangle(double side) {\n        this(side, side);\n    }\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    public double area() { return length * width; }\n    public double perimeter() { return 2 * (length + width); }\n    public void setLength(double length) { this.length = length; }\n}\n\n// Code to trace:\nRectangle r1 = new Rectangle(3, 3);\nr1.setLength(r1.area());\nSystem.out.println(r1.area());",
            "answer": "27.0",
            "explanation": "Rectangle(3,3) -> area=9.0; setLength(9.0) -> length=9, width=3 (unchanged); new area = 9.0*3 = 27.0"
          },
          {
            "id": 74,
            "type": "output_tracing",
            "question": "Item 74 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class MDAS {\n    private int numA;\n    private int numB;\n\n    public MDAS() {\n        numA = 8;\n        numB = 4;\n    }\n    public void setCalculate(int numA, int numB) {\n        this.numA = numA;\n        this.numB = numB;\n    }\n    public int getCalculate(int n) {\n        if (n == 0) return numA + numB;\n        else if (n == 1) return numA - numB;\n        else if (n == 2) return numA * numB;\n        else return numA / numB;\n    }\n}\n\n// Code to trace:\nMDAS m1 = new MDAS();\nSystem.out.println(m1.getCalculate(0) + m1.getCalculate(1) + m1.getCalculate(2));",
            "answer": "48",
            "explanation": "default numA=8,numB=4: getCalculate(0)=12, getCalculate(1)=4, getCalculate(2)=32; 12+4+32=48"
          },
          {
            "id": 75,
            "type": "output_tracing",
            "question": "Item 75 [Part 3 (Hard)] — What is the exact output of this code?",
            "code": "// Reference Class:\npublic class Item {\n    private String name;\n    private static int count = 0;\n\n    public Item(String name) {\n        this.name = name;\n        count = count + 1;\n    }\n    public String getName() { return name; }\n    public int getMyCount() { return count; }\n    public static int getCount() { return count; }\n}\n\n// Code to trace:\nItem i1 = new Item(\"A\");\nItem i2 = new Item(\"B\");\nItem i3 = new Item(\"C\");\nItem i4 = new Item(\"D\");\nSystem.out.println(i1.getMyCount() + i4.getMyCount());",
            "answer": "8",
            "explanation": "four Items created -> static count=4; i1.getMyCount() and i4.getMyCount() both read the same LIVE count = 4; 4+4=8"
          }
        ]
      },
      {
        "id": "oop_quizlet_1",
        "title": "OOP 1 — Quizlet Flash Cards",
        "description": "OOP 1 flash cards on Quizlet — study and review Module 1 using the Quizlet set.",
        "quizletLink": "https://quizlet.com/ph/1199330018/oop-1-flash-cards/?i=719e9i&x=1jqt",
        "questions": []
      },
      {
        "id": "oop_quizlet_2",
        "title": "OOP 2 — Quizlet Flash Cards",
        "description": "OOP 2 flash cards on Quizlet — study and review Module 2 using the Quizlet set.",
        "quizletLink": "https://quizlet.com/ph/1199330494/oop-2-flash-cards/?i=719e9i&x=1jqt",
        "questions": []
      },
      {
        "id": "oop_quizlet_3",
        "title": "OOP 3 — Quizlet Flash Cards",
        "description": "OOP 3 flash cards on Quizlet — study and review Module 3 using the Quizlet set.",
        "quizletLink": "https://quizlet.com/ph/1199330895/oop-3-flash-cards/?i=719e9i&x=1jqt",
        "questions": []
      },
      {
        "id": "oop_quizlet_4",
        "title": "OOP 4 — Quizlet Flash Cards",
        "description": "OOP 4 flash cards on Quizlet — study and review Module 4 using the Quizlet set.",
        "quizletLink": "https://quizlet.com/ph/1199331228/oop-4-flash-cards/?i=719e9i&x=1jqt",
        "questions": []
      }
    ]
  },
  {
    "id": "comprog3",
    "code": "COMPROG 3",
    "name": "Computer Programming 3 Lec",
    "description": "Covers advanced programming concepts, data structures, and algorithm design.",
    "color": "#7c3aed",
    "reviewers": []
  },
  {
    "id": "ipt1",
    "code": "IPT1",
    "name": "Integrative Programming Technologies 1",
    "description": "Covers web services, APIs, system integration, and modern programming frameworks.",
    "color": "#6d28d9",
    "reviewers": [
      {
        "id": "ipt1_quiz1",
        "title": "Quiz 1 — Systems Integration Reviewer",
        "description": "97-item reviewer covering Introduction to Modern Systems Integration and Review Materials Week 2 and 3: 52 multiple choice (Parts A & B) and 45 true/false (Part C).",
        "quizletLink": null,
        "questions": [
          {
            "id": 1,
            "type": "mc",
            "question": "What is the window for another app to communicate?",
            "options": [
              "Virus",
              "API",
              "Delete",
              "Coupling"
            ],
            "answer": 1
          },
          {
            "id": 2,
            "type": "mc",
            "question": "A program or application that does one certain job on its own.",
            "options": [
              "System",
              "Server",
              "Message",
              "Network"
            ],
            "answer": 0
          },
          {
            "id": 3,
            "type": "mc",
            "question": "Connecting separate systems so they share information and act as one.",
            "options": [
              "Encryption",
              "Debugging",
              "Systems integration",
              "Data entry"
            ],
            "answer": 2
          },
          {
            "id": 4,
            "type": "mc",
            "question": "The agreed method one system uses to ask another for something and get an answer back.",
            "options": [
              "Firewall",
              "Markup language",
              "Communication mechanism",
              "Static page"
            ],
            "answer": 2
          },
          {
            "id": 5,
            "type": "mc",
            "question": "Arranging shared data in a common, agreed format so different systems can understand it.",
            "options": [
              "Compression",
              "Data standardization",
              "Backup",
              "Coupling"
            ],
            "answer": 1
          },
          {
            "id": 6,
            "type": "mc",
            "question": "An API that can be reached over the internet, so systems anywhere can call it.",
            "options": [
              "Database",
              "Middleware",
              "Hub",
              "Web service"
            ],
            "answer": 3
          },
          {
            "id": 7,
            "type": "mc",
            "question": "Being able to exchange information and also actually understand it.",
            "options": [
              "Interoperability",
              "Reliability",
              "Formatting",
              "Hosting"
            ],
            "answer": 0
          },
          {
            "id": 8,
            "type": "mc",
            "question": "How dependent two systems are on each other.",
            "options": [
              "Bandwidth",
              "Coupling",
              "Latency",
              "Storage"
            ],
            "answer": 1
          },
          {
            "id": 9,
            "type": "mc",
            "question": "Systems depend on each other's inner details, so a change in one breaks the other.",
            "options": [
              "Loose coupling",
              "Microservices",
              "Tight coupling",
              "Middleware"
            ],
            "answer": 2
          },
          {
            "id": 10,
            "type": "mc",
            "question": "Systems depend only on an agreed message, so each can change safely inside itself.",
            "options": [
              "Loose coupling",
              "Tight coupling",
              "Point-to-point",
              "Static coupling"
            ],
            "answer": 0
          },
          {
            "id": 11,
            "type": "mc",
            "question": "The agreed shape of the data that systems pass to each other, often written in JSON.",
            "options": [
              "Password",
              "Cookie",
              "Session",
              "Message"
            ],
            "answer": 3
          },
          {
            "id": 12,
            "type": "mc",
            "question": "Software that sits between systems and passes messages for them, like a translator and post office in one.",
            "options": [
              "Middleware",
              "Antivirus",
              "Browser",
              "Compiler"
            ],
            "answer": 0
          },
          {
            "id": 13,
            "type": "mc",
            "question": "The cycle where a client asks and a server answers, usually with JSON.",
            "options": [
              "Copy and paste",
              "Request and response",
              "Login and logout",
              "Save and exit"
            ],
            "answer": 1
          },
          {
            "id": 14,
            "type": "mc",
            "question": "The side that sends the request.",
            "options": [
              "Server",
              "Hub",
              "Client",
              "Message"
            ],
            "answer": 2
          },
          {
            "id": 15,
            "type": "mc",
            "question": "The side that sends back the response.",
            "options": [
              "Client",
              "Server",
              "Middleware",
              "Spoke"
            ],
            "answer": 1
          },
          {
            "id": 16,
            "type": "mc",
            "question": "Small independent services that each do one job and talk through APIs.",
            "options": [
              "Mainframes",
              "Macros",
              "Microservices",
              "Modules"
            ],
            "answer": 2
          },
          {
            "id": 17,
            "type": "mc",
            "question": "Shared services hosted online, where you pay for what you use and scale when you need to.",
            "options": [
              "The cloud",
              "The hub",
              "The client",
              "The cache"
            ],
            "answer": 0
          },
          {
            "id": 18,
            "type": "mc",
            "question": "Systems that react to something happening, such as an order being placed, instead of constantly checking for updates.",
            "options": [
              "Schedule-driven",
              "Event-driven",
              "Data-driven",
              "Static"
            ],
            "answer": 1
          },
          {
            "id": 19,
            "type": "mc",
            "question": "Every system is wired directly to every other system.",
            "options": [
              "Hub-and-spoke",
              "Middleware",
              "Point-to-point",
              "Cloud"
            ],
            "answer": 2
          },
          {
            "id": 20,
            "type": "mc",
            "question": "All systems connect to one central piece that routes messages between them.",
            "options": [
              "Point-to-point",
              "Hub-and-spoke",
              "Microservices",
              "Peer-to-peer"
            ],
            "answer": 1
          },
          {
            "id": 21,
            "type": "mc",
            "question": "A site that shows the same thing to everyone and never changes on its own.",
            "options": [
              "Dynamic website",
              "Broken website",
              "Static website",
              "Secure website"
            ],
            "answer": 2
          },
          {
            "id": 22,
            "type": "mc",
            "question": "A site whose content changes based on who is looking and what is happening.",
            "options": [
              "Dynamic website",
              "Static website",
              "Landing page",
              "Portal"
            ],
            "answer": 0
          },
          {
            "id": 23,
            "type": "mc",
            "question": "The language that lays out the structure and content, like the skeleton of the page.",
            "options": [
              "CSS",
              "JavaScript",
              "SQL",
              "HTML"
            ],
            "answer": 3
          },
          {
            "id": 24,
            "type": "mc",
            "question": "The language that handles the look and design, like the clothes and colors.",
            "options": [
              "HTML",
              "CSS",
              "JavaScript",
              "JSON"
            ],
            "answer": 1
          },
          {
            "id": 25,
            "type": "mc",
            "question": "The language that adds the behavior and logic, like the muscles that make things move.",
            "options": [
              "HTML",
              "CSS",
              "JavaScript",
              "XML"
            ],
            "answer": 2
          },
          {
            "id": 26,
            "type": "mc",
            "question": "The two common formats for shaping data that systems share.",
            "options": [
              "HTML and CSS",
              "XML and JSON",
              "PDF and DOCX",
              "SQL and PHP"
            ],
            "answer": 1
          },
          {
            "id": 27,
            "type": "mc",
            "question": "The shape of the data, which both sides must agree on.",
            "options": [
              "Meaning",
              "Speed",
              "Format",
              "Size"
            ],
            "answer": 2
          },
          {
            "id": 28,
            "type": "mc",
            "question": "What each field actually stands for, which both sides must also agree on.",
            "options": [
              "Format",
              "Meaning",
              "Volume",
              "Syntax"
            ],
            "answer": 1
          },
          {
            "id": 29,
            "type": "mc",
            "question": "The single agreed place where the correct data lives.",
            "options": [
              "Backup file",
              "Source of truth",
              "Master password",
              "Main server"
            ],
            "answer": 1
          },
          {
            "id": 30,
            "type": "mc",
            "question": "Systems share the same database or files.",
            "options": [
              "Data level",
              "Application level",
              "Process level",
              "Presentation level"
            ],
            "answer": 0
          },
          {
            "id": 31,
            "type": "mc",
            "question": "Systems call each other's functions or APIs.",
            "options": [
              "Data level",
              "Application level",
              "Process level",
              "Presentation level"
            ],
            "answer": 1
          },
          {
            "id": 32,
            "type": "mc",
            "question": "Systems coordinate one full workflow together.",
            "options": [
              "Data level",
              "Application level",
              "Process level",
              "Presentation level"
            ],
            "answer": 2
          },
          {
            "id": 33,
            "type": "mc",
            "question": "Many systems are combined into one screen or portal.",
            "options": [
              "Data level",
              "Application level",
              "Process level",
              "Presentation level"
            ],
            "answer": 3
          },
          {
            "id": 34,
            "type": "mc",
            "question": "One system sends XML while another expects JSON, so the data must be mapped from one shape to the other.",
            "options": [
              "Security",
              "Reliability",
              "Format mismatch",
              "Coupling"
            ],
            "answer": 2
          },
          {
            "id": 35,
            "type": "mc",
            "question": "The challenge of who is allowed to call a service and how the data is protected while it travels.",
            "options": [
              "Format mismatch",
              "Security",
              "Reliability",
              "Standardization"
            ],
            "answer": 1
          },
          {
            "id": 36,
            "type": "mc",
            "question": "The challenge of what happens when the other system is slow or down.",
            "options": [
              "Reliability",
              "Security",
              "Format mismatch",
              "Interoperability"
            ],
            "answer": 0
          },
          {
            "id": 37,
            "type": "mc",
            "question": "A food app asks a payment provider to process money without knowing how that provider works inside. What is it using?",
            "options": [
              "Virus",
              "API",
              "Middleware",
              "Cookie"
            ],
            "answer": 1
          },
          {
            "id": 38,
            "type": "mc",
            "question": "A function has the units locked inside it, so it keeps returning the old amount even after the units change. What does this show?",
            "options": [
              "Loose coupling",
              "Interoperability",
              "Tight coupling",
              "Reliability"
            ],
            "answer": 2
          },
          {
            "id": 39,
            "type": "mc",
            "question": "A function reads the units from the message handed to it, so it stays correct when the units change. What does this show?",
            "options": [
              "Loose coupling",
              "Tight coupling",
              "Format mismatch",
              "Security"
            ],
            "answer": 0
          },
          {
            "id": 40,
            "type": "mc",
            "question": "One system stores an amount in pesos and the other reads it as dollars. What has failed?",
            "options": [
              "Security",
              "Interoperability",
              "Reliability",
              "Coupling"
            ],
            "answer": 1
          },
          {
            "id": 41,
            "type": "mc",
            "question": "Three school offices re-type information by hand because their systems cannot share data. What is missing?",
            "options": [
              "Systems integration",
              "Data standardization",
              "Encryption",
              "Middleware"
            ],
            "answer": 0
          },
          {
            "id": 42,
            "type": "mc",
            "question": "A school portal shows grades, enrollment, and accounts together on one dashboard. Which level is this?",
            "options": [
              "Data level",
              "Process level",
              "Application level",
              "Presentation level"
            ],
            "answer": 3
          },
          {
            "id": 43,
            "type": "mc",
            "question": "A payment company will not hand over its private code, so it offers a safe doorway others can connect to instead. What is the doorway?",
            "options": [
              "Password",
              "API",
              "Database",
              "Backup"
            ],
            "answer": 1
          },
          {
            "id": 44,
            "type": "mc",
            "question": "Your system sends out a call for user number one, and the other system sends back JSON. What is this cycle?",
            "options": [
              "Request and response",
              "Hub-and-spoke",
              "Event-driven",
              "Coupling"
            ],
            "answer": 0
          },
          {
            "id": 45,
            "type": "mc",
            "question": "HTML, CSS, and JavaScript work together to build one page. What does this already demonstrate?",
            "options": [
              "Integration",
              "Encryption",
              "Standardization",
              "Debugging"
            ],
            "answer": 0
          },
          {
            "id": 46,
            "type": "mc",
            "question": "A company keeps adding systems, and the direct wires between them explode into a tangled mess. Which design is this?",
            "options": [
              "Hub-and-spoke",
              "Point-to-point",
              "Middleware",
              "Microservices"
            ],
            "answer": 1
          },
          {
            "id": 47,
            "type": "mc",
            "question": "The same company adds one central piece so every system connects there instead of to each other. Which design is this now?",
            "options": [
              "Point-to-point",
              "Microservices",
              "Hub-and-spoke",
              "Event-driven"
            ],
            "answer": 2
          },
          {
            "id": 48,
            "type": "mc",
            "question": "An online checkout talks to payment, inventory, and shipping all at once so the user sees one smooth process. What is this?",
            "options": [
              "Data standardization",
              "Systems integration",
              "Tight coupling",
              "Static design"
            ],
            "answer": 1
          },
          {
            "id": 49,
            "type": "mc",
            "question": "A store's system reacts the moment an order is placed instead of checking for new orders over and over. What kind of system is it?",
            "options": [
              "Event-driven",
              "Schedule-based",
              "Point-to-point",
              "Static"
            ],
            "answer": 0
          },
          {
            "id": 50,
            "type": "mc",
            "question": "A business rents server power online and scales up only during peak season. What is it using?",
            "options": [
              "Middleware",
              "The cloud",
              "A hub",
              "A web service"
            ],
            "answer": 1
          },
          {
            "id": 51,
            "type": "mc",
            "question": "System A never talks to System B directly. It hands its message to something in between, which delivers it. What is that something?",
            "options": [
              "Middleware",
              "API",
              "Client",
              "Format"
            ],
            "answer": 0
          },
          {
            "id": 52,
            "type": "mc",
            "question": "A restaurant system, a payment app, a mapping service, and a messaging service all work together so an order feels like one smooth app. What is this?",
            "options": [
              "One giant program",
              "Systems integration",
              "A static website",
              "Tight coupling"
            ],
            "answer": 1
          },
          {
            "id": 53,
            "type": "mc",
            "question": "A system is a program or application that performs a specific job on its own.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 54,
            "type": "mc",
            "question": "Systems integration means building every part of a program from zero.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 55,
            "type": "mc",
            "question": "Integration connects parts that already exist so they cooperate.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 56,
            "type": "mc",
            "question": "A communication mechanism is the agreed method for one system to send a request and receive a response.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 57,
            "type": "mc",
            "question": "When choosing how two systems will communicate, the platform each runs on does not matter.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 58,
            "type": "mc",
            "question": "Matching data is easier to pass between systems than mismatched data.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 59,
            "type": "mc",
            "question": "Data standardization arranges shared data in a common, agreed format.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 60,
            "type": "mc",
            "question": "Systems can throw raw data at each other as long as both are online.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 61,
            "type": "mc",
            "question": "A static website changes its content depending on who is looking at it.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 62,
            "type": "mc",
            "question": "A dynamic website changes based on the user or the situation.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 63,
            "type": "mc",
            "question": "CSS lays out the structure and content, like the skeleton.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 64,
            "type": "mc",
            "question": "JavaScript adds the behavior and logic, like the muscles.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 65,
            "type": "mc",
            "question": "A dynamic website can be built properly using only one language.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 66,
            "type": "mc",
            "question": "An API lets one system request data while the complex work stays hidden.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 67,
            "type": "mc",
            "question": "A web service is an API that can be reached over the internet.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 68,
            "type": "mc",
            "question": "To use another system's API, you must first understand how it works inside.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 69,
            "type": "mc",
            "question": "Interoperability means exchanging information, and exchanging alone is enough.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 70,
            "type": "mc",
            "question": "For interoperability, both the format and the meaning must agree.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 71,
            "type": "mc",
            "question": "If one system reads an amount as pesos and the other as dollars, interoperability has failed.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 72,
            "type": "mc",
            "question": "Coupling is how dependent two systems are on each other.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 73,
            "type": "mc",
            "question": "In tight coupling, a change in one system can break the other.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 74,
            "type": "mc",
            "question": "Loose coupling means systems depend only on an agreed message.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 75,
            "type": "mc",
            "question": "Tight coupling is what we aim for.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 76,
            "type": "mc",
            "question": "Loose coupling makes a setup easier to maintain and grow.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 77,
            "type": "mc",
            "question": "A message is the agreed shape of the data that systems pass to each other.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 78,
            "type": "mc",
            "question": "At the data level, systems share the same database or files.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 79,
            "type": "mc",
            "question": "At the presentation level, systems coordinate one full workflow together.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 80,
            "type": "mc",
            "question": "At the application level, systems call each other's functions or APIs.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 81,
            "type": "mc",
            "question": "Without integration, copies of data drift out of sync.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 82,
            "type": "mc",
            "question": "With integration, there is one source of truth.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 83,
            "type": "mc",
            "question": "In a well-integrated setup, the user should be able to tell how many systems are working behind the scenes.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 84,
            "type": "mc",
            "question": "In point-to-point, every system is wired directly to every other system.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 85,
            "type": "mc",
            "question": "Point-to-point stays manageable no matter how many systems you add.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 86,
            "type": "mc",
            "question": "In hub-and-spoke, one central hub routes messages between all the systems.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 87,
            "type": "mc",
            "question": "Middleware works like a translator and a post office combined.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 88,
            "type": "mc",
            "question": "With middleware in place, System A still talks to System B directly.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 89,
            "type": "mc",
            "question": "Middleware lets each system change on its own without breaking the other.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 90,
            "type": "mc",
            "question": "Microservices are small independent services that each do one job.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 91,
            "type": "mc",
            "question": "With the cloud, you pay for what you use and scale when you need to.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 92,
            "type": "mc",
            "question": "Event-driven systems constantly check for updates rather than reacting to events.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 93,
            "type": "mc",
            "question": "In the request and response cycle, your system acts as the server.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 94,
            "type": "mc",
            "question": "The response usually comes back as JSON.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 95,
            "type": "mc",
            "question": "Format mismatch happens when one system sends XML while another expects JSON.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          },
          {
            "id": 96,
            "type": "mc",
            "question": "Reliability asks who is allowed to call a service and how data is protected in transit.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1
          },
          {
            "id": 97,
            "type": "mc",
            "question": "Integration evolved from point-to-point wiring toward shared, standard services.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0
          }
        ]
      }
    ]
  },
  {
    "id": "wd",
    "code": "WD",
    "name": "Web Development Lec",
    "description": "Covers front-end and back-end web development, HTTP, and web application architecture.",
    "color": "#8b5cf6",
    "reviewers": [
      {
        "id": "wd_ch1_reviewer",
        "title": "Quiz 1 — Chapter 1 Reviewer",
        "description": "54-item reviewer covering Introduction to Web, HTML Structures, and IDEs: 12 Matching sets, 27 Enumeration items, and 15 Output Tracing items.",
        "quizletLink": null,
        "questions": [
          {
            "id": 1,
            "type": "matching",
            "question": "SET A — Match each description to the correct web era.",
            "pairs": [
              {
                "left": "Read-only, static",
                "correct": "A"
              },
              {
                "left": "Read-write, interactive",
                "correct": "B"
              },
              {
                "left": "Read-write-trust, verifiable",
                "correct": "C"
              },
              {
                "left": "1990s – Early 2000s",
                "correct": "A"
              },
              {
                "left": "Mid-2000s – Present",
                "correct": "B"
              },
              {
                "left": "Emerging",
                "correct": "C"
              },
              {
                "left": "The Static Web",
                "correct": "A"
              },
              {
                "left": "The Social Web",
                "correct": "B"
              },
              {
                "left": "The Decentralized Web",
                "correct": "C"
              },
              {
                "left": "Facebook, YouTube, Wikipedia, Amazon",
                "correct": "B"
              },
              {
                "left": "Ethereum, Solana, DeFi, OpenSea",
                "correct": "C"
              },
              {
                "left": "Early corporate or personal websites that looked like online brochures",
                "correct": "A"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Web 1.0"
              },
              {
                "key": "B",
                "label": "Web 2.0"
              },
              {
                "key": "C",
                "label": "Web 3.0"
              }
            ]
          },
          {
            "id": 2,
            "type": "matching",
            "question": "SET B — Match each characteristic to the web era it belongs to.",
            "pairs": [
              {
                "left": "Static HTML Pages (Read-only)",
                "correct": "A"
              },
              {
                "left": "Limited Interactivity",
                "correct": "A"
              },
              {
                "left": "Centralized Hosting",
                "correct": "A"
              },
              {
                "left": "Text & Images Only",
                "correct": "A"
              },
              {
                "left": "Dynamic Content (AJAX, JavaScript, PHP)",
                "correct": "B"
              },
              {
                "left": "User-Generated Content",
                "correct": "B"
              },
              {
                "left": "Social Networking Platforms",
                "correct": "B"
              },
              {
                "left": "APIs & Interoperability",
                "correct": "B"
              },
              {
                "left": "Mobile Web Adoption",
                "correct": "B"
              },
              {
                "left": "Blockchain & Decentralization",
                "correct": "C"
              },
              {
                "left": "Enhanced Privacy & Security",
                "correct": "C"
              },
              {
                "left": "Smart Contracts",
                "correct": "C"
              },
              {
                "left": "Tokenization & Digital Ownership (NFTs)",
                "correct": "C"
              },
              {
                "left": "AI & Machine Learning Integration",
                "correct": "C"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Web 1.0"
              },
              {
                "key": "B",
                "label": "Web 2.0"
              },
              {
                "key": "C",
                "label": "Web 3.0"
              }
            ]
          },
          {
            "id": 3,
            "type": "matching",
            "question": "SET C — Match each type of website to its description.",
            "pairs": [
              {
                "left": "Homepage / Corporate Website",
                "correct": "A"
              },
              {
                "left": "Blog / Online Magazine / Portfolio",
                "correct": "E"
              },
              {
                "left": "E-Commerce Website",
                "correct": "C"
              },
              {
                "left": "Landing Page / Microsite",
                "correct": "D"
              },
              {
                "left": "Web Platform",
                "correct": "B"
              },
              {
                "left": "Web App",
                "correct": "F"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Web Presence"
              },
              {
                "key": "B",
                "label": "Social media websites"
              },
              {
                "key": "C",
                "label": "Site built for online buying and selling"
              },
              {
                "key": "D",
                "label": "Single-purpose page or small standalone site"
              },
              {
                "key": "E",
                "label": "Content-publishing or showcase site"
              },
              {
                "key": "F",
                "label": "Website that functions like an application"
              }
            ]
          },
          {
            "id": 4,
            "type": "matching",
            "question": "SET D — Match each description to Static or Dynamic websites.",
            "pairs": [
              {
                "left": "Content stored unchangeably as individual files on the server",
                "correct": "A"
              },
              {
                "left": "Changes need manual editing and uploading",
                "correct": "A"
              },
              {
                "left": "Cost-effective, faster loading, but design changes can be tough",
                "correct": "A"
              },
              {
                "left": "CMS generates web pages dynamically",
                "correct": "B"
              },
              {
                "left": "Content and layout separated, assembled from a database",
                "correct": "B"
              },
              {
                "left": "Requires scripting languages (e.g., PHP) and databases (e.g., MySQL)",
                "correct": "B"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Static Website"
              },
              {
                "key": "B",
                "label": "Dynamic Website"
              }
            ]
          },
          {
            "id": 5,
            "type": "matching",
            "question": "SET E — Match each of the four elements of a webpage to its role.",
            "pairs": [
              {
                "left": "Content",
                "correct": "B"
              },
              {
                "left": "Structure",
                "correct": "A"
              },
              {
                "left": "Presentation (Style)",
                "correct": "C"
              },
              {
                "left": "Behavior (Interactivity)",
                "correct": "D"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "HTML — defines meaning (headings, lists, links)"
              },
              {
                "key": "B",
                "label": "HTML — all visible elements (text, images, audio, video, docs)"
              },
              {
                "key": "C",
                "label": "CSS — how it looks (colors, size, layout, design)"
              },
              {
                "key": "D",
                "label": "JavaScript — user interaction via scripts"
              }
            ]
          },
          {
            "id": 6,
            "type": "matching",
            "question": "SET F — Match each web language to its role.",
            "pairs": [
              {
                "left": "HTML",
                "correct": "A"
              },
              {
                "left": "CSS",
                "correct": "B"
              },
              {
                "left": "JavaScript",
                "correct": "C"
              },
              {
                "left": "PHP",
                "correct": "D"
              },
              {
                "left": "MySQL",
                "correct": "E"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Text-based markup language for structuring content; uses markers (tags), not commands or statements"
              },
              {
                "key": "B",
                "label": "Design language separating structure and layout; defines how HTML elements are displayed visually"
              },
              {
                "key": "C",
                "label": "Client-side scripting language that enhances HTML with interactive elements"
              },
              {
                "key": "D",
                "label": "Server-side scripting language that generates dynamic content and interacts with databases"
              },
              {
                "key": "E",
                "label": "Database used together with scripting languages in dynamic websites"
              }
            ]
          },
          {
            "id": 7,
            "type": "matching",
            "question": "SET G — Match each \"New Trend\" term to its description.",
            "pairs": [
              {
                "left": "Full Stack",
                "correct": "C"
              },
              {
                "left": "Front-End",
                "correct": "A"
              },
              {
                "left": "Back-End",
                "correct": "B"
              },
              {
                "left": "API",
                "correct": "D"
              },
              {
                "left": "Database",
                "correct": "E"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Focuses on user interface and experience in the browser; uses HTML, CSS, and JavaScript"
              },
              {
                "key": "B",
                "label": "Handles server logic, databases, and application processing; uses PHP, Python, or Node.js"
              },
              {
                "key": "C",
                "label": "Covers both client and server development; handles the entire web application workflow"
              },
              {
                "key": "D",
                "label": "Set of rules that allow applications to communicate and integrate"
              },
              {
                "key": "E",
                "label": "Organized collection of data for easy access, storing, retrieving, and updating"
              }
            ]
          },
          {
            "id": 8,
            "type": "matching",
            "question": "SET H — Match each HTML document structure element to its description.",
            "pairs": [
              {
                "left": "<!DOCTYPE>",
                "correct": "B"
              },
              {
                "left": "<html>",
                "correct": "A"
              },
              {
                "left": "<head>",
                "correct": "C"
              },
              {
                "left": "<title>",
                "correct": "D"
              },
              {
                "left": "<body>",
                "correct": "E"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Root element of an HTML document; contains all other HTML elements"
              },
              {
                "key": "B",
                "label": "Not an HTML tag; an instruction telling the browser which HTML version is used"
              },
              {
                "key": "C",
                "label": "Container for metadata; placed between the root element and the body; not displayed on the page"
              },
              {
                "key": "D",
                "label": "Defines the document title; appears on the browser tab, bookmarks, and search results"
              },
              {
                "key": "E",
                "label": "Contains all visible content; only one is allowed per HTML document"
              }
            ]
          },
          {
            "id": 9,
            "type": "matching",
            "question": "SET I — Match each element inside the <head> to its description.",
            "pairs": [
              {
                "left": "<title>",
                "correct": "F"
              },
              {
                "left": "<base>",
                "correct": "A"
              },
              {
                "left": "<link>",
                "correct": "B"
              },
              {
                "left": "<style>",
                "correct": "C"
              },
              {
                "left": "<script>",
                "correct": "D"
              },
              {
                "left": "<meta>",
                "correct": "E"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Defines the base URL for links"
              },
              {
                "key": "B",
                "label": "Connects external files (e.g., CSS)"
              },
              {
                "key": "C",
                "label": "Adds internal CSS styles"
              },
              {
                "key": "D",
                "label": "Embeds or links JavaScript"
              },
              {
                "key": "E",
                "label": "Provides metadata (keywords, charset, viewport)"
              },
              {
                "key": "F",
                "label": "Sets the page title (browser tab / SEO)"
              }
            ]
          },
          {
            "id": 10,
            "type": "matching",
            "question": "SET J — Given: <b> DIGNOS </b>. Match each part to its name.",
            "pairs": [
              {
                "left": "<b>",
                "correct": "B"
              },
              {
                "left": "b",
                "correct": "A"
              },
              {
                "left": "DIGNOS",
                "correct": "C"
              },
              {
                "left": "</b>",
                "correct": "D"
              },
              {
                "left": "<b> DIGNOS </b>",
                "correct": "E"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Tag name"
              },
              {
                "key": "B",
                "label": "Start tag"
              },
              {
                "key": "C",
                "label": "Content"
              },
              {
                "key": "D",
                "label": "End tag"
              },
              {
                "key": "E",
                "label": "Element"
              }
            ]
          },
          {
            "id": 11,
            "type": "matching",
            "question": "SET K — Match each tool, server, or editor to its description.",
            "pairs": [
              {
                "left": "XAMPP",
                "correct": "A"
              },
              {
                "left": "WAMP",
                "correct": "B"
              },
              {
                "left": "MAMP",
                "correct": "C"
              },
              {
                "left": "LAMP",
                "correct": "D"
              },
              {
                "left": "Notepad++",
                "correct": "E"
              },
              {
                "left": "TextMate",
                "correct": "F"
              },
              {
                "left": "Aptana Studio 3",
                "correct": "G"
              },
              {
                "left": "Brackets 1.0",
                "correct": "H"
              },
              {
                "left": "Visual Studio Code / Atom / NetBeans",
                "correct": "I"
              },
              {
                "left": "http://validator.w3.org",
                "correct": "J"
              },
              {
                "left": "Browser engine (HTML renderer)",
                "correct": "K"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "Local host server whose control panel manages Apache, MySQL, FileZilla, Mercury, and Tomcat"
              },
              {
                "key": "B",
                "label": "Local host server for Windows"
              },
              {
                "key": "C",
                "label": "Local host server for Mac"
              },
              {
                "key": "D",
                "label": "Local host server for Linux"
              },
              {
                "key": "E",
                "label": "Text editor for Windows"
              },
              {
                "key": "F",
                "label": "Text editor for Mac"
              },
              {
                "key": "G",
                "label": "Cross-platform text editor / IDE"
              },
              {
                "key": "H",
                "label": "Cross-platform text editor (version 1.0)"
              },
              {
                "key": "I",
                "label": "IDEs used to create HTML files"
              },
              {
                "key": "J",
                "label": "W3C online tool for validating HTML code"
              },
              {
                "key": "K",
                "label": "Converts the server's code into a visible web page"
              }
            ]
          },
          {
            "id": 12,
            "type": "matching",
            "question": "SET L — Match each key term to its definition.",
            "pairs": [
              {
                "left": "Markup language",
                "correct": "A"
              },
              {
                "left": "Tag",
                "correct": "B"
              },
              {
                "left": "Paired tag",
                "correct": "C"
              },
              {
                "left": "Singular tag",
                "correct": "D"
              },
              {
                "left": "Metadata",
                "correct": "E"
              },
              {
                "left": "CMS",
                "correct": "F"
              },
              {
                "left": "Responsive design",
                "correct": "G"
              },
              {
                "left": "HTML validation",
                "correct": "H"
              }
            ],
            "rightOptions": [
              {
                "key": "A",
                "label": "A set of markup tags that describe how text should be displayed"
              },
              {
                "key": "B",
                "label": "Basic building block of HTML that defines how content is displayed in a browser"
              },
              {
                "key": "C",
                "label": "Tag with both opening < > and closing </ > — e.g., <p> ... </p>"
              },
              {
                "key": "D",
                "label": "Tag that does not require closing — e.g., <img />"
              },
              {
                "key": "E",
                "label": "Information about the page that is not displayed on the page"
              },
              {
                "key": "F",
                "label": "Software that generates web pages dynamically"
              },
              {
                "key": "G",
                "label": "Adaptation of a website's display to various devices"
              },
              {
                "key": "H",
                "label": "Checking code to identify and learn from mistakes"
              }
            ]
          },
          {
            "id": 13,
            "type": "enumeration",
            "question": "Identify the three (3) stages in the evolution of the web.",
            "count": 3,
            "items": [
              "Web 1.0",
              "Web 2.0",
              "Web 3.0"
            ]
          },
          {
            "id": 14,
            "type": "enumeration",
            "question": "Identify the four (4) characteristics of Web 1.0.",
            "count": 4,
            "items": [
              "Static HTML Pages (Read-only)",
              "Limited Interactivity",
              "Centralized Hosting",
              "Text & Images Only"
            ]
          },
          {
            "id": 15,
            "type": "enumeration",
            "question": "Identify the five (5) characteristics of Web 2.0.",
            "count": 5,
            "items": [
              "Dynamic Content (AJAX, JavaScript, PHP)",
              "User-Generated Content",
              "Social Networking Platforms",
              "APIs & Interoperability",
              "Mobile Web Adoption"
            ]
          },
          {
            "id": 16,
            "type": "enumeration",
            "question": "Identify the five (5) characteristics of Web 3.0.",
            "count": 5,
            "items": [
              "Blockchain & Decentralization",
              "Enhanced Privacy & Security",
              "Smart Contracts",
              "Tokenization & Digital Ownership (NFTs)",
              "AI & Machine Learning Integration"
            ]
          },
          {
            "id": 17,
            "type": "enumeration",
            "question": "Identify the six (6) types of websites based on goals and technology.",
            "count": 6,
            "items": [
              "Web Presence (Homepage / Corporate Website)",
              "Blog / Online Magazine / Portfolio",
              "E-Commerce Websites",
              "Landing Page / Microsite",
              "Web Platform (Social Media Websites)",
              "Web Apps"
            ]
          },
          {
            "id": 18,
            "type": "enumeration",
            "question": "Identify the four (4) languages for designing and developing on the web (Set F).",
            "count": 4,
            "items": [
              "HTML",
              "CSS",
              "JavaScript",
              "PHP"
            ]
          },
          {
            "id": 19,
            "type": "enumeration",
            "question": "Identify the four (4) elements that make up a webpage.",
            "count": 4,
            "items": [
              "Content (HTML)",
              "Structure (HTML)",
              "Presentation / Style (CSS)",
              "Behavior / Interactivity (JavaScript)"
            ]
          },
          {
            "id": 20,
            "type": "enumeration",
            "question": "Identify the five (5) New Trends discussed in the chapter.",
            "count": 5,
            "items": [
              "Full Stack",
              "Front-End",
              "Back-End",
              "APIs (Application Programming Interfaces)",
              "Database"
            ]
          },
          {
            "id": 21,
            "type": "enumeration",
            "question": "Identify the three (3) back-end languages mentioned.",
            "count": 3,
            "items": [
              "PHP",
              "Python",
              "Node.js"
            ]
          },
          {
            "id": 22,
            "type": "enumeration",
            "question": "Identify the common database types and their examples.",
            "count": 2,
            "items": [
              "Relational — MySQL, PostgreSQL",
              "NoSQL — MongoDB"
            ]
          },
          {
            "id": 23,
            "type": "enumeration",
            "question": "Identify the six (6) points under \"Understanding the HTML in the Basic Page.\"",
            "count": 6,
            "items": [
              "HTML Basics",
              "Universal Format",
              "Describing Document Meaning",
              "Separation of Meaning and Layout",
              "Ease of Writing",
              "Free and Open"
            ]
          },
          {
            "id": 24,
            "type": "enumeration",
            "question": "Identify the seven (7) facts about HTML.",
            "count": 7,
            "items": [
              "HTML stands for Hyper Text Markup Language",
              "HTML is a language for creating web pages",
              "HTML is not a programming language",
              "It is a markup language",
              "A markup language is a set of markup tags",
              "The markup tags describe how text should be displayed",
              "The purpose of HTML is to create static websites"
            ]
          },
          {
            "id": 25,
            "type": "enumeration",
            "question": "Identify the four (4) main web browsers.",
            "count": 4,
            "items": [
              "Google Chrome",
              "Mozilla Firefox",
              "Apple Safari",
              "Microsoft Edge"
            ]
          },
          {
            "id": 26,
            "type": "enumeration",
            "question": "Identify three (3) other browsers with smaller market share.",
            "count": 3,
            "items": [
              "Vivaldi",
              "Opera",
              "Brave"
            ]
          },
          {
            "id": 27,
            "type": "enumeration",
            "question": "Identify the three (3) ways to validate HTML at the W3C validator.",
            "count": 3,
            "items": [
              "By URI (web address)",
              "By file upload",
              "By direct input"
            ]
          },
          {
            "id": 28,
            "type": "enumeration",
            "question": "Identify the two (2) types of tags.",
            "count": 2,
            "items": [
              "Paired tags (have opening < > and closing </ >)",
              "Singular tags (do not require closing)"
            ]
          },
          {
            "id": 29,
            "type": "enumeration",
            "question": "Identify the four (4) parts of an HTML element.",
            "count": 4,
            "items": [
              "Start tag",
              "Tag name",
              "Content",
              "End tag"
            ]
          },
          {
            "id": 30,
            "type": "enumeration",
            "question": "Give the order of the basic HTML document structure (5 tags).",
            "count": 5,
            "items": [
              "<!DOCTYPE html>",
              "<html>",
              "<head> ... </head>",
              "<body> ... </body>",
              "</html>"
            ]
          },
          {
            "id": 31,
            "type": "enumeration",
            "question": "Identify the three (3) places where the <title> appears.",
            "count": 3,
            "items": [
              "Browser tab / toolbar",
              "Favorites / bookmarks",
              "Search engine results (SEO)"
            ]
          },
          {
            "id": 32,
            "type": "enumeration",
            "question": "Identify three (3) tips for writing good titles.",
            "count": 3,
            "items": [
              "Use descriptive text (not too short)",
              "Keep within 50–60 characters",
              "Avoid keyword stuffing (a list of random words)"
            ]
          },
          {
            "id": 33,
            "type": "enumeration",
            "question": "Identify the six (6) elements that can be placed inside the <head>.",
            "count": 6,
            "items": [
              "<title> (required)",
              "<style>",
              "<base>",
              "<link>",
              "<meta>",
              "<script>"
            ]
          },
          {
            "id": 34,
            "type": "enumeration",
            "question": "Identify the seven (7) local host servers mentioned.",
            "count": 7,
            "items": [
              "XAMPP",
              "LAMP",
              "LEMP",
              "MAMP",
              "WAMP",
              "AMPSS",
              "EasyPHP"
            ]
          },
          {
            "id": 35,
            "type": "enumeration",
            "question": "Identify the five (5) modules shown in the XAMPP Control Panel.",
            "count": 5,
            "items": [
              "Apache",
              "MySQL",
              "FileZilla",
              "Mercury",
              "Tomcat"
            ]
          },
          {
            "id": 36,
            "type": "enumeration",
            "question": "Identify the four (4) text editors and their platforms.",
            "count": 4,
            "items": [
              "Aptana Studio 3 (Cross-Platform)",
              "Brackets 1.0 (Cross-Platform)",
              "Notepad++ (Windows)",
              "TextMate (Mac)"
            ]
          },
          {
            "id": 37,
            "type": "enumeration",
            "question": "Identify the three (3) IDEs featured in the chapter.",
            "count": 3,
            "items": [
              "NetBeans",
              "Visual Studio Code",
              "Atom"
            ]
          },
          {
            "id": 38,
            "type": "enumeration",
            "question": "Identify the four (4) common coding errors.",
            "count": 4,
            "items": [
              "Missing closing tag (e.g., <p> without </p>)",
              "Misspelled tag or attribute names",
              "Unpaired quotation marks",
              "Wrong file references (in <link>, <img>, <a>)"
            ]
          },
          {
            "id": 39,
            "type": "enumeration",
            "question": "Identify the three (3) ways to run a web page stored on your computer.",
            "count": 3,
            "items": [
              "Open in browser via File → Open File, or type the full file path",
              "Use File Explorer and double-click the .html file",
              "From an IDE/Text Editor (e.g., Aptana, VS Code), click Run / Open in Browser"
            ]
          },
          {
            "id": 40,
            "type": "output_tracing",
            "question": "What is displayed, and how is it formatted?",
            "code": "<b> DIGNOS </b>",
            "answer": "DIGNOS — displayed in bold.",
            "explanation": "<b> is the start tag, b is the tag name, DIGNOS is the content, </b> is the end tag; together they form one element."
          },
          {
            "id": 41,
            "type": "output_tracing",
            "question": "a) What appears on the browser tab? b) What appears on the page itself?",
            "code": "<!DOCTYPE html>\n<html>\n    <head>\n        <title>Tutorial4us Home</title>\n    </head>\n    <body>\n        My first web page\n    </body>\n</html>",
            "answer": "a) Tutorial4us Home\nb) My first web page",
            "altAnswers": [
              "a) Tutorial4us Home b) My first web page"
            ],
            "explanation": "The title is never printed on the page itself."
          },
          {
            "id": 42,
            "type": "output_tracing",
            "question": "a) What appears on the browser tab? b) What appears on the page?",
            "code": "<html>\n<title>\nHELLO QUELLOS\n</title>\n<body>\n    I LOVE WEB DEV\n</body>\n</html>",
            "answer": "a) HELLO QUELLOS\nb) I LOVE WEB DEV",
            "altAnswers": [
              "a) HELLO QUELLOS b) I LOVE WEB DEV"
            ]
          },
          {
            "id": 43,
            "type": "output_tracing",
            "question": "How many lines appear in the browser?",
            "code": "<!DOCTYPE html>\n<html>\n<body>\n<p>\nThis paragraph\ncontains a lot of lines\nin the source code,\nbut the browser\nignores it.\n</p>\n</body>\n</html>",
            "answer": "One line (wraps only if the window is too narrow).",
            "altAnswers": [
              "One line",
              "1 line",
              "One"
            ],
            "explanation": "The browser ignores the line breaks in the source code."
          },
          {
            "id": 44,
            "type": "output_tracing",
            "question": "How are the extra spaces displayed?",
            "code": "<p>\nThis paragraph\ncontains      a lot of spaces\nin the source      code,\nbut the      browser\nignores it.\n</p>",
            "answer": "They collapse into single spaces.",
            "altAnswers": [
              "Single spaces",
              "Collapsed into single spaces"
            ],
            "explanation": "The output reads as one normal sentence — the browser ignores extra spaces."
          },
          {
            "id": 45,
            "type": "output_tracing",
            "question": "What text appears in the page area (the white space of the browser)?",
            "code": "<html>\n<head>\n<title>My Page</title>\n<meta charset=\"UTF-8\">\n<link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n</body>\n</html>",
            "answer": "Nothing.",
            "altAnswers": [
              "Nothing is displayed",
              "Blank",
              "Empty"
            ],
            "explanation": "Everything inside <head> is metadata and is not displayed on the page; the body is empty."
          },
          {
            "id": 46,
            "type": "output_tracing",
            "question": "Identify the error and state whether the browser still displays the text.",
            "code": "<html>\n<head>\n<title>Site</title>\n</head>\n<body>\n<p>Hello World\n</body>\n</html>",
            "answer": "Missing closing tag (</p> is absent); the browser still displays \"Hello World.\"",
            "explanation": "The code is invalid and would be flagged by the W3C validator."
          },
          {
            "id": 47,
            "type": "output_tracing",
            "question": "Describe the difference in appearance between the two lines of output.",
            "code": "<body>\n<h1>Example of body tag</h1>\n<p>This paragraph is written between the body tag</p>\n</body>",
            "answer": "\"Example of body tag\" appears large and bold as a heading; \"This paragraph is written between the body tag\" appears in normal-sized body text below it."
          },
          {
            "id": 48,
            "type": "output_tracing",
            "question": "Why is this invalid according to the module?",
            "code": "<html>\n<body>Content A</body>\n<body>Content B</body>\n</html>",
            "answer": "There can only be one <body> element in an HTML document."
          },
          {
            "id": 49,
            "type": "output_tracing",
            "question": "Identify the structural error.",
            "code": "<html>\n<!DOCTYPE html>\n<head><title>Test</title></head>\n<body>Test Page</body>\n</html>",
            "answer": "<!DOCTYPE html> is in the wrong place; it must appear before <html>, not inside it."
          },
          {
            "id": 50,
            "type": "output_tracing",
            "question": "The stylesheet does not load. Which of the four common coding errors is this?",
            "code": "<link rel=\"stylesheet\" href=\"stlye.css\">",
            "answer": "Wrong file reference — \"stlye.css\" is a misspelling of \"style.css,\" so the <link> points to a file that does not exist.",
            "altAnswers": [
              "Wrong file reference"
            ]
          },
          {
            "id": 51,
            "type": "output_tracing",
            "question": "What type of tag is this, and does it need a closing tag?",
            "code": "<img src=\"logo.png\" />",
            "answer": "A singular tag; it does not require a closing tag.",
            "altAnswers": [
              "Singular tag"
            ]
          },
          {
            "id": 52,
            "type": "output_tracing",
            "question": "a) What is shown on the tab? b) What is shown on the page? c) Which file controls how the heading looks?",
            "code": "<html>\n<head>\n<title>Dreamweaver book</title>\n<link rel=\"stylesheet\" href=\"book.css\">\n</head>\n<body>\n<h1>Dreamweaver CC 2014</h1>\n</body>\n</html>",
            "answer": "a) Dreamweaver book\nb) Dreamweaver CC 2014 (as a large heading)\nc) book.css",
            "altAnswers": [
              "a) Dreamweaver book b) Dreamweaver CC 2014 c) book.css"
            ]
          },
          {
            "id": 53,
            "type": "output_tracing",
            "question": "What is displayed on the page, and what is displayed on the tab?",
            "code": "<html>\n<head><title>TODO supply a title</title></head>\n<body>\n<div>TODO write content</div>\n</body>\n</html>",
            "answer": "Page: TODO write content\nTab: TODO supply a title",
            "altAnswers": [
              "Page TODO write content, Tab TODO supply a title"
            ]
          },
          {
            "id": 54,
            "type": "output_tracing",
            "question": "A page is written with no <!DOCTYPE html> at all. According to the module, what information is the browser missing?",
            "answer": "Which HTML version is being used.",
            "altAnswers": [
              "The HTML version"
            ],
            "explanation": "Every HTML document must start with <!DOCTYPE>."
          }
        ]
      }
    ]
  },
  {
    "id": "sia",
    "code": "SIA",
    "name": "Systems Integration and Architecture",
    "description": "Covers enterprise systems integration, middleware, SOA, and microservices architecture.",
    "color": "#7c3aed",
    "reviewers": [
      {
        "id": "sia_quiz1",
        "title": "Quiz 1 — System Integration & Architecture",
        "description": "100-item quiz: 40 Multiple Choice, 30 Identification, and 6 Enumeration groups (items 71–100).",
        "quizletLink": null,
        "questions": [
          {
            "id": 1,
            "type": "mc",
            "question": "What is the primary goal of system integration?",
            "options": [
              "To replace all existing systems with one single application",
              "To create a larger, more complex system that performs better and offers more functionality",
              "To reduce the number of hardware components in an enterprise",
              "To separate databases from network components"
            ],
            "answer": 1,
            "explanation": "According to Chapter 2, the goal of system integration is to create a unified and cohesive whole that performs better and offers more functionality than the individual systems would on their own."
          },
          {
            "id": 2,
            "type": "mc",
            "question": "In the IT world, what is a Systems Integrator (SI)?",
            "options": [
              "A hardware component used to connect network cables",
              "A company that specializes in implementing, planning, coordinating, and maintaining IT systems",
              "A software package that acts as a firewall",
              "A legacy system database"
            ],
            "answer": 1,
            "explanation": "Chapter 2 defines a Systems Integrator on broad terms as a company (like Deloitte, IBM, Accenture) that specializes in implementing, planning, and managing IT systems."
          },
          {
            "id": 3,
            "type": "mc",
            "question": "Which of the following is an example of a Point-to-Point Integration?",
            "options": [
              "An Enterprise Service Bus (ESB) connecting 10 systems",
              "An e-commerce online store directly notifying an order fulfillment system",
              "A common data format translating XML to EDI",
              "A system using an integration silo"
            ],
            "answer": 1,
            "explanation": "Chapter 2 uses the example of an E-commerce Order Processing setup where the online store connects directly to order fulfillment as a classic Point-to-Point Integration."
          },
          {
            "id": 4,
            "type": "mc",
            "question": "What is a major drawback of Vertical Integration?",
            "options": [
              "It is too flexible and changes constantly",
              "It requires an Enterprise Service Bus",
              "It creates functional \"silos\" that are rigid and difficult to manage in the long term",
              "It involves too many third-party systems"
            ],
            "answer": 2,
            "explanation": "Chapter 2 notes that while Vertical Integration is simple for limited systems, it is rigid because any new functionality requires building its own separate functional \"silo.\""
          },
          {
            "id": 5,
            "type": "mc",
            "question": "Star Integration is also commonly referred to as:",
            "options": [
              "Spaghetti Integration",
              "Lasagna Integration",
              "Bus Integration",
              "Point-to-Hub Integration"
            ],
            "answer": 0,
            "explanation": "Chapter 2 states that Star Integration is sometimes referred to as \"Spaghetti Integration\" because the numerous point-to-point connections resemble messy spaghetti code."
          },
          {
            "id": 6,
            "type": "mc",
            "question": "If you connect ten systems to each other using Star Integration, how many separate integrations are required?",
            "options": [
              "10",
              "20",
              "45",
              "100"
            ],
            "answer": 2,
            "explanation": "Chapter 2 provides the specific example that connecting ten systems using the Star integration method requires 45 separate point-to-point integrations."
          },
          {
            "id": 7,
            "type": "mc",
            "question": "In Horizontal Integration, what is the separate sub-system used as a common interface layer called?",
            "options": [
              "Enterprise Application Integration (EAI)",
              "Electronic Data Interchange (EDI)",
              "Enterprise Service Bus (ESB)",
              "Product Information Management (PIM)"
            ],
            "answer": 2,
            "explanation": "Chapter 2 specifies that in Horizontal Integration, the common interface layer between all sub-systems is very often referred to as an Enterprise Service Bus (ESB)."
          },
          {
            "id": 8,
            "type": "mc",
            "question": "If a bank upgrades its mobile app in a Horizontal Integration setup, do the other systems need to be changed?",
            "options": [
              "Yes, all 45 connections must be updated.",
              "No, because they remain connected through the ESB.",
              "Yes, because they share a functional silo.",
              "No, because they are legacy systems."
            ],
            "answer": 1,
            "explanation": "Chapter 2's bank example explains that with an ESB, upgrading one system (like the mobile app) doesn't require changing other systems since they just talk to the ESB."
          },
          {
            "id": 9,
            "type": "mc",
            "question": "How does Common Data Format Integration reduce maintenance?",
            "options": [
              "It connects systems directly to one another.",
              "It allows each system to do only one data conversion from its native format to the common format.",
              "It replaces all systems with a single software application.",
              "It relies entirely on legacy databases."
            ],
            "answer": 1,
            "explanation": "Chapter 2 explains that this approach allows a system to do only one data conversion to a common format (and vice versa), ensuring the number of transformations equals the number of sub-systems."
          },
          {
            "id": 10,
            "type": "mc",
            "question": "Which common data format represents and exchanges structured data, commonly used in web services?",
            "options": [
              "EDI",
              "XML",
              "CAD",
              "PIM"
            ],
            "answer": 1,
            "explanation": "Chapter 2 identifies XML (eXtensible Markup Language) as a common data format for representing and exchanging structured data in web services."
          },
          {
            "id": 11,
            "type": "mc",
            "question": "Which type of integration is vital for companies looking to replace paper-based documents like invoices and purchase orders?",
            "options": [
              "Data Integration",
              "Legacy System Integration",
              "Electronic Document Interchange (EDI)",
              "Horizontal Integration"
            ],
            "answer": 2,
            "explanation": "Chapter 2 defines EDI as the system-to-system exchange of business documents intended to replace paper-based documents to save time and avoid manual errors."
          },
          {
            "id": 12,
            "type": "mc",
            "question": "What is Data Integration?",
            "options": [
              "Connecting online and in-store sales systems",
              "Gathering data from disparate sources together to provide businesses with a centralized access point",
              "Connecting outdated systems to modern infrastructure",
              "Automating business communication with external partners"
            ],
            "answer": 1,
            "explanation": "Chapter 2 defines Data Integration as gathering data from disparate sources to make it more available and easy to process via a centralized access point."
          },
          {
            "id": 13,
            "type": "mc",
            "question": "Enterprise Application Integration (EAI) is all about:",
            "options": [
              "Bridging gaps between different software programs and applications (like ERP and CRM) to streamline processes",
              "Connecting physical hardware components in manufacturing",
              "Upgrading legacy systems to cloud-based systems",
              "Designing new software using CAD"
            ],
            "answer": 0,
            "explanation": "Chapter 2 states EAI is about bridging gaps between different software programs (ERP, CRM, SCM, etc.) to streamline business processes through smooth data flow."
          },
          {
            "id": 14,
            "type": "mc",
            "question": "In which industry does system integration enable features like infotainment systems, navigation, and autonomous driving?",
            "options": [
              "Telecommunications",
              "Healthcare",
              "Automotive",
              "Aerospace and Defense"
            ],
            "answer": 2,
            "explanation": "Chapter 2 notes that Automotive industry integration brings together electronics, mechanics, and software for features like infotainment and autonomous driving."
          },
          {
            "id": 15,
            "type": "mc",
            "question": "By definition, what are Enterprise Systems (ESs)?",
            "options": [
              "Hardware routers used for wide area networks",
              "Software packages developed to support many aspects of an enterprise's information needs",
              "Siloed applications that only handle human resources",
              "Outdated legacy frameworks"
            ],
            "answer": 1,
            "explanation": "Lecture 1 defines ESs as software packages that are developed to support many aspects of an enterprise's information needs (Davenport, 2000)."
          },
          {
            "id": 16,
            "type": "mc",
            "question": "Which of the following is a type of ES that facilitates transaction processing in a distributive environment?",
            "options": [
              "CAD",
              "EDI",
              "ERP (Enterprise Resource Planning)",
              "XML"
            ],
            "answer": 2,
            "explanation": "Lecture 1 states that as a type of ES, ERP facilitates transaction processing in a distributive environment to manage enterprise resources."
          },
          {
            "id": 17,
            "type": "mc",
            "question": "What system did the Ford Motor Company implement to increase product development efficiency in the mid-1990s?",
            "options": [
              "C3P System",
              "ESB System",
              "EDI System",
              "Legacy Integration System"
            ],
            "answer": 0,
            "explanation": "Lecture 1 describes Ford implementing the CAD/CAE/CAM/PIMS (C3P) ES to achieve high product quality and shorter cycle times."
          },
          {
            "id": 18,
            "type": "mc",
            "question": "In Ford's C3P system, what does the \"P\" stand for?",
            "options": [
              "Product Integration Method",
              "Product Information Management",
              "Process Integration Management",
              "Point-to-Point"
            ],
            "answer": 1,
            "explanation": "Lecture 1 explains that the acronym combines the three \"Cs\" with PIM, which stands for Product Information Management."
          },
          {
            "id": 19,
            "type": "mc",
            "question": "What is a \"System of Systems\" (SoS)?",
            "options": [
              "A single software package with multiple modules",
              "A collection of joint stand-alone systems designed for specific purposes to create a task needed for a certain objective",
              "A point-to-point network architecture",
              "A legacy system database"
            ],
            "answer": 1,
            "explanation": "Lecture 1 defines SoS as a collection of joint stand-alone systems that were originally designed for specific purposes (Mayk and Madni, 2006)."
          },
          {
            "id": 20,
            "type": "mc",
            "question": "Which SoS characteristic means the component systems are separately acquired and integrated but maintain continuing existence?",
            "options": [
              "Evolutionary Development",
              "Emergent Behavior",
              "Managerial Independence",
              "Geographic Distribution"
            ],
            "answer": 2,
            "explanation": "Lecture 1 defines Managerial Independence as the component systems not only operating independently but being separately acquired and managed."
          },
          {
            "id": 21,
            "type": "mc",
            "question": "\"The system performs functions and carries out purposes that do not reside in any component system.\" This describes which SoS characteristic?",
            "options": [
              "Operational Independence",
              "Geographic Distribution",
              "Emergent Behavior",
              "Evolutionary Development"
            ],
            "answer": 2,
            "explanation": "Lecture 1 notes that Emergent Behaviors are properties of the entire system-of-systems that cannot be localized to any single component."
          },
          {
            "id": 22,
            "type": "mc",
            "question": "According to Chapter 2, System Integration in IT helps organizations streamline operations by:",
            "options": [
              "Isolating databases from software",
              "Connecting different software applications, databases, and hardware components",
              "Removing all network components",
              "Utilizing paper-based formats"
            ],
            "answer": 1,
            "explanation": "Chapter 2 states that IT system integration streamlines operations by connecting software, databases, and hardware to enable data sharing."
          },
          {
            "id": 23,
            "type": "mc",
            "question": "How does System Integration benefit the Healthcare industry?",
            "options": [
              "By creating autonomous driving capabilities",
              "By connecting learning management systems",
              "By connecting medical systems, electronic health records (EHRs), and diagnostic tools",
              "By monitoring air and water quality"
            ],
            "answer": 2,
            "explanation": "Chapter 2 highlights that healthcare integration connects medical systems and EHRs to improve patient care and reduce errors."
          },
          {
            "id": 24,
            "type": "mc",
            "question": "Which industry relies on system integration for Smart Grids and managing power generation?",
            "options": [
              "Telecommunications",
              "Energy",
              "Public Services",
              "Manufacturing"
            ],
            "answer": 1,
            "explanation": "Chapter 2 mentions that the Energy sector uses integration for managing power generation and smart grids."
          },
          {
            "id": 25,
            "type": "mc",
            "question": "Which integration type ensures safe and efficient aircraft operation and integrates radar and avionics?",
            "options": [
              "Aerospace and Defense",
              "Transportation and Logistics",
              "Public Services",
              "Smart Cities"
            ],
            "answer": 0,
            "explanation": "Chapter 2 specifically lists avionics, radar, and navigation integration under the Aerospace and Defense domain."
          },
          {
            "id": 26,
            "type": "mc",
            "question": "Bridging citizen portals, tax systems, and emergency response systems is an example of integration in:",
            "options": [
              "Environmental Monitoring",
              "Smart Cities",
              "Public Services",
              "Education"
            ],
            "answer": 2,
            "explanation": "Chapter 2 states that government agencies use system integration for Public Services like citizen portals and emergency response."
          },
          {
            "id": 27,
            "type": "mc",
            "question": "What integration challenge occurs in Point-to-Point networks as a business grows?",
            "options": [
              "They become too centralized.",
              "They require an ESB to function.",
              "They result in a proliferation of direct connections, leading to maintenance challenges.",
              "They create functional silos."
            ],
            "answer": 2,
            "explanation": "Chapter 2 points out that adding systems in Point-to-Point integration results in complex direct connections that are hard to maintain."
          },
          {
            "id": 28,
            "type": "mc",
            "question": "An alternative to Point-to-Point integration that provides a centralized architecture is:",
            "options": [
              "Vertical Integration",
              "Star Integration",
              "Middleware solutions like Enterprise Service Bus (ESB) or APIs",
              "Legacy System Integration"
            ],
            "answer": 2,
            "explanation": "Chapter 2 notes organizations prefer middleware like ESB or APIs as an alternative to point-to-point to reduce direct connections."
          },
          {
            "id": 29,
            "type": "mc",
            "question": "Business-to-Business (B2B) integration enables companies to:",
            "options": [
              "Automate business communication and processes with all stakeholders",
              "Bridge gaps between internal CRM and ERP only",
              "Replace their internal hardware components",
              "Create functional silos"
            ],
            "answer": 0,
            "explanation": "Chapter 2 states B2B integration enables companies to automate business communication with all stakeholders and business partners."
          },
          {
            "id": 30,
            "type": "mc",
            "question": "Legacy System Integration implies connectivity between:",
            "options": [
              "Future technologies and APIs",
              "Outdated systems and more modern IT infrastructure",
              "Two identical modern ERP systems",
              "Paper-based documents and EDI"
            ],
            "answer": 1,
            "explanation": "Chapter 2 defines Legacy System Integration as connectivity between outdated legacy systems and more modern IT infrastructure."
          },
          {
            "id": 31,
            "type": "mc",
            "question": "What technology provides the infrastructure for distributed and collaborative knowledge acquisition (Lecture 1)?",
            "options": [
              "PIM",
              "Networking technology and Internet of Things (IoT)",
              "CAD and CAM",
              "EDI"
            ],
            "answer": 1,
            "explanation": "Lecture 1 states that Networking technology, IoT, and other new technologies provide the infrastructure for distributed knowledge acquisition."
          },
          {
            "id": 32,
            "type": "mc",
            "question": "In the context of SoS, what does \"Geographic Distribution\" mean?",
            "options": [
              "Components are in the exact same server room.",
              "The system is fully formed upon creation.",
              "The geographic extent of the components is large, exchanging only information, not mass/energy.",
              "The systems share the same exact management."
            ],
            "answer": 2,
            "explanation": "Lecture 1 defines Geographic Distribution as components being geographically dispersed, exchanging only information."
          },
          {
            "id": 33,
            "type": "mc",
            "question": "In the hospital Vertical Integration example (Chapter 2), adding an EMR system would require:",
            "options": [
              "Upgrading the ESB",
              "Creating a new silo",
              "Point-to-point connections to all other systems",
              "Replacing the legacy database"
            ],
            "answer": 1,
            "explanation": "Chapter 2 explains that in vertical integration, adding a new system like an EMR requires creating a new functional silo."
          },
          {
            "id": 34,
            "type": "mc",
            "question": "What is the fundamental feature of Smart Cities according to Chapter 2?",
            "options": [
              "Connecting learning management systems",
              "Interconnecting transportation, utilities, security, and public services",
              "Using only point-to-point integration",
              "Eliminating all legacy systems"
            ],
            "answer": 1,
            "explanation": "Chapter 2 states Smart Cities rely on interconnecting systems like transportation, utilities, and security to improve urban living."
          },
          {
            "id": 35,
            "type": "mc",
            "question": "How does System Integration optimize Transportation and Logistics?",
            "options": [
              "By creating infotainment systems",
              "By connecting tracking systems, warehouse management, and order processing",
              "By managing EHRs",
              "By monitoring climate conditions"
            ],
            "answer": 1,
            "explanation": "Chapter 2 notes that Transportation and Logistics optimize operations by connecting tracking, warehouse management, and order processing."
          },
          {
            "id": 36,
            "type": "mc",
            "question": "According to Lecture 1, System of Systems (SoS) integration involves systems being linked directly or through an intermediary to satisfy the needs of a:",
            "options": [
              "Legacy protocol",
              "Mission capability package",
              "Single hardware vendor",
              "Closed network"
            ],
            "answer": 1,
            "explanation": "Lecture 1 (Madni and Sievers) states systems are organically and dynamically configured to satisfy the needs of a mission capability package."
          },
          {
            "id": 37,
            "type": "mc",
            "question": "Which integration method is described as being \"relatively simple and easy... but quite rigid\"?",
            "options": [
              "Horizontal Integration",
              "Common Data Format Integration",
              "Vertical Integration",
              "Enterprise Application Integration"
            ],
            "answer": 2,
            "explanation": "Chapter 2 describes Vertical Integration as a simple/easy method for limited systems but rigid because new functionality requires new silos."
          },
          {
            "id": 38,
            "type": "mc",
            "question": "The emergence of Enterprise Systems (ESs) has been fueled by:",
            "options": [
              "The decline of the internet",
              "The global economy, intense competition, and rapid IT development",
              "The desire to use more paper-based documentation",
              "The reduction in third-party integrations"
            ],
            "answer": 1,
            "explanation": "Lecture 1 states that the emergence of ESs has been fueled by the global economy, intense competition, and the rapid development of IT."
          },
          {
            "id": 39,
            "type": "mc",
            "question": "In a Horizontal Integration, if you have ten sub-systems, how many connections are required to the common interface layer?",
            "options": [
              "45",
              "100",
              "10",
              "1"
            ],
            "answer": 2,
            "explanation": "Chapter 2 explains that in Horizontal Integration, with ten systems, there are only ten connections to the common interface layer (ESB)."
          },
          {
            "id": 40,
            "type": "mc",
            "question": "Ford's C3P system ultimately contributes to which of the following?",
            "options": [
              "Digital manufacturing based on ES and IIIE",
              "Legacy system removal",
              "Electronic Document Interchange",
              "Smart city development"
            ],
            "answer": 0,
            "explanation": "Lecture 1 features a diagram showing that CAD, CAE, and CAM flow into PIM, which leads to \"Digital manufacturing based on ES and IIIE.\""
          },
          {
            "id": 41,
            "type": "identification",
            "question": "The process of combining different individual systems, subsystems, or components into a unified and cohesive whole.",
            "answer": "System Integration",
            "explanation": "This is the verbatim definition of System Integration from Chapter 2."
          },
          {
            "id": 42,
            "type": "identification",
            "question": "Companies such as Deloitte, IBM, Accenture, and TCS that deliver large IT projects and enable data integrations.",
            "answer": "Systems Integrator (SI)",
            "explanation": "Chapter 2 lists these companies as examples of SIs whose role is to implement and coordinate IT systems."
          },
          {
            "id": 43,
            "type": "identification",
            "question": "A type of integration where individual systems are connected directly to each other without middleware to enable data exchange.",
            "answer": "Point-to-Point Integration",
            "explanation": "Chapter 2 defines this as directly connecting systems, noting it is typically used for simpler scenarios."
          },
          {
            "id": 44,
            "type": "identification",
            "question": "The system integration method where components are integrated by creating functional \"silos\", beginning with the basic bottom function upward.",
            "answer": "Vertical Integration",
            "explanation": "Chapter 2 describes Vertical Integration as building functional silos from the bottom up."
          },
          {
            "id": 45,
            "type": "identification",
            "question": "The integration method where every sub-system is connected to every other sub-system, often requiring complex maintenance (e.g., 45 connections for 10 systems).",
            "answer": "Star Integration",
            "explanation": "Chapter 2 explains that Star Integration connects every sub-system to others point-to-point, increasing connections exponentially."
          },
          {
            "id": 46,
            "type": "identification",
            "question": "Another name for Star Integration, drawing an analogy to messy programming code.",
            "answer": "Spaghetti Integration",
            "explanation": "Chapter 2 states Star Integration is referred to as \"Spaghetti Integration\" as an analogy to \"Spaghetti code.\""
          },
          {
            "id": 47,
            "type": "identification",
            "question": "The integration method that uses a separate sub-system as a common interface layer for all other sub-systems.",
            "answer": "Horizontal Integration",
            "explanation": "Chapter 2 defines Horizontal Integration as using a single common interface layer for all connections."
          },
          {
            "id": 48,
            "type": "identification",
            "question": "The common interface layer used in Horizontal Integration is very often referred to by this three-letter acronym.",
            "answer": "ESB",
            "altAnswers": [
              "Enterprise Service Bus"
            ],
            "explanation": "Chapter 2 specifies that the separate sub-system layer in horizontal integration is known as an ESB."
          },
          {
            "id": 49,
            "type": "identification",
            "question": "The integration approach where data coming out of one system is transformed into one standardized format rather than system-by-system.",
            "answer": "Common Data Format Integration",
            "explanation": "Chapter 2 explains this method allows systems to do only one conversion to a shared format to reduce the number of transformations."
          },
          {
            "id": 50,
            "type": "identification",
            "question": "The data format commonly used to represent and exchange structured data, specifically in web services and configuration files.",
            "answer": "XML",
            "altAnswers": [
              "eXtensible Markup Language"
            ],
            "explanation": "Chapter 2 identifies XML as a standard for structured data exchange in Common Data Format integration."
          },
          {
            "id": 51,
            "type": "identification",
            "question": "The system-to-system exchange of business documents in a standard electronic format, intended to replace paper-based documents like invoices.",
            "answer": "Electronic Data Interchange (EDI)",
            "altAnswers": [
              "EDI"
            ],
            "explanation": "Chapter 2 states EDI replaces paper-based documents (like POs and invoices) with electronic formats to save time and reduce errors."
          },
          {
            "id": 52,
            "type": "identification",
            "question": "The type of integration that gathers data from disparate sources into a centralized access point.",
            "answer": "Data Integration",
            "explanation": "Chapter 2 defines Data Integration as making data more available and easy to process via a centralized access point."
          },
          {
            "id": 53,
            "type": "identification",
            "question": "The type of integration that enables companies to automate business communication and processes with external partners and stakeholders.",
            "answer": "Business-to-Business (B2B) Integration",
            "altAnswers": [
              "B2B Integration"
            ],
            "explanation": "Chapter 2 describes B2B integration as connecting an organization with its business partners for real-time data exchange."
          },
          {
            "id": 54,
            "type": "identification",
            "question": "The type of integration that bridges gaps between outdated systems (vital for core business) and more modern IT infrastructure.",
            "answer": "Legacy System Integration",
            "explanation": "Chapter 2 explains that Legacy System Integration prevents disruption by connecting older systems to modern ones."
          },
          {
            "id": 55,
            "type": "identification",
            "question": "The type of integration focused on bridging gaps between different software programs like ERP, CRM, and SCM.",
            "answer": "Enterprise Application Integration (EAI)",
            "altAnswers": [
              "EAI"
            ],
            "explanation": "Chapter 2 states EAI streamlines business processes by allowing smooth data flow between these specific enterprise applications."
          },
          {
            "id": 56,
            "type": "identification",
            "question": "The industry that uses system integration to connect LMS (Learning Management Systems), student databases, and administrative tools.",
            "answer": "Education",
            "explanation": "Chapter 2 explicitly mentions LMS and student databases as the primary integration targets for the Education sector."
          },
          {
            "id": 57,
            "type": "identification",
            "question": "Software packages developed to support many aspects of an enterprise's information needs (e.g., executive direction, customer integration).",
            "answer": "Enterprise Systems (ES)",
            "altAnswers": [
              "Enterprise Systems",
              "ES"
            ],
            "explanation": "Lecture 1 cites Davenport (2000) defining ESs as software packages supporting enterprise information needs."
          },
          {
            "id": 58,
            "type": "identification",
            "question": "A specific type of ES that facilitates transaction processing in a distributive environment and manages all enterprise resources.",
            "answer": "Enterprise Resource Planning (ERP)",
            "altAnswers": [
              "ERP"
            ],
            "explanation": "Lecture 1 names ERP as a type of ES used for streamlining business processes and transaction processing."
          },
          {
            "id": 59,
            "type": "identification",
            "question": "The automobile company that struggled with isolated design software and successfully implemented a C3P ES.",
            "answer": "Ford Motor Company",
            "altAnswers": [
              "Ford"
            ],
            "explanation": "Lecture 1 details a case study of the Ford Motor Company implementing the C3P system in the mid-1990s."
          },
          {
            "id": 60,
            "type": "identification",
            "question": "In Ford's C3P system, the acronym representing the software used for designing products.",
            "answer": "CAD",
            "altAnswers": [
              "Computer-Aided Design"
            ],
            "explanation": "Lecture 1 outlines CAD as one of the three \"C\"s in the C3P system."
          },
          {
            "id": 61,
            "type": "identification",
            "question": "A collection of joint stand-alone systems originally designed for specific purposes to create a task needed for a certain objective.",
            "answer": "System of Systems (SoS)",
            "altAnswers": [
              "SoS",
              "System of Systems"
            ],
            "explanation": "Lecture 1 uses Mayk and Madni's (2006) definition for System of Systems."
          },
          {
            "id": 62,
            "type": "identification",
            "question": "The SoS characteristic stating that if disassembled, the component systems can usefully operate on their own.",
            "answer": "Operational Independence",
            "explanation": "Lecture 1 defines Operational Independence as components being independent and useful in their own right."
          },
          {
            "id": 63,
            "type": "identification",
            "question": "The SoS characteristic stating that the system is not fully formed at once, but functions and purposes are added and modified over time.",
            "answer": "Evolutionary Development",
            "explanation": "Lecture 1 defines Evolutionary Development as the system growing and modifying with experience and need."
          },
          {
            "id": 64,
            "type": "identification",
            "question": "The SoS characteristic referring to behaviors of the entire system that cannot be localized to any single component system.",
            "answer": "Emergent Behavior",
            "explanation": "Lecture 1 describes Emergent Behavior as the principal purposes fulfilled by the entire SoS working together."
          },
          {
            "id": 65,
            "type": "identification",
            "question": "The industry that relies on integration to manage content distribution across platforms like streaming services and TV channels.",
            "answer": "Entertainment and Media",
            "explanation": "Chapter 2 lists content distribution and streaming as the main integration goals for the Entertainment and Media industry."
          },
          {
            "id": 66,
            "type": "identification",
            "question": "The industry that connects online and in-store sales, inventory management, and CRM.",
            "answer": "Retail and E-commerce",
            "explanation": "Chapter 2 highlights Retail and E-commerce as the industry combining these specific systems to enhance customer experience."
          },
          {
            "id": 67,
            "type": "identification",
            "question": "In SoS Integration, systems are organically and dynamically configured to satisfy the needs of this specific \"package\".",
            "answer": "Mission capability package",
            "explanation": "Lecture 1 mentions that systems are configured to satisfy the needs of a \"mission capability package\" (Madni and Sievers)."
          },
          {
            "id": 68,
            "type": "identification",
            "question": "The common data format used for exchanging business documents like purchase orders between different partners.",
            "answer": "EDI",
            "altAnswers": [
              "Electronic Data Interchange"
            ],
            "explanation": "Chapter 2 specifies EDI as the standard format for exchanging business documents electronically."
          },
          {
            "id": 69,
            "type": "identification",
            "question": "The system utilized by hospitals (as an example of Vertical Integration) to manage digital patient records, adding complexity to functional silos.",
            "answer": "Electronic Medical Record (EMR) system",
            "altAnswers": [
              "EMR",
              "Electronic Medical Record"
            ],
            "explanation": "Chapter 2 notes that adding an EMR system to a hospital's vertical integration requires creating a new silo."
          },
          {
            "id": 70,
            "type": "identification",
            "question": "The ultimate outcome of Ford's C3P system (CAD, CAE, CAM, PIM) as shown in the system diagram.",
            "answer": "Digital manufacturing",
            "explanation": "Lecture 1 contains a diagram showing the components of C3P pointing towards \"Digital manufacturing based on ES and IIIE.\""
          },
          {
            "id": 71,
            "type": "enumeration",
            "question": "Identify the five (5) typical modules that compose an Enterprise System (ES) according to Langenwalter (2000) in Lecture 1.",
            "count": 5,
            "items": [
              "Executive direction and support",
              "Customer integration",
              "Engineering integration",
              "Manufacturing integration",
              "Support service integration"
            ],
            "explanation": "Lecture 1 explicitly lists these five elements as the typical modules that make up an Enterprise System."
          },
          {
            "id": 72,
            "type": "enumeration",
            "question": "Identify the four (4) components that make up the acronym for Ford's \"C3P System\" in Lecture 1.",
            "count": 4,
            "items": [
              "Computer-aided design (CAD)",
              "Computer-aided manufacturing (CAM)",
              "Computer-aided engineering (CAE)",
              "Product information management (PIM)"
            ],
            "explanation": "Lecture 1 details the C3P acronym as combining three \"Cs\" (CAD, CAM, CAE) and PIM."
          },
          {
            "id": 73,
            "type": "enumeration",
            "question": "Identify the five (5) typical System Integration Methods outlined in Chapter 2.",
            "count": 5,
            "items": [
              "Point-to-Point Integration",
              "Vertical Integration",
              "Star Integration",
              "Horizontal Integration",
              "Common Data Format Integration"
            ],
            "explanation": "Chapter 2 categorizes standard system integration methods into these five distinct architectures."
          },
          {
            "id": 74,
            "type": "enumeration",
            "question": "Identify the five (5) most common types of System Integration outlined in Chapter 2.",
            "count": 5,
            "items": [
              "Data Integration",
              "Business-to-Business (B2B) Integration",
              "Legacy System Integration",
              "Electronic Document Interchange (EDI)",
              "Enterprise Application Integration (EAI)"
            ],
            "explanation": "Chapter 2 provides a specific chart listing these five as the \"Most Common Types of System Integration.\""
          },
          {
            "id": 75,
            "type": "enumeration",
            "question": "Identify the five (5) Key Characteristics of a System of Systems (SoS) according to Lecture 1.",
            "count": 5,
            "items": [
              "Operational Independence of the Elements",
              "Managerial Independence of the Elements",
              "Evolutionary Development",
              "Emergent Behavior",
              "Geographic Distribution"
            ],
            "explanation": "Lecture 1 lists these five defining traits to explain how an SoS operates and evolves."
          },
          {
            "id": 76,
            "type": "enumeration",
            "question": "Identify six (6) of the seven different types of collaboration in a typical business life cycle as listed in Lecture 1. (Any 6 of the 7 correct answers accepted.)",
            "count": 6,
            "items": [
              "Product life cycle collaboration",
              "Engineering project collaboration",
              "Customer order and inventory collaboration",
              "Distributor-reseller collaboration",
              "Supplier and procurement collaboration",
              "Demand planning collaboration",
              "Warehouse management and freight collaboration"
            ],
            "minCount": 6,
            "explanation": "Lecture 1 outlines these specific collaborations under the heading \"Different types of collaboration in a typical business life cycle\" for intra- and interenterprise processes. Any 6 of the 7 is correct."
          }
        ]
      },
      {
        "id": "sia_quizlet_1",
        "title": "SIA 1 — Quizlet Flash Cards",
        "description": "SIA 1 flash cards on Quizlet — study and review using the Quizlet set.",
        "quizletLink": "https://quizlet.com/ph/1199020846/sia-1-flash-cards/?i=719e9i&x=1jqt",
        "questions": []
      },
      {
        "id": "sia_quizlet_2",
        "title": "SIA 2 — Quizlet Flash Cards",
        "description": "SIA 2 flash cards on Quizlet — study and review using the Quizlet set.",
        "quizletLink": "https://quizlet.com/ph/1199018961/sia-2-flash-cards/?i=719e9i&x=1jqt",
        "questions": []
      }
    ]
  }
];

export function getSubjectById(id) {
  return subjects.find((s) => s.id === id) || null;
}

export function getReviewerById(subjectId, reviewerId) {
  const subject = getSubjectById(subjectId);
  if (!subject) return null;
  return subject.reviewers.find((r) => r.id === reviewerId) || null;
}
