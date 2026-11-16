# OOP Finals mock exam - Modules 10 to 14 (multiple choice only).
# MC item: (question, correct_answer, [3 distractors], optional_note)
# CODE items: dicts with a Java program; make_exam.py compiles and runs each one and checks
# that the correct option equals the real output (lines joined with " / ").

M10 = "Module 10 - Code Reuse, Making Changes in Class Hierarchy"
M11 = "Module 11 - Concepts of Interface, Inheritance Using Interface"
M12 = "Module 12 - Attributes and Methods in an Interface, Abstract Class and Interface"
M13 = "Module 13 - Polymorphism"
M14 = "Module 14 - Modularity"

MC = {
M10: [
    ("By allowing information of a superclass to be taken on by subclasses, the information is said to be:",
     "Reused at the subclass level", ["Hidden from the subclass", "Deleted from the superclass", "Duplicated in every object"], None),
    ("Which statement describes changes to software specification?",
     "Changes to software specification are inevitable", ["Changes to software specification never happen", "Changes are only allowed before coding", "Changes affect only the user interface"], None),
    ("Which of the following is one of the situations discussed for changes in a class hierarchy?",
     "Change in property definition for some subclasses", ["Change in the programming language for all subclasses", "Change in the operating system for some subclasses", "Change in the compiler used by the superclass"],
     "The three situations: change for all subclasses, change for some subclasses, and adding/deleting a class."),
    ('Without inheritance, a change to an attribute shared by several classes must be made:',
     'Individually in every class, which may lead to inconsistency', ['Only once, in the superclass, and it propagates to every subclass', 'Only in main(), since attributes are defined there for all classes', 'Automatically by the compiler for every class that uses it'], None),
    ('With inheritance, a change to an attribute defined in the superclass is:',
     'Limited to the superclass, and it propagates to the subclasses', ['Copied by hand into each subclass of the hierarchy', 'Made in the last subclass and passed up to the superclass', 'Made in main() and passed to every class'], None),
    ("Defining a property once in the superclass and letting subclasses inherit it results in:",
     "Uniform and consistent property definitions and minimal redundancy", ["Different property definitions and more redundancy in each subclass", "Inconsistent definitions that must be repeated at the subclass level", "Harder maintenance, since every subclass must be changed separately"], None),
    ("A redefining method has the same method name and parameter definition as the redefined method, but:",
     "Its implementation may differ", ["It must have a different name", "It must have more parameters", "It cannot return a value"], None),
    ("When adding a new class into an existing class hierarchy, it is always recommended that the new class be created as a:",
     "Subclass in the class hierarchy", ["Superclass of all existing classes", "Copy of an existing class", "Separate program"], None),
    ("Subclassing is a desired design practice in object-oriented software engineering because:",
     "It has minimal impact on software maintenance", ["It removes the need for constructors in subclasses", "It makes every attribute public", "It prevents code reuse"], "Subclassing is specialization."),
    ("Deleting subclasses that are NOT superclasses to other classes:",
     "Has a minimal impact on software maintenance", ["Breaks every other class in the class hierarchy", "Requires rewriting the superclass", "Is not allowed in Java"], None),
    ('What is code reuse in a class hierarchy?',
     'Subclasses use members already defined in a superclass', ['Every subclass rewrites all of the methods of its superclass again', 'Objects copy all of their data into brand new objects when created', 'Methods are called again and again inside a loop until it ends'], None),
    ('What is a superclass?',
     'A general class whose members are inherited by subclasses', ['A class that inherits all members from a more general class', 'A class that cannot have any subclasses at all', 'A class that contains only static methods'], None),
    ('What is a subclass?',
     'A specialized class that inherits from another class', ['A general class that many other classes inherit from', 'A class that cannot inherit from any class', 'A class with no attributes or methods'], None),
    ('What does it mean to redefine (override) a method?',
     'A subclass gives a same-signature method its own body', ['A class defines two methods with the same name but different parameters', 'A method is deleted from the superclass', 'A method is copied into every subclass unchanged'], None),
],

M11: [
    ("The capability to inherit from more than one class is called:",
     "Multiple inheritance", ["Single inheritance", "Polymorphism", "Encapsulation"], None),
    ("Which of the following languages allows a subclass to inherit from more than one parent class?",
     "C++", ["Java", "Both C++ and Java", "Neither C++ nor Java"], None),
    ("Why is multiple inheritance prohibited in Java?",
     "Parent classes may have identical names, and super() would be unclear with multiple parents", ["Java does not support classes with parents, so only interfaces can be inherited by a subclass", "Interfaces are slower than classes, so Java limits each class to one parent", "Constructors are not allowed in Java subclasses, so super() cannot be called"], None),
    ("A class inheriting from a superclass that has inherited from another superclass represents:",
     "Single inheritance with multiple generations", ["Multiple inheritance with a single generation", "Multiple inheritance through an interface", "An anonymous inner class with two parents"], None),
    ("Java's alternative to multiple inheritance is the:",
     "Interface", ["Abstract method", "Package", "Static variable"], None),
    ("In an interface, all methods (if any) are implicitly:",
     "public and abstract", ["private and static", "protected and final", "public and static"], None),
    ("In an interface, all data items (if any) are implicitly:",
     "public, static, and final", ["private and abstract", "protected and static", "public and abstract"], None),
    ("An interface is a description of:",
     "What a class does, but not how it is done", ["How a class does something, but not what it does", "The private data of a class", "The constructor of a class"], None),
    ("Which keyword is placed in a class header to use an interface?",
     "implements", ["extends", "interface", "super"], None),
    ("Whereas extends lets a subclass use nonprivate, nonoverridden members of its parent, implements requires the class to:",
     "Implement its own version of each method", ["Inherit the parent's private data and methods", "Call super() twice", "Become an interface"], None),
    ("The interface construct in Java is used with single inheritance to provide:",
     "Some form of multiple inheritance", ["Some form of static binding", "Some form of operation overloading", "Some form of information hiding"], None),
    ('When a class implements an interface but does not implement all of its methods:',
     'The class must be declared abstract', ['The compiler adds empty bodies for the missing methods automatically', 'The class becomes final and can no longer be extended', 'The interface methods are ignored when the program runs'], None),
    ('A class Dog2 extends Dog and implements Worker. Which statement is true?',
     'A Dog2 "is a" Dog and "is a" Worker', ['A Dog2 is a Dog, but it is not a Worker', 'A Dog2 is a Worker, but it is not a Dog', 'A Dog2 is neither a Dog nor a Worker'], 'A class that implements an interface represents a situation similar to inheritance.'),
    ('What is an interface in Java?',
     'A construct of abstract methods that a class must implement', ['A class intended to be extended, not directly instantiated', 'A class from which objects can be instantiated', 'A named collection of related classes'], None),
    ('What is multiple inheritance?',
     'Inheriting from more than one class', ['Inheriting from one class only', 'Having many objects of one class', 'Having several methods with one name'], None),
    ('Which keyword is used for a class to inherit from a superclass?',
     'extends', ['implements', 'inherits', 'super'], None),
    ('How many interfaces can a Java class implement?',
     'Any number of interfaces', ['Only one interface', 'At most two interfaces', 'None, if it extends a class'], None),
],

M12: [
    ('What happens when code tries to create an object of an abstract class with new?',
     'The program does not compile', ['The object is created with default values', 'The program runs but throws an error later', 'The object is created as an interface instead'], 'No objects of an abstract class can exist.'),
    ("You create an abstract class such as Animal only so that you can:",
     "Extend it", ["Instantiate it", "Hide it from subclasses", "Use it as a package"], None),
    ("The @Override annotation for a method such as speak() is:",
     "Not necessary, but it provides error checking and documentation", ["Required, or the program will not compile at all without it", "Used to create a new object of the parent class", "Used only in interfaces, never in subclasses"], None),
    ("Using the same method name to indicate different implementations is called:",
     "Polymorphism", ["Encapsulation", "Bundling", "Static binding"], None),
    ("Data attributes declared in an interface construct are always:",
     "static and final", ["private and abstract", "protected and static", "public and non-final"], "Static because there is only one copy; final because they are not modifiable."),
    ('Names for values with a specific meaning that are declared in an interface, such as int RED = 1, are called:',
     'Constants', ['Variables', 'Parameters', 'Literals'], None),
    ("All methods in an interface are:",
     "Abstract methods that any class using the interface must implement", ["Static methods that the implementing class may not override", "Private methods hidden from every class that uses the interface", "Constructors that run when a class implements the interface"], None),
    ("Methods in an interface may NOT be static because:",
     "Static methods, being class specific, are never abstract", ["Static methods are always private, so no class could call them", "Interfaces cannot contain methods, only constant data attributes", "Static methods must have constructors, which interfaces do not have"], None),
    ("Abstract classes and interfaces are similar in that:",
     "You cannot instantiate concrete objects from either one", ["Both can contain only private methods and private data fields", "Both must have constructors that create objects", "A class can extend any number of either of them"], None),
    ("Abstract classes differ from interfaces because:",
     "Abstract classes can contain nonabstract methods, but all interface methods must be abstract", ["Interfaces can contain constructors and nonabstract methods, but abstract classes cannot", "Abstract classes cannot have variables, but interfaces can have any kind of variable", "Interfaces can be instantiated with new, but abstract classes can never be instantiated"], None),
    ("A class can inherit from how many abstract superclasses, and implement how many interfaces?",
     "Only one abstract superclass, but any number of interfaces", ["Any number of abstract superclasses, but only one interface", "Only one of each", "None of either"], None),
    ('Which is true about constructors in abstract classes and interfaces?',
     "An interface has none; an abstract class's runs when a child object is created", ["An abstract class has no constructor; an interface's constructor is invoked when a class implements it", 'Both have constructors that are called directly with the new operator', 'Neither can have a constructor, so subclasses must define all of them'], None),
    ('Which is true about variables in interfaces and abstract classes?',
     'Interface variables must be public, static, and final; abstract classes have no restrictions on variables', ['Abstract class variables must be public, static, and final; interfaces have no restrictions on variables', 'Both may only contain private variables', 'Neither may contain any variables at all'], None),
    ("An interface is generally used for achieving:",
     "Multiple inheritance in Java", ["Static binding", "Faster compilation", "Information hiding in packages"], None),
    ("Given public abstract class LandVehicle { ... }, which statement is invalid?",
     "LandVehicle l = new LandVehicle();", ["LandVehicle l;", "class Car extends LandVehicle { }", "LandVehicle[] list = new LandVehicle[3];"], None),
    ("Interface data fields must not be private because:",
     "Interface methods cannot contain method bodies, so there is no way to retrieve private data", ["Private data uses too much memory, since every object would store its own copy of it", "Interfaces are always final, so private fields would be hidden from the interface itself", "Private data cannot be static, and every field of an interface must be a static field"], None),
    ("The purpose of creating an interface containing constants is to:",
     "Provide a set of data that a number of classes can use without having to redeclare the values", ["Hide the data from every class so that the values can never be read by any program", "Create objects of the interface so that each object holds its own separate copy of the values", "Replace all the classes in a program with one interface that contains every method"], None),
    ("A class that has no name and is defined inside another class is a(n):",
     "Anonymous inner class", ["Abstract class", "Interface", "Package"], None),
    ("When defining an anonymous inner class, you:",
     "Use the new operator and do not use the keywords extends or implements", ["Must use the keyword extends, and give the class a name before using it", "Must give the class a name and save it in its own separate .java file", "Use the keyword implements, and declare the class outside the main class"], None),
    ("An anonymous inner class must either implement an interface or extend another class, and it must:",
     "Override all the abstract methods in the interface or superclass", ["Have at least two constructors that call the superclass default constructor", "Be declared static so that it can be instantiated more than once in the program", "Be declared in a separate package from the class in which it is defined"], None),
    ("A variable whose value is assigned only once, which an anonymous inner class may access, is called:",
     "Effectively final", ["Static", "Abstract", "Protected and static"], None),
    ('What is an abstract class?',
     'A class intended to be extended, not directly instantiated', ['A class with no inherited properties or methods', 'A class containing only static methods and fields', 'A class that cannot have constructors of its own'], None),
    ('What is a concrete class?',
     'A class from which objects can be instantiated', ['A class that exists only as a diagram', 'A class that can only be extended', 'A class that declares only abstract methods'], None),
    ('What is an abstract method?',
     'A method declared without a body that subclasses must implement', ['A method that has a body but no return type or parameters', 'A method that can only be called once by the main method', 'A static method that belongs to the class and not the object'], None),
    ('Which keyword declares a class or method as abstract?',
     'abstract', ['static', 'final', 'interface'], None),
    ('What is an anonymous inner class?',
     'A class with no name that is defined inside another class', ['A class with a fixed name that cannot ever be changed', 'A public class that is saved alone in its own file', 'A class that has no methods and no attributes at all'], None),
],

M13: [
    ("The binding of variables to operations at compile time is known as:",
     "Static binding", ["Dynamic binding", "Late binding", "Run-time binding"], None),
    ("The binding of variables to operations at run time is known as:",
     "Dynamic binding", ["Static binding", "Compile-time binding", "Early binding"], None),
    ("Which statement about static and dynamic binding is correct?",
     "Static binding is limited and may lead to maintenance difficulty; dynamic binding provides design flexibility", ["Static binding provides design flexibility; dynamic binding is limited and causes maintenance difficulty", "Both are identical", "Only procedural languages use dynamic binding"], None),
    ('With static binding, adding a new kind of object to a program usually requires changes in:',
     'Multiple places in the code, which is error prone', ['Only the new class, with no other changes', 'Only the main() method of the program', 'No places, since the compiler adapts automatically'], None),
    ('With dynamic binding, the method that runs for an overridden call is selected based on:',
     'The class of the object referenced at run time', ['The type of the reference variable at compile time', 'The order the classes were written in the file', 'The name of the variable that holds the reference'], None),
    ('SalariedEmployee is a subclass of Employee. Which statement is true?',
     'Every SalariedEmployee is an Employee, but not every Employee is a SalariedEmployee', ['Every Employee is a SalariedEmployee, but not every SalariedEmployee is an Employee', 'No SalariedEmployee can ever be treated or stored as an Employee reference', 'Employee and SalariedEmployee are unrelated types that share no members'], None),
    ("A reference is not an object, but it:",
     "Points to a memory address", ["Contains all the object's methods", "Is created with the keyword new", "Is always abstract"], None),
    ("Assigning a variable or constant of one type to a variable of another type is called:",
     "Promotion, implicit conversion, or upcasting", ["Overloading, overriding, or redefining", "Encapsulation, bundling, or information hiding", "Static binding, early binding, or fixed binding"], None),
    ("Using a reference polymorphically allows you to:",
     "Extend a base class and use extended objects when a base class type is expected", ["Create objects of an abstract class directly by using the keyword new", "Avoid writing subclasses, since one reference can hold every method", "Make all methods static so that they are bound when the program is compiled"], None),
    ("In Java, all instance method calls are virtual method calls by default. This means:",
     "The method used is determined when the program runs", ["The method is chosen by the compiler before the program runs", "Methods cannot be overridden", "Methods must be static"], None),
    ("An application's ability to select the correct subclass method depending on the argument type is known as:",
     "Dynamic method binding", ["Static method binding", "Information hiding", "Operation overloading"], "It is also called late method binding."),
    ("In Java, which methods use dynamic binding and which use static binding?",
     "Instance methods use dynamic binding; class methods use static binding", ["Class methods use dynamic binding; instance methods use static binding", "All methods use static binding", "All methods use dynamic binding"], None),
    ("Comparing the two kinds of binding:",
     "Dynamic binding makes programs flexible; static binding operates more quickly", ["Static binding makes programs flexible; dynamic binding operates more quickly", "Both are equally fast and flexible", "Dynamic binding is not supported in Java"], None),
    ("Dynamic method binding is most useful when you want a method whose parameters:",
     "Might be one of several types, such as any Animal descendant", ["Are always primitive types, such as int or double values", "Are always strings, so that the method can print their names", "Cannot be objects, because objects are bound at compile time"], None),
    ("When you create an array of objects in Java, you are actually creating:",
     "Space for references to objects", ["The objects themselves, already constructed", "A new class", "A package of objects"], None),
    ("Animal[] animalRef = new Animal[3]; Given that Animal is abstract, this statement:",
     "Reserves memory for three Animal references without instantiating any Animal", ["Creates three Animal objects, one for each element of the animalRef array", "Does not compile, because an array cannot be declared using an abstract type", "Creates one Dog, one Cow, and one Snake object to fill the three array elements"], None),
    ("An array of superclass references can hold subclass references:",
     "Whether the superclass is abstract or concrete", ["Only if the superclass is concrete, never abstract", "Only if the superclass is abstract, never concrete", "Never, since every array element must be one type"], None),
    ("The ability to use the same name for two or more methods in a class is known as:",
     "Operation overloading", ["Polymorphism", "Static binding", "Encapsulation"], None),
    ("Two methods have the same method signature if:",
     "Their names are the same and the number and type of formal parameters are the same", ["Their return types are the same, even if their names and parameters are different", "They are declared in the same package and have the same number of statements inside", "They have the same access specifier and are both declared static in their classes"], None),
    ("Given constructors A(), A(int x), A(int x, int y), and A(String x), which is called by new A(\"hello\")?",
     "A(String x)", ["A()", "A(int x)", "A(int x, int y)"], None),
    ("Declaring two public void a1() {} methods in the same class is:",
     "Invalid, reported as a duplicate method declaration", ["Valid overloading, because the two methods are separate", "Valid overriding, because the second replaces the first", "Valid only if one of the two methods is declared static"], None),
    ("Can the return type alone distinguish overloaded methods from one another?",
     "No, the return type does not distinguish overloaded methods", ["Yes, the return type alone always distinguishes them from each other", "Only for static methods declared in the same class", "Only for methods that are declared in an interface"], None),
    ("Declaring methods of the same signature in different, unrelated classes is:",
     "Valid in object-oriented programming", ["Invalid", "Allowed only for constructors", "Allowed only if the classes are abstract"], None),
    ("For a subclass method to redefine (override) a superclass method:",
     "The method signatures of the two methods must be the same", ["The subclass method must have more parameters than the other", "The methods must have different names", "The superclass method must be private"], None),
    ("The ability of different objects to perform the appropriate method in response to the same message is known as:",
     "Polymorphism", ["Operation overloading", "Bundling", "Modularity"], None),
    ("In polymorphism, the sender of a message (such as main()):",
     "Knows the object can respond, but not its class or how it will respond", ["Must know the exact class of the receiver before it can send any message", "Decides which method the receiving object uses to respond to the message", "Must use a switch statement to choose the method for each type of object"], None),
    ("Polymorphism is facilitated by:",
     "Dynamic binding and the ability to use the same name for similar methods across class definitions", ["Static binding and the requirement for unique routine names in each and every class definition", "Private variables and the use of switch statements to select the correct method", "Packages and import statements that bring similar classes into the same program"], None),
    ("Polymorphism encourages programmers to specify:",
     "What should happen rather than how it should happen", ["How it should happen rather than what should happen", "Only the data, not the methods", "Only the user interface"], "This promotes incremental program development."),
    ('What is polymorphism?',
     'The ability of different objects to respond to the same message in their own way', ['The ability of one class to inherit directly from several parent classes at once', "The hiding of an object's internal data and methods from the other objects", 'The grouping of related classes and interfaces into one named package'], None),
    ('What is static binding?',
     'Binding of a method call to its code at compile time', ['Binding of a method call to its code at run time', 'Binding of two classes into one package', 'Binding of data and methods into an object'], None),
    ('What is dynamic binding?',
     'Binding of a method call to its code at run time', ['Binding of a method call to its code at compile time', 'Binding of attributes to a static class', 'Binding of a variable to a constant'], None),
    ('What is operation (method) overloading?',
     'Same method name, different parameter lists', ['Using the same method signature in a subclass', 'Using a method that has no body', 'Using a static method from another class'], None),
    ('What is a method signature?',
     'The method name together with the number and types of its parameters', ["The method's return type together with its access specifier keyword", 'The comment written above the method to describe what it does', 'The name of the class that owns the method and its package'], None),
    ('What is upcasting?',
     'Treating a subclass object as its superclass type', ['Treating a superclass object as a subclass object', 'Changing an int into a String', 'Making a private method public'], None),
],

M14: [
    ("Which is often viewed as the smallest program unit to be considered as a subprogram?",
     "A method", ["A class", "A package", "An object"], None),
    ("Compared to a method, what is the next bigger unit under design?",
     "A class definition", ["A statement", "A variable", "An attribute"], None),
    ("Properties that are specific to objects and apply to all objects from the same class are:",
     "Object properties", ["Class properties", "Package properties", "Static properties"], None),
    ('If count is an object (instance) attribute incremented in the constructor, creating two objects results in:',
     'Two separate counts, each equal to 1', ['One shared count with the value 2', 'One shared count with the value 0', 'A compile error, since count must be static'], None),
    ('Declaring an attribute as static allows it to be:',
     'Shared among all instances of the class', ['Copied separately into every object', 'Hidden from every method of the class', "Changed only by the class's constructor"], None),
    ("An attribute definition preceded with the keyword static is a(n):",
     "Class attribute", ["Object attribute", "Local variable", "Abstract attribute"], None),
    ('Outside of the class definition, a static method is accessed by:',
     'Through the class name, as in ClassName.method()', ['Creating an object first, as in obj.method() only', 'Importing it as a separate package', 'Declaring it again in the other class'], None),
    ("Ideally, objects reveal information on a:",
     "Need-to-know basis", ["Public basis", "Random basis", "Package-wide basis"], None),
    ("Which access specifier makes entities hidden from code fragments external to the class?",
     "private", ["public", "protected", "friendly"], None),
    ("Which access specifier makes entities fully visible from all other Java code?",
     "public", ["private", "protected", "friendly"], None),
    ("Which access specifier makes entities accessible to code fragments of its immediate subclass?",
     "protected", ["private", "public", "static"], None),
    ("For entities with no access specifier, this default visibility is assumed, giving access within the same package:",
     "friendly", ["protected", "public", "private"], None),
    ("Private variables are used within the class definition, or accessed outside it through a:",
     "Public accessor method", ["Private constructor", "Static import", "Protected package"], None),
    ("A named collection of classes is a:",
     "Package", ["Method", "Interface", "Constructor"], None),
    ("Which package contains fundamental classes and is imported automatically into every program?",
     "java.lang", ["java.util", "javax.swing", "com.course"], None),
    ("When you create professional classes for others to use, you usually provide them with the:",
     "Compiled .class files", [".java source code files", "Package declarations only", "Text files of your code"], None),
    ("A class that will be placed in a nondefault package for others to use must be:",
     "public", ["private", "abstract", "static"], None),
    ("If a file contains a package declaration, it must be:",
     "The first statement in the file (excluding comments)", ["The last statement in the file, after the class definition", "Inside the class definition, before the first method", "After all of the import statements at the top of the file"], None),
    ("Which statements are the only ones that appear outside class definitions in Java program files?",
     "The package statement, import statements, and comments", ["Variable declarations, constructors, and methods", "Constructors, the main() method, and comments", "Interfaces, abstract methods, and static variables"], None),
    ("In the command javac -d . Animal.java, the -d option means:",
     "Place the generated .class file in a folder (directory)", ["Delete the Animal.java source file after it is compiled", "Debug the program and display each error in detail", "Download the package that Animal.java needs to compile"], "The dot means the package path is created within the current directory."),
    ("The Java package-naming convention uses:",
     "Your Internet domain name in reverse order (e.g., com.course)", ["Your full name followed by the date the package was created", "The class name written in uppercase (e.g., ANIMAL.DOG)", "Random numbers so that no two package names can ever conflict"], None),
    ("A class naming conflict is sometimes called a:",
     "Collision", ["Package", "Binding", "Overload"], None),
    ("The bringing together of a set of attributes and methods into an object definition and hiding their implementational structure from the object's users is:",
     "Encapsulation", ["Polymorphism", "Inheritance", "Dynamic binding"], None),
    ("Encapsulation enhances software maintainability by:",
     "Increasing cohesiveness through bundling and reducing coupling by hiding implementation details", ["Increasing the coupling between components by making all data and methods public to other objects", "Removing methods from objects so that other objects use the data directly", "Copying the same data into every object so that changes affect all objects"], None),
    ("The act of associating a set of methods with a set of data as the only means of affecting the values of the data is:",
     "Bundling", ["Information hiding", "Overloading", "Upcasting"], None),
    ("The hiding of internal representation of data and methods from the users of these data and methods is:",
     "Information hiding", ["Bundling", "Promotion", "Collision"], "It separates the what from the how of object definition."),
    ('What is modularity?',
     'Dividing a program into smaller units such as methods and classes', ["Combining all of the program's code into one long main method", 'Hiding the data of an object from all users of that object', 'Using one name for several methods that have different parameters'], None),
    ('What is a class (static) attribute?',
     'An attribute shared by all objects of the class', ['An attribute that each object has its own copy of', 'An attribute that can never be changed', 'An attribute that belongs to a package'], None),
    ('What is an object (instance) attribute?',
     'An attribute each object has its own copy of', ['An attribute shared by all objects of the class', 'An attribute declared only in an interface', 'An attribute that belongs to the main method'], None),
    ('What is a package in Java?',
     'A named collection of classes', ['A single compiled .class file', 'A method that groups other methods', 'An interface that holds constants'], None),
],
}

# ── Code-reading MC (verified by compiling and running with javac/java) ─────
CODE = [
    {"module": M13, "q": "What is the output of this program?", "file": "AnimalArrayDemo",
     "code": """abstract class Animal {
   public abstract void speak();
}
class Dog extends Animal {
   public void speak() { System.out.println("Woof!"); }
}
class Cow extends Animal {
   public void speak() { System.out.println("Moo!"); }
}
class Snake extends Animal {
   public void speak() { System.out.println("Ssss!"); }
}
public class AnimalArrayDemo {
   public static void main(String[] args) {
      Animal[] animalRef = new Animal[3];
      animalRef[0] = new Dog();
      animalRef[1] = new Cow();
      animalRef[2] = new Snake();
      for (int x = 0; x < 3; ++x)
         animalRef[x].speak();
   }
}""",
     "wrong": ["Woof! / Woof! / Woof!", "Nothing, because Animal is abstract", "Ssss! / Moo! / Woof!"],
     "note": "Each reference chooses the speak() method of the object it refers to (dynamic method binding)."},
    {"module": M14, "q": "What is the output of this program (count is static)?", "file": "SalesPerson",
     "code": """class SalesPerson {
   String employeeId;
   static int count = 0;
   SalesPerson(String aEmployeeId) {
      employeeId = aEmployeeId;
      count = count + 1;
   }
   static int getCount() { return count; }
   public static void main(String argv[]) {
      SalesPerson s1 = new SalesPerson("12345S");
      SalesPerson s2 = new SalesPerson("33221K");
      System.out.println(getCount() + " salespersons have been created");
   }
}""",
     "wrong": ["1 salespersons have been created", "0 salespersons have been created", "The program does not compile"],
     "note": "A static count is one shared copy, so both constructors increment the same variable."},
    {"module": M14, "q": "What is the output of this program (count is NOT static)?", "file": "SalesPerson",
     "code": """class SalesPerson {
   String employeeId;
   int count = 0;
   SalesPerson(String aEmployeeId) {
      employeeId = aEmployeeId;
      count = count + 1;
   }
   int getCount() { return count; }
   public static void main(String argv[]) {
      SalesPerson s1 = new SalesPerson("12345S");
      SalesPerson s2 = new SalesPerson("33221K");
      System.out.println(s1.getCount() + " salespersons have been created");
   }
}""",
     "wrong": ["2 salespersons have been created", "0 salespersons have been created", "The program does not compile"],
     "note": "As an object attribute, each object has its own count with the value 1."},
    {"module": M13, "q": "What is the output of this program?", "file": "D",
     "code": """class C {
   C() {}
   public void c1() { System.out.println("C.c1()"); }
}
class D extends C {
   D() {}
   public void c1() {
      super.c1();
      System.out.println("D.c1()");
   }
   public static void main(String args[]) {
      D thisD = new D();
      thisD.c1();
   }
}""",
     "wrong": ["D.c1()", "C.c1()", "D.c1() / C.c1()"],
     "note": "D's c1() overrides C's c1(); super.c1() runs the superclass version first."},
    {"module": M13, "q": "What is the output of this program?", "file": "D",
     "code": """class C {
   C() {}
   public void c1() { System.out.println("C.c1()"); }
}
class D extends C {
   D() {}
   public void c1(int i) {
      super.c1();
      System.out.println("D.c1()");
   }
   public static void main(String args[]) {
      D thisD = new D();
      thisD.c1();
      thisD.c1(3);
   }
}""",
     "wrong": ["D.c1() / C.c1() / D.c1()", "C.c1() / D.c1()", "The program does not compile"],
     "note": "c1(int i) has a different signature, so it does not override c1(); both methods exist."},
    {"module": M13, "q": "Which constructor message is printed?", "file": "A",
     "code": """class A {
   A() { System.out.println("A()"); }
   A(int x) { System.out.println("A(int x)"); }
   A(int x, int y) { System.out.println("A(int x, int y)"); }
   A(String x) { System.out.println("A(String x)"); }
   public static void main(String args[]) {
      A thisA = new A(4, 5);
   }
}""",
     "wrong": ["A()", "A(int x)", "A(String x)"],
     "note": "Overloaded methods are distinguished by the number and type of parameters."},
    {"module": M12, "q": "What is the output of this program?", "file": "ColourDemo",
     "code": """interface Colourable {
   int RED = 1;
   int GREEN = 2;
   int BLUE = 3;
}
public class ColourDemo implements Colourable {
   public static void main(String[] args) {
      System.out.println(GREEN + BLUE);
   }
}""",
     "wrong": ["23", "GREENBLUE", "The program does not compile, because RED, GREEN, and BLUE are not declared static"],
     "note": "Interface data attributes are implicitly public, static, and final."},
    {"module": M11, "q": "What is the output of this program?", "file": "DemoWorkingDog",
     "code": """interface Worker {
   void work();
}
class Dog {
   public void speak() { System.out.println("Woof!"); }
}
class WorkingDog extends Dog implements Worker {
   public void work() {
      speak();
      System.out.println("I am a dog who works");
   }
}
public class DemoWorkingDog {
   public static void main(String[] args) {
      WorkingDog aSheepHerder = new WorkingDog();
      aSheepHerder.speak();
      aSheepHerder.work();
   }
}""",
     "wrong": ["Woof! / I am a dog who works", "I am a dog who works / Woof!", "The program does not compile, because Dog does not implement Worker"],
     "note": "work() calls the inherited speak() first, so Woof! appears twice."},
]


# OUTPUT items: output tracing. make_exam.py compiles and runs each program; the student types
# every printed line in order (scored per line).
# OUTPUT items: output tracing in the instructor's style (OOP Quiz Set A): inheritance chains,
# getters/setters named after the field (name(String) / name()), constructors with super(),
# overloading, and state changes between prints. Each item is a short piece (2-5 output lines)
# so it is not overwhelming. make_exam.py compiles and runs each program.
OUTPUT = [
  {"module": M10, "file": "MyMain", "name": 'Default constructors in a chain',
   "code": """public class Person{
   private String id; private String name;
   public Person(){ name="name"; id="id";}
   public String name(){return name;}
   public String id(){return id;}}
public class Employee extends Person{
   private String salary;
   public Employee(){ super(); salary="salary";}
   public String salary(){return salary;}}
public class Teaching extends Employee{
   public Teaching(){super();}
   public String course(){return "course";}}
public class Professor extends Teaching{
   private String research;
   private String course;
   public Professor(){ super(); this.research="research"; course = "course";}
   public String course(){
      course = course + "," + research;
      return course;}}
public class MyMain{
   public static void main(String args[]){
      Professor prof1 = new Professor();
      System.out.println(prof1.id());
      System.out.println(prof1.name());
      System.out.println(prof1.salary());
      System.out.println(prof1.course());
   }
}""",
   "note": 'Based on the OOP Quiz (Set A). Nothing was set, so the inherited fields keep the defaults from Person() and Employee(). Professor\'s course() appends "," + research.'},
  {"module": M10, "file": "MyMain", "name": 'Setters and an overloaded constructor',
   "code": """public class Person{
   private String id; private String name;
   public Person(){ name="name"; id="id";}
   public void name(String name){this.name=name;}
   public String name(){return name;}
   public void id(String id){ this.id=id;}
   public String id(){return id;}}
public class Employee extends Person{
   private String salary;
   public Employee(){ super(); salary="salary";}
   public void salary(String salary){ this.salary = salary;}
   public String salary(){return salary;}}
public class Teaching extends Employee{
   public Teaching(){super();}
   public String course(){return "course";}}
public class Professor extends Teaching{
   private String research;
   private String course;
   public Professor(String course){ super(); this.research="research"; this.course = course;}
   public void research(String research){ this.research = research;}
   public String course(){
      course = course + "," + research;
      return course;}}
public class MyMain{
   public static void main(String args[]){
      Professor prof2 = new Professor("Thesis1");
      prof2.id("1234");
      prof2.name("Mr.Prof2");
      prof2.salary("95300");
      prof2.research("Security");
      System.out.println(prof2.id());
      System.out.println(prof2.name());
      System.out.println(prof2.salary());
      System.out.println(prof2.course());
   }
}""",
   "note": 'Based on the OOP Quiz (Set A). The setters are inherited from Person and Employee; Professor(String) stores "Thesis1" as the course.'},
  {"module": M10, "file": "MyMain", "name": 'A getter that changes its own field',
   "code": """public class Person{
   private String id; private String name;
   public Person(){ name="name"; id="id";}
   public void name(String name){this.name=name;}
   public String name(){return name;}
   public void id(String id){ this.id=id;}
   public String id(){return id;}}
public class Employee extends Person{
   private String salary;
   public Employee(){ super(); salary="salary";}
   public String salary(){return salary;}}
public class Teaching extends Employee{
   public Teaching(){super();}
   public String course(){return "course";}}
public class Professor extends Teaching{
   private String research;
   private String course;
   public Professor(){ super(); this.research="research"; course = "course";}
   public void research(String research){ this.research = research;}
   public String course(){
      course = course + "," + research;
      return course;}}
public class MyMain{
   public static void main(String args[]){
      Professor prof3 = new Professor();
      prof3.name("Mr.Prof3");
      prof3.research("DataMining");
      System.out.println(prof3.name());
      System.out.println(prof3.salary());
      System.out.println(prof3.course());
      System.out.println(prof3.course());
   }
}""",
   "note": 'Based on the OOP Quiz (Set A). course() saves the longer string back into the field, so calling it a second time appends research again.'},
  {"module": M10, "file": "MyMain", "name": 'Same method name, different classes',
   "code": """public class Person{
   private String id; private String name;
   public Person(){ name="name"; id="id";}
   public void name(String name){this.name=name;}
   public String name(){return name;}
   public void id(String id){ this.id=id;}
   public String id(){return id;}}
public class Employee extends Person{
   private String salary;
   public Employee(){ super(); salary="salary";}
   public void salary(String salary){ this.salary = salary;}
   public String salary(){return salary;}}
public class Teaching extends Employee{
   public Teaching(){super();}
   public String course(){return "course";}}
public class Lecturer extends Teaching{
   private String course;
   public Lecturer(){ super(); course = "course";}
   public Lecturer(String course){ super(); this.course = course;}
   public String course(){ return course;}}
public class MyMain{
   public static void main(String args[]){
      Lecturer lec1 = new Lecturer();
      Lecturer lec2 = new Lecturer("OOP");
      lec2.id("4567");
      lec2.salary("35100");
      System.out.println(lec1.name());
      System.out.println(lec1.course());
      System.out.println(lec2.id());
      System.out.println(lec2.salary());
      System.out.println(lec2.course());
   }
}""",
   "note": 'Based on the OOP Quiz (Set A). Lecturer redefines course() to return its own field; values that were never set keep the defaults.'},
  {"module": M10, "file": "MyMain", "name": 'Redefining pay() with super',
   "code": """public class Employee{
   private int basic;
   public Employee(){ basic=1000;}
   public Employee(int basic){ this.basic=basic;}
   public int pay(){return basic;}}
public class Manager extends Employee{
   private int allowance;
   public Manager(int basic, int allowance){
      super(basic);
      this.allowance=allowance;}
   public int pay(){return super.pay() + allowance;}}
public class Clerk extends Employee{
   public Clerk(){ super();}}
public class MyMain{
   public static void main(String args[]){
      Manager m = new Manager(9000, 2000);
      Clerk c = new Clerk();
      System.out.println(m.pay());
      System.out.println(c.pay());
   }
}""",
   "note": "Manager redefines pay() and still reuses Employee's version through super.pay(); Clerk inherits pay() unchanged."},
  {"module": M11, "file": "MyMain", "name": 'Extends and implements',
   "code": """public interface Taxable{
   int RATE = 10;
   int tax();}
public class Person{
   private String name;
   public Person(){ name="name";}
   public void name(String name){this.name=name;}
   public String name(){return name;}}
public class Staff extends Person implements Taxable{
   private int salary;
   public Staff(int salary){ super(); this.salary=salary;}
   public int tax(){ return salary * RATE / 100;}}
public class MyMain{
   public static void main(String args[]){
      Staff s = new Staff(35000);
      System.out.println(s.name());
      s.name("Carla");
      System.out.println(s.name());
      System.out.println(s.tax());
      System.out.println(Taxable.RATE);
   }
}""",
   "note": 'name() comes from Person through extends; tax() had to be written because of implements. RATE is an interface constant (public, static, final).'},
  {"module": M11, "file": "MyMain", "name": 'Two interfaces in one class',
   "code": """public interface Worker{
   String work();}
public interface Player{
   String play();}
public class Student implements Worker, Player{
   private String name;
   public Student(String name){ this.name=name;}
   public String work(){ return name + " studies";}
   public String play(){ return name + " plays";}}
public class MyMain{
   public static void main(String args[]){
      Student s = new Student("Ana");
      Worker w = s;
      Player p = s;
      System.out.println(w.work());
      System.out.println(p.play());
   }
}""",
   "note": 'A class can implement any number of interfaces, and its object can be referred to by either interface type.'},
  {"module": M12, "file": "MyMain", "name": 'Abstract class with a concrete method',
   "code": """public abstract class Vehicle{
   private String plate;
   public Vehicle(){ plate="none";}
   public void plate(String plate){this.plate=plate;}
   public String plate(){return plate;}
   public abstract int wheels();
   public String info(){ return plate() + "-" + wheels();}}
public class Car extends Vehicle{
   public Car(){ super();}
   public int wheels(){ return 4;}}
public class MyMain{
   public static void main(String args[]){
      Car car = new Car();
      System.out.println(car.info());
      car.plate("ABC123");
      System.out.println(car.info());
   }
}""",
   "note": "Vehicle cannot be instantiated, but its constructor runs through super() and its concrete info() calls the subclass's wheels()."},
  {"module": M12, "file": "MyMain", "name": 'Implementing an abstract method differently',
   "code": """public abstract class Vehicle{
   public abstract int wheels();}
public class Motor extends Vehicle{
   private int sidecar;
   public Motor(){ sidecar=0;}
   public Motor(int sidecar){ this.sidecar=sidecar;}
   public int wheels(){ return 2 + sidecar;}}
public class MyMain{
   public static void main(String args[]){
      Motor m1 = new Motor();
      Motor m2 = new Motor(1);
      System.out.println(m1.wheels());
      System.out.println(m2.wheels());
   }
}""",
   "note": 'Each concrete subclass must implement the abstract method; the overloaded constructors set different values.'},
  {"module": M13, "file": "MyMain", "name": 'Superclass references and dynamic binding',
   "code": """public class Animal{
   private String name;
   public Animal(String name){ this.name=name;}
   public String name(){return name;}
   public String sound(){return "...";}}
public class Dog extends Animal{
   public Dog(String name){ super(name);}
   public String sound(){return "Woof";}}
public class Cat extends Animal{
   public Cat(String name){ super(name);}
   public String sound(){return "Meow";}}
public class MyMain{
   public static void main(String args[]){
      Animal[] pets = new Animal[3];
      pets[0] = new Dog("Bantay");
      pets[1] = new Cat("Muning");
      pets[2] = new Animal("Pet");
      for (int i = 0; i < pets.length; i++)
         System.out.println(pets[i].name() + " says " + pets[i].sound());
   }
}""",
   "note": "Each element is an Animal reference, but dynamic binding runs the object's own sound()."},
  {"module": M13, "file": "MyMain", "name": 'Overloaded print methods',
   "code": """public class Printer{
   public void print(int n){ System.out.println("int " + n);}
   public void print(String s){ System.out.println("String " + s);}
   public void print(int a, int b){ System.out.println("sum " + (a + b));}}
public class MyMain{
   public static void main(String args[]){
      Printer p = new Printer();
      p.print(5);
      p.print("5");
      p.print(5, 2);
      p.print(10 / 4);
   }
}""",
   "note": 'The method is chosen by the number and types of arguments. 10 / 4 is integer division (2).'},
  {"module": M13, "file": "MyMain", "name": 'Overloaded constructors with this()',
   "code": """public class Box{
   private int length; private int width;
   public Box(){ this(1, 1);}
   public Box(int side){ this(side, side);}
   public Box(int length, int width){
      this.length=length; this.width=width;}
   public int area(){ return length * width;}}
public class MyMain{
   public static void main(String args[]){
      Box b1 = new Box();
      Box b2 = new Box(3);
      Box b3 = new Box(2, 5);
      System.out.println(b1.area());
      System.out.println(b2.area());
      System.out.println(b3.area());
   }
}""",
   "note": 'this(...) calls another constructor of the same class; the constructor used depends on the arguments.'},
  {"module": M14, "file": "MyMain", "name": 'Class attribute vs. object attribute',
   "code": """public class Account{
   private static int count = 0;
   private int number;
   public Account(){
      count = count + 1;
      number = count;}
   public int number(){return number;}
   public static int count(){return count;}}
public class MyMain{
   public static void main(String args[]){
      Account a1 = new Account();
      Account a2 = new Account();
      Account a3 = new Account();
      System.out.println(a1.number());
      System.out.println(a3.number());
      System.out.println(Account.count());
   }
}""",
   "note": 'count is static (one shared copy for the class); number is an object attribute, saved when each object is created.'},
  {"module": M14, "file": "MyMain", "name": 'Private data through methods',
   "code": """public class Account{
   private int balance = 0;
   public void deposit(int amount){
      if (amount > 0) balance = balance + amount;}
   public void withdraw(int amount){
      if (amount <= balance) balance = balance - amount;}
   public int balance(){return balance;}}
public class MyMain{
   public static void main(String args[]){
      Account a = new Account();
      a.deposit(500);
      a.withdraw(800);
      System.out.println(a.balance());
      a.deposit(-100);
      a.withdraw(200);
      System.out.println(a.balance());
   }
}""",
   "note": 'balance is private, so it changes only through deposit() and withdraw(); invalid amounts are ignored.'},
]
