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