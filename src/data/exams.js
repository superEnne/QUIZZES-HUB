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
          "question": "In the home architecture analogy, having future EA views is like having:",
          "options": [
            "A full set of blueprints for the modification of an existing home or for building a new home",
            "The owner's budget and the builder's schedule",
            "The architect's project plan showing the design, approach, timeframe, and sequencing of work",
            "A list of furniture for each room of the house"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views. The architect's project plan is the analogy for the EA Management Plan (Chapter 10).",
          "id": 4
        },
        {
          "question": "The development of future EA views is important to an enterprise because it supports:",
          "options": [
            "Software coding, testing, and debugging",
            "Hardware repair",
            "Resource planning and decision-making",
            "Payroll processing"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 5
        },
        {
          "question": "Initiatives in the very early stages of consideration can be left out of future views until they have:",
          "options": [
            "Approval from all end-users, the webmaster, the research analyst, and the data architect",
            "A signed vendor contract, installed hardware, and trained end-users",
            "A completed Post-Implementation Review and a lessons-learned report",
            "Firm backing from sponsors, strong business cases, and viable technical solutions"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 6
        },
        {
          "question": "Candidate initiatives are better documented in:",
          "options": [
            "A special section of the EA Management Plan",
            "The Data Dictionary",
            "The Network Inventory",
            "The current view of the Strategic Plan"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 7
        },
        {
          "question": "CONOPS stands for:",
          "options": [
            "Continuity of Operations",
            "Concept of Operations",
            "Configuration of Operating Systems",
            "Control of Operations"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 8
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
          "id": 9
        },
        {
          "question": "The role that future scenarios play in developing EA future views is identifying:",
          "options": [
            "A range of operating options and planning assumptions for the enterprise",
            "The single exact operating environment the enterprise will face in the future",
            "The final cost and schedule of every planned IT project",
            "The complete list of IT resources currently in operation"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 10
        },
        {
          "question": "When an enterprise thinks through its scenarios in advance, its initiatives are described as:",
          "options": [
            "Counter-moves",
            "Defensive moves",
            "Offensive moves",
            "Neutral moves"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views. Probable responses are defensive moves.",
          "id": 11
        },
        {
          "question": "Enterprises should identify a range of internal and external factors from this analysis in deciding which future CONOPS scenarios to document.",
          "options": [
            "Post-Implementation Review",
            "Cost-Benefit Analysis",
            "CRUD Matrix",
            "SWOT Analysis"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 12
        },
        {
          "question": "Why is having a number of future scenarios helpful to an enterprise?",
          "options": [
            "It reduces the number of EA artifacts that must be documented and maintained at each level of the framework",
            "It is impossible to predict which internal/external factors will create a helpful or hostile operating environment",
            "Each scenario replaces the need for a separate Strategic Plan document",
            "Only one scenario can be documented per year, so several years are needed"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 13
        },
        {
          "question": "Which of the following is a Strategic Level EA artifact?",
          "options": [
            "Rack Elevation Diagram (NI-7)",
            "Logical Data Model (D-5)",
            "Balanced Scorecard (S-5)",
            "Swim Lane Process Diagram (B-3)"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 14
        },
        {
          "question": "Which plan provides more detailed descriptions of how IT initiatives will support the enterprise's Strategic Plan?",
          "options": [
            "Knowledge Management Plan",
            "Security Plan",
            "COOP Plan",
            "E-Business or E-Government Plan"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 15
        },
        {
          "question": "How often should updated strategic plans be published to reflect changes in direction and priorities?",
          "options": [
            "Every few years",
            "Every week",
            "Only once",
            "Every month"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 16
        },
        {
          "question": "Future scenarios should be documented the same way as the current scenario, which is as:",
          "options": [
            "An integrated narrative and set of planning assumptions",
            "A list of hardware and software products",
            "A data dictionary of entities and formats",
            "A network connectivity diagram and an equipment inventory"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 17
        },
        {
          "question": "High-level resource planning supported by IT-related strategic initiatives is also known as the:",
          "options": [
            "Systems analysis and design method (SADM) process",
            "Capital planning and investment control (CPIC) process",
            "Post-implementation review (PIR) process",
            "EA configuration management (CM) process"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 18
        },
        {
          "question": "Changes to strategic goals and initiatives in the future views will require new or modified:",
          "options": [
            "Hardware and software product lists",
            "Data dictionaries and object libraries",
            "Cable plant and network diagrams",
            "Outcome and output measures of success"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 19
        },
        {
          "question": "Which of the following is a Business Level EA artifact?",
          "options": [
            "Network Inventory (NI-2)",
            "SWOT Analysis (S-2)",
            "Investment Business Case (B-8)",
            "System Interface Matrix (SA-3)"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 20
        },
        {
          "question": "Influencing factors such as new customer requirements, competitive strategies, new technologies, and changes in resource availability are also known as:",
          "options": [
            "Drivers",
            "Baselines",
            "Waivers",
            "Artifacts"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 21
        },
        {
          "question": "Which is NOT one of the four general types of changes to business services?",
          "options": [
            "Major reengineering of an existing process",
            "Minor improvement of an existing process",
            "Introduction of a completely new process",
            "Outsourcing of an existing process to a vendor"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views. The four types: new process, elimination, major reengineering, and minor improvement.",
          "id": 22
        },
        {
          "question": "Reviews of existing business services, to find those that are obsolete or duplicative, should be performed periodically by:",
          "options": [
            "End-user representatives",
            "The EA tool expert",
            "Line-of-business managers",
            "The webmaster"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 23
        },
        {
          "question": "Documenting approved changes to business services helps maintain this kind of alignment with strategic goals and initiatives.",
          "options": [
            "Horizontal alignment",
            "Upward alignment",
            "Downward alignment",
            "External alignment"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views. Downward alignment ensures the lower three levels are adjusted to support the process changes.",
          "id": 24
        },
        {
          "question": "The Project Management Plan (PMP) is described as a:",
          "options": [
            "Network diagram",
            "One-time document",
            "Legal contract",
            "Living document"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 25
        },
        {
          "question": "The current view of the PMP is developed in this stage of the project lifecycle.",
          "options": [
            "Maintenance stage",
            "Disposal stage",
            "Requirements planning stage",
            "Evaluation stage"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 26
        },
        {
          "question": "SADM stands for:",
          "options": [
            "Systems Analysis and Design Methods",
            "Software Application Delivery Management",
            "Strategic Architecture Development Model",
            "System Audit and Data Monitoring"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 27
        },
        {
          "question": "A future view of a PMP may NOT be needed with methods that develop the entire system capability in one effort, such as:",
          "options": [
            "Evolutionary (spiral) development",
            "Waterfall or rapid application development",
            "Incremental (phased) development",
            "Phased ERP implementation"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 28
        },
        {
          "question": "Which is an example where having both a current and future view of the PMP would be beneficial?",
          "options": [
            "A one-time purchase of desktop computers",
            "Phased implementation of large ERP projects with several modules",
            "A waterfall project where the whole system is delivered in one release",
            "A small website developed in a single effort"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 29
        },
        {
          "question": "The part of the PMP that documents the value of the investment to the enterprise.",
          "options": [
            "Sequencing plan",
            "Data dictionary",
            "Investment business case",
            "Network inventory"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 30
        },
        {
          "question": "The determination that another use of the invested funds is not warranted relates to:",
          "options": [
            "Opportunity cost",
            "Total cost of ownership",
            "Sunk cost",
            "Replacement cost"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 31
        },
        {
          "question": "Which of the following is an Information Level EA artifact?",
          "options": [
            "Use Case Narrative and Diagram (B-7)",
            "Concept of Operations Diagram (S-4)",
            "Cable Plant Diagram (NI-6)",
            "Activity/Entity (CRUD) Matrix (D-7)"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 32
        },
        {
          "question": "Future changes in data models can be integrated into current views by using special notation such as:",
          "options": [
            "Dashed lines and symbols",
            "Colored backgrounds",
            "Page numbers",
            "Different fonts"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 33
        },
        {
          "question": "One of the most powerful reasons for adopting an Object-Oriented (OO) approach is that:",
          "options": [
            "OO removes the need for logical and physical data models in system design",
            "Objects never need to be changed once they are created",
            "Objects can be modified with minimal effort to reflect changes in requirements",
            "OO only works with proprietary products from one vendor"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 34
        },
        {
          "question": "These provide taxonomies and standard formats for data entities but do not store actual data.",
          "options": [
            "Object Libraries",
            "Data Dictionaries",
            "Knowledge Warehouses",
            "Databases"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 35
        },
        {
          "question": "These store both the formats/standards and the actual modules of code that constitute an object.",
          "options": [
            "Network Inventories",
            "Data Dictionaries",
            "Swim Lane Diagrams",
            "Object Libraries"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 36
        },
        {
          "question": "The protection of parts of the code module from alteration is called:",
          "options": [
            "Configuration management",
            "Interoperability",
            "Encapsulation",
            "Inheritance"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 37
        },
        {
          "question": "Which of the following is a Systems/Services Level EA artifact?",
          "options": [
            "System Evolution Diagram (SA-8)",
            "Business Plan (B-1)",
            "Building Blueprints (NI-4)",
            "Physical Data Model (D-6)"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 38
        },
        {
          "question": "These are where the designed interface points in the programming code of commercial software are located.",
          "options": [
            "System Interface Matrices (SA-3)",
            "Application Program Interfaces (APIs)",
            "Data Dictionaries / Object Libraries",
            "Network Center Diagrams (NI-5)"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 39
        },
        {
          "question": "Web-based services exchange information through the:",
          "options": [
            "OSI and TCP/IP network models",
            "Cable plant and wiring closets",
            "COOP Plan and security plan",
            "NAP/ESB Web Service Platform"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 40
        },
        {
          "question": "WSDL descriptions of web services are kept in the:",
          "options": [
            "UDDI Registry",
            "EA repository glossary",
            "Network Inventory",
            "Data Dictionary"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 41
        },
        {
          "question": "Which of the following is an Infrastructure Level EA artifact?",
          "options": [
            "System Data Flow Diagram (SA-4)",
            "Rack Elevation Diagram (NI-7)",
            "Strategic Plan (S-1)",
            "Information Exchange Matrix (D-2)"
          ],
          "answer": 1,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 42
        },
        {
          "question": "Network technical standards in the future view include changes reflected in models such as:",
          "options": [
            "IDEF-0 and swim lane models",
            "The waterfall and spiral models",
            "The Balanced Scorecard and SWOT",
            "The OSI model and TCP/IP model"
          ],
          "answer": 3,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 43
        },
        {
          "question": "Future views of security documentation include the related security documentation for applications and databases, and the:",
          "options": [
            "Balanced Scorecard",
            "Use Case Diagram",
            "COOP Plan",
            "Business Plan"
          ],
          "answer": 2,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 44
        },
        {
          "question": "The future view of EACRs consists of an archive of:",
          "options": [
            "Approved, but yet to be implemented EA Change Requests",
            "Current hardware and software inventories",
            "Completed projects and their post-implementation reviews",
            "Rejected EA Change Requests from previous years"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 45
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
          "id": 46
        },
        {
          "type": "true_false",
          "question": "Future EA views provide an authoritative reference for the architect and homeowner to use in discussing options and changes during development.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 9 - Developing Future Architecture Views",
          "id": 47
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
          "id": 48
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
          "id": 49
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
          "id": 50
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
          "id": 51
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
          "id": 52
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
          "id": 53
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
          "id": 54
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
          "id": 55
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
          "id": 56
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
          "id": 57
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
          "id": 58
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
          "id": 59
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
          "id": 60
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
          "id": 61
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
          "id": 62
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
          "id": 63
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
          "id": 64
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
          "id": 65
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
          "id": 66
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
          "id": 67
        },
        {
          "question": "The document that describes how an enterprise will manage the transition of its current processes and resources to those that will be needed in the future.",
          "options": [
            "Strategic Plan",
            "Project Management Plan",
            "EA Management Plan",
            "Knowledge Management Plan"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 68
        },
        {
          "question": "The transition from the current EA to the future EA is:",
          "options": [
            "A one-time event that is completed within a single fiscal year",
            "Not part of EA management, since it belongs only to project management and the PMP",
            "Handled only by the webmaster when the EA website is updated",
            "An ongoing activity, as new resources are implemented and become part of the current EA"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 69
        },
        {
          "question": "The EA Management Plan is updated at regular intervals (e.g., annually) to provide:",
          "options": [
            "A completely new EA framework for each year",
            "Clear version control for changes in current and future views",
            "New hardware and software purchases for every department and office",
            "Daily status reports for every ongoing project"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 70
        },
        {
          "question": "Where should the EA Management Plan be archived?",
          "options": [
            "In the on-line EA repository",
            "In the UDDI Registry",
            "In the Data Dictionary",
            "In the CIO's personal files"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 71
        },
        {
          "question": "In the home architecture analogy, the EA Management Plan is like:",
          "options": [
            "A full set of blueprints for modifying an existing home or for building a completely new one",
            "The architect's project plan, showing design, approach, timeframe, and sequencing of work",
            "The homeowner's insurance policy that covers damage during remodeling",
            "The builder's list of tools and materials needed for each room"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 72
        },
        {
          "question": "Which part of the EA Management Plan contains Governance and Principles, EA Roles and Responsibilities, and the EA Program Budget?",
          "options": [
            "Part 2. EA Current Architecture Summary",
            "Part 3. EA Future Architecture Summary",
            "Part 4. EA Glossary and References",
            "Part 1. EA Program Management"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 73
        },
        {
          "question": "Which part of the EA Management Plan contains Future Operating Scenarios, Planning Assumptions, and the Sequencing Plan?",
          "options": [
            "Part 4. EA Glossary and References",
            "Part 2. EA Current Architecture Summary",
            "Part 3. EA Future Architecture Summary",
            "Part 1. EA Program Management"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 74
        },
        {
          "question": "EA governance is best described through a narrative that provides EA program policy and an accompanying:",
          "options": [
            "Data dictionary of all EA entities",
            "Flow chart that shows how and when decisions are made",
            "Cable plant diagram of each building",
            "Rack elevation diagram of the enterprise network center"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 75
        },
        {
          "question": "These articulate the enterprise's values as they relate to the EA and guide the EA program's establishment and management.",
          "options": [
            "EA output measures",
            "EA waivers",
            "EA principles",
            "EA artifacts"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 76
        },
        {
          "question": "Which is an example of an EA principle?",
          "options": [
            "Only proprietary products should be used",
            "Stakeholders should not participate in EA",
            "IT should always be purchased first, before a business case is written",
            "The recognition that IT is normally a means and not an end in itself"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 77
        },
        {
          "question": "For EA to be viewed as part of the strategic planning process, business executives must:",
          "options": [
            "See the value of the EA program in supporting the outcomes that matter to them",
            "Personally approve every hardware and software purchase in the enterprise",
            "Write all of the EA documentation themselves at every level",
            "Manage the EA repository and the EA software application"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 78
        },
        {
          "question": "An effective format for showing EA roles and responsibilities is a:",
          "options": [
            "Table",
            "Swim lane",
            "Pie chart",
            "Rack elevation"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 79
        },
        {
          "question": "EA team position whose role is to be the champion of the EA program, provide resources, and assist in resolving high-level EA issues.",
          "options": [
            "Chief Architect",
            "Research Analyst",
            "Webmaster",
            "Sponsor"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 80
        },
        {
          "question": "EA team position that facilitates the establishment of the EA program, leads the resolution of high-level issues, and integrates EA and other governance.",
          "options": [
            "Solutions Architect",
            "Executive Sponsor",
            "Chief Information Officer (CIO)",
            "Line of Business Manager"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 81
        },
        {
          "question": "EA team position that manages the EA program, selects the EA framework, identifies EA standards, and manages the EA configuration management sub-process.",
          "options": [
            "Chief Information Officer (CIO)",
            "Chief Architect",
            "Line of Business Manager",
            "Systems Architect"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 82
        },
        {
          "question": "EA team position responsible for maintenance of the EA software application and the EA repository.",
          "options": [
            "Data Architect",
            "EA Tool Expert",
            "Research Analyst",
            "Webmaster"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 83
        },
        {
          "question": "EA team position that provides technical analysis and design support for database-related EA components.",
          "options": [
            "Systems Architect",
            "Solutions Architect",
            "EA Tool Expert",
            "Data Architect"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 84
        },
        {
          "question": "EA team position whose role is Requirements Identification / QA, identifying end-user requirements and giving feedback on solutions.",
          "options": [
            "Sponsor",
            "Research Analyst",
            "End-User Representative",
            "Webmaster"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 85
        },
        {
          "question": "The EA program budget is documented by fiscal year and over the total lifecycle so that this is identified.",
          "options": [
            "Total cost of ownership (TCO)",
            "Market value",
            "Opportunity cost",
            "Return on investment (ROI)"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 86
        },
        {
          "question": "The initial estimate of EA program costs represents the:",
          "options": [
            "Output measure",
            "Final cost of the EA program",
            "Waiver",
            "\"Baseline\" for EA program funding"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 87
        },
        {
          "question": "These measures identify progress being made toward some new end-state, such as better EA component integration.",
          "options": [
            "Outcome measures",
            "Output measures",
            "Baseline measures",
            "Cost measures"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 88
        },
        {
          "question": "These measures provide data on activities and things, such as how many databases exist.",
          "options": [
            "Outcome measures",
            "Output measures",
            "Strategic measures",
            "Qualitative measures"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 89
        },
        {
          "question": "\"Reduce IT project planning average costs by ten percent within one year\" is an example of a(n):",
          "options": [
            "Planning assumption",
            "Output measure",
            "Outcome measure",
            "EA principle"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 90
        },
        {
          "question": "Part 2 of the EA Management Plan helps the present role of IT to be analyzed from either a:",
          "options": [
            "Top-down or bottom-up perspective",
            "Daily or weekly perspective",
            "Vendor or customer perspective",
            "Left-to-right or right-to-left perspective"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 91
        },
        {
          "question": "According to section 2.2, EA components should not be procured unless:",
          "options": [
            "They are proprietary products from a single vendor",
            "There is a strong business case that supports investment",
            "They appear in the hardware/software list",
            "The webmaster requests them for the EA website"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 92
        },
        {
          "question": "In section 2.3 (Systems and applications), comments should focus on degree of integration, potential scalability, user satisfaction, and:",
          "options": [
            "The number of office chairs",
            "Employee birthdays",
            "The color scheme of applications",
            "Any reliance on proprietary solutions"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 93
        },
        {
          "question": "Section 2.4 discusses how well internal and external networks, systems, and cable plants integrate to create a:",
          "options": [
            "Manual infrastructure",
            "Temporary infrastructure",
            "\"Seamless\" infrastructure",
            "Proprietary infrastructure"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 94
        },
        {
          "question": "Why should specific IT security information NOT be part of the EA Management Plan?",
          "options": [
            "Security is not part of EA",
            "It belongs in the glossary",
            "It is too expensive to print",
            "It could reveal vulnerabilities"
          ],
          "answer": 3,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 95
        },
        {
          "question": "The standards section documents this, which provides EA standards for voice, data, video, and IT security.",
          "options": [
            "Balanced Scorecard (S-5)",
            "Data Dictionary / Object Library",
            "Technical Standards Reference Model (TSRM)",
            "Capital Equipment Inventory (NI-3)"
          ],
          "answer": 2,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 96
        },
        {
          "question": "According to section 2.7, the most valuable resource an enterprise often has is its:",
          "options": [
            "Hardware",
            "People",
            "Software licenses",
            "Buildings"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 97
        },
        {
          "question": "In the example of three future operating scenarios, Scenario 2 represents:",
          "options": [
            "An aggressive business strategy in a good market environment",
            "A defensive business strategy during a market down-turn",
            "Continuing with the status quo",
            "Closing the enterprise"
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
          "type": "true_false",
          "question": "The EA Management Plan documents the enterprise's performance gaps, resource requirements, planned solutions, a sequencing plan, and a summary of the current and future architecture.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 104
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
          "id": 105
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
          "id": 106
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
          "id": 107
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
          "id": 108
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
          "id": 109
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
          "id": 110
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
          "id": 111
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
          "id": 112
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
          "id": 113
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
          "id": 114
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
          "id": 115
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
          "id": 116
        },
        {
          "type": "true_false",
          "question": "In the example scenarios, Scenario 1 is an aggressive business strategy in a good market environment.",
          "options": [
            "True",
            "False"
          ],
          "answer": 1,
          "explanation": "Chapter 10 - Developing an EA Management Plan. Scenario 1 is continuing with the status quo; Scenario 2 is the aggressive strategy.",
          "id": 117
        },
        {
          "type": "true_false",
          "question": "If Future Scenario 2 is pursued in the example, several new e-commerce systems may need to be built and new manufacturing capacity supported.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 10 - Developing an EA Management Plan",
          "id": 118
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
          "id": 119
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
          "id": 120
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
          "id": 121
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
          "id": 122
        },
        {
          "question": "The management and decision-making process associated with the planning, selection, control, and evaluation of investments in resources, including EA components.",
          "options": [
            "Capital Planning",
            "Strategic Planning",
            "Project Management",
            "Configuration Management"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 123
        },
        {
          "question": "What are the four phases of the CPIC process?",
          "options": [
            "Analyze, design, implement, maintain",
            "Plan, design, build, test",
            "Plan, select, control, and evaluate",
            "Select, fund, build, retire"
          ],
          "answer": 2,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 124
        },
        {
          "question": "The EA program is only effective if the enterprise's resources are effectively applied to:",
          "options": [
            "Marketing campaigns only",
            "Office decorations",
            "Employee recreation",
            "Gaps in operational performance"
          ],
          "answer": 3,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management. If there were no gaps, there would be no requirement for new or upgraded EA components.",
          "id": 125
        },
        {
          "question": "In the home architecture analogy for this chapter, for an architect's design to be approved:",
          "options": [
            "The owner must draw all of the blueprints without the help of the architect",
            "The house must be larger than any other house in the area",
            "The owner's requirements must be met within the budget that is available",
            "The builder must finish construction before the design is made"
          ],
          "answer": 2,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 126
        },
        {
          "question": "Which of the following is promoted by the CPIC process?",
          "options": [
            "Encouraging a culture of learning by evaluating each completed investment",
            "Avoiding business cases so that investments can be approved faster",
            "Approving every proposed investment regardless of its value",
            "Ignoring operational performance gaps until projects are completed"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 127
        },
        {
          "question": "In which CPIC phase are requirements, the business case, and the project plan developed?",
          "options": [
            "Control Phase",
            "Planning Phase",
            "Evaluation Phase",
            "Selection Phase"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 128
        },
        {
          "question": "The CPIC phase where a funding decision is made for a proposed investment in an EA component.",
          "options": [
            "Control Phase",
            "Planning Phase",
            "Evaluation Phase",
            "Selection Phase"
          ],
          "answer": 3,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 129
        },
        {
          "question": "The CPIC phase where ongoing projects are evaluated for how closely cost, schedule, and performance milestones are being met, and how well risk is managed.",
          "options": [
            "Control Phase",
            "Planning Phase",
            "Selection Phase",
            "Evaluation Phase"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 130
        },
        {
          "question": "The CPIC phase where completed IT projects receive a Post-Implementation Review (PIR) and operational systems are reviewed for continuing value.",
          "options": [
            "Selection Phase",
            "Planning Phase",
            "Evaluation Phase",
            "Control Phase"
          ],
          "answer": 2,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 131
        },
        {
          "question": "In the CPIC cycle diagram, what is at the center connecting all four phases?",
          "options": [
            "Data Dictionary",
            "Project Management Plan",
            "Balanced Scorecard",
            "EA Management Plan"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 132
        },
        {
          "question": "Governance processes, including CPIC, should be overseen by a(n):",
          "options": [
            "External vendor that supplies the enterprise's ERP solution",
            "Webmaster and research analyst of the EA team",
            "Group of end-user representatives chosen from each line of business",
            "Executive Steering Committee comprised of the enterprise's top executives"
          ],
          "answer": 3,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 133
        },
        {
          "question": "Project and Program Managers control successful outcomes by managing five primary aspects. Which of the following is one of them?",
          "options": [
            "Mitigating risk",
            "Designing the logo",
            "Hiring the CIO",
            "Writing the glossary"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management. The five: managing scope, controlling costs, maintaining the schedule, achieving product performance, mitigating risk.",
          "id": 134
        },
        {
          "question": "A temporary endeavor undertaken to create a unique product, service, or result.",
          "options": [
            "Portfolio",
            "Project",
            "Process",
            "Program"
          ],
          "answer": 1,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 135
        },
        {
          "question": "An ongoing endeavor that manages existing processes/resources, or oversees the development of new processes/resources via projects.",
          "options": [
            "Plan",
            "Project",
            "Program",
            "Phase"
          ],
          "answer": 2,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 136
        },
        {
          "question": "In the Project Management Plan outline, Alternatives Analysis, Cost-Benefit Analysis, and Return on Investment Analysis are part of the:",
          "options": [
            "Security and Privacy",
            "Project Controls",
            "Architectural Alignment",
            "Business Case"
          ],
          "answer": 3,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 137
        },
        {
          "question": "In the Project Management Plan outline, the Schedule and Work Breakdown Structure and Risk Management are part of:",
          "options": [
            "Strategic Alignment",
            "Project Requirements",
            "Business Case",
            "Project Controls"
          ],
          "answer": 3,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 138
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
          "id": 139
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
          "id": 140
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
          "id": 141
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
          "id": 142
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
          "id": 143
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
          "id": 144
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
          "id": 145
        },
        {
          "type": "true_false",
          "question": "In the home architecture analogy, the architect works with a builder to ensure the design is properly constructed, the schedule is met, and the budget is not exceeded.",
          "options": [
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "Chapter 11 - The Role of Investment Planning and Project Management",
          "id": 146
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
          "question": "According to the module, procedural paradigms are exemplified by languages like:",
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
          "question": "According to the module, data is said to be the new:",
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
          "question": "If inheritance is NOT available, a change in the representation of employee number must be made:",
          "options": [
            "Individually in every relevant class, which may lead to inconsistency",
            "Automatically by the compiler for every class that uses it",
            "Only in main(), since attributes are defined there for all classes",
            "Only once, in the Employee class, and it propagates to every subclass"
          ],
          "answer": 0,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 4
        },
        {
          "question": "If inheritance IS available, a change in the representation of employee number is limited to the:",
          "options": [
            "Last subclass created, and it propagates to the superclass",
            "Manager class, and it is copied to the other subclasses",
            "Employee (super)class, and it propagates to the subclasses",
            "main() method, and it is passed to every class"
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
          "question": "In the HomeCare example, the manager's pay was wrong because:",
          "options": [
            "The Manager class had no constructor, so the basic salary was never set at all",
            "The secretary's salary was added to it, since both classes share getPay() in Employee",
            "The commission was counted twice, since Manager also extends SalesPerson in the hierarchy",
            "The allowance was omitted, since getPay() in Employee returns only the basic salary"
          ],
          "answer": 3,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 7
        },
        {
          "question": "What is the disadvantage of removing getPay() from Employee and defining it individually in every subclass?",
          "options": [
            "The program cannot compile, because getPay() must exist in the Employee superclass",
            "The definition is repeated in all subclasses, which is inefficient and hard to maintain",
            "Subclasses can no longer have constructors, so the objects cannot be created at all",
            "Each subclass inherits two getPay() methods, which causes conflicts at run time"
          ],
          "answer": 1,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 8
        },
        {
          "question": "Which approach to fixing the manager's pay is better?",
          "options": [
            "Keep getPay() in Employee and redefine it in the Manager class",
            "Remove the Manager class from the hierarchy",
            "Compute the pay inside main() for every employee",
            "Remove getPay() from Employee and define it in every subclass"
          ],
          "answer": 0,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. It enhances software reuse and minimizes the effect of change on other classes.",
          "id": 9
        },
        {
          "question": "A redefining method has the same method name and parameter definition as the redefined method, but:",
          "options": [
            "It must have more parameters",
            "It must have a different name",
            "It cannot return a value",
            "Its implementation may differ"
          ],
          "answer": 3,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 10
        },
        {
          "question": "When adding a new class into an existing class hierarchy, it is always recommended that the new class be created as a:",
          "options": [
            "Superclass of all existing classes",
            "Separate program",
            "Subclass in the class hierarchy",
            "Copy of an existing class"
          ],
          "answer": 2,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 11
        },
        {
          "question": "To add the new Triangle class to the Shape program, which of the following is involved?",
          "options": [
            "Change the getName() method of every existing class",
            "Create a new Triangle class as a subclass of Shape",
            "Rewrite the Circle and Square classes",
            "Delete the Shape class"
          ],
          "answer": 1,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 12
        },
        {
          "question": "Subclassing is a desired design practice in object-oriented software engineering because:",
          "options": [
            "It prevents code reuse",
            "It has minimal impact on software maintenance",
            "It removes the need for constructors in subclasses",
            "It makes every attribute public"
          ],
          "answer": 1,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. Subclassing is specialization.",
          "id": 13
        },
        {
          "question": "Deleting subclasses that are NOT superclasses to other classes:",
          "options": [
            "Requires rewriting the superclass",
            "Breaks every other class in the class hierarchy",
            "Has a minimal impact on software maintenance",
            "Is not allowed in Java"
          ],
          "answer": 2,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 14
        },
        {
          "question": "In the Shape example, the name attribute is declared private, so other objects get its value through:",
          "options": [
            "Direct access to the name variable from any class",
            "The main() method, which stores the name for others",
            "The calculateArea() method defined in each subclass",
            "The getName() method defined in the Shape class"
          ],
          "answer": 3,
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy",
          "id": 15
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Redefining getPay()): what does this program print?",
          "code": "class Person {\n   private String name;\n   Person(String aName) { name = aName; }\n   public String getName() { return name; }\n}\nclass Employee extends Person {\n   private int basicSalary;\n   Employee(String aName, int aBasicSalary) {\n      super(aName);\n      basicSalary = aBasicSalary;\n   }\n   public int getPay() { return basicSalary; }\n   public static void main(String argv[]) {\n      Employee[] staff = { new Manager(\"Simon\", 9000, 2000),\n                           new Secretary(\"Selene\", 2500),\n                           new Clerk(\"Charmaine\", 1200) };\n      for (int i = 0; i < staff.length; i++)\n         System.out.println(staff[i].getName() + \" has a pay of \" + staff[i].getPay());\n   }\n}\nclass Manager extends Employee {\n   private int allowance;\n   Manager(String aName, int aBasicSalary, int aAllowance) {\n      super(aName, aBasicSalary);\n      allowance = aAllowance;\n   }\n   public int getPay() { return super.getPay() + allowance; }\n}\nclass Secretary extends Employee {\n   Secretary(String aName, int aBasicSalary) { super(aName, aBasicSalary); }\n}\nclass Clerk extends Employee {\n   Clerk(String aName, int aBasicSalary) { super(aName, aBasicSalary); }\n}",
          "answer": "Simon has a pay of 11000\nSelene has a pay of 2500\nCharmaine has a pay of 1200",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. Manager redefines getPay() (same name and parameters), so its version adds the allowance; Secretary and Clerk inherit Employee's getPay().",
          "id": 16
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Constructor chain with super()): what does this program print?",
          "code": "class Person {\n   Person() { System.out.println(\"Person created\"); }\n}\nclass Employee extends Person {\n   Employee() {\n      super();\n      System.out.println(\"Employee created\");\n   }\n}\npublic class Technician extends Employee {\n   Technician() {\n      super();\n      System.out.println(\"Technician created\");\n   }\n   public static void main(String argv[]) {\n      Technician t = new Technician();\n   }\n}",
          "answer": "Person created\nEmployee created\nTechnician created",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. super() runs the parent constructor first, so the messages print from the top of the hierarchy down.",
          "id": 17
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Adding Triangle to the hierarchy): what does this program print?",
          "code": "class Shape {\n   private String name;\n   Shape(String aName) { name = aName; }\n   public String getName() { return name; }\n   public float calculateArea() { return 0.0f; }\n   public static void main(String argv[]) {\n      Shape shapeArray[] = { new Square(\"Square S\"),\n                             new Triangle(\"Triangle T\"),\n                             new Shape(\"Shape X\") };\n      for (int i = 0; i < shapeArray.length; i++)\n         System.out.println(shapeArray[i].getName() + \": \" + shapeArray[i].calculateArea());\n   }\n}\nclass Square extends Shape {\n   private int side;\n   Square(String aName) { super(aName); side = 3; }\n   public float calculateArea() {\n      int area;\n      area = side * side;\n      return area;\n   }\n}\nclass Triangle extends Shape {\n   private int base, height;\n   Triangle(String aName) { super(aName); base = 4; height = 5; }\n   public float calculateArea() { return 0.5f * base * height; }\n}",
          "answer": "Square S: 9.0\nTriangle T: 10.0\nShape X: 0.0",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 10 - Code Reuse, Making Changes in Class Hierarchy. calculateArea() returns a float, so the int area 9 prints as 9.0. Triangle was added as a subclass, so Shape and Square did not change.",
          "id": 18
        },
        {
          "question": "The capability to inherit from more than one class is called:",
          "options": [
            "Multiple inheritance",
            "Encapsulation",
            "Single inheritance",
            "Polymorphism"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 19
        },
        {
          "question": "Which of the following languages allows a subclass to inherit from more than one parent class?",
          "options": [
            "Java",
            "Both C++ and Java",
            "C++",
            "Neither C++ nor Java"
          ],
          "answer": 2,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 20
        },
        {
          "question": "Why is multiple inheritance prohibited in Java?",
          "options": [
            "Interfaces are slower than classes, so Java limits each class to one parent",
            "Parent classes may have identical names, and super() would be unclear with multiple parents",
            "Constructors are not allowed in Java subclasses, so super() cannot be called",
            "Java does not support classes with parents, so only interfaces can be inherited by a subclass"
          ],
          "answer": 1,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 21
        },
        {
          "question": "A class inheriting from a superclass that has inherited from another superclass represents:",
          "options": [
            "Single inheritance with multiple generations",
            "Multiple inheritance through an interface",
            "Multiple inheritance with a single generation",
            "An anonymous inner class with two parents"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 22
        },
        {
          "question": "Java's alternative to multiple inheritance is the:",
          "options": [
            "Static variable",
            "Abstract method",
            "Package",
            "Interface"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 23
        },
        {
          "question": "In an interface, all methods (if any) are implicitly:",
          "options": [
            "protected and final",
            "public and static",
            "public and abstract",
            "private and static"
          ],
          "answer": 2,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 24
        },
        {
          "question": "In an interface, all data items (if any) are implicitly:",
          "options": [
            "protected and static",
            "public, static, and final",
            "public and abstract",
            "private and abstract"
          ],
          "answer": 1,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 25
        },
        {
          "question": "An interface is a description of:",
          "options": [
            "What a class does, but not how it is done",
            "The constructor of a class",
            "The private data of a class",
            "How a class does something, but not what it does"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 26
        },
        {
          "question": "Which keyword is placed in a class header to use an interface?",
          "options": [
            "extends",
            "super",
            "interface",
            "implements"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 27
        },
        {
          "question": "Whereas extends lets a subclass use nonprivate, nonoverridden members of its parent, implements requires the class to:",
          "options": [
            "Inherit the parent's private data and methods",
            "Call super() twice",
            "Become an interface",
            "Implement its own version of each method"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 28
        },
        {
          "question": "The interface construct in Java is used with single inheritance to provide:",
          "options": [
            "Some form of multiple inheritance",
            "Some form of information hiding",
            "Some form of static binding",
            "Some form of operation overloading"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 29
        },
        {
          "question": "class SalesManager extends SalesPerson implements Manage { ... } means that SalesManager:",
          "options": [
            "Is derived from Manage and implements the SalesPerson interface",
            "Cannot have a constructor",
            "Is derived from SalesPerson and implements the Manage interface",
            "Is an interface"
          ],
          "answer": 2,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 30
        },
        {
          "question": "In the Manage interface, authorize() is declared without a body. The SalesManager class must:",
          "options": [
            "Call authorize() from the main() method only",
            "Implement the abstract method authorize()",
            "Declare authorize() as private",
            "Remove authorize() from Manage"
          ],
          "answer": 1,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 31
        },
        {
          "question": "Choosing between SalesManager as a subclass of SalesPerson or of Manager (with a CanTakeOrder interface) is:",
          "options": [
            "A modeling problem resolved with more information on the problem domain and requirements",
            "Not allowed in Java, because a class cannot implement an interface and extend a class",
            "Always solved by using SalesPerson, because collectPayment() is already defined there",
            "Decided automatically by the compiler based on which superclass has more methods"
          ],
          "answer": 0,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 32
        },
        {
          "question": "When a class implements Worker, it must include a work() method or else:",
          "options": [
            "The class becomes an interface, and its descendants inherit work() from it",
            "The Worker interface must be changed so that work() is no longer abstract",
            "The program still runs, and Java creates an empty work() method automatically for the class",
            "The class must be declared abstract, and its descendants must implement the method"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 33
        },
        {
          "question": "A WorkingDog extends Dog and implements Worker. Which method is it required to contain because of implements Worker?",
          "options": [
            "speak()",
            "getHoursOfTraining()",
            "work()",
            "setName()"
          ],
          "answer": 2,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 34
        },
        {
          "question": "Why make many classes implement the Worker interface instead of each just having a work() method?",
          "options": [
            "The classes can share private data, because interfaces store each object's fields",
            "You do not have to guess the name of the method that shows the work the objects perform",
            "The classes no longer need constructors, because the interface creates their objects",
            "The classes run faster, because interface methods are bound at compile time only"
          ],
          "answer": 1,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 35
        },
        {
          "question": "A class that implements an interface represents a situation similar to inheritance. A WorkingDog therefore:",
          "options": [
            "\"Is a\" Dog and \"is a\" Worker, but it is not an Animal",
            "\"Is a\" Worker, but it is no longer a Dog or an Animal",
            "\"Is an\" Animal only, since interfaces do not count as types",
            "\"Is a\" Dog, \"is an\" Animal, and \"is a\" Worker"
          ],
          "answer": 3,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface",
          "id": 36
        },
        {
          "question": "What is the output of this program?",
          "code": "interface Worker {\n   void work();\n}\nclass Dog {\n   public void speak() { System.out.println(\"Woof!\"); }\n}\nclass WorkingDog extends Dog implements Worker {\n   public void work() {\n      speak();\n      System.out.println(\"I am a dog who works\");\n   }\n}\npublic class DemoWorkingDog {\n   public static void main(String[] args) {\n      WorkingDog aSheepHerder = new WorkingDog();\n      aSheepHerder.speak();\n      aSheepHerder.work();\n   }\n}",
          "options": [
            "Woof! / I am a dog who works",
            "The program does not compile, because Dog does not implement Worker",
            "Woof! / Woof! / I am a dog who works",
            "I am a dog who works / Woof!"
          ],
          "answer": 2,
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface. Output: Woof! / Woof! / I am a dog who works. work() calls the inherited speak() first, so Woof! appears twice.",
          "id": 37
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (One interface, many classes): what does this program print?",
          "code": "interface Turner {\n   void turn();\n}\nclass Leaf implements Turner {\n   public void turn() { System.out.println(\"Changing colors\"); }\n}\nclass Page implements Turner {\n   public void turn() { System.out.println(\"Going to the next page\"); }\n}\nclass Pancake implements Turner {\n   public void turn() { System.out.println(\"Flipping\"); }\n}\npublic class TurnDemo {\n   public static void main(String[] args) {\n      Turner[] things = { new Pancake(), new Leaf(), new Page(), new Pancake() };\n      for (int i = 1; i < things.length; i++)\n         things[i].turn();\n   }\n}",
          "answer": "Changing colors\nGoing to the next page\nFlipping",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface. The loop starts at index 1, so the first Pancake is skipped. Each class writes its own turn().",
          "id": 38
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (extends and implements): what does this program print?",
          "code": "interface Manage {\n   void authorize();\n}\nclass SalesPerson {\n   public void sell() { System.out.println(\"Selling products\"); }\n}\npublic class SalesManager extends SalesPerson implements Manage {\n   public void authorize() {\n      System.out.println(\"Authorizing discount\");\n      sell();\n   }\n   public static void main(String[] args) {\n      SalesManager boss = new SalesManager();\n      boss.sell();\n      boss.authorize();\n   }\n}",
          "answer": "Selling products\nAuthorizing discount\nSelling products",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 11 - Concepts of Interface, Inheritance Using Interface. sell() is inherited through extends; authorize() had to be written because of implements Manage.",
          "id": 39
        },
        {
          "question": "What happens with the statement Animal myPet = new Animal(\"Murphy\"); if Animal is an abstract class?",
          "options": [
            "The program does not compile, because no Animal objects can exist",
            "It compiles, but speak() prints nothing because it has no method body",
            "It creates a Dog object instead, because Dog extends the Animal class",
            "It creates an Animal object normally, because the constructor exists"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 40
        },
        {
          "question": "You create an abstract class such as Animal only so that you can:",
          "options": [
            "Use it as a package",
            "Extend it",
            "Instantiate it",
            "Hide it from subclasses"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 41
        },
        {
          "question": "If you do not want to create Dog objects but want Dog to be a parent to further subclasses, then the Dog class:",
          "options": [
            "Also must be abstract",
            "Must be an interface",
            "Must be private",
            "Must be final"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 42
        },
        {
          "question": "The @Override annotation for a method such as speak() is:",
          "options": [
            "Used only in interfaces, never in subclasses",
            "Not necessary, but it provides error checking and documentation",
            "Used to create a new object of the parent class",
            "Required, or the program will not compile at all without it"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 43
        },
        {
          "question": "Using the same method name to indicate different implementations is called:",
          "options": [
            "Bundling",
            "Encapsulation",
            "Polymorphism",
            "Static binding"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 44
        },
        {
          "question": "Data attributes declared in an interface construct are always:",
          "options": [
            "protected and static",
            "public and non-final",
            "private and abstract",
            "static and final"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface. Static because there is only one copy; final because they are not modifiable.",
          "id": 45
        },
        {
          "question": "Names for values with a specific meaning, such as RED = 1 in the Colourable interface, are called:",
          "options": [
            "Packages",
            "Constants",
            "References",
            "Parameters"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 46
        },
        {
          "question": "All methods in an interface are:",
          "options": [
            "Static methods that the implementing class may not override",
            "Constructors that run when a class implements the interface",
            "Private methods hidden from every class that uses the interface",
            "Abstract methods that any class using the interface must implement"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 47
        },
        {
          "question": "Methods in an interface may NOT be static because:",
          "options": [
            "Interfaces cannot contain methods, only constant data attributes",
            "Static methods must have constructors, which interfaces do not have",
            "Static methods, being class specific, are never abstract",
            "Static methods are always private, so no class could call them"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 48
        },
        {
          "question": "ColourTest implements Colourable but does not implement getColour(). How must ColourTest be declared?",
          "options": [
            "abstract class ColourTest implements Colourable",
            "interface ColourTest implements Colourable",
            "static class ColourTest implements Colourable",
            "final class ColourTest implements Colourable"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 49
        },
        {
          "question": "Why must setColour() in ColourTest be declared public?",
          "options": [
            "Because ColourTest is declared abstract, all of its methods must be public",
            "It is a method of the Colourable interface, and interface methods are public",
            "Because main() is static, every method it can call must also be public",
            "Because setColour() has a parameter, and methods with parameters must be public"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 50
        },
        {
          "question": "Abstract classes and interfaces are similar in that:",
          "options": [
            "You cannot instantiate concrete objects from either one",
            "A class can extend any number of either of them",
            "Both must have constructors that create objects",
            "Both can contain only private methods and private data fields"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 51
        },
        {
          "question": "Abstract classes differ from interfaces because:",
          "options": [
            "Abstract classes cannot have variables, but interfaces can have any kind of variable",
            "Interfaces can contain constructors and nonabstract methods, but abstract classes cannot",
            "Interfaces can be instantiated with new, but abstract classes can never be instantiated",
            "Abstract classes can contain nonabstract methods, but all interface methods must be abstract"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 52
        },
        {
          "question": "A class can inherit from how many abstract superclasses, and implement how many interfaces?",
          "options": [
            "None of either",
            "Any number of abstract superclasses, but only one interface",
            "Only one abstract superclass, but any number of interfaces",
            "Only one of each"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 53
        },
        {
          "question": "According to the comparison table, which is true about constructors?",
          "options": [
            "Neither can ever have a constructor, because neither one can be instantiated with new",
            "An interface has no constructor; an abstract class's constructor is invoked when a child object is instantiated",
            "Both have constructors, and each constructor creates an object of its own type whenever it is called",
            "An interface's constructor is called each time a class implements the interface"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 54
        },
        {
          "question": "According to the comparison table, which is true about variables?",
          "options": [
            "Interfaces cannot have any variables at all, while abstract classes must declare only private ones",
            "Abstract class variables must be public, static, and final; interfaces have no restrictions",
            "Both must declare all of their variables private, so that subclasses cannot change them",
            "Interface variables must be public, static, and final; abstract classes have no restrictions on variables"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 55
        },
        {
          "question": "An interface is generally used for achieving:",
          "options": [
            "Multiple inheritance in Java",
            "Faster compilation",
            "Information hiding in packages",
            "Static binding"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 56
        },
        {
          "question": "Given public abstract class LandVehicle { ... }, which statement is invalid?",
          "options": [
            "LandVehicle l;",
            "class Car extends LandVehicle { }",
            "LandVehicle l = new LandVehicle();",
            "LandVehicle[] list = new LandVehicle[3];"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 57
        },
        {
          "question": "Interface data fields must not be private because:",
          "options": [
            "Private data cannot be static, and every field of an interface must be a static field",
            "Private data uses too much memory, since every object would store its own copy of it",
            "Interfaces are always final, so private fields would be hidden from the interface itself",
            "Interface methods cannot contain method bodies, so there is no way to retrieve private data"
          ],
          "answer": 3,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 58
        },
        {
          "question": "The purpose of creating an interface containing constants is to:",
          "options": [
            "Create objects of the interface so that each object holds its own separate copy of the values",
            "Replace all the classes in a program with one interface that contains every method",
            "Provide a set of data that a number of classes can use without having to redeclare the values",
            "Hide the data from every class so that the values can never be read by any program"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 59
        },
        {
          "question": "A class that has no name and is defined inside another class is a(n):",
          "options": [
            "Anonymous inner class",
            "Package",
            "Interface",
            "Abstract class"
          ],
          "answer": 0,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 60
        },
        {
          "question": "When defining an anonymous inner class, you:",
          "options": [
            "Use the keyword implements, and declare the class outside the main class",
            "Use the new operator and do not use the keywords extends or implements",
            "Must give the class a name and save it in its own separate .java file",
            "Must use the keyword extends, and give the class a name before using it"
          ],
          "answer": 1,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 61
        },
        {
          "question": "An anonymous inner class must either implement an interface or extend another class, and it must:",
          "options": [
            "Be declared in a separate package from the class in which it is defined",
            "Have at least two constructors that call the superclass default constructor",
            "Override all the abstract methods in the interface or superclass",
            "Be declared static so that it can be instantiated more than once in the program"
          ],
          "answer": 2,
          "explanation": "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface",
          "id": 62
        },
        {
          "question": "A variable whose value is assigned only once, which an anonymous inner class may access, is called:",
          "options": [
            "Abstract",
            "Effectively final",
            "Static",
            "Protected and static"
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
          "question": "In the procedural Shape example, why were calculateCircleArea() and calculateSquareArea() needed?",
          "options": [
            "Java requires separate routine names for every shape, even in object-oriented code",
            "The switch statement cannot call any routine that has the word Area in its name",
            "Circles and squares use the same formula, so the names only make the code readable",
            "Most procedural languages do not allow two routines to have the same name"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 71
        },
        {
          "question": "With static binding, adding a new shape such as Triangle requires changes in:",
          "options": [
            "No part of the program, since the switch statement detects new shapes on its own at run time",
            "Multiple places (data section, switch statement, and routine section), which is error prone",
            "Only the println statement, since the routine section does not need to change",
            "Only one place: a new Triangle class, without touching the rest of the program"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 72
        },
        {
          "question": "With dynamic binding, the appropriate calculateArea() method is selected based on:",
          "options": [
            "The class of the shape referenced at run time",
            "The name of the array",
            "A switch statement written by the programmer",
            "The order the methods were written"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 73
        },
        {
          "question": "Every SalariedEmployee \"is an\" Employee. Which statement is also true?",
          "options": [
            "Superclass objects are members of all subclasses",
            "An Employee is always an HourlyEmployee",
            "Every Employee is a SalariedEmployee",
            "An Employee is not necessarily a SalariedEmployee"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 74
        },
        {
          "question": "A reference is not an object, but it:",
          "options": [
            "Is always abstract",
            "Points to a memory address",
            "Is created with the keyword new",
            "Contains all the object's methods"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 75
        },
        {
          "question": "Assigning a variable or constant of one type to a variable of another type is called:",
          "options": [
            "Static binding, early binding, or fixed binding",
            "Overloading, overriding, or redefining",
            "Promotion, implicit conversion, or upcasting",
            "Encapsulation, bundling, or information hiding"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 76
        },
        {
          "question": "Using a reference polymorphically allows you to:",
          "options": [
            "Extend a base class and use extended objects when a base class type is expected",
            "Create objects of an abstract class directly by using the keyword new",
            "Make all methods static so that they are bound when the program is compiled",
            "Avoid writing subclasses, since one reference can hold every method"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 77
        },
        {
          "question": "In Java, all instance method calls are virtual method calls by default. This means:",
          "options": [
            "Methods cannot be overridden",
            "Methods must be static",
            "The method is chosen by the compiler before the program runs",
            "The method used is determined when the program runs"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 78
        },
        {
          "question": "An application's ability to select the correct subclass method depending on the argument type is known as:",
          "options": [
            "Information hiding",
            "Dynamic method binding",
            "Static method binding",
            "Operation overloading"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism. It is also called late method binding.",
          "id": 79
        },
        {
          "question": "In Java, which methods use dynamic binding and which use static binding?",
          "options": [
            "All methods use dynamic binding",
            "Class methods use dynamic binding; instance methods use static binding",
            "Instance methods use dynamic binding; class methods use static binding",
            "All methods use static binding"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 80
        },
        {
          "question": "Comparing the two kinds of binding:",
          "options": [
            "Both are equally fast and flexible",
            "Dynamic binding is not supported in Java",
            "Dynamic binding makes programs flexible; static binding operates more quickly",
            "Static binding makes programs flexible; dynamic binding operates more quickly"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 81
        },
        {
          "question": "Dynamic method binding is most useful when you want a method whose parameters:",
          "options": [
            "Are always primitive types, such as int or double values",
            "Might be one of several types, such as any Animal descendant",
            "Cannot be objects, because objects are bound at compile time",
            "Are always strings, so that the method can print their names"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 82
        },
        {
          "question": "When you create an array of objects in Java, you are actually creating:",
          "options": [
            "Space for references to objects",
            "A new class",
            "The objects themselves, already constructed",
            "A package of objects"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 83
        },
        {
          "question": "Animal[] animalRef = new Animal[3]; Given that Animal is abstract, this statement:",
          "options": [
            "Does not compile, because an array cannot be declared using an abstract type",
            "Creates three Animal objects, one for each element of the animalRef array",
            "Creates one Dog, one Cow, and one Snake object to fill the three array elements",
            "Reserves memory for three Animal references without instantiating any Animal"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 84
        },
        {
          "question": "An array of superclass references can hold subclass references:",
          "options": [
            "Only if the superclass is concrete, never abstract",
            "Only if the superclass is abstract, never concrete",
            "Whether the superclass is abstract or concrete",
            "Never, since every array element must be one type"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 85
        },
        {
          "question": "The ability to use the same name for two or more methods in a class is known as:",
          "options": [
            "Encapsulation",
            "Operation overloading",
            "Static binding",
            "Polymorphism"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 86
        },
        {
          "question": "Two methods have the same method signature if:",
          "options": [
            "Their names are the same and the number and type of formal parameters are the same",
            "They have the same access specifier and are both declared static in their classes",
            "They are declared in the same package and have the same number of statements inside",
            "Their return types are the same, even if their names and parameters are different"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 87
        },
        {
          "question": "Given constructors A(), A(int x), A(int x, int y), and A(String x), which is called by new A(\"hello\")?",
          "options": [
            "A(int x)",
            "A()",
            "A(int x, int y)",
            "A(String x)"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 88
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
          "id": 89
        },
        {
          "question": "Can the return type alone distinguish overloaded methods from one another?",
          "options": [
            "Only for static methods declared in the same class",
            "No, the return type does not distinguish overloaded methods",
            "Only for methods that are declared in an interface",
            "Yes, the return type alone always distinguishes them from each other"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 90
        },
        {
          "question": "Declaring methods of the same signature in different, unrelated classes is:",
          "options": [
            "Valid in object-oriented programming",
            "Allowed only for constructors",
            "Invalid",
            "Allowed only if the classes are abstract"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism",
          "id": 91
        },
        {
          "question": "For a subclass method to redefine (override) a superclass method:",
          "options": [
            "The subclass method must have more parameters than the other",
            "The superclass method must be private",
            "The method signatures of the two methods must be the same",
            "The methods must have different names"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism",
          "id": 92
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
          "id": 93
        },
        {
          "question": "In polymorphism, the sender of a message (such as main()):",
          "options": [
            "Decides which method the receiving object uses to respond to the message",
            "Knows the object can respond, but not its class or how it will respond",
            "Must know the exact class of the receiver before it can send any message",
            "Must use a switch statement to choose the method for each type of object"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism",
          "id": 94
        },
        {
          "question": "Polymorphism is facilitated by:",
          "options": [
            "Private variables and the use of switch statements to select the correct method",
            "Static binding and the requirement for unique routine names in each and every class definition",
            "Packages and import statements that bring similar classes into the same program",
            "Dynamic binding and the ability to use the same name for similar methods across class definitions"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism",
          "id": 95
        },
        {
          "question": "Polymorphism encourages programmers to specify:",
          "options": [
            "What should happen rather than how it should happen",
            "Only the user interface",
            "How it should happen rather than what should happen",
            "Only the data, not the methods"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism. This promotes incremental program development.",
          "id": 96
        },
        {
          "question": "What is the output of this program?",
          "code": "abstract class Animal {\n   public abstract void speak();\n}\nclass Dog extends Animal {\n   public void speak() { System.out.println(\"Woof!\"); }\n}\nclass Cow extends Animal {\n   public void speak() { System.out.println(\"Moo!\"); }\n}\nclass Snake extends Animal {\n   public void speak() { System.out.println(\"Ssss!\"); }\n}\npublic class AnimalArrayDemo {\n   public static void main(String[] args) {\n      Animal[] animalRef = new Animal[3];\n      animalRef[0] = new Dog();\n      animalRef[1] = new Cow();\n      animalRef[2] = new Snake();\n      for (int x = 0; x < 3; ++x)\n         animalRef[x].speak();\n   }\n}",
          "options": [
            "Nothing, because Animal is abstract",
            "Woof! / Woof! / Woof!",
            "Ssss! / Moo! / Woof!",
            "Woof! / Moo! / Ssss!"
          ],
          "answer": 3,
          "explanation": "Module 13 - Polymorphism. Output: Woof! / Moo! / Ssss!. Each reference chooses the speak() method of the object it refers to (dynamic method binding).",
          "id": 97
        },
        {
          "question": "What is the output of this program?",
          "code": "class C {\n   C() {}\n   public void c1() { System.out.println(\"C.c1()\"); }\n}\nclass D extends C {\n   D() {}\n   public void c1() {\n      super.c1();\n      System.out.println(\"D.c1()\");\n   }\n   public static void main(String args[]) {\n      D thisD = new D();\n      thisD.c1();\n   }\n}",
          "options": [
            "C.c1() / D.c1()",
            "D.c1()",
            "D.c1() / C.c1()",
            "C.c1()"
          ],
          "answer": 0,
          "explanation": "Module 13 - Polymorphism. Output: C.c1() / D.c1(). D's c1() overrides C's c1(); super.c1() runs the superclass version first.",
          "id": 98
        },
        {
          "question": "What is the output of this program?",
          "code": "class C {\n   C() {}\n   public void c1() { System.out.println(\"C.c1()\"); }\n}\nclass D extends C {\n   D() {}\n   public void c1(int i) {\n      super.c1();\n      System.out.println(\"D.c1()\");\n   }\n   public static void main(String args[]) {\n      D thisD = new D();\n      thisD.c1();\n      thisD.c1(3);\n   }\n}",
          "options": [
            "The program does not compile",
            "D.c1() / C.c1() / D.c1()",
            "C.c1() / C.c1() / D.c1()",
            "C.c1() / D.c1()"
          ],
          "answer": 2,
          "explanation": "Module 13 - Polymorphism. Output: C.c1() / C.c1() / D.c1(). c1(int i) has a different signature, so it does not override c1(); both methods exist.",
          "id": 99
        },
        {
          "question": "Which constructor message is printed?",
          "code": "class A {\n   A() { System.out.println(\"A()\"); }\n   A(int x) { System.out.println(\"A(int x)\"); }\n   A(int x, int y) { System.out.println(\"A(int x, int y)\"); }\n   A(String x) { System.out.println(\"A(String x)\"); }\n   public static void main(String args[]) {\n      A thisA = new A(4, 5);\n   }\n}",
          "options": [
            "A()",
            "A(int x, int y)",
            "A(String x)",
            "A(int x)"
          ],
          "answer": 1,
          "explanation": "Module 13 - Polymorphism. Output: A(int x, int y). Overloaded methods are distinguished by the number and type of parameters.",
          "id": 100
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Operation overloading): what does this program print?",
          "code": "public class OverloadDemo {\n   static void display(int x) { System.out.println(\"int \" + x); }\n   static void display(double x) { System.out.println(\"double \" + x); }\n   static void display(String x) { System.out.println(\"String \" + x); }\n   static void display(int x, int y) { System.out.println(\"sum \" + (x + y)); }\n   public static void main(String[] args) {\n      display(5);\n      display(2.5);\n      display(\"5\");\n      display(5, 2);\n      display(10 / 4);\n   }\n}",
          "answer": "int 5\ndouble 2.5\nString 5\nsum 7\nint 2",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 13 - Polymorphism. The method is chosen by the parameters. 10 / 4 is integer division (2), so display(int) runs.",
          "id": 101
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Dynamic binding): what does this program print?",
          "code": "class Parent {\n   void show() { System.out.println(\"Parent show\"); }\n   void greet() {\n      System.out.println(\"Hello from Parent\");\n      show();\n   }\n}\nclass Child extends Parent {\n   void show() { System.out.println(\"Child show\"); }\n}\npublic class BindingDemo {\n   public static void main(String[] args) {\n      Parent p = new Child();\n      p.greet();\n      p = new Parent();\n      p.show();\n   }\n}",
          "answer": "Hello from Parent\nChild show\nParent show",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 13 - Polymorphism. With dynamic binding the object's actual class decides which show() runs, even when it is called from inside Parent's greet().",
          "id": 102
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Overloaded constructors): what does this program print?",
          "code": "class A {\n   A() {\n      this(1);\n      System.out.println(\"A()\");\n   }\n   A(int x) { System.out.println(\"A(int x) \" + x); }\n   A(int x, int y) { System.out.println(\"A(int x, int y) \" + (x * y)); }\n   A(String x) { System.out.println(\"A(String x) \" + x); }\n   public static void main(String args[]) {\n      A first = new A();\n      A second = new A(4, 5);\n      A third = new A(\"4\");\n   }\n}",
          "answer": "A(int x) 1\nA()\nA(int x, int y) 20\nA(String x) 4",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 13 - Polymorphism. this(1) calls the A(int x) constructor first. Each new A(...) picks the constructor whose parameters match.",
          "id": 103
        },
        {
          "question": "Which is often viewed as the smallest program unit to be considered as a subprogram?",
          "options": [
            "A package",
            "A method",
            "A class",
            "An object"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 104
        },
        {
          "question": "Compared to a method, what is the next bigger unit under design?",
          "options": [
            "A statement",
            "An attribute",
            "A class definition",
            "A variable"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 105
        },
        {
          "question": "Properties that are specific to objects and apply to all objects from the same class are:",
          "options": [
            "Object properties",
            "Static properties",
            "Class properties",
            "Package properties"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 106
        },
        {
          "question": "Counting objects by adding count = count + 1; in main() for every new SalesPerson works, but it is:",
          "options": [
            "Always incorrect, since main() cannot change any variable after objects exist",
            "Faster than any other method, so it is the preferred class organisation",
            "Not allowed in Java, since count must be changed inside a constructor only",
            "Cumbersome, since a new statement must be added for each new object"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 107
        },
        {
          "question": "When count is an object attribute incremented in the constructor, two SalesPerson objects result in:",
          "options": [
            "A compile error, since count must be declared static",
            "One copy of count in main(), which holds the value 0",
            "Two independent copies of count, each with the value 1",
            "One shared copy of count, which holds the value 2"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 108
        },
        {
          "question": "Declaring count as static allows the variable to be:",
          "options": [
            "Shared among all instances of the SalesPerson class",
            "Changed only by the main() method and no other code",
            "Copied into every SalesPerson object separately",
            "Hidden from the SalesPerson class itself and its methods"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 109
        },
        {
          "question": "An attribute definition preceded with the keyword static is a(n):",
          "options": [
            "Object attribute",
            "Class attribute",
            "Local variable",
            "Abstract attribute"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 110
        },
        {
          "question": "When getCount() is made static, the SalesPerson objects s1 and s2:",
          "options": [
            "Cannot call getCount() at all, since static methods are hidden",
            "Must override getCount() so that each returns its own count",
            "Each own a separate copy of getCount(), one for each object",
            "Do not own the getCount() method, since it belongs to the class"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 111
        },
        {
          "question": "Outside of the class definition, the only way to access the static method getCount() is:",
          "options": [
            "Using the keyword new, as in new SalesPerson().getCount()",
            "Qualification by the class name, as in SalesPerson.getCount()",
            "Using super.getCount() from any class in the program",
            "Calling getCount() alone, without any class or object name"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 112
        },
        {
          "question": "Ideally, objects reveal information on a:",
          "options": [
            "Package-wide basis",
            "Public basis",
            "Random basis",
            "Need-to-know basis"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 113
        },
        {
          "question": "Which access specifier makes entities hidden from code fragments external to the class?",
          "options": [
            "friendly",
            "protected",
            "private",
            "public"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 114
        },
        {
          "question": "Which access specifier makes entities fully visible from all other Java code?",
          "options": [
            "public",
            "private",
            "friendly",
            "protected"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 115
        },
        {
          "question": "Which access specifier makes entities accessible to code fragments of its immediate subclass?",
          "options": [
            "private",
            "protected",
            "public",
            "static"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 116
        },
        {
          "question": "For entities with no access specifier, this default visibility is assumed, giving access within the same package:",
          "options": [
            "protected",
            "public",
            "private",
            "friendly"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 117
        },
        {
          "question": "Private variables are used within the class definition, or accessed outside it through a:",
          "options": [
            "Private constructor",
            "Static import",
            "Public accessor method",
            "Protected package"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 118
        },
        {
          "question": "A named collection of classes is a:",
          "options": [
            "Package",
            "Constructor",
            "Method",
            "Interface"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 119
        },
        {
          "question": "Which package contains fundamental classes and is imported automatically into every program?",
          "options": [
            "java.lang",
            "java.util",
            "javax.swing",
            "com.course"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 120
        },
        {
          "question": "When you create professional classes for others to use, you usually provide them with the:",
          "options": [
            ".java source code files",
            "Compiled .class files",
            "Package declarations only",
            "Text files of your code"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 121
        },
        {
          "question": "A class that will be placed in a nondefault package for others to use must be:",
          "options": [
            "static",
            "private",
            "abstract",
            "public"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 122
        },
        {
          "question": "If a file contains a package declaration, it must be:",
          "options": [
            "Inside the class definition, before the first method",
            "The last statement in the file, after the class definition",
            "The first statement in the file (excluding comments)",
            "After all of the import statements at the top of the file"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 123
        },
        {
          "question": "Which statements are the only ones that appear outside class definitions in Java program files?",
          "options": [
            "Interfaces, abstract methods, and static variables",
            "Constructors, the main() method, and comments",
            "Variable declarations, constructors, and methods",
            "The package statement, import statements, and comments"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 124
        },
        {
          "question": "In the command javac -d . Animal.java, the -d option means:",
          "options": [
            "Debug the program and display each error in detail",
            "Place the generated .class file in a folder (directory)",
            "Download the package that Animal.java needs to compile",
            "Delete the Animal.java source file after it is compiled"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity. The dot means the package path is created within the current directory.",
          "id": 125
        },
        {
          "question": "The Java package-naming convention uses:",
          "options": [
            "Your Internet domain name in reverse order (e.g., com.course)",
            "The class name written in uppercase (e.g., ANIMAL.DOG)",
            "Random numbers so that no two package names can ever conflict",
            "Your full name followed by the date the package was created"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 126
        },
        {
          "question": "A class naming conflict is sometimes called a:",
          "options": [
            "Overload",
            "Package",
            "Collision",
            "Binding"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 127
        },
        {
          "question": "The bringing together of a set of attributes and methods into an object definition and hiding their implementational structure from the object's users is:",
          "options": [
            "Dynamic binding",
            "Inheritance",
            "Encapsulation",
            "Polymorphism"
          ],
          "answer": 2,
          "explanation": "Module 14 - Modularity",
          "id": 128
        },
        {
          "question": "In the egg analogy of encapsulation, the data of an object is like the:",
          "options": [
            "Yolk, and the methods are like the white",
            "Yolk, and the methods are like the shell",
            "White, and the methods are like the yolk",
            "Shell, and the methods are like the yolk"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity",
          "id": 129
        },
        {
          "question": "Encapsulation enhances software maintainability by:",
          "options": [
            "Removing methods from objects so that other objects use the data directly",
            "Increasing the coupling between components by making all data and methods public to other objects",
            "Copying the same data into every object so that changes affect all objects",
            "Increasing cohesiveness through bundling and reducing coupling by hiding implementation details"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity",
          "id": 130
        },
        {
          "question": "The act of associating a set of methods with a set of data as the only means of affecting the values of the data is:",
          "options": [
            "Upcasting",
            "Bundling",
            "Information hiding",
            "Overloading"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity",
          "id": 131
        },
        {
          "question": "The hiding of internal representation of data and methods from the users of these data and methods is:",
          "options": [
            "Collision",
            "Information hiding",
            "Bundling",
            "Promotion"
          ],
          "answer": 1,
          "explanation": "Module 14 - Modularity. It separates the what from the how of object definition.",
          "id": 132
        },
        {
          "question": "What is the output of this program (count is static)?",
          "code": "class SalesPerson {\n   String employeeId;\n   static int count = 0;\n   SalesPerson(String aEmployeeId) {\n      employeeId = aEmployeeId;\n      count = count + 1;\n   }\n   static int getCount() { return count; }\n   public static void main(String argv[]) {\n      SalesPerson s1 = new SalesPerson(\"12345S\");\n      SalesPerson s2 = new SalesPerson(\"33221K\");\n      System.out.println(getCount() + \" salespersons have been created\");\n   }\n}",
          "options": [
            "2 salespersons have been created",
            "The program does not compile",
            "1 salespersons have been created",
            "0 salespersons have been created"
          ],
          "answer": 0,
          "explanation": "Module 14 - Modularity. Output: 2 salespersons have been created. A static count is one shared copy, so both constructors increment the same variable.",
          "id": 133
        },
        {
          "question": "What is the output of this program (count is NOT static)?",
          "code": "class SalesPerson {\n   String employeeId;\n   int count = 0;\n   SalesPerson(String aEmployeeId) {\n      employeeId = aEmployeeId;\n      count = count + 1;\n   }\n   int getCount() { return count; }\n   public static void main(String argv[]) {\n      SalesPerson s1 = new SalesPerson(\"12345S\");\n      SalesPerson s2 = new SalesPerson(\"33221K\");\n      System.out.println(s1.getCount() + \" salespersons have been created\");\n   }\n}",
          "options": [
            "The program does not compile",
            "0 salespersons have been created",
            "2 salespersons have been created",
            "1 salespersons have been created"
          ],
          "answer": 3,
          "explanation": "Module 14 - Modularity. Output: 1 salespersons have been created. As an object attribute, each object has its own count with the value 1.",
          "id": 134
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Object attribute vs. class attribute): what does this program print?",
          "code": "class Counter {\n   static int total = 0;\n   int mine = 0;\n   Counter() {\n      total = total + 1;\n      mine = mine + 1;\n   }\n   public static void main(String argv[]) {\n      Counter c1 = new Counter();\n      Counter c2 = new Counter();\n      Counter c3 = new Counter();\n      System.out.println(c1.mine);\n      System.out.println(c3.total);\n      System.out.println(Counter.total + c2.mine);\n   }\n}",
          "answer": "1\n3\n4",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 14 - Modularity. total is static (one shared copy, 3 after three objects); mine is an object attribute, so each object has its own value of 1.",
          "id": 135
        },
        {
          "type": "output_tracing",
          "question": "Trace the output (Information hiding): what does this program print?",
          "code": "public class Account {\n   private int balance = 0;\n   public void deposit(int amount) {\n      if (amount > 0) balance = balance + amount;\n   }\n   public void withdraw(int amount) {\n      if (amount <= balance) balance = balance - amount;\n      else System.out.println(\"Insufficient funds\");\n   }\n   public int getBalance() { return balance; }\n   public static void main(String[] args) {\n      Account acct = new Account();\n      acct.deposit(500);\n      acct.deposit(-100);\n      acct.withdraw(700);\n      acct.withdraw(200);\n      System.out.println(\"Balance: \" + acct.getBalance());\n   }\n}",
          "answer": "Insufficient funds\nBalance: 300",
          "instruction": "Type each printed line on its own line, in order.",
          "explanation": "Module 14 - Modularity. balance is private, so it changes only through deposit() and withdraw(); the negative deposit is ignored and the 700 withdrawal is refused.",
          "id": 136
        }
      ]
    }
  ],
  "ipt1": [
    {
      "id": "ipt1_finals",
      "term": "Finals",
      "title": "Finals Exam Reviewer",
      "description": "",
      "timeLimit": 60,
      "questions": []
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
          "question": "In the business analogy of a website, the 'name' of the business is the:",
          "options": [
            "Webmaster",
            "Website content",
            "Domain name",
            "Web server"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 162
        },
        {
          "question": "In the business analogy, the 'location' of the business is the:",
          "options": [
            "Web server",
            "Control panel",
            "Domain name",
            "Website content"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 163
        },
        {
          "question": "In the business analogy, the 'staff' is:",
          "options": [
            "The visitors",
            "The domain registrar",
            "The hosting provider",
            "You or the webmaster"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 164
        },
        {
          "question": "In the business analogy, the 'product' is the:",
          "options": [
            "Backup system",
            "Website content",
            "Web server",
            "Domain name"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 165
        },
        {
          "question": "If your website is your business, your host providers can be thought of as your:",
          "options": [
            "Customers",
            "Competitors",
            "Landlords",
            "Employees"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 166
        },
        {
          "question": "Among the additional things a website needs, the 'insurance' is the:",
          "options": [
            "Hosting account control panel",
            "Username and password",
            "Design of your site",
            "Backup system"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 167
        },
        {
          "question": "Among the additional things a website needs, the 'office' is the:",
          "options": [
            "Hosting account control panel",
            "Tools to update content",
            "Design of your site",
            "Backup system"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 168
        },
        {
          "question": "Among the additional things a website needs, the 'keys' are the:",
          "options": [
            "Domain name",
            "Username and password",
            "Web server",
            "Backup system"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 169
        },
        {
          "question": "Also called website address, it is the name that people type in the browser to open a certain website.",
          "options": [
            "Subdomain",
            "Web host",
            "Domain name",
            "IP address"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 170
        },
        {
          "question": "These are the highest level in the hierarchy of domain names.",
          "options": [
            "Internationalized Domain Names (IDNs)",
            "Second-Level Domains (SLDs)",
            "Top-Level Domains (TLDs)",
            "Subdomains"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 171
        },
        {
          "question": "Which generic TLD is used by accredited educational institutions?",
          "options": [
            ".edu",
            ".gov",
            ".org",
            ".net"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 172
        },
        {
          "question": ".ph, .jp, .uk, and .us are examples of:",
          "options": [
            "Second-Level Domains",
            "New gTLDs",
            "Sponsored TLDs (sTLDs)",
            "Country-Code TLDs (ccTLDs)"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 173
        },
        {
          "question": "In \"example.com,\" the part \"example\" is the:",
          "options": [
            "Sponsored TLD",
            "Second-Level Domain (SLD)",
            "Subdomain",
            "Top-Level Domain (TLD)"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 174
        },
        {
          "question": "In \"blog.example.com,\" the part \"blog\" is a:",
          "options": [
            "Third-Level Domain (Subdomain)",
            "Sponsored TLD (sTLD)",
            "Second-Level Domain (SLD)",
            "Top-Level Domain (TLD)"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 175
        },
        {
          "question": ".tech, .store, .app, .xyz, and .guru are examples of:",
          "options": [
            "Country-Code TLDs",
            "New gTLDs",
            "Internationalized Domain Names",
            "Sponsored TLDs (sTLDs)"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 176
        },
        {
          "question": "Specialized domains restricted to certain groups or organizations, such as .aero, .museum, and .coop.",
          "options": [
            "Generic TLDs",
            "Subdomains",
            "Sponsored TLDs (sTLDs)",
            "New gTLDs"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 177
        },
        {
          "question": "Domains that support non-ASCII characters, such as Chinese, Arabic, or Cyrillic characters.",
          "options": [
            "New Generic TLDs (gTLDs)",
            "Sponsored TLDs (sTLDs)",
            "Country-Code TLDs (ccTLDs)",
            "Internationalized Domain Names (IDNs)"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 178
        },
        {
          "question": "Which platform is recommended for creating an ecommerce website?",
          "options": [
            "Drupal",
            "PrestaShop",
            "Joomla",
            "Web builders"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 179
        },
        {
          "question": "Which platforms are recommended for creating a standard website or a blog?",
          "options": [
            "WordPress and Joomla",
            "OpenCart and OsCommerce",
            "PrestaShop and Magento",
            "Drupal and Magento"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 180
        },
        {
          "question": "FTP, the credentials you get from your hosting dashboard or cPanel, stands for:",
          "options": [
            "File Text Protocol",
            "Folder Transfer Path",
            "Fast Transfer Program",
            "File Transfer Protocol"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 181
        },
        {
          "question": "What is the usual port number for FTP?",
          "options": [
            "443",
            "80",
            "21",
            "3306"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 182
        },
        {
          "question": "When uploading through the File Manager, website files go into the root directory, usually named:",
          "options": [
            "system32 or bin",
            "root_files or www_data",
            "public_html or htdocs",
            "uploads or assets"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 183
        },
        {
          "question": "If your website is compressed into a .zip file, you should:",
          "options": [
            "Import it into the database using phpMyAdmin",
            "Upload and extract it within the file manager",
            "Send it to the hosting provider by email",
            "Rename it to .html and upload it as it is"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 184
        },
        {
          "question": "For dynamic websites, the .sql file is imported using:",
          "options": [
            "phpMyAdmin or a similar database management tool",
            "The DNS settings at the domain registrar",
            "The File Manager's extract option",
            "The FTP host and port number"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 185
        },
        {
          "question": "When updating the database connection in your code, the database host is usually:",
          "options": [
            "public_html",
            "ns1.yourhost.com",
            "ftp.yourwebsite.com",
            "localhost"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 186
        },
        {
          "question": "To use a custom domain, you point it to the hosting nameservers by updating the:",
          "options": [
            "File permissions of public_html",
            "DNS settings at your domain registrar",
            "Database settings in phpMyAdmin",
            "FTP port number in cPanel"
          ],
          "answer": 1,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 187
        },
        {
          "question": "DNS propagation can take up to:",
          "options": [
            "5 minutes",
            "7 days",
            "30 days",
            "48 hours"
          ],
          "answer": 3,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 188
        },
        {
          "question": "Which file permissions allow public access, as recommended when troubleshooting?",
          "options": [
            "755 for directories, 644 for files",
            "777 for directories, 777 for files",
            "644 for directories, 755 for files",
            "000 for directories, 111 for files"
          ],
          "answer": 0,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 189
        },
        {
          "question": "Step 8 (Maintain Your Website) includes:",
          "options": [
            "Choosing a web hosting provider and signing up",
            "Getting the FTP credentials from cPanel",
            "Monitoring performance and backing up regularly",
            "Importing the .sql file into the database"
          ],
          "answer": 2,
          "explanation": "Chapter 7 - Web Hosting",
          "id": 190
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
      "pages": 6
    }
  ],
  "cc6": [
    {
      "id": "cc6_finals_pointers",
      "term": "Finals",
      "title": "Finals Pointers — Chapters 5 to 8",
      "description": "Compact reviewer for Query Languages, Data Organization and Architecture, Data Governance, and Special Purpose Databases.",
      "file": "/pointers/CC6_Finals_Pointers.pdf",
      "pages": 7
    }
  ],
  "wd": [
    {
      "id": "wd_finals_pointers",
      "term": "Finals",
      "title": "Finals Pointers — Chapters 5 to 7",
      "description": "Compact reviewer for Advanced CSS, Introduction to JavaScript and the DOM (with output tracing tips), and Web Hosting.",
      "file": "/pointers/WD_Finals_Pointers.pdf",
      "pages": 6
    }
  ],
  "oop": [
    {
      "id": "oop_finals_pointers",
      "term": "Finals",
      "title": "Finals Pointers — Modules 10 to 14",
      "description": "Compact reviewer for Code Reuse and Class Hierarchy, Interfaces, Abstract Class and Interface, Polymorphism, and Modularity.",
      "file": "/pointers/OOP_Finals_Pointers.pdf",
      "pages": 6
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
  "Pre-Finals": { color: "#b45309", bg: "#ffedd5", border: "rgba(253,186,116,0.5)", strip: "#fdba74" },
  Finals:       { color: "#be4e8b", bg: "#ffe0ef", border: "rgba(249,123,173,0.45)", strip: "#f97bad" },
};

export function termStyle(term) {
  return TERM_COLORS[term] || TERM_COLORS.Midterm;
}
