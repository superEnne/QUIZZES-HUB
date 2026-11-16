// ─────────────────────────────────────────────────────────────────────────────
// EXAM REVIEWERS + REVIEWER POINTERS
//
// exams     → each subject id (same ids as subjects.js) maps to its exam reviewers.
//             An exam is a timed mock exam:
//               {
//                 "id": "cc6_finals",          unique id
//                 "term": "Finals",            label on the card
//                 "title": "Finals Exam Reviewer",
//                 "description": "Chapters 5-8 ...",
//                 "timeLimit": 120,            minutes for the OPTIONAL timer (off by default); null = no timer option
//                 "questions": [ ... ]         same format as subjects.js, all 7 types work;
//                                              an mc question may add "code" to show a code block
//               }
//             An exam with no questions shows as "Coming soon".
//
// pointers  → downloadable PDF reviewers, shown in the "Reviewer Pointers" section.
//             Put the PDF in public/pointers/ and list it here:
//               { "id", "term", "title", "description", "file": "/pointers/X.pdf", "pages" }
// ─────────────────────────────────────────────────────────────────────────────

export const exams = {
  "ea": [
    {
      "id": "ea_finals",
      "term": "Finals",
      "title": "Finals Exam Reviewer",
      "description": "Chapters 9–11: Developing Future Architecture Views, Developing an EA Management Plan, and the Role of Investment Planning and Project Management. Multiple choice + True or False.",
      "timeLimit": 90,
      "questions": [
        {
          "question": "The future view of the EA, which documents the IT resources that will be active in the operating environment several years in the future, is also known as the:",
          "options": [
            "legacy view",
            "\"as-is\" view",
            "baseline view",
            "\"to-be\" view"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 1
        },
        {
          "question": "The \"as-is\" view of the EA documents:",
          "options": [
            "Candidate initiatives only",
            "Approved EA Change Requests",
            "Current IT resources",
            "IT resources several years in the future"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 2
        },
        {
          "question": "If little EA planning has occurred, the future view of the EA should show how this will be eliminated:",
          "options": [
            "Strategic goals",
            "Duplication in function",
            "Executive sponsorship",
            "Business services"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 3
        },
        {
          "question": "The development of future EA views is important to an enterprise because it supports:",
          "options": [
            "Resource planning and decision-making",
            "Hardware repair",
            "Software coding, testing, and debugging",
            "Payroll processing"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 4
        },
        {
          "question": "Initiatives in the very early stages of consideration can be left out of future views until they have:",
          "options": [
            "A completed Post-Implementation Review and a lessons-learned report",
            "A signed vendor contract, installed hardware, and trained end-users",
            "Firm backing from sponsors, strong business cases, and viable technical solutions",
            "Approval from all end-users, the webmaster, the research analyst, and the data architect"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 5
        },
        {
          "question": "Candidate initiatives are better documented in:",
          "options": [
            "The current view of the Strategic Plan",
            "The Network Inventory",
            "The Data Dictionary",
            "A special section of the EA Management Plan"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 6
        },
        {
          "question": "CONOPS stands for:",
          "options": [
            "Concept of Operations",
            "Control of Operations",
            "Continuity of Operations",
            "Configuration of Operating Systems"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 7
        },
        {
          "question": "CONOPS scenarios looking into the future have been used for millennia as a:",
          "options": [
            "Software testing tool",
            "Military planning tool",
            "Network design tool",
            "Financial accounting tool"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 8
        },
        {
          "question": "The role that future scenarios play in developing EA future views is identifying:",
          "options": [
            "The final cost and schedule of every planned IT project",
            "A range of operating options and planning assumptions for the enterprise",
            "The complete list of IT resources currently in operation",
            "The single exact operating environment the enterprise will face in the future"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 9
        },
        {
          "question": "When an enterprise thinks through its scenarios in advance, its initiatives are described as:",
          "options": [
            "Offensive moves",
            "Defensive moves",
            "Counter-moves",
            "Neutral moves"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views. Probable responses are defensive moves.",
          "id": 10
        },
        {
          "question": "Enterprises should identify a range of internal and external factors from this analysis in deciding which future CONOPS scenarios to document.",
          "options": [
            "CRUD Matrix",
            "Cost-Benefit Analysis",
            "SWOT Analysis",
            "Post-Implementation Review"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 11
        },
        {
          "question": "Why is having a number of future scenarios helpful to an enterprise?",
          "options": [
            "It reduces the number of EA artifacts that must be documented and maintained at each level of the framework",
            "Only one scenario can be documented per year, so several years are needed",
            "Each scenario replaces the need for a separate Strategic Plan document",
            "It is impossible to predict which internal/external factors will create a helpful or hostile operating environment"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 12
        },
        {
          "question": "Which of the following is a Strategic Level EA artifact?",
          "options": [
            "Rack Elevation Diagram (NI-7)",
            "Balanced Scorecard (S-5)",
            "Logical Data Model (D-5)",
            "Swim Lane Process Diagram (B-3)"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 13
        },
        {
          "question": "Which plan provides more detailed descriptions of how IT initiatives will support the enterprise's Strategic Plan?",
          "options": [
            "Security Plan",
            "COOP Plan",
            "E-Business or E-Government Plan",
            "Knowledge Management Plan"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 14
        },
        {
          "question": "How often should updated strategic plans be published to reflect changes in direction and priorities?",
          "options": [
            "Every month",
            "Only once",
            "Every week",
            "Every few years"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 15
        },
        {
          "question": "Future scenarios should be documented the same way as the current scenario, which is as:",
          "options": [
            "An integrated narrative and set of planning assumptions",
            "A network connectivity diagram and an equipment inventory",
            "A data dictionary of entities and formats",
            "A list of hardware and software products"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 16
        },
        {
          "question": "High-level resource planning supported by IT-related strategic initiatives is also known as the:",
          "options": [
            "Capital planning and investment control (CPIC) process",
            "EA configuration management (CM) process",
            "Post-implementation review (PIR) process",
            "Systems analysis and design method (SADM) process"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 17
        },
        {
          "question": "Changes to strategic goals and initiatives in the future views will require new or modified:",
          "options": [
            "Data dictionaries and object libraries",
            "Outcome and output measures of success",
            "Hardware and software product lists",
            "Cable plant and network diagrams"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 18
        },
        {
          "question": "Which of the following is a Business Level EA artifact?",
          "options": [
            "System Interface Matrix (SA-3)",
            "Network Inventory (NI-2)",
            "SWOT Analysis (S-2)",
            "Investment Business Case (B-8)"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 19
        },
        {
          "question": "Influencing factors such as new customer requirements, competitive strategies, new technologies, and changes in resource availability are also known as:",
          "options": [
            "Waivers",
            "Artifacts",
            "Drivers",
            "Baselines"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 20
        },
        {
          "question": "Which is NOT one of the four general types of changes to business services?",
          "options": [
            "Outsourcing of an existing process to a vendor",
            "Minor improvement of an existing process",
            "Major reengineering of an existing process",
            "Introduction of a completely new process"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views. The four types: new process, elimination, major reengineering, and minor improvement.",
          "id": 21
        },
        {
          "question": "Reviews of existing business services, to find those that are obsolete or duplicative, should be performed periodically by:",
          "options": [
            "End-user representatives",
            "The EA tool expert",
            "The webmaster",
            "Line-of-business managers"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 22
        },
        {
          "question": "Documenting approved changes to business services helps maintain this kind of alignment with strategic goals and initiatives.",
          "options": [
            "Horizontal alignment",
            "External alignment",
            "Upward alignment",
            "Downward alignment"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views. Downward alignment ensures the lower three levels are adjusted to support the process changes.",
          "id": 23
        },
        {
          "question": "The Project Management Plan (PMP) is described as a:",
          "options": [
            "Legal contract",
            "Living document",
            "One-time document",
            "Network diagram"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 24
        },
        {
          "question": "The current view of the PMP is developed in this stage of the project lifecycle.",
          "options": [
            "Maintenance stage",
            "Disposal stage",
            "Evaluation stage",
            "Requirements planning stage"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 25
        },
        {
          "question": "SADM stands for:",
          "options": [
            "System Audit and Data Monitoring",
            "Strategic Architecture Development Model",
            "Systems Analysis and Design Methods",
            "Software Application Delivery Management"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 26
        },
        {
          "question": "A future view of a PMP may NOT be needed with methods that develop the entire system capability in one effort, such as:",
          "options": [
            "Waterfall or rapid application development",
            "Evolutionary (spiral) development",
            "Incremental (phased) development",
            "Phased ERP implementation"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 27
        },
        {
          "question": "Which is an example where having both a current and future view of the PMP would be beneficial?",
          "options": [
            "A waterfall project where the whole system is delivered in one release",
            "Phased implementation of large ERP projects with several modules",
            "A small website developed in a single effort",
            "A one-time purchase of desktop computers"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 28
        },
        {
          "question": "The part of the PMP that documents the value of the investment to the enterprise.",
          "options": [
            "Network inventory",
            "Investment business case",
            "Sequencing plan",
            "Data dictionary"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 29
        },
        {
          "question": "The determination that another use of the invested funds is not warranted relates to:",
          "options": [
            "Sunk cost",
            "Total cost of ownership",
            "Opportunity cost",
            "Replacement cost"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 30
        },
        {
          "question": "Which of the following is an Information Level EA artifact?",
          "options": [
            "Activity/Entity (CRUD) Matrix (D-7)",
            "Concept of Operations Diagram (S-4)",
            "Use Case Narrative and Diagram (B-7)",
            "Cable Plant Diagram (NI-6)"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 31
        },
        {
          "question": "Future changes in data models can be integrated into current views by using special notation such as:",
          "options": [
            "Colored backgrounds",
            "Different fonts",
            "Page numbers",
            "Dashed lines and symbols"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 32
        },
        {
          "question": "One of the most powerful reasons for adopting an Object-Oriented (OO) approach is that:",
          "options": [
            "Objects can be modified with minimal effort to reflect changes in requirements",
            "OO removes the need for logical and physical data models in system design",
            "OO only works with proprietary products from one vendor",
            "Objects never need to be changed once they are created"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 33
        },
        {
          "question": "These provide taxonomies and standard formats for data entities but do not store actual data.",
          "options": [
            "Knowledge Warehouses",
            "Object Libraries",
            "Data Dictionaries",
            "Databases"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 34
        },
        {
          "question": "These store both the formats/standards and the actual modules of code that constitute an object.",
          "options": [
            "Data Dictionaries",
            "Object Libraries",
            "Network Inventories",
            "Swim Lane Diagrams"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 35
        },
        {
          "question": "The protection of parts of the code module from alteration is called:",
          "options": [
            "Inheritance",
            "Interoperability",
            "Configuration management",
            "Encapsulation"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 36
        },
        {
          "question": "Which of the following is a Systems/Services Level EA artifact?",
          "options": [
            "Business Plan (B-1)",
            "Building Blueprints (NI-4)",
            "System Evolution Diagram (SA-8)",
            "Physical Data Model (D-6)"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 37
        },
        {
          "question": "These are where the designed interface points in the programming code of commercial software are located.",
          "options": [
            "Application Program Interfaces (APIs)",
            "Network Center Diagrams (NI-5)",
            "Data Dictionaries / Object Libraries",
            "System Interface Matrices (SA-3)"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 38
        },
        {
          "question": "Web-based services exchange information through the:",
          "options": [
            "COOP Plan and security plan",
            "NAP/ESB Web Service Platform",
            "OSI and TCP/IP network models",
            "Cable plant and wiring closets"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 39
        },
        {
          "question": "WSDL descriptions of web services are kept in the:",
          "options": [
            "Data Dictionary",
            "Network Inventory",
            "EA repository glossary",
            "UDDI Registry"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 40
        },
        {
          "question": "Which of the following is an Infrastructure Level EA artifact?",
          "options": [
            "Rack Elevation Diagram (NI-7)",
            "Information Exchange Matrix (D-2)",
            "Strategic Plan (S-1)",
            "System Data Flow Diagram (SA-4)"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 41
        },
        {
          "question": "Network technical standards in the future view include changes reflected in models such as:",
          "options": [
            "The waterfall and spiral models",
            "The OSI model and TCP/IP model",
            "IDEF-0 and swim lane models",
            "The Balanced Scorecard and SWOT"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 42
        },
        {
          "question": "Future views of security documentation include the related security documentation for applications and databases, and the:",
          "options": [
            "Use Case Diagram",
            "Balanced Scorecard",
            "Business Plan",
            "COOP Plan"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 43
        },
        {
          "question": "The future view of EACRs consists of an archive of:",
          "options": [
            "Rejected EA Change Requests from previous years",
            "Current hardware and software inventories",
            "Approved, but yet to be implemented EA Change Requests",
            "Completed projects and their post-implementation reviews"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 44
        },
        {
          "question": "What is a Concept of Operations (CONOPS) scenario?",
          "options": [
            "A narrative of the current or a plausible future operating environment",
            "A list of approved EA Change Requests yet to be implemented",
            "A diagram of the network cables and racks in the data center",
            "A table that lists the roles and duties of the EA team members"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 45
        },
        {
          "question": "What is the Project Management Plan (PMP)?",
          "options": [
            "A one-time report written after a project is closed and archived",
            "A registry where web service descriptions are kept for clients",
            "A living document with standardized ways to implement IT resources",
            "A budget table that lists only the hardware costs of the EA"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 46
        },
        {
          "question": "What is the \"as-is\" view of the EA?",
          "options": [
            "The future view, documenting resources years from now",
            "The list of initiatives without executive sponsorship",
            "The archive of change requests yet to be implemented",
            "The current view, documenting IT resources active today"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 47
        },
        {
          "type": "true_false",
          "question": "The future view of the EA is also known as the \"as-is\" view.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. The future view is the \"to-be\" view; the \"as-is\" view documents current IT resources.",
          "id": 48
        },
        {
          "type": "true_false",
          "question": "Future EA views provide an authoritative reference for discussing options and changes during development.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 49
        },
        {
          "type": "true_false",
          "question": "Initiatives in the very early stages of consideration should always be included in future EA views.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. They can be left out until they have firm sponsor backing, strong business cases, and viable technical solutions.",
          "id": 50
        },
        {
          "type": "true_false",
          "question": "Cluttering future EA views with initiatives that have little chance of being implemented can detract from the perceived value of the EA.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 51
        },
        {
          "type": "true_false",
          "question": "CONOPS scenarios looking into the future have mainly been used as a financial accounting tool.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. They have been used as a military planning tool for millennia.",
          "id": 52
        },
        {
          "type": "true_false",
          "question": "CONOPS scenarios document both the current operating environment and a number of plausible future operating environments.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 53
        },
        {
          "type": "true_false",
          "question": "It is possible to predict exactly which internal and external factors will create a helpful or hostile operating environment.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. It is impossible to predict, which is why several future scenarios are helpful.",
          "id": 54
        },
        {
          "type": "true_false",
          "question": "The future view of strategic plans can serve as draft documents where potential changes that have executive sponsorship are recorded.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 55
        },
        {
          "type": "true_false",
          "question": "Strategic scenarios can be added or deleted from the Strategic Plan's future view in response to changes in the operating environment.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 56
        },
        {
          "type": "true_false",
          "question": "Updated strategic plans should be published every month.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. Updated plans should be published every few years.",
          "id": 57
        },
        {
          "type": "true_false",
          "question": "New strategic goals serve to direct the development of future operating scenarios.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 58
        },
        {
          "type": "true_false",
          "question": "There are six general types of changes to business services.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. There are four: new process, elimination, major reengineering, and minor improvement.",
          "id": 59
        },
        {
          "type": "true_false",
          "question": "At the Business Level, all potential changes to business services should be documented, even those without executive sponsorship.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. Only potential changes that have executive sponsorship should be documented.",
          "id": 60
        },
        {
          "type": "true_false",
          "question": "Downward alignment ensures that EA components and artifacts at the lower three levels are adjusted to support anticipated process changes.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 61
        },
        {
          "type": "true_false",
          "question": "PMPs are maintained on systems throughout the lifecycle, until the system is disposed.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 62
        },
        {
          "type": "true_false",
          "question": "The investment business case usually requires a review at least annually.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 63
        },
        {
          "type": "true_false",
          "question": "If an investment no longer generates sufficient benefits, it should be cancelled or modified.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 64
        },
        {
          "type": "true_false",
          "question": "Object reuse increases the cost of systems upgrade projects.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. Object reuse lowers the cost of systems upgrade projects.",
          "id": 65
        },
        {
          "type": "true_false",
          "question": "Data Dictionaries store the actual data of the enterprise's IT systems.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. Data Dictionaries do not store actual data; they list entities, attributes, data field formats, and standards.",
          "id": 66
        },
        {
          "type": "true_false",
          "question": "Various versions of an object can be separately stored for use in different systems and applications.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 67
        },
        {
          "type": "true_false",
          "question": "APIs can never include open standards.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. APIs may include open standards if maximum integration is desired, or be proprietary and limit interoperability.",
          "id": 68
        },
        {
          "type": "true_false",
          "question": "The same documentation techniques should be used for current and future views so that changes are easier to highlight and compare.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 69
        },
        {
          "question": "The document that describes how an enterprise will manage the transition of its current processes and resources to those that will be needed in the future.",
          "options": [
            "Project Management Plan",
            "EA Management Plan",
            "Strategic Plan",
            "Knowledge Management Plan"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 70
        },
        {
          "question": "The transition from the current EA to the future EA is:",
          "options": [
            "An ongoing activity, as new resources are implemented and become part of the current EA",
            "Not part of EA management, since it belongs only to project management and the PMP",
            "Handled only by the webmaster when the EA website is updated",
            "A one-time event that is completed within a single fiscal year"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 71
        },
        {
          "question": "The EA Management Plan is updated at regular intervals (e.g., annually) to provide:",
          "options": [
            "New hardware and software purchases for every department and office",
            "Clear version control for changes in current and future views",
            "A completely new EA framework for each year",
            "Daily status reports for every ongoing project"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 72
        },
        {
          "question": "Where should the EA Management Plan be archived?",
          "options": [
            "In the CIO's personal files",
            "In the Data Dictionary",
            "In the UDDI Registry",
            "In the on-line EA repository"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 73
        },
        {
          "question": "Which part of the EA Management Plan contains Governance and Principles, EA Roles and Responsibilities, and the EA Program Budget?",
          "options": [
            "Part 4. EA Glossary and References",
            "Part 3. EA Future Architecture Summary",
            "Part 1. EA Program Management",
            "Part 2. EA Current Architecture Summary"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 74
        },
        {
          "question": "Which part of the EA Management Plan contains Future Operating Scenarios, Planning Assumptions, and the Sequencing Plan?",
          "options": [
            "Part 2. EA Current Architecture Summary",
            "Part 3. EA Future Architecture Summary",
            "Part 4. EA Glossary and References",
            "Part 1. EA Program Management"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 75
        },
        {
          "question": "EA governance is best described through a narrative that provides EA program policy and an accompanying:",
          "options": [
            "Cable plant diagram of each building",
            "Data dictionary of all EA entities",
            "Flow chart that shows how and when decisions are made",
            "Rack elevation diagram of the enterprise network center"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 76
        },
        {
          "question": "These articulate the enterprise's values as they relate to the EA and guide the EA program's establishment and management.",
          "options": [
            "EA waivers",
            "EA output measures",
            "EA artifacts",
            "EA principles"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 77
        },
        {
          "question": "Which is an example of an EA principle?",
          "options": [
            "The recognition that IT is normally a means and not an end in itself",
            "Only proprietary products should be used",
            "IT should always be purchased first, before a business case is written",
            "Stakeholders should not participate in EA"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 78
        },
        {
          "question": "For EA to be viewed as part of the strategic planning process, business executives must:",
          "options": [
            "See the value of the EA program in supporting the outcomes that matter to them",
            "Manage the EA repository and the EA software application",
            "Write all of the EA documentation themselves at every level",
            "Personally approve every hardware and software purchase in the enterprise"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 79
        },
        {
          "question": "An effective format for showing EA roles and responsibilities is a:",
          "options": [
            "Pie chart",
            "Swim lane",
            "Rack elevation",
            "Table"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 80
        },
        {
          "question": "EA team position whose role is to be the champion of the EA program, provide resources, and assist in resolving high-level EA issues.",
          "options": [
            "Webmaster",
            "Chief Architect",
            "Sponsor",
            "Research Analyst"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 81
        },
        {
          "question": "EA team position that facilitates the establishment of the EA program, leads the resolution of high-level issues, and integrates EA and other governance.",
          "options": [
            "Executive Sponsor",
            "Chief Information Officer (CIO)",
            "Line of Business Manager",
            "Solutions Architect"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 82
        },
        {
          "question": "EA team position that manages the EA program, selects the EA framework, identifies EA standards, and manages the EA configuration management sub-process.",
          "options": [
            "Systems Architect",
            "Chief Architect",
            "Line of Business Manager",
            "Chief Information Officer (CIO)"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 83
        },
        {
          "question": "EA team position responsible for maintenance of the EA software application and the EA repository.",
          "options": [
            "Webmaster",
            "Data Architect",
            "Research Analyst",
            "EA Tool Expert"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 84
        },
        {
          "question": "EA team position that provides technical analysis and design support for database-related EA components.",
          "options": [
            "Solutions Architect",
            "Systems Architect",
            "Data Architect",
            "EA Tool Expert"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 85
        },
        {
          "question": "EA team position whose role is Requirements Identification / QA, identifying end-user requirements and giving feedback on solutions.",
          "options": [
            "End-User Representative",
            "Webmaster",
            "Sponsor",
            "Research Analyst"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 86
        },
        {
          "question": "The EA program budget is documented by fiscal year and over the total lifecycle so that this is identified.",
          "options": [
            "Opportunity cost",
            "Return on investment (ROI)",
            "Market value",
            "Total cost of ownership (TCO)"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 87
        },
        {
          "question": "The initial estimate of EA program costs represents the:",
          "options": [
            "\"Baseline\" for EA program funding",
            "Final cost of the EA program",
            "Output measure",
            "Waiver"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 88
        },
        {
          "question": "These measures identify progress being made toward some new end-state, such as better EA component integration.",
          "options": [
            "Output measures",
            "Outcome measures",
            "Baseline measures",
            "Cost measures"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 89
        },
        {
          "question": "These measures provide data on activities and things, such as how many databases exist.",
          "options": [
            "Qualitative measures",
            "Outcome measures",
            "Output measures",
            "Strategic measures"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 90
        },
        {
          "question": "\"Reduce IT project planning average costs by ten percent within one year\" is an example of a(n):",
          "options": [
            "Outcome measure",
            "EA principle",
            "Planning assumption",
            "Output measure"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 91
        },
        {
          "question": "Part 2 of the EA Management Plan helps the present role of IT to be analyzed from either a:",
          "options": [
            "Daily or weekly perspective",
            "Top-down or bottom-up perspective",
            "Vendor or customer perspective",
            "Left-to-right or right-to-left perspective"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 92
        },
        {
          "question": "EA components should not be procured unless:",
          "options": [
            "Every end user has requested the same component",
            "The component replaces all existing systems at once",
            "The vendor offers the lowest price for the component",
            "There is a strong business case that supports investment"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 93
        },
        {
          "question": "When documenting current systems and applications, comments should focus on degree of integration, potential scalability, user satisfaction, and:",
          "options": [
            "The age of every server in the data center",
            "The color scheme of each user interface",
            "Any reliance on proprietary solutions",
            "The number of programmers on each team"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 94
        },
        {
          "question": "The current infrastructure is evaluated on how well internal and external networks, systems, and cable plants integrate to create a:",
          "options": [
            "\"Temporary\" infrastructure",
            "\"Isolated\" infrastructure",
            "\"Proprietary\" infrastructure",
            "\"Seamless\" infrastructure"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 95
        },
        {
          "question": "Why should specific IT security information NOT be part of the EA Management Plan?",
          "options": [
            "It is too expensive to print",
            "Security is not part of EA",
            "It could reveal vulnerabilities",
            "It belongs in the glossary"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 96
        },
        {
          "question": "The standards section documents this, which provides EA standards for voice, data, video, and IT security.",
          "options": [
            "Balanced Scorecard (S-5)",
            "Technical Standards Reference Model (TSRM)",
            "Data Dictionary / Object Library",
            "Capital Equipment Inventory (NI-3)"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 97
        },
        {
          "question": "The most valuable resource an enterprise often has is its:",
          "options": [
            "People",
            "Software",
            "Servers",
            "Budget"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 98
        },
        {
          "question": "In the EA3 framework, updates to current and future views should be accomplished in this manner to preserve the emphasis on strategy and business.",
          "options": [
            "Top-down",
            "Bottom-up",
            "Random order",
            "Alphabetical order"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan. Updates begin with the enterprise's strategic goals and initiatives.",
          "id": 99
        },
        {
          "question": "This section documents the tasks, milestones, and timeframe for implementing new EA components and artifacts.",
          "options": [
            "Planning Assumptions",
            "EA Glossary",
            "EA Sequencing Plan",
            "EA Program Budget"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 100
        },
        {
          "question": "This section supports the sub-process by which changes to the EA are managed and the standards in the TSRM are applied.",
          "options": [
            "EA Sequencing Plan",
            "EA Configuration Management (CM)",
            "Future Operating Scenarios",
            "Workforce Skill Requirements"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 101
        },
        {
          "question": "Configuration management ensures that waivers have specific time limits so that:",
          "options": [
            "Projects finish faster",
            "No documentation is needed",
            "Waivers can be used forever",
            "EA standards are eventually realized"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 102
        },
        {
          "question": "Part 4 of the EA Management Plan provides a Glossary of EA terms along with a(n):",
          "options": [
            "Network Inventory",
            "Acronym List",
            "Sequencing Plan",
            "Business Case"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan. Because EA is still an emerging area of practice, these create a common set of terms.",
          "id": 103
        },
        {
          "question": "What is EA governance?",
          "options": [
            "The decision process for EA issues like investments and standards",
            "The hardware and network that support the EA repository",
            "The software application used to store the EA documentation",
            "The glossary and acronym list at the end of the EA Plan"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 104
        },
        {
          "question": "What are EA principles?",
          "options": [
            "Diagrams that show the current network infrastructure",
            "Technical standards for voice, data, and video systems",
            "Statements of the enterprise's values that guide the EA program",
            "Fiscal year budgets for each part of the EA program"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 105
        },
        {
          "question": "What is a waiver in EA configuration management?",
          "options": [
            "A request to add a new component to the EA",
            "A permanent exception that removes a standard for good",
            "A budget approval for the EA program each year",
            "A time-limited permission not to follow an EA standard"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 106
        },
        {
          "type": "true_false",
          "question": "The EA Management Plan documents the enterprise's performance gaps, resource requirements, planned solutions, a sequencing plan, and a summary of the current and future architecture.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 107
        },
        {
          "type": "true_false",
          "question": "The EA Management Plan is a one-time document that is never updated.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan. It is a living document updated at regular intervals (e.g., annually).",
          "id": 108
        },
        {
          "type": "true_false",
          "question": "Large and mid-size enterprises often have many IT projects underway at any given time, which requires coordination, prioritization, and oversight.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 109
        },
        {
          "type": "true_false",
          "question": "The EA Management Plan has four parts.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan. Program Management, Current Architecture Summary, Future Architecture Summary, Glossary and References.",
          "id": 110
        },
        {
          "type": "true_false",
          "question": "An emphasis on using commercial products that are based on open standards is an example of an EA principle.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 111
        },
        {
          "type": "true_false",
          "question": "The Webmaster is responsible for selecting and implementing the EA framework and documentation methodology.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan. That is the Chief Architect's responsibility; the Webmaster maintains the EA website.",
          "id": 112
        },
        {
          "type": "true_false",
          "question": "The EA Tool Expert participates in EA program decision-making and promotes the identification of IT-related requirements for each LOB.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan. That describes Line of Business Managers; the EA Tool Expert maintains the EA software application and repository.",
          "id": 113
        },
        {
          "type": "true_false",
          "question": "If the scope of the EA program changes, a corresponding change in the funding baseline should also be made.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 114
        },
        {
          "type": "true_false",
          "question": "Output measures often have both quantitative and qualitative elements, while outcome measures are usually quantitative.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan. It is the reverse: outcome measures have both elements; output measures are usually quantitative.",
          "id": 115
        },
        {
          "type": "true_false",
          "question": "The attainment of outcomes correlates to goal attainment, which is the most important thing to an enterprise.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 116
        },
        {
          "type": "true_false",
          "question": "\"Number of IT projects planned that year\" is an example of an output measure.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 117
        },
        {
          "type": "true_false",
          "question": "Part 2 of the EA Management Plan should duplicate all of the extensive documentation of the current EA.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan. Its objective is not to duplicate it, but to give an integrated view of how components and artifacts support each other.",
          "id": 118
        },
        {
          "type": "true_false",
          "question": "IT security should be part of any strategic goal or initiative that depends on accurate, properly authenticated information.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 119
        },
        {
          "type": "true_false",
          "question": "Updates to the current and future views of the EA should begin with the technology infrastructure.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan. Updates are done top-down, beginning with the strategic goals and initiatives.",
          "id": 120
        },
        {
          "type": "true_false",
          "question": "Changes to the EA include the addition, upgrade, and retirement of EA components or artifacts.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 121
        },
        {
          "type": "true_false",
          "question": "Configuration management allows waivers with no time limits.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan. Waivers have specific time limits so that EA standards are eventually realized.",
          "id": 122
        },
        {
          "type": "true_false",
          "question": "A bibliographical list of reference books and articles is included in Part 4 of the EA Management Plan.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 123
        },
        {
          "question": "The management and decision-making process associated with the planning, selection, control, and evaluation of investments in resources, including EA components.",
          "options": [
            "Strategic Planning",
            "Configuration Management",
            "Capital Planning",
            "Project Management"
          ],
          "answer": 2,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 124
        },
        {
          "question": "What are the four phases of the CPIC process?",
          "options": [
            "Plan, select, control, and evaluate",
            "Plan, design, build, test",
            "Select, fund, build, retire",
            "Analyze, design, implement, maintain"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 125
        },
        {
          "question": "The EA program is only effective if the enterprise's resources are effectively applied to:",
          "options": [
            "Marketing campaigns only",
            "Gaps in operational performance",
            "Employee recreation",
            "Office decorations"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management. If there were no gaps, there would be no requirement for new or upgraded EA components.",
          "id": 126
        },
        {
          "question": "Which of the following is promoted by the CPIC process?",
          "options": [
            "Approving every proposed investment regardless of its value",
            "Avoiding business cases so that investments can be approved faster",
            "Ignoring operational performance gaps until projects are completed",
            "Encouraging a culture of learning by evaluating each completed investment"
          ],
          "answer": 3,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 127
        },
        {
          "question": "In which CPIC phase are requirements, the business case, and the project plan developed?",
          "options": [
            "Planning Phase",
            "Evaluation Phase",
            "Selection Phase",
            "Control Phase"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 128
        },
        {
          "question": "The CPIC phase where a funding decision is made for a proposed investment in an EA component.",
          "options": [
            "Control Phase",
            "Evaluation Phase",
            "Selection Phase",
            "Planning Phase"
          ],
          "answer": 2,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 129
        },
        {
          "question": "The CPIC phase where ongoing projects are evaluated for how closely cost, schedule, and performance milestones are being met, and how well risk is managed.",
          "options": [
            "Evaluation Phase",
            "Control Phase",
            "Planning Phase",
            "Selection Phase"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 130
        },
        {
          "question": "The CPIC phase where completed IT projects receive a Post-Implementation Review (PIR) and operational systems are reviewed for continuing value.",
          "options": [
            "Selection Phase",
            "Planning Phase",
            "Control Phase",
            "Evaluation Phase"
          ],
          "answer": 3,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 131
        },
        {
          "question": "In the CPIC process, which document is at the center, connecting all four phases?",
          "options": [
            "Project Management Plan",
            "EA Management Plan",
            "Strategic Plan",
            "Technical Standards Reference Model"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 132
        },
        {
          "question": "Governance processes, including CPIC, should be overseen by a(n):",
          "options": [
            "External vendor that supplies the enterprise's ERP solution",
            "Executive Steering Committee comprised of the enterprise's top executives",
            "Webmaster and research analyst of the EA team",
            "Group of end-user representatives chosen from each line of business"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 133
        },
        {
          "question": "Project and Program Managers control successful outcomes by managing five primary aspects. Which of the following is one of them?",
          "options": [
            "Writing the glossary",
            "Designing the logo",
            "Mitigating risk",
            "Hiring the CIO"
          ],
          "answer": 2,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management. The five: managing scope, controlling costs, maintaining the schedule, achieving product performance, mitigating risk.",
          "id": 134
        },
        {
          "question": "A temporary endeavor undertaken to create a unique product, service, or result.",
          "options": [
            "Process",
            "Program",
            "Portfolio",
            "Project"
          ],
          "answer": 3,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 135
        },
        {
          "question": "An ongoing endeavor that manages existing processes/resources, or oversees the development of new processes/resources via projects.",
          "options": [
            "Project",
            "Plan",
            "Phase",
            "Program"
          ],
          "answer": 3,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 136
        },
        {
          "question": "In the Project Management Plan outline, Alternatives Analysis, Cost-Benefit Analysis, and Return on Investment Analysis are part of the:",
          "options": [
            "Architectural Alignment",
            "Business Case",
            "Security and Privacy",
            "Project Controls"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 137
        },
        {
          "question": "In the Project Management Plan outline, the Schedule and Work Breakdown Structure and Risk Management are part of:",
          "options": [
            "Project Controls",
            "Project Requirements",
            "Strategic Alignment",
            "Business Case"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 138
        },
        {
          "question": "What is a Post-Implementation Review (PIR)?",
          "options": [
            "A business case written in the CPIC Planning Phase",
            "A funding decision made in the CPIC Selection Phase",
            "A review of a completed IT project in the CPIC Evaluation Phase",
            "A check of cost and schedule in the CPIC Control Phase"
          ],
          "answer": 2,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 139
        },
        {
          "question": "What is CPIC?",
          "options": [
            "Capital Project and Implementation Cycle",
            "Capital Planning and Investment Control",
            "Common Process for Investment Costing",
            "Central Planning and Information Control"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 140
        },
        {
          "type": "true_false",
          "question": "The CPIC process is a cyclic process.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 141
        },
        {
          "type": "true_false",
          "question": "If there were no gaps in operational performance, there would still be a requirement for new or upgraded EA components.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management. If there were no gaps, there would be no requirement for new or upgraded EA components.",
          "id": 142
        },
        {
          "type": "true_false",
          "question": "A significant part of IT governance is implemented through the CPIC process.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 143
        },
        {
          "type": "true_false",
          "question": "In the CPIC Selection Phase, completed IT projects receive a Post-Implementation Review.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management. The PIR happens in the Evaluation Phase; the Selection Phase makes the funding decision.",
          "id": 144
        },
        {
          "type": "true_false",
          "question": "Project management focuses on developing, implementing, operating, improving, and/or retiring enterprise resources.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 145
        },
        {
          "type": "true_false",
          "question": "A program is a temporary endeavor, while a project is an ongoing endeavor.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management. A project is temporary; a program is ongoing.",
          "id": 146
        },
        {
          "type": "true_false",
          "question": "The Project Management Plan includes a Security and Privacy section.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 147
        }
      ]
    }
  ],
  "cc6": [
    {
      "id": "cc6_finals",
      "term": "Finals",
      "title": "Finals Exam Reviewer",
      "description": "Chapters 5–8: Database Query Languages, Data Organization and Architecture, Data Governance, and Special Purpose Databases.",
      "timeLimit": 120,
      "questions": [
        {
          "id": 1,
          "question": "A specialized computer language used to make queries and retrieve information from databases.",
          "options": [
            "Query language",
            "Markup language",
            "Scripting language",
            "Programming language"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Database Query Languages. It serves as an interface between users and databases, enabling users to manage data from a DBMS."
        },
        {
          "id": 2,
          "question": "One of the most widely used modern query languages; a domain-specific programming language used to interact with relational databases and perform operations on structured data within.",
          "options": [
            "Java",
            "Structured Query Language (SQL)",
            "HyperText Markup Language (HTML)",
            "Python"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 3,
          "question": "In the broadest sense, it refers to a request for data or information from a database or a data repository system.",
          "options": [
            "Schema",
            "Trigger",
            "Query",
            "Index"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 4,
          "question": "Which of the following is one of the basic types of queries?",
          "options": [
            "Debug query",
            "Compile query",
            "Render query",
            "Crosstab query"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Database Query Languages. Basic types include select, parameter, make-table, append, and crosstab queries."
        },
        {
          "id": 5,
          "question": "Broadly categorized, query languages fall into which two buckets?",
          "options": [
            "Relational and non-relational",
            "Compiled and interpreted",
            "Procedural and declarative",
            "Structured and unstructured"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 6,
          "question": "These languages instruct a computer on how to execute tasks, and the focus is on defining step-by-step procedures.",
          "options": [
            "Markup languages",
            "Procedural languages",
            "Declarative languages",
            "NoSQL languages"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 7,
          "question": "These languages abstract the 'how-to,' focusing on the 'what' - defining only the desired outcome without dictating the retrieval method.",
          "options": [
            "Declarative languages",
            "Assembly languages",
            "Machine languages",
            "Procedural languages"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 8,
          "question": "Procedural paradigms are exemplified by languages like:",
          "options": [
            "GraphQL",
            "SQL",
            "SPARQL",
            "PL/SQL"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Database Query Languages. SQL is the declarative example; PL/SQL is the procedural example."
        },
        {
          "id": 9,
          "question": "SQL is known as a declarative language, meaning it describes:",
          "options": [
            "How to accomplish a task through step-by-step procedures",
            "The user interface of an application",
            "The physical storage of the data on disk",
            "What needs to be accomplished rather than how to accomplish it"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Database Query Languages. SQL is declarative, but it also includes traditionally procedural elements."
        },
        {
          "id": 10,
          "question": "SQL sub-languages are commonly divided into how many main categories?",
          "options": [
            "Three",
            "Five",
            "Six",
            "Four"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Database Query Languages. DQL, DDL, DCL, DML, and TCL."
        },
        {
          "id": 11,
          "question": "Used to query or retrieve data from the database; it typically involves using the SELECT statement.",
          "options": [
            "Data Query Language (DQL)",
            "Data Control Language (DCL)",
            "Data Definition Language (DDL)",
            "Data Manipulation Language (DML)"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 12,
          "question": "Used to define and modify the structure of database objects such as tables, indexes, and schemas.",
          "options": [
            "Data Manipulation Language (DML)",
            "Data Control Language (DCL)",
            "Data Definition Language (DDL)",
            "Data Query Language (DQL)"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 13,
          "question": "Used to control access to the data in the database, dealing with permissions and user rights.",
          "options": [
            "Data Control Language (DCL)",
            "Data Query Language (DQL)",
            "Data Definition Language (DDL)",
            "Data Manipulation Language (DML)"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 14,
          "question": "Used to manipulate data within the tables, allowing for insertion, updates, deletion, and retrieval.",
          "options": [
            "Data Control Language (DCL)",
            "Data Query Language (DQL)",
            "Data Definition Language (DDL)",
            "Data Manipulation Language (DML)"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 15,
          "question": "Used to manage transactions within a database, ensuring the integrity and consistency of data.",
          "options": [
            "Data Definition Language (DDL)",
            "Data Query Language (DQL)",
            "Transaction Control Language (TCL)",
            "Data Control Language (DCL)"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 16,
          "question": "ALTER TABLE employees ADD COLUMN salary DECIMAL(10, 2);  This statement belongs to:",
          "options": [
            "Data Manipulation Language (DML)",
            "Data Definition Language (DDL)",
            "Data Control Language (DCL)",
            "Transaction Control Language (TCL)"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Database Query Languages. CREATE, ALTER, and DROP are DDL commands."
        },
        {
          "id": 17,
          "question": "GRANT SELECT ON employees TO user_name;  This statement belongs to:",
          "options": [
            "Data Definition Language (DDL)",
            "Data Control Language (DCL)",
            "Transaction Control Language (TCL)",
            "Data Query Language (DQL)"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Database Query Languages. GRANT and REVOKE are DCL commands."
        },
        {
          "id": 18,
          "question": "UPDATE employees SET department = 'HR' WHERE id = 1;  This statement belongs to:",
          "options": [
            "Data Control Language (DCL)",
            "Data Definition Language (DDL)",
            "Data Manipulation Language (DML)",
            "Data Query Language (DQL)"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Database Query Languages. INSERT, UPDATE, and DELETE are DML commands."
        },
        {
          "id": 19,
          "question": "Which statement belongs to Transaction Control Language (TCL)?",
          "options": [
            "REVOKE INSERT ON employees FROM user_name;",
            "DELETE FROM employees WHERE id = 1;",
            "DROP TABLE employees;",
            "ROLLBACK;"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Database Query Languages. COMMIT, ROLLBACK, and SAVEPOINT are TCL commands."
        },
        {
          "id": 20,
          "question": "NoSQL databases are also called:",
          "options": [
            "\"Not Only SQL\" databases",
            "\"Non-Optimized SQL\" databases",
            "\"New SQL\" databases",
            "\"No Structured Query\" databases"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 21,
          "question": "Unlike relational databases that use tables and structured data, NoSQL databases store and retrieve data using methods like:",
          "options": [
            "Tables, rows, and predefined schemas",
            "Indexes, primary keys, and foreign keys",
            "Key values, graphs, wide columns, and documents",
            "Triggers, stored procedures, and views"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 22,
          "question": "While SQL is suited for relational databases housing structured data and using predefined schemas, NoSQL excels with:",
          "options": [
            "Step-by-step procedures for data retrieval",
            "Compiling software applications",
            "Fixed schemas for small structured data",
            "Dynamic schemas for unstructured data and big data"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 23,
          "question": "Which statement correctly differentiates query languages from programming languages?",
          "options": [
            "Query languages are specialized for interacting with databases, while programming languages are designed to build software applications",
            "Both query languages and programming languages are designed mainly to build user interfaces",
            "Query languages are designed to build software applications, while programming languages only retrieve data",
            "Programming languages are solely focused on data retrieval, while query languages compile software"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 24,
          "question": "Which of the following is TRUE about query languages?",
          "options": [
            "Query commands usually need more lines of code than programming languages for the same database operation",
            "Query languages do not compile software",
            "Query languages handle user interface design",
            "Query languages change the underlying software logic"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Database Query Languages. Query commands are concise and highly focused, simplifying complex data operations into readable statements."
        },
        {
          "id": 25,
          "question": "This query language allows clients to request specific data, reducing over-fetching and under-fetching.",
          "options": [
            "SPARQL",
            "GraphQL",
            "PL/SQL",
            "Prisma"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 26,
          "question": "This query language is used to query RDF data on the Semantic Web.",
          "options": [
            "SPARQL",
            "GraphQL",
            "MongoDB Query Language (MQL)",
            "Prisma"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 27,
          "question": "Oracle's procedural extension to SQL, allowing for more complex operations.",
          "options": [
            "SPARQL",
            "MQL",
            "PL/SQL",
            "GraphQL"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 28,
          "question": "A database toolkit that offers type-safe query building for modern databases.",
          "options": [
            "GraphQL",
            "SPARQL",
            "PL/SQL",
            "Prisma"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 29,
          "question": "MongoDB, a popular NoSQL database, uses what kind of query language?",
          "options": [
            "Oracle's procedural extension to SQL",
            "A type-safe JavaScript toolkit",
            "A JSON-like query language",
            "An RDF-based query language"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 30,
          "question": "Use case: using query languages to retrieve specific data from a large database quickly, avoiding manual extraction.",
          "options": [
            "Extracting relevant data",
            "Aggregating data",
            "Managing data integrity",
            "Sorting data"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 31,
          "question": "Use case: using functions like SUM, COUNT, AVERAGE, and MAX to summarize and analyze data within databases.",
          "options": [
            "Updating existing data",
            "Aggregating data",
            "Extracting relevant data",
            "Filtering unnecessary data"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 32,
          "question": "Use case: using ACID properties in SQL to ensure the integrity of database transactions.",
          "options": [
            "Aggregating data",
            "Filtering unnecessary data",
            "Sorting data",
            "Managing data integrity"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 33,
          "question": "Use case: query languages like SPARQL enable this by specific fields, making it easier to visualize and analyze results.",
          "options": [
            "Managing data integrity",
            "Extracting relevant data",
            "Updating existing data",
            "Sorting data"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 34,
          "question": "Application area where tools allow users to query databases directly using familiar declarative commands to analyze trends or insights from large datasets.",
          "options": [
            "Web development",
            "Business Intelligence (BI)",
            "Data warehousing",
            "Database administration"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 35,
          "question": "Application area where query languages give administrators the tools to manage, maintain, and optimize databases for different use cases within an organization.",
          "options": [
            "Web development",
            "Business Intelligence (BI)",
            "Database administration",
            "Data warehousing"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Database Query Languages"
        },
        {
          "id": 36,
          "question": "Describes how data is managed from collection through to transformation, distribution, and consumption; it sets the blueprint for data and the way it flows through data storage systems.",
          "options": [
            "Data architecture",
            "Data organization",
            "Data mining",
            "Data governance"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 37,
          "question": "The design of a data architecture should be driven by:",
          "options": [
            "Programming language trends",
            "Hardware availability",
            "Business requirements",
            "Developer preferences"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 38,
          "question": "Which of the following does a good data architecture ensure?",
          "options": [
            "It keeps data in separate silos",
            "It avoids redundant data storage",
            "It stops new applications from being added",
            "It stores duplicate copies in every department"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture. Good data architecture: manageable and useful data, supports lifecycle management, avoids redundancy, improves quality, enables new applications."
        },
        {
          "id": 39,
          "question": "The process of managing information, following the life of data from the moment it is first created and stored, up to the time it gets archived or destroyed.",
          "options": [
            "Data classification",
            "Data stewardship",
            "Data asset valuation",
            "Data lifecycle management"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 40,
          "question": "Modern data architectures often leverage which of the following to manage and process data?",
          "options": [
            "Cloud platforms",
            "Punch cards",
            "Standalone spreadsheets",
            "Paper filing systems"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 41,
          "question": "What are the three types of data models?",
          "options": [
            "Relational, hierarchical, and network",
            "Conceptual, logical, and physical",
            "Structured, semi-structured, and unstructured",
            "Business, data, and technical"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 42,
          "question": "Also referred to as domain models, these offer a big-picture view of what the system will contain, how it will be organized, and which business rules are involved.",
          "options": [
            "Logical data models",
            "Graph data models",
            "Physical data models",
            "Conceptual data models"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture. Conceptual models are usually created when gathering initial project requirements."
        },
        {
          "id": 43,
          "question": "These models are less abstract, provide greater detail about concepts and relationships, and indicate data attributes such as data types and their lengths.",
          "options": [
            "Conceptual data models",
            "Physical data models",
            "Logical data models",
            "Domain models"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 44,
          "question": "Which data model does NOT specify any technical system requirements?",
          "options": [
            "Logical data model",
            "Physical data model",
            "Storage model",
            "Database schema"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 45,
          "question": "The most detailed and specific data model; it defines the actual implementation of the database, including table structures, indexes, and storage and performance considerations.",
          "options": [
            "Conceptual data model",
            "Logical data model",
            "Domain model",
            "Physical data model"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture. It is used for database schema creation and optimization."
        },
        {
          "id": 46,
          "question": "Which are the data architecture frameworks based on IBM standard?",
          "options": [
            "TOGAF, ITIL, and COBIT",
            "TOGAF, DAMA-DMBOK 2, and Zachman Framework",
            "DAMA-DMBOK 2, ISO 9001, and Six Sigma",
            "Zachman, Scrum, and Agile"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 47,
          "question": "The enterprise architecture methodology developed in 1995 by The Open Group, showcasing a framework about the best practices and concepts of computer architecture and organization.",
          "options": [
            "TOGAF",
            "DAMA-DMBOK 2",
            "Zachman Framework",
            "Data Mesh"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 48,
          "question": "TOGAF pillar that defines the enterprise's organizational structure, business strategy, and processes.",
          "options": [
            "Data Architecture",
            "Technical Architecture",
            "Business Architecture",
            "Application Architecture"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 49,
          "question": "TOGAF pillar that describes the conceptual, logical, and physical data assets and how they are stored and managed throughout their lifecycle.",
          "options": [
            "Business Architecture",
            "Data Architecture",
            "Application Architecture",
            "Technical Architecture"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 50,
          "question": "TOGAF pillar that represents the application systems and how they relate to key business processes and each other.",
          "options": [
            "Business Architecture",
            "Technical Architecture",
            "Application Architecture",
            "Data Architecture"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 51,
          "question": "TOGAF pillar that describes the technology infrastructure (hardware, software, and networking) needed to support mission-critical applications.",
          "options": [
            "Application Architecture",
            "Business Architecture",
            "Data Architecture",
            "Technical Architecture"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 52,
          "question": "Its Data Management Body of Knowledge covers data architecture, governance and ethics, data modelling and design, storage, security, and integration.",
          "options": [
            "DAMA-DMBOK 2",
            "Data Fabric",
            "TOGAF",
            "Zachman Framework"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 53,
          "question": "This framework provides a formal way to organize and analyze data but does not include methods for doing so.",
          "options": [
            "DAMA-DMBOK 2",
            "Data Mesh",
            "TOGAF",
            "Zachman Framework"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 54,
          "question": "Aggregates data from different relational data sources across an enterprise into a single, central, consistent repository.",
          "options": [
            "Data warehouse",
            "Data mart",
            "Data lake",
            "Data mesh"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 55,
          "question": "A focused version of a data warehouse that contains a smaller subset of data needed by a single team or a select group of users, such as the HR department.",
          "options": [
            "Data lake",
            "Data mesh",
            "Data mart",
            "Data fabric"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 56,
          "question": "Stores both structured and unstructured data, which makes it unique from other data repositories.",
          "options": [
            "Data mart",
            "Data lake",
            "Data warehouse",
            "Data model"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 57,
          "question": "Snowflake, Google BigQuery, Amazon Redshift, and Firebolt are examples of:",
          "options": [
            "Data marts",
            "Data warehouses",
            "Data lakes",
            "Query languages"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 58,
          "question": "Amazon S3, Azure Blob Storage, Google Cloud Storage, and Databricks are examples of:",
          "options": [
            "Data lakes",
            "Data warehouses",
            "Graph databases",
            "Data marts"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 59,
          "question": "Type of data architecture that focuses on the automation of data integration, data engineering, and governance in a data value chain between data providers and data consumers.",
          "options": [
            "Data mart",
            "Data lake",
            "Data mesh",
            "Data fabric"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 60,
          "question": "A decentralized data architecture that organizes data by business domain.",
          "options": [
            "Data warehouse",
            "Data lake",
            "Data mesh",
            "Data fabric"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 61,
          "question": "In a data mesh, the organization needs to stop thinking of data as a by-product of a process and start thinking of it as:",
          "options": [
            "A technical requirement only",
            "A liability to be minimized",
            "A product in its own right",
            "A temporary record"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 62,
          "question": "Which of the following is a benefit of data architecture?",
          "options": [
            "Increasing data silos",
            "Reducing redundancy",
            "Adding duplicate storage",
            "Removing data lifecycle management"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture. Benefits: reducing redundancy, improving data quality, enabling integration, and data lifecycle management."
        },
        {
          "id": 63,
          "question": "Arranging information through sorting and storing and finding data in a way that helps you work smarter and make better decisions.",
          "options": [
            "Data organization",
            "Data governance",
            "Data stewardship",
            "Data architecture"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 64,
          "question": "Reason to organize data: well-organized data helps make better decisions faster by giving the right insights when needed.",
          "options": [
            "Data Accuracy and Consistency",
            "Improved Productivity",
            "Scalability and Growth",
            "Enhanced Decision-Making"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 65,
          "question": "Reason to organize data: it saves time and resources by making workflows smoother and searches quicker.",
          "options": [
            "Improved Productivity",
            "Data Accuracy and Consistency",
            "Enhanced Decision-Making",
            "Scalability and Growth"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 66,
          "question": "Reason to organize data: proper organization minimizes errors and ensures data is trustworthy.",
          "options": [
            "Enhanced Decision-Making",
            "Improved Productivity",
            "Scalability and Growth",
            "Data Accuracy and Consistency"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 67,
          "question": "Reason to organize data: organizing early on sets up to grow smoothly without getting overwhelmed by increasing data.",
          "options": [
            "Improved Productivity",
            "Scalability and Growth",
            "Enhanced Decision-Making",
            "Data Accuracy and Consistency"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 68,
          "question": "Classification of data based on date and time.",
          "options": [
            "Qualitative data",
            "Spatial data",
            "Chronological data",
            "Quantitative data"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 69,
          "question": "Classification of data based on geographical locations or areas.",
          "options": [
            "Chronological data",
            "Spatial data",
            "Qualitative data",
            "Quantitative data"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 70,
          "question": "Data that cannot be measured but can be described based on the presence and absence of characteristics.",
          "options": [
            "Spatial data",
            "Quantitative data",
            "Qualitative data",
            "Chronological data"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 71,
          "question": "Data that are further categorized by numerical forms.",
          "options": [
            "Chronological data",
            "Qualitative data",
            "Spatial data",
            "Quantitative data"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 72,
          "question": "Way to organize data: sort data by how important or sensitive it is, which helps keep it safe and follow rules.",
          "options": [
            "Data Classification",
            "Database Management",
            "Automation Tools",
            "Folder Structures"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 73,
          "question": "Way to organize data: let tools do repetitive tasks like entering data or checking it for mistakes.",
          "options": [
            "Data Classification",
            "Folder Structures",
            "Customer Relationship Management (CRM)",
            "Automation Tools"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 74,
          "question": "Way to organize data: use a system like HubSpot to keep track of all customer info in one place for better service and targeted marketing.",
          "options": [
            "Folder Structures",
            "Customer Relationship Management (CRM)",
            "Database Management",
            "Automation Tools"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Data Organization and Architecture"
        },
        {
          "id": 75,
          "question": "The exercise of authority and control (planning, monitoring, and enforcement) over the management of data assets.",
          "options": [
            "Data Architecture",
            "Data Organization",
            "Data Governance",
            "Data Stewardship"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 76,
          "question": "The purpose of Data Governance is to ensure that:",
          "options": [
            "Data is managed properly, according to policies and best practices",
            "Data is stored only in one central database owned by the IT department",
            "Data is archived or deleted as soon as each project ends",
            "All data management tasks are executed directly by the governance team"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 77,
          "question": "While data management overall ensures an organization gets value out of its data, Data Governance focuses on:",
          "options": [
            "How decisions are made about data and how people and processes are expected to behave in relation to data",
            "How data is physically stored on servers and how storage space is allocated",
            "How applications display data to users through their interfaces",
            "How fast queries can be executed and how indexes should be designed"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 78,
          "question": "DG program scope: defining, communicating, and driving execution of Data Strategy and Data Governance Strategy.",
          "options": [
            "Policy",
            "Compliance",
            "Oversight",
            "Strategy"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 79,
          "question": "DG program scope: setting and enforcing policies related to data and Metadata management, access, usage, security, and quality.",
          "options": [
            "Strategy",
            "Policy",
            "Issue management",
            "Standards and quality"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 80,
          "question": "DG program scope: providing hands-on observation, audit, and correction in key areas of quality, policy, and data management (often referred to as stewardship).",
          "options": [
            "Policy",
            "Data management projects",
            "Oversight",
            "Compliance"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 81,
          "question": "DG program scope: ensuring the organization can meet data-related regulatory compliance requirements.",
          "options": [
            "Strategy",
            "Compliance",
            "Oversight",
            "Data asset valuation"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 82,
          "question": "DG program scope: identifying, defining, escalating, and resolving issues related to data security, data access, data quality, regulatory compliance, and data ownership.",
          "options": [
            "Compliance",
            "Oversight",
            "Issue management",
            "Policy"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 83,
          "question": "DG program scope: setting standards and processes to consistently define the business value of data assets.",
          "options": [
            "Data asset valuation",
            "Standards and quality",
            "Strategy",
            "Data management projects"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 84,
          "question": "Business driver (Reducing Risk): control of private confidential Personal Identifying Information (PII).",
          "options": [
            "General risk management",
            "Vendor management",
            "Data security",
            "Privacy"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 85,
          "question": "Business driver (Reducing Risk): protection of data assets through controls for the availability, usability, integrity, consistency, auditability, and security of data.",
          "options": [
            "Regulatory compliance",
            "Data security",
            "Privacy",
            "General risk management"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 86,
          "question": "Business driver (Reducing Risk): oversight of the risks data poses to finances or reputation, including response to legal (E-Discovery) and regulatory issues.",
          "options": [
            "Privacy",
            "Data quality improvement",
            "General risk management",
            "Data security"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 87,
          "question": "Business driver (Improving Processes): establishment of a business glossary to define and locate data in the organization.",
          "options": [
            "Regulatory compliance",
            "Vendor management",
            "Data quality improvement",
            "Metadata Management"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 88,
          "question": "Business driver (Improving Processes): control of contracts dealing with data, such as cloud storage, external data purchase, and outsourcing data operations.",
          "options": [
            "Vendor management",
            "Metadata Management",
            "Regulatory compliance",
            "Efficiency in development projects"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 89,
          "question": "Business driver (Improving Processes): the ability to respond efficiently and consistently to regulatory requirements.",
          "options": [
            "Regulatory compliance",
            "Privacy",
            "Vendor management",
            "Data quality improvement"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 90,
          "question": "Business driver (Improving Processes): SDLC improvements to address issues and opportunities in data management, including management of data-specific technical debt.",
          "options": [
            "Vendor management",
            "Data quality improvement",
            "Metadata Management",
            "Efficiency in development projects"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 91,
          "question": "Business driver (Improving Processes): the ability to contribute to improved business performance by making data more reliable.",
          "options": [
            "Efficiency in development projects",
            "Regulatory compliance",
            "Data quality improvement",
            "Metadata Management"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 92,
          "question": "The goal of Data Governance is to enable an organization to:",
          "options": [
            "Replace data management functions",
            "Manage data as an asset",
            "Eliminate all data risks",
            "Store data at the lowest cost"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 93,
          "question": "DG goal: the program needs to be 'sticky'; it is not a project with a defined end but an ongoing process that requires organizational commitment.",
          "options": [
            "Measured",
            "Embedded",
            "Multi-layered",
            "Sustainable"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 94,
          "question": "DG goal: DG is not an add-on process; its activities need to be incorporated into development methods, analytics, Master Data management, and risk management.",
          "options": [
            "Embedded",
            "Business-driven",
            "Sustainable",
            "Measured"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 95,
          "question": "DG goal: DG done well has positive financial impact, but demonstrating it requires understanding the starting point and planning for measurable improvement.",
          "options": [
            "Principle-based",
            "Sustainable",
            "Measured",
            "Embedded"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 96,
          "question": "DG principle: successful Data Governance starts with visionary and committed leadership.",
          "options": [
            "Shared responsibility",
            "Leadership and strategy",
            "Business-driven",
            "Framework-based"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 97,
          "question": "DG principle: Data Governance is a business program and must govern IT decisions related to data as much as it governs business interaction with data.",
          "options": [
            "Leadership and strategy",
            "Multi-layered",
            "Principle-based",
            "Business-driven"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 98,
          "question": "DG principle: data governance is a shared responsibility between business data stewards and technical data management professionals.",
          "options": [
            "Shared responsibility",
            "Framework-based",
            "Business-driven",
            "Multi-layered"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 99,
          "question": "DG principle: data governance occurs at both the enterprise and local levels and often at levels in between.",
          "options": [
            "Framework-based",
            "Multi-layered",
            "Shared responsibility",
            "Principle-based"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 100,
          "question": "DG principle: the program must establish an operating framework that defines accountabilities and interactions.",
          "options": [
            "Multi-layered",
            "Principle-based",
            "Framework-based",
            "Leadership and strategy"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 101,
          "question": "DG principle: guiding principles are the foundation of DG activities, and especially of DG policy.",
          "options": [
            "Business-driven",
            "Shared responsibility",
            "Principle-based",
            "Framework-based"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 102,
          "question": "Just as an auditor controls financial processes but does not execute financial management, data governance ensures data is properly managed without directly executing data management. This represents:",
          "options": [
            "Full control of data management by the IT department",
            "A separation of duty between oversight and execution",
            "A merging of oversight and execution into one role",
            "A one-time data project with a defined end"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 103,
          "question": "An organization that values data as an asset and manages data through all phases of its lifecycle, including project development and ongoing operations.",
          "options": [
            "Data-centric organization",
            "Process-centric organization",
            "Data mart",
            "Federated organization"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance. Data is no longer treated as a byproduct of process and applications."
        },
        {
          "id": 104,
          "question": "In a data-centric organization, the enterprise data strategy must be directly aligned with:",
          "options": [
            "The vendor's product roadmap",
            "Each employee's preferences",
            "The IT hardware budget",
            "The overall business strategy"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 105,
          "question": "In terms of political governance, issue management and escalation are considered:",
          "options": [
            "Judicial-like functions",
            "Executive functions",
            "Administrative functions",
            "Legislative-like functions"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 106,
          "question": "In terms of political governance, defining policies, standards, and the Enterprise Data Architecture are considered:",
          "options": [
            "Judicial-like functions",
            "Legislative-like functions",
            "Executive functions",
            "Stewardship functions"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance. Executive functions are protecting and serving and administrative responsibilities."
        },
        {
          "id": 107,
          "question": "To better manage risk, most organizations adopt a representative form of data governance so that:",
          "options": [
            "Decisions are made faster by one person",
            "Only IT makes the decisions",
            "Governance is not needed",
            "All stakeholders can be heard"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 108,
          "question": "DG operating model where one Data Governance organization oversees all activities in all subject areas.",
          "options": [
            "Federated model",
            "Decentralized model",
            "Centralized model",
            "Replicated model"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 109,
          "question": "DG operating model where the same DG operating model and standards are adopted by each business unit.",
          "options": [
            "Hybrid model",
            "Federated model",
            "Centralized model",
            "Replicated model"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 110,
          "question": "DG operating model where one Data Governance organization coordinates with multiple Business Units to maintain consistent definitions and standards.",
          "options": [
            "Federated model",
            "Replicated model",
            "Distributed model",
            "Centralized model"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 111,
          "question": "The most common label to describe accountability and responsibility for data and processes that ensure effective control and use of data assets.",
          "options": [
            "Data Valuation",
            "Data Stewardship",
            "Data Architecture",
            "Data Ownership"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 112,
          "question": "Which terms are often used as synonyms for those who carry out steward-like functions?",
          "options": [
            "Vendor or supplier",
            "Owner or shareholder",
            "Custodian or trustee",
            "Auditor or regulator"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 113,
          "question": "Stewardship activity: definition and management of business terminology and valid data values; stewards are often responsible for the organization's Business Glossary.",
          "options": [
            "Documenting rules and standards",
            "Creating and managing core Metadata",
            "Managing data quality issues",
            "Executing operational data governance activities"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 114,
          "question": "Stewardship activity: definition and documentation of business rules, data standards, and data quality rules.",
          "options": [
            "Documenting rules and standards",
            "Creating and managing core Metadata",
            "Managing data quality issues",
            "Executing operational data governance activities"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 115,
          "question": "Stewardship activity: ensuring that, day-to-day and project-by-project, data governance policies and initiatives are adhered to.",
          "options": [
            "Managing data quality issues",
            "Creating and managing core Metadata",
            "Executing operational data governance activities",
            "Documenting rules and standards"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 116,
          "question": "A person whose job it is to manage the property of another person.",
          "options": [
            "Auditor",
            "Vendor",
            "Owner",
            "Steward"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 117,
          "question": "Which of the following is a type of Data Steward?",
          "options": [
            "Network Data Steward",
            "Coordinating Data Steward",
            "Marketing Data Steward",
            "Hardware Data Steward"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance. Types: Chief, Executive, Enterprise, Business, Data Owner, Technical, and Coordinating Data Stewards."
        },
        {
          "id": 118,
          "question": "Directives that codify principles and management intent into fundamental rules governing the creation, acquisition, integrity, security, quality, and use of data and information.",
          "options": [
            "Data models",
            "Data standards",
            "Data charters",
            "Data policies"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 119,
          "question": "The process of understanding and calculating the economic value of data to an organization.",
          "options": [
            "Data asset valuation",
            "Readiness assessment",
            "Data lifecycle management",
            "Data mining"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 120,
          "question": "Unlike many other assets such as money and physical equipment, data sets are:",
          "options": [
            "Fully interchangeable",
            "Valued only by their storage size",
            "Not interchangeable (non-fungible)",
            "Always equal in value"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 121,
          "question": "Way to measure value: the replacement or recovery cost of data lost in a disaster or data breach.",
          "options": [
            "Replacement cost",
            "Market value",
            "Identified opportunities",
            "Risk cost"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 122,
          "question": "Way to measure value: the value of data as a business asset at the time of a merger or acquisition.",
          "options": [
            "Identified opportunities",
            "Replacement cost",
            "Selling data",
            "Market value"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 123,
          "question": "Way to measure value: the value of income that can be gained from opportunities identified in the data.",
          "options": [
            "Risk cost",
            "Market value",
            "Identified opportunities",
            "Selling data"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 124,
          "question": "Way to measure value: a valuation based on potential penalties, remediation costs, and litigation expenses derived from legal or regulatory risk.",
          "options": [
            "Market value",
            "Risk cost",
            "Identified opportunities",
            "Replacement cost"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 125,
          "question": "Way to measure value: some organizations package data as a product or sell insights gained from their data.",
          "options": [
            "Replacement cost",
            "Identified opportunities",
            "Selling data",
            "Market value"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 126,
          "question": "DG activity: successful data governance requires a clear understanding of what is being governed and who is being governed, as well as who is governing.",
          "options": [
            "Define Data Governance for the Organization",
            "Define the DG Operating Framework",
            "Perform Readiness Assessment",
            "Develop Organizational Touch Points"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 127,
          "question": "DG activity: assessments that describe the current state of an organization's information management capabilities, maturity, and effectiveness.",
          "options": [
            "Perform Discovery and Business Alignment",
            "Perform Readiness Assessment",
            "Develop Data Governance Strategy",
            "Define Data Governance for the Organization"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 128,
          "question": "Readiness assessment: understand what the organization does with data and measure its current data management capabilities and capacity.",
          "options": [
            "Collaborative readiness",
            "Business alignment",
            "Capacity to change",
            "Data management maturity"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 129,
          "question": "Readiness assessment: measures the organization's ability to change behaviors required for adapting DG and helps identify potential resistance points.",
          "options": [
            "Business alignment",
            "Capacity to change",
            "Collaborative readiness",
            "Data management maturity"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 130,
          "question": "Readiness assessment: characterizes the organization's ability to collaborate in the management and use of data.",
          "options": [
            "Capacity to change",
            "Business alignment",
            "Data management maturity",
            "Collaborative readiness"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 131,
          "question": "Readiness assessment: examines how well the organization aligns uses of data with business strategy.",
          "options": [
            "Business alignment",
            "Collaborative readiness",
            "Data management maturity",
            "Capacity to change"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 132,
          "question": "Data Quality (DQ) analysis is part of which DG activity?",
          "options": [
            "Perform Readiness Assessment",
            "Develop Data Governance Strategy",
            "Perform Discovery and Business Alignment",
            "Develop Organizational Touch Points"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 133,
          "question": "Organizational touch point: developing and enforcing standard contract language for data management contracts such as Data-as-a-Service (DaaS) and cloud-related procurements.",
          "options": [
            "SDLC / development framework",
            "Procurement and Contracts",
            "Regulatory Compliance",
            "Budget and Funding"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 134,
          "question": "Organizational touch point: the office can be a focal point for preventing duplicate efforts and ensuring optimization of acquired data assets.",
          "options": [
            "Regulatory Compliance",
            "SDLC / development framework",
            "Procurement and Contracts",
            "Budget and Funding"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 135,
          "question": "Organizational touch point: the program identifies control points where enterprise policies, processes, and standards can be developed in the system or application development lifecycles.",
          "options": [
            "SDLC / development framework",
            "Procurement and Contracts",
            "Budget and Funding",
            "Regulatory Compliance"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 136,
          "question": "A data governance strategy defines:",
          "options": [
            "The list of data warehouse vendors",
            "The SQL commands used by developers",
            "The scope and approach to governance efforts",
            "The physical database design"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 137,
          "question": "DG strategy deliverable: identifies the business drivers, vision, mission, and principles for data governance.",
          "options": [
            "Charter",
            "Implementation roadmap",
            "Plan for operational success",
            "Operating framework and accountabilities"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 138,
          "question": "DG strategy deliverable: defines structure and responsibility for data governance activities.",
          "options": [
            "Charter",
            "Implementation roadmap",
            "Plan for operational success",
            "Operating framework and accountabilities"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 139,
          "question": "DG strategy deliverable: timeframes for the roll out of policies and directives, business glossary, architecture, asset valuation, and standards and procedures.",
          "options": [
            "Operating framework and accountabilities",
            "Implementation roadmap",
            "Plan for operational success",
            "Charter"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 140,
          "question": "DG strategy deliverable: describing a target state of sustainable data governance activities.",
          "options": [
            "Operating framework and accountabilities",
            "Charter",
            "Plan for operational success",
            "Implementation roadmap"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 141,
          "question": "Operating framework consideration: organizations that use data as a crucial commodity (e.g., Facebook, Amazon) need an operating model that reflects the role of data.",
          "options": [
            "Value of data to the organization",
            "Business model",
            "Impact of regulation",
            "Cultural factors"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 142,
          "question": "Operating framework consideration: decentralized vs. centralized and local vs. international business.",
          "options": [
            "Impact of regulation",
            "Business model",
            "Cultural factors",
            "Value of data to the organization"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 143,
          "question": "Operating framework consideration: acceptance of discipline and adaptability to change.",
          "options": [
            "Business model",
            "Value of data to the organization",
            "Cultural factors",
            "Impact of regulation"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 144,
          "question": "Operating framework consideration: highly regulated organizations will have a different mindset and operating model of DG than those less regulated.",
          "options": [
            "Business model",
            "Value of data to the organization",
            "Cultural factors",
            "Impact of regulation"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Data Governance"
        },
        {
          "id": 145,
          "question": "Databases that are tailored for specific use cases.",
          "options": [
            "Flat-file databases",
            "General purpose databases",
            "Special purpose databases",
            "Relational databases"
          ],
          "answer": 2,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 146,
          "question": "Which of the following is listed among the special databases?",
          "options": [
            "Active database",
            "Spreadsheet database",
            "Flat-file database",
            "Batch database"
          ],
          "answer": 0,
          "explanation": "Chapter 8 - Special Purpose Databases. Special databases: Multimedia, Real-time, Temporal, Spatial, XML, Graph, Active, and Mobile."
        },
        {
          "id": 147,
          "question": "Special purpose database used for images and video.",
          "options": [
            "Spatial database",
            "Temporal database",
            "XML database",
            "Multimedia database"
          ],
          "answer": 3,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 148,
          "question": "Distributed databases are used for:",
          "options": [
            "Storing images and video files",
            "Fault tolerance across multiple nodes",
            "Tracking changes to data over time",
            "Mapping geographic locations"
          ],
          "answer": 1,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 149,
          "question": "A data store designed to collect, process, and/or enrich an incoming series of data points (a data stream) in real time, typically immediately after the data is created.",
          "options": [
            "Temporal database",
            "Real-time database",
            "Active database",
            "Mobile database"
          ],
          "answer": 1,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 150,
          "question": "Which of the following is a business case for real-time databases?",
          "options": [
            "Maintain the stock price histories",
            "Store XML documents securely",
            "Deploy real-time machine learning inference",
            "Maintain the credit histories of the user"
          ],
          "answer": 2,
          "explanation": "Chapter 8 - Special Purpose Databases. Stock price and credit histories are business cases for temporal databases."
        },
        {
          "id": 151,
          "question": "A database that needs some aspect of time for the organization of information.",
          "options": [
            "Temporal database",
            "Real-time database",
            "Spatial database",
            "Graph database"
          ],
          "answer": 0,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 152,
          "question": "Maintaining stock price histories (finance), patient histories (healthcare), and credit histories (banking) are business cases for:",
          "options": [
            "Mobile databases",
            "Real-time databases",
            "Spatial databases",
            "Temporal databases"
          ],
          "answer": 3,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 153,
          "question": "A database optimized to store and query data related to objects in space, including points, lines, and polygons.",
          "options": [
            "Temporal database",
            "XML database",
            "Spatial database",
            "Graph database"
          ],
          "answer": 2,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 154,
          "question": "Spatial operation that computes geometry distance, polygon area, and line length.",
          "options": [
            "Measurement",
            "Predicates",
            "Geoprocessing",
            "Observer Functions"
          ],
          "answer": 0,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 155,
          "question": "Spatial operation that creates new features by changing existing ones, such as surrounding them with a buffer or intersecting features.",
          "options": [
            "Geometry Constructors",
            "Measurement",
            "Predicates",
            "Geoprocessing"
          ],
          "answer": 3,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 156,
          "question": "Spatial operation that specifies the vertices (points or nodes) that define the form to create new geometries.",
          "options": [
            "Observer Functions",
            "Geometry Constructors",
            "Measurement",
            "Geoprocessing"
          ],
          "answer": 1,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 157,
          "question": "Spatial operation: queries that give detailed answers on a feature, like the location of a circle's center.",
          "options": [
            "Measurement",
            "Observer Functions",
            "Geometry Constructors",
            "Predicates"
          ],
          "answer": 1,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 158,
          "question": "Spatial operation: true/false questions about the spatial relationships between geometries.",
          "options": [
            "Geoprocessing",
            "Measurement",
            "Observer Functions",
            "Predicates"
          ],
          "answer": 3,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 159,
          "question": "Allows a system to obtain data from a vast collection of items without actually searching them all.",
          "options": [
            "Traversal query",
            "Trigger",
            "Spatial index",
            "Spatial query"
          ],
          "answer": 2,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 160,
          "question": "A unique kind of SQL query supported by spatial databases that takes the spatial relationship between geometries into account.",
          "options": [
            "Spatial query",
            "Spatial index",
            "XQuery",
            "Traversal query"
          ],
          "answer": 0,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 161,
          "question": "A database used to store huge amounts of information in the XML format.",
          "options": [
            "XML database",
            "Active database",
            "Multimedia database",
            "Graph database"
          ],
          "answer": 0,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 162,
          "question": "Data stored in an XML database can be queried using:",
          "options": [
            "SPARQL",
            "GraphQL",
            "XQuery",
            "PL/SQL"
          ],
          "answer": 2,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 163,
          "question": "A specialized, single-purpose platform for creating and manipulating graphs.",
          "options": [
            "XML database",
            "Spatial database",
            "Relational database",
            "Graph database"
          ],
          "answer": 3,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 164,
          "question": "Graphs contain which of the following, used to represent and store data in a way relational databases are not equipped to do?",
          "options": [
            "Rows, columns, and keys",
            "Nodes, edges, and properties",
            "Documents, collections, and fields",
            "Tables, views, and indexes"
          ],
          "answer": 1,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 165,
          "question": "Graph databases allow users to perform this kind of query based on connections.",
          "options": [
            "Traversal queries",
            "Crosstab queries",
            "Append queries",
            "Spatial queries"
          ],
          "answer": 0,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 166,
          "question": "A database consisting of a set of triggers, which is very difficult to maintain because of the complexity in understanding the effect of these triggers.",
          "options": [
            "Real-time database",
            "Active database",
            "Temporal database",
            "Mobile database"
          ],
          "answer": 1,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 167,
          "question": "In an active database, before executing a statement that modifies the database, the DBMS first verifies:",
          "options": [
            "Whether the database server is fully managed by a cloud provider",
            "Whether the user is connected through a mobile network",
            "Whether the data being modified is stored in XML format",
            "Whether the particular trigger specified in the statement is activated"
          ],
          "answer": 3,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 168,
          "question": "A database that can be connected to a mobile computing device over a mobile network (or wireless network).",
          "options": [
            "Distributed database",
            "Serverless database",
            "Mobile database",
            "Real-time database"
          ],
          "answer": 2,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 169,
          "question": "In a mobile database, a cache is maintained to hold frequent data and transactions so that they are not lost due to:",
          "options": [
            "Connection failure",
            "Duplicate records",
            "Spatial queries",
            "Too many triggers"
          ],
          "answer": 0,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 170,
          "question": "Which of the following is a feature of mobile databases?",
          "options": [
            "They cannot communicate with a central database server",
            "They are physically separate from the central database server",
            "They only store XML documents",
            "They cannot work without a wireless connection"
          ],
          "answer": 1,
          "explanation": "Chapter 8 - Special Purpose Databases. Mobile databases can even work disconnected when connections are poor or non-existent."
        },
        {
          "id": 171,
          "question": "In modern databases, data is said to be the new:",
          "options": [
            "Gold",
            "Electricity",
            "Oil",
            "Currency"
          ],
          "answer": 2,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 172,
          "question": "Which of the following is NOT listed as a trend in modern databases?",
          "options": [
            "Serverless databases",
            "Cloud-native databases",
            "Embedding AI in databases",
            "Mobile databases"
          ],
          "answer": 3,
          "explanation": "Chapter 8 - Special Purpose Databases. Mobile databases are a special purpose database, not a trend. Trends: serverless, cloud-native, embedding AI, data analytics, data mining."
        },
        {
          "id": 173,
          "question": "Database technology where the underlying database servers and IT infrastructure are fully managed by a third-party cloud provider and scale elastically as workloads change.",
          "options": [
            "Serverless database",
            "Temporal database",
            "Active database",
            "Mobile database"
          ],
          "answer": 0,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 174,
          "question": "Embedding AI brings powerful data management and analysis tools directly into the database. Its benefits include:",
          "options": [
            "Slower but more accurate query results",
            "Higher hardware costs, but faster reporting",
            "Ease of use, and being more efficient and secure",
            "Removing the need for data administrators"
          ],
          "answer": 2,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 175,
          "question": "Data analytics is a subset of:",
          "options": [
            "Data architecture",
            "Data mining",
            "Data governance",
            "Business intelligence (BI)"
          ],
          "answer": 3,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 176,
          "question": "It utilizes mathematical, statistical, and modeling techniques to extract insights from data.",
          "options": [
            "Data stewardship",
            "Data analytics",
            "Data governance",
            "Data organization"
          ],
          "answer": 1,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 177,
          "question": "Type of data analytics that focuses on discovering and explaining data characteristics and relationships based on existing data.",
          "options": [
            "Prescriptive analytics",
            "Predictive analytics",
            "Real-time analytics",
            "Explanatory analytics"
          ],
          "answer": 3,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 178,
          "question": "Type of data analytics that focuses on predicting future data outcomes with a high degree of accuracy.",
          "options": [
            "Predictive analytics",
            "Descriptive analytics",
            "Explanatory analytics",
            "Diagnostic analytics"
          ],
          "answer": 0,
          "explanation": "Chapter 8 - Special Purpose Databases"
        },
        {
          "id": 179,
          "question": "Uncovers hidden trends, patterns, and relationships in vast datasets, forming computer models to explain findings and support decision-making.",
          "options": [
            "Data analytics",
            "Data mining",
            "Data warehousing",
            "Data governance"
          ],
          "answer": 1,
          "explanation": "Chapter 8 - Special Purpose Databases. It focuses on the discovery and explanation stages in knowledge acquisition."
        }
      ]
    }
  ],
  "oop": [
    {
      "id": "oop_finals",
      "term": "Finals",
      "title": "Finals Exam Reviewer",
      "description": "Modules 10–14: Code Reuse and Class Hierarchy, Interfaces, Abstract Class and Interface, Polymorphism, and Modularity. Multiple choice + output tracing.",
      "timeLimit": 90,
      "questions": [
        {
          "question": "By allowing information of a superclass to be taken on by subclasses, the information is said to be:",
          "options": [
            "Duplicated in every object",
            "Hidden from the subclass",
            "Deleted from the superclass",
            "Reused at the subclass level"
          ],
          "answer": 3,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 1
        },
        {
          "question": "Which statement describes changes to software specification?",
          "options": [
            "Changes affect only the user interface",
            "Changes are only allowed before coding",
            "Changes to software specification are inevitable",
            "Changes to software specification never happen"
          ],
          "answer": 2,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 2
        },
        {
          "question": "Which of the following is one of the situations discussed for changes in a class hierarchy?",
          "options": [
            "Change in the operating system for some subclasses",
            "Change in property definition for some subclasses",
            "Change in the programming language for all subclasses",
            "Change in the compiler used by the superclass"
          ],
          "answer": 1,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. The three situations: change for all subclasses, change for some subclasses, and adding/deleting a class.",
          "id": 3
        },
        {
          "question": "Without inheritance, a change to an attribute shared by several classes must be made:",
          "options": [
            "Individually in every class, which may lead to inconsistency",
            "Automatically by the compiler for every class that uses it",
            "Only in main(), since attributes are defined there for all classes",
            "Only once, in the superclass, and it propagates to every subclass"
          ],
          "answer": 0,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 4
        },
        {
          "question": "With inheritance, a change to an attribute defined in the superclass is:",
          "options": [
            "Made in the last subclass and passed up to the superclass",
            "Copied by hand into each subclass of the hierarchy",
            "Limited to the superclass, and it propagates to the subclasses",
            "Made in main() and passed to every class"
          ],
          "answer": 2,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 5
        },
        {
          "question": "Defining a property once in the superclass and letting subclasses inherit it results in:",
          "options": [
            "Uniform and consistent property definitions and minimal redundancy",
            "Different property definitions and more redundancy in each subclass",
            "Inconsistent definitions that must be repeated at the subclass level",
            "Harder maintenance, since every subclass must be changed separately"
          ],
          "answer": 0,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 6
        },
        {
          "question": "A redefining method has the same method name and parameter definition as the redefined method, but:",
          "options": [
            "It cannot return a value",
            "It must have a different name",
            "It must have more parameters",
            "Its implementation may differ"
          ],
          "answer": 3,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 7
        },
        {
          "question": "When adding a new class into an existing class hierarchy, it is always recommended that the new class be created as a:",
          "options": [
            "Copy of an existing class",
            "Subclass in the class hierarchy",
            "Superclass of all existing classes",
            "Separate program"
          ],
          "answer": 1,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 8
        },
        {
          "question": "Subclassing is a desired design practice in object-oriented software engineering because:",
          "options": [
            "It has minimal impact on software maintenance",
            "It makes every attribute public",
            "It prevents code reuse",
            "It removes the need for constructors in subclasses"
          ],
          "answer": 0,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. Subclassing is specialization.",
          "id": 9
        },
        {
          "question": "Deleting subclasses that are NOT superclasses to other classes:",
          "options": [
            "Requires rewriting the superclass",
            "Breaks every other class in the class hierarchy",
            "Is not allowed in Java",
            "Has a minimal impact on software maintenance"
          ],
          "answer": 3,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 10
        },
        {
          "question": "What is code reuse in a class hierarchy?",
          "options": [
            "Every subclass rewrites all of the methods of its superclass again",
            "Methods are called again and again inside a loop until it ends",
            "Subclasses use members already defined in a superclass",
            "Objects copy all of their data into brand new objects when created"
          ],
          "answer": 2,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 11
        },
        {
          "question": "What is a superclass?",
          "options": [
            "A class that contains only static methods",
            "A general class whose members are inherited by subclasses",
            "A class that inherits all members from a more general class",
            "A class that cannot have any subclasses at all"
          ],
          "answer": 1,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 12
        },
        {
          "question": "What is a subclass?",
          "options": [
            "A class with no attributes or methods",
            "A specialized class that inherits from another class",
            "A general class that many other classes inherit from",
            "A class that cannot inherit from any class"
          ],
          "answer": 1,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 13
        },
        {
          "question": "What does it mean to redefine (override) a method?",
          "options": [
            "A method is deleted from the superclass",
            "A class defines two methods with the same name but different parameters",
            "A subclass gives a same-signature method its own body",
            "A method is copied into every subclass unchanged"
          ],
          "answer": 2,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 14
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Redefining getPay()): what does this program print?",
          "code": "class Person {\n   private String name;\n   Person(String aName) { name = aName; }\n   public String getName() { return name; }\n}\nclass Employee extends Person {\n   private int basicSalary;\n   Employee(String aName, int aBasicSalary) {\n      super(aName);\n      basicSalary = aBasicSalary;\n   }\n   public int getPay() { return basicSalary; }\n   public static void main(String argv[]) {\n      Employee[] staff = { new Manager(\"Ana\", 9000, 2000),\n                           new Secretary(\"Ben\", 2500),\n                           new Clerk(\"Carla\", 1200) };\n      for (int i = 0; i < staff.length; i++)\n         System.out.println(staff[i].getName() + \" has a pay of \" + staff[i].getPay());\n   }\n}\nclass Manager extends Employee {\n   private int allowance;\n   Manager(String aName, int aBasicSalary, int aAllowance) {\n      super(aName, aBasicSalary);\n      allowance = aAllowance;\n   }\n   public int getPay() { return super.getPay() + allowance; }\n}\nclass Secretary extends Employee {\n   Secretary(String aName, int aBasicSalary) { super(aName, aBasicSalary); }\n}\nclass Clerk extends Employee {\n   Clerk(String aName, int aBasicSalary) { super(aName, aBasicSalary); }\n}",
          "answer": "Ana has a pay of 11000\nBen has a pay of 2500\nCarla has a pay of 1200",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. Manager redefines getPay() (same name and parameters), so its version adds the allowance; Secretary and Clerk inherit Employee's getPay().",
          "id": 15
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Constructor chain with super()): what does this program print?",
          "code": "class Person {\n   Person() { System.out.println(\"Person created\"); }\n}\nclass Employee extends Person {\n   Employee() {\n      super();\n      System.out.println(\"Employee created\");\n   }\n}\npublic class Technician extends Employee {\n   Technician() {\n      super();\n      System.out.println(\"Technician created\");\n   }\n   public static void main(String argv[]) {\n      Technician t = new Technician();\n   }\n}",
          "answer": "Person created\nEmployee created\nTechnician created",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. super() runs the parent constructor first, so the messages print from the top of the hierarchy down.",
          "id": 16
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Adding Triangle to the hierarchy): what does this program print?",
          "code": "class Shape {\n   private String name;\n   Shape(String aName) { name = aName; }\n   public String getName() { return name; }\n   public float calculateArea() { return 0.0f; }\n   public static void main(String argv[]) {\n      Shape shapeArray[] = { new Square(\"Square S\"),\n                             new Triangle(\"Triangle T\"),\n                             new Shape(\"Shape X\") };\n      for (int i = 0; i < shapeArray.length; i++)\n         System.out.println(shapeArray[i].getName() + \": \" + shapeArray[i].calculateArea());\n   }\n}\nclass Square extends Shape {\n   private int side;\n   Square(String aName) { super(aName); side = 3; }\n   public float calculateArea() {\n      int area;\n      area = side * side;\n      return area;\n   }\n}\nclass Triangle extends Shape {\n   private int base, height;\n   Triangle(String aName) { super(aName); base = 4; height = 5; }\n   public float calculateArea() { return 0.5f * base * height; }\n}",
          "answer": "Square S: 9.0\nTriangle T: 10.0\nShape X: 0.0",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. calculateArea() returns a float, so the int area 9 prints as 9.0. Triangle was added as a subclass, so Shape and Square did not change.",
          "id": 17
        },
        {
          "question": "The capability to inherit from more than one class is called:",
          "options": [
            "Single inheritance",
            "Encapsulation",
            "Polymorphism",
            "Multiple inheritance"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 18
        },
        {
          "question": "Which of the following languages allows a subclass to inherit from more than one parent class?",
          "options": [
            "C++",
            "Neither C++ nor Java",
            "Java",
            "Both C++ and Java"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 19
        },
        {
          "question": "Why is multiple inheritance prohibited in Java?",
          "options": [
            "Java does not support classes with parents, so only interfaces can be inherited by a subclass",
            "Interfaces are slower than classes, so Java limits each class to one parent",
            "Parent classes may have identical names, and super() would be unclear with multiple parents",
            "Constructors are not allowed in Java subclasses, so super() cannot be called"
          ],
          "answer": 2,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 20
        },
        {
          "question": "A class inheriting from a superclass that has inherited from another superclass represents:",
          "options": [
            "Multiple inheritance through an interface",
            "Single inheritance with multiple generations",
            "An anonymous inner class with two parents",
            "Multiple inheritance with a single generation"
          ],
          "answer": 1,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 21
        },
        {
          "question": "Java's alternative to multiple inheritance is the:",
          "options": [
            "Interface",
            "Package",
            "Abstract method",
            "Static variable"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 22
        },
        {
          "question": "In an interface, all methods (if any) are implicitly:",
          "options": [
            "public and static",
            "private and static",
            "protected and final",
            "public and abstract"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 23
        },
        {
          "question": "In an interface, all data items (if any) are implicitly:",
          "options": [
            "protected and static",
            "public and abstract",
            "public, static, and final",
            "private and abstract"
          ],
          "answer": 2,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 24
        },
        {
          "question": "An interface is a description of:",
          "options": [
            "The private data of a class",
            "What a class does, but not how it is done",
            "The constructor of a class",
            "How a class does something, but not what it does"
          ],
          "answer": 1,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 25
        },
        {
          "question": "Which keyword is placed in a class header to use an interface?",
          "options": [
            "implements",
            "super",
            "interface",
            "extends"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 26
        },
        {
          "question": "Whereas extends lets a subclass use nonprivate, nonoverridden members of its parent, implements requires the class to:",
          "options": [
            "Inherit the parent's private data and methods",
            "Become an interface",
            "Call super() twice",
            "Implement its own version of each method"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 27
        },
        {
          "question": "The interface construct in Java is used with single inheritance to provide:",
          "options": [
            "Some form of static binding",
            "Some form of operation overloading",
            "Some form of information hiding",
            "Some form of multiple inheritance"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 28
        },
        {
          "question": "When a class implements an interface but does not implement all of its methods:",
          "options": [
            "The class must be declared abstract",
            "The interface methods are ignored when the program runs",
            "The compiler adds empty bodies for the missing methods automatically",
            "The class becomes final and can no longer be extended"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 29
        },
        {
          "question": "A class Dog2 extends Dog and implements Worker. Which statement is true?",
          "options": [
            "A Dog2 is a Dog, but it is not a Worker",
            "A Dog2 is neither a Dog nor a Worker",
            "A Dog2 \"is a\" Dog and \"is a\" Worker",
            "A Dog2 is a Worker, but it is not a Dog"
          ],
          "answer": 2,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface. A class that implements an interface represents a situation similar to inheritance.",
          "id": 30
        },
        {
          "question": "What is an interface in Java?",
          "options": [
            "A named collection of related classes",
            "A construct of abstract methods that a class must implement",
            "A class from which objects can be instantiated",
            "A class intended to be extended, not directly instantiated"
          ],
          "answer": 1,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 31
        },
        {
          "question": "What is multiple inheritance?",
          "options": [
            "Inheriting from more than one class",
            "Having many objects of one class",
            "Inheriting from one class only",
            "Having several methods with one name"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 32
        },
        {
          "question": "Which keyword is used for a class to inherit from a superclass?",
          "options": [
            "inherits",
            "super",
            "implements",
            "extends"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 33
        },
        {
          "question": "How many interfaces can a Java class implement?",
          "options": [
            "Only one interface",
            "None, if it extends a class",
            "Any number of interfaces",
            "At most two interfaces"
          ],
          "answer": 2,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 34
        },
        {
          "question": "What is the output of this program?",
          "code": "interface Worker {\n   void work();\n}\nclass Dog {\n   public void speak() { System.out.println(\"Woof!\"); }\n}\nclass WorkingDog extends Dog implements Worker {\n   public void work() {\n      speak();\n      System.out.println(\"I am a dog who works\");\n   }\n}\npublic class DemoWorkingDog {\n   public static void main(String[] args) {\n      WorkingDog aSheepHerder = new WorkingDog();\n      aSheepHerder.speak();\n      aSheepHerder.work();\n   }\n}",
          "options": [
            "I am a dog who works / Woof!",
            "Woof! / Woof! / I am a dog who works",
            "The program does not compile, because Dog does not implement Worker",
            "Woof! / I am a dog who works"
          ],
          "answer": 1,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface. Output: Woof! / Woof! / I am a dog who works. work() calls the inherited speak() first, so Woof! appears twice.",
          "id": 35
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (One interface, many classes): what does this program print?",
          "code": "interface Turner {\n   void turn();\n}\nclass Leaf implements Turner {\n   public void turn() { System.out.println(\"Changing colors\"); }\n}\nclass Page implements Turner {\n   public void turn() { System.out.println(\"Going to the next page\"); }\n}\nclass Pancake implements Turner {\n   public void turn() { System.out.println(\"Flipping\"); }\n}\npublic class TurnDemo {\n   public static void main(String[] args) {\n      Turner[] things = { new Pancake(), new Leaf(), new Page(), new Pancake() };\n      for (int i = 1; i < things.length; i++)\n         things[i].turn();\n   }\n}",
          "answer": "Changing colors\nGoing to the next page\nFlipping",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface. The loop starts at index 1, so the first Pancake is skipped. Each class writes its own turn().",
          "id": 36
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (extends and implements): what does this program print?",
          "code": "interface Manage {\n   void authorize();\n}\nclass SalesPerson {\n   public void sell() { System.out.println(\"Selling products\"); }\n}\npublic class SalesManager extends SalesPerson implements Manage {\n   public void authorize() {\n      System.out.println(\"Authorizing discount\");\n      sell();\n   }\n   public static void main(String[] args) {\n      SalesManager boss = new SalesManager();\n      boss.sell();\n      boss.authorize();\n   }\n}",
          "answer": "Selling products\nAuthorizing discount\nSelling products",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface. sell() is inherited through extends; authorize() had to be written because of implements Manage.",
          "id": 37
        },
        {
          "question": "What happens when code tries to create an object of an abstract class with new?",
          "options": [
            "The program runs but throws an error later",
            "The object is created with default values",
            "The object is created as an interface instead",
            "The program does not compile"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface. No objects of an abstract class can exist.",
          "id": 38
        },
        {
          "question": "You create an abstract class such as Animal only so that you can:",
          "options": [
            "Instantiate it",
            "Use it as a package",
            "Extend it",
            "Hide it from subclasses"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 39
        },
        {
          "question": "The @Override annotation for a method such as speak() is:",
          "options": [
            "Not necessary, but it provides error checking and documentation",
            "Used only in interfaces, never in subclasses",
            "Used to create a new object of the parent class",
            "Required, or the program will not compile at all without it"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 40
        },
        {
          "question": "Using the same method name to indicate different implementations is called:",
          "options": [
            "Static binding",
            "Polymorphism",
            "Encapsulation",
            "Bundling"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 41
        },
        {
          "question": "Data attributes declared in an interface construct are always:",
          "options": [
            "static and final",
            "protected and static",
            "public and non-final",
            "private and abstract"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface. Static because there is only one copy; final because they are not modifiable.",
          "id": 42
        },
        {
          "question": "Names for values with a specific meaning that are declared in an interface, such as int RED = 1, are called:",
          "options": [
            "Literals",
            "Constants",
            "Parameters",
            "Variables"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 43
        },
        {
          "question": "All methods in an interface are:",
          "options": [
            "Private methods hidden from every class that uses the interface",
            "Static methods that the implementing class may not override",
            "Abstract methods that any class using the interface must implement",
            "Constructors that run when a class implements the interface"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 44
        },
        {
          "question": "Methods in an interface may NOT be static because:",
          "options": [
            "Interfaces cannot contain methods, only constant data attributes",
            "Static methods must have constructors, which interfaces do not have",
            "Static methods are always private, so no class could call them",
            "Static methods, being class specific, are never abstract"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 45
        },
        {
          "question": "Abstract classes and interfaces are similar in that:",
          "options": [
            "A class can extend any number of either of them",
            "You cannot instantiate concrete objects from either one",
            "Both must have constructors that create objects",
            "Both can contain only private methods and private data fields"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 46
        },
        {
          "question": "Abstract classes differ from interfaces because:",
          "options": [
            "Interfaces can contain constructors and nonabstract methods, but abstract classes cannot",
            "Interfaces can be instantiated with new, but abstract classes can never be instantiated",
            "Abstract classes cannot have variables, but interfaces can have any kind of variable",
            "Abstract classes can contain nonabstract methods, but all interface methods must be abstract"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 47
        },
        {
          "question": "A class can inherit from how many abstract superclasses, and implement how many interfaces?",
          "options": [
            "Only one of each",
            "None of either",
            "Only one abstract superclass, but any number of interfaces",
            "Any number of abstract superclasses, but only one interface"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 48
        },
        {
          "question": "Which is true about constructors in abstract classes and interfaces?",
          "options": [
            "An interface has none; an abstract class's runs when a child object is created",
            "Both have constructors that are called directly with the new operator",
            "Neither can have a constructor, so subclasses must define all of them",
            "An abstract class has no constructor; an interface's constructor is invoked when a class implements it"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 49
        },
        {
          "question": "Which is true about variables in interfaces and abstract classes?",
          "options": [
            "Abstract class variables must be public, static, and final; interfaces have no restrictions on variables",
            "Interface variables must be public, static, and final; abstract classes have no restrictions on variables",
            "Neither may contain any variables at all",
            "Both may only contain private variables"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 50
        },
        {
          "question": "An interface is generally used for achieving:",
          "options": [
            "Multiple inheritance in Java",
            "Information hiding in packages",
            "Faster compilation",
            "Static binding"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 51
        },
        {
          "question": "Given public abstract class LandVehicle { ... }, which statement is invalid?",
          "options": [
            "class Car extends LandVehicle { }",
            "LandVehicle l;",
            "LandVehicle[] list = new LandVehicle[3];",
            "LandVehicle l = new LandVehicle();"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 52
        },
        {
          "question": "Interface data fields must not be private because:",
          "options": [
            "Private data cannot be static, and every field of an interface must be a static field",
            "Private data uses too much memory, since every object would store its own copy of it",
            "Interface methods cannot contain method bodies, so there is no way to retrieve private data",
            "Interfaces are always final, so private fields would be hidden from the interface itself"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 53
        },
        {
          "question": "The purpose of creating an interface containing constants is to:",
          "options": [
            "Create objects of the interface so that each object holds its own separate copy of the values",
            "Provide a set of data that a number of classes can use without having to redeclare the values",
            "Hide the data from every class so that the values can never be read by any program",
            "Replace all the classes in a program with one interface that contains every method"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 54
        },
        {
          "question": "A class that has no name and is defined inside another class is a(n):",
          "options": [
            "Interface",
            "Abstract class",
            "Package",
            "Anonymous inner class"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 55
        },
        {
          "question": "When defining an anonymous inner class, you:",
          "options": [
            "Use the new operator and do not use the keywords extends or implements",
            "Must give the class a name and save it in its own separate .java file",
            "Use the keyword implements, and declare the class outside the main class",
            "Must use the keyword extends, and give the class a name before using it"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 56
        },
        {
          "question": "An anonymous inner class must either implement an interface or extend another class, and it must:",
          "options": [
            "Have at least two constructors that call the superclass default constructor",
            "Be declared static so that it can be instantiated more than once in the program",
            "Override all the abstract methods in the interface or superclass",
            "Be declared in a separate package from the class in which it is defined"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 57
        },
        {
          "question": "A variable whose value is assigned only once, which an anonymous inner class may access, is called:",
          "options": [
            "Protected and static",
            "Static",
            "Abstract",
            "Effectively final"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 58
        },
        {
          "question": "What is an abstract class?",
          "options": [
            "A class containing only static methods and fields",
            "A class that cannot have constructors of its own",
            "A class intended to be extended, not directly instantiated",
            "A class with no inherited properties or methods"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 59
        },
        {
          "question": "What is a concrete class?",
          "options": [
            "A class from which objects can be instantiated",
            "A class that declares only abstract methods",
            "A class that can only be extended",
            "A class that exists only as a diagram"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 60
        },
        {
          "question": "What is an abstract method?",
          "options": [
            "A static method that belongs to the class and not the object",
            "A method declared without a body that subclasses must implement",
            "A method that can only be called once by the main method",
            "A method that has a body but no return type or parameters"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 61
        },
        {
          "question": "Which keyword declares a class or method as abstract?",
          "options": [
            "interface",
            "static",
            "abstract",
            "final"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 62
        },
        {
          "question": "What is an anonymous inner class?",
          "options": [
            "A public class that is saved alone in its own file",
            "A class with no name that is defined inside another class",
            "A class with a fixed name that cannot ever be changed",
            "A class that has no methods and no attributes at all"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 63
        },
        {
          "question": "What is the output of this program?",
          "code": "interface Colourable {\n   int RED = 1;\n   int GREEN = 2;\n   int BLUE = 3;\n}\npublic class ColourDemo implements Colourable {\n   public static void main(String[] args) {\n      System.out.println(GREEN + BLUE);\n   }\n}",
          "options": [
            "GREENBLUE",
            "The program does not compile, because RED, GREEN, and BLUE are not declared static",
            "23",
            "5"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface. Output: 5. Interface data attributes are implicitly public, static, and final.",
          "id": 64
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Constants in an interface): what does this program print?",
          "code": "interface Colourable {\n   int RED = 1;\n   int GREEN = 2;\n   int BLUE = 3;\n}\npublic class ColourTest implements Colourable {\n   public static void main(String args[]) {\n      System.out.println(RED + GREEN * BLUE);\n      System.out.println(\"Colour \" + RED + GREEN);\n      System.out.println(Colourable.BLUE);\n   }\n}",
          "answer": "7\nColour 12\n3",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface. Interface data are public, static and final constants. * runs before +, and once a String comes first, + joins text (\"Colour \" + 1 + 2 = Colour 12).",
          "id": 65
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Subclass of a class that implements an interface): what does this program print?",
          "code": "interface I {\n   void x();\n}\nclass A implements I {\n   public void x() { System.out.println(\"in A.x\"); }\n}\nclass B extends A {\n   void z() {\n      x();\n      System.out.println(\"in B.z\");\n   }\n   public static void main(String args[]) {\n      B bb = new B();\n      bb.z();\n      I ii = new B();\n      ii.x();\n   }\n}",
          "answer": "in A.x\nin B.z\nin A.x",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface. B inherits x() from A, which implements I, so a B object can also be used as an I.",
          "id": 66
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Abstract class with a concrete method): what does this program print?",
          "code": "abstract class Animal {\n   private String name;\n   Animal(String aName) { name = aName; }\n   public abstract void speak();\n   public void introduce() {\n      System.out.println(\"I am \" + name);\n      speak();\n   }\n}\nclass Dog extends Animal {\n   Dog(String aName) { super(aName); }\n   public void speak() { System.out.println(\"Woof!\"); }\n}\nclass Cow extends Animal {\n   Cow(String aName) { super(aName); }\n   public void speak() { System.out.println(\"Moo!\"); }\n}\npublic class AbstractDemo {\n   public static void main(String[] args) {\n      Animal a = new Dog(\"Murphy\");\n      a.introduce();\n      a = new Cow(\"Bessie\");\n      a.speak();\n   }\n}",
          "answer": "I am Murphy\nWoof!\nMoo!",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface. An abstract class cannot be instantiated, but it can have constructors and concrete methods; each concrete subclass must implement speak().",
          "id": 67
        },
        {
          "question": "The binding of variables to operations at compile time is known as:",
          "options": [
            "Static binding",
            "Run-time binding",
            "Dynamic binding",
            "Late binding"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 68
        },
        {
          "question": "The binding of variables to operations at run time is known as:",
          "options": [
            "Compile-time binding",
            "Static binding",
            "Dynamic binding",
            "Early binding"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 69
        },
        {
          "question": "Which statement about static and dynamic binding is correct?",
          "options": [
            "Static binding is limited and may lead to maintenance difficulty; dynamic binding provides design flexibility",
            "Only procedural languages use dynamic binding",
            "Both are identical",
            "Static binding provides design flexibility; dynamic binding is limited and causes maintenance difficulty"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 70
        },
        {
          "question": "With static binding, adding a new kind of object to a program usually requires changes in:",
          "options": [
            "Only the new class, with no other changes",
            "No places, since the compiler adapts automatically",
            "Only the main() method of the program",
            "Multiple places in the code, which is error prone"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 71
        },
        {
          "question": "With dynamic binding, the method that runs for an overridden call is selected based on:",
          "options": [
            "The order the classes were written in the file",
            "The class of the object referenced at run time",
            "The name of the variable that holds the reference",
            "The type of the reference variable at compile time"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 72
        },
        {
          "question": "SalariedEmployee is a subclass of Employee. Which statement is true?",
          "options": [
            "Every SalariedEmployee is an Employee, but not every Employee is a SalariedEmployee",
            "Employee and SalariedEmployee are unrelated types that share no members",
            "Every Employee is a SalariedEmployee, but not every SalariedEmployee is an Employee",
            "No SalariedEmployee can ever be treated or stored as an Employee reference"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 73
        },
        {
          "question": "A reference is not an object, but it:",
          "options": [
            "Is always abstract",
            "Is created with the keyword new",
            "Contains all the object's methods",
            "Points to a memory address"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 74
        },
        {
          "question": "Assigning a variable or constant of one type to a variable of another type is called:",
          "options": [
            "Static binding, early binding, or fixed binding",
            "Promotion, implicit conversion, or upcasting",
            "Encapsulation, bundling, or information hiding",
            "Overloading, overriding, or redefining"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 75
        },
        {
          "question": "Using a reference polymorphically allows you to:",
          "options": [
            "Make all methods static so that they are bound when the program is compiled",
            "Create objects of an abstract class directly by using the keyword new",
            "Extend a base class and use extended objects when a base class type is expected",
            "Avoid writing subclasses, since one reference can hold every method"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 76
        },
        {
          "question": "In Java, all instance method calls are virtual method calls by default. This means:",
          "options": [
            "The method used is determined when the program runs",
            "The method is chosen by the compiler before the program runs",
            "Methods must be static",
            "Methods cannot be overridden"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 77
        },
        {
          "question": "An application's ability to select the correct subclass method depending on the argument type is known as:",
          "options": [
            "Information hiding",
            "Operation overloading",
            "Static method binding",
            "Dynamic method binding"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism. It is also called late method binding.",
          "id": 78
        },
        {
          "question": "In Java, which methods use dynamic binding and which use static binding?",
          "options": [
            "All methods use static binding",
            "Instance methods use dynamic binding; class methods use static binding",
            "Class methods use dynamic binding; instance methods use static binding",
            "All methods use dynamic binding"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 79
        },
        {
          "question": "Comparing the two kinds of binding:",
          "options": [
            "Dynamic binding is not supported in Java",
            "Static binding makes programs flexible; dynamic binding operates more quickly",
            "Dynamic binding makes programs flexible; static binding operates more quickly",
            "Both are equally fast and flexible"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 80
        },
        {
          "question": "Dynamic method binding is most useful when you want a method whose parameters:",
          "options": [
            "Are always strings, so that the method can print their names",
            "Cannot be objects, because objects are bound at compile time",
            "Might be one of several types, such as any Animal descendant",
            "Are always primitive types, such as int or double values"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 81
        },
        {
          "question": "When you create an array of objects in Java, you are actually creating:",
          "options": [
            "The objects themselves, already constructed",
            "Space for references to objects",
            "A package of objects",
            "A new class"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 82
        },
        {
          "question": "Animal[] animalRef = new Animal[3]; Given that Animal is abstract, this statement:",
          "options": [
            "Reserves memory for three Animal references without instantiating any Animal",
            "Does not compile, because an array cannot be declared using an abstract type",
            "Creates three Animal objects, one for each element of the animalRef array",
            "Creates one Dog, one Cow, and one Snake object to fill the three array elements"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 83
        },
        {
          "question": "An array of superclass references can hold subclass references:",
          "options": [
            "Only if the superclass is abstract, never concrete",
            "Only if the superclass is concrete, never abstract",
            "Never, since every array element must be one type",
            "Whether the superclass is abstract or concrete"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 84
        },
        {
          "question": "The ability to use the same name for two or more methods in a class is known as:",
          "options": [
            "Polymorphism",
            "Static binding",
            "Operation overloading",
            "Encapsulation"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 85
        },
        {
          "question": "Two methods have the same method signature if:",
          "options": [
            "They have the same access specifier and are both declared static in their classes",
            "Their names are the same and the number and type of formal parameters are the same",
            "They are declared in the same package and have the same number of statements inside",
            "Their return types are the same, even if their names and parameters are different"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 86
        },
        {
          "question": "Given constructors A(), A(int x), A(int x, int y), and A(String x), which is called by new A(\"hello\")?",
          "options": [
            "A(String x)",
            "A(int x, int y)",
            "A(int x)",
            "A()"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 87
        },
        {
          "question": "Declaring two public void a1() {} methods in the same class is:",
          "options": [
            "Valid overriding, because the second replaces the first",
            "Valid overloading, because the two methods are separate",
            "Valid only if one of the two methods is declared static",
            "Invalid, reported as a duplicate method declaration"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 88
        },
        {
          "question": "Can the return type alone distinguish overloaded methods from one another?",
          "options": [
            "Only for static methods declared in the same class",
            "Yes, the return type alone always distinguishes them from each other",
            "Only for methods that are declared in an interface",
            "No, the return type does not distinguish overloaded methods"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 89
        },
        {
          "question": "Declaring methods of the same signature in different, unrelated classes is:",
          "options": [
            "Allowed only for constructors",
            "Valid in object-oriented programming",
            "Allowed only if the classes are abstract",
            "Invalid"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 90
        },
        {
          "question": "For a subclass method to redefine (override) a superclass method:",
          "options": [
            "The method signatures of the two methods must be the same",
            "The methods must have different names",
            "The subclass method must have more parameters than the other",
            "The superclass method must be private"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 91
        },
        {
          "question": "The ability of different objects to perform the appropriate method in response to the same message is known as:",
          "options": [
            "Operation overloading",
            "Modularity",
            "Polymorphism",
            "Bundling"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 92
        },
        {
          "question": "In polymorphism, the sender of a message (such as main()):",
          "options": [
            "Must know the exact class of the receiver before it can send any message",
            "Must use a switch statement to choose the method for each type of object",
            "Knows the object can respond, but not its class or how it will respond",
            "Decides which method the receiving object uses to respond to the message"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 93
        },
        {
          "question": "Polymorphism is facilitated by:",
          "options": [
            "Private variables and the use of switch statements to select the correct method",
            "Dynamic binding and the ability to use the same name for similar methods across class definitions",
            "Static binding and the requirement for unique routine names in each and every class definition",
            "Packages and import statements that bring similar classes into the same program"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 94
        },
        {
          "question": "Polymorphism encourages programmers to specify:",
          "options": [
            "Only the data, not the methods",
            "How it should happen rather than what should happen",
            "Only the user interface",
            "What should happen rather than how it should happen"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism. This promotes incremental program development.",
          "id": 95
        },
        {
          "question": "What is polymorphism?",
          "options": [
            "The ability of different objects to respond to the same message in their own way",
            "The grouping of related classes and interfaces into one named package",
            "The ability of one class to inherit directly from several parent classes at once",
            "The hiding of an object's internal data and methods from the other objects"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 96
        },
        {
          "question": "What is static binding?",
          "options": [
            "Binding of two classes into one package",
            "Binding of a method call to its code at run time",
            "Binding of data and methods into an object",
            "Binding of a method call to its code at compile time"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 97
        },
        {
          "question": "What is dynamic binding?",
          "options": [
            "Binding of a method call to its code at run time",
            "Binding of a method call to its code at compile time",
            "Binding of a variable to a constant",
            "Binding of attributes to a static class"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 98
        },
        {
          "question": "What is operation (method) overloading?",
          "options": [
            "Using a static method from another class",
            "Using the same method signature in a subclass",
            "Same method name, different parameter lists",
            "Using a method that has no body"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 99
        },
        {
          "question": "What is a method signature?",
          "options": [
            "The method's return type together with its access specifier keyword",
            "The method name together with the number and types of its parameters",
            "The name of the class that owns the method and its package",
            "The comment written above the method to describe what it does"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 100
        },
        {
          "question": "What is upcasting?",
          "options": [
            "Changing an int into a String",
            "Treating a subclass object as its superclass type",
            "Treating a superclass object as a subclass object",
            "Making a private method public"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 101
        },
        {
          "question": "What is the output of this program?",
          "code": "abstract class Animal {\n   public abstract void speak();\n}\nclass Dog extends Animal {\n   public void speak() { System.out.println(\"Woof!\"); }\n}\nclass Cow extends Animal {\n   public void speak() { System.out.println(\"Moo!\"); }\n}\nclass Snake extends Animal {\n   public void speak() { System.out.println(\"Ssss!\"); }\n}\npublic class AnimalArrayDemo {\n   public static void main(String[] args) {\n      Animal[] animalRef = new Animal[3];\n      animalRef[0] = new Dog();\n      animalRef[1] = new Cow();\n      animalRef[2] = new Snake();\n      for (int x = 0; x < 3; ++x)\n         animalRef[x].speak();\n   }\n}",
          "options": [
            "Woof! / Woof! / Woof!",
            "Ssss! / Moo! / Woof!",
            "Woof! / Moo! / Ssss!",
            "Nothing, because Animal is abstract"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism. Output: Woof! / Moo! / Ssss!. Each reference chooses the speak() method of the object it refers to (dynamic method binding).",
          "id": 102
        },
        {
          "question": "What is the output of this program?",
          "code": "class C {\n   C() {}\n   public void c1() { System.out.println(\"C.c1()\"); }\n}\nclass D extends C {\n   D() {}\n   public void c1() {\n      super.c1();\n      System.out.println(\"D.c1()\");\n   }\n   public static void main(String args[]) {\n      D thisD = new D();\n      thisD.c1();\n   }\n}",
          "options": [
            "C.c1() / D.c1()",
            "D.c1() / C.c1()",
            "D.c1()",
            "C.c1()"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism. Output: C.c1() / D.c1(). D's c1() overrides C's c1(); super.c1() runs the superclass version first.",
          "id": 103
        },
        {
          "question": "What is the output of this program?",
          "code": "class C {\n   C() {}\n   public void c1() { System.out.println(\"C.c1()\"); }\n}\nclass D extends C {\n   D() {}\n   public void c1(int i) {\n      super.c1();\n      System.out.println(\"D.c1()\");\n   }\n   public static void main(String args[]) {\n      D thisD = new D();\n      thisD.c1();\n      thisD.c1(3);\n   }\n}",
          "options": [
            "D.c1() / C.c1() / D.c1()",
            "The program does not compile",
            "C.c1() / D.c1()",
            "C.c1() / C.c1() / D.c1()"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism. Output: C.c1() / C.c1() / D.c1(). c1(int i) has a different signature, so it does not override c1(); both methods exist.",
          "id": 104
        },
        {
          "question": "Which constructor message is printed?",
          "code": "class A {\n   A() { System.out.println(\"A()\"); }\n   A(int x) { System.out.println(\"A(int x)\"); }\n   A(int x, int y) { System.out.println(\"A(int x, int y)\"); }\n   A(String x) { System.out.println(\"A(String x)\"); }\n   public static void main(String args[]) {\n      A thisA = new A(4, 5);\n   }\n}",
          "options": [
            "A(int x)",
            "A(String x)",
            "A(int x, int y)",
            "A()"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism. Output: A(int x, int y). Overloaded methods are distinguished by the number and type of parameters.",
          "id": 105
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Operation overloading): what does this program print?",
          "code": "public class OverloadDemo {\n   static void display(int x) { System.out.println(\"int \" + x); }\n   static void display(double x) { System.out.println(\"double \" + x); }\n   static void display(String x) { System.out.println(\"String \" + x); }\n   static void display(int x, int y) { System.out.println(\"sum \" + (x + y)); }\n   public static void main(String[] args) {\n      display(5);\n      display(2.5);\n      display(\"5\");\n      display(5, 2);\n      display(10 / 4);\n   }\n}",
          "answer": "int 5\ndouble 2.5\nString 5\nsum 7\nint 2",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 13 - Polymorphism. The method is chosen by the parameters. 10 / 4 is integer division (2), so display(int) runs.",
          "id": 106
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Dynamic binding): what does this program print?",
          "code": "class Parent {\n   void show() { System.out.println(\"Parent show\"); }\n   void greet() {\n      System.out.println(\"Hello from Parent\");\n      show();\n   }\n}\nclass Child extends Parent {\n   void show() { System.out.println(\"Child show\"); }\n}\npublic class BindingDemo {\n   public static void main(String[] args) {\n      Parent p = new Child();\n      p.greet();\n      p = new Parent();\n      p.show();\n   }\n}",
          "answer": "Hello from Parent\nChild show\nParent show",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 13 - Polymorphism. With dynamic binding the object's actual class decides which show() runs, even when it is called from inside Parent's greet().",
          "id": 107
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Overloaded constructors): what does this program print?",
          "code": "class A {\n   A() {\n      this(1);\n      System.out.println(\"A()\");\n   }\n   A(int x) { System.out.println(\"A(int x) \" + x); }\n   A(int x, int y) { System.out.println(\"A(int x, int y) \" + (x * y)); }\n   A(String x) { System.out.println(\"A(String x) \" + x); }\n   public static void main(String args[]) {\n      A first = new A();\n      A second = new A(4, 5);\n      A third = new A(\"4\");\n   }\n}",
          "answer": "A(int x) 1\nA()\nA(int x, int y) 20\nA(String x) 4",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 13 - Polymorphism. this(1) calls the A(int x) constructor first. Each new A(...) picks the constructor whose parameters match.",
          "id": 108
        },
        {
          "question": "Which is often viewed as the smallest program unit to be considered as a subprogram?",
          "options": [
            "A method",
            "An object",
            "A class",
            "A package"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 109
        },
        {
          "question": "Compared to a method, what is the next bigger unit under design?",
          "options": [
            "A statement",
            "A class definition",
            "A variable",
            "An attribute"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 110
        },
        {
          "question": "Properties that are specific to objects and apply to all objects from the same class are:",
          "options": [
            "Package properties",
            "Static properties",
            "Class properties",
            "Object properties"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 111
        },
        {
          "question": "If count is an object (instance) attribute incremented in the constructor, creating two objects results in:",
          "options": [
            "One shared count with the value 0",
            "Two separate counts, each equal to 1",
            "A compile error, since count must be static",
            "One shared count with the value 2"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 112
        },
        {
          "question": "Declaring an attribute as static allows it to be:",
          "options": [
            "Changed only by the class's constructor",
            "Copied separately into every object",
            "Hidden from every method of the class",
            "Shared among all instances of the class"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 113
        },
        {
          "question": "An attribute definition preceded with the keyword static is a(n):",
          "options": [
            "Abstract attribute",
            "Local variable",
            "Class attribute",
            "Object attribute"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 114
        },
        {
          "question": "Outside of the class definition, a static method is accessed by:",
          "options": [
            "Through the class name, as in ClassName.method()",
            "Creating an object first, as in obj.method() only",
            "Declaring it again in the other class",
            "Importing it as a separate package"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 115
        },
        {
          "question": "Ideally, objects reveal information on a:",
          "options": [
            "Public basis",
            "Need-to-know basis",
            "Random basis",
            "Package-wide basis"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 116
        },
        {
          "question": "Which access specifier makes entities hidden from code fragments external to the class?",
          "options": [
            "public",
            "protected",
            "friendly",
            "private"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 117
        },
        {
          "question": "Which access specifier makes entities fully visible from all other Java code?",
          "options": [
            "private",
            "protected",
            "public",
            "friendly"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 118
        },
        {
          "question": "Which access specifier makes entities accessible to code fragments of its immediate subclass?",
          "options": [
            "protected",
            "static",
            "private",
            "public"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 119
        },
        {
          "question": "For entities with no access specifier, this default visibility is assumed, giving access within the same package:",
          "options": [
            "friendly",
            "protected",
            "public",
            "private"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 120
        },
        {
          "question": "Private variables are used within the class definition, or accessed outside it through a:",
          "options": [
            "Private constructor",
            "Public accessor method",
            "Static import",
            "Protected package"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 121
        },
        {
          "question": "A named collection of classes is a:",
          "options": [
            "Constructor",
            "Method",
            "Interface",
            "Package"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 122
        },
        {
          "question": "Which package contains fundamental classes and is imported automatically into every program?",
          "options": [
            "javax.swing",
            "java.util",
            "java.lang",
            "com.course"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 123
        },
        {
          "question": "When you create professional classes for others to use, you usually provide them with the:",
          "options": [
            "Text files of your code",
            "Package declarations only",
            ".java source code files",
            "Compiled .class files"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 124
        },
        {
          "question": "A class that will be placed in a nondefault package for others to use must be:",
          "options": [
            "abstract",
            "public",
            "static",
            "private"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 125
        },
        {
          "question": "If a file contains a package declaration, it must be:",
          "options": [
            "The first statement in the file (excluding comments)",
            "Inside the class definition, before the first method",
            "After all of the import statements at the top of the file",
            "The last statement in the file, after the class definition"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 126
        },
        {
          "question": "Which statements are the only ones that appear outside class definitions in Java program files?",
          "options": [
            "Interfaces, abstract methods, and static variables",
            "Variable declarations, constructors, and methods",
            "The package statement, import statements, and comments",
            "Constructors, the main() method, and comments"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 127
        },
        {
          "question": "In the command javac -d . Animal.java, the -d option means:",
          "options": [
            "Download the package that Animal.java needs to compile",
            "Debug the program and display each error in detail",
            "Place the generated .class file in a folder (directory)",
            "Delete the Animal.java source file after it is compiled"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity. The dot means the package path is created within the current directory.",
          "id": 128
        },
        {
          "question": "The Java package-naming convention uses:",
          "options": [
            "Your Internet domain name in reverse order (e.g., com.course)",
            "Random numbers so that no two package names can ever conflict",
            "Your full name followed by the date the package was created",
            "The class name written in uppercase (e.g., ANIMAL.DOG)"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 129
        },
        {
          "question": "A class naming conflict is sometimes called a:",
          "options": [
            "Binding",
            "Package",
            "Overload",
            "Collision"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 130
        },
        {
          "question": "The bringing together of a set of attributes and methods into an object definition and hiding their implementational structure from the object's users is:",
          "options": [
            "Dynamic binding",
            "Encapsulation",
            "Polymorphism",
            "Inheritance"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 131
        },
        {
          "question": "Encapsulation enhances software maintainability by:",
          "options": [
            "Copying the same data into every object so that changes affect all objects",
            "Increasing cohesiveness through bundling and reducing coupling by hiding implementation details",
            "Increasing the coupling between components by making all data and methods public to other objects",
            "Removing methods from objects so that other objects use the data directly"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 132
        },
        {
          "question": "The act of associating a set of methods with a set of data as the only means of affecting the values of the data is:",
          "options": [
            "Bundling",
            "Upcasting",
            "Information hiding",
            "Overloading"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 133
        },
        {
          "question": "The hiding of internal representation of data and methods from the users of these data and methods is:",
          "options": [
            "Collision",
            "Promotion",
            "Bundling",
            "Information hiding"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity. It separates the what from the how of object definition.",
          "id": 134
        },
        {
          "question": "What is modularity?",
          "options": [
            "Combining all of the program's code into one long main method",
            "Hiding the data of an object from all users of that object",
            "Dividing a program into smaller units such as methods and classes",
            "Using one name for several methods that have different parameters"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 135
        },
        {
          "question": "What is a class (static) attribute?",
          "options": [
            "An attribute that can never be changed",
            "An attribute shared by all objects of the class",
            "An attribute that belongs to a package",
            "An attribute that each object has its own copy of"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 136
        },
        {
          "question": "What is an object (instance) attribute?",
          "options": [
            "An attribute shared by all objects of the class",
            "An attribute that belongs to the main method",
            "An attribute declared only in an interface",
            "An attribute each object has its own copy of"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 137
        },
        {
          "question": "What is a package in Java?",
          "options": [
            "A single compiled .class file",
            "An interface that holds constants",
            "A named collection of classes",
            "A method that groups other methods"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 138
        },
        {
          "question": "What is the output of this program (count is static)?",
          "code": "class SalesPerson {\n   String employeeId;\n   static int count = 0;\n   SalesPerson(String aEmployeeId) {\n      employeeId = aEmployeeId;\n      count = count + 1;\n   }\n   static int getCount() { return count; }\n   public static void main(String argv[]) {\n      SalesPerson s1 = new SalesPerson(\"12345S\");\n      SalesPerson s2 = new SalesPerson(\"33221K\");\n      System.out.println(getCount() + \" salespersons have been created\");\n   }\n}",
          "options": [
            "2 salespersons have been created",
            "0 salespersons have been created",
            "1 salespersons have been created",
            "The program does not compile"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity. Output: 2 salespersons have been created. A static count is one shared copy, so both constructors increment the same variable.",
          "id": 139
        },
        {
          "question": "What is the output of this program (count is NOT static)?",
          "code": "class SalesPerson {\n   String employeeId;\n   int count = 0;\n   SalesPerson(String aEmployeeId) {\n      employeeId = aEmployeeId;\n      count = count + 1;\n   }\n   int getCount() { return count; }\n   public static void main(String argv[]) {\n      SalesPerson s1 = new SalesPerson(\"12345S\");\n      SalesPerson s2 = new SalesPerson(\"33221K\");\n      System.out.println(s1.getCount() + \" salespersons have been created\");\n   }\n}",
          "options": [
            "1 salespersons have been created",
            "0 salespersons have been created",
            "The program does not compile",
            "2 salespersons have been created"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity. Output: 1 salespersons have been created. As an object attribute, each object has its own count with the value 1.",
          "id": 140
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Object attribute vs. class attribute): what does this program print?",
          "code": "class Counter {\n   static int total = 0;\n   int mine = 0;\n   Counter() {\n      total = total + 1;\n      mine = mine + 1;\n   }\n   public static void main(String argv[]) {\n      Counter c1 = new Counter();\n      Counter c2 = new Counter();\n      Counter c3 = new Counter();\n      System.out.println(c1.mine);\n      System.out.println(c3.total);\n      System.out.println(Counter.total + c2.mine);\n   }\n}",
          "answer": "1\n3\n4",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 14 - Modularity. total is static (one shared copy, 3 after three objects); mine is an object attribute, so each object has its own value of 1.",
          "id": 141
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Information hiding): what does this program print?",
          "code": "public class Account {\n   private int balance = 0;\n   public void deposit(int amount) {\n      if (amount > 0) balance = balance + amount;\n   }\n   public void withdraw(int amount) {\n      if (amount <= balance) balance = balance - amount;\n      else System.out.println(\"Insufficient funds\");\n   }\n   public int getBalance() { return balance; }\n   public static void main(String[] args) {\n      Account acct = new Account();\n      acct.deposit(500);\n      acct.deposit(-100);\n      acct.withdraw(700);\n      acct.withdraw(200);\n      System.out.println(\"Balance: \" + acct.getBalance());\n   }\n}",
          "answer": "Insufficient funds\nBalance: 300",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 14 - Modularity. balance is private, so it changes only through deposit() and withdraw(); the negative deposit is ignored and the 700 withdrawal is refused.",
          "id": 142
        }
      ]
    }
  ],
  "ipt1": [
    {
      "id": "ipt1_finals",
      "term": "Finals",
      "title": "Finals Exam Reviewer",
      "description": "Web Services and SOAP, REST and Consuming APIs, and Reliable and Secure Data Exchange (serialization, access control, data protection). Multiple choice, from remembering to scenario and evaluating items.",
      "timeLimit": 90,
      "questions": [
        {
          "question": "A software component that lets two applications communicate and exchange data over a network.",
          "options": [
            "Service registry",
            "SOAP Envelope",
            "Web service",
            "WSDL binding"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 1
        },
        {
          "question": "Web services communicate using open, agreed standards of the web, such as:",
          "options": [
            "HTTP and XML",
            "FTP and CSV",
            "RDP and YAML",
            "SSH and BSON"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 2
        },
        {
          "question": "Two applications built on different platforms can still talk through a web service because:",
          "options": [
            "Both share one database and one server",
            "Both are rewritten in one common language",
            "Both can read each other's source code",
            "Both follow the same published contract"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP. Neither side needs to know how the other was built internally.",
          "id": 3
        },
        {
          "question": "Systems interact through a published contract, not each other's internal code, so one can change without breaking the other.",
          "options": [
            "Interoperability",
            "Loose coupling",
            "Composability",
            "Reusability"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 4
        },
        {
          "question": "One service can be consumed by many applications: web, mobile, and other back-end systems.",
          "options": [
            "Interoperability",
            "Discoverability",
            "Reusability",
            "Loose coupling"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 5
        },
        {
          "question": "Open standards (HTTP, XML, JSON) let products from different vendors work together.",
          "options": [
            "Composability",
            "Interoperability",
            "Loose coupling",
            "Reusability"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 6
        },
        {
          "question": "A strict protocol using XML and a WSDL contract, common in enterprise and high-security systems.",
          "options": [
            "SOAP-based",
            "JSON-RPC",
            "XML-RPC",
            "RESTful"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 7
        },
        {
          "question": "An architectural style using plain HTTP, usually with JSON; lightweight and common for web and mobile.",
          "options": [
            "WS-Addressing",
            "SOAP-based",
            "XML-RPC",
            "RESTful"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 8
        },
        {
          "question": "Older, simple styles for calling a remote method and passing parameters, rarely used in new systems.",
          "options": [
            "REST and GraphQL",
            "UDDI and WS-*",
            "SOAP and WSDL",
            "XML-RPC and JSON-RPC"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 9
        },
        {
          "question": "The three interactions of a service-oriented architecture are:",
          "options": [
            "Request, process, and respond",
            "Publish, find, and bind",
            "Serialize, sign, and send",
            "Create, read, and update"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 10
        },
        {
          "question": "In the web service architecture, which role hosts the service and publishes its WSDL?",
          "options": [
            "Service provider",
            "Service registry",
            "Service requester",
            "Service consumer"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 11
        },
        {
          "question": "In the web service architecture, which role searches the directory and retrieves the WSDL?",
          "options": [
            "Service registry",
            "Service provider",
            "Service requester",
            "Service endpoint"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 12
        },
        {
          "question": "In the web service architecture, the UDDI directory plays the role of the:",
          "options": [
            "Service provider",
            "Service requester",
            "Service registry",
            "Service binding"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 13
        },
        {
          "question": "In the bind and invoke step, the requester:",
          "options": [
            "Registers its WSDL file in the directory",
            "Searches the registry directory for a matching service",
            "Groups services by category for browsing",
            "Uses the WSDL to call the service at its endpoint"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 14
        },
        {
          "question": "A design approach where software is built as a set of reusable, independent services.",
          "options": [
            "Web Services Description Language",
            "Service-oriented architecture (SOA)",
            "Simple Object Access Protocol (SOAP)",
            "Universal Description and Discovery"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 15
        },
        {
          "question": "What is the most common way to put SOA into practice?",
          "options": [
            "Web services",
            "Desktop programs",
            "Binary files",
            "Shared databases"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 16
        },
        {
          "question": "SOA principle: small services can be combined into larger business processes.",
          "options": [
            "Reusability",
            "Discoverability",
            "Loose coupling",
            "Composability"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 17
        },
        {
          "question": "SOA principle: services can be published and found through a registry.",
          "options": [
            "Standardized contracts",
            "Interoperability",
            "Discoverability",
            "Composability"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 18
        },
        {
          "question": "SOA principle: each service exposes a clear, agreed interface.",
          "options": [
            "Discoverability",
            "Standardized contracts",
            "Composability",
            "Loose coupling"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 19
        },
        {
          "question": "SOAP carries the message, WSDL ______, and UDDI ______.",
          "options": [
            "describes the service; helps clients find it",
            "encrypts the message; routes the message",
            "helps clients find it; describes the service",
            "stores the data; validates the schema"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 20
        },
        {
          "question": "Which core building block is the service contract?",
          "options": [
            "WSDL",
            "XML",
            "UDDI",
            "SOAP"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 21
        },
        {
          "question": "Which core building block is the directory where services are published so clients can discover them?",
          "options": [
            "WSDL",
            "SOAP",
            "SOA",
            "UDDI"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 22
        },
        {
          "question": "XML stands for:",
          "options": [
            "eXecutable Markup Language",
            "eXtended Message Language",
            "eXtensible Markup Language",
            "eXternal Mapping Language"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 23
        },
        {
          "question": "Which statement about the basic rules of XML is correct?",
          "options": [
            "Closing tags are optional",
            "Tags are case sensitive",
            "Several root elements are allowed",
            "Tags ignore uppercase letters"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP. Well formed, case sensitive, exactly one root element.",
          "id": 24
        },
        {
          "question": "Why is this XML not a valid document?",
          "options": [
            "It has more than one root element",
            "Its tags do not follow case sensitivity",
            "It is missing a SOAP Header",
            "Its values are not in quotes"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP. There must be exactly one root element.",
          "code": "<student>\n  <id>42</id>\n</student>\n<student>\n  <id>43</id>\n</student>",
          "id": 25
        },
        {
          "question": "SOAP messages are written entirely in:",
          "options": [
            "HTML",
            "XML",
            "JSON",
            "YAML"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 26
        },
        {
          "question": "SOAP stands for:",
          "options": [
            "Simple Online Architecture Protocol",
            "Service Oriented Access Protocol",
            "Simple Object Access Protocol",
            "Standard Object Application Protocol"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 27
        },
        {
          "question": "SOAP is transport independent but is most commonly sent over:",
          "options": [
            "FTP",
            "SSH",
            "SMTP",
            "HTTP"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 28
        },
        {
          "question": "Why do both sides always know exactly how to read a SOAP message?",
          "options": [
            "The server sends its source code first",
            "The client and server share one database",
            "The message is converted to plain text",
            "The format is strict and well defined"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 29
        },
        {
          "question": "The root element that marks the start and end of a SOAP message.",
          "options": [
            "Envelope",
            "Body",
            "Header",
            "Fault"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 30
        },
        {
          "question": "The optional part of a SOAP message that carries metadata such as authentication, transaction, and routing information.",
          "options": [
            "Fault",
            "Header",
            "Body",
            "Envelope"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 31
        },
        {
          "question": "The required part of a SOAP message that carries the actual request or response data.",
          "options": [
            "Detail",
            "Header",
            "Body",
            "Envelope"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 32
        },
        {
          "question": "In this SOAP message, what does the Header carry?",
          "options": [
            "An authentication token",
            "The endpoint address (URL)",
            "The request for student 42",
            "The error code and message"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP. The Header is optional; here it carries the auth token.",
          "code": "<soap:Envelope xmlns:soap=\"http://.../envelope/\">\n  <soap:Header>\n    <auth:Token>abc123</auth:Token>\n  </soap:Header>\n  <soap:Body>\n    <getStudent>\n      <id>42</id>\n    </getStudent>\n  </soap:Body>\n</soap:Envelope>",
          "id": 33
        },
        {
          "question": "In this SOAP message, what is the Body asking for?",
          "options": [
            "The list of all students",
            "The WSDL of the service",
            "The student with ID 42",
            "A new token for user 42"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP. A response looks the same, with the result inside the Body.",
          "code": "<soap:Envelope xmlns:soap=\"http://.../envelope/\">\n  <soap:Header>\n    <auth:Token>abc123</auth:Token>\n  </soap:Header>\n  <soap:Body>\n    <getStudent>\n      <id>42</id>\n    </getStudent>\n  </soap:Body>\n</soap:Envelope>",
          "id": 34
        },
        {
          "question": "When something goes wrong, the server returns a SOAP Fault. Where is it placed?",
          "options": [
            "Outside the Envelope",
            "Inside the Body",
            "Inside the Header",
            "In the WSDL file"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 35
        },
        {
          "question": "In this SOAP Fault, which element gives the human readable explanation of the error?",
          "options": [
            "faultactor",
            "detail",
            "faultcode",
            "faultstring"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP. faultcode identifies the type of error.",
          "code": "<soap:Body>\n  <soap:Fault>\n    <faultcode>soap:Client</faultcode>\n    <faultstring>Invalid student ID</faultstring>\n  </soap:Fault>\n</soap:Body>",
          "id": 36
        },
        {
          "question": "Which SOAP Fault element is optional and names who caused the fault?",
          "options": [
            "Envelope",
            "faultcode",
            "faultstring",
            "faultactor"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP. detail holds application-specific error details.",
          "id": 37
        },
        {
          "question": "In the SOAP message flow, what does the server send back when the request fails?",
          "options": [
            "An empty Envelope with no Body",
            "A UDDI entry pointing to another service",
            "A SOAP Fault instead of a normal result",
            "A new WSDL describing the error"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 38
        },
        {
          "question": "A SOAP message that looks like a remote method call, carrying an operation name and its parameters, uses which style?",
          "options": [
            "RPC style",
            "Literal style",
            "REST style",
            "Document style"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 39
        },
        {
          "question": "Which SOAP messaging style carries a full XML document, is more loosely coupled, and is easier to validate against a schema?",
          "options": [
            "Stateful style",
            "Document style",
            "Binary style",
            "RPC style"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 40
        },
        {
          "question": "Why do most modern SOAP services use the document style with literal encoding?",
          "options": [
            "Matching a method signature is faster and easier to validate",
            "It lets SOAP messages be written in JSON",
            "It removes the need for a WSDL contract",
            "Validating a whole document against a schema is more reliable"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 41
        },
        {
          "question": "WSDL stands for:",
          "options": [
            "Web Services Discovery Layer",
            "Wide Service Data Language",
            "Web Services Description Language",
            "Web Server Definition Language"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 42
        },
        {
          "question": "Which WSDL element lists the operations the service offers?",
          "options": [
            "portType",
            "service",
            "types",
            "binding"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 43
        },
        {
          "question": "Which WSDL element states the protocol and format used?",
          "options": [
            "message",
            "binding",
            "portType",
            "service"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 44
        },
        {
          "question": "Which WSDL element gives the endpoint address (URL)?",
          "options": [
            "portType",
            "types",
            "service",
            "binding"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 45
        },
        {
          "question": "Why can a developer generate working client code from a WSDL alone?",
          "options": [
            "The WSDL describes every operation, message, data type, and endpoint",
            "The WSDL contains the provider's full source code and database",
            "The SOAP Header carries the generated code to the client",
            "The UDDI registry sends ready-made classes to every client"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 46
        },
        {
          "question": "Tools such as wsimport (Java) and svcutil (.NET) build client code from:",
          "options": [
            "A JSON body",
            "A WSDL",
            "A UDDI page",
            "A SOAP Fault"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 47
        },
        {
          "question": "UDDI stands for:",
          "options": [
            "Uniform Directory, Discovery, and Indexing",
            "Universal Design, Deployment, and Interface",
            "Unified Data, Delivery, and Interchange",
            "Universal Description, Discovery, and Integration"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 48
        },
        {
          "question": "In UDDI, which part holds technical details on how to connect to and call the service?",
          "options": [
            "Green pages",
            "White pages",
            "Yellow pages",
            "Blue pages"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 49
        },
        {
          "question": "In UDDI, which part groups services by category so clients can browse by type?",
          "options": [
            "White pages",
            "Blue pages",
            "Yellow pages",
            "Green pages"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP. White pages hold the business name and contact information.",
          "id": 50
        },
        {
          "question": "Why is UDDI less common today?",
          "options": [
            "Registries cannot store contact details",
            "SOAP messages can no longer be sent over HTTP connections",
            "REST replaced XML in every SOAP service",
            "Many services are shared directly through their WSDL"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 51
        },
        {
          "question": "Which WS-* standard adds authentication, encryption, and message integrity?",
          "options": [
            "WS-AtomicTransaction",
            "WS-Security",
            "WS-Addressing",
            "WS-ReliableMessaging"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 52
        },
        {
          "question": "Which WS-* standard puts routing and addressing information inside the message?",
          "options": [
            "WS-Addressing",
            "WS-Security",
            "WS-AtomicTransaction",
            "WS-ReliableMessaging"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 53
        },
        {
          "question": "Which WS-* standard guarantees delivery even if the network fails temporarily?",
          "options": [
            "WS-AtomicTransaction",
            "WS-Security",
            "WS-ReliableMessaging",
            "WS-Addressing"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 54
        },
        {
          "question": "Which WS-* standard coordinates a transaction across several services?",
          "options": [
            "WS-Addressing",
            "WS-ReliableMessaging",
            "WS-Security",
            "WS-AtomicTransaction"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 55
        },
        {
          "question": "How does WS-Security differ from relying only on HTTPS?",
          "options": [
            "It lets the SOAP message be sent without using any XML",
            "It protects the message itself, not just the connection",
            "It makes the XML message smaller and faster to send over HTTP",
            "It removes the need for a WSDL contract between the parties"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 56
        },
        {
          "question": "A dedicated tool to test, inspect, and debug SOAP services.",
          "options": [
            "curl",
            "SoapUI",
            "DevTools",
            "Swagger"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 57
        },
        {
          "question": "Which is a trade-off (limitation) of SOAP?",
          "options": [
            "Works over several transports",
            "Language and platform neutral design",
            "Verbose XML makes messages large",
            "Strong typing through a WSDL contract"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 58
        },
        {
          "question": "Which is a strength of SOAP?",
          "options": [
            "It is faster than lightweight styles",
            "Messages are small, light, and quick to send",
            "Setup is simple and very flexible",
            "Built-in standards for security and reliability"
          ],
          "answer": 3,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 59
        },
        {
          "question": "Which situation is the best fit for SOAP?",
          "options": [
            "An interbank payment needing formal security and reliability",
            "A web page loading a short list of products",
            "A quick weather widget for a personal blog site",
            "A public mobile API that must stay light, simple, and fast"
          ],
          "answer": 0,
          "explanation": "Lesson 1 - Web Services and SOAP. When to use SOAP: banking, payments, telecom; strict contracts; guaranteed messaging.",
          "id": 60
        },
        {
          "question": "What is a SOAP Fault?",
          "options": [
            "A WSDL element that describes the endpoint address of the service",
            "An element in the Body that reports an error instead of a normal result",
            "The root element that marks the start and end of a SOAP message",
            "An optional element in the Header that carries authentication data"
          ],
          "answer": 1,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 61
        },
        {
          "question": "What is SOAP?",
          "options": [
            "An architectural style that treats data as resources over HTTP",
            "A registry where providers publish services for clients to find",
            "A strict XML-based protocol for exchanging structured information",
            "A lightweight text format built from key and value pairs"
          ],
          "answer": 2,
          "explanation": "Lesson 1 - Web Services and SOAP.",
          "id": 62
        },
        {
          "question": "API stands for:",
          "options": [
            "Application Programming Interface",
            "Automated Protocol Interface",
            "Advanced Program Interchange",
            "Application Process Integration"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 63
        },
        {
          "question": "A defined set of rules that lets one program request data or services from another.",
          "options": [
            "URI",
            "JSON",
            "HTTP",
            "API"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs. A web API exposes those rules over the web, usually through HTTP.",
          "id": 64
        },
        {
          "question": "In the restaurant analogy, what represents the API?",
          "options": [
            "The diner placing the order",
            "The kitchen preparing food",
            "The food that is served",
            "The menu and the waiter"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs. The diner orders without seeing the kitchen.",
          "id": 65
        },
        {
          "question": "In the restaurant analogy, what does the API hide from the diner (client)?",
          "options": [
            "The waiter carrying the order to the kitchen",
            "The menu of things to order",
            "The kitchen, where the work is done",
            "The food that is delivered"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 66
        },
        {
          "question": "API style with one endpoint where the client asks for exactly the data it needs, reducing over-fetching.",
          "options": [
            "GraphQL",
            "REST",
            "SOAP",
            "gRPC"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 67
        },
        {
          "question": "High-performance API style using a binary format over HTTP/2, common between back-end services.",
          "options": [
            "GraphQL",
            "gRPC",
            "SOAP",
            "REST"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 68
        },
        {
          "question": "REST stands for:",
          "options": [
            "REpresentational State Transfer",
            "Remote Execution State Transfer",
            "Resource Exchange Standard Transport",
            "Reliable Endpoint Service Transfer"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 69
        },
        {
          "question": "REST is best described as:",
          "options": [
            "A strict protocol with a fixed XML format",
            "A binary format that runs over HTTP/2",
            "An architectural style, a set of guidelines",
            "A registry where services are published"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 70
        },
        {
          "question": "An API that follows the REST guidelines is described as:",
          "options": [
            "SOAP-based",
            "RESTful",
            "Composable",
            "Stateful"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 71
        },
        {
          "question": "REST principle: each request carries all the information it needs, and the server keeps no session between calls.",
          "options": [
            "Cacheable",
            "Client-Server",
            "Layered System",
            "Stateless"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 72
        },
        {
          "question": "REST principle: a client cannot tell whether it talks to the server directly or through an intermediary.",
          "options": [
            "Stateless",
            "Client-Server",
            "Layered System",
            "Uniform Interface"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 73
        },
        {
          "question": "REST principle: responses can be stored and reused to reduce load and improve performance.",
          "options": [
            "Cacheable",
            "Stateless",
            "Uniform Interface",
            "Layered System"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 74
        },
        {
          "question": "REST principle: resources are accessed in one consistent, predictable way.",
          "options": [
            "Layered System",
            "Uniform Interface",
            "Cacheable",
            "Client-Server"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 75
        },
        {
          "question": "REST principle: the client and the server are separate, and each can change without affecting the other.",
          "options": [
            "Stateless",
            "Cacheable",
            "Uniform Interface",
            "Client-Server"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 76
        },
        {
          "question": "Each resource in REST is identified by a unique:",
          "options": [
            "URI",
            "Header",
            "WSDL",
            "Token"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs. A resource is any object or piece of data: a user, a product, an order.",
          "id": 77
        },
        {
          "question": "Which URI refers to the grades of student 42?",
          "options": [
            "/grades/students?42",
            "/students/42/grades",
            "/getGrades/42",
            "/students/grades"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 78
        },
        {
          "question": "Which endpoint follows the REST naming best practice?",
          "options": [
            "/deleteStudents",
            "/createStudent",
            "/getStudents",
            "/students"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs. Use nouns in the URL; the HTTP method decides the action.",
          "id": 79
        },
        {
          "question": "JSON stands for:",
          "options": [
            "Joint Standard Object Notation",
            "JavaScript Online Node",
            "JavaScript Object Notation",
            "Java Serialized Object Network"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 80
        },
        {
          "question": "In JSON, objects use ____ and arrays use ____.",
          "options": [
            "< > ; ( )",
            "[ ] ; { }",
            "( ) ; < >",
            "{ } ; [ ]"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 81
        },
        {
          "question": "Which is NOT one of the JSON value types?",
          "options": [
            "Date",
            "Array",
            "Null",
            "Boolean"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs. Values: string, number, boolean, null, object, or array.",
          "id": 82
        },
        {
          "question": "In this response, what type of value is stored in \"active\"?",
          "options": [
            "Null",
            "Number",
            "Boolean",
            "String"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs. true without quotes is a boolean.",
          "code": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  \"id\": 42,\n  \"name\": \"Juan dela Cruz\",\n  \"course\": \"BSIT\",\n  \"active\": true\n}",
          "id": 83
        },
        {
          "question": "Why do REST APIs usually exchange data as JSON?",
          "options": [
            "It encrypts the data it carries",
            "It is lightweight and easy to read",
            "It has a strict schema like a WSDL",
            "It is the only format HTTP accepts"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 84
        },
        {
          "question": "Which HTTP method maps to the Create operation?",
          "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 85
        },
        {
          "question": "Which HTTP method modifies only part of a resource?",
          "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs. PUT replaces the whole resource.",
          "id": 86
        },
        {
          "question": "What does PUT /students/42 do?",
          "options": [
            "Replaces student 42",
            "Creates a new student",
            "Removes student 42",
            "Retrieves student 42"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 87
        },
        {
          "question": "A method is called safe when:",
          "options": [
            "It always returns a 200 OK status code",
            "Calling it many times has the same effect",
            "It only reads data and never changes it",
            "It sends its data through HTTPS only"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 88
        },
        {
          "question": "A method is idempotent when:",
          "options": [
            "It needs a valid token in the Authorization header to run",
            "Calling it once or many times has the same final effect",
            "It only reads data and never changes it",
            "It always creates a brand new resource"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 89
        },
        {
          "question": "Which HTTP method is both safe and idempotent?",
          "options": [
            "GET",
            "PUT",
            "DELETE",
            "POST"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 90
        },
        {
          "question": "Which HTTP method is neither safe nor idempotent?",
          "options": [
            "PUT",
            "GET",
            "POST",
            "DELETE"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs. Each POST creates a new resource.",
          "id": 91
        },
        {
          "question": "Why is DELETE idempotent even though it changes data?",
          "options": [
            "It never changes any data on the server",
            "It can only be sent once per session",
            "The server caches the deleted resource",
            "The resource is gone after the first call"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 92
        },
        {
          "question": "Why can sending the same POST request twice create two resources?",
          "options": [
            "PUT always creates new resources",
            "GET is not safe",
            "DELETE is not idempotent",
            "POST is not idempotent"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs. Each POST call creates a new resource.",
          "id": 93
        },
        {
          "question": "Which status code family means the problem is in the request itself?",
          "options": [
            "3xx",
            "5xx",
            "4xx",
            "2xx"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 94
        },
        {
          "question": "A 5xx status code means:",
          "options": [
            "The request was received and processed",
            "The server failed to handle a valid request",
            "The request itself was badly formed",
            "Further action is needed to complete the request"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 95
        },
        {
          "question": "Which status code means a new resource was created?",
          "options": [
            "201 Created",
            "304 Not Modified",
            "204 No Content",
            "200 OK"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 96
        },
        {
          "question": "Which status code belongs to the 3xx Redirection family?",
          "options": [
            "301 Moved Permanently",
            "503 Service Unavailable",
            "401 Unauthorized",
            "204 No Content"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 97
        },
        {
          "question": "A request returns 404. What does it tell the developer?",
          "options": [
            "The resource was created successfully",
            "The token expired and the user must sign in again",
            "The server crashed on a valid request",
            "The endpoint path or resource is not found"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 98
        },
        {
          "question": "In this request, which part is the query string (filters or options)?",
          "options": [
            "GET",
            "https://api.school.edu",
            "?active=true",
            "/students/42"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "code": "GET https://api.school.edu/students/42?active=true",
          "id": 99
        },
        {
          "question": "In this request, which part is the base URL (where the API lives)?",
          "options": [
            "/students/42",
            "https://api.school.edu",
            "?active=true",
            "GET"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "code": "GET https://api.school.edu/students/42?active=true",
          "id": 100
        },
        {
          "question": "A request body (usually JSON) is sent with which methods?",
          "options": [
            "Only with GET requests",
            "POST, PUT, and PATCH",
            "GET, PUT, and DELETE",
            "GET and DELETE only"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 101
        },
        {
          "question": "Which request header states the format the client wants, such as application/json?",
          "options": [
            "Content-Type",
            "Cache-Control",
            "Accept",
            "Authorization"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 102
        },
        {
          "question": "Which request header carries credentials, such as a token?",
          "options": [
            "Cache-Control",
            "Accept",
            "Content-Type",
            "Authorization"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 103
        },
        {
          "question": "Which response header tells how the response may be cached?",
          "options": [
            "Cache-Control",
            "Content-Type",
            "Authorization",
            "Accept"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 104
        },
        {
          "question": "In content negotiation, the client asks with ______ and the server replies with a matching ______.",
          "options": [
            "Authorization; Accept",
            "Content-Type; Accept",
            "Accept; Content-Type",
            "Cache-Control; Status"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 105
        },
        {
          "question": "In this response, what does the Content-Type header tell the client?",
          "options": [
            "The result is cached",
            "The token is valid",
            "The request succeeded",
            "The body is JSON"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs. The status line 200 OK means success; the header says the body is JSON.",
          "code": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  \"id\": 42,\n  \"name\": \"Juan dela Cruz\",\n  \"course\": \"BSIT\",\n  \"active\": true\n}",
          "id": 106
        },
        {
          "question": "What does /students?page=2&limit=20 return?",
          "options": [
            "The second page of results, 20 per page",
            "Student 2 and student 20 only",
            "Twenty pages of student results",
            "The first 2 students, sorted by limit"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 107
        },
        {
          "question": "Which query parameter sorts the results?",
          "options": [
            "/students?page=2",
            "/students?sort=name",
            "/students/name",
            "/students?course=BSIT"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 108
        },
        {
          "question": "What is pagination in a REST API?",
          "options": [
            "Splitting one resource into two separate endpoints with new names",
            "Ordering the results of a collection by one field, e.g., ?sort=name",
            "Returning a large collection in smaller pages, e.g., ?page=2&limit=20",
            "Returning only the records that match a value, e.g., ?course=BSIT"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 109
        },
        {
          "question": "Why must every REST request prove who is calling?",
          "options": [
            "REST messages are written in XML",
            "REST has no status codes for reporting errors",
            "REST uses the WSDL as its contract",
            "REST is stateless, so no session is kept"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 110
        },
        {
          "question": "A signed token sent in the Authorization header, common for logged-in users.",
          "options": [
            "WS-Security",
            "Bearer token / JWT",
            "API key",
            "OAuth 2.0"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 111
        },
        {
          "question": "What is OAuth 2.0?",
          "options": [
            "A standard flow that grants limited access without a password",
            "A browser rule on which websites may call your API",
            "A simple secret string sent in a header or a query string",
            "A signed token that the server verifies on each request"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 112
        },
        {
          "question": "What must be used with every authentication method so credentials are encrypted in transit?",
          "options": [
            "XML",
            "JSON",
            "HTTPS",
            "UDDI"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 113
        },
        {
          "question": "Unlike a SOAP Fault, how does REST report an error?",
          "options": [
            "With a faultcode inside the SOAP Envelope",
            "With an HTTP status code plus a JSON body",
            "With a 200 OK and an empty body",
            "With a new WSDL describing the error"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 114
        },
        {
          "question": "What does this response tell the client?",
          "options": [
            "Student 42 does not exist (client error)",
            "The client must log in (unauthorized)",
            "Student 42 was created (success)",
            "The server crashed (server error)"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "code": "HTTP/1.1 404 Not Found\nContent-Type: application/json\n\n{\n  \"error\": \"Not Found\",\n  \"message\": \"Student 42 does not exist\"\n}",
          "id": 115
        },
        {
          "question": "Which is a REST error-handling rule from the lesson?",
          "options": [
            "Put the error inside a SOAP Fault",
            "Always send 500 for every kind of error",
            "Return errors as plain HTML pages",
            "Never send 200 OK for a failed request"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 116
        },
        {
          "question": "Why should an API be versioned, e.g., /v1/students?",
          "options": [
            "So the API can return 200 OK for every error",
            "So each request can skip the Authorization header",
            "So the server can keep a session for each client",
            "So changes do not break existing clients"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 117
        },
        {
          "question": "Which is a REST API design best practice?",
          "options": [
            "Keep naming, casing, and response shapes uniform",
            "Return 200 OK even when a request fails",
            "Store a session for each client on the server",
            "Put verbs such as get in every endpoint"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs. Be consistent.",
          "id": 118
        },
        {
          "question": "What is the first step in consuming a REST API?",
          "options": [
            "Send the request right away",
            "Read the API documentation",
            "Parse the JSON response",
            "Hard-code the API key"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs. The API contract is the documentation.",
          "id": 119
        },
        {
          "question": "Which reminder applies when consuming an API?",
          "options": [
            "Skip the status code and read the body directly",
            "Assume every request will succeed",
            "Never hard-code secrets in client-side code",
            "Send data in any format you prefer"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 120
        },
        {
          "question": "A tool for sending requests straight from the command line, useful for quick checks.",
          "options": [
            "curl",
            "Postman",
            "SoapUI",
            "Swagger"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 121
        },
        {
          "question": "A tool to document an API and let others try its endpoints interactively.",
          "options": [
            "Browser DevTools",
            "Swagger / OpenAPI",
            "curl",
            "SoapUI"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 122
        },
        {
          "question": "Which comparison of SOAP and REST is correct?",
          "options": [
            "Both are strict protocols that use only XML",
            "Both are styles that use only JSON over HTTP",
            "SOAP is a protocol; REST is an architectural style",
            "SOAP is an architectural style; REST is a protocol"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 123
        },
        {
          "question": "Which comparison of transport is correct?",
          "options": [
            "SOAP: HTTP only; REST: HTTP, SMTP, and more",
            "Both SOAP and REST use HTTP only",
            "Both SOAP and REST use SMTP only",
            "SOAP: HTTP, SMTP, and more; REST: HTTP only"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 124
        },
        {
          "question": "Which comparison of contracts is correct?",
          "options": [
            "SOAP: WSDL (strict); REST: optional, e.g., OpenAPI",
            "Neither one can have any contract",
            "SOAP: optional, e.g., OpenAPI; REST: WSDL (strict)",
            "Both require a strict WSDL contract"
          ],
          "answer": 0,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 125
        },
        {
          "question": "REST is usually the better choice for:",
          "options": [
            "Enterprise transactions that need WS-Security",
            "Systems that require a strict WSDL contract",
            "Messages that must use only the XML format",
            "Public web and mobile APIs"
          ],
          "answer": 3,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 126
        },
        {
          "question": "What is a query string in a REST request?",
          "options": [
            "The part that tells where the API lives, e.g., https://api.school.edu",
            "The part after ? that adds filters or options, e.g., ?active=true",
            "The part that identifies the resource, e.g., /students/42",
            "The part that names the action to perform, e.g., GET"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 127
        },
        {
          "question": "What is content negotiation?",
          "options": [
            "The server keeps a session so the client does not resend its token each time",
            "The client and server agree on a price for using the API before the first request",
            "The client asks for a format with Accept and the server replies with a matching Content-Type",
            "The client sends its credentials in the query string instead of a header"
          ],
          "answer": 2,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 128
        },
        {
          "question": "What is a resource in REST?",
          "options": [
            "A method that decides the action, such as GET or POST",
            "Any object or piece of data, such as a user, product, or order",
            "A status code that reports the result of a request",
            "A header that carries credentials, such as a token"
          ],
          "answer": 1,
          "explanation": "Lesson 2 - REST and Consuming APIs.",
          "id": 129
        },
        {
          "question": "The three layers of reliable and secure data exchange, in order:",
          "options": [
            "Access control, serialization, data protection",
            "Serialization, data protection, access control",
            "Data protection, serialization, access control",
            "Serialization, access control, data protection"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 130
        },
        {
          "question": "What does \"reliable is not the same as safe\" mean?",
          "options": [
            "Serialization alone keeps data safe",
            "Security can be added at the end",
            "You need all three layers together",
            "Encryption makes validation unnecessary"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 131
        },
        {
          "question": "Converting an in-memory object into portable text or bytes so it can travel over a network or be saved to disk.",
          "options": [
            "Serialization",
            "Hashing",
            "Deserialization",
            "Authorization"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 132
        },
        {
          "question": "Parsing text or bytes back into a usable object on the other side.",
          "options": [
            "Encryption",
            "Deserialization",
            "Validation",
            "Serialization"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 133
        },
        {
          "question": "Serialization and deserialization are also called:",
          "options": [
            "Signing and verifying tokens",
            "Hashing and salting",
            "Marshalling and unmarshalling",
            "Encoding and routing"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 134
        },
        {
          "question": "Turning the raw string \"juan\" into structured code name: \"juan\" is called:",
          "options": [
            "Parsing",
            "Serializing",
            "Hashing",
            "Signing"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Serializing goes the other way: structured code into a raw string.",
          "id": 135
        },
        {
          "question": "The round-trip rule says deserialize(serialize(x)) must:",
          "options": [
            "Turn x into a JSON string every time",
            "Return x as a smaller binary format",
            "Encrypt x before it reaches the client over the network",
            "Give back x with the same values and structure"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. If not, your data exchange has a bug.",
          "id": 136
        },
        {
          "question": "In this code, what does JSON.stringify(order) do?",
          "options": [
            "Turns the object into JSON text",
            "Turns JSON text into an object",
            "Sends JSON and sets Content-Type",
            "Checks the JSON against a schema"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "code": "const text = JSON.stringify(order);\nconst obj  = JSON.parse(text);\nres.json(order);",
          "id": 137
        },
        {
          "question": "In this code, what does res.json(order) do?",
          "options": [
            "Encrypts the order before sending",
            "Turns JSON text into an object",
            "Saves the JSON text to the disk",
            "Sends JSON and sets the Content-Type"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "code": "const text = JSON.stringify(order);\nconst obj  = JSON.parse(text);\nres.json(order);",
          "id": 138
        },
        {
          "question": "Why should JSON.parse always be wrapped in try/catch?",
          "options": [
            "So the JSON is encrypted in transit",
            "So the keys become double quoted",
            "So bad input cannot crash the server",
            "So the parse runs faster on the server"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 139
        },
        {
          "question": "Which statement about JSON is correct?",
          "options": [
            "Comments are allowed inside the data",
            "Keys are always strings in double quotes",
            "Keys may be numbers without quotes",
            "It has ten value types, including date"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 140
        },
        {
          "question": "Which format is the default for web and mobile APIs?",
          "options": [
            "JSON",
            "YAML",
            "XML",
            "Protocol Buffers"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 141
        },
        {
          "question": "Which format is verbose but strict and self-describing, still common in SOAP, banking, and government systems?",
          "options": [
            "JSON",
            "MessagePack",
            "YAML",
            "XML"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 142
        },
        {
          "question": "Which format is the most readable and is used for configuration files (Docker, Kubernetes, CI)?",
          "options": [
            "Protocol Buffers",
            "XML",
            "YAML",
            "JSON"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 143
        },
        {
          "question": "Protocol Buffers and MessagePack are examples of which kind of format?",
          "options": [
            "Configuration formats",
            "Binary formats",
            "Markup formats",
            "Plain text formats"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Compact, fast, and schema-driven, for heavy internal service-to-service traffic.",
          "id": 144
        },
        {
          "question": "Which question does Authentication (AuthN) answer?",
          "options": [
            "Is it available?",
            "Was it changed?",
            "Who are you?",
            "What may you do?"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Authentication always comes first.",
          "id": 145
        },
        {
          "question": "Which question does Authorization (AuthZ) answer?",
          "options": [
            "What may you do?",
            "Was it changed?",
            "Where is it stored?",
            "Who are you?"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 146
        },
        {
          "question": "Which status code means \"we do not know who you are\" (authentication failed)?",
          "options": [
            "429",
            "401",
            "404",
            "403"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 147
        },
        {
          "question": "Which status code means \"we know you, but you are not allowed\" (authorization failed)?",
          "options": [
            "500",
            "429",
            "401",
            "403"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 148
        },
        {
          "question": "What does HTTPS / TLS do?",
          "options": [
            "Limits the number of requests per window for each client",
            "Turns objects into portable JSON text",
            "Groups permissions into roles for users",
            "Encrypts traffic in transit and confirms the real server"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Mandatory for every production API.",
          "id": 149
        },
        {
          "question": "Which is true about an API key?",
          "options": [
            "Good for service-to-service, weak at proving a user",
            "Encrypted, so it is safe to commit to code",
            "Only works over plain HTTP, never HTTPS",
            "Best way to prove a specific logged-in user in every app"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 150
        },
        {
          "question": "Why should secrets never be put in a JWT payload?",
          "options": [
            "It is deleted after the first request",
            "It is signed, not encrypted, so anyone can read it",
            "It is encrypted, so the server cannot read it",
            "It is stored in the server's database"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 151
        },
        {
          "question": "Which part of a JWT names the algorithm that signs the token?",
          "options": [
            "Signature",
            "Body",
            "Header",
            "Payload"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Payload: user id, role, expiry (readable). Signature: proves it was not altered.",
          "id": 152
        },
        {
          "question": "Which part of a JWT proves the token was not altered and is made with a secret key?",
          "options": [
            "Payload",
            "Claim",
            "Signature",
            "Header"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 153
        },
        {
          "question": "Why is JWT called stateless?",
          "options": [
            "The server verifies the signature with no database lookup",
            "The server keeps a session for each token",
            "The token is encrypted so no one but the server can read it",
            "The token never expires once it is issued"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 154
        },
        {
          "question": "Which OAuth 2.0 flow is used for service-to-service access?",
          "options": [
            "Authorization-code flow",
            "Password-sharing flow",
            "Refresh-only flow",
            "Client-credentials flow"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Authorization-code flow is for humans (Login with Google).",
          "id": 155
        },
        {
          "question": "What is RBAC (role-based access control)?",
          "options": [
            "Encrypting stored data so that only the owner can read it",
            "Grouping permissions into roles and giving each role only what it needs",
            "Limiting the number of requests a client can send per window",
            "Signing a token so the server can verify it with no lookup"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 156
        },
        {
          "question": "In RBAC, where should permissions be enforced?",
          "options": [
            "In the client app's local storage",
            "On the server, never trust the client",
            "In the JWT payload, kept as a secret",
            "In the browser, through hidden buttons"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 157
        },
        {
          "question": "The CIA triad stands for:",
          "options": [
            "Confidentiality, Identity, Access",
            "Control, Identity, Authorization",
            "Confidentiality, Integrity, Availability",
            "Certificate, Integrity, Authentication"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 158
        },
        {
          "question": "Which technique serves Confidentiality?",
          "options": [
            "Encryption",
            "Rate limiting",
            "Hashing",
            "Pagination"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 159
        },
        {
          "question": "Symmetric encryption:",
          "options": [
            "Cannot be used for bulk data at all",
            "Is slower and used only for key exchange",
            "Uses a public key and a private key",
            "Uses one shared key to encrypt and decrypt"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Example: AES. Challenge: sharing the key safely.",
          "id": 160
        },
        {
          "question": "Asymmetric encryption:",
          "options": [
            "One shared key encrypts and decrypts",
            "Faster than symmetric for bulk data",
            "Public key encrypts, private key decrypts",
            "Turns data into a one-way fingerprint"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Example: RSA, ECC. TLS combines both.",
          "id": 161
        },
        {
          "question": "If data is encrypted in transit (TLS) but stored as plain text, what is still exposed?",
          "options": [
            "Data at rest",
            "The API version",
            "Data in transit",
            "The TLS certificate"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Protect data in transit AND at rest.",
          "id": 162
        },
        {
          "question": "How should passwords be stored?",
          "options": [
            "Hashed with MD5 or SHA-1 for speed",
            "Encrypted so they can be decrypted and read back later",
            "Saved as plain text in a safe table",
            "Hashed with a slow salted algorithm like bcrypt"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 163
        },
        {
          "question": "A one-way fingerprint: the same input always gives the same result, but it cannot be reversed.",
          "options": [
            "Signing",
            "Hashing",
            "Serialization",
            "Encryption"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 164
        },
        {
          "question": "What is HMAC?",
          "options": [
            "A list of trusted origins that are allowed to call the API from a browser",
            "A role that groups permissions so each user gets only what is needed",
            "A public key that encrypts a message so only the private key can decrypt it",
            "A hash of the message plus a shared secret, used to confirm it is authentic and unchanged"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 165
        },
        {
          "question": "Private key signs, public key verifies, so the signer cannot later deny it. This property is called:",
          "options": [
            "Availability",
            "Non-repudiation",
            "Idempotency",
            "Statelessness"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Digital signatures are best across organizations.",
          "id": 166
        },
        {
          "question": "Rebuilding untrusted input into objects without checks is called:",
          "options": [
            "Insecure deserialization",
            "Broken pagination",
            "Insecure serialization",
            "Weak encryption"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. A crafted payload can overwrite fields or run code. A classic OWASP Top 10 risk.",
          "id": 167
        },
        {
          "question": "Which is the defense against insecure deserialization?",
          "options": [
            "Use native object serialization only",
            "Skip validation for faster parsing",
            "Validate against a schema and prefer JSON",
            "Trust fields that came from the client"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 168
        },
        {
          "question": "When validating input, you should:",
          "options": [
            "Use an allowlist and validate at the boundary",
            "Trust input that is already in JSON",
            "Use a blocklist after the business logic",
            "Validate only after saving the data"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 169
        },
        {
          "question": "What is rate limiting?",
          "options": [
            "Encrypting traffic between the client and server",
            "Checking input against an allowlist at the boundary",
            "Capping requests per time window (429 Too Many Requests)",
            "Allowing only trusted websites to call the API"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Stops brute force and scraping and protects availability.",
          "id": 170
        },
        {
          "question": "Which rule about CORS is correct?",
          "options": [
            "Use CORS on the server to hash the passwords",
            "Allow only trusted origins, no wildcard with credentials",
            "CORS replaces the need for authentication",
            "Allow every origin so all of the sites can call the API freely"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 171
        },
        {
          "question": "In one secure payment request, which step comes right after Authenticate (attach a signed token)?",
          "options": [
            "Validate (check the schema first)",
            "Verify integrity (confirm the HMAC)",
            "Store safely (encrypt at rest)",
            "Encrypt in transit (send over TLS)"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange. Serialize, Authenticate, Encrypt in transit, Validate, Verify integrity, Store safely.",
          "id": 172
        },
        {
          "question": "What is the last step of one secure request?",
          "options": [
            "Authenticate (attach a token)",
            "Store safely (encrypt data at rest)",
            "Serialize (build the JSON payload)",
            "Validate (check the schema)"
          ],
          "answer": 1,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 173
        },
        {
          "question": "What is a JWT (JSON Web Token)?",
          "options": [
            "An encrypted file that stores passwords so they can be read back later",
            "A binary format for heavy internal service-to-service traffic",
            "A browser rule that controls which websites may call the API",
            "A signed token with a header, payload, and signature, used for stateless authentication"
          ],
          "answer": 3,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 174
        },
        {
          "question": "What is CORS?",
          "options": [
            "A flow that grants limited access without passwords",
            "A one-way fingerprint used to store passwords safely",
            "A browser rule controlling which websites may call your API",
            "A cap on the number of requests allowed per window"
          ],
          "answer": 2,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 175
        },
        {
          "question": "What is a digital signature?",
          "options": [
            "Private key signs, public key verifies, giving non-repudiation",
            "One shared key encrypts and decrypts the same message",
            "A hash of the message plus a shared secret key",
            "A list of roles with only the permissions needed"
          ],
          "answer": 0,
          "explanation": "Lesson 3 - Reliable and Secure Data Exchange.",
          "id": 176
        }
      ]
    }
  ],
  "wd": [
    {
      "id": "wd_finals",
      "term": "Finals",
      "title": "Finals Exam Reviewer",
      "description": "Chapters 5–7: Advanced CSS, Introduction to JavaScript (incl. DOM), and Web Hosting. Multiple choice + JavaScript output tracing.",
      "timeLimit": 120,
      "questions": [
        {
          "question": "It defines the intermediate styles that an animation passes through during execution.",
          "options": [
            "transition-duration",
            "animation-fill-mode",
            "@keyframes",
            "animation-iteration-count"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 1
        },
        {
          "question": "It allows a flex item to occupy more of the available container space relative to other items.",
          "options": [
            "flex-grow",
            "justify-content",
            "justify-self",
            "flex-wrap"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 2
        },
        {
          "question": "It removes an element from the rendered layout, so it does not occupy space.",
          "options": [
            "skew()",
            "display: none",
            "float",
            "transition-delay"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 3
        },
        {
          "question": "It controls how long a transition waits before it starts.",
          "options": [
            "animation-fill-mode",
            "transition-duration",
            "linear",
            "transition-delay"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 4
        },
        {
          "question": "It divides a grid container into columns whose widths can be expressed as fractions of available space.",
          "options": [
            "grid-template-columns",
            "flex-wrap",
            "grid gap",
            "justify-self"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 5
        },
        {
          "question": "It changes an element's position horizontally without changing the surrounding document flow.",
          "options": [
            "skew()",
            "float",
            "scale()",
            "translate()"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 6
        },
        {
          "question": "It specifies whether a flex container places items on a single line or allows them to wrap.",
          "options": [
            "flex-grow",
            "flex-wrap",
            "justify-content",
            "grid-template-columns"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 7
        },
        {
          "question": "It determines whether an animated element keeps the styles from its final keyframe after the animation finishes.",
          "options": [
            "@keyframes",
            "transition-delay",
            "animation-fill-mode",
            "animation-iteration-count"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 8
        },
        {
          "question": "It makes an element respond when a pointer is positioned over it.",
          "options": [
            "Media Queries",
            ":hover",
            "transition-duration",
            "transform: rotate()"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 9
        },
        {
          "question": "It establishes the spacing between rows and columns in a grid layout.",
          "options": [
            "repeat()",
            "justify-self",
            "grid gap",
            "grid-template-columns"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 10
        },
        {
          "question": "It makes an element rotate around its transformation origin.",
          "options": [
            "transform: rotate()",
            "translate(x,y)",
            "scaleX()",
            "skew()"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 11
        },
        {
          "question": "It applies layout rules conditionally according to characteristics such as viewport width.",
          "options": [
            "CSS Grid",
            "float",
            "Flexbox",
            "Media Queries"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 12
        },
        {
          "question": "It controls the alignment of an individual grid item along the inline axis.",
          "options": [
            "justify-content",
            "justify-self",
            "flex-grow",
            "grid gap"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 13
        },
        {
          "question": "It specifies the amount of time a transition takes to complete.",
          "options": [
            "animation-iteration-count",
            "transition-delay",
            "transition-duration",
            "linear"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 14
        },
        {
          "question": "It arranges items primarily along one dimension, either horizontally or vertically.",
          "options": [
            "Flexbox",
            "Media Queries",
            "float",
            "CSS Grid"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 15
        },
        {
          "question": "It changes the apparent width and height of an element through scaling.",
          "options": [
            "transform: rotate()",
            "skew()",
            "translate()",
            "scale()"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 16
        },
        {
          "question": "It controls how flex items are distributed along the main axis.",
          "options": [
            "justify-content",
            "flex-wrap",
            "justify-self",
            "flex-grow"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 17
        },
        {
          "question": "It places an element toward one side so surrounding content can flow around it.",
          "options": [
            "display: none",
            "justify-self",
            "float",
            "translate()"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 18
        },
        {
          "question": "It defines the number of times an animation runs, including the option to repeat indefinitely.",
          "options": [
            "animation-fill-mode",
            "@keyframes",
            "transition-duration",
            "animation-iteration-count"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 19
        },
        {
          "question": "It uses a function to generate repeated track patterns in a grid definition.",
          "options": [
            "grid gap",
            "repeat()",
            "scaleX()",
            "translate(x,y)"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 20
        },
        {
          "question": "It produces a transition that maintains a constant rate of change.",
          "options": [
            "ease-in-out",
            "ease-out",
            "linear",
            "ease"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 21
        },
        {
          "question": "It relocates an element horizontally and vertically using two coordinate values.",
          "options": [
            "transform: rotate()",
            "translate(x,y)",
            "skew()",
            "scale()"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 22
        },
        {
          "question": "It resizes an element using a proportional factor along its horizontal axis.",
          "options": [
            "scaleX()",
            "translate()",
            "skew()",
            "scale()"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 23
        },
        {
          "question": "It slants an element by changing the angle of its axes.",
          "options": [
            "transform: rotate()",
            "translate(x,y)",
            "scaleX()",
            "skew()"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 24
        },
        {
          "question": "It creates a two-dimensional layout based on rows and columns.",
          "options": [
            "float",
            "Media Queries",
            "CSS Grid",
            "Flexbox"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 25
        },
        {
          "question": "Which of the following are transition timing function values?",
          "options": [
            "none, forwards, backwards, both",
            "normal, reverse, alternate, alternate-reverse",
            "rotate, translate, scale, skew",
            "ease, linear, ease-in, ease-out, ease-in-out"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 26
        },
        {
          "question": "Which of the following are CSS transform functions?",
          "options": [
            "rotate, translate, scale, skew",
            "wrap, nowrap, wrap-reverse, row",
            "block, inline, inline-block, none",
            "ease, linear, ease-in, ease-out"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 27
        },
        {
          "question": "What are the three main techniques of responsive web design?",
          "options": [
            "Rotate, Translate, Scale",
            "Media Queries, CSS Grid, CSS Flexbox",
            "Hover, Transition, Animation",
            "Block, Inline, Inline-block"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS. From WD FT Quiz 1",
          "id": 28
        },
        {
          "question": "The :hover selector in CSS is classified as a:",
          "options": [
            "Pseudo-class",
            "Pseudo-element",
            "Keyframe",
            "Property"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 29
        },
        {
          "question": "Which pseudo-class styles a link at the moment it is selected (being clicked)?",
          "options": [
            "a:visited",
            "a:link",
            "a:active",
            "a:hover"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 30
        },
        {
          "question": "Which pseudo-class styles links that the user has already visited?",
          "options": [
            "a:link",
            "a:visited",
            "a:active",
            "a:hover"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 31
        },
        {
          "question": "It allows you to change property values smoothly (over a given duration) rather than having those changes take place instantly.",
          "options": [
            "Animation",
            "Float",
            "Transform",
            "Transition"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 32
        },
        {
          "question": "A shorthand property for setting the four transition properties into a single property.",
          "options": [
            "animation",
            "transition-timing-function",
            "transition",
            "transition-property"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 33
        },
        {
          "question": "Specifies the CSS property or properties to which the transition should apply.",
          "options": [
            "transition",
            "transition-property",
            "transition-duration",
            "transition-timing-function"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 34
        },
        {
          "question": "Specifies the speed curve of the transition effect.",
          "options": [
            "transition-timing-function",
            "transition-delay",
            "animation-direction",
            "transition-property"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 35
        },
        {
          "question": "What is the default value of transition-timing-function?",
          "options": [
            "linear",
            "ease-in-out",
            "step-start",
            "ease"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 36
        },
        {
          "question": "What is the default value of transition-delay?",
          "options": [
            "0s",
            "0.5s",
            "none",
            "1s"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 37
        },
        {
          "question": "Timing function with a slow start, fast middle, and slow end (default).",
          "options": [
            "ease-out",
            "ease",
            "linear",
            "ease-in"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 38
        },
        {
          "question": "Timing function with a slow start; useful when you want to gently introduce an element.",
          "options": [
            "ease-in-out",
            "linear",
            "ease-in",
            "ease-out"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 39
        },
        {
          "question": "Timing function with a slow end; often used for elements that are disappearing or fading out.",
          "options": [
            "ease",
            "linear",
            "ease-in",
            "ease-out"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 40
        },
        {
          "question": "Timing function with a slow start and end.",
          "options": [
            "ease-out",
            "linear",
            "ease",
            "ease-in-out"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 41
        },
        {
          "question": "CSS3 Transforms give a way to:",
          "options": [
            "Change property values smoothly over a given duration instead of instantly",
            "Rotate, relocate, resize, and skew HTML elements in two- and three-dimensional space",
            "Define the specific steps of an animation sequence with keyframes",
            "Apply different styles based on the device's screen width or orientation"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 42
        },
        {
          "question": "The value of the rotate() function is specified in:",
          "options": [
            "Pixels",
            "Unitless ratios",
            "Positive or negative degrees",
            "Percent of the parent width"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 43
        },
        {
          "question": "Which translate function moves an element along the vertical axis?",
          "options": [
            "translateY",
            "skewY",
            "scaleY",
            "translateX"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 44
        },
        {
          "question": "transform: scale(2, .5); makes an element:",
          "options": [
            "Twice as tall but half as wide",
            "Move 2px right and 0.5px down",
            "Twice as wide but half as tall",
            "Twice as big in both directions"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 45
        },
        {
          "question": "If you provide only one value for scale(), that value is:",
          "options": [
            "Used for scaleY only, and scaleX stays at 1",
            "Ignored, because scale needs two values",
            "Used for scaleX only, and scaleY stays at 1",
            "Used as the scaling factor in both directions"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS. scale(2) is the same as scaleX(2) and scaleY(2).",
          "id": 46
        },
        {
          "question": "If you provide only one value for skew(), it is:",
          "options": [
            "Used for skewY, and skewX is set to zero",
            "Used for skewX, and skewY is set to zero",
            "Ignored",
            "Used for both skewX and skewY"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 47
        },
        {
          "question": "To use CSS animation, you must first specify some:",
          "options": [
            "Keyframes",
            "Transitions",
            "Grid tracks",
            "Media queries"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS. Keyframes hold what styles the element will have at certain times.",
          "id": 48
        },
        {
          "question": "To get an animation to work, you must:",
          "options": [
            "Set display: grid",
            "Bind the animation to an element",
            "Add a :hover pseudo-class",
            "Use JavaScript"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 49
        },
        {
          "question": "Specifies the name of the @keyframes animation to apply to the element.",
          "options": [
            "animation-name",
            "animation-duration",
            "animation-fill-mode",
            "animation-direction"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 50
        },
        {
          "question": "Defines how long the animation should take to complete one cycle.",
          "options": [
            "animation-iteration-count",
            "transition-duration",
            "animation-delay",
            "animation-duration"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 51
        },
        {
          "question": "Defines whether the animation should play in reverse on alternate iterations.",
          "options": [
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-direction",
            "animation-timing-function"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 52
        },
        {
          "question": "animation-direction value where the animation alternates between playing forward and backward.",
          "options": [
            "reverse",
            "forwards",
            "alternate",
            "normal"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 53
        },
        {
          "question": "animation-fill-mode value where the animation retains the styles set in the first keyframe before it starts.",
          "options": [
            "backwards",
            "forwards",
            "none",
            "both"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 54
        },
        {
          "question": "Which value makes an animation loop indefinitely?",
          "options": [
            "animation-delay: 0s;",
            "animation-direction: alternate;",
            "animation-fill-mode: forwards;",
            "animation-iteration-count: infinite;"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 55
        },
        {
          "question": "The element starts on a new line and takes up the full width available.",
          "options": [
            "display: inline",
            "display: block",
            "display: none",
            "display: inline-block"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 56
        },
        {
          "question": "The element does not start on a new line and only takes up as much width as necessary.",
          "options": [
            "display: inline",
            "display: grid",
            "display: none",
            "display: block"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 57
        },
        {
          "question": "It allows setting width and height while remaining inline with other elements.",
          "options": [
            "display: block",
            "display: flex",
            "display: inline",
            "display: inline-block"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 58
        },
        {
          "question": "Which of the following is a block-level element?",
          "options": [
            "<a>",
            "<span>",
            "<section>",
            "<img>"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 59
        },
        {
          "question": "Which of the following is an inline element?",
          "options": [
            "<p>",
            "<span>",
            "<header>",
            "<div>"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 60
        },
        {
          "question": "With float: left; the element floats to the left of its container and other content:",
          "options": [
            "Starts on a new line below it",
            "Wraps around it on the right",
            "Wraps around it on the left",
            "Is hidden behind it"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 61
        },
        {
          "question": "It allows websites to adjust layout and content based on the screen size of the device being used.",
          "options": [
            "Web hosting",
            "CSS Animation",
            "Responsive web design",
            "CSS Transforms"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 62
        },
        {
          "question": "Which media query targets mobile devices (portrait and small phones)?",
          "options": [
            "@media screen and (max-width: 480px)",
            "@media screen and (max-width: 1024px)",
            "@media screen and (min-width: 1921px)",
            "@media screen and (max-width: 1366px)"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 63
        },
        {
          "question": "To start using Flexbox, you define a flex container by setting:",
          "options": [
            "position: flex;",
            "float: left;",
            "display: grid; or display: inline-grid;",
            "display: flex; or display: inline-flex;"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 64
        },
        {
          "question": "Defines in which direction the container wants to stack the flex items.",
          "options": [
            "order",
            "flex-wrap",
            "flex-direction",
            "align-items"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 65
        },
        {
          "question": "A shorthand property for setting both the flex-direction and flex-wrap properties.",
          "options": [
            "grid-template",
            "flex-basis",
            "flex",
            "flex-flow"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 66
        },
        {
          "question": "Aligns the flex items along the cross axis (vertical by default).",
          "options": [
            "justify-content",
            "align-items",
            "order",
            "flex-direction"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 67
        },
        {
          "question": "Specifies the order of the flex items.",
          "options": [
            "order",
            "flex-basis",
            "flex-shrink",
            "align-self"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 68
        },
        {
          "question": "Specifies how much a flex item will shrink relative to the rest of the flex items.",
          "options": [
            "flex-shrink",
            "flex-grow",
            "flex-basis",
            "order"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 69
        },
        {
          "question": "Specifies the initial length of a flex item.",
          "options": [
            "flex-shrink",
            "flex-flow",
            "align-content",
            "flex-basis"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 70
        },
        {
          "question": "A shorthand property for the flex-grow, flex-shrink, and flex-basis properties.",
          "options": [
            "grid-area",
            "flex-flow",
            "flex",
            "flex-direction"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 71
        },
        {
          "question": "An HTML element becomes a grid container when its display property is set to:",
          "options": [
            "block",
            "grid",
            "flex",
            "inline-block"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 72
        },
        {
          "question": "The fr unit sets the size of a track as:",
          "options": [
            "A percentage of the viewport height",
            "A fraction of the free space of the grid container",
            "A multiple of the font size of the parent",
            "A fixed number of pixels set by the browser"
          ],
          "answer": 1,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 73
        },
        {
          "question": "Shorthand for grid-column-start + grid-column-end.",
          "options": [
            "grid-area",
            "grid-template-columns",
            "grid-column",
            "column-gap"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 74
        },
        {
          "question": "Gives an item a name so that it can be referenced by a template created with the grid-template-areas property.",
          "options": [
            "justify-self",
            "grid-column",
            "grid-template",
            "grid-area"
          ],
          "answer": 3,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 75
        },
        {
          "question": "Aligns a grid item inside a cell along the block (column) axis.",
          "options": [
            "align-self",
            "justify-self",
            "justify-content",
            "align-content"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 76
        },
        {
          "question": "repeat() keyword: fit as many possible columns as possible on a row, even if they are empty.",
          "options": [
            "span",
            "minmax",
            "auto-fill",
            "auto-fit"
          ],
          "answer": 2,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 77
        },
        {
          "question": "repeat() keyword: fit whatever columns there are into the space, preferring to expand columns to fill space.",
          "options": [
            "auto-fit",
            "minmax",
            "auto-fill",
            "fr"
          ],
          "answer": 0,
          "explanation": "Chapter 5 - Advanced CSS",
          "id": 78
        },
        {
          "question": "A programming language commonly used to add interactivity and dynamic behavior to web pages.",
          "options": [
            "External JavaScript",
            "JavaScript",
            "Document Object Model (DOM)",
            "Validation"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 79
        },
        {
          "question": "A declaration keyword used for variables that can be reassigned and are limited to block scope.",
          "options": [
            "Function",
            "var",
            "constant",
            "let"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 80
        },
        {
          "question": "A declaration keyword used for variables whose values should not be reassigned after initialization.",
          "options": [
            "null",
            "constant",
            "let",
            "undefined"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 81
        },
        {
          "question": "A JavaScript statement used to display information in the browser console.",
          "options": [
            "console.log",
            "style",
            "addEventListener()",
            "innerText"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 82
        },
        {
          "question": "A way of inserting JavaScript directly into an HTML element using an event attribute.",
          "options": [
            "External JavaScript",
            "defer",
            "Nested Function",
            "Inline JavaScript"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 83
        },
        {
          "question": "A method of including JavaScript by linking a .js file outside of an HTML document.",
          "options": [
            "Document Object Model (DOM)",
            "async",
            "External JavaScript",
            "Inline JavaScript"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 84
        },
        {
          "question": "A primitive value that intentionally represents the absence of an object value.",
          "options": [
            "value",
            "undefined",
            "String",
            "null"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 85
        },
        {
          "question": "A variable has been declared but has not yet been assigned a value.",
          "options": [
            "constant",
            "Validation",
            "undefined",
            "null"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 86
        },
        {
          "question": "A data type that represents text enclosed in quotation marks.",
          "options": [
            "value",
            "String",
            "null",
            "Function"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 87
        },
        {
          "question": "A method that formats a number using a specified number of decimal places.",
          "options": [
            "toFixed()",
            "querySelectorAll()",
            "charAt()",
            "charCodeAt()"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 88
        },
        {
          "question": "A method that returns the Unicode value of a character at a specified position.",
          "options": [
            "charAt()",
            "charCodeAt()",
            "innerText",
            "toFixed()"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 89
        },
        {
          "question": "A method that returns the character at a specified position in a string.",
          "options": [
            "getElementById()",
            "charCodeAt()",
            "toFixed()",
            "charAt()"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 90
        },
        {
          "question": "A reusable block of code designed to perform a particular task.",
          "options": [
            "Function",
            "String",
            "Nested Function",
            "Validation"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 91
        },
        {
          "question": "A programming structure in which a function is declared inside another function.",
          "options": [
            "addEventListener()",
            "Function",
            "Nested Function",
            "Inline JavaScript"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 92
        },
        {
          "question": "It represents an HTML document as a structured tree of objects.",
          "options": [
            "JavaScript",
            "External JavaScript",
            "innerHTML",
            "Document Object Model (DOM)"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 93
        },
        {
          "question": "A property that retrieves or changes the visible text content of an element without interpreting HTML tags.",
          "options": [
            "innerText",
            "style",
            "value",
            "innerHTML"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 94
        },
        {
          "question": "A property that retrieves or changes the HTML content inside an element, including HTML tags.",
          "options": [
            "innerText",
            "innerHTML",
            "console.log",
            "value"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 95
        },
        {
          "question": "A method used to register an event handler for a specified event on an element.",
          "options": [
            "getElementById()",
            "querySelectorAll()",
            "addEventListener()",
            "console.log"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 96
        },
        {
          "question": "A method that returns all elements matching a specified CSS selector.",
          "options": [
            "addEventListener()",
            "querySelectorAll()",
            "charAt()",
            "getElementById()"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 97
        },
        {
          "question": "A method that retrieves an HTML element using its unique ID.",
          "options": [
            "getElementById()",
            "querySelectorAll()",
            "charAt()",
            "innerHTML"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 98
        },
        {
          "question": "A property used to modify CSS styles of an HTML element through JavaScript.",
          "options": [
            "innerText",
            "value",
            "style",
            "innerHTML"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 99
        },
        {
          "question": "A process that checks whether user input meets specified requirements before submission.",
          "options": [
            "Function",
            "defer",
            "Document Object Model (DOM)",
            "Validation"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 100
        },
        {
          "question": "It instructs the browser to execute an external script after the HTML document has been parsed.",
          "options": [
            "External JavaScript",
            "addEventListener()",
            "defer",
            "async"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 101
        },
        {
          "question": "It allows a script to be downloaded while the HTML document is being parsed and executed as soon as it is available.",
          "options": [
            "async",
            "Inline JavaScript",
            "defer",
            "console.log"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 102
        },
        {
          "question": "A property commonly used to retrieve or modify the value entered into an HTML form field.",
          "options": [
            "style",
            "innerText",
            "innerHTML",
            "value"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2",
          "id": 103
        },
        {
          "question": "Compared with Java, JavaScript is:",
          "options": [
            "Built around the class as its key construct",
            "Interpreted, not compiled",
            "Compiled, not interpreted",
            "Strongly typed"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript. In JavaScript the key construct is the function rather than the class.",
          "id": 104
        },
        {
          "question": "Where does JavaScript code run, compared to PHP?",
          "options": [
            "Both run only on the client's browser",
            "JS runs on the client's browser; PHP runs on the web server",
            "Both run only on the web server",
            "JS runs on the web server; PHP runs on the client's browser"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 105
        },
        {
          "question": "How are single-line comments written in JavaScript?",
          "options": [
            "// comment",
            "<!-- comment -->",
            "/* comment */",
            "# comment"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 106
        },
        {
          "question": "What naming convention should be followed for JavaScript variables and functions?",
          "options": [
            "snake_case (e.g., my_variable)",
            "PascalCase only (e.g., MyVariable)",
            "ALL CAPS (e.g., MYVARIABLE)",
            "camelCase (e.g., myVariable, calculateTotal)"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 107
        },
        {
          "question": "Semicolons at the end of JavaScript statements are:",
          "options": [
            "Required, or the code will not run",
            "Only used inside functions",
            "Optional, but good practice to use",
            "Not allowed"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 108
        },
        {
          "question": "JavaScript enables interactivity by responding to user actions (clicks, key presses, etc.). This is called:",
          "options": [
            "Object-oriented programming",
            "Event-driven programming",
            "Server-side programming",
            "Procedural programming"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 109
        },
        {
          "question": "Variables declared with var are:",
          "options": [
            "Function-scoped and hoisted (initialized with undefined)",
            "Block-scoped and in the temporal dead zone",
            "Block-scoped and cannot be reassigned",
            "Global only"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 110
        },
        {
          "question": "let and const variables exist in this state until the line where they are declared.",
          "options": [
            "Global scope",
            "Hoisting",
            "Function scope",
            "Temporal dead zone"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 111
        },
        {
          "question": "const obj = { name: 'John' }; obj.name = 'Jane'; What happens?",
          "options": [
            "obj is reset and becomes undefined",
            "Error: Assignment to constant variable is thrown",
            "It is allowed, because a property is changed, not the object itself",
            "obj.name stays 'John' because const objects cannot change"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 112
        },
        {
          "question": "A variable declared without the var keyword (e.g., one = 1;) becomes:",
          "options": [
            "A constant",
            "undefined",
            "A block-scoped variable",
            "A global variable"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 113
        },
        {
          "question": "JavaScript variables do not require a data type to be declared. This means they are:",
          "options": [
            "Loosely-typed",
            "Hoisted",
            "Immutable",
            "Strongly typed"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 114
        },
        {
          "question": "Which of the following is a non-primitive data type in JavaScript?",
          "options": [
            "Number",
            "Boolean",
            "Array",
            "Undefined"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript. Primitive: String, Number, Boolean, Null, Undefined. Non-primitive: Object, Date, Array.",
          "id": 115
        },
        {
          "question": "A string in JavaScript is immutable and can be concatenated using the:",
          "options": [
            "Dot (.) operator",
            "Plus (+) operator",
            "Ampersand (&) operator",
            "Asterisk (*) operator"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 116
        },
        {
          "question": "indexOf() and lastIndexOf() return this value when the search string is not found.",
          "options": [
            "null",
            "undefined",
            "-1",
            "0"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 117
        },
        {
          "question": "Which string method searches a string value and returns a new string with the search value replaced?",
          "options": [
            "match()",
            "charAt()",
            "concat()",
            "replace()"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 118
        },
        {
          "question": "Which Number method returns the number as a string with a specified total number of digits?",
          "options": [
            "valueOf()",
            "toPrecision()",
            "toFixed()",
            "toExponential()"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript. var num = 100; num.toPrecision(4) returns '100.0'.",
          "id": 119
        },
        {
          "question": "A Boolean can have only these two values:",
          "options": [
            "true or false",
            "null or undefined",
            "yes or no",
            "0 or 1"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 120
        },
        {
          "question": "date.getMonth() returns 3 for April because:",
          "options": [
            "Months start at 0 with January",
            "It returns the quarter of the year",
            "Months start at 1 with January",
            "It counts weeks, not months"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 121
        },
        {
          "question": "Array index starts at:",
          "options": [
            "1",
            "-1",
            "The array length",
            "0"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 122
        },
        {
          "question": "Which property returns the number of elements in an array?",
          "options": [
            "size",
            "length",
            "index",
            "count"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 123
        },
        {
          "question": "A null value in a conditional expression (e.g., if (myVar)) evaluates to:",
          "options": [
            "undefined",
            "true",
            "false",
            "An error"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 124
        },
        {
          "question": "A function that does not return anything is assigned to a variable: var result = Sum(5, 5); The value of result is:",
          "options": [
            "0",
            "null",
            "undefined",
            "10"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 125
        },
        {
          "question": "If you pass fewer arguments than parameters when calling a function, the rest of the parameters will be:",
          "options": [
            "Ignored with an error",
            "null",
            "0",
            "undefined"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript. If you pass more arguments, the additional arguments are ignored.",
          "id": 126
        },
        {
          "question": "All functions can use this array-like object, which includes the value of each parameter.",
          "options": [
            "arguments",
            "parameters",
            "values",
            "this"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript. It can be accessed by index but does not support array methods.",
          "id": 127
        },
        {
          "question": "How many values can a function return using the return keyword?",
          "options": [
            "Only numbers",
            "Zero or one value",
            "Exactly two values",
            "Unlimited values separated by commas"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 128
        },
        {
          "question": "In a nested function, the inner function:",
          "options": [
            "Must be declared with const",
            "Can access variables and parameters of the outer function",
            "Runs before the outer function",
            "Cannot access any variable of the outer function"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 129
        },
        {
          "question": "JavaScript written inside a <script> tag within the HTML file's <head> or <body> section.",
          "options": [
            "External JavaScript",
            "Nested JavaScript",
            "Inline JavaScript",
            "Internal JavaScript"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 130
        },
        {
          "question": "If the script is external, which attribute must be used to specify the file path?",
          "options": [
            "src",
            "href",
            "link",
            "path"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 131
        },
        {
          "question": "The DOM is a tree-like model where every element is a:",
          "options": [
            "String",
            "Function",
            "Node",
            "Class"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 132
        },
        {
          "question": "In the DOM, these are functions associated with objects that can perform actions on elements.",
          "options": [
            "Attributes",
            "Methods",
            "Properties",
            "Events"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript. Properties retrieve or set the value of an element's attributes or characteristics.",
          "id": 133
        },
        {
          "question": "Which method selects the first element that matches an ID, class, or tag (CSS selector)?",
          "options": [
            "querySelectorAll()",
            "getElementsByClassName()",
            "getElementsByTagName()",
            "querySelector()"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 134
        },
        {
          "question": "Which method returns all the elements having the given class name?",
          "options": [
            "getElementsByClassName()",
            "querySelector()",
            "getElementsByName()",
            "getElementById()"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 135
        },
        {
          "question": "Which method returns all the elements of a specified tag name?",
          "options": [
            "getElementsByClassName()",
            "querySelector()",
            "getElementsByTagName()",
            "getElementById()"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 136
        },
        {
          "question": "Why do most web developers prefer JavaScript (client-side) form validation?",
          "options": [
            "It replaces the need for a web server",
            "It stores the data directly in the database",
            "It can never be bypassed by the user",
            "Data processing is faster than server-side validation"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 137
        },
        {
          "question": "The change in the state of an object is known as a(n):",
          "options": [
            "Node",
            "Event",
            "Method",
            "Property"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 138
        },
        {
          "question": "The process of reacting over events is called:",
          "options": [
            "Event Bubbling",
            "Validation",
            "Event Handling",
            "Hoisting"
          ],
          "answer": 2,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 139
        },
        {
          "question": "In element.addEventListener(event, function, useCapture), what is the default value of useCapture?",
          "options": [
            "false (event bubbling)",
            "undefined",
            "null",
            "true (event capturing)"
          ],
          "answer": 0,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 140
        },
        {
          "question": "Mouse event triggered when an element is double-clicked.",
          "options": [
            "click",
            "mousemove",
            "mouseover",
            "dblclick"
          ],
          "answer": 3,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 141
        },
        {
          "question": "Mouse event triggered when the mouse pointer leaves an element.",
          "options": [
            "mouseover",
            "mouseout",
            "mousemove",
            "click"
          ],
          "answer": 1,
          "explanation": "Chapter 6 - Introduction to JavaScript",
          "id": 142
        },
        {
          "type": "output_tracing",
          "question": "num_functions.js - Determine the exact output produced by the program.",
          "code": "let number = 50;\nfunction firstFunction() {\n   let number = 5;\n   number += 10;\n   return number;\n}\nfunction secondFunction() {\n   number *= 2 ;\n   return number;\n}\nconsole.log(number);\nconsole.log(firstFunction());\nconsole.log(secondFunction());\nconsole.log(number - firstFunction());\nconsole.log(firstFunction () + secondFunction())",
          "answer": "50\n15\n100\n85\n215",
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2.",
          "id": 143
        },
        {
          "type": "output_tracing",
          "question": "num_functions2.js - Determine the exact output produced by the program.",
          "code": "let value = 5;\nfunction outerFunction() {\n   let value = 10;\n   function innerFunction() {\n      let value = 25;\n      return value * 2;\n   }\n   return innerFunction() + value;\n}\nlet result = outerFunction();\nconsole.log(result);\nconsole.log(value);\nconsole.log(result + result);\nconsole.log(value + value);\nconsole.log(result + value);",
          "answer": "60\n5\n120\n10\n65",
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2.",
          "id": 144
        },
        {
          "type": "output_tracing",
          "question": "message.js - Determine the exact output produced by the program.",
          "code": "let message = \"Sabi ko sa sarili ko wala lang to!\";\nlet first = message.charAt(0);\nlet second = message.charAt(3);\nlet pos1 = message.indexOf(\"a\");\nlet pos2 = message.lastIndexOf(\"aray\");\nlet combined = first.concat(second);\nlet combined1= second.concat(first);\nlet finalText = combined.toUpperCase();\nconsole.log(first);\nconsole.log(second);\nconsole.log(pos1);\nconsole.log(pos2);\nconsole.log(finalText);",
          "answer": "S\ni\n1\n-1\nSI",
          "explanation": "Chapter 6 - Introduction to JavaScript. From WD FT Quiz 2.",
          "id": 145
        },
        {
          "type": "output_tracing",
          "question": "score.js - Determine the exact output produced by the program.",
          "code": "let score = 20;\nfunction addPoints(points) {\n   score += points;\n   return score;\n}\nfunction resetScore() {\n   let score = 0;\n   return score;\n}\nconsole.log(addPoints(5));\nconsole.log(resetScore());\nconsole.log(score);\nconsole.log(addPoints(score));\nconsole.log(score - resetScore());",
          "answer": "25\n0\n25\n50\n50",
          "explanation": "Chapter 6 - Introduction to JavaScript. Global vs local variables.",
          "id": 146
        },
        {
          "type": "output_tracing",
          "question": "nested_count.js - Determine the exact output produced by the program.",
          "code": "let count = 3;\nfunction outer(num) {\n   let count = num * 2;\n   function inner() {\n      return count + 4;\n   }\n   return inner() * 2;\n}\nconsole.log(outer(5));\nconsole.log(count);\nconsole.log(outer(count));\nconsole.log(outer(1) + count);\nconsole.log(count * outer(0));",
          "answer": "28\n3\n20\n15\n24",
          "explanation": "Chapter 6 - Introduction to JavaScript. Nested functions.",
          "id": 147
        },
        {
          "type": "output_tracing",
          "question": "block_scope.js - Determine the exact output produced by the program.",
          "code": "let x = 10;\nvar y = 5;\nif (true) {\n   let x = 20;\n   var y = 15;\n   console.log(x);\n   console.log(y);\n}\nconsole.log(x);\nconsole.log(y);\nconsole.log(x + y);",
          "answer": "20\n15\n10\n15\n25",
          "explanation": "Chapter 6 - Introduction to JavaScript. let is block-scoped; var is not.",
          "id": 148
        },
        {
          "type": "output_tracing",
          "question": "hoisting.js - Determine the exact output produced by the program.",
          "code": "function showValues() {\n   console.log(a);\n   var a = 8;\n   console.log(a);\n   a += 4;\n   console.log(a * 2);\n}\nshowValues();\nvar total = 3;\ntotal = total + \"3\";\nconsole.log(total);\nconsole.log(total + 1);",
          "answer": "undefined\n8\n24\n33\n331",
          "explanation": "Chapter 6 - Introduction to JavaScript. var hoisting and string concatenation.",
          "id": 149
        },
        {
          "type": "output_tracing",
          "question": "greet.js - Determine the exact output produced by the program.",
          "code": "function greet(firstName, lastName) {\n   return \"Hello \" + firstName + \" \" + lastName;\n}\nfunction countArgs() {\n   return arguments.length;\n}\nconsole.log(greet(\"Steve\", \"Jobs\"));\nconsole.log(greet(\"Bill\"));\nconsole.log(greet(\"Ada\", \"Lovelace\", \"Ms.\"));\nconsole.log(greet());\nconsole.log(countArgs(\"a\", \"b\", \"c\"));",
          "answer": "Hello Steve Jobs\nHello Bill undefined\nHello Ada Lovelace\nHello undefined undefined\n3",
          "explanation": "Chapter 6 - Introduction to JavaScript. Fewer or more arguments, and the arguments object.",
          "id": 150
        },
        {
          "type": "output_tracing",
          "question": "returns.js - Determine the exact output produced by the program.",
          "code": "function sum(a, b) {\n   return a + b;\n}\nfunction multiply(a, b) {\n   console.log(a * b);\n}\nlet result = sum(10, 20);\nconsole.log(result);\nlet product = multiply(4, 5);\nconsole.log(product);\nconsole.log(sum(result, 5));\nconsole.log(sum(\"10\", 20));",
          "answer": "30\n20\nundefined\n35\n1020",
          "explanation": "Chapter 6 - Introduction to JavaScript. return vs console.log.",
          "id": 151
        },
        {
          "type": "output_tracing",
          "question": "word.js - Determine the exact output produced by the program.",
          "code": "let word = \"JavaScript\";\nconsole.log(word.length);\nconsole.log(word.charAt(4));\nconsole.log(word.indexOf(\"a\"));\nconsole.log(word.lastIndexOf(\"a\"));\nconsole.log(word.toUpperCase());",
          "answer": "10\nS\n1\n3\nJAVASCRIPT",
          "explanation": "Chapter 6 - Introduction to JavaScript. String length and methods.",
          "id": 152
        },
        {
          "type": "output_tracing",
          "question": "final_exam.js - Determine the exact output produced by the program.",
          "code": "let text = \"Final exam na bukas!\";\nlet a = text.charAt(6);\nlet b = text.indexOf(\"a\");\nlet c = text.lastIndexOf(\"a\");\nlet d = text.indexOf(\"Exam\");\nlet e = a.concat(text.charAt(0)).toUpperCase();\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\nconsole.log(d);\nconsole.log(e);",
          "answer": "e\n3\n17\n-1\nEF",
          "explanation": "Chapter 6 - Introduction to JavaScript. String methods.",
          "id": 153
        },
        {
          "type": "output_tracing",
          "question": "web_dev.js - Determine the exact output produced by the program.",
          "code": "let first = \"Web\";\nlet second = \"Dev\";\nlet joined = first.concat(\" \", second);\nconsole.log(joined);\nconsole.log(joined.replace(\"Dev\", \"Design\"));\nconsole.log(joined.charCodeAt(0));\nconsole.log(joined.toLowerCase());\nconsole.log(joined.indexOf(\"dev\"));",
          "answer": "Web Dev\nWeb Design\n87\nweb dev\n-1",
          "explanation": "Chapter 6 - Introduction to JavaScript. concat, replace, charCodeAt, toLowerCase.",
          "id": 154
        },
        {
          "type": "output_tracing",
          "question": "prices.js - Determine the exact output produced by the program.",
          "code": "let price = 125.456;\nlet qty = 2;\nlet total = price * qty;\nconsole.log(price.toFixed(2));\nconsole.log(total.toFixed(1));\nconsole.log(qty.toFixed(2));\nconsole.log((100).toPrecision(4));\nconsole.log(qty.toString() + qty);",
          "answer": "125.46\n250.9\n2.00\n100.0\n22",
          "explanation": "Chapter 6 - Introduction to JavaScript. Number methods.",
          "id": 155
        },
        {
          "type": "output_tracing",
          "question": "fruits.js - Determine the exact output produced by the program.",
          "code": "let fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits.length);\nconsole.log(fruits[1]);\nfruits.push(\"mango\");\nconsole.log(fruits.length);\nconsole.log(fruits[fruits.length - 1]);\nconsole.log(fruits.indexOf(\"cherry\"));",
          "answer": "3\nbanana\n4\nmango\n2",
          "explanation": "Chapter 6 - Introduction to JavaScript. Arrays.",
          "id": 156
        },
        {
          "type": "output_tracing",
          "question": "student.js - Determine the exact output produced by the program.",
          "code": "const student = { name: \"Ana\", grade: 85 };\nstudent.grade = 90;\nconsole.log(student.name);\nconsole.log(student.grade);\nstudent.name = \"Ben\";\nconsole.log(student.name + \" \" + student.grade);\nlet bonus = 5;\nbonus = bonus * 2;\nconsole.log(student.grade + bonus);\nconsole.log(student.name.charAt(0));",
          "answer": "Ana\n90\nBen 90\n100\nB",
          "explanation": "Chapter 6 - Introduction to JavaScript. const objects can change properties.",
          "id": 157
        },
        {
          "type": "output_tracing",
          "question": "null_check.js - Determine the exact output produced by the program.",
          "code": "let a;\nlet b = null;\nconsole.log(a);\nconsole.log(b);\nif (b) {\n   console.log(\"has value\");\n} else {\n   console.log(\"no value\");\n}\nconsole.log(a + \"!\");\nb = 10;\nconsole.log(b * 2);",
          "answer": "undefined\nnull\nno value\nundefined!\n20",
          "explanation": "Chapter 6 - Introduction to JavaScript. null and undefined.",
          "id": 158
        },
        {
          "type": "output_tracing",
          "question": "list.html + script.js - What text does each element display after script.js runs?",
          "code": "<!-- index.html -->\n<ul>\n   <li class=\"li1\" id=\"idL1\">ONE</li>\n   <li class=\"li1\" id=\"idL2\">TWO</li>\n   <li class=\"li1\" id=\"idL3\">THREE</li>\n</ul>\n\n// script.js\ndocument.getElementsByClassName('li1')[1].innerHTML = \"2\";\ndocument.getElementsByTagName('li')[2].innerHTML = \"3\";\ndocument.getElementById('idL1').innerHTML = \"1\";",
          "answer": "1\n2\n3",
          "instruction": "Type the text each element displays on the page, top to bottom, one per line.",
          "explanation": "Chapter 6 - Introduction to JavaScript. DOM selectors and innerHTML.",
          "id": 159
        },
        {
          "type": "output_tracing",
          "question": "headings.html + script.js - What text does each element display after script.js runs?",
          "code": "<!-- index.html -->\n<h1 class=\"title\" id=\"h1\">First</h1>\n<h1 class=\"title\" id=\"h2\">Second</h1>\n<p class=\"note\">Note A</p>\n<p class=\"note\">Note B</p>\n\n// script.js\ndocument.getElementById(\"h2\").innerHTML = \"Updated\";\ndocument.querySelector(\".note\").innerText = \"Changed\";\ndocument.getElementsByTagName(\"h1\")[0].innerHTML = \"Top\";\ndocument.querySelectorAll(\".note\")[1].innerHTML = \"Last\";",
          "answer": "Top\nUpdated\nChanged\nLast",
          "instruction": "Type the text each element displays on the page, top to bottom, one per line.",
          "explanation": "Chapter 6 - Introduction to JavaScript. getElementById, querySelector, getElementsByTagName.",
          "id": 160
        },
        {
          "question": "A service that allows individuals or organizations to publish their websites on the internet or make them accessible via the World Wide Web.",
          "options": [
            "Web hosting",
            "Web design",
            "Domain name",
            "File Transfer Protocol"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 161
        },
        {
          "question": "When you start a website, its 'name' is the:",
          "options": [
            "Control panel",
            "Root directory",
            "Domain name",
            "Web server"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 162
        },
        {
          "question": "When you start a website, its 'location', where the site is hosted, is the:",
          "options": [
            "Web server",
            "Subdomain",
            "Domain name",
            "Web browser"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 163
        },
        {
          "question": "Also called website address, it is the name that people type in the browser to open a certain website.",
          "options": [
            "Subdomain",
            "IP address",
            "Web host",
            "Domain name"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 164
        },
        {
          "question": "These are the highest level in the hierarchy of domain names.",
          "options": [
            "Internationalized Domain Names (IDNs)",
            "Top-Level Domains (TLDs)",
            "Subdomains",
            "Second-Level Domains (SLDs)"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 165
        },
        {
          "question": "Which generic TLD is used by accredited educational institutions?",
          "options": [
            ".org",
            ".gov",
            ".edu",
            ".net"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 166
        },
        {
          "question": ".ph, .jp, .uk, and .us are examples of:",
          "options": [
            "Sponsored TLDs (sTLDs)",
            "New gTLDs",
            "Second-Level Domains",
            "Country-Code TLDs (ccTLDs)"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 167
        },
        {
          "question": "In \"example.com,\" the part \"example\" is the:",
          "options": [
            "Second-Level Domain (SLD)",
            "Sponsored TLD",
            "Subdomain",
            "Top-Level Domain (TLD)"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 168
        },
        {
          "question": "In \"blog.example.com,\" the part \"blog\" is a:",
          "options": [
            "Top-Level Domain (TLD)",
            "Third-Level Domain (Subdomain)",
            "Sponsored TLD (sTLD)",
            "Second-Level Domain (SLD)"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 169
        },
        {
          "question": ".tech, .store, .app, .xyz, and .guru are examples of:",
          "options": [
            "Internationalized Domain Names",
            "Sponsored TLDs (sTLDs)",
            "New gTLDs",
            "Country-Code TLDs"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 170
        },
        {
          "question": "Specialized domains restricted to certain groups or organizations, such as .aero, .museum, and .coop.",
          "options": [
            "Subdomains",
            "New gTLDs",
            "Sponsored TLDs (sTLDs)",
            "Generic TLDs"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 171
        },
        {
          "question": "Domains that support non-ASCII characters, such as Chinese, Arabic, or Cyrillic characters.",
          "options": [
            "Internationalized Domain Names (IDNs)",
            "Country-Code TLDs (ccTLDs)",
            "Sponsored TLDs (sTLDs)",
            "New Generic TLDs (gTLDs)"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 172
        },
        {
          "question": "Which platform is recommended for creating an ecommerce website?",
          "options": [
            "Web builders",
            "Joomla",
            "Drupal",
            "PrestaShop"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 173
        },
        {
          "question": "Which platforms are recommended for creating a standard website or a blog?",
          "options": [
            "Drupal and Magento",
            "WordPress and Joomla",
            "OpenCart and OsCommerce",
            "PrestaShop and Magento"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 174
        },
        {
          "question": "FTP, the credentials you get from your hosting dashboard or cPanel, stands for:",
          "options": [
            "File Transfer Protocol",
            "Folder Transfer Path",
            "File Text Protocol",
            "Fast Transfer Program"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 175
        },
        {
          "question": "What is the usual port number for FTP?",
          "options": [
            "443",
            "21",
            "3306",
            "80"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 176
        },
        {
          "question": "When uploading through the File Manager, website files go into the root directory, usually named:",
          "options": [
            "uploads or assets",
            "system32 or bin",
            "public_html or htdocs",
            "root_files or www_data"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 177
        },
        {
          "question": "If your website is compressed into a .zip file, you should:",
          "options": [
            "Send it to the hosting provider by email",
            "Rename it to .html and upload it as it is",
            "Import it into the database using phpMyAdmin",
            "Upload and extract it within the file manager"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 178
        },
        {
          "question": "For dynamic websites, the .sql file is imported using:",
          "options": [
            "The File Manager's extract option",
            "phpMyAdmin or a similar database management tool",
            "The DNS settings at the domain registrar",
            "The FTP host and port number"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 179
        },
        {
          "question": "When updating the database connection in your code, the database host is usually:",
          "options": [
            "localhost",
            "ns1.yourhost.com",
            "public_html",
            "ftp.yourwebsite.com"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 180
        },
        {
          "question": "To use a custom domain, you point it to the hosting nameservers by updating the:",
          "options": [
            "File permissions of public_html",
            "FTP port number in cPanel",
            "Database settings in phpMyAdmin",
            "DNS settings at your domain registrar"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 181
        },
        {
          "question": "DNS propagation can take up to:",
          "options": [
            "7 days",
            "5 minutes",
            "48 hours",
            "30 days"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 182
        },
        {
          "question": "Which file permissions allow public access, as recommended when troubleshooting?",
          "options": [
            "000 for directories, 111 for files",
            "777 for directories, 777 for files",
            "755 for directories, 644 for files",
            "644 for directories, 755 for files"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 183
        },
        {
          "question": "Maintaining a website after it is uploaded includes:",
          "options": [
            "Deleting the database after each update",
            "Monitoring performance and backing up regularly",
            "Turning off the website during weekends",
            "Buying a new domain name every month"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 184
        },
        {
          "question": "These TLDs are the most common and widely used, such as .com, .org, and .net.",
          "options": [
            "Generic TLDs (gTLDs)",
            "Sponsored TLDs (sTLDs)",
            "Country-Code TLDs (ccTLDs)",
            "Internationalized Domain Names (IDNs)"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 185
        },
        {
          "question": "Which TLD is used by U.S. government agencies?",
          "options": [
            ".org",
            ".net",
            ".mil",
            ".gov"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 186
        },
        {
          "question": "Subdomains can be used to:",
          "options": [
            "Replace the top-level domain of a website with a new one",
            "Create distinct sections of a website or host separate sites under one domain",
            "Translate a domain name into non-ASCII characters",
            "Store the website's database and its .sql backup file"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 187
        },
        {
          "question": "In the hosting control panel (e.g., cPanel), where do you create a new database and user?",
          "options": [
            "File Manager",
            "DNS settings",
            "Error logs",
            "MySQL Databases section"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 188
        },
        {
          "question": "Where do you check for errors when debugging server-side scripts such as PHP on a host?",
          "options": [
            "The hosting provider's error logs",
            "The browser's bookmarks list",
            "The domain registrar's invoice",
            "The website's public_html folder name"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 189
        }
      ]
    }
  ],
  "sia": [
    {
      "id": "sia_finals",
      "term": "Finals",
      "title": "Finals Exam Reviewer",
      "description": "",
      "timeLimit": 60,
      "questions": []
    }
  ]
};

export const pointers = {
  "ea": [
    {
      "id": "ea_finals_pointers",
      "term": "Finals",
      "title": "Finals Pointers — Chapters 9 to 11",
      "description": "Compact reviewer for Future Architecture Views, the EA Management Plan, and Investment Planning and Project Management (CPIC).",
      "file": "/pointers/EA_Finals_Pointers.pdf",
      "pages": 8
    }
  ],
  "cc6": [
    {
      "id": "cc6_finals_pointers",
      "term": "Finals",
      "title": "Finals Pointers — Chapters 5 to 8",
      "description": "Compact reviewer for Query Languages, Data Organization and Architecture, Data Governance, and Special Purpose Databases.",
      "file": "/pointers/CC6_Finals_Pointers.pdf",
      "pages": 8
    }
  ],
  "wd": [
    {
      "id": "wd_finals_pointers",
      "term": "Finals",
      "title": "Finals Pointers — Chapters 5 to 7",
      "description": "Compact reviewer for Advanced CSS, Introduction to JavaScript and the DOM (with output tracing tips), and Web Hosting.",
      "file": "/pointers/WD_Finals_Pointers.pdf",
      "pages": 7
    }
  ],
  "oop": [
    {
      "id": "oop_finals_pointers",
      "term": "Finals",
      "title": "Finals Pointers — Modules 10 to 14",
      "description": "Compact reviewer for Code Reuse and Class Hierarchy, Interfaces, Abstract Class and Interface, Polymorphism, and Modularity.",
      "file": "/pointers/OOP_Finals_Pointers.pdf",
      "pages": 7
    }
  ],
  "ipt1": [
    {
      "id": "ipt1_finals_pointers",
      "term": "Finals",
      "title": "Finals Pointers — Web Services, APIs, and Secure Data Exchange",
      "description": "Compact reviewer for Web Services and SOAP, REST and Consuming APIs, and Reliable and Secure Data Exchange (serialization, access control, data protection).",
      "file": "/pointers/IPT1_Finals_Pointers.pdf",
      "pages": 8
    }
  ]
};

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getExamsBySubject(subjectId) {
  return exams[subjectId] || [];
}

export function getExamById(subjectId, examId) {
  return getExamsBySubject(subjectId).find((e) => e.id === examId) || null;
}

export function getPointersBySubject(subjectId) {
  return pointers[subjectId] || [];
}

/** Accent colors per exam term. Unknown terms fall back to the lilac theme. */
const TERM_COLORS = {
  Prelim:       { color: "#3b6cd4", bg: "#dbeafe", border: "rgba(147,197,253,0.6)", strip: "#93c5fd" },
  Midterm:      { color: "#7c55c8", bg: "#ede0ff", border: "rgba(174,142,240,0.5)", strip: "#9370db" },
  "Pre-Finals": { color: "#be185d", bg: "#ffe4f0", border: "rgba(244,114,182,0.5)", strip: "#f9a8d4" },
  Finals:       { color: "#be4e8b", bg: "#ffe0ef", border: "rgba(249,123,173,0.45)", strip: "#f97bad" },
};

export function termStyle(term) {
  return TERM_COLORS[term] || TERM_COLORS.Midterm;
}
