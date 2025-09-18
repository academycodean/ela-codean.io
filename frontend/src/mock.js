// Mock data for Codean Bootcamp
export const mockUsers = [
  { username: "admin", password: "1234", role: "admin" },
  { username: "student", password: "bootcamp", role: "student" },
  { username: "codean", password: "2025", role: "instructor" },
  { username: "codean", password: "batch7", role: "student" },
  { username: "codean", password: "batch8", role: "student" },
  { username: "codean", password: "batch9", role: "student" },
  { username: "codean", password: "batch10", role: "student" }
];

export const mockCourses = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, and jQuery",
    icon: "Code2",
    color: "from-blue-500 to-purple-600",
    modules: [
      {
        id: "html-basics",
        title: "HTML Fundamentals",
        content: `
          <h3>Introduction to Front-End Development</h3>
          <p>Front-end development is the development of code that creates the visual front-end elements of a software, application, or website. Front-end languages include HTML, CSS, and JavaScript.</p>
          <ul>
            <li><strong>HTML:</strong> Defines the content of web pages.</li>
            <li><strong>CSS:</strong> Specifies the layout of web pages.</li>
            <li><strong>JavaScript:</strong> Programs the behavior of web pages.</li>
          </ul>

          <h3>HTML Basics</h3>
          <p>HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of web pages. HTML elements are the building blocks of HTML pages, represented by tags.</p>
          
          <h4>Basic HTML Structure</h4>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code>: This declaration appears at the very top of every HTML document and tells the browser that what follows is HTML5.</li>
            <li><code>&lt;head&gt;</code>: Contains information about the page (title, links to external files like CSS and JavaScript, meta-information).</li>
            <li><code>&lt;body&gt;</code>: Where the main content displayed on the screen resides. Anything to be rendered goes between the body tags.</li>
          </ul>

          <h4>Creating Your First Web Page</h4>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Purwadhika&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  Hello World!
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h4>HTML Elements, Tags, and Attributes</h4>
          <ul>
            <li><strong>Element:</strong> A complete HTML tag, including its content.</li>
            <li><strong>Tag:</strong> The keywords that define HTML elements (e.g., &lt;h1&gt;, &lt;p&gt;).</li>
            <li><strong>Attribute:</strong> Provides additional information about an element (e.g., style="color:blue;").</li>
            <li><strong>Attribute Value:</strong> The value assigned to an attribute (e.g., "color:blue;").</li>
          </ul>

          <h4>Example</h4>
          <pre><code>&lt;h1 style="color:blue;"&gt;Hi!&lt;/h1&gt;</code></pre>

          <h4>Paragraphs, Line Breaks, and Comments</h4>
          <ul>
            <li><strong>Paragraph:</strong> <code>&lt;p&gt;Ini paragraf 1.&lt;/p&gt; &lt;p&gt;Ini paragraf 2.&lt;/p&gt;</code></li>
            <li><strong>Line Break:</strong> <code>&lt;br&gt;</code> (Ini baris 1&lt;br&gt;Ini baris 2)</li>
            <li><strong>Comment:</strong> <code>&lt;!-- Ini komentar --&gt;</code></li>
          </ul>

          <h4>Headings</h4>
          <p>HTML provides six levels of headings:</p>
          <pre><code>&lt;h1&gt; Ini Heading 1 &lt;/h1&gt;
&lt;h2&gt; Ini Heading 2 &lt;/h2&gt;
&lt;h3&gt; Ini Heading 3 &lt;/h3&gt;
&lt;h4&gt; Ini Heading 4 &lt;/h4&gt;
&lt;h5&gt; Ini Heading 5 &lt;/h5&gt;
&lt;h6&gt; Ini Heading 6 &lt;/h6&gt;</code></pre>

          <h4>HTML Text Formatting</h4>
          <pre><code>&lt;hr&gt;
&lt;b&gt; Ini bold &lt;/b&gt; &lt;br&gt;
&lt;strong&gt; Ini strong &lt;/strong&gt; &lt;br&gt;
&lt;i&gt; Ini italic &lt;/i&gt; &lt;br&gt;
&lt;em&gt; Ini emphasized &lt;/em&gt; &lt;br&gt;
&lt;mark&gt; Ini marked &lt;/mark&gt; &lt;br&gt;
&lt;small&gt; Ini small &lt;/small&gt; &lt;br&gt;
&lt;del&gt; Ini deleted &lt;/del&gt; &lt;br&gt;
&lt;ins&gt; Ini inserted &lt;/ins&gt; &lt;br&gt;
&lt;sub&gt; Ini subscript &lt;/sub&gt; &lt;br&gt;
&lt;sup&gt; Ini superscript &lt;/sup&gt; &lt;br&gt;
&lt;hr&gt;</code></pre>
        `
      },
      {
        id: "html-lists-tables",
        title: "HTML Lists & Tables",
        content: `
          <h3>Lists</h3>
          
          <h4>Unordered Lists (ul)</h4>
          <pre><code>&lt;h1&gt; Daftar belanja: &lt;/h1&gt;
&lt;ul&gt;
  &lt;li&gt; Beras &lt;/li&gt;
  &lt;li&gt; Minyak goreng &lt;/li&gt;
  &lt;li&gt; Gula &lt;/li&gt;
  &lt;li&gt; Santan &lt;/li&gt;
  &lt;li&gt; Merica &lt;/li&gt;
  &lt;li&gt; Ikan &lt;/li&gt;
&lt;/ul&gt;</code></pre>
          <p>List types: type="disc", type="circle", type="square"</p>

          <h4>Ordered Lists (ol)</h4>
          <pre><code>&lt;h1&gt; Ranking Kelas X: &lt;/h1&gt;
&lt;ol&gt;
  &lt;li&gt; Andi &lt;/li&gt;
  &lt;li&gt; Budi &lt;/li&gt;
  &lt;li&gt; Caca &lt;/li&gt;
  &lt;li&gt; Dedi &lt;/li&gt;
  &lt;li&gt; Euis &lt;/li&gt;
  &lt;li&gt; Fafa &lt;/li&gt;
&lt;/ol&gt;</code></pre>
          <p>List types: type="1", type="a", type="A", type="i", type="I"</p>

          <h4>Description Lists (dl)</h4>
          <pre><code>&lt;h1&gt; Glosarium: &lt;/h1&gt;
&lt;dl&gt;
  &lt;dt&gt; Mikrokontroler &lt;/dt&gt;
  &lt;dd&gt; xyzxyzxyzxyzxyzxyz &lt;/dd&gt;
  &lt;dt&gt; Sensor &lt;/dt&gt;
  &lt;dd&gt; xyzxyzxyzxyzxyzxyz &lt;/dd&gt;
  &lt;dt&gt; Aktuator &lt;/dt&gt;
  &lt;dd&gt; xyzxyzxyzxyzxyzxyz &lt;/dd&gt;
&lt;/dl&gt;</code></pre>

          <h3>HTML Tables</h3>
          <pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt; Nama &lt;/th&gt;
    &lt;th&gt; TTL &lt;/th&gt;
    &lt;th&gt; Alamat &lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt; Galih &lt;/td&gt;
    &lt;td&gt; Jepara, 25 Jan 1992 &lt;/td&gt;
    &lt;td&gt; Soditan 02/VI Kramat Jati &lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt; Ratna &lt;/td&gt;
    &lt;td&gt; Bandung, 4 Apr 1994 &lt;/td&gt;
    &lt;td&gt; Geger Kalong No 45 &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>

          <h4>Table Borders</h4>
          <p>Use CSS to style borders: border: 1px solid black; border-collapse: collapse;</p>

          <h4>Column Span (colspan)</h4>
          <p>Merges cells horizontally:</p>
          <pre><code>&lt;td colspan="2"&gt;&lt;center&gt;Jakarta&lt;/center&gt;&lt;/td&gt;</code></pre>

          <h4>Row Span (rowspan)</h4>
          <p>Merges cells vertically:</p>
          <pre><code>&lt;th rowspan="2"&gt;Jakarta&lt;/th&gt;</code></pre>
        `
      },
      {
        id: "html-links-images",
        title: "HTML Links & Images",
        content: `
          <h3>Links</h3>
          
          <h4>Absolute Links</h4>
          <p>Link to a specific URL:</p>
          <pre><code>&lt;a href="https://www.google.com"&gt;Google&lt;/a&gt;
&lt;a href="https://www.yahoo.com" target="_blank"&gt;Yahoo&lt;/a&gt;</code></pre>

          <h4>Relative Links</h4>
          <p>Link to a file within the same website:</p>
          <pre><code>&lt;a href="satu.html"&gt;Halaman Satu&lt;/a&gt;
&lt;a href="/index.html" target="_blank"&gt;Halaman Index&lt;/a&gt;</code></pre>

          <h4>ID Links</h4>
          <p>Link to a specific element within the same page using its ID:</p>
          <pre><code>&lt;a href="#aku"&gt;Klik untuk cari namaku!&lt;/a&gt;
&lt;h2 id="kau"&gt; Joko &lt;/h2&gt; 
&lt;h2 id="aku"&gt; Lintang &lt;/h2&gt;</code></pre>

          <h3>Images</h3>
          <pre><code>&lt;img src="cat.png" alt="Ini kucing"&gt;
&lt;img src="tiger.svg" alt="Ini macan" width="200" height="200"&gt;
&lt;img src="url_from_web.jpeg" alt="Ini gambar dari web" width="200" height="200"&gt;</code></pre>

          <h4>Figures and Captions</h4>
          <pre><code>&lt;figure&gt;
  &lt;img src="lion.png"&gt;
  &lt;figcaption&gt;Ini singa&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>

          <h3>SVG (Scalable Vector Graphics)</h3>
          <pre><code>&lt;svg width="200" height="200"&gt;
  &lt;circle cx="100" cy="100" r="80" stroke="red" stroke-width="5" fill="blue" /&gt;
&lt;/svg&gt;

&lt;svg width="400" height="200"&gt;
  &lt;rect x="25" y="25" width="300" height="100" 
        style="fill: rgb(100, 0, 100); stroke-width: 5; stroke: black;"&gt;
  &lt;/rect&gt;
&lt;/svg&gt;</code></pre>
        `
      },
      {
        id: "html-forms",
        title: "HTML Forms",
        content: `
          <h3>Forms</h3>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Forms&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;form action="" method="post"&gt;
    &lt;!-- INSERT FORM ELEMENTS HERE --&gt;
  &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h4>Input Forms</h4>
          <pre><code>&lt;p&gt;&lt;input type="text"&gt;&lt;/p&gt;
&lt;p&gt;&lt;input type="password" required&gt;&lt;/p&gt;
&lt;p&gt;&lt;input type="checkbox"&gt;&lt;/p&gt;
&lt;p&gt;&lt;input type="radio"&gt;&lt;/p&gt;
&lt;p&gt;&lt;input type="number" min="1" max="10"&gt;&lt;/p&gt;
&lt;p&gt;&lt;textarea rows="8" cols="64"&gt;Ketik di sini&lt;/textarea&gt;&lt;/p&gt;
&lt;p&gt;&lt;input type="submit" value="OK"&gt;&lt;/p&gt;</code></pre>

          <h4>Buttons</h4>
          <pre><code>&lt;button type="button"&gt;OK&lt;/button&gt;
&lt;button type="button" onclick="doSomething();"&gt;Apply&lt;/button&gt;</code></pre>

          <h4>Select Forms</h4>
          <pre><code>&lt;p&gt;Apa warna favoritmu?&lt;/p&gt;
&lt;select&gt;
  &lt;option&gt;Merah&lt;/option&gt;
  &lt;option&gt;Kuning&lt;/option&gt;
  &lt;option&gt;Hijau&lt;/option&gt;
  &lt;option&gt;Biru&lt;/option&gt;
&lt;/select&gt;

&lt;p&gt;Apa makanan favoritmu?&lt;/p&gt;
&lt;select&gt;
  &lt;option&gt;Papeda&lt;/option&gt;
  &lt;option&gt;Soto Kwali&lt;/option&gt;
  &lt;option&gt;Sate Padang&lt;/option&gt;
  &lt;option selected&gt;Gudeg&lt;/option&gt;
&lt;/select&gt;</code></pre>

          <h4>Option Groups</h4>
          <pre><code>&lt;p&gt;Minuman favoritmu?&lt;/p&gt;
&lt;select&gt;
  &lt;optgroup label="Jus Buah"&gt;
    &lt;option&gt;Jus Apel&lt;/option&gt;
    &lt;option&gt;Jus Jeruk&lt;/option&gt;
    &lt;option&gt;Jus Mangga&lt;/option&gt;
  &lt;/optgroup&gt;
  &lt;optgroup label="Jamu"&gt;
    &lt;option&gt;Kencur&lt;/option&gt;
    &lt;option&gt;Asem&lt;/option&gt;
    &lt;option&gt;Brotowali&lt;/option&gt;
  &lt;/optgroup&gt;
&lt;/select&gt;</code></pre>

          <h4>Labels</h4>
          <pre><code>&lt;p&gt;
  &lt;label for="user"&gt;Username:&lt;/label&gt;
  &lt;input type="text" name="user"&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;label for="pass"&gt;Password:&lt;/label&gt;
  &lt;input type="password" name="pass"&gt;
&lt;/p&gt;</code></pre>

          <h4>Field Sets and Legends</h4>
          <pre><code>&lt;fieldset&gt;
  &lt;legend&gt;Data Diri&lt;/legend&gt;
  &lt;p&gt;
    &lt;label for="nama"&gt;Nama:&lt;/label&gt;
    &lt;input type="text" name="nama"&gt;
  &lt;/p&gt;
  &lt;p&gt;
    &lt;label for="usia"&gt;Usia:&lt;/label&gt;
    &lt;input type="number" name="usia"&gt;
  &lt;/p&gt;
&lt;/fieldset&gt;</code></pre>
        `
      },
      {
        id: "html-semantic",
        title: "HTML Semantic Elements",
        content: `
          <h3>Division Tag (div)</h3>
          <p>The div tag represents a generic container. It's a block-level element.</p>
          <pre><code>&lt;div&gt;Division 1&lt;/div&gt;
&lt;div&gt;Division 2&lt;/div&gt;
&lt;div&gt;Division 3&lt;/div&gt;</code></pre>

          <h3>Span Tag (span)</h3>
          <p>The span tag is an inline element that wraps content without starting a new line.</p>
          <pre><code>&lt;p&gt;Namaku &lt;span&gt;Mr. X&lt;/span&gt;&lt;/p&gt;</code></pre>

          <h3>Articles and Sections</h3>
          <pre><code>&lt;article&gt;
  &lt;section class="header"&gt;
    &lt;h1&gt;Header Artikel&lt;/h1&gt;
    &lt;p&gt;Selamat datang!&lt;/p&gt;
  &lt;/section&gt;
  &lt;section class="main"&gt;
    &lt;p&gt;Ini konten utama.&lt;/p&gt;
  &lt;/section&gt;
  &lt;section class="footer"&gt;
    &lt;p&gt;Bye!&lt;/p&gt;
  &lt;/section&gt;
&lt;/article&gt;</code></pre>

          <h3>Main, Headers, and Footers</h3>
          <pre><code>&lt;article&gt;
  &lt;header&gt;
    &lt;h1&gt;Header Artikel&lt;/h1&gt;
    &lt;p&gt;Selamat datang!&lt;/p&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;Ini konten utama.&lt;/p&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;Bye!&lt;/p&gt;
  &lt;/footer&gt;
&lt;/article&gt;</code></pre>

          <h3>Asides</h3>
          <pre><code>&lt;article&gt;
  &lt;header&gt;
    &lt;h1&gt;Header Artikel&lt;/h1&gt;
    &lt;p&gt;Selamat datang!&lt;/p&gt;
  &lt;/header&gt;
  &lt;section class="main"&gt;
    &lt;p&gt;Ini konten utama.&lt;/p&gt;
    &lt;aside&gt;
      &lt;h2&gt;Ini Snippet!&lt;/h2&gt;
      &lt;p&gt;Ini teks Snippet&lt;/p&gt;
    &lt;/aside&gt;
  &lt;/section&gt;
  &lt;footer&gt;
    &lt;p&gt;Bye!&lt;/p&gt;
  &lt;/footer&gt;
&lt;/article&gt;</code></pre>

          <h3>Navigation</h3>
          <pre><code>&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Blog&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;News&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
&lt;article&gt;
  &lt;!-- insert article content here --&gt;
&lt;/article&gt;</code></pre>
        `
      },
      {
        id: "css-basics",
        title: "CSS Basic Styles",
        content: `
          <h3>CSS (Cascading Style Sheets)</h3>
          <p>CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work; it can control the layout of multiple web pages all at once. External stylesheets are better stored in CSS files separately.</p>

          <h3>CSS Styling Methods</h3>
          
          <h4>Inline Styles</h4>
          <p>Inline styles are applied directly within HTML elements using the style attribute.</p>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;CSS Styles&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1 style="color:red"&gt;Hai!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h4>Internal Styles</h4>
          <p>Internal styles are defined within the &lt;style&gt; tag inside the &lt;head&gt; section of an HTML document.</p>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;CSS Styles&lt;/title&gt;
&lt;style&gt;
h2 {color: green;}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h2&gt;Halo!&lt;/h2&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h4>External Styles</h4>
          <p>External styles are stored in separate CSS files (e.g., style.css) and linked to HTML documents using the &lt;link&gt; tag.</p>
          <p><strong>style.css:</strong></p>
          <pre><code>p {
  color: blue;
}</code></pre>
          <p><strong>index.html:</strong></p>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;CSS Styles&lt;/title&gt;
&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;Ini paragraf.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h3>Selectors</h3>
          <p>Selectors tell CSS which elements to style. h2, p, .mobil, and #avanza are examples of selectors. {color: orange;} represents a property and its value.</p>
          
          <p><strong>To select an element:</strong></p>
          <ul>
            <li>Call its tag (e.g., h2 {color: orange;})</li>
            <li>Call its class (e.g., .mobil {color: blue;})</li>
            <li>Call its ID (e.g., #avanza {color: green;})</li>
          </ul>

          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
h2 {color: orange;}
p {color: red;}
.mobil {color: blue;}
#avanza {color: greenyellow}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h2&gt;Halo&lt;/h2&gt;
&lt;p&gt;Hai&lt;/p&gt;
&lt;p class="mobil" id="avanza"&gt;Ini Avanza&lt;/p&gt;
&lt;p class="mobil" id="alya"&gt;Ini Alya&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h4>Attribute Selector</h4>
          <p>An attribute selector targets elements based on their attributes.</p>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
a[href] {color: red;}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;&lt;a href="#"&gt;Ini Link&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        `
      },
      {
        id: "css-colors-backgrounds",
        title: "CSS Colors & Backgrounds",
        content: `
          <h3>Color</h3>
          <p>CSS offers several ways to specify colors:</p>
          <ul>
            <li><strong>RGB:</strong> {color: rgb(0, 0, 255);} (Red, Green, Blue values)</li>
            <li><strong>Hexadecimal:</strong> {color: #00FF00;} (Hex code)</li>
            <li><strong>HSL:</strong> {color: hsl(360, 100%, 75%);} (Hue, Saturation, Lightness)</li>
            <li><strong>Alpha (Transparency):</strong> {color: rgba(0, 0, 255, 0.782);} (RGB with alpha)</li>
            <li><strong>HSL with Alpha:</strong> {color: hsla(360, 100%, 75%, 0.5);} (HSL with alpha)</li>
          </ul>

          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
body {background-color: yellow;}
h1 {color: rgb(0, 0, 255);}
h2 {color: #00FF00;}
p {color: hsl(360, 100%, 75%);}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Selamat datang!&lt;/h1&gt;
&lt;h2&gt;Purwadhika&lt;/h2&gt;
&lt;p&gt;Startup &amp; Coding School&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h3>Backgrounds</h3>
          
          <h4>Background Color</h4>
          <pre><code>&lt;head&gt;
&lt;style&gt;
body {
  background-color: blue;
  /*background: linear-gradient(blue, yellow);*/
  /*background: linear-gradient(90deg, blue, yellow);*/
  /*background: radial-gradient(blue, yellow);*/
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;&lt;/body&gt;</code></pre>

          <h4>Background Image</h4>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
body {
  background-color: lightgray;
  background: url("lin.jpg");
  background-position: left top;
  background-size: 1280px 720px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;&lt;/body&gt;
&lt;/html&gt;</code></pre>
        `
      },
      {
        id: "css-text-fonts",
        title: "CSS Text & Fonts",
        content: `
          <h3>Font & Text</h3>
          <pre><code>&lt;head&gt;
&lt;style&gt;
p {
  font-family: "Impact", Arial;
  font-style: italic;
  text-transform: uppercase;
  text-decoration: line-through;
  text-shadow: -4px 4px 4px red;
  line-height: 50%;
  letter-spacing: 2px;
  word-spacing: 4px;
  text-align: left;
  text-indent: 2rem;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;&lt;p&gt;halo kamu!&lt;/p&gt;&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h4>Font Properties</h4>
          <ul>
            <li><strong>font-family:</strong> (Web-safe fonts) Arial, Helvetica, Times New Roman, Times, Courier New, Courier, Verdana, Georgia, Palatino, Garamond, Bookman, Comic Sans MS, Trebuchet MS, Arial Black, Impact</li>
            <li><strong>font-style:</strong> normal, italic, oblique</li>
            <li><strong>text-transform:</strong> capitalize, uppercase, lowercase, none</li>
            <li><strong>text-decoration:</strong> underline, overline, line-through, none</li>
            <li><strong>text-align:</strong> left, center, right</li>
          </ul>

          <h3>Google Fonts</h3>
          <p>Google Fonts allows you to add custom fonts to your web pages. Here's how to use them:</p>
          <pre><code>&lt;head&gt;
&lt;link href='https://fonts.googleapis.com/css?family=Tangerine|Sofia' rel='stylesheet'&gt;
&lt;style&gt;
h1 {
  font-family: 'Sofia'; 
  font-size: 50px;
}
h2 {
  font-family: 'Tangerine'; 
  font-size: 50px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Ini Font Sofia&lt;/h1&gt;
&lt;h2&gt;Ini Font Tangerine&lt;/h2&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

          <h3>Lists Styling</h3>
          <pre><code>&lt;head&gt;
&lt;style&gt;
ul {
  list-style-type: none;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;ul&gt;
&lt;li&gt;List #1&lt;/li&gt;
&lt;li&gt;List #2&lt;/li&gt;
&lt;li&gt;List #3&lt;/li&gt;
&lt;/ul&gt;
&lt;/body&gt;</code></pre>
          <p><strong>list-style-type:</strong> decimal, decimal-leading-zero, unset, lower-roman, upper-roman, square, etc.</p>
        `
      },
      {
        id: "css-box-model",
        title: "CSS Box Model",
        content: `
          <h3>Width & Height</h3>
          <pre><code>&lt;head&gt;
&lt;style&gt;
.konten {
  background-color: pink;
  width: 200px;
  height: 100px
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="konten"&gt;
Halo semuanya!
&lt;/div&gt;
&lt;/body&gt;</code></pre>

          <h3>Unit Length</h3>
          <h4>Absolute Lengths</h4>
          <ul>
            <li><strong>px</strong> (pixels)</li>
            <li><strong>pt</strong> (points)</li>
            <li><strong>cm</strong> (centimeters)</li>
            <li><strong>mm</strong> (millimeters)</li>
            <li><strong>in</strong> (inches)</li>
            <li><strong>pc</strong> (picas)</li>
          </ul>

          <h4>Relative Lengths</h4>
          <ul>
            <li><strong>%</strong> (percentages)</li>
            <li><strong>em</strong> (relative to current font size)</li>
            <li><strong>rem</strong> (relative to root font size)</li>
            <li><strong>vw</strong> (relative to viewport width)</li>
            <li><strong>vh</strong> (relative to viewport height)</li>
            <li><strong>vmin</strong> (relative to smaller viewport dimension)</li>
            <li><strong>vmax</strong> (relative to larger viewport dimension)</li>
            <li><strong>ch</strong> (relative to '0' width)</li>
            <li><strong>ex</strong> (relative to x-height of font)</li>
          </ul>

          <h3>Padding</h3>
          <pre><code>&lt;head&gt;
&lt;style&gt;
div {
  background-color: lightblue;
}
.tanpa-padding {
  padding: 0;
}
.pakai-padding {
  padding: 25px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="tanpa-padding"&gt;Tanpa padding&lt;/div&gt;
&lt;br&gt;
&lt;div class="pakai-padding"&gt;Pakai padding&lt;/div&gt;
&lt;/body&gt;</code></pre>

          <h4>Individual Padding</h4>
          <pre><code>&lt;head&gt;
&lt;style&gt;
div {
  background-color: lightblue;
  width: 900px;
  height: 500px;
}
h1 {
  color: white;
  background-color: blue;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 25px;
  padding-right: 30px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div&gt;&lt;h1&gt;Ini Padding&lt;/h1&gt;&lt;/div&gt;
&lt;/body&gt;</code></pre>

          <h3>Border</h3>
          <pre><code>&lt;head&gt;
&lt;style&gt;
div {
  background-color: lightblue;
  width: 900px;
  height: 500px;
}
h1 {
  color: white;
  background-color: blue;
  padding: 25px;
  border: 20px ridge yellow;
  border-radius: 10px;
  box-shadow: -0.5rem 0.5rem 1rem gray;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div&gt;&lt;h1&gt;Contoh Border&lt;/h1&gt;&lt;/div&gt;
&lt;/body&gt;</code></pre>
          <p><strong>Border styles:</strong> solid, dotted, dashed, double, inset, outset, groove, ridge</p>

          <h3>Margin</h3>
          <pre><code>&lt;head&gt;
&lt;style&gt;
div {
  background-color: lightblue;
  width: 900px;
  height: 500px;
  margin-left: 200px;
}
h1 {
  color: white;
  background-color: blue;
  padding: 25px;
  border: 20px ridge yellow;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div&gt;&lt;h1&gt;Contoh Border&lt;/h1&gt;&lt;/div&gt;
&lt;/body&gt;</code></pre>
          <p><strong>Margin:</strong> margin-top, margin-bottom, margin-right, margin-left</p>
        `
      },
      {
        id: "css-transforms",
        title: "CSS Transforms",
        content: `
          <h3>2D Transforms</h3>
          
          <h4>Translate</h4>
          <p>Move elements from their current position:</p>
          <pre><code>transform: translate(100px, 100px);</code></pre>

          <h4>Rotate</h4>
          <p>Rotate elements by specified degrees:</p>
          <pre><code>transform: rotate(45deg);</code></pre>

          <h4>Scale</h4>
          <p>Resize elements (width, height):</p>
          <pre><code>transform: scale(0.75, 1.25);</code></pre>

          <h4>Skew</h4>
          <p>Skew elements along X and Y axes:</p>
          <pre><code>transform: skew(5deg, 10deg);</code></pre>

          <h4>Multiple Transforms</h4>
          <p>Combine multiple transforms:</p>
          <pre><code>transform: skew(15deg, 7deg) rotate(125deg);</code></pre>

          <h3>3D Transforms</h3>
          
          <h4>Translate X, Y, Z</h4>
          <pre><code>transform: perspective(700px) translateX(100px);
transform: perspective(700px) translateY(100px);
transform: perspective(700px) translateZ(200px);</code></pre>

          <h4>Rotate X, Y, Z</h4>
          <p>3D rotation around different axes:</p>
          <pre><code>transform: perspective(700px) rotateX(45deg);
transform: perspective(700px) rotateY(45deg);
transform: perspective(700px) rotateZ(45deg);</code></pre>

          <p><strong>Note:</strong> The perspective property is crucial for 3D transforms to work properly. It defines the distance between the z=0 plane and the user.</p>
        `
      },
      {
        id: "jquery-basics",
        title: "jQuery Fundamentals",
        content: `
          <h3>Introduction to jQuery</h3>
          <p>jQuery is a fast, small, and feature-rich JavaScript library. It simplifies tasks like HTML document traversal and manipulation, event handling, animation, and Ajax with an easy-to-use API that works across many browsers. Its versatility and extensibility have changed how millions write JavaScript.</p>

          <h3>Setup</h3>
          
          <h4>Online (CDN)</h4>
          <p>Insert the CDN link in your HTML head:</p>
          <pre><code>&lt;script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNf0u9lta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"&gt;&lt;/script&gt;</code></pre>
          <p>The integrity and crossorigin attributes are crucial for Subresource Integrity (SRI) checking, ensuring that the library hasn't been tampered with.</p>

          <h4>Offline</h4>
          <p>Download jQuery from jquery.com, save the file (e.g., jquery-3.3.1.min.js) in your project's js folder:</p>
          <pre><code>&lt;head&gt;
    &lt;script src="js/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>

          <h3>First jQuery Code</h3>
          <p>This example hides the h1 element:</p>
          <pre><code>&lt;head&gt;
    &lt;script src="js/jquery-3.3.1.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Belajar jQuery&lt;/h1&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('h1').hide();
            // $('h1').show();  // Uncomment to show
            // $('*').hide();    // Uncomment to hide all elements
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Basic Selectors</h3>
          <ul>
            <li><code>$('.iniclass')</code>: Selects elements with the class "iniclass"</li>
            <li><code>$('#iniid')</code>: Selects the element with the ID "iniid"</li>
            <li><code>$('p span')</code>: Selects span elements within p elements</li>
          </ul>

          <h4>Example - Changing Colors</h4>
          <pre><code>&lt;body&gt;
    &lt;h1 class="iniclass"&gt;Halo jQuery&lt;/h1&gt;
    &lt;h1 id="iniid"&gt;jQuery Itu Asik&lt;/h1&gt;
    &lt;p&gt;Yuk kuasai &lt;span&gt;jQuery&lt;/span&gt;!&lt;/p&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('.iniclass').css('color','pink');
            $('#iniid').css('color','blue');
            $('p span').css('color','red');
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h4>Multiple CSS Properties</h4>
          <pre><code>&lt;body&gt;
    &lt;h1 class="iniclass"&gt;Halo&lt;/h1&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('.iniclass').css({
                color:'pink',
                background:'black'
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>
        `
      },
      {
        id: "jquery-selectors",
        title: "jQuery Advanced Selectors",
        content: `
          <h3>Nested Selectors</h3>
          <pre><code>&lt;body&gt;
    &lt;ul class="daftar"&gt;
        &lt;li&gt;Andi&lt;/li&gt;
        &lt;li&gt;Budi&lt;/li&gt;
        &lt;li&gt;Caca&lt;/li&gt;
        &lt;li&gt;Dedi&lt;/li&gt;
    &lt;/ul&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('.daftar').css('background-color','yellow');
            $('.daftar li:first').css('color','red');
            $('.daftar li:last').css('color','blue');
            //$('.daftar li:even').css('color','red'); //Example of even/odd selectors
            //$('.daftar li:odd').css('color','blue'); //Example of even/odd selectors
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Attribute Selectors</h3>
          <pre><code>&lt;body&gt;
    &lt;p&gt;&lt;input type="text" value="Ketik di sini!"&gt;&lt;/p&gt;
    &lt;p&gt;&lt;input type="submit" value="Tombol 1"&gt;&lt;/p&gt;
    &lt;p&gt;&lt;input type="button" value="Tombol 2"&gt;&lt;/p&gt;
    &lt;p&gt;&lt;a href="http://google.com"&gt;Link 1&lt;/a&gt;&lt;/p&gt;
    &lt;p&gt;&lt;a href="http://yahoo.com"&gt;Link 2&lt;/a&gt;&lt;/p&gt;
    &lt;script&gt;
        $(document).ready(function(){
            // $(':text').hide();  // Example of attribute selector
            // $(':submit').hide(); // Example of attribute selector
            // $(':button').hide(); // Example of attribute selector
            $('[href]').css('color','pink');
            $('a[href="http://yahoo.com"]').css('color','red');
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>
        `
      },
      {
        id: "jquery-events",
        title: "jQuery Events",
        content: `
          <h3>Click Alert</h3>
          <pre><code>&lt;body&gt;
    &lt;button id="tombol1"&gt;Tombol 1&lt;/button&gt;
    &lt;button id="tombol2"&gt;Tombol 2&lt;/button&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('#tombol1').click(function(){
                alert('Tombol 1 ditekan!');
            });
            $('#tombol2').on('click', function(){
                alert('Tombol 2 ditekan!');
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Click Show & Hide</h3>
          <pre><code>&lt;body&gt;
    &lt;button id="tombol1"&gt;Tombol 1&lt;/button&gt;
    &lt;button id="tombol2"&gt;Tombol 2&lt;/button&gt;
    &lt;p class="note"&gt;Halo Dunia!&lt;/p&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('.note').hide();
            $('#tombol1').click(function(){
                $('.note').hide();
            });
            $('#tombol2').on('click', function(){
                $('.note').show();
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Click Toggle</h3>
          <pre><code>&lt;body&gt;
    &lt;button id="tombol1"&gt;Tombol 1&lt;/button&gt;
    &lt;p class="note"&gt;Halo Dunia!&lt;/p&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('#tombol1').click(function(){
                $('.note').toggle();
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Click Toggle with Delay</h3>
          <pre><code>&lt;body&gt;
    &lt;button id="tombol1"&gt;Tombol 1&lt;/button&gt;
    &lt;p class="note"&gt;Halo Dunia!&lt;/p&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('#tombol1').click(function(){
                $('.note').toggle(1000, function(){
                    alert('Tombol ditekan!');
                });
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Double-Click</h3>
          <pre><code>&lt;body&gt;
    &lt;button id="tombol1"&gt;Tombol 1&lt;/button&gt;
    &lt;p class="note"&gt;Halo Dunia!&lt;/p&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('#tombol1').dblclick(function(){
                $('.note').toggle();
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Hover</h3>
          <pre><code>&lt;body&gt;
    &lt;button id="tombol1"&gt;Tombol 1&lt;/button&gt;
    &lt;p class="note"&gt;Halo Dunia!&lt;/p&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('#tombol1').hover(function(){
                $('.note').toggle();
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Mouse Events</h3>
          <pre><code>&lt;body&gt;
    &lt;button id="tombol1"&gt;Tombol 1&lt;/button&gt;
    &lt;p class="note"&gt;Halo Dunia!&lt;/p&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('#tombol1').on('mousemove', function(){
                $('.note').toggle();
            });
            $('#tombol1').on('mousedown', function(){
                $('.note').toggle();
            });
            $('#tombol1').on('mouseup', function(){
                $('.note').toggle();
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>
        `
      },
      {
        id: "jquery-forms",
        title: "jQuery Forms & Input",
        content: `
          <h3>Getting Event Information</h3>
          <pre><code>&lt;body&gt;
    &lt;button id="tombol1"&gt;Tombol 1&lt;/button&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('#tombol1').click(function(x){
                console.log(x);
                // alert(x.currentTarget.id);
                // alert(x.currentTarget.innerHTML);
                // alert(x.currentTarget.outerHTML);
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Cursor Position</h3>
          <pre><code>&lt;body style="background-color:yellow"&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $(document).on('mousemove', function(pos){
                console.log('X: '+pos.clientX+' Y: '+pos.clientY);
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Cursor Position & Embedding in Browser</h3>
          <pre><code>&lt;body style="background-color:yellow"&gt;
    &lt;h1 id="a"&gt;&lt;/h1&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $(document).on('mousemove', function(z){
                $('#a').html('X: '+z.clientX+' Y: '+z.clientY);
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Input Form Events</h3>
          <pre><code>&lt;body&gt;
    &lt;input type="text"&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('input').focus(function(){
                $(this).css('background','pink');
            });
            $('input').blur(function(){
                $(this).css('background','yellow');
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Get User Input</h3>
          <pre><code>&lt;body&gt;
    &lt;input type="text"&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('input').keyup(function(x){
                console.log(x.target.value);
            });
            //try too: .keydown
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Select Form Events</h3>
          <pre><code>&lt;body&gt;
    &lt;select id="sex"&gt;
        &lt;option value="Aku_Pria"&gt;Laki-laki&lt;/option&gt;
        &lt;option value="Aku_Wanita"&gt;Perempuan&lt;/option&gt;
    &lt;/select&gt;
    &lt;script&gt;
        $(document).ready(function(){
            $('select#sex').change(function(pilih){
                alert(pilih.target.value);
            });
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Full Form Events</h3>
          <pre><code>&lt;body&gt;
    &lt;form id="formulir"&gt;
        &lt;p&gt;&lt;input type="text" id="nama"&gt;&lt;/p&gt;
        &lt;p&gt;&lt;input type="number" id="usia"&gt;&lt;/p&gt;
        &lt;p&gt;&lt;select id="sex"&gt;
            &lt;option value="pria"&gt;Laki-laki&lt;/option&gt;
            &lt;option value="wanita"&gt;Perempuan&lt;/option&gt;
        &lt;/select&gt;&lt;/p&gt;
        &lt;p&gt;&lt;input type="submit"&gt;&lt;/p&gt;
    &lt;/form&gt;
    &lt;script&gt;
        $('#formulir').submit(function(x){
            x.preventDefault();
            console.log('Formulir terisi!');
        });
    &lt;/script&gt;
&lt;/body&gt;</code></pre>

          <h3>Get User Form Input</h3>
          <pre><code>&lt;script&gt;
    $('#formulir').submit(function(x){
        x.preventDefault();
        var nama = $('input#nama').val();
        var usia = $('input#usia').val();
        var sex = $('select#sex').val();
        console.log(nama+usia+sex);
    });
&lt;/script&gt;</code></pre>
        `
      }
    ]
  },
  {
    id: "css-advanced",
    title: "CSS Advanced",
    description: "Learn CSS Layouting, Grid, and advanced techniques",
    icon: "Server",
    color: "from-green-500 to-teal-600",
    modules: [
      {
        id: "css-variables",
        title: "CSS Variables & Selectors",
        content: `
          <h3>CSS Variables</h3>
          <p>CSS variables (also called custom properties) allow you to store CSS values and reuse them throughout your stylesheet. This improves maintainability and consistency.</p>
          
          <h4>Syntax</h4>
          <pre><code>:root {
  --merah: red;
  --kuning: orange;
  --hijau: greenyellow;
}

h1 { color: var(--merah); }
h2 { color: var(--kuning); }
h3 { color: var(--hijau); }</code></pre>

          <h4>Example HTML</h4>
          <pre><code>&lt;h1&gt;Halo semuanya, apa kabar?&lt;/h1&gt;
&lt;h2&gt;Halo semuanya, apa kabar?&lt;/h2&gt;
&lt;h3&gt;Halo semuanya, apa kabar?&lt;/h3&gt;</code></pre>

          <h3>Grouping Selectors</h3>
          <p>You can apply the same styles to multiple HTML elements by separating their selectors with commas.</p>
          <pre><code>h1, h2, p {
  color: blueviolet;
  font-family: Impact;
}</code></pre>

          <h4>Example HTML</h4>
          <pre><code>&lt;h1&gt;Contoh Grouping&lt;/h1&gt;
&lt;h2&gt;Tiga elemen,&lt;/h2&gt;
&lt;p&gt;Satu style.&lt;/p&gt;</code></pre>

          <h3>Descendant Selector</h3>
          <p>The descendant selector targets elements nested within other elements. The space separates the ancestor and descendant selectors.</p>
          <pre><code>main h2 {
  color: red;
  font-family: Impact;
}

header h2, footer h2 {
  color: green;
  font-family: Arial;
}</code></pre>

          <h4>Example HTML</h4>
          <pre><code>&lt;header&gt;&lt;h2&gt;Ini header&lt;/h2&gt;&lt;/header&gt;
&lt;main&gt;&lt;h2&gt;Ini konten&lt;/h2&gt;&lt;/main&gt;
&lt;footer&gt;&lt;h2&gt;Ini footer&lt;/h2&gt;&lt;/footer&gt;</code></pre>
        `
      },
      {
        id: "css-advanced-selectors",
        title: "Advanced CSS Selectors",
        content: `
          <h3>Child Selector</h3>
          <p>The child selector (>) targets only the direct children of a parent element, not all descendants.</p>
          <pre><code>main > p {
  color: red;
  font-family: Impact;
  font-size: 30px;
}

main > div > p {
  color: red;
  font-family: Impact;
  font-size: 30px;
}</code></pre>

          <h4>Example HTML</h4>
          <pre><code>&lt;main&gt;
  &lt;p&gt;di dalam main&lt;/p&gt;
  &lt;div&gt;
    &lt;p&gt;dalam div dalam main&lt;/p&gt;
  &lt;/div&gt;
&lt;/main&gt;</code></pre>

          <h3>Adjacent Sibling Selector</h3>
          <p>The adjacent sibling selector (+) selects an element that immediately follows another element.</p>
          <pre><code>h1 + p { /* Styles the paragraph immediately after h1 */
  color: red;
  font-family: Impact;
  font-size: 30px;
}

h1 + p + p { /* Styles the second paragraph after h1 */
  color: red;
  font-family: Impact;
  font-size: 30px;
}</code></pre>

          <h4>Example HTML</h4>
          <pre><code>&lt;h1&gt;Ini header&lt;/h1&gt;
&lt;p&gt;Ini paragraf 1&lt;/p&gt;
&lt;p&gt;Ini paragraf 2&lt;/p&gt;
&lt;p&gt;Ini paragraf 3&lt;/p&gt;</code></pre>

          <h3>Pseudo-classes</h3>
          <p>Pseudo-classes style elements based on their state (e.g., :hover, :active, :visited).</p>
          
          <h4>Links</h4>
          <pre><code>a:visited { color: purple; }
a:link { color: red; }</code></pre>

          <h4>Hover</h4>
          <pre><code>h1 {
  text-align: center;
  color: purple;
}
h1:hover {
  color: white;
  background-color: purple;
}</code></pre>

          <h4>Focus</h4>
          <pre><code>input:focus { background-color: lightgreen; }</code></pre>

          <h4>Active</h4>
          <pre><code>input:active { background-color: lightgreen; }</code></pre>
        `
      },
      {
        id: "css-pseudo-elements",
        title: "Pseudo-elements & Positioning",
        content: `
          <h3>Pseudo-elements</h3>
          <p>Pseudo-elements style parts of an element (e.g., ::first-letter, ::first-line).</p>

          <h4>Child Pseudo-elements</h4>
          <p>These style elements based on their position among siblings.</p>
          <pre><code>h2:first-child { background-color: red; }
h2:last-child { background-color: green; }
h2:nth-child(2) { background-color: yellow; }
h2:nth-child(odd) { background-color: yellow; }
h2:nth-child(even) { background-color: red; }
h2:nth-of-type(1) { background-color: red; }
h2:nth-of-type(2) { background-color: green; }
h2:nth-of-type(3) { background-color: yellow; }
h2:nth-of-type(odd) { background-color: yellow; }
h2:nth-of-type(even) { background-color: red; }</code></pre>

          <h4>First Letter & Line</h4>
          <pre><code>p::first-letter { font-size: 100px; }
p::first-line { color: red; font-size: 50px; }</code></pre>

          <h3>Positioning</h3>
          <p>The position property controls element placement:</p>
          <ul>
            <li><strong>static:</strong> Default. Element is positioned according to normal flow.</li>
            <li><strong>relative:</strong> Element is positioned relative to its normal position.</li>
            <li><strong>absolute:</strong> Element is positioned relative to its nearest positioned ancestor.</li>
            <li><strong>fixed:</strong> Element is positioned relative to the viewport.</li>
          </ul>

          <h4>Example</h4>
          <pre><code>.relative-box {
  position: relative;
  top: 20px;
  left: 30px;
}

.absolute-box {
  position: absolute;
  top: 50px;
  right: 20px;
}

.fixed-box {
  position: fixed;
  bottom: 0;
  right: 0;
}</code></pre>

          <h3>Float & Clear</h3>
          <p>float moves an element to the left or right, allowing text to wrap around it. clear prevents elements from floating alongside floated elements.</p>
          <pre><code>.pic { float: right; }
.text { clear: both; }</code></pre>
        `
      },
      {
        id: "css-layout-techniques",
        title: "CSS Layout Techniques",
        content: `
          <h3>Columns</h3>
          <p>The column-count, column-gap, and column-rule properties create multi-column layouts.</p>
          <pre><code>.kolom {
  column-count: 3;
  column-gap: 50px;
  column-rule: 20px double red;
}</code></pre>

          <h3>Importing Stylesheets</h3>
          <p>The @import rule imports external stylesheets into your current stylesheet.</p>
          <pre><code>@import url('1.css');</code></pre>

          <h3>Media Queries</h3>
          <p>Media queries allow you to apply different styles based on the device's characteristics (screen size, print media, etc.).</p>
          
          <h4>Print Media</h4>
          <pre><code>@media print {
  body { font-size: 1250%; }
}</code></pre>

          <h4>Screen Size</h4>
          <pre><code>@media screen and (min-width: 600px) { 
  body { background-color: blue; } 
}
@media screen and (max-width: 600px) { 
  body { background-color: red; } 
}
@media screen and (min-width: 900px) { 
  body { background-color: greenyellow; } 
}</code></pre>

          <h3>Transitions</h3>
          <p>Transitions smoothly animate changes to CSS properties.</p>
          <pre><code>body {
  transition: 1s; /* 1-second transition for all properties */
  height: 500px;
  background-color: yellow;
}
body:hover { background-color: black; }

.box {
  transition: height 1s; /* 1-second transition for height property */
  height: 100px;
  width: 200px;
  background-color: red;
}
.box:hover { height: 200px; background-color: blue; }

.box {
  transition: height 1s 2000ms; /* 1-second transition with 2-second delay */
  height: 100px;
  width: 200px;
  background-color: red;
}
.box:hover { height: 200px; background-color: blue; }</code></pre>
        `
      },
      {
        id: "css-grid",
        title: "CSS Grid Layout",
        content: `
          <h3>Basic Grid Layout</h3>
          <p>CSS Grid provides a powerful way to create two-dimensional layouts.</p>
          
          <h4>HTML Structure</h4>
          <pre><code>&lt;body&gt;
&lt;div id="content"&gt;
  &lt;div class="kotak1"&gt;1&lt;/div&gt;
  &lt;div class="kotak2"&gt;2&lt;/div&gt;
  &lt;div class="kotak3"&gt;3&lt;/div&gt;
  &lt;div class="kotak4"&gt;4&lt;/div&gt;
  &lt;div class="kotak5"&gt;5&lt;/div&gt;
  &lt;div class="kotak6"&gt;6&lt;/div&gt;
  &lt;div class="kotak7"&gt;7&lt;/div&gt;
  &lt;div class="kotak8"&gt;8&lt;/div&gt;
  &lt;div class="kotak9"&gt;9&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;</code></pre>

          <h4>CSS Styling</h4>
          <pre><code>body {
  color: white;
  text-align: center;
}
#content {
  max-width: 960px;
  margin: 0 auto;
  display: grid;
}
#content div {
  background: lightskyblue;
  padding: 30px;
}
#content div:nth-child(even) {
  background: grey;
}</code></pre>

          <h3>Template Columns</h3>
          <p>Define column sizes using different methods:</p>
          
          <h4>Percentage-based</h4>
          <pre><code>grid-template-columns: 30% 30% 30%;</code></pre>

          <h4>Fractions</h4>
          <pre><code>grid-template-columns: 1fr 2fr 1fr;</code></pre>

          <h4>Repeat</h4>
          <pre><code>grid-template-columns: repeat(3, 1fr);</code></pre>

          <h3>Template Rows</h3>
          <p>Define row sizes using different methods:</p>
          
          <h4>Fixed Pixel Values</h4>
          <pre><code>grid-template-rows: 100px 200px 300px;</code></pre>

          <h4>Fractions</h4>
          <pre><code>grid-template-rows: 1fr 2fr 1fr;</code></pre>

          <h4>Repeat</h4>
          <pre><code>grid-template-rows: repeat(3, 1fr);</code></pre>

          <h3>Auto Rows</h3>
          <p>Use grid-auto-rows for automatic row sizing:</p>
          
          <h4>Fixed Height</h4>
          <pre><code>grid-auto-rows: 150px;</code></pre>

          <h4>MinMax</h4>
          <pre><code>grid-auto-rows: minmax(100px, auto);</code></pre>
        `
      },
      {
        id: "css-grid-advanced",
        title: "Advanced CSS Grid",
        content: `
          <h3>Grid Gap</h3>
          <p>Add spacing between grid items:</p>
          <pre><code>grid-column-gap: 20px;
grid-row-gap: 10px;
/*or grid-gap: 20px; (for equal gap in both directions)*/</code></pre>

          <h3>Grid Lines</h3>
          <p>Grid lines are the dividing lines that make up the structure of the grid. They can be horizontal or vertical.</p>

          <h3>Grid Column</h3>
          <p>Span grid items across multiple columns:</p>
          <pre><code>.kotak1 {
  grid-column-start: 1;
  grid-column-end: 4;
}
.kotak2 {
  grid-column: 4 / 10;
}</code></pre>

          <h3>Grid Row</h3>
          <p>Span grid items across multiple rows:</p>
          <pre><code>.kotak3 {
  grid-column: 1 / 5;
  grid-row: 2 / 4;
}</code></pre>

          <h3>Nested Grids</h3>
          <p>Create grids within grids:</p>
          <pre><code>.kotak4 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
.kotak4 p {
  border: 2px solid white;
  padding: 20px;
}</code></pre>

          <h4>HTML for Nested Grid</h4>
          <pre><code>&lt;div class="kotak4"&gt;
  &lt;p&gt;A&lt;/p&gt;&lt;p&gt;B&lt;/p&gt;&lt;p&gt;C&lt;/p&gt;&lt;p&gt;D&lt;/p&gt;
&lt;/div&gt;</code></pre>

          <h3>Align Items</h3>
          <p>Control vertical alignment of grid items:</p>
          <pre><code>align-items: start; /*or stretch, end, center*/</code></pre>

          <h3>Justify Items</h3>
          <p>Control horizontal alignment of grid items:</p>
          <pre><code>justify-items: start; /*or stretch, end, center*/</code></pre>

          <h3>Align & Justify Self</h3>
          <p>Control individual item alignment:</p>
          <pre><code>.kotak1 {
  align-self: stretch;
  justify-self: stretch;
  /*or start, end, center*/
}</code></pre>

          <h3>Grid Areas</h3>
          <p>Define grid areas using named areas:</p>
          <pre><code>grid-template-areas:
"area1 area1 area1"
". area2 area2";

.kotak1 { grid-area: area1; }
.kotak2 { grid-area: area2; }</code></pre>

          <h3>Responsive Grids</h3>
          <p>Create responsive grid layouts:</p>
          <pre><code>@media screen and (min-width: 900px) {
  #content {
    /* Grid properties for larger screens */
  }
}</code></pre>
        `
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Development - Spring Boot",
    description: "Learn Java, Spring Boot, REST API, and backend development",
    icon: "Database",
    color: "from-orange-500 to-red-600",
    modules: [
      {
        id: "java-fundamentals",
        title: "Java Fundamentals",
        content: `
          <h3>Introduction to Java</h3>
          <p>Java adalah bahasa pemrograman berorientasi objek yang powerful dan populer untuk pengembangan backend. Java berjalan di JVM (Java Virtual Machine) sehingga dapat berjalan di berbagai platform.</p>
          
          <h4>Setup Java Development</h4>
          <pre><code>// 1. Install Java JDK 17 atau lebih baru
// 2. Install IDE (IntelliJ IDEA, Eclipse, atau VS Code)
// 3. Verify installation
java --version
javac --version</code></pre>

          <h4>Basic Java Syntax</h4>
          <pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Variables
        String name = "Codean Bootcamp";
        int age = 25;
        boolean isActive = true;
        
        // Arrays
        String[] languages = {"Java", "Spring", "HTML", "CSS"};
        
        // Loops
        for(String lang : languages) {
            System.out.println("Learning: " + lang);
        }
    }
}</code></pre>

          <h4>Object-Oriented Programming</h4>
          <pre><code>// Class definition
public class Student {
    // Private fields (Encapsulation)
    private String name;
    private int age;
    private String course;
    
    // Constructor
    public Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    
    // Getters and Setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    // Methods
    public void study() {
        System.out.println(name + " is studying " + course);
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age + ", Course: " + course);
    }
}</code></pre>

          <h4>Inheritance & Polymorphism</h4>
          <pre><code>// Base class
public abstract class Person {
    protected String name;
    protected int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public abstract void introduce();
}

// Derived class
public class Student extends Person {
    private String course;
    
    public Student(String name, int age, String course) {
        super(name, age);
        this.course = course;
    }
    
    @Override
    public void introduce() {
        System.out.println("Hi, I'm " + name + ", studying " + course);
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Student student = new Student("John", 22, "Spring Boot");
        student.introduce();
    }
}</code></pre>
        `
      },
      {
        id: "spring-boot-intro",
        title: "Spring Boot Introduction",
        content: `
          <h3>Introduction to Spring Boot</h3>
          <p>Spring Boot adalah framework Java yang mempermudah pembuatan aplikasi Spring. Dengan konfigurasi minimal dan auto-configuration, Anda bisa membuat aplikasi production-ready dengan cepat.</p>
          
          <h4>Key Features Spring Boot</h4>
          <ul>
            <li><strong>Auto Configuration</strong>: Konfigurasi otomatis berdasarkan dependencies</li>
            <li><strong>Standalone</strong>: Tidak memerlukan server eksternal</li>
            <li><strong>Production Ready</strong>: Built-in monitoring dan health checks</li>
            <li><strong>No XML Configuration</strong>: Menggunakan annotations dan Java config</li>
          </ul>

          <h4>Creating Spring Boot Project</h4>
          <p>Gunakan Spring Initializr (https://start.spring.io) atau IDE untuk membuat project baru:</p>
          <pre><code>// Maven Dependencies (pom.xml)
&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;mysql&lt;/groupId&gt;
        &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;</code></pre>

          <h4>Main Application Class</h4>
          <pre><code>package com.codean.bootcamp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CodeanBootcampApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(CodeanBootcampApplication.class, args);
        System.out.println("🚀 Codean Bootcamp API Started!");
    }
}</code></pre>

          <h4>Application Properties</h4>
          <pre><code># application.properties
server.port=8080
spring.application.name=codean-bootcamp

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/codean_bootcamp
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.show-sql=true</code></pre>

          <h4>First REST Controller</h4>
          <pre><code>package com.codean.bootcamp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    
    @GetMapping("/")
    public String home() {
        return "Welcome to Codean Bootcamp API!";
    }
    
    @GetMapping("/health")
    public String health() {
        return "API is running smoothly! ✅";
    }
}</code></pre>
        `
      },
      {
        id: "spring-boot-rest-api",
        title: "REST API Development",
        content: `
          <h3>Building REST APIs with Spring Boot</h3>
          <p>REST (Representational State Transfer) adalah arsitektur untuk membangun web services. Spring Boot mempermudah pembuatan REST API dengan annotations yang powerful.</p>
          
          <h4>HTTP Methods & Annotations</h4>
          <ul>
            <li><strong>@GetMapping</strong>: Untuk membaca data (HTTP GET)</li>
            <li><strong>@PostMapping</strong>: Untuk membuat data baru (HTTP POST)</li>
            <li><strong>@PutMapping</strong>: Untuk update data (HTTP PUT)</li>
            <li><strong>@DeleteMapping</strong>: Untuk menghapus data (HTTP DELETE)</li>
          </ul>

          <h4>Student Entity</h4>
          <pre><code>package com.codean.bootcamp.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "students")
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    private String course;
    private int age;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    // Constructors
    public Student() {}
    
    public Student(String name, String email, String course, int age) {
        this.name = name;
        this.email = email;
        this.course = course;
        this.age = age;
        this.createdAt = LocalDateTime.now();
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
    
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}</code></pre>

          <h4>Student Repository</h4>
          <pre><code>package com.codean.bootcamp.repository;

import com.codean.bootcamp.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository&lt;Student, Long&gt; {
    
    // Find by email
    Optional&lt;Student&gt; findByEmail(String email);
    
    // Find by course
    List&lt;Student&gt; findByCourse(String course);
    
    // Find by age range
    List&lt;Student&gt; findByAgeBetween(int minAge, int maxAge);
    
    // Custom query
    @Query("SELECT s FROM Student s WHERE s.name LIKE %:name%")
    List&lt;Student&gt; findByNameContaining(String name);
    
    // Count by course
    long countByCourse(String course);
}</code></pre>

          <h4>Student Controller - Complete CRUD</h4>
          <pre><code>package com.codean.bootcamp.controller;

import com.codean.bootcamp.entity.Student;
import com.codean.bootcamp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000") // For React frontend
public class StudentController {
    
    @Autowired
    private StudentRepository studentRepository;
    
    // GET all students
    @GetMapping
    public List&lt;Student&gt; getAllStudents() {
        return studentRepository.findAll();
    }
    
    // GET student by ID
    @GetMapping("/{id}")
    public ResponseEntity&lt;Student&gt; getStudentById(@PathVariable Long id) {
        Optional&lt;Student&gt; student = studentRepository.findById(id);
        
        if (student.isPresent()) {
            return ResponseEntity.ok(student.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    // POST create new student  
    @PostMapping
    public ResponseEntity&lt;Student&gt; createStudent(@RequestBody Student student) {
        try {
            Student savedStudent = studentRepository.save(student);
            return ResponseEntity.ok(savedStudent);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    // PUT update student
    @PutMapping("/{id}")
    public ResponseEntity&lt;Student&gt; updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
        Optional&lt;Student&gt; optionalStudent = studentRepository.findById(id);
        
        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();
            student.setName(studentDetails.getName());
            student.setEmail(studentDetails.getEmail());
            student.setCourse(studentDetails.getCourse());
            student.setAge(studentDetails.getAge());
            
            Student updatedStudent = studentRepository.save(student);
            return ResponseEntity.ok(updatedStudent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    // DELETE student
    @DeleteMapping("/{id}")
    public ResponseEntity&lt;?&gt; deleteStudent(@PathVariable Long id) {
        Optional&lt;Student&gt; student = studentRepository.findById(id);
        
        if (student.isPresent()) {
            studentRepository.delete(student.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    // GET students by course
    @GetMapping("/course/{course}")
    public List&lt;Student&gt; getStudentsByCourse(@PathVariable String course) {
        return studentRepository.findByCourse(course);
    }
}</code></pre>
        `
      },
      {
        id: "spring-boot-database",
        title: "Database Integration & JPA",
        content: `
          <h3>Database Integration dengan Spring Data JPA</h3>
          <p>Spring Data JPA mempermudah interaksi dengan database relational. Anda tidak perlu menulis SQL query manual, cukup menggunakan method names atau annotations.</p>
          
          <h4>Database Configuration</h4>
          <pre><code># MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/codean_bootcamp?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# PostgreSQL Configuration (Alternative)
# spring.datasource.url=jdbc:postgresql://localhost:5432/codean_bootcamp
# spring.datasource.username=postgres
# spring.datasource.password=yourpassword
# spring.datasource.driver-class-name=org.postgresql.Driver

# JPA Settings
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect</code></pre>

          <h4>Advanced Entity Relationships</h4>
          <pre><code>// Course Entity
@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String description;
    private int duration; // in weeks
    
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List&lt;Student&gt; students = new ArrayList&lt;&gt;();
    
    // Constructors, getters, setters...
}

// Updated Student Entity with Course relationship
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    private int age;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "course_id")
    private Course course;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List&lt;Enrollment&gt; enrollments = new ArrayList&lt;&gt;();
    
    // Constructors, getters, setters...
}</code></pre>

          <h4>Service Layer Implementation</h4>
          <pre><code>package com.codean.bootcamp.service;

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
    
    public List&lt;Student&gt; getAllStudents() {
        return studentRepository.findAll();
    }
    
    public Optional&lt;Student&gt; getStudentById(Long id) {
        return studentRepository.findById(id);
    }
    
    public Student createStudent(Student student) {
        // Business logic validation
        if (studentRepository.findByEmail(student.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        
        return studentRepository.save(student);
    }
    
    public Student updateStudent(Long id, Student studentDetails) {
        Student student = studentRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Student not found"));
        
        student.setName(studentDetails.getName());
        student.setEmail(studentDetails.getEmail());
        student.setCourse(studentDetails.getCourse());
        student.setAge(studentDetails.getAge());
        
        return studentRepository.save(student);
    }
    
    public void deleteStudent(Long id) {
        Student student = studentRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Student not found"));
        
        studentRepository.delete(student);
    }
    
    public List&lt;Student&gt; getStudentsByCourse(String course) {
        return studentRepository.findByCourse(course);
    }
    
    public List&lt;Student&gt; searchStudentsByName(String name) {
        return studentRepository.findByNameContaining(name);
    }
}</code></pre>

          <h4>Exception Handling</h4>
          <pre><code>package com.codean.bootcamp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity&lt;Map&lt;String, Object&gt;&gt; handleRuntimeException(RuntimeException ex) {
        Map&lt;String, Object&gt; response = new HashMap&lt;&gt;();
        response.put("timestamp", LocalDateTime.now());
        response.put("status", HttpStatus.BAD_REQUEST.value());
        response.put("error", "Bad Request");
        response.put("message", ex.getMessage());
        
        return ResponseEntity.badRequest().body(response);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity&lt;Map&lt;String, Object&gt;&gt; handleGenericException(Exception ex) {
        Map&lt;String, Object&gt; response = new HashMap&lt;&gt;();
        response.put("timestamp", LocalDateTime.now());
        response.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
        response.put("error", "Internal Server Error");
        response.put("message", "An unexpected error occurred");
        
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}</code></pre>

          <h4>Testing with Repository</h4>
          <pre><code>// Test dengan Postman atau curl:

// GET all students
curl -X GET http://localhost:8080/api/students

// POST create student
curl -X POST http://localhost:8080/api/students \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@codean.com",
    "course": "Spring Boot",
    "age": 25
  }'

// GET student by ID
curl -X GET http://localhost:8080/api/students/1

// PUT update student
curl -X PUT http://localhost:8080/api/students/1 \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Smith",
    "email": "johnsmith@codean.com",
    "course": "Full Stack",
    "age": 26
  }'

// DELETE student
curl -X DELETE http://localhost:8080/api/students/1</code></pre>
        `
      },
      {
        id: "spring-security",
        title: "Spring Security & Authentication",
        content: `
          <h3>Spring Security Implementation</h3>
          <p>Spring Security adalah framework untuk authentication dan authorization di aplikasi Spring. Sangat penting untuk mengamankan API dari akses yang tidak sah.</p>
          
          <h4>Add Security Dependencies</h4>
          <pre><code>&lt;!-- Add to pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
    &lt;artifactId&gt;jjwt-api&lt;/artifactId&gt;
    &lt;version&gt;0.11.5&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
    &lt;artifactId&gt;jjwt-impl&lt;/artifactId&gt;
    &lt;version&gt;0.11.5&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

          <h4>User Entity</h4>
          <pre><code>package com.codean.bootcamp.entity;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
public class User implements UserDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true)
    private String username;
    
    private String password;
    private String email;
    private String fullName;
    
    @Enumerated(EnumType.STRING)
    private Role role;
    
    private boolean enabled = true;
    
    // Constructors
    public User() {}
    
    public User(String username, String password, String email, String fullName, Role role) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.fullName = fullName;
        this.role = role;
    }
    
    // UserDetails implementation
    @Override
    public Collection&lt;? extends GrantedAuthority&gt; getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }
    
    @Override
    public boolean isAccountNonExpired() { return true; }
    
    @Override
    public boolean isAccountNonLocked() { return true; }
    
    @Override
    public boolean isCredentialsNonExpired() { return true; }
    
    @Override
    public boolean isEnabled() { return enabled; }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    
    // ... other getters and setters
}

enum Role {
    STUDENT, INSTRUCTOR, ADMIN
}</code></pre>

          <h4>JWT Utility Class</h4>
          <pre><code>package com.codean.bootcamp.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {
    
    private final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    private final int JWT_EXPIRATION = 86400000; // 24 hours
    
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
    
    public &lt;T&gt; T extractClaim(String token, Function&lt;Claims, T&gt; claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
    
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
    
    public String generateToken(String username) {
        Map&lt;String, Object&gt; claims = new HashMap&lt;&gt;();
        return createToken(claims, username);
    }
    
    private String createToken(Map&lt;String, Object&gt; claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION))
                .signWith(SECRET_KEY)
                .compact();
    }
    
    public Boolean validateToken(String token, String username) {
        final String extractedUsername = extractUsername(token);
        return (extractedUsername.equals(username) && !isTokenExpired(token));
    }
}</code></pre>

          <h4>Authentication Controller</h4>
          <pre><code>package com.codean.bootcamp.controller;

import com.codean.bootcamp.entity.User;
import com.codean.bootcamp.service.UserService;
import com.codean.bootcamp.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @PostMapping("/login")
    public ResponseEntity&lt;Map&lt;String, Object&gt;&gt; login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    loginRequest.getUsername(),
                    loginRequest.getPassword()
                )
            );
            
            String token = jwtUtil.generateToken(loginRequest.getUsername());
            User user = userService.findByUsername(loginRequest.getUsername());
            
            Map&lt;String, Object&gt; response = new HashMap&lt;&gt;();
            response.put("token", token);
            response.put("user", user);
            response.put("message", "Login successful");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            Map&lt;String, Object&gt; errorResponse = new HashMap&lt;&gt;();
            errorResponse.put("error", "Invalid credentials");
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    @PostMapping("/register")
    public ResponseEntity&lt;Map&lt;String, String&gt;&gt; register(@RequestBody RegisterRequest registerRequest) {
        try {
            User user = new User();
            user.setUsername(registerRequest.getUsername());
            user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
            user.setEmail(registerRequest.getEmail());
            user.setFullName(registerRequest.getFullName());
            user.setRole(Role.STUDENT);
            
            userService.save(user);
            
            Map&lt;String, String&gt; response = new HashMap&lt;&gt;();
            response.put("message", "User registered successfully");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            Map&lt;String, String&gt; errorResponse = new HashMap&lt;&gt;();
            errorResponse.put("error", "Registration failed: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
}

// Request DTOs
class LoginRequest {
    private String username;
    private String password;
    
    // getters and setters
}

class RegisterRequest {
    private String username;
    private String password;
    private String email;
    private String fullName;
    
    // getters and setters
}</code></pre>

          <h4>Security Configuration</h4>
          <pre><code>package com.codean.bootcamp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**", "/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            );
            
        return http.build();
    }
}</code></pre>
        `
      },
      {
        id: "spring-testing",
        title: "Testing Spring Boot Applications",
        content: `
          <h3>Testing in Spring Boot</h3>
          <p>Testing adalah bagian penting dari development. Spring Boot menyediakan tools yang comprehensive untuk unit testing, integration testing, dan testing REST APIs.</p>
          
          <h4>Test Dependencies</h4>
          <pre><code>&lt;!-- Already included in spring-boot-starter-test --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;

&lt;!-- For testing with TestContainers (optional) --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.testcontainers&lt;/groupId&gt;
    &lt;artifactId&gt;mysql&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;</code></pre>

          <h4>Unit Testing - Service Layer</h4>
          <pre><code>package com.codean.bootcamp.service;

import com.codean.bootcamp.entity.Student;
import com.codean.bootcamp.repository.StudentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class StudentServiceTest {
    
    @Mock
    private StudentRepository studentRepository;
    
    @InjectMocks
    private StudentService studentService;
    
    private Student student;
    
    @BeforeEach
    void setUp() {
        student = new Student();
        student.setId(1L);
        student.setName("John Doe");
        student.setEmail("john@codean.com");
        student.setCourse("Spring Boot");
        student.setAge(25);
    }
    
    @Test
    void testGetAllStudents() {
        // Given
        List&lt;Student&gt; students = Arrays.asList(student);
        when(studentRepository.findAll()).thenReturn(students);
        
        // When
        List&lt;Student&gt; result = studentService.getAllStudents();
        
        // Then
        assertEquals(1, result.size());
        assertEquals("John Doe", result.get(0).getName());
        verify(studentRepository, times(1)).findAll();
    }
    
    @Test
    void testGetStudentById() {
        // Given
        when(studentRepository.findById(1L)).thenReturn(Optional.of(student));
        
        // When
        Optional&lt;Student&gt; result = studentService.getStudentById(1L);
        
        // Then
        assertTrue(result.isPresent());
        assertEquals("John Doe", result.get().getName());
        verify(studentRepository, times(1)).findById(1L);
    }
    
    @Test
    void testCreateStudent() {
        // Given
        when(studentRepository.findByEmail(student.getEmail())).thenReturn(Optional.empty());
        when(studentRepository.save(any(Student.class))).thenReturn(student);
        
        // When
        Student result = studentService.createStudent(student);
        
        // Then
        assertNotNull(result);
        assertEquals("John Doe", result.getName());
        verify(studentRepository, times(1)).save(student);
    }
    
    @Test
    void testCreateStudentWithExistingEmail() {
        // Given
        when(studentRepository.findByEmail(student.getEmail())).thenReturn(Optional.of(student));
        
        // When & Then
        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            studentService.createStudent(student);
        });
        
        assertEquals("Email already exists", exception.getMessage());
        verify(studentRepository, never()).save(any(Student.class));
    }
}</code></pre>

          <h4>Integration Testing - Repository Layer</h4>
          <pre><code>package com.codean.bootcamp.repository;

import com.codean.bootcamp.entity.Student;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class StudentRepositoryTest {
    
    @Autowired
    private TestEntityManager entityManager;
    
    @Autowired
    private StudentRepository studentRepository;
    
    private Student student;
    
    @BeforeEach
    void setUp() {
        student = new Student();
        student.setName("John Doe");
        student.setEmail("john@codean.com");
        student.setCourse("Spring Boot");
        student.setAge(25);
    }
    
    @Test
    void testFindByEmail() {
        // Given
        entityManager.persistAndFlush(student);
        
        // When
        Optional&lt;Student&gt; found = studentRepository.findByEmail("john@codean.com");
        
        // Then
        assertTrue(found.isPresent());
        assertEquals("John Doe", found.get().getName());
    }
    
    @Test
    void testFindByCourse() {
        // Given
        Student student2 = new Student();
        student2.setName("Jane Doe");
        student2.setEmail("jane@codean.com");
        student2.setCourse("Spring Boot");
        student2.setAge(23);
        
        entityManager.persistAndFlush(student);
        entityManager.persistAndFlush(student2);
        
        // When
        List&lt;Student&gt; students = studentRepository.findByCourse("Spring Boot");
        
        // Then
        assertEquals(2, students.size());
    }
    
    @Test
    void testFindByAgeBetween() {
        // Given
        entityManager.persistAndFlush(student);
        
        // When
        List&lt;Student&gt; students = studentRepository.findByAgeBetween(20, 30);
        
        // Then
        assertEquals(1, students.size());
        assertEquals("John Doe", students.get(0).getName());
    }
    
    @Test
    void testCountByCourse() {
        // Given
        entityManager.persistAndFlush(student);
        
        // When
        long count = studentRepository.countByCourse("Spring Boot");
        
        // Then
        assertEquals(1, count);
    }
}</code></pre>

          <h4>Web Layer Testing - Controller</h4>
          <pre><code>package com.codean.bootcamp.controller;

import com.codean.bootcamp.entity.Student;
import com.codean.bootcamp.service.StudentService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(StudentController.class)
class StudentControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private StudentService studentService;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    private Student student;
    
    @BeforeEach
    void setUp() {
        student = new Student();
        student.setId(1L);
        student.setName("John Doe");
        student.setEmail("john@codean.com");
        student.setCourse("Spring Boot");
        student.setAge(25);
    }
    
    @Test
    void testGetAllStudents() throws Exception {
        // Given
        when(studentService.getAllStudents()).thenReturn(Arrays.asList(student));
        
        // When & Then
        mockMvc.perform(get("/api/students"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("John Doe"))
                .andExpect(jsonPath("$[0].email").value("john@codean.com"));
    }
    
    @Test
    void testGetStudentById() throws Exception {
        // Given
        when(studentService.getStudentById(1L)).thenReturn(Optional.of(student));
        
        // When & Then
        mockMvc.perform(get("/api/students/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.email").value("john@codean.com"));
    }
    
    @Test
    void testCreateStudent() throws Exception {
        // Given
        when(studentService.createStudent(any(Student.class))).thenReturn(student);
        
        // When & Then
        mockMvc.perform(post("/api/students")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(student)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.email").value("john@codean.com"));
    }
    
    @Test
    void testUpdateStudent() throws Exception {
        // Given
        Student updatedStudent = new Student();
        updatedStudent.setId(1L);
        updatedStudent.setName("John Smith");
        updatedStudent.setEmail("johnsmith@codean.com");
        updatedStudent.setCourse("Full Stack");
        updatedStudent.setAge(26);
        
        when(studentService.updateStudent(eq(1L), any(Student.class))).thenReturn(updatedStudent);
        
        // When & Then
        mockMvc.perform(put("/api/students/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedStudent)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("John Smith"))
                .andExpect(jsonPath("$.email").value("johnsmith@codean.com"));
    }
    
    @Test
    void testDeleteStudent() throws Exception {
        // When & Then
        mockMvc.perform(delete("/api/students/1"))
                .andExpect(status().isOk());
    }
}</code></pre>

          <h4>Running Tests</h4>
          <pre><code># Run all tests
mvn test

# Run specific test class
mvn test -Dtest=StudentServiceTest

# Run tests with coverage
mvn jacoco:prepare-agent test jacoco:report

# Run integration tests only
mvn test -Dgroups=integration

# Run tests and generate report
mvn clean test site</code></pre>
        `
      }
    ]
  }
];

export const mockProgress = {
  "html-basics": { completed: true, timeSpent: 45 },
  "html-lists-tables": { completed: true, timeSpent: 30 },
  "html-links-images": { completed: false, timeSpent: 15 },
  "html-forms": { completed: false, timeSpent: 0 },
  "html-semantic": { completed: false, timeSpent: 0 },
  "css-basics": { completed: false, timeSpent: 20 },
  "css-colors-backgrounds": { completed: false, timeSpent: 0 },
  "css-text-fonts": { completed: false, timeSpent: 0 },
  "css-box-model": { completed: false, timeSpent: 0 },
  "css-transforms": { completed: false, timeSpent: 0 },
  "jquery-basics": { completed: false, timeSpent: 0 },
  "jquery-selectors": { completed: false, timeSpent: 0 },
  "jquery-events": { completed: false, timeSpent: 0 },
  "jquery-forms": { completed: false, timeSpent: 0 },
  "java-fundamentals": { completed: false, timeSpent: 0 },
  "spring-boot-intro": { completed: false, timeSpent: 0 },
  "spring-boot-rest-api": { completed: false, timeSpent: 0 },
  "spring-boot-database": { completed: false, timeSpent: 0 },
  "spring-security": { completed: false, timeSpent: 0 },
  "spring-testing": { completed: false, timeSpent: 0 }
};