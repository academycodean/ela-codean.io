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