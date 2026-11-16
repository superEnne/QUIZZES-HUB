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
OUTPUT = [
  {"module": M10, "file": "Employee", "name": "Redefining getPay()",
   "code": '''class Person {
   private String name;
   Person(String aName) { name = aName; }
   public String getName() { return name; }
}
class Employee extends Person {
   private int basicSalary;
   Employee(String aName, int aBasicSalary) {
      super(aName);
      basicSalary = aBasicSalary;
   }
   public int getPay() { return basicSalary; }
   public static void main(String argv[]) {
      Employee[] staff = { new Manager("Ana", 9000, 2000),
                           new Secretary("Ben", 2500),
                           new Clerk("Carla", 1200) };
      for (int i = 0; i < staff.length; i++)
         System.out.println(staff[i].getName() + " has a pay of " + staff[i].getPay());
   }
}
class Manager extends Employee {
   private int allowance;
   Manager(String aName, int aBasicSalary, int aAllowance) {
      super(aName, aBasicSalary);
      allowance = aAllowance;
   }
   public int getPay() { return super.getPay() + allowance; }
}
class Secretary extends Employee {
   Secretary(String aName, int aBasicSalary) { super(aName, aBasicSalary); }
}
class Clerk extends Employee {
   Clerk(String aName, int aBasicSalary) { super(aName, aBasicSalary); }
}''',
   "note": "Manager redefines getPay() (same name and parameters), so its version adds the allowance; Secretary and Clerk inherit Employee's getPay()."},

  {"module": M10, "file": "Technician", "name": "Constructor chain with super()",
   "code": '''class Person {
   Person() { System.out.println("Person created"); }
}
class Employee extends Person {
   Employee() {
      super();
      System.out.println("Employee created");
   }
}
public class Technician extends Employee {
   Technician() {
      super();
      System.out.println("Technician created");
   }
   public static void main(String argv[]) {
      Technician t = new Technician();
   }
}''',
   "note": "super() runs the parent constructor first, so the messages print from the top of the hierarchy down."},

  {"module": M10, "file": "Shape", "name": "Adding Triangle to the hierarchy",
   "code": '''class Shape {
   private String name;
   Shape(String aName) { name = aName; }
   public String getName() { return name; }
   public float calculateArea() { return 0.0f; }
   public static void main(String argv[]) {
      Shape shapeArray[] = { new Square("Square S"),
                             new Triangle("Triangle T"),
                             new Shape("Shape X") };
      for (int i = 0; i < shapeArray.length; i++)
         System.out.println(shapeArray[i].getName() + ": " + shapeArray[i].calculateArea());
   }
}
class Square extends Shape {
   private int side;
   Square(String aName) { super(aName); side = 3; }
   public float calculateArea() {
      int area;
      area = side * side;
      return area;
   }
}
class Triangle extends Shape {
   private int base, height;
   Triangle(String aName) { super(aName); base = 4; height = 5; }
   public float calculateArea() { return 0.5f * base * height; }
}''',
   "note": "calculateArea() returns a float, so the int area 9 prints as 9.0. Triangle was added as a subclass, so Shape and Square did not change."},

  {"module": M11, "file": "TurnDemo", "name": "One interface, many classes",
   "code": '''interface Turner {
   void turn();
}
class Leaf implements Turner {
   public void turn() { System.out.println("Changing colors"); }
}
class Page implements Turner {
   public void turn() { System.out.println("Going to the next page"); }
}
class Pancake implements Turner {
   public void turn() { System.out.println("Flipping"); }
}
public class TurnDemo {
   public static void main(String[] args) {
      Turner[] things = { new Pancake(), new Leaf(), new Page(), new Pancake() };
      for (int i = 1; i < things.length; i++)
         things[i].turn();
   }
}''',
   "note": "The loop starts at index 1, so the first Pancake is skipped. Each class writes its own turn()."},

  {"module": M11, "file": "SalesManager", "name": "extends and implements",
   "code": '''interface Manage {
   void authorize();
}
class SalesPerson {
   public void sell() { System.out.println("Selling products"); }
}
public class SalesManager extends SalesPerson implements Manage {
   public void authorize() {
      System.out.println("Authorizing discount");
      sell();
   }
   public static void main(String[] args) {
      SalesManager boss = new SalesManager();
      boss.sell();
      boss.authorize();
   }
}''',
   "note": "sell() is inherited through extends; authorize() had to be written because of implements Manage."},

  {"module": M12, "file": "ColourTest", "name": "Constants in an interface",
   "code": '''interface Colourable {
   int RED = 1;
   int GREEN = 2;
   int BLUE = 3;
}
public class ColourTest implements Colourable {
   public static void main(String args[]) {
      System.out.println(RED + GREEN * BLUE);
      System.out.println("Colour " + RED + GREEN);
      System.out.println(Colourable.BLUE);
   }
}''',
   "note": "Interface data are public, static and final constants. * runs before +, and once a String comes first, + joins text (\"Colour \" + 1 + 2 = Colour 12)."},

  {"module": M12, "file": "B", "name": "Subclass of a class that implements an interface",
   "code": '''interface I {
   void x();
}
class A implements I {
   public void x() { System.out.println("in A.x"); }
}
class B extends A {
   void z() {
      x();
      System.out.println("in B.z");
   }
   public static void main(String args[]) {
      B bb = new B();
      bb.z();
      I ii = new B();
      ii.x();
   }
}''',
   "note": "B inherits x() from A, which implements I, so a B object can also be used as an I."},

  {"module": M12, "file": "AbstractDemo", "name": "Abstract class with a concrete method",
   "code": '''abstract class Animal {
   private String name;
   Animal(String aName) { name = aName; }
   public abstract void speak();
   public void introduce() {
      System.out.println("I am " + name);
      speak();
   }
}
class Dog extends Animal {
   Dog(String aName) { super(aName); }
   public void speak() { System.out.println("Woof!"); }
}
class Cow extends Animal {
   Cow(String aName) { super(aName); }
   public void speak() { System.out.println("Moo!"); }
}
public class AbstractDemo {
   public static void main(String[] args) {
      Animal a = new Dog("Murphy");
      a.introduce();
      a = new Cow("Bessie");
      a.speak();
   }
}''',
   "note": "An abstract class cannot be instantiated, but it can have constructors and concrete methods; each concrete subclass must implement speak()."},

  {"module": M13, "file": "OverloadDemo", "name": "Operation overloading",
   "code": '''public class OverloadDemo {
   static void display(int x) { System.out.println("int " + x); }
   static void display(double x) { System.out.println("double " + x); }
   static void display(String x) { System.out.println("String " + x); }
   static void display(int x, int y) { System.out.println("sum " + (x + y)); }
   public static void main(String[] args) {
      display(5);
      display(2.5);
      display("5");
      display(5, 2);
      display(10 / 4);
   }
}''',
   "note": "The method is chosen by the parameters. 10 / 4 is integer division (2), so display(int) runs."},

  {"module": M13, "file": "BindingDemo", "name": "Dynamic binding",
   "code": '''class Parent {
   void show() { System.out.println("Parent show"); }
   void greet() {
      System.out.println("Hello from Parent");
      show();
   }
}
class Child extends Parent {
   void show() { System.out.println("Child show"); }
}
public class BindingDemo {
   public static void main(String[] args) {
      Parent p = new Child();
      p.greet();
      p = new Parent();
      p.show();
   }
}''',
   "note": "With dynamic binding the object's actual class decides which show() runs, even when it is called from inside Parent's greet()."},

  {"module": M13, "file": "A", "name": "Overloaded constructors",
   "code": '''class A {
   A() {
      this(1);
      System.out.println("A()");
   }
   A(int x) { System.out.println("A(int x) " + x); }
   A(int x, int y) { System.out.println("A(int x, int y) " + (x * y)); }
   A(String x) { System.out.println("A(String x) " + x); }
   public static void main(String args[]) {
      A first = new A();
      A second = new A(4, 5);
      A third = new A("4");
   }
}''',
   "note": "this(1) calls the A(int x) constructor first. Each new A(...) picks the constructor whose parameters match."},

  {"module": M14, "file": "Counter", "name": "Object attribute vs. class attribute",
   "code": '''class Counter {
   static int total = 0;
   int mine = 0;
   Counter() {
      total = total + 1;
      mine = mine + 1;
   }
   public static void main(String argv[]) {
      Counter c1 = new Counter();
      Counter c2 = new Counter();
      Counter c3 = new Counter();
      System.out.println(c1.mine);
      System.out.println(c3.total);
      System.out.println(Counter.total + c2.mine);
   }
}''',
   "note": "total is static (one shared copy, 3 after three objects); mine is an object attribute, so each object has its own value of 1."},

  {"module": M14, "file": "Account", "name": "Information hiding",
   "code": '''public class Account {
   private int balance = 0;
   public void deposit(int amount) {
      if (amount > 0) balance = balance + amount;
   }
   public void withdraw(int amount) {
      if (amount <= balance) balance = balance - amount;
      else System.out.println("Insufficient funds");
   }
   public int getBalance() { return balance; }
   public static void main(String[] args) {
      Account acct = new Account();
      acct.deposit(500);
      acct.deposit(-100);
      acct.withdraw(700);
      acct.withdraw(200);
      System.out.println("Balance: " + acct.getBalance());
   }
}''',
   "note": "balance is private, so it changes only through deposit() and withdraw(); the negative deposit is ignored and the 700 withdrawal is refused."},
]
