export interface Article {
  slug: string
  title: string
  description: string
  date: string
  topics: string[]
  content: {
    introduction: string
    sections: {
      heading: string
      content: string
      codeExample?: string
    }[]
    conclusion: string
  }
}

export const articles: Article[] = [
  {
    slug: "understanding-javascript-closures",
    title: "Understanding JavaScript Closures",
    description:
      "Deep dive into closures, lexical scope, and how they power modern JavaScript patterns like modules and callbacks.",
    date: "March 2024",
    topics: ["Closures", "Scope", "Functions"],
    content: {
      introduction:
        "Closures are one of the most powerful and often misunderstood concepts in JavaScript. Understanding closures is essential for writing clean, efficient code and mastering advanced JavaScript patterns.",
      sections: [
        {
          heading: "What is a Closure?",
          content:
            "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. This means the inner function 'remembers' the environment in which it was created.",
          codeExample: `function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer:', outerVariable);
    console.log('Inner:', innerVariable);
  }
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Output: Outer: outside
// Output: Inner: inside`,
        },
        {
          heading: "Lexical Scope",
          content:
            "Lexical scope means that the scope is determined by where functions are declared in the code, not where they are called. This is the foundation of closures.",
          codeExample: `const globalVar = 'global';

function outer() {
  const outerVar = 'outer';
  
  function inner() {
    const innerVar = 'inner';
    console.log(globalVar, outerVar, innerVar);
  }
  
  inner();
}

outer(); // 'global outer inner'`,
        },
        {
          heading: "Practical Use Cases",
          content:
            "Closures are used extensively in JavaScript for data privacy, creating factory functions, and implementing the module pattern. They're also the foundation of callbacks and event handlers.",
          codeExample: `function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2`,
        },
      ],
      conclusion:
        "Closures are a fundamental concept that enables powerful programming patterns in JavaScript. By understanding how closures work with lexical scope, you can write more maintainable and efficient code.",
    },
  },
  {
    slug: "async-await-vs-promises",
    title: "Async/Await vs Promises: When to Use What",
    description:
      "Comprehensive guide comparing async/await and promises, with real-world examples and best practices for handling asynchronous operations.",
    date: "February 2024",
    topics: ["Async", "Promises", "ES6+"],
    content: {
      introduction:
        "Asynchronous programming is crucial in JavaScript, and both Promises and async/await are powerful tools for handling async operations. Let's explore when to use each approach.",
      sections: [
        {
          heading: "Understanding Promises",
          content:
            "Promises represent the eventual completion or failure of an asynchronous operation. They provide a cleaner alternative to callback hell with .then() and .catch() methods.",
          codeExample: `fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
        },
        {
          heading: "Async/Await Syntax",
          content:
            "Async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code. It improves readability and error handling.",
          codeExample: `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();`,
        },
        {
          heading: "When to Use Each",
          content:
            "Use async/await for sequential operations and better readability. Use Promise.all() for parallel operations. Combine both approaches based on your specific needs.",
          codeExample: `// Parallel execution with Promise.all
async function fetchMultipleData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error('Error:', error);
  }
}`,
        },
      ],
      conclusion:
        "Both Promises and async/await have their place in modern JavaScript. Understanding when to use each approach will help you write cleaner, more maintainable asynchronous code.",
    },
  },
  {
    slug: "javascript-event-loop-explained",
    title: "JavaScript Event Loop Explained",
    description:
      "Visual explanation of how the event loop works, covering call stack, callback queue, and microtasks with practical examples.",
    date: "January 2024",
    topics: ["Event Loop", "Async", "Performance"],
    content: {
      introduction:
        "The event loop is the secret behind JavaScript's asynchronous behavior. Understanding how it works is crucial for writing efficient code and debugging performance issues.",
      sections: [
        {
          heading: "The Call Stack",
          content:
            "The call stack is a LIFO (Last In, First Out) data structure that keeps track of function execution. When a function is called, it's added to the stack; when it returns, it's removed.",
          codeExample: `function first() {
  console.log('First');
  second();
  console.log('First again');
}

function second() {
  console.log('Second');
}

first();
// Output: First, Second, First again`,
        },
        {
          heading: "Callback Queue and Event Loop",
          content:
            "When asynchronous operations complete, their callbacks are placed in the callback queue. The event loop continuously checks if the call stack is empty and moves callbacks from the queue to the stack.",
          codeExample: `console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');

// Output: Start, End, Timeout
// Even with 0ms delay, setTimeout is async`,
        },
        {
          heading: "Microtasks vs Macrotasks",
          content:
            "Microtasks (Promises, queueMicrotask) have higher priority than macrotasks (setTimeout, setInterval). All microtasks are executed before the next macrotask.",
          codeExample: `console.log('Script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => console.log('Promise 1'))
  .then(() => console.log('Promise 2'));

console.log('Script end');

// Output: Script start, Script end, Promise 1, Promise 2, setTimeout`,
        },
      ],
      conclusion:
        "The event loop is what makes JavaScript's non-blocking I/O possible. By understanding the call stack, callback queue, and microtask queue, you can write more predictable asynchronous code.",
    },
  },
  {
    slug: "mastering-array-methods",
    title: "Mastering Array Methods in JavaScript",
    description:
      "Complete guide to map, filter, reduce, and other array methods with performance tips and common use cases in modern development.",
    date: "December 2023",
    topics: ["Arrays", "Functional Programming", "ES6+"],
    content: {
      introduction:
        "JavaScript array methods are essential tools for functional programming. They allow you to transform, filter, and reduce data in a clean, declarative way.",
      sections: [
        {
          heading: "Map: Transform Every Element",
          content:
            "The map() method creates a new array by applying a function to each element. It's perfect for transforming data without mutating the original array.",
          codeExample: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 }
];
const names = users.map(user => user.name);
console.log(names); // ['John', 'Jane']`,
        },
        {
          heading: "Filter: Select Specific Elements",
          content:
            "The filter() method creates a new array with elements that pass a test. It's ideal for selecting subsets of data based on conditions.",
          codeExample: `const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const users = [
  { name: 'John', age: 25, active: true },
  { name: 'Jane', age: 30, active: false },
  { name: 'Bob', age: 35, active: true }
];
const activeUsers = users.filter(user => user.active);`,
        },
        {
          heading: "Reduce: Aggregate Data",
          content:
            "The reduce() method executes a reducer function on each element, resulting in a single output value. It's powerful for aggregating data, counting, grouping, and more.",
          codeExample: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

const items = [
  { name: 'Apple', price: 1.5 },
  { name: 'Banana', price: 0.8 },
  { name: 'Orange', price: 1.2 }
];
const total = items.reduce((sum, item) => sum + item.price, 0);
console.log(total); // 3.5`,
        },
      ],
      conclusion:
        "Mastering array methods like map, filter, and reduce will make your code more readable and maintainable. These functional programming techniques are essential for modern JavaScript development.",
    },
  },
  {
    slug: "javascript-design-patterns",
    title: "JavaScript Design Patterns for Clean Code",
    description:
      "Exploring essential design patterns like Module, Observer, and Factory patterns to write maintainable and scalable JavaScript code.",
    date: "November 2023",
    topics: ["Design Patterns", "Architecture", "Best Practices"],
    content: {
      introduction:
        "Design patterns are reusable solutions to common programming problems. Learning these patterns will help you write more maintainable, scalable, and testable code.",
      sections: [
        {
          heading: "Module Pattern",
          content:
            "The Module pattern provides encapsulation and privacy, allowing you to create public and private methods and variables. It's one of the most commonly used patterns in JavaScript.",
          codeExample: `const UserModule = (function() {
  // Private variables and functions
  let users = [];
  
  function validateUser(user) {
    return user.name && user.email;
  }
  
  // Public API
  return {
    addUser(user) {
      if (validateUser(user)) {
        users.push(user);
        return true;
      }
      return false;
    },
    getUsers() {
      return [...users]; // Return copy
    },
    getUserCount() {
      return users.length;
    }
  };
})();`,
        },
        {
          heading: "Observer Pattern",
          content:
            "The Observer pattern defines a one-to-many dependency between objects. When one object changes state, all its dependents are notified automatically. This is the foundation of event-driven programming.",
          codeExample: `class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}

const emitter = new EventEmitter();
emitter.on('userLogin', (user) => console.log(\`\${user} logged in\`));
emitter.emit('userLogin', 'John'); // John logged in`,
        },
        {
          heading: "Factory Pattern",
          content:
            "The Factory pattern provides an interface for creating objects without specifying their exact classes. It's useful when you need to create different types of objects based on certain conditions.",
          codeExample: `class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.color = options.color || 'white';
  }
}

class Truck {
  constructor(options) {
    this.doors = options.doors || 2;
    this.color = options.color || 'black';
    this.bedSize = options.bedSize || 'standard';
  }
}

class VehicleFactory {
  createVehicle(type, options) {
    switch(type) {
      case 'car':
        return new Car(options);
      case 'truck':
        return new Truck(options);
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}

const factory = new VehicleFactory();
const myCar = factory.createVehicle('car', { color: 'red' });`,
        },
      ],
      conclusion:
        "Design patterns are proven solutions that can significantly improve your code quality. By understanding and applying these patterns, you'll write more maintainable and scalable JavaScript applications.",
    },
  },
  {
  slug: "java-oop-fundamentals",
  title: "Mastering Object-Oriented Programming in Java",
  description:
    "Explore the four pillars of OOP in Java — encapsulation, inheritance, polymorphism, and abstraction — and how they make Java a powerful, reusable, and maintainable language.",
  date: "February 2024",
  topics: ["OOP", "Classes", "Inheritance", "Encapsulation"],
  content: {
    introduction:
      "Object-Oriented Programming (OOP) is the core paradigm in Java. It allows developers to structure software into modular, reusable components that mirror real-world entities.",
    sections: [
      {
        heading: "Encapsulation",
        content:
          "Encapsulation is about bundling data (fields) and methods (functions) that operate on that data into a single unit — a class — while restricting direct access to some components.",
        codeExample: `public class Account {
  private double balance;

  public void deposit(double amount) {
    balance += amount;
  }

  public double getBalance() {
    return balance;
  }
}`,
      },
      {
        heading: "Inheritance",
        content:
          "Inheritance allows a class to inherit fields and methods from another class, enabling code reuse and logical hierarchy.",
        codeExample: `class Animal {
  void sound() {
    System.out.println("Animal makes a sound");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Dog barks");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal a = new Dog();
    a.sound(); // Dog barks
  }
}`,
      },
      {
        heading: "Polymorphism and Abstraction",
        content:
          "Polymorphism lets one interface be used for different types (e.g., overriding methods), while abstraction hides implementation details from the user.",
        codeExample: `abstract class Shape {
  abstract void draw();
}

class Circle extends Shape {
  void draw() {
    System.out.println("Drawing Circle");
  }
}

public class Test {
  public static void main(String[] args) {
    Shape shape = new Circle();
    shape.draw(); // Drawing Circle
  }
}`,
      },
    ],
    conclusion:
      "Understanding OOP is crucial for mastering Java. It promotes modularity, scalability, and clean architecture across projects.",
  },
},
{
  slug: "java-streams-api",
  title: "Simplifying Data Processing with Java Streams",
  description:
    "Learn how the Java Streams API transforms data handling into a functional and expressive process for cleaner and faster code.",
  date: "March 2024",
  topics: ["Streams", "Lambda", "Functional Programming"],
  content: {
    introduction:
      "Introduced in Java 8, the Streams API enables functional-style operations on collections, allowing developers to process data declaratively.",
    sections: [
      {
        heading: "What is a Stream?",
        content:
          "A Stream represents a sequence of elements that can be processed with operations like filter, map, and reduce — without modifying the underlying data source.",
        codeExample: `import java.util.*;
import java.util.stream.*;

public class StreamExample {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    numbers.stream()
           .filter(n -> n % 2 == 0)
           .map(n -> n * n)
           .forEach(System.out::println); // 4, 16
  }
}`,
      },
      {
        heading: "Intermediate and Terminal Operations",
        content:
          "Intermediate operations (like `filter`, `map`) return a new stream, while terminal operations (like `collect`, `forEach`) produce a result or side effect.",
        codeExample: `List<String> names = Arrays.asList("Anna", "Bob", "Charlie");

List<String> result = names.stream()
  .filter(name -> name.startsWith("C"))
  .map(String::toUpperCase)
  .collect(Collectors.toList());

System.out.println(result); // [CHARLIE]`,
      },
    ],
    conclusion:
      "Streams make Java more expressive and efficient, promoting immutability and parallelism in data processing.",
  },
},
{
  slug: "java-multithreading-basics",
  title: "Getting Started with Multithreading in Java",
  description:
    "Understand how threads work in Java and how to write concurrent programs using Runnable, Thread, and ExecutorService.",
  date: "April 2024",
  topics: ["Multithreading", "Concurrency", "Synchronization"],
  content: {
    introduction:
      "Multithreading allows Java programs to perform multiple tasks simultaneously, improving performance and responsiveness.",
    sections: [
      {
        heading: "Creating Threads",
        content:
          "There are two primary ways to create threads in Java: extending the Thread class or implementing the Runnable interface.",
        codeExample: `class MyThread extends Thread {
  public void run() {
    System.out.println("Thread running: " + Thread.currentThread().getName());
  }
}

public class Main {
  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    t1.start();
  }
}`,
      },
      {
        heading: "Using Runnable and ExecutorService",
        content:
          "ExecutorService provides a higher-level API for managing threads efficiently, avoiding manual thread creation.",
        codeExample: `import java.util.concurrent.*;

public class ExecutorExample {
  public static void main(String[] args) {
    ExecutorService executor = Executors.newFixedThreadPool(2);
    Runnable task = () -> System.out.println("Running task in " + Thread.currentThread().getName());
    executor.submit(task);
    executor.shutdown();
  }
}`,
      },
    ],
    conclusion:
      "Mastering multithreading is key for building responsive, scalable Java applications that take advantage of modern CPUs.",
  },
},
{
  slug: "java-generics-explained",
  title: "Understanding Java Generics for Type Safety",
  description:
    "Learn how Generics in Java bring type safety and reusability to your code through parameterized types.",
  date: "May 2024",
  topics: ["Generics", "Type Safety", "Collections"],
  content: {
    introduction:
      "Generics allow classes, interfaces, and methods to operate on types specified as parameters. They help eliminate runtime type errors by ensuring compile-time type checking.",
    sections: [
      {
        heading: "Why Use Generics?",
        content:
          "Before Generics, Java collections stored objects as `Object` type, forcing developers to cast them manually — which could cause `ClassCastException`.",
        codeExample: `List list = new ArrayList();
list.add("Hello");
String s = (String) list.get(0); // Manual cast required`,
      },
      {
        heading: "Generic Example",
        content:
          "With Generics, you can define a list that stores only specific types, making code safer and cleaner.",
        codeExample: `List<String> names = new ArrayList<>();
names.add("Alice");
String name = names.get(0); // No cast needed`,
      },
      {
        heading: "Generic Class",
        content:
          "You can also create your own generic classes with type parameters.",
        codeExample: `public class Box<T> {
  private T value;
  public void set(T value) { this.value = value; }
  public T get() { return value; }
}

Box<Integer> intBox = new Box<>();
intBox.set(42);
System.out.println(intBox.get());`,
      },
    ],
    conclusion:
      "Generics make Java code safer, cleaner, and reusable by catching type-related errors during compilation.",
  },
},
{
  slug: "java-exception-handling",
  title: "Mastering Exception Handling in Java",
  description:
    "Learn how Java's robust exception handling system helps manage runtime errors gracefully and maintain clean program flow.",
  date: "June 2024",
  topics: ["Exceptions", "Error Handling", "Try-Catch"],
  content: {
    introduction:
      "Exception handling in Java is a mechanism that allows developers to manage errors and exceptional conditions systematically, preventing application crashes.",
    sections: [
      {
        heading: "Types of Exceptions",
        content:
          "Java divides exceptions into Checked, Unchecked, and Errors. Checked exceptions must be handled explicitly, while unchecked ones occur due to programming logic.",
        codeExample: `try {
  FileReader reader = new FileReader("file.txt");
} catch (FileNotFoundException e) {
  System.out.println("File not found: " + e.getMessage());
}`,
      },
      {
        heading: "Throwing Exceptions",
        content:
          "You can create and throw your own exceptions to signal error conditions in custom logic.",
        codeExample: `public class InvalidAgeException extends Exception {
  public InvalidAgeException(String msg) {
    super(msg);
  }
}

public void validateAge(int age) throws InvalidAgeException {
  if (age < 18) throw new InvalidAgeException("Age must be 18 or above");
}`,
      },
      {
        heading: "Try-with-Resources",
        content:
          "Introduced in Java 7, try-with-resources automatically closes resources like streams or files after use.",
        codeExample: `try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
  System.out.println(br.readLine());
} catch (IOException e) {
  e.printStackTrace();
}`,
      },
    ],
    conclusion:
      "By mastering exception handling, developers can make their Java applications more reliable, maintainable, and user-friendly.",
  },
},

]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}
