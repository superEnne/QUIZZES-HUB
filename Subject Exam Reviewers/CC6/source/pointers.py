# CC6 Midterm pointers - Chapters 5 to 8.
# One source for both the downloadable PDF and the site's Study Notes tab.
# Each section: heading, optional text, optional terms [(term, meaning)], optional points, optional code.

TITLE = "CC 6 - Information Management"
SUBTITLE = "Midterm Exam Pointers - Chapters 5 to 8"
INTRO = ("This reviewer compacts Chapters 5 to 8 into one place. Each part starts with the big idea, "
         "followed by the key terms you need to remember. Quick comparisons for commonly confused "
         "terms are at the end.")

CHAPTERS = [
  {
    "num": 1, "title": "Database Query Languages", "chapter": "Chapter 5",
    "sections": [
      {"heading": "What a Query Language Is",
       "text": "A query language is a specialized computer language used to make queries and retrieve "
               "information from databases. It serves as the interface between users and the database "
               "management system (DBMS). A query is simply a request for data or information from a "
               "database, written in a language the database understands.",
       "points": ["Queries can find, summarize, filter, combine, adjust, delete, insert, and update data",
                  "Basic types of queries - select, parameter, make-table, append, and crosstab queries",
                  "SQL (Structured Query Language) is the most popular query language for relational databases"]},
      {"heading": "Two Types of Query Languages",
       "terms": [("Procedural", "tells the computer how to do the task, step by step (example - PL/SQL)"),
                 ("Declarative", "states only what result is wanted, not how to get it (example - SQL)")],
       "text": "SQL is declarative because it describes what needs to be accomplished rather than how, "
               "but it also includes some procedural elements."},
      {"heading": "The Five SQL Sub-Languages",
       "terms": [("DQL (Data Query Language)", "retrieves data - SELECT"),
                 ("DDL (Data Definition Language)", "defines and modifies the structure of tables, indexes, and schemas - CREATE, ALTER, DROP"),
                 ("DCL (Data Control Language)", "controls access, permissions, and user rights - GRANT, REVOKE"),
                 ("DML (Data Manipulation Language)", "inserts, updates, and deletes data inside tables - INSERT, UPDATE, DELETE"),
                 ("TCL (Transaction Control Language)", "manages transactions to keep data consistent - COMMIT, ROLLBACK, SAVEPOINT")]},
      {"heading": "SQL vs. NoSQL",
       "terms": [("SQL", "relational databases, structured data, predefined schemas"),
                 ("NoSQL (Not Only SQL)", "uses key values, graphs, wide columns, and documents; dynamic schemas for unstructured data and big data")]},
      {"heading": "Query Languages vs. Programming Languages",
       "points": ["Programming languages (Python, Java) build software applications",
                  "Query languages are specialized for interacting with databases and do not compile software",
                  "Query commands are concise, so one statement can replace many lines of program code"]},
      {"heading": "Common Query Languages",
       "terms": [("GraphQL", "clients request only the specific data they need, reducing over-fetching and under-fetching"),
                 ("SPARQL", "queries RDF data on the Semantic Web"),
                 ("SQL", "manages relational databases (SELECT, INSERT, UPDATE, DELETE)"),
                 ("Oracle PL/SQL", "Oracle's procedural extension to SQL for more complex operations"),
                 ("Prisma", "database toolkit with type-safe query building"),
                 ("MongoDB Query Language (MQL)", "NoSQL, flexible schemas, JSON-like queries")]},
      {"heading": "Use Cases and Applications",
       "points": ["Extracting relevant data - get specific data quickly without manual extraction",
                  "Filtering, sorting, and updating data without editing each record by hand",
                  "Aggregating data - SUM, COUNT, AVERAGE, MAX",
                  "Managing data integrity - ACID properties in SQL",
                  "Applied in web development, Business Intelligence (BI), data warehousing, and database administration"]},
    ],
  },
  {
    "num": 2, "title": "Data Organization and Architecture", "chapter": "Chapter 6",
    "sections": [
      {"heading": "Data Architecture",
       "text": "Data architecture describes how data is managed from collection through transformation, "
               "distribution, and consumption. It is the blueprint for how data flows through storage "
               "systems, and its design should be driven by business requirements.",
       "points": ["A good data architecture keeps data manageable and useful, supports data lifecycle management, avoids redundant storage, improves data quality, and enables new applications",
                  "Data lifecycle management - managing data from the moment it is created and stored until it is archived or destroyed",
                  "Modern data architectures often leverage cloud platforms"]},
      {"heading": "Three Types of Data Models",
       "terms": [("Conceptual (domain model)", "big-picture view of what the system contains, how it is organized, and the business rules; made while gathering initial requirements"),
                 ("Logical", "more detail - data types, lengths, and relationships among entities; no technical system requirements"),
                 ("Physical", "most detailed - actual implementation such as table structures, indexes, and storage; used for schema creation and optimization")]},
      {"heading": "Data Architecture Frameworks (IBM standard)",
       "terms": [("TOGAF", "The Open Group Architecture Framework, developed in 1995 by The Open Group"),
                 ("DAMA-DMBOK 2", "Data Management Body of Knowledge - covers architecture, governance and ethics, modelling and design, storage, security, and integration"),
                 ("Zachman Framework", "a formal way to organize and analyze data, but without methods for doing so")],
       "points": ["TOGAF's 4 pillars - Business Architecture (structure, strategy, processes), Data Architecture (data assets and their lifecycle), Application Architecture (application systems and how they relate), Technical Architecture (hardware, software, networking)"]},
      {"heading": "Data Management Systems",
       "terms": [("Data warehouse", "combines data from many relational sources into one central, consistent repository (Snowflake, Google BigQuery, Amazon Redshift, Firebolt)"),
                 ("Data mart", "a smaller, focused part of a warehouse for one team, such as HR"),
                 ("Data lake", "stores both structured and unstructured data (Amazon S3, Azure Blob Storage, Google Cloud Storage, Databricks)")]},
      {"heading": "Types of Data Architecture",
       "terms": [("Data fabric", "automates data integration, data engineering, and governance between data providers and data consumers"),
                 ("Data mesh", "decentralized; organizes data by business domain and treats data as a product in its own right")],
       "points": ["Benefits of data architecture - reducing redundancy, improving data quality, enabling integration, and data lifecycle management"]},
      {"heading": "Data Organization",
       "text": "Data organization is arranging information through sorting, storing, and finding data so you "
               "can work smarter and make better decisions. Raw data is hard to analyze, so it must be organized first.",
       "points": ["Why organize - Enhanced Decision-Making, Improved Productivity, Data Accuracy and Consistency, Scalability and Growth",
                  "Ways to organize - Folder Structures, Database Management, Data Classification (by importance or sensitivity), Automation Tools, and CRM such as HubSpot"],
       "terms": [("Chronological data", "date and time"),
                 ("Spatial data", "geographical locations or areas"),
                 ("Qualitative data", "cannot be measured, only described by presence or absence of characteristics"),
                 ("Quantitative data", "numerical forms")]},
    ],
  },
  {
    "num": 3, "title": "Data Governance", "chapter": "Chapter 7",
    "sections": [
      {"heading": "What Data Governance Is",
       "text": "Data Governance (DG) is the exercise of authority and control (planning, monitoring, and "
               "enforcement) over the management of data assets. Its purpose is to make sure data is managed "
               "properly, according to policies and best practices. DG focuses on how decisions about data are "
               "made and how people and processes should behave toward data.",
       "points": ["Like an auditor, DG oversees data management without directly executing it - a separation of duty between oversight and execution",
                  "Most DG programs include - Strategy, Policy, Standards and quality, Oversight (stewardship), Compliance, Issue management, Data management projects, and Data asset valuation"]},
      {"heading": "Business Drivers",
       "terms": [("Reducing Risk", "general risk management (finances, reputation, E-Discovery), data security, and privacy of PII"),
                 ("Improving Processes", "regulatory compliance, data quality improvement, Metadata Management (business glossary), efficiency in development projects (SDLC), and vendor management (data contracts)")]},
      {"heading": "Goals and Principles",
       "text": "The goal of DG is to enable an organization to manage data as an asset.",
       "terms": [("Sustainable", "'sticky' - an ongoing process, not a project with an end"),
                 ("Embedded", "built into existing processes, not an add-on"),
                 ("Measured", "shows positive financial impact through measurable improvement")],
       "points": ["Principles - Leadership and strategy, Business-driven, Shared responsibility (business data stewards and technical professionals), Multi-layered (enterprise and local levels), Framework-based, and Principle-based"]},
      {"heading": "Essential Concepts",
       "terms": [("Data-centric organization", "values data as an asset and manages it through its whole lifecycle; data strategy is aligned with business strategy"),
                 ("Legislative-like functions", "defining policies, standards, and the Enterprise Data Architecture"),
                 ("Judicial-like functions", "issue management and escalation"),
                 ("Executive functions", "protecting and serving, administrative responsibilities")],
       "points": ["Most organizations use a representative form of DG so all stakeholders can be heard"]},
      {"heading": "Operating Models",
       "terms": [("Centralized", "one DG organization oversees all activities in all subject areas"),
                 ("Replicated", "each business unit adopts the same DG model and standards"),
                 ("Federated", "one DG organization coordinates with multiple business units for consistent definitions and standards")]},
      {"heading": "Data Stewardship",
       "text": "Data Stewardship is the most common label for accountability and responsibility for data. A steward "
               "manages the property of another person; custodian and trustee are synonyms.",
       "points": ["Activities - creating and managing core Metadata (Business Glossary), documenting rules and standards, managing data quality issues, and executing operational DG activities",
                  "Types - Chief, Executive, Enterprise, Business, Data Owner, Technical, and Coordinating Data Stewards"]},
      {"heading": "Data Policies and Data Asset Valuation",
       "terms": [("Data policies", "directives that turn principles and management intent into rules for creating, acquiring, securing, and using data"),
                 ("Data asset valuation", "understanding and calculating the economic value of data; data is non-fungible (not interchangeable)")],
       "points": ["Ways to measure value - Replacement cost (data lost in a disaster or breach), Market value (merger or acquisition), Identified opportunities (income from insights), Selling data, and Risk cost (penalties, remediation, litigation)"]},
      {"heading": "Data Governance Activities",
       "terms": [("Define DG for the organization", "know what is governed, who is governed, and who is governing"),
                 ("Perform readiness assessment", "data management maturity, capacity to change, collaborative readiness, business alignment"),
                 ("Perform discovery and business alignment", "check existing policies and attach business benefits to DG; includes Data Quality (DQ) analysis"),
                 ("Develop organizational touch points", "procurement and contracts, budget and funding, regulatory compliance, SDLC / development framework"),
                 ("Develop DG strategy", "defines scope and approach; deliverables are the charter, operating framework and accountabilities, implementation roadmap, and plan for operational success"),
                 ("Define the DG operating framework", "consider value of data to the organization, business model, cultural factors, and impact of regulation")]},
    ],
  },
  {
    "num": 4, "title": "Special Purpose Databases and Trends", "chapter": "Chapter 8",
    "sections": [
      {"heading": "Special Purpose Databases",
       "text": "Special purpose databases are tailored for specific use cases - for example multimedia databases "
               "for images and video, in-memory databases for faster access, and distributed databases for fault "
               "tolerance across multiple nodes.",
       "terms": [("Real-time database", "collects, processes, and enriches a data stream immediately after the data is created; used for faster response, alerts, preventive maintenance, and real-time machine learning"),
                 ("Temporal database", "needs some aspect of time to organize information; used for stock price, patient, and credit histories"),
                 ("Spatial database", "stores and queries objects in space - points, lines, and polygons"),
                 ("XML database", "stores huge amounts of data in XML format; queried using XQuery"),
                 ("Graph database", "single-purpose platform for graphs made of nodes, edges, and properties; supports traversal queries"),
                 ("Active database", "a set of triggers; hard to maintain; the DBMS checks if a trigger is activated before running a statement"),
                 ("Mobile database", "connects to a mobile device over a wireless network; keeps a cache so data is not lost on connection failure, and can work disconnected")]},
      {"heading": "Spatial Database Operations",
       "terms": [("Measurement", "distance, polygon area, line length"),
                 ("Geoprocessing", "creates new features from existing ones (buffer, intersect)"),
                 ("Geometry Constructors", "define vertices to create new geometries"),
                 ("Observer Functions", "detailed answers about a feature, like a circle's center"),
                 ("Predicates", "true/false questions about spatial relationships"),
                 ("Spatial index", "finds data without searching every item"),
                 ("Spatial query", "SQL query that considers spatial relationships between geometries")]},
      {"heading": "Trends in Modern Databases",
       "text": "\"Data is the new oil.\" Organizations store more data than ever, so they need secure, high-performing "
               "ways to store and use large, diverse data sets while keeping quality, accuracy, and integrity.",
       "terms": [("Serverless databases", "servers and infrastructure are fully managed by a third-party cloud provider and scale elastically"),
                 ("Cloud-native databases", "listed as a trend; the module's slide repeats the serverless definition"),
                 ("Embedding AI in databases", "AI and machine learning inside the database, such as using AI models through SQL; benefits are ease of use and being more efficient and secure"),
                 ("Data analytics", "subset of BI; uses math, statistics, and modeling to extract insights"),
                 ("Explanatory analytics", "explains data characteristics and relationships from existing data"),
                 ("Predictive analytics", "predicts future outcomes with high accuracy"),
                 ("Data mining", "uncovers hidden trends, patterns, and relationships in vast datasets; focuses on discovery and explanation")]},
    ],
  },
]

# Side-by-side comparisons (PDF table + a Study Notes topic)
COMPARISONS = [
  ("Procedural vs. Declarative", "Procedural = how (step by step, PL/SQL). Declarative = what (result only, SQL)."),
  ("DDL vs. DML", "DDL changes the structure (CREATE, ALTER, DROP). DML changes the data (INSERT, UPDATE, DELETE)."),
  ("Conceptual vs. Logical vs. Physical", "Conceptual = big picture. Logical = detailed attributes. Physical = actual implementation."),
  ("Warehouse vs. Mart vs. Lake", "Warehouse = central repository. Mart = one team's subset. Lake = structured and unstructured data."),
  ("Data Fabric vs. Data Mesh", "Fabric automates integration. Mesh is decentralized by business domain."),
  ("Centralized vs. Replicated vs. Federated", "Centralized = one DG body for all. Replicated = same model in each unit. Federated = one body coordinating units."),
  ("Real-time vs. Temporal", "Real-time processes data as it arrives. Temporal organizes data by time (histories)."),
  ("Explanatory vs. Predictive", "Explanatory explains existing data. Predictive forecasts future outcomes."),
]
