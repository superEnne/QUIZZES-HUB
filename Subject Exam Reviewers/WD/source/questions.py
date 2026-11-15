# WD Finals mock exam - Chapters 5 to 7.
# Types: multiple choice + JavaScript output tracing.
# MC item: (question, correct_answer, [3 distractors], optional_note)
# Items marked "FT Quiz" in their note come from the WD Final Term quizzes (same wording).

CH5 = "Chapter 5 - Advanced CSS"
CH6 = "Chapter 6 - Introduction to JavaScript"
CH7 = "Chapter 7 - Web Hosting"
Q1 = "From WD FT Quiz 1"
Q2 = "From WD FT Quiz 2"

MC = {
CH5: [
    # ── FT Quiz 1 (matching items, same wording) ──
    ("It defines the intermediate styles that an animation passes through during execution.",
     "@keyframes", ["animation-fill-mode", "transition-duration", "animation-iteration-count"], Q1),
    ("It allows a flex item to occupy more of the available container space relative to other items.",
     "flex-grow", ["flex-wrap", "justify-content", "justify-self"], Q1),
    ("It removes an element from the rendered layout, so it does not occupy space.",
     "display: none", ["float", "transition-delay", "skew()"], Q1),
    ("It controls how long a transition waits before it starts.",
     "transition-delay", ["transition-duration", "animation-fill-mode", "linear"], Q1),
    ("It divides a grid container into columns whose widths can be expressed as fractions of available space.",
     "grid-template-columns", ["grid gap", "justify-self", "flex-wrap"], Q1),
    ("It changes an element's position horizontally without changing the surrounding document flow.",
     "translate()", ["scale()", "skew()", "float"], Q1),
    ("It specifies whether a flex container places items on a single line or allows them to wrap.",
     "flex-wrap", ["flex-grow", "justify-content", "grid-template-columns"], Q1),
    ("It determines whether an animated element keeps the styles from its final keyframe after the animation finishes.",
     "animation-fill-mode", ["animation-iteration-count", "@keyframes", "transition-delay"], Q1),
    ("It makes an element respond when a pointer is positioned over it.",
     ":hover", ["Media Queries", "transition-duration", "transform: rotate()"], Q1),
    ("It establishes the spacing between rows and columns in a grid layout.",
     "grid gap", ["grid-template-columns", "repeat()", "justify-self"], Q1),
    ("It makes an element rotate around its transformation origin.",
     "transform: rotate()", ["skew()", "translate(x,y)", "scaleX()"], Q1),
    ("It applies layout rules conditionally according to characteristics such as viewport width.",
     "Media Queries", ["CSS Grid", "Flexbox", "float"], Q1),
    ("It controls the alignment of an individual grid item along the inline axis.",
     "justify-self", ["justify-content", "flex-grow", "grid gap"], Q1),
    ("It specifies the amount of time a transition takes to complete.",
     "transition-duration", ["transition-delay", "animation-iteration-count", "linear"], Q1),
    ("It arranges items primarily along one dimension, either horizontally or vertically.",
     "Flexbox", ["CSS Grid", "Media Queries", "float"], Q1),
    ("It changes the apparent width and height of an element through scaling.",
     "scale()", ["skew()", "translate()", "transform: rotate()"], Q1),
    ("It controls how flex items are distributed along the main axis.",
     "justify-content", ["justify-self", "flex-wrap", "flex-grow"], Q1),
    ("It places an element toward one side so surrounding content can flow around it.",
     "float", ["display: none", "translate()", "justify-self"], Q1),
    ("It defines the number of times an animation runs, including the option to repeat indefinitely.",
     "animation-iteration-count", ["animation-fill-mode", "transition-duration", "@keyframes"], Q1),
    ("It uses a function to generate repeated track patterns in a grid definition.",
     "repeat()", ["grid gap", "scaleX()", "translate(x,y)"], Q1),
    ("It produces a transition that maintains a constant rate of change.",
     "linear", ["ease", "ease-in-out", "ease-out"], Q1),
    ("It relocates an element horizontally and vertically using two coordinate values.",
     "translate(x,y)", ["scale()", "skew()", "transform: rotate()"], Q1),
    ("It resizes an element using a proportional factor along its horizontal axis.",
     "scaleX()", ["translate()", "skew()", "scale()"], Q1),
    ("It slants an element by changing the angle of its axes.",
     "skew()", ["transform: rotate()", "scaleX()", "translate(x,y)"], Q1),
    ("It creates a two-dimensional layout based on rows and columns.",
     "CSS Grid", ["Flexbox", "Media Queries", "float"], Q1),
    # ── FT Quiz 1 enumeration, as MC ──
    ("Which of the following are transition timing function values?",
     "ease, linear, ease-in, ease-out, ease-in-out", ["rotate, translate, scale, skew", "normal, reverse, alternate, alternate-reverse", "none, forwards, backwards, both"], Q1),
    ("Which of the following are CSS transform functions?",
     "rotate, translate, scale, skew", ["ease, linear, ease-in, ease-out", "block, inline, inline-block, none", "wrap, nowrap, wrap-reverse, row"], Q1),
    ("What are the three main techniques of responsive web design?",
     "Media Queries, CSS Grid, CSS Flexbox", ["Hover, Transition, Animation", "Block, Inline, Inline-block", "Rotate, Translate, Scale"], Q1),
    # ── Hover ──
    ("The :hover selector in CSS is classified as a:",
     "Pseudo-class", ["Pseudo-element", "Property", "Keyframe"], None),
    ("Which pseudo-class styles a link at the moment it is selected (being clicked)?",
     "a:active", ["a:visited", "a:link", "a:hover"], None),
    ("Which pseudo-class styles links that the user has already visited?",
     "a:visited", ["a:link", "a:active", "a:hover"], None),
    # ── Transition ──
    ("It allows you to change property values smoothly (over a given duration) rather than having those changes take place instantly.",
     "Transition", ["Transform", "Animation", "Float"], None),
    ("A shorthand property for setting the four transition properties into a single property.",
     "transition", ["transition-property", "transition-timing-function", "animation"], None),
    ("Specifies the CSS property or properties to which the transition should apply.",
     "transition-property", ["transition", "transition-duration", "transition-timing-function"], None),
    ("Specifies the speed curve of the transition effect.",
     "transition-timing-function", ["transition-delay", "transition-property", "animation-direction"], None),
    ("What is the default value of transition-timing-function?",
     "ease", ["linear", "ease-in-out", "step-start"], None),
    ("What is the default value of transition-delay?",
     "0s", ["1s", "0.5s", "none"], None),
    ("Timing function with a slow start, fast middle, and slow end (default).",
     "ease", ["linear", "ease-in", "ease-out"], None),
    ("Timing function with a slow start; useful when you want to gently introduce an element.",
     "ease-in", ["ease-out", "linear", "ease-in-out"], None),
    ("Timing function with a slow end; often used for elements that are disappearing or fading out.",
     "ease-out", ["ease-in", "ease", "linear"], None),
    ("Timing function with a slow start and end.",
     "ease-in-out", ["ease", "ease-out", "linear"], None),
    # ── Transform ──
    ("CSS3 Transforms give a way to:",
     "Rotate, relocate, resize, and skew HTML elements in two- and three-dimensional space",
     ["Change property values smoothly over a given duration instead of instantly", "Apply different styles based on the device's screen width or orientation", "Define the specific steps of an animation sequence with keyframes"], None),
    ("The value of the rotate() function is specified in:",
     "Positive or negative degrees", ["Pixels", "Unitless ratios", "Percent of the parent width"], None),
    ("Which translate function moves an element along the vertical axis?",
     "translateY", ["translateX", "scaleY", "skewY"], None),
    ("transform: scale(2, .5); makes an element:",
     "Twice as wide but half as tall", ["Twice as tall but half as wide", "Twice as big in both directions", "Move 2px right and 0.5px down"], None),
    ("If you provide only one value for scale(), that value is:",
     "Used as the scaling factor in both directions", ["Used for scaleX only, and scaleY stays at 1", "Used for scaleY only, and scaleX stays at 1", "Ignored, because scale needs two values"], "scale(2) is the same as scaleX(2) and scaleY(2)."),
    ("If you provide only one value for skew(), it is:",
     "Used for skewX, and skewY is set to zero", ["Used for both skewX and skewY", "Used for skewY, and skewX is set to zero", "Ignored"], None),
    # ── Animation ──
    ("To use CSS animation, you must first specify some:",
     "Keyframes", ["Media queries", "Transitions", "Grid tracks"], "Keyframes hold what styles the element will have at certain times."),
    ("To get an animation to work, you must:",
     "Bind the animation to an element", ["Add a :hover pseudo-class", "Set display: grid", "Use JavaScript"], None),
    ("Specifies the name of the @keyframes animation to apply to the element.",
     "animation-name", ["animation-duration", "animation-direction", "animation-fill-mode"], None),
    ("Defines how long the animation should take to complete one cycle.",
     "animation-duration", ["animation-delay", "animation-iteration-count", "transition-duration"], None),
    ("Defines whether the animation should play in reverse on alternate iterations.",
     "animation-direction", ["animation-fill-mode", "animation-timing-function", "animation-iteration-count"], None),
    ("animation-direction value where the animation alternates between playing forward and backward.",
     "alternate", ["reverse", "normal", "forwards"], None),
    ("animation-fill-mode value where the animation retains the styles set in the first keyframe before it starts.",
     "backwards", ["forwards", "both", "none"], None),
    ("Which value makes an animation loop indefinitely?",
     "animation-iteration-count: infinite;", ["animation-direction: alternate;", "animation-fill-mode: forwards;", "animation-delay: 0s;"], None),
    # ── Display and Float ──
    ("The element starts on a new line and takes up the full width available.",
     "display: block", ["display: inline", "display: inline-block", "display: none"], None),
    ("The element does not start on a new line and only takes up as much width as necessary.",
     "display: inline", ["display: block", "display: none", "display: grid"], None),
    ("It allows setting width and height while remaining inline with other elements.",
     "display: inline-block", ["display: inline", "display: block", "display: flex"], None),
    ("Which of the following is a block-level element?",
     "<section>", ["<span>", "<img>", "<a>"], None),
    ("Which of the following is an inline element?",
     "<span>", ["<div>", "<p>", "<header>"], None),
    ("With float: left; the element floats to the left of its container and other content:",
     "Wraps around it on the right", ["Wraps around it on the left", "Is hidden behind it", "Starts on a new line below it"], None),
    # ── Responsive / Flexbox / Grid ──
    ("It allows websites to adjust layout and content based on the screen size of the device being used.",
     "Responsive web design", ["CSS Transforms", "Web hosting", "CSS Animation"], None),
    ("Which media query targets mobile devices (portrait and small phones)?",
     "@media screen and (max-width: 480px)", ["@media screen and (max-width: 1024px)", "@media screen and (min-width: 1921px)", "@media screen and (max-width: 1366px)"], None),
    ("To start using Flexbox, you define a flex container by setting:",
     "display: flex; or display: inline-flex;", ["display: grid; or display: inline-grid;", "float: left;", "position: flex;"], None),
    ("Defines in which direction the container wants to stack the flex items.",
     "flex-direction", ["flex-wrap", "align-items", "order"], None),
    ("A shorthand property for setting both the flex-direction and flex-wrap properties.",
     "flex-flow", ["flex", "flex-basis", "grid-template"], None),
    ("Aligns the flex items along the cross axis (vertical by default).",
     "align-items", ["justify-content", "flex-direction", "order"], None),
    ("Specifies the order of the flex items.",
     "order", ["flex-basis", "align-self", "flex-shrink"], None),
    ("Specifies how much a flex item will shrink relative to the rest of the flex items.",
     "flex-shrink", ["flex-grow", "flex-basis", "order"], None),
    ("Specifies the initial length of a flex item.",
     "flex-basis", ["flex-shrink", "flex-flow", "align-content"], None),
    ("A shorthand property for the flex-grow, flex-shrink, and flex-basis properties.",
     "flex", ["flex-flow", "flex-direction", "grid-area"], None),
    ("An HTML element becomes a grid container when its display property is set to:",
     "grid", ["flex", "block", "inline-block"], None),
    ("The fr unit sets the size of a track as:",
     "A fraction of the free space of the grid container", ["A fixed number of pixels set by the browser", "A percentage of the viewport height", "A multiple of the font size of the parent"], None),
    ("Shorthand for grid-column-start + grid-column-end.",
     "grid-column", ["grid-area", "grid-template-columns", "column-gap"], None),
    ("Gives an item a name so that it can be referenced by a template created with the grid-template-areas property.",
     "grid-area", ["grid-column", "justify-self", "grid-template"], None),
    ("Aligns a grid item inside a cell along the block (column) axis.",
     "align-self", ["justify-self", "justify-content", "align-content"], None),
    ("repeat() keyword: fit as many possible columns as possible on a row, even if they are empty.",
     "auto-fill", ["auto-fit", "minmax", "span"], None),
    ("repeat() keyword: fit whatever columns there are into the space, preferring to expand columns to fill space.",
     "auto-fit", ["auto-fill", "minmax", "fr"], None),
],

CH6: [
    # ── FT Quiz 2 (matching items, same wording) ──
    ("A programming language commonly used to add interactivity and dynamic behavior to web pages.",
     "JavaScript", ["Document Object Model (DOM)", "External JavaScript", "Validation"], Q2),
    ("A declaration keyword used for variables that can be reassigned and are limited to block scope.",
     "let", ["constant", "var", "Function"], Q2),
    ("A declaration keyword used for variables whose values should not be reassigned after initialization.",
     "constant", ["let", "undefined", "null"], Q2),
    ("A JavaScript statement used to display information in the browser console.",
     "console.log", ["innerText", "addEventListener()", "style"], Q2),
    ("A way of inserting JavaScript directly into an HTML element using an event attribute.",
     "Inline JavaScript", ["External JavaScript", "Nested Function", "defer"], Q2),
    ("A method of including JavaScript by linking a .js file outside of an HTML document.",
     "External JavaScript", ["Inline JavaScript", "async", "Document Object Model (DOM)"], Q2),
    ("A primitive value that intentionally represents the absence of an object value.",
     "null", ["undefined", "String", "value"], Q2),
    ("A variable has been declared but has not yet been assigned a value.",
     "undefined", ["null", "constant", "Validation"], Q2),
    ("A data type that represents text enclosed in quotation marks.",
     "String", ["Function", "null", "value"], Q2),
    ("A method that formats a number using a specified number of decimal places.",
     "toFixed()", ["charCodeAt()", "charAt()", "querySelectorAll()"], Q2),
    ("A method that returns the Unicode value of a character at a specified position.",
     "charCodeAt()", ["charAt()", "toFixed()", "innerText"], Q2),
    ("A method that returns the character at a specified position in a string.",
     "charAt()", ["charCodeAt()", "getElementById()", "toFixed()"], Q2),
    ("A reusable block of code designed to perform a particular task.",
     "Function", ["Nested Function", "String", "Validation"], Q2),
    ("A programming structure in which a function is declared inside another function.",
     "Nested Function", ["Function", "Inline JavaScript", "addEventListener()"], Q2),
    ("It represents an HTML document as a structured tree of objects.",
     "Document Object Model (DOM)", ["JavaScript", "External JavaScript", "innerHTML"], Q2),
    ("A property that retrieves or changes the visible text content of an element without interpreting HTML tags.",
     "innerText", ["innerHTML", "value", "style"], Q2),
    ("A property that retrieves or changes the HTML content inside an element, including HTML tags.",
     "innerHTML", ["innerText", "value", "console.log"], Q2),
    ("A method used to register an event handler for a specified event on an element.",
     "addEventListener()", ["querySelectorAll()", "getElementById()", "console.log"], Q2),
    ("A method that returns all elements matching a specified CSS selector.",
     "querySelectorAll()", ["getElementById()", "addEventListener()", "charAt()"], Q2),
    ("A method that retrieves an HTML element using its unique ID.",
     "getElementById()", ["querySelectorAll()", "charAt()", "innerHTML"], Q2),
    ("A property used to modify CSS styles of an HTML element through JavaScript.",
     "style", ["value", "innerText", "innerHTML"], Q2),
    ("A process that checks whether user input meets specified requirements before submission.",
     "Validation", ["Function", "defer", "Document Object Model (DOM)"], Q2),
    ("It instructs the browser to execute an external script after the HTML document has been parsed.",
     "defer", ["async", "External JavaScript", "addEventListener()"], Q2),
    ("It allows a script to be downloaded while the HTML document is being parsed and executed as soon as it is available.",
     "async", ["defer", "Inline JavaScript", "console.log"], Q2),
    ("A property commonly used to retrieve or modify the value entered into an HTML form field.",
     "value", ["innerText", "style", "innerHTML"], Q2),
    # ── JavaScript basics ──
    ("Compared with Java, JavaScript is:",
     "Interpreted, not compiled", ["Compiled, not interpreted", "Strongly typed", "Built around the class as its key construct"], "In JavaScript the key construct is the function rather than the class."),
    ("Where does JavaScript code run, compared to PHP?",
     "JS runs on the client's browser; PHP runs on the web server", ["JS runs on the web server; PHP runs on the client's browser", "Both run only on the web server", "Both run only on the client's browser"], None),
    ("How are single-line comments written in JavaScript?",
     "// comment", ["/* comment */", "<!-- comment -->", "# comment"], None),
    ("What naming convention should be followed for JavaScript variables and functions?",
     "camelCase (e.g., myVariable, calculateTotal)", ["snake_case (e.g., my_variable)", "PascalCase only (e.g., MyVariable)", "ALL CAPS (e.g., MYVARIABLE)"], None),
    ("Semicolons at the end of JavaScript statements are:",
     "Optional, but good practice to use", ["Required, or the code will not run", "Not allowed", "Only used inside functions"], None),
    ("JavaScript enables interactivity by responding to user actions (clicks, key presses, etc.). This is called:",
     "Event-driven programming", ["Object-oriented programming", "Procedural programming", "Server-side programming"], None),
    # ── Variables and types ──
    ("Variables declared with var are:",
     "Function-scoped and hoisted (initialized with undefined)", ["Block-scoped and cannot be reassigned", "Block-scoped and in the temporal dead zone", "Global only"], None),
    ("let and const variables exist in this state until the line where they are declared.",
     "Temporal dead zone", ["Hoisting", "Global scope", "Function scope"], None),
    ("const obj = { name: 'John' }; obj.name = 'Jane'; What happens?",
     "It is allowed, because a property is changed, not the object itself", ["Error: Assignment to constant variable is thrown", "obj is reset and becomes undefined", "obj.name stays 'John' because const objects cannot change"], None),
    ("A variable declared without the var keyword (e.g., one = 1;) becomes:",
     "A global variable", ["A block-scoped variable", "A constant", "undefined"], None),
    ("JavaScript variables do not require a data type to be declared. This means they are:",
     "Loosely-typed", ["Strongly typed", "Immutable", "Hoisted"], None),
    ("Which of the following is a non-primitive data type in JavaScript?",
     "Array", ["Boolean", "Number", "Undefined"], "Primitive: String, Number, Boolean, Null, Undefined. Non-primitive: Object, Date, Array."),
    ("A string in JavaScript is immutable and can be concatenated using the:",
     "Plus (+) operator", ["Ampersand (&) operator", "Dot (.) operator", "Asterisk (*) operator"], None),
    ("indexOf() and lastIndexOf() return this value when the search string is not found.",
     "-1", ["0", "null", "undefined"], None),
    ("Which string method searches a string value and returns a new string with the search value replaced?",
     "replace()", ["concat()", "match()", "charAt()"], None),
    ("Which Number method returns the number as a string with a specified total number of digits?",
     "toPrecision()", ["toFixed()", "toExponential()", "valueOf()"], "var num = 100; num.toPrecision(4) returns '100.0'."),
    ("A Boolean can have only these two values:",
     "true or false", ["0 or 1", "yes or no", "null or undefined"], None),
    ("date.getMonth() returns 3 for April because:",
     "Months start at 0 with January", ["Months start at 1 with January", "It counts weeks, not months", "It returns the quarter of the year"], None),
    ("Array index starts at:",
     "0", ["1", "-1", "The array length"], None),
    ("Which property returns the number of elements in an array?",
     "length", ["size", "count", "index"], None),
    ("A null value in a conditional expression (e.g., if (myVar)) evaluates to:",
     "false", ["true", "undefined", "An error"], None),
    ("A function that does not return anything is assigned to a variable: var result = Sum(5, 5); The value of result is:",
     "undefined", ["null", "10", "0"], None),
    # ── Functions ──
    ("If you pass fewer arguments than parameters when calling a function, the rest of the parameters will be:",
     "undefined", ["null", "0", "Ignored with an error"], "If you pass more arguments, the additional arguments are ignored."),
    ("All functions can use this array-like object, which includes the value of each parameter.",
     "arguments", ["parameters", "this", "values"], "It can be accessed by index but does not support array methods."),
    ("How many values can a function return using the return keyword?",
     "Zero or one value", ["Exactly two values", "Unlimited values separated by commas", "Only numbers"], None),
    ("In a nested function, the inner function:",
     "Can access variables and parameters of the outer function", ["Cannot access any variable of the outer function", "Runs before the outer function", "Must be declared with const"], None),
    # ── Adding JS to HTML and DOM ──
    ("JavaScript written inside a <script> tag within the HTML file's <head> or <body> section.",
     "Internal JavaScript", ["Inline JavaScript", "External JavaScript", "Nested JavaScript"], None),
    ("If the script is external, which attribute must be used to specify the file path?",
     "src", ["href", "link", "path"], None),
    ("The DOM is a tree-like model where every element is a:",
     "Node", ["Class", "Function", "String"], None),
    ("In the DOM, these are functions associated with objects that can perform actions on elements.",
     "Methods", ["Properties", "Attributes", "Events"], "Properties retrieve or set the value of an element's attributes or characteristics."),
    ("Which method selects the first element that matches an ID, class, or tag (CSS selector)?",
     "querySelector()", ["querySelectorAll()", "getElementsByTagName()", "getElementsByClassName()"], None),
    ("Which method returns all the elements having the given class name?",
     "getElementsByClassName()", ["getElementById()", "querySelector()", "getElementsByName()"], None),
    ("Which method returns all the elements of a specified tag name?",
     "getElementsByTagName()", ["getElementById()", "querySelector()", "getElementsByClassName()"], None),
    ("Why do most web developers prefer JavaScript (client-side) form validation?",
     "Data processing is faster than server-side validation", ["It can never be bypassed by the user", "It stores the data directly in the database", "It replaces the need for a web server"], None),
    ("The change in the state of an object is known as a(n):",
     "Event", ["Method", "Property", "Node"], None),
    ("The process of reacting over events is called:",
     "Event Handling", ["Event Bubbling", "Validation", "Hoisting"], None),
    ("In element.addEventListener(event, function, useCapture), what is the default value of useCapture?",
     "false (event bubbling)", ["true (event capturing)", "null", "undefined"], None),
    ("Mouse event triggered when an element is double-clicked.",
     "dblclick", ["click", "mouseover", "mousemove"], None),
    ("Mouse event triggered when the mouse pointer leaves an element.",
     "mouseout", ["mouseover", "mousemove", "click"], None),
],

CH7: [
    ("A service that allows individuals or organizations to publish their websites on the internet or make them accessible via the World Wide Web.",
     "Web hosting", ["Domain name", "Web design", "File Transfer Protocol"], None),
    ("In the business analogy of a website, the 'name' of the business is the:",
     "Domain name", ["Web server", "Webmaster", "Website content"], None),
    ("In the business analogy, the 'location' of the business is the:",
     "Web server", ["Domain name", "Website content", "Control panel"], None),
    ("In the business analogy, the 'staff' is:",
     "You or the webmaster", ["The hosting provider", "The domain registrar", "The visitors"], None),
    ("In the business analogy, the 'product' is the:",
     "Website content", ["Domain name", "Web server", "Backup system"], None),
    ("If your website is your business, your host providers can be thought of as your:",
     "Landlords", ["Customers", "Competitors", "Employees"], None),
    ("Among the additional things a website needs, the 'insurance' is the:",
     "Backup system", ["Hosting account control panel", "Username and password", "Design of your site"], None),
    ("Among the additional things a website needs, the 'office' is the:",
     "Hosting account control panel", ["Backup system", "Design of your site", "Tools to update content"], None),
    ("Among the additional things a website needs, the 'keys' are the:",
     "Username and password", ["Backup system", "Domain name", "Web server"], None),
    ("Also called website address, it is the name that people type in the browser to open a certain website.",
     "Domain name", ["Web host", "IP address", "Subdomain"], None),
    ("These are the highest level in the hierarchy of domain names.",
     "Top-Level Domains (TLDs)", ["Second-Level Domains (SLDs)", "Subdomains", "Internationalized Domain Names (IDNs)"], None),
    ("Which generic TLD is used by accredited educational institutions?",
     ".edu", [".org", ".gov", ".net"], None),
    (".ph, .jp, .uk, and .us are examples of:",
     "Country-Code TLDs (ccTLDs)", ["Sponsored TLDs (sTLDs)", "New gTLDs", "Second-Level Domains"], None),
    ("In \"example.com,\" the part \"example\" is the:",
     "Second-Level Domain (SLD)", ["Top-Level Domain (TLD)", "Subdomain", "Sponsored TLD"], None),
    ("In \"blog.example.com,\" the part \"blog\" is a:",
     "Third-Level Domain (Subdomain)", ["Second-Level Domain (SLD)", "Top-Level Domain (TLD)", "Sponsored TLD (sTLD)"], None),
    (".tech, .store, .app, .xyz, and .guru are examples of:",
     "New gTLDs", ["Sponsored TLDs (sTLDs)", "Country-Code TLDs", "Internationalized Domain Names"], None),
    ("Specialized domains restricted to certain groups or organizations, such as .aero, .museum, and .coop.",
     "Sponsored TLDs (sTLDs)", ["New gTLDs", "Generic TLDs", "Subdomains"], None),
    ("Domains that support non-ASCII characters, such as Chinese, Arabic, or Cyrillic characters.",
     "Internationalized Domain Names (IDNs)", ["Sponsored TLDs (sTLDs)", "Country-Code TLDs (ccTLDs)", "New Generic TLDs (gTLDs)"], None),
    ("Which platform is recommended for creating an ecommerce website?",
     "PrestaShop", ["Drupal", "Joomla", "Web builders"], None),
    ("Which platforms are recommended for creating a standard website or a blog?",
     "WordPress and Joomla", ["PrestaShop and Magento", "OpenCart and OsCommerce", "Drupal and Magento"], None),
    ("FTP, the credentials you get from your hosting dashboard or cPanel, stands for:",
     "File Transfer Protocol", ["File Text Protocol", "Fast Transfer Program", "Folder Transfer Path"], None),
    ("What is the usual port number for FTP?",
     "21", ["80", "443", "3306"], None),
    ("When uploading through the File Manager, website files go into the root directory, usually named:",
     "public_html or htdocs", ["root_files or www_data", "uploads or assets", "system32 or bin"], None),
    ("If your website is compressed into a .zip file, you should:",
     "Upload and extract it within the file manager", ["Rename it to .html and upload it as it is", "Import it into the database using phpMyAdmin", "Send it to the hosting provider by email"], None),
    ("For dynamic websites, the .sql file is imported using:",
     "phpMyAdmin or a similar database management tool", ["The File Manager's extract option", "The DNS settings at the domain registrar", "The FTP host and port number"], None),
    ("When updating the database connection in your code, the database host is usually:",
     "localhost", ["public_html", "ns1.yourhost.com", "ftp.yourwebsite.com"], None),
    ("To use a custom domain, you point it to the hosting nameservers by updating the:",
     "DNS settings at your domain registrar", ["File permissions of public_html", "Database settings in phpMyAdmin", "FTP port number in cPanel"], None),
    ("DNS propagation can take up to:",
     "48 hours", ["5 minutes", "7 days", "30 days"], None),
    ("Which file permissions allow public access, as recommended when troubleshooting?",
     "755 for directories, 644 for files", ["777 for directories, 777 for files", "644 for directories, 755 for files", "000 for directories, 111 for files"], None),
    ("Step 8 (Maintain Your Website) includes:",
     "Monitoring performance and backing up regularly", ["Choosing a web hosting provider and signing up", "Getting the FTP credentials from cPanel", "Importing the .sql file into the database"], None),
],
}

# ── JavaScript output tracing ─────────────────────────────────────────────
# kind "console": answer = every console.log line, computed by running the code with Node.
# kind "dom": answer = the text the page displays, computed by running the script in jsdom.
OUTPUT = [
    # FT Quiz 2 snippets (same code as the quiz)
    {"name": "num_functions.js", "kind": "console", "note": Q2, "code": """let number = 50;
function firstFunction() {
   let number = 5;
   number += 10;
   return number;
}
function secondFunction() {
   number *= 2 ;
   return number;
}
console.log(number);
console.log(firstFunction());
console.log(secondFunction());
console.log(number - firstFunction());
console.log(firstFunction () + secondFunction())"""},
    {"name": "num_functions2.js", "kind": "console", "note": Q2, "code": """let value = 5;
function outerFunction() {
   let value = 10;
   function innerFunction() {
      let value = 25;
      return value * 2;
   }
   return innerFunction() + value;
}
let result = outerFunction();
console.log(result);
console.log(value);
console.log(result + result);
console.log(value + value);
console.log(result + value);"""},
    {"name": "message.js", "kind": "console", "note": Q2, "code": """let message = "Sabi ko sa sarili ko wala lang to!";
let first = message.charAt(0);
let second = message.charAt(3);
let pos1 = message.indexOf("a");
let pos2 = message.lastIndexOf("aray");
let combined = first.concat(second);
let combined1= second.concat(first);
let finalText = combined.toUpperCase();
console.log(first);
console.log(second);
console.log(pos1);
console.log(pos2);
console.log(finalText);"""},
    # New snippets in the same style
    {"name": "score.js", "kind": "console", "note": "Global vs local variables", "code": """let score = 20;
function addPoints(points) {
   score += points;
   return score;
}
function resetScore() {
   let score = 0;
   return score;
}
console.log(addPoints(5));
console.log(resetScore());
console.log(score);
console.log(addPoints(score));
console.log(score - resetScore());"""},
    {"name": "nested_count.js", "kind": "console", "note": "Nested functions", "code": """let count = 3;
function outer(num) {
   let count = num * 2;
   function inner() {
      return count + 4;
   }
   return inner() * 2;
}
console.log(outer(5));
console.log(count);
console.log(outer(count));
console.log(outer(1) + count);
console.log(count * outer(0));"""},
    {"name": "block_scope.js", "kind": "console", "note": "let is block-scoped; var is not", "code": """let x = 10;
var y = 5;
if (true) {
   let x = 20;
   var y = 15;
   console.log(x);
   console.log(y);
}
console.log(x);
console.log(y);
console.log(x + y);"""},
    {"name": "hoisting.js", "kind": "console", "note": "var hoisting and string concatenation", "code": """function showValues() {
   console.log(a);
   var a = 8;
   console.log(a);
   a += 4;
   console.log(a * 2);
}
showValues();
var total = 3;
total = total + "3";
console.log(total);
console.log(total + 1);"""},
    {"name": "greet.js", "kind": "console", "note": "Fewer or more arguments, and the arguments object", "code": """function greet(firstName, lastName) {
   return "Hello " + firstName + " " + lastName;
}
function countArgs() {
   return arguments.length;
}
console.log(greet("Steve", "Jobs"));
console.log(greet("Bill"));
console.log(greet("Ada", "Lovelace", "Ms."));
console.log(greet());
console.log(countArgs("a", "b", "c"));"""},
    {"name": "returns.js", "kind": "console", "note": "return vs console.log", "code": """function sum(a, b) {
   return a + b;
}
function multiply(a, b) {
   console.log(a * b);
}
let result = sum(10, 20);
console.log(result);
let product = multiply(4, 5);
console.log(product);
console.log(sum(result, 5));
console.log(sum("10", 20));"""},
    {"name": "word.js", "kind": "console", "note": "String length and methods", "code": """let word = "JavaScript";
console.log(word.length);
console.log(word.charAt(4));
console.log(word.indexOf("a"));
console.log(word.lastIndexOf("a"));
console.log(word.toUpperCase());"""},
    {"name": "final_exam.js", "kind": "console", "note": "String methods", "code": """let text = "Final exam na bukas!";
let a = text.charAt(6);
let b = text.indexOf("a");
let c = text.lastIndexOf("a");
let d = text.indexOf("Exam");
let e = a.concat(text.charAt(0)).toUpperCase();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);"""},
    {"name": "web_dev.js", "kind": "console", "note": "concat, replace, charCodeAt, toLowerCase", "code": """let first = "Web";
let second = "Dev";
let joined = first.concat(" ", second);
console.log(joined);
console.log(joined.replace("Dev", "Design"));
console.log(joined.charCodeAt(0));
console.log(joined.toLowerCase());
console.log(joined.indexOf("dev"));"""},
    {"name": "prices.js", "kind": "console", "note": "Number methods", "code": """let price = 125.456;
let qty = 2;
let total = price * qty;
console.log(price.toFixed(2));
console.log(total.toFixed(1));
console.log(qty.toFixed(2));
console.log((100).toPrecision(4));
console.log(qty.toString() + qty);"""},
    {"name": "fruits.js", "kind": "console", "note": "Arrays", "code": """let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length);
console.log(fruits[1]);
fruits.push("mango");
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
console.log(fruits.indexOf("cherry"));"""},
    {"name": "student.js", "kind": "console", "note": "const objects can change properties", "code": """const student = { name: "Ana", grade: 85 };
student.grade = 90;
console.log(student.name);
console.log(student.grade);
student.name = "Ben";
console.log(student.name + " " + student.grade);
let bonus = 5;
bonus = bonus * 2;
console.log(student.grade + bonus);
console.log(student.name.charAt(0));"""},
    {"name": "null_check.js", "kind": "console", "note": "null and undefined", "code": """let a;
let b = null;
console.log(a);
console.log(b);
if (b) {
   console.log("has value");
} else {
   console.log("no value");
}
console.log(a + "!");
b = 10;
console.log(b * 2);"""},
    # DOM display tracing
    {"name": "list.html + script.js", "kind": "dom", "note": "DOM selectors and innerHTML",
     "html": """<ul>
   <li class="li1" id="idL1">ONE</li>
   <li class="li1" id="idL2">TWO</li>
   <li class="li1" id="idL3">THREE</li>
</ul>""",
     "script": """document.getElementsByClassName('li1')[1].innerHTML = "2";
document.getElementsByTagName('li')[2].innerHTML = "3";
document.getElementById('idL1').innerHTML = "1";""",
     "selector": "li"},
    {"name": "headings.html + script.js", "kind": "dom", "note": "getElementById, querySelector, getElementsByTagName",
     "html": """<h1 class="title" id="h1">First</h1>
<h1 class="title" id="h2">Second</h1>
<p class="note">Note A</p>
<p class="note">Note B</p>""",
     "script": """document.getElementById("h2").innerHTML = "Updated";
document.querySelector(".note").innerText = "Changed";
document.getElementsByTagName("h1")[0].innerHTML = "Top";
document.querySelectorAll(".note")[1].innerHTML = "Last";""",
     "selector": "h1, p"},
]
