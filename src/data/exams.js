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
//                 "questions": [ ... ]         same format as subjects.js, all 7 types work
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
      "description": "",
      "timeLimit": 60,
      "questions": []
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
      "description": "",
      "timeLimit": 60,
      "questions": []
    }
  ],
  "comprog3": [
    {
      "id": "comprog3_finals",
      "term": "Finals",
      "title": "Finals Exam Reviewer",
      "description": "",
      "timeLimit": 60,
      "questions": []
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
