// Mock data for Codean Bootcamp
export const mockUsers = [
  { username: "admin", password: "123456", role: "admin" },
  { username: "siswa1", password: "password", role: "student" },
  { username: "siswa2", password: "student123", role: "student" }
];

export const mockCourses = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, and React",
    icon: "Code2",
    color: "from-blue-500 to-purple-600",
    modules: [
      {
        id: "html-basics",
        title: "HTML Fundamentals",
        content: `
          <h3>Introduction to HTML</h3>
          <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
          
          <h4>Basic HTML Structure</h4>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h4>Common HTML Elements</h4>
          <ul>
            <li><code>&lt;h1&gt; - &lt;h6&gt;</code>: Headings</li>
            <li><code>&lt;p&gt;</code>: Paragraphs</li>
            <li><code>&lt;div&gt;</code>: Container elements</li>
            <li><code>&lt;span&gt;</code>: Inline elements</li>
            <li><code>&lt;a&gt;</code>: Links</li>
            <li><code>&lt;img&gt;</code>: Images</li>
          </ul>
        `
      },
      {
        id: "css-basics",
        title: "CSS Fundamentals",
        content: `
          <h3>Introduction to CSS</h3>
          <p>CSS (Cascading Style Sheets) is used to style HTML elements.</p>
          
          <h4>CSS Syntax</h4>
          <pre><code>selector {
    property: value;
}</code></pre>

          <h4>Selectors</h4>
          <ul>
            <li><code>h1</code>: Element selector</li>
            <li><code>.class-name</code>: Class selector</li>
            <li><code>#id-name</code>: ID selector</li>
            <li><code>*</code>: Universal selector</li>
          </ul>

          <h4>Box Model</h4>
          <p>The CSS box model describes how elements are rendered:</p>
          <ul>
            <li>Content</li>
            <li>Padding</li>
            <li>Border</li>
            <li>Margin</li>
          </ul>
        `
      },
      {
        id: "javascript-basics",
        title: "JavaScript Fundamentals",
        content: `
          <h3>Introduction to JavaScript</h3>
          <p>JavaScript is a programming language that enables interactive web pages.</p>
          
          <h4>Variables</h4>
          <pre><code>let name = "John";
const age = 25;
var city = "Jakarta";</code></pre>

          <h4>Functions</h4>
          <pre><code>function greet(name) {
    return "Hello, " + name + "!";
}

const greetArrow = (name) => {
    return \`Hello, ${name}!\`;
};</code></pre>

          <h4>DOM Manipulation</h4>
          <pre><code>// Select elements
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');

// Modify content
element.innerHTML = 'New content';
element.style.color = 'blue';</code></pre>
        `
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Learn Java, Spring Boot, and API development",
    icon: "Server",
    color: "from-green-500 to-teal-600",
    modules: [
      {
        id: "java-basics",
        title: "Java Fundamentals",
        content: `
          <h3>Introduction to Java</h3>
          <p>Java is a popular object-oriented programming language.</p>
          
          <h4>Basic Syntax</h4>
          <pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

          <h4>Variables and Data Types</h4>
          <pre><code>int number = 42;
double price = 19.99;
String name = "Java";
boolean isActive = true;</code></pre>

          <h4>Classes and Objects</h4>
          <pre><code>public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
}</code></pre>
        `
      },
      {
        id: "oop-concepts",
        title: "Object-Oriented Programming",
        content: `
          <h3>OOP Principles</h3>
          
          <h4>1. Encapsulation</h4>
          <p>Bundling data and methods that operate on that data within a single unit (class).</p>
          
          <h4>2. Inheritance</h4>
          <pre><code>public class Animal {
    protected String name;
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println(name + " is barking");
    }
}</code></pre>

          <h4>3. Polymorphism</h4>
          <p>Objects of different types can be treated as instances of the same type through inheritance.</p>
          
          <h4>4. Abstraction</h4>
          <p>Hiding complex implementation details while showing only essential features.</p>
        `
      }
    ]
  },
  {
    id: "database",
    title: "Database Management",
    description: "Learn SQL, database design, and data management",
    icon: "Database",
    color: "from-orange-500 to-red-600",
    modules: [
      {
        id: "sql-basics",
        title: "SQL Fundamentals",
        content: `
          <h3>Introduction to SQL</h3>
          <p>SQL (Structured Query Language) is used to manage relational databases.</p>
          
          <h4>Basic Queries</h4>
          <pre><code>-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT name, email FROM users;

-- Filter with WHERE
SELECT * FROM users WHERE age > 18;</code></pre>

          <h4>Data Manipulation</h4>
          <pre><code>-- Insert data
INSERT INTO users (name, email, age) 
VALUES ('John Doe', 'john@email.com', 25);

-- Update data
UPDATE users 
SET age = 26 
WHERE name = 'John Doe';

-- Delete data
DELETE FROM users WHERE id = 1;</code></pre>

          <h4>Joins</h4>
          <pre><code>-- Inner Join
SELECT u.name, p.title 
FROM users u 
INNER JOIN posts p ON u.id = p.user_id;

-- Left Join
SELECT u.name, p.title 
FROM users u 
LEFT JOIN posts p ON u.id = p.user_id;</code></pre>
        `
      },
      {
        id: "database-design",
        title: "Database Design",
        content: `
          <h3>Database Design Principles</h3>
          
          <h4>1. Normalization</h4>
          <p>Process of organizing data to reduce redundancy.</p>
          <ul>
            <li><strong>1NF</strong>: Eliminate repeating groups</li>
            <li><strong>2NF</strong>: Eliminate partial dependencies</li>
            <li><strong>3NF</strong>: Eliminate transitive dependencies</li>
          </ul>

          <h4>2. Entity Relationship Diagram</h4>
          <p>Visual representation of database structure:</p>
          <ul>
            <li><strong>Entities</strong>: Objects or concepts</li>
            <li><strong>Attributes</strong>: Properties of entities</li>
            <li><strong>Relationships</strong>: Connections between entities</li>
          </ul>

          <h4>3. Indexing</h4>
          <pre><code>-- Create index for faster queries
CREATE INDEX idx_user_email ON users(email);

-- Composite index
CREATE INDEX idx_user_name_age ON users(name, age);</code></pre>
        `
      }
    ]
  }
];

export const mockProgress = {
  "html-basics": { completed: true, timeSpent: 45 },
  "css-basics": { completed: false, timeSpent: 20 },
  "javascript-basics": { completed: false, timeSpent: 0 }
};