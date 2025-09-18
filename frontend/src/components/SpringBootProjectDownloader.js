import React from 'react';
import { Button } from './ui/button';
import { Download, Folder, Code } from 'lucide-react';
import JSZip from 'jszip';

const SpringBootProjectDownloader = () => {
  
  const createCompleteSpringBootProject = () => {
    return {
      // Maven configuration
      'pom.xml': `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>
    <groupId>com.codean</groupId>
    <artifactId>bootcamp-api</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>codean-bootcamp-api</name>
    <description>Codean Bootcamp API Project</description>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.33</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-api</artifactId>
            <version>0.11.5</version>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-impl</artifactId>
            <version>0.11.5</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-jackson</artifactId>
            <version>0.11.5</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>`,

      // Application properties
      'src/main/resources/application.properties': `# Server Configuration
server.port=8080
spring.application.name=codean-bootcamp-api

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/codean_bootcamp?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

# JWT Configuration
jwt.secret=codeanBootcampSecretKeyForJWT2024
jwt.expiration=86400000

# Logging
logging.level.com.codean.bootcamp=DEBUG
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n`,

      // Main Application Class
      'src/main/java/com/codean/bootcamp/CodeanBootcampApplication.java': `package com.codean.bootcamp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CodeanBootcampApplication {

    public static void main(String[] args) {
        SpringApplication.run(CodeanBootcampApplication.class, args);
        System.out.println("🚀 Codean Bootcamp API Started Successfully!");
        System.out.println("📚 Access the API at: http://localhost:8080");
        System.out.println("🔗 Health Check: http://localhost:8080/api/health");
    }
}`,

      // Student Entity
      'src/main/java/com/codean/bootcamp/entity/Student.java': `package com.codean.bootcamp.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "students")
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    @Column(nullable = false)
    private String name;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email")
    @Column(unique = true, nullable = false)
    private String email;
    
    @NotBlank(message = "Course is required")
    private String course;
    
    @Min(value = 16, message = "Age must be at least 16")
    @Max(value = 100, message = "Age must not exceed 100")
    private Integer age;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Constructors
    public Student() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
    
    public Student(String name, String email, String course, Integer age) {
        this();
        this.name = name;
        this.email = email;
        this.course = course;
        this.age = age;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }
    
    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
    
    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
    
    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now();
        this.createdAt = now;
        this.updatedAt = now;
    }
}`,

      // Student Repository
      'src/main/java/com/codean/bootcamp/repository/StudentRepository.java': `package com.codean.bootcamp.repository;

import com.codean.bootcamp.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    
    // Find by email
    Optional<Student> findByEmail(String email);
    
    // Find by course
    List<Student> findByCourse(String course);
    
    // Find by age range
    List<Student> findByAgeBetween(Integer minAge, Integer maxAge);
    
    // Find by name containing (case insensitive)
    @Query("SELECT s FROM Student s WHERE LOWER(s.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Student> findByNameContainingIgnoreCase(@Param("name") String name);
    
    // Count students by course
    long countByCourse(String course);
    
    // Find students by course ordered by name
    List<Student> findByCourseOrderByNameAsc(String course);
    
    // Custom query to find students older than specified age
    @Query("SELECT s FROM Student s WHERE s.age > :age ORDER BY s.age DESC")
    List<Student> findStudentsOlderThan(@Param("age") Integer age);
}`,

      // Student Service
      'src/main/java/com/codean/bootcamp/service/StudentService.java': `package com.codean.bootcamp.service;

import com.codean.bootcamp.entity.Student;
import com.codean.bootcamp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class StudentService {
    
    @Autowired
    private StudentRepository studentRepository;
    
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    
    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }
    
    public Student createStudent(Student student) {
        // Check if email already exists
        if (studentRepository.findByEmail(student.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists: " + student.getEmail());
        }
        
        return studentRepository.save(student);
    }
    
    public Student updateStudent(Long id, Student studentDetails) {
        Student student = studentRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        
        // Check if email is being changed and if new email already exists
        if (!student.getEmail().equals(studentDetails.getEmail())) {
            if (studentRepository.findByEmail(studentDetails.getEmail()).isPresent()) {
                throw new RuntimeException("Email already exists: " + studentDetails.getEmail());
            }
        }
        
        student.setName(studentDetails.getName());
        student.setEmail(studentDetails.getEmail());
        student.setCourse(studentDetails.getCourse());
        student.setAge(studentDetails.getAge());
        
        return studentRepository.save(student);
    }
    
    public void deleteStudent(Long id) {
        Student student = studentRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        
        studentRepository.delete(student);
    }
    
    public List<Student> getStudentsByCourse(String course) {
        return studentRepository.findByCourseOrderByNameAsc(course);
    }
    
    public List<Student> searchStudentsByName(String name) {
        return studentRepository.findByNameContainingIgnoreCase(name);
    }
    
    public List<Student> getStudentsByAgeRange(Integer minAge, Integer maxAge) {
        return studentRepository.findByAgeBetween(minAge, maxAge);
    }
    
    public long getStudentCountByCourse(String course) {
        return studentRepository.countByCourse(course);
    }
}`,

      // Student Controller
      'src/main/java/com/codean/bootcamp/controller/StudentController.java': `package com.codean.bootcamp.controller;

import com.codean.bootcamp.entity.Student;
import com.codean.bootcamp.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
    
    @Autowired
    private StudentService studentService;
    
    // GET all students
    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }
    
    // GET student by ID
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Optional<Student> student = studentService.getStudentById(id);
        
        return student.map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }
    
    // POST create new student
    @PostMapping
    public ResponseEntity<?> createStudent(@Valid @RequestBody Student student) {
        try {
            Student savedStudent = studentService.createStudent(student);
            return ResponseEntity.ok(savedStudent);
        } catch (RuntimeException e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
    
    // PUT update student
    @PutMapping("/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable Long id, @Valid @RequestBody Student studentDetails) {
        try {
            Student updatedStudent = studentService.updateStudent(id, studentDetails);
            return ResponseEntity.ok(updatedStudent);
        } catch (RuntimeException e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
    
    // DELETE student
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable Long id) {
        try {
            studentService.deleteStudent(id);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Student deleted successfully");
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
    
    // GET students by course
    @GetMapping("/course/{course}")
    public ResponseEntity<List<Student>> getStudentsByCourse(@PathVariable String course) {
        List<Student> students = studentService.getStudentsByCourse(course);
        return ResponseEntity.ok(students);
    }
    
    // GET students by name search
    @GetMapping("/search")
    public ResponseEntity<List<Student>> searchStudents(@RequestParam String name) {
        List<Student> students = studentService.searchStudentsByName(name);
        return ResponseEntity.ok(students);
    }
    
    // GET students by age range
    @GetMapping("/age")
    public ResponseEntity<List<Student>> getStudentsByAgeRange(
            @RequestParam Integer minAge, 
            @RequestParam Integer maxAge) {
        List<Student> students = studentService.getStudentsByAgeRange(minAge, maxAge);
        return ResponseEntity.ok(students);
    }
    
    // GET student count by course
    @GetMapping("/course/{course}/count")
    public ResponseEntity<Map<String, Object>> getStudentCountByCourse(@PathVariable String course) {
        long count = studentService.getStudentCountByCourse(course);
        Map<String, Object> response = new HashMap<>();
        response.put("course", course);
        response.put("count", count);
        return ResponseEntity.ok(response);
    }
}`,

      // Health Controller
      'src/main/java/com/codean/bootcamp/controller/HealthController.java': `package com.codean.bootcamp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HealthController {
    
    @GetMapping("/health")
    public Map<String, Object> health() {
        Map<String, Object> health = new HashMap<>();
        health.put("status", "UP");
        health.put("timestamp", LocalDateTime.now());
        health.put("service", "Codean Bootcamp API");
        health.put("version", "1.0.0");
        return health;
    }
    
    @GetMapping("/")
    public Map<String, String> root() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome to Codean Bootcamp API!");
        response.put("documentation", "Visit /api/health for health check");
        return response;
    }
}`,

      // Global Exception Handler
      'src/main/java/com/codean/bootcamp/exception/GlobalExceptionHandler.java': `package com.codean.bootcamp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, Object>> handleRuntimeException(RuntimeException ex) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("status", HttpStatus.BAD_REQUEST.value());
        response.put("error", "Bad Request");
        response.put("message", ex.getMessage());
        
        return ResponseEntity.badRequest().body(response);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, Object> response = new HashMap<>();
        Map<String, String> errors = new HashMap<>();
        
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        
        response.put("timestamp", LocalDateTime.now());
        response.put("status", HttpStatus.BAD_REQUEST.value());
        response.put("error", "Validation Failed");
        response.put("message", "Input validation failed");
        response.put("validationErrors", errors);
        
        return ResponseEntity.badRequest().body(response);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGenericException(Exception ex) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
        response.put("error", "Internal Server Error");
        response.put("message", "An unexpected error occurred");
        
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}`,

      // Test file
      'src/test/java/com/codean/bootcamp/CodeanBootcampApplicationTests.java': `package com.codean.bootcamp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CodeanBootcampApplicationTests {

    @Test
    void contextLoads() {
        // This test verifies that the Spring application context loads successfully
        System.out.println("✅ Spring Boot application context loaded successfully!");
    }
}`,

      // README
      'README.md': `# Codean Bootcamp - Spring Boot API

🚀 **Complete Spring Boot REST API Project** untuk pembelajaran di Codean Bootcamp.

## 📋 Prerequisites

- Java 17 atau lebih baru
- Maven 3.6+
- MySQL 8.0+
- IDE (IntelliJ IDEA, Eclipse, atau VS Code)

## 🛠️ Setup & Installation

### 1. Database Setup
\`\`\`sql
-- Buat database MySQL
CREATE DATABASE codean_bootcamp;

-- Atau biarkan Spring Boot membuatnya otomatis (sudah dikonfigurasi)
\`\`\`

### 2. Clone & Run
\`\`\`bash
# Clone project ini
# Import ke IDE Anda

# Jalankan aplikasi
mvn spring-boot:run

# Atau menggunakan IDE, jalankan CodeanBootcampApplication.java
\`\`\`

### 3. Konfigurasi Database
Edit \`src/main/resources/application.properties\`:
\`\`\`properties
spring.datasource.username=YOUR_MYSQL_USERNAME
spring.datasource.password=YOUR_MYSQL_PASSWORD
\`\`\`

## 🔗 API Endpoints

### Health Check
- **GET** \`/api/health\` - Cek status aplikasi

### Student Management
- **GET** \`/api/students\` - Get all students
- **GET** \`/api/students/{id}\` - Get student by ID
- **POST** \`/api/students\` - Create new student
- **PUT** \`/api/students/{id}\` - Update student
- **DELETE** \`/api/students/{id}\` - Delete student

### Advanced Queries
- **GET** \`/api/students/course/{course}\` - Get students by course
- **GET** \`/api/students/search?name={name}\` - Search students by name
- **GET** \`/api/students/age?minAge={min}&maxAge={max}\` - Get students by age range
- **GET** \`/api/students/course/{course}/count\` - Count students by course

## 📝 API Usage Examples

### Create Student
\`\`\`bash
curl -X POST http://localhost:8080/api/students \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@codean.com",
    "course": "Spring Boot",
    "age": 25
  }'
\`\`\`

### Get All Students
\`\`\`bash
curl -X GET http://localhost:8080/api/students
\`\`\`

### Update Student
\`\`\`bash
curl -X PUT http://localhost:8080/api/students/1 \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Smith",
    "email": "johnsmith@codean.com",
    "course": "Full Stack Development",
    "age": 26
  }'
\`\`\`

## 🧪 Testing

\`\`\`bash
# Run tests
mvn test

# Run dengan coverage
mvn jacoco:prepare-agent test jacoco:report
\`\`\`

## 📂 Project Structure

\`\`\`
src/
├── main/
│   ├── java/com/codean/bootcamp/
│   │   ├── CodeanBootcampApplication.java      # Main application
│   │   ├── controller/                         # REST Controllers
│   │   │   ├── StudentController.java
│   │   │   └── HealthController.java
│   │   ├── entity/                            # JPA Entities
│   │   │   └── Student.java
│   │   ├── repository/                        # Data Repositories
│   │   │   └── StudentRepository.java
│   │   ├── service/                           # Business Logic
│   │   │   └── StudentService.java
│   │   └── exception/                         # Exception Handling
│   │       └── GlobalExceptionHandler.java
│   └── resources/
│       └── application.properties             # Configuration
└── test/
    └── java/com/codean/bootcamp/
        └── CodeanBootcampApplicationTests.java
\`\`\`

## 🌟 Features

- ✅ **Complete CRUD Operations** - Create, Read, Update, Delete
- ✅ **Data Validation** - Input validation dengan Bean Validation
- ✅ **Exception Handling** - Global exception handler
- ✅ **Advanced Queries** - Custom repository methods
- ✅ **RESTful Design** - Mengikuti REST API best practices
- ✅ **Database Integration** - MySQL dengan JPA/Hibernate
- ✅ **Testing Ready** - Unit test setup
- ✅ **Documentation** - Comprehensive API documentation

## 🚀 Production Deployment

### Docker (Optional)
\`\`\`dockerfile
# Dockerfile example
FROM openjdk:17-jdk-slim
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
\`\`\`

### Build untuk Production
\`\`\`bash
mvn clean package -DskipTests
java -jar target/codean-bootcamp-api-*.jar
\`\`\`

## 📖 Learning Resources

1. **Spring Boot Documentation**: https://spring.io/projects/spring-boot
2. **Spring Data JPA**: https://spring.io/projects/spring-data-jpa
3. **MySQL Connector**: https://dev.mysql.com/doc/connector-j/8.0/en/
4. **Maven Guide**: https://maven.apache.org/guides/

## 🤝 Contributing

Ini adalah project pembelajaran. Silakan explore, modify, dan gunakan untuk belajar!

## 📞 Support

- **Codean Bootcamp**: https://codean.com
- **Documentation**: Lihat kode dan komentar di setiap file
- **Issues**: Cek console log untuk debugging

---

**Happy Coding! 🎉**

*Generated by Codean Bootcamp - ${new Date().toLocaleDateString()}*
`
    };
  };

  const downloadCompleteProject = async () => {
    try {
      const zip = new JSZip();
      const projectFiles = createCompleteSpringBootProject();
      
      // Add all files to ZIP
      Object.entries(projectFiles).forEach(([path, content]) => {
        zip.file(path, content);
      });

      // Generate and download ZIP
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = window.URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'codean-bootcamp-springboot-project.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error creating project ZIP:', error);
      alert('Error creating project download. Please try again.');
    }
  };

  return (
    <Button
      onClick={downloadCompleteProject}
      className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
    >
      <Download className="h-4 w-4" />
      <Folder className="h-4 w-4" />
      <Code className="h-4 w-4" />
      <span>Download Complete Spring Boot Project</span>
    </Button>
  );
};

export default SpringBootProjectDownloader;