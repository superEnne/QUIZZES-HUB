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
    ("If inheritance is NOT available, a change in the representation of employee number must be made:",
     "Individually in every relevant class, which may lead to inconsistency", ["Only once, in the Employee class, and it propagates to every subclass", "Only in main(), since attributes are defined there for all classes", "Automatically by the compiler for every class that uses it"], None),
    ("If inheritance IS available, a change in the representation of employee number is limited to the:",
     "Employee (super)class, and it propagates to the subclasses", ["Manager class, and it is copied to the other subclasses", "Last subclass created, and it propagates to the superclass", "main() method, and it is passed to every class"], None),
    ("Defining a property once in the superclass and letting subclasses inherit it results in:",
     "Uniform and consistent property definitions and minimal redundancy", ["Different property definitions and more redundancy in each subclass", "Inconsistent definitions that must be repeated at the subclass level", "Harder maintenance, since every subclass must be changed separately"], None),
    ("In the HomeCare example, the manager's pay was wrong because:",
     "The allowance was omitted, since getPay() in Employee returns only the basic salary", ["The secretary's salary was added to it, since both classes share getPay() in Employee", "The commission was counted twice, since Manager also extends SalesPerson in the hierarchy", "The Manager class had no constructor, so the basic salary was never set at all"], None),
    ("What is the disadvantage of removing getPay() from Employee and defining it individually in every subclass?",
     "The definition is repeated in all subclasses, which is inefficient and hard to maintain", ["Subclasses can no longer have constructors, so the objects cannot be created at all", "The program cannot compile, because getPay() must exist in the Employee superclass", "Each subclass inherits two getPay() methods, which causes conflicts at run time"], None),
    ("Which approach to fixing the manager's pay is better?",
     "Keep getPay() in Employee and redefine it in the Manager class", ["Remove getPay() from Employee and define it in every subclass", "Remove the Manager class from the hierarchy", "Compute the pay inside main() for every employee"],
     "It enhances software reuse and minimizes the effect of change on other classes."),
    ("A redefining method has the same method name and parameter definition as the redefined method, but:",
     "Its implementation may differ", ["It must have a different name", "It must have more parameters", "It cannot return a value"], None),
    ("When adding a new class into an existing class hierarchy, it is always recommended that the new class be created as a:",
     "Subclass in the class hierarchy", ["Superclass of all existing classes", "Copy of an existing class", "Separate program"], None),
    ("To add the new Triangle class to the Shape program, which of the following is involved?",
     "Create a new Triangle class as a subclass of Shape", ["Rewrite the Circle and Square classes", "Delete the Shape class", "Change the getName() method of every existing class"], None),
    ("Subclassing is a desired design practice in object-oriented software engineering because:",
     "It has minimal impact on software maintenance", ["It removes the need for constructors in subclasses", "It makes every attribute public", "It prevents code reuse"], "Subclassing is specialization."),
    ("Deleting subclasses that are NOT superclasses to other classes:",
     "Has a minimal impact on software maintenance", ["Breaks every other class in the class hierarchy", "Requires rewriting the superclass", "Is not allowed in Java"], None),
    ("In the Shape example, the name attribute is declared private, so other objects get its value through:",
     "The getName() method defined in the Shape class", ["Direct access to the name variable from any class", "The calculateArea() method defined in each subclass", "The main() method, which stores the name for others"], None),
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
    ("class SalesManager extends SalesPerson implements Manage { ... } means that SalesManager:",
     "Is derived from SalesPerson and implements the Manage interface", ["Is derived from Manage and implements the SalesPerson interface", "Is an interface", "Cannot have a constructor"], None),
    ("In the Manage interface, authorize() is declared without a body. The SalesManager class must:",
     "Implement the abstract method authorize()", ["Remove authorize() from Manage", "Declare authorize() as private", "Call authorize() from the main() method only"], None),
    ("Choosing between SalesManager as a subclass of SalesPerson or of Manager (with a CanTakeOrder interface) is:",
     "A modeling problem resolved with more information on the problem domain and requirements", ["Always solved by using SalesPerson, because collectPayment() is already defined there", "Not allowed in Java, because a class cannot implement an interface and extend a class", "Decided automatically by the compiler based on which superclass has more methods"], None),
    ("When a class implements Worker, it must include a work() method or else:",
     "The class must be declared abstract, and its descendants must implement the method", ["The program still runs, and Java creates an empty work() method automatically for the class", "The class becomes an interface, and its descendants inherit work() from it", "The Worker interface must be changed so that work() is no longer abstract"], None),
    ("A WorkingDog extends Dog and implements Worker. Which method is it required to contain because of implements Worker?",
     "work()", ["speak()", "setName()", "getHoursOfTraining()"], None),
    ("Why make many classes implement the Worker interface instead of each just having a work() method?",
     "You do not have to guess the name of the method that shows the work the objects perform", ["The classes run faster, because interface methods are bound at compile time only", "The classes can share private data, because interfaces store each object's fields", "The classes no longer need constructors, because the interface creates their objects"], None),
    ("A class that implements an interface represents a situation similar to inheritance. A WorkingDog therefore:",
     "\"Is a\" Dog, \"is an\" Animal, and \"is a\" Worker", ["\"Is a\" Worker, but it is no longer a Dog or an Animal", "\"Is a\" Dog and \"is a\" Worker, but it is not an Animal", "\"Is an\" Animal only, since interfaces do not count as types"], None),
],

M12: [
    ("What happens with the statement Animal myPet = new Animal(\"Murphy\"); if Animal is an abstract class?",
     "The program does not compile, because no Animal objects can exist", ["It creates an Animal object normally, because the constructor exists", "It creates a Dog object instead, because Dog extends the Animal class", "It compiles, but speak() prints nothing because it has no method body"], None),
    ("You create an abstract class such as Animal only so that you can:",
     "Extend it", ["Instantiate it", "Hide it from subclasses", "Use it as a package"], None),
    ("If you do not want to create Dog objects but want Dog to be a parent to further subclasses, then the Dog class:",
     "Also must be abstract", ["Must be final", "Must be an interface", "Must be private"], None),
    ("The @Override annotation for a method such as speak() is:",
     "Not necessary, but it provides error checking and documentation", ["Required, or the program will not compile at all without it", "Used to create a new object of the parent class", "Used only in interfaces, never in subclasses"], None),
    ("Using the same method name to indicate different implementations is called:",
     "Polymorphism", ["Encapsulation", "Bundling", "Static binding"], None),
    ("Data attributes declared in an interface construct are always:",
     "static and final", ["private and abstract", "protected and static", "public and non-final"], "Static because there is only one copy; final because they are not modifiable."),
    ("Names for values with a specific meaning, such as RED = 1 in the Colourable interface, are called:",
     "Constants", ["Parameters", "References", "Packages"], None),
    ("All methods in an interface are:",
     "Abstract methods that any class using the interface must implement", ["Static methods that the implementing class may not override", "Private methods hidden from every class that uses the interface", "Constructors that run when a class implements the interface"], None),
    ("Methods in an interface may NOT be static because:",
     "Static methods, being class specific, are never abstract", ["Static methods are always private, so no class could call them", "Interfaces cannot contain methods, only constant data attributes", "Static methods must have constructors, which interfaces do not have"], None),
    ("ColourTest implements Colourable but does not implement getColour(). How must ColourTest be declared?",
     "abstract class ColourTest implements Colourable", ["final class ColourTest implements Colourable", "interface ColourTest implements Colourable", "static class ColourTest implements Colourable"], None),
    ("Why must setColour() in ColourTest be declared public?",
     "It is a method of the Colourable interface, and interface methods are public", ["Because ColourTest is declared abstract, all of its methods must be public", "Because setColour() has a parameter, and methods with parameters must be public", "Because main() is static, every method it can call must also be public"], None),
    ("Abstract classes and interfaces are similar in that:",
     "You cannot instantiate concrete objects from either one", ["Both can contain only private methods and private data fields", "Both must have constructors that create objects", "A class can extend any number of either of them"], None),
    ("Abstract classes differ from interfaces because:",
     "Abstract classes can contain nonabstract methods, but all interface methods must be abstract", ["Interfaces can contain constructors and nonabstract methods, but abstract classes cannot", "Abstract classes cannot have variables, but interfaces can have any kind of variable", "Interfaces can be instantiated with new, but abstract classes can never be instantiated"], None),
    ("A class can inherit from how many abstract superclasses, and implement how many interfaces?",
     "Only one abstract superclass, but any number of interfaces", ["Any number of abstract superclasses, but only one interface", "Only one of each", "None of either"], None),
    ("According to the comparison table, which is true about constructors?",
     "An interface has no constructor; an abstract class's constructor is invoked when a child object is instantiated", ["Both have constructors, and each constructor creates an object of its own type whenever it is called", "Neither can ever have a constructor, because neither one can be instantiated with new", "An interface's constructor is called each time a class implements the interface"], None),
    ("According to the comparison table, which is true about variables?",
     "Interface variables must be public, static, and final; abstract classes have no restrictions on variables", ["Abstract class variables must be public, static, and final; interfaces have no restrictions", "Interfaces cannot have any variables at all, while abstract classes must declare only private ones", "Both must declare all of their variables private, so that subclasses cannot change them"], None),
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
],

M13: [
    ("The binding of variables to operations at compile time is known as:",
     "Static binding", ["Dynamic binding", "Late binding", "Run-time binding"], None),
    ("The binding of variables to operations at run time is known as:",
     "Dynamic binding", ["Static binding", "Compile-time binding", "Early binding"], None),
    ("Which statement about static and dynamic binding is correct?",
     "Static binding is limited and may lead to maintenance difficulty; dynamic binding provides design flexibility", ["Static binding provides design flexibility; dynamic binding is limited and causes maintenance difficulty", "Both are identical", "Only procedural languages use dynamic binding"], None),
    ("In the procedural Shape example, why were calculateCircleArea() and calculateSquareArea() needed?",
     "Most procedural languages do not allow two routines to have the same name", ["Java requires separate routine names for every shape, even in object-oriented code", "Circles and squares use the same formula, so the names only make the code readable", "The switch statement cannot call any routine that has the word Area in its name"], None),
    ("With static binding, adding a new shape such as Triangle requires changes in:",
     "Multiple places (data section, switch statement, and routine section), which is error prone", ["Only one place: a new Triangle class, without touching the rest of the program", "No part of the program, since the switch statement detects new shapes on its own at run time", "Only the println statement, since the routine section does not need to change"], None),
    ("With dynamic binding, the appropriate calculateArea() method is selected based on:",
     "The class of the shape referenced at run time", ["A switch statement written by the programmer", "The order the methods were written", "The name of the array"], None),
    ("Every SalariedEmployee \"is an\" Employee. Which statement is also true?",
     "An Employee is not necessarily a SalariedEmployee", ["Every Employee is a SalariedEmployee", "An Employee is always an HourlyEmployee", "Superclass objects are members of all subclasses"], None),
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
],

M14: [
    ("Which is often viewed as the smallest program unit to be considered as a subprogram?",
     "A method", ["A class", "A package", "An object"], None),
    ("Compared to a method, what is the next bigger unit under design?",
     "A class definition", ["A statement", "A variable", "An attribute"], None),
    ("Properties that are specific to objects and apply to all objects from the same class are:",
     "Object properties", ["Class properties", "Package properties", "Static properties"], None),
    ("Counting objects by adding count = count + 1; in main() for every new SalesPerson works, but it is:",
     "Cumbersome, since a new statement must be added for each new object", ["Always incorrect, since main() cannot change any variable after objects exist", "Not allowed in Java, since count must be changed inside a constructor only", "Faster than any other method, so it is the preferred class organisation"], None),
    ("When count is an object attribute incremented in the constructor, two SalesPerson objects result in:",
     "Two independent copies of count, each with the value 1", ["One shared copy of count, which holds the value 2", "A compile error, since count must be declared static", "One copy of count in main(), which holds the value 0"], None),
    ("Declaring count as static allows the variable to be:",
     "Shared among all instances of the SalesPerson class", ["Copied into every SalesPerson object separately", "Hidden from the SalesPerson class itself and its methods", "Changed only by the main() method and no other code"], None),
    ("An attribute definition preceded with the keyword static is a(n):",
     "Class attribute", ["Object attribute", "Local variable", "Abstract attribute"], None),
    ("When getCount() is made static, the SalesPerson objects s1 and s2:",
     "Do not own the getCount() method, since it belongs to the class", ["Each own a separate copy of getCount(), one for each object", "Cannot call getCount() at all, since static methods are hidden", "Must override getCount() so that each returns its own count"], None),
    ("Outside of the class definition, the only way to access the static method getCount() is:",
     "Qualification by the class name, as in SalesPerson.getCount()", ["Calling getCount() alone, without any class or object name", "Using the keyword new, as in new SalesPerson().getCount()", "Using super.getCount() from any class in the program"], None),
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
    ("In the egg analogy of encapsulation, the data of an object is like the:",
     "Yolk, and the methods are like the white", ["White, and the methods are like the yolk", "Shell, and the methods are like the yolk", "Yolk, and the methods are like the shell"], None),
    ("Encapsulation enhances software maintainability by:",
     "Increasing cohesiveness through bundling and reducing coupling by hiding implementation details", ["Increasing the coupling between components by making all data and methods public to other objects", "Removing methods from objects so that other objects use the data directly", "Copying the same data into every object so that changes affect all objects"], None),
    ("The act of associating a set of methods with a set of data as the only means of affecting the values of the data is:",
     "Bundling", ["Information hiding", "Overloading", "Upcasting"], None),
    ("The hiding of internal representation of data and methods from the users of these data and methods is:",
     "Information hiding", ["Bundling", "Promotion", "Collision"], "It separates the what from the how of object definition."),
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
