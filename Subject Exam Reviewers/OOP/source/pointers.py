# OOP Finals pointers - Modules 10 to 14.
# Source for the downloadable PDF (make_pdf.py).

TITLE = "OOP - Object Oriented Programming"
SUBTITLE = "Finals Exam Pointers - Modules 10 to 14"
FOOTER = "OOP Finals Pointers"
PDF_TITLE = "OOP Finals Exam Pointers - Modules 10 to 14"
INTRO = ("This reviewer compacts Modules 10 to 14 into one place: code reuse and changes in a class hierarchy, "
         "interfaces, abstract classes and interfaces, polymorphism, and modularity. Quick comparisons for "
         "commonly confused terms are at the end.")

CHAPTERS = [
  {
    "num": 1, "title": "Code Reuse, Making Changes in Class Hierarchy", "chapter": "Module 10",
    "sections": [
      {"heading": "Code Reuse",
       "text": "When subclasses take on the information of a superclass, that information is reused at the subclass level. "
               "Every new instance of a subclass has the inherited information as part of its definition.",
       "points": ["Changes to software specification are inevitable, so the hierarchy must handle change well",
                  "Three situations - change in property definition for all subclasses, change for some subclasses, adding/deleting a class"]},
      {"heading": "Change for All Subclasses",
       "terms": [("Without inheritance", "the attribute and method (e.g. employee number and getEmployeeNumber()) are defined in every class, so the change is made in each one; redundancy may cause inconsistency"),
                 ("With inheritance", "defined once in the superclass (Employee); the change is limited there and propagates to subclasses, giving uniform definitions, less redundancy, and better maintenance")]},
      {"heading": "Change for Some Subclasses",
       "text": "In the HomeCare example, getPay() in Employee returns the basic salary, so the manager's allowance was missing.",
       "points": ["Approach 1 - remove getPay() from Employee and define it in every subclass; repeated code is inefficient and hard to maintain",
                  "Approach 2 (better) - keep getPay() in Employee and redefine it in Manager; enhances reuse and minimizes the effect of change",
                  "A redefining method has the same name and parameters as the redefined method, but its implementation may differ"]},
      {"heading": "Adding/Deleting a Class",
       "points": ["Always add a new class as a subclass in the hierarchy, so existing classes are not affected",
                  "Adding Triangle - create a Triangle object in main(), add it to shapeArray, and create Triangle as a subclass of Shape",
                  "Subclassing is specialization and has minimal impact on maintenance",
                  "Deleting subclasses that are not superclasses to other classes also has minimal impact"]},
    ],
  },
  {
    "num": 2, "title": "Interfaces and Inheritance Using Interfaces", "chapter": "Module 11",
    "sections": [
      {"heading": "Multiple Inheritance",
       "text": "Multiple inheritance is inheriting from more than one class (allowed in C++). Java prohibits it because "
               "parents may have identical names and super() would be unclear. Java allows single inheritance with multiple generations.",
       "points": ["Java's alternative is the interface, used with single inheritance to provide some form of multiple inheritance"]},
      {"heading": "Interfaces",
       "terms": [("Interface", "describes what a class does, not how; declares method headers without bodies"),
                 ("Methods", "implicitly public and abstract"),
                 ("Data items", "implicitly public, static, and final"),
                 ("implements", "keyword in the class header; the class must code every method of the interface"),
                 ("extends vs implements", "extends lets a subclass use the parent's nonprivate, nonoverridden members; implements requires the class to write its own version of each method")],
       "points": ["Example - class SalesManager extends SalesPerson implements Manage { ... } must implement authorize()",
                  "If a class does not implement every interface method, it must be declared abstract and its descendants implement the method",
                  "A WorkingDog that extends Dog and implements Worker \"is a\" Dog, \"is an\" Animal, and \"is a\" Worker",
                  "Benefit - when many classes implement Worker, you know the method is named work() without guessing"]},
    ],
  },
  {
    "num": 3, "title": "Abstract Classes and Interfaces", "chapter": "Module 12",
    "sections": [
      {"heading": "Abstract Classes (Review)",
       "points": ["An abstract class exists only to be extended; new Animal(\"Murphy\") does not compile",
                  "A concrete subclass (Dog) must implement the abstract speak(); if Dog should also be a parent only, Dog must be abstract",
                  "@Override is not required, but it adds error checking and documentation",
                  "Polymorphism - the same method name with different implementations"]},
      {"heading": "Attributes and Methods in an Interface",
       "terms": [("Attributes", "always static (one copy) and final (not modifiable); used as constants such as RED = 1"),
                 ("Methods", "always abstract and public, without writing those keywords; the implementing class must provide them"),
                 ("No static methods", "static methods are class specific and never abstract")],
       "points": ["A class that does not implement every interface method must be declared abstract, e.g. abstract class ColourTest implements Colourable",
                  "Interface data cannot be private (no method bodies to read it), is static (no interface objects), and is final (no way to change it)",
                  "An interface of constants lets many classes use the same values without redeclaring them"]},
      {"heading": "Abstract Class vs. Interface",
       "terms": [("Similar", "you cannot instantiate concrete objects from either one"),
                 ("Methods", "abstract classes can have nonabstract methods; interface methods must all be abstract (and public)"),
                 ("Variables", "interface variables must be public, static, and final; abstract classes have no restrictions"),
                 ("Constructors", "an interface has no constructor; an abstract class's constructor runs when a child object is created"),
                 ("How many", "a class extends only one abstract superclass but can implement any number of interfaces")],
       "points": ["An abstract class enhances inheritance; an interface is generally used for multiple inheritance"]},
      {"heading": "Anonymous Inner Classes",
       "text": "An anonymous inner class has no name and is defined inside another class, for a simple class instantiated only once.",
       "points": ["Created with new; it extends a class or implements an interface without writing extends or implements",
                  "It must override all abstract methods of the interface or superclass",
                  "It can use the method's variables declared before it, if they are final or effectively final (assigned only once)"]},
    ],
  },
  {
    "num": 4, "title": "Polymorphism", "chapter": "Module 13",
    "sections": [
      {"heading": "Static and Dynamic Binding",
       "terms": [("Static binding", "variables bound to operations at compile time; limited and harder to maintain"),
                 ("Dynamic binding", "binding at run time; flexible and easier to maintain")],
       "points": ["Procedural Shape example - separate routines (calculateCircleArea, calculateSquareArea) and a switch statement; adding Triangle changes many places, which is error prone",
                  "OO Shape example - shapeArray[i].calculateArea() picks the method from the object's class at run time; no switch statement needed"]},
      {"heading": "Dynamic Method Binding",
       "points": ["Every subclass object \"is a\" superclass object, but not the other way around",
                  "A reference is not an object; it points to a memory address. An abstract superclass reference can hold a concrete subclass object",
                  "Upcasting (promotion, implicit conversion) - assigning a subclass object to a superclass variable",
                  "Instance method calls are virtual by default: the method is chosen when the program runs (dynamic or late method binding)",
                  "Instance methods use dynamic binding; class (static) methods use static binding. Dynamic is flexible; static is faster",
                  "A superclass parameter (e.g. talkingAnimal(Animal a)) accepts any subclass object",
                  "Animal[] animalRef = new Animal[3]; reserves three references only; it can hold Dog, Cow, and Snake objects"]},
      {"heading": "Overloading and Overriding",
       "terms": [("Operation overloading", "using the same name for two or more methods in a class"),
                 ("Same method signature", "same method name and same number and type of formal parameters"),
                 ("Overriding (redefining)", "a subclass method with the same signature as the superclass method; with a different signature both methods exist")],
       "points": ["Overloaded methods are told apart by the number and type of parameters, e.g. new A(4, 5) calls A(int x, int y)",
                  "Two identical methods in one class are invalid (duplicate declaration); the return type alone does not distinguish them",
                  "The same signature in different, unrelated classes is valid"]},
      {"heading": "Polymorphism",
       "text": "Polymorphism is the ability of different objects to perform the appropriate method in response to the same message.",
       "points": ["The sender knows the object can respond, but not its class or how; the receiver's class selects the method",
                  "It needs dynamic binding plus the same method name across classes",
                  "It specifies what should happen rather than how, which supports incremental development (adding Triangle needs minimal changes)"]},
    ],
  },
  {
    "num": 5, "title": "Modularity", "chapter": "Module 14",
    "sections": [
      {"heading": "Program Units and Properties",
       "text": "A method is the smallest program unit; a class is the next bigger unit. Object properties apply to every "
               "object of the class; class properties apply to the class itself. The SalesPerson count example shows the difference:",
       "terms": [("Local count in main()", "correct but cumbersome; a new count = count + 1 is needed for every object"),
                 ("count as object attribute", "each object has its own copy, so two objects print 1 (wrong)"),
                 ("static count", "one shared copy for all instances, so two objects print 2 (correct); this is a class attribute"),
                 ("Class method", "a static method such as getCount() belongs to the class; outside the class call it as SalesPerson.getCount()")]},
      {"heading": "Controlling Visibility",
       "text": "Modules should have minimal coupling and reveal information on a need-to-know basis.",
       "terms": [("private", "hidden from code outside the class; read through a public accessor method"),
                 ("public", "fully visible to all Java code"),
                 ("protected", "accessible to code of its immediate subclass"),
                 ("friendly (default)", "no specifier; accessible within the same package")]},
      {"heading": "Packages",
       "points": ["A package is a named collection of classes; java.lang is imported automatically",
                  "Give users the compiled .class files, not the .java source",
                  "No package statement means the unnamed default package; a class for other packages must be public",
                  "The package statement must be the first statement (comments excepted); only package, import, and comments appear outside classes",
                  "javac -d . Animal.java places the .class file in the folder named by the package (the dot means the current directory)",
                  "Naming convention - your Internet domain in reverse (com.course); a class name conflict is a collision"]},
      {"heading": "Encapsulation",
       "text": "Encapsulation brings attributes and methods together in an object definition and hides how they are implemented. "
               "Data is changed only through public methods, like an egg: the data is the yolk and the methods are the white.",
       "terms": [("Bundling", "associating methods with data as the only way to change the data; increases cohesiveness"),
                 ("Information hiding", "hiding the internal representation of data and methods; separates the what from the how")],
       "points": ["Encapsulation improves maintainability by limiting ripple effects: more cohesion, weaker coupling"]},
    ],
  },
]

COMPARISONS = [
  ("extends vs. implements", "extends = inherit a class's members. implements = must write every interface method."),
  ("Abstract class vs. Interface", "Abstract class = may have concrete methods and any variables; one per class. Interface = abstract methods, public static final data; many per class."),
  ("Static vs. Dynamic binding", "Static = compile time, faster, used by class methods. Dynamic = run time, flexible, used by instance methods."),
  ("Overloading vs. Overriding", "Overloading = same name, different parameters. Overriding = same signature in a subclass."),
  ("Object vs. Class attribute", "Object = one copy per object. Class (static) = one shared copy."),
  ("private vs. protected vs. friendly vs. public", "private = class only. protected = subclass. friendly = same package. public = everyone."),
  ("Bundling vs. Information hiding", "Bundling = methods tied to data. Information hiding = internal details hidden."),
  ("Polymorphism vs. Operation overloading", "Polymorphism = different objects, same message. Overloading = same name for several methods."),
]


# Diagrams drawn under the section with the same heading (see figures.py).
FIGURES = {
  "Adding/Deleting a Class": {"type": "tree", "caption": "A new class is added as a subclass; existing classes stay unchanged.",
      "root": "Shape|name, getName(), calculateArea()", "children": ["Circle|calculateArea()", "Square|calculateArea()", "Triangle|new subclass"]},
  "Interfaces": {"type": "columns", "caption": "extends vs. implements.", "cols": [
      {"title": "extends|(a class)", "rows": ["Only one superclass", "Inherits nonprivate, nonoverridden members", "class B extends A"]},
      {"title": "implements|(an interface)", "rows": ["Any number of interfaces", "Must write its own version of every method", "class B implements I"]}]},
  "Abstract Class vs. Interface": {"type": "columns", "caption": "Abstract class vs. interface.", "cols": [
      {"title": "Abstract class", "rows": ["Can have concrete and abstract methods", "Any kind of variables", "Constructor runs when a child is created", "A class extends only one"]},
      {"title": "Interface", "rows": ["Methods are public and abstract", "Data are public, static, final", "No constructor", "A class implements many"]}]},
  "Static and Dynamic Binding": {"type": "columns", "caption": "Static vs. dynamic binding.", "cols": [
      {"title": "Static binding|compile time", "rows": ["Faster", "Used by class (static) methods", "Limited; harder to maintain"]},
      {"title": "Dynamic binding|run time", "rows": ["Flexible", "Used by instance methods", "Method chosen by the object's class"]}]},
  "Overloading and Overriding": {"type": "columns", "caption": "Overloading vs. overriding (redefining).", "cols": [
      {"title": "Overloading", "rows": ["Same name, different parameters", "Usually in the same class", "Return type alone does not count"]},
      {"title": "Overriding (redefining)", "rows": ["Same signature as the superclass method", "In a subclass", "Implementation may differ"]}]},
  "Controlling Visibility": {"type": "columns", "caption": "Who can access an entity with each access specifier.", "cols": [
      {"title": "private", "rows": ["Own class only"]},
      {"title": "friendly (none)", "rows": ["Same package"]},
      {"title": "protected", "rows": ["Subclasses"]},
      {"title": "public", "rows": ["All other code"]}]},
  "Encapsulation": {"type": "nested", "caption": "Encapsulation: methods are the only way to reach the hidden data.",
      "box": {"label": "Object", "detail": "attributes and methods bundled together", "children": [
          {"label": "Public methods (interface)", "detail": "bundling: the only means of affecting the data", "children": [
              {"label": "Private data", "detail": "information hiding: internal representation is hidden"}]}]}},
}
