import React from 'react';
import { Button } from './ui/button';
import { Download, FileArchive } from 'lucide-react';
import JSZip from 'jszip';

const CodeDownloader = ({ moduleId, moduleTitle, content }) => {
  const extractCodeBlocks = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const codeBlocks = doc.querySelectorAll('pre code');
    
    const files = [];
    let fileCounter = 1;
    
    codeBlocks.forEach((block) => {
      const code = block.textContent;
      let filename = `example_${fileCounter}`;
      let extension = '.txt';
      
      // Determine file type and extension based on content
      if (code.includes('package com.') || code.includes('public class') || code.includes('@Entity')) {
        extension = '.java';
        // Try to extract class name for filename
        const classMatch = code.match(/public class (\w+)/);
        if (classMatch) {
          filename = classMatch[1];
        }
      } else if (code.includes('<!DOCTYPE html>') || code.includes('<html>')) {
        extension = '.html';
        filename = `index_${fileCounter}`;
      } else if (code.includes('@RestController') || code.includes('@Service')) {
        extension = '.java';
        const classMatch = code.match(/public class (\w+)/);
        if (classMatch) {
          filename = classMatch[1];
        } else {
          filename = `Controller_${fileCounter}`;
        }
      } else if (code.includes('spring.') || code.includes('server.port')) {
        extension = '.properties';
        filename = 'application';
      } else if (code.includes('<dependencies>') || code.includes('<groupId>')) {
        extension = '.xml';
        filename = 'pom';
      } else if (code.includes('SELECT') || code.includes('CREATE TABLE')) {
        extension = '.sql';
        filename = `query_${fileCounter}`;
      } else if (code.includes('body {') || code.includes('h1 {')) {
        extension = '.css';
        filename = `styles_${fileCounter}`;
      } else if (code.includes('function') || code.includes('const') || code.includes('$(')) {
        extension = '.js';
        filename = `script_${fileCounter}`;
      }
      
      files.push({
        name: filename + extension,
        content: code
      });
      
      fileCounter++;
    });
    
    return files;
  };

  const createProjectStructure = (files) => {
    const structure = {
      'README.md': `# ${moduleTitle} - Code Examples

This project contains code examples from the ${moduleTitle} module of Codean Bootcamp.

## How to Use

1. **Java Files (.java)**: 
   - Import into your IDE (IntelliJ IDEA, Eclipse, or VS Code)
   - Make sure you have Java 17+ installed
   - For Spring Boot projects, use Maven to resolve dependencies

2. **HTML Files (.html)**: 
   - Open directly in web browser
   - Or use with a local web server

3. **CSS Files (.css)**: 
   - Link to your HTML files
   - Use with any web project

4. **JavaScript Files (.js)**: 
   - Include in your HTML pages
   - For jQuery examples, make sure to include jQuery library

5. **SQL Files (.sql)**: 
   - Run in your database management tool
   - Compatible with MySQL, PostgreSQL, etc.

6. **Configuration Files**: 
   - application.properties: Spring Boot configuration
   - pom.xml: Maven dependencies

## Project Structure

\`\`\`
${moduleId}-examples/
├── README.md
├── java/
│   ├── entities/
│   ├── controllers/
│   ├── services/
│   └── repositories/
├── web/
│   ├── html/
│   ├── css/
│   └── js/
├── sql/
└── config/
    ├── application.properties
    └── pom.xml
\`\`\`

## Getting Started

### For Spring Boot Projects:
1. Create new Spring Boot project at https://start.spring.io
2. Copy the Java files to appropriate packages
3. Copy configuration files to src/main/resources
4. Run: \`mvn spring-boot:run\`

### For Web Projects:
1. Create project folder
2. Copy HTML, CSS, JS files
3. Open index.html in browser

## Support

Visit https://codean.com for more tutorials and support.

---
Generated from Codean Bootcamp - ${new Date().toLocaleDateString()}
`
    };

    // Organize files by type
    files.forEach(file => {
      if (file.name.endsWith('.java')) {
        // Determine Java file category
        if (file.content.includes('@Entity')) {
          structure[`java/entities/${file.name}`] = file.content;
        } else if (file.content.includes('@RestController')) {
          structure[`java/controllers/${file.name}`] = file.content;
        } else if (file.content.includes('@Service')) {
          structure[`java/services/${file.name}`] = file.content;
        } else if (file.content.includes('@Repository')) {
          structure[`java/repositories/${file.name}`] = file.content;
        } else {
          structure[`java/${file.name}`] = file.content;
        }
      } else if (file.name.endsWith('.html')) {
        structure[`web/html/${file.name}`] = file.content;
      } else if (file.name.endsWith('.css')) {
        structure[`web/css/${file.name}`] = file.content;
      } else if (file.name.endsWith('.js')) {
        structure[`web/js/${file.name}`] = file.content;
      } else if (file.name.endsWith('.sql')) {
        structure[`sql/${file.name}`] = file.content;
      } else if (file.name.endsWith('.properties') || file.name.endsWith('.xml')) {
        structure[`config/${file.name}`] = file.content;
      } else {
        structure[file.name] = file.content;
      }
    });

    return structure;
  };

  const downloadCode = async () => {
    try {
      const files = extractCodeBlocks(content);
      
      if (files.length === 0) {
        alert('No code examples found in this module!');
        return;
      }

      const zip = new JSZip();
      const projectStructure = createProjectStructure(files);
      
      // Create folder structure and add files
      Object.entries(projectStructure).forEach(([path, content]) => {
        zip.file(path, content);
      });

      // Generate and download ZIP
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = window.URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${moduleId}-code-examples.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error creating ZIP file:', error);
      alert('Error creating download file. Please try again.');
    }
  };

  return (
    <Button
      onClick={downloadCode}
      variant="outline"
      size="sm"
      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20"
    >
      <Download className="h-4 w-4" />
      <FileArchive className="h-4 w-4" />
      <span>Download Code</span>
    </Button>
  );
};

export default CodeDownloader;