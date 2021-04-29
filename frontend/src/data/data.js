let htmlIntroContent = [
  {
    type: "code",
    title: "HTML Structure",
    codeString: `<!doctype html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>My web page</title>
  </head>

  <body>
    <h1>Learning HTML</h1>
    <p>Get to know the HTML basics.</p>
  </body>
  
</html>`,

    contentList: [
      "The <!DOCTYPE html> declaration defines that this document is an HTML5 document",
      "The <html> element is the root element of an HTML page",
      "The <head> element contains meta information about the HTML page",
      "The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)",
      "The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.",
      "The <h1> element defines a large heading",
      "The <p> element defines a paragraph",
    ],
  },
  {
    type: "code",
    title: "Simple tags",
    codeString: `<h1>Heading tag</h1>\n\n<p>Paragraph tag</p>`,
    content:
      "The most common tags used in html are the h and p tags. As specificed before the The <h1> element defines a large heading and the <p> element defines a paragraph",
    contentList: [],
  },
  {
    type: "code",
    title: "Syntax",
    codeString: `<h1> Heading tag <h1> <!-- Bad Syntax --> \n\n<h1> Heading tag </h1> <!-- Good Syntax -->`,
    content:
      "A tag is the HTML element name enclosed in angle brackets. In the image below, <h1> is the opening tag and </h1> is the closing tag.",
    contentList: [],
  },
  {
    type: "code",
    title: "Comments",
    codeString: `<h1> Heading tag </h1> <!-- My comment for heading tag --> \n\n<p> Heading tag </p> <!-- My comment for paragraph tag -->`,
    modalChallenges: `
    \n<!-- Challenges -->
    
<!--

Write a comment of your full name and date of birth

-->
    
    `,
    content:
      "HTML comments are not displayed in the browser, but they can help document your HTML source code. You can add comments to your HTML source by using the <!-- --> syntax",
    contentList: [],
  },
];

let htmlBasicsContent = [
  {
    type: "code",
    title: "Heading tags",
    codeString: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,
    modalChallenges: `
\n<!-- Challenges -->

<!--

Type in your first name with the largest heading.
Type in your sir name with the second largest heading

-->

`,
    content: `HTML headings are defined with the <h1> to <h6> tags.

    <h1> defines the most important heading. <h6> defines the least important heading.`,
    contentList: [],
  },
  {
    type: "code",
    title: "Pargraph tags",
    codeString: `<p>Hello world</p>`,
    modalChallenges: `
\n<!-- Challenges -->
    
<!--

Write a small sentance about yourself using the p tag

-->
    
    `,
    content: `The HTML <p> element defines a paragraph.

    A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.`,
    contentList: [],
  },
  {
    type: "code",
    title: "HTML styles",
    codeString: `<p>I am normal</p>
<p style="color:red;">I am red</p>
<p style="color:blue;">I am blue</p>
<p style="font-size:50px;">I am big</p>`,
    modalChallenges: `
\n<!-- Challenges -->
    
<!--

- Change a color of one of the p tags

- Change the font style of the largest p to "Times New Roman" tag using the font-family property

-->
    
    `,
    content: `The HTML style attribute is used to add styles to an element, such as color, font, size, and more.`,
    contentList: [],
  },
  {
    type: "code",
    title: "Image tags",
    codeString: `<img src="img_girl.jpg" alt="Girl in a jacket">`,
    modalChallenges: `
\n<!-- Challenges -->
    
<!--

Copy and paste a img address from google images in to the img src

-->
        
        `,
    content: `The HTML <img> tag is used to embed an image in a web page.

 The <img> tag creates a holding space for the referenced image.
    
    The <img> tag is empty, it contains attributes only, and does not have a closing tag.`,
    contentList: [
      `- src specifies the path to the image`,
      `- alt Specifies an alternate text for the image`,
    ],
  },
  {
    type: "code",
    title: "Link tags",
    codeString: `<a href="https://www.w3schools.com">Visit W3Schools.com!</a>`,
    modalChallenges: `
\n<!-- Challenges -->
    
<!--

- Copy and paste link from another website in to the src property

- Change the name of the link inside the body of the anchor tag

-->
        
        `,
    content:
      " The HTML <a> tag defines a hyperlink. It has the following syntax:",
    contentList: [
      "The most important attribute of the <a> element is the href attribute, which indicates the link's destination.",

      "The link text is the part that will be visible to the reader.",

      "Clicking on the link text, will send the reader to the specified URL address.",
    ],
  },
  {
    type: "code",
    title: "List tags",
    codeString: `<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`,
    modalChallenges: `
\n<!-- Challenges -->
    
<!--

- Make a heading called To Do List

- Type up a new To Do List using the <ul> and <li> properties

-->
        
        `,
    content: ``,
    contentList: [
      `An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.`,
      `The list items will be marked with bullets (small black circles) by default`,
    ],
  },
];
let htmlAdvancedContent = [
  {
    type: "code",
    title: "Table tags",
    codeString: `<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>`,
    modalChallenges: `
\n<!-- Challenges -->
    
<!--

- Make a new table of the current top 4 teams in the premier league

- Table must show number of games played, points won and their position for each team

Reference

- Google premier league table as reference

-->
        
        `,

    content: `The <table> tag defines an HTML table.`,
    contentList: [
      "Each table row is defined with a <tr> tag. Each table header is defined with a <th> tag. Each table data/cell is defined with a <td> tag.",
      "By default, the text in <th> elements are bold and centered.",
      "By default, the text in <td> elements are regular and left-aligned.",
    ],
    hasVideo: true,
    topic: "tables",
  },
  {
    type: "code",
    title: "HTML Forms",
    codeString: `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`,
    content: `The <form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.`,
    contentList: [
      `An <input> element can be displayed in many ways, depending on the type attribute. In the following example will be using the <input type="text">`,
    ],
  },
  {
    type: "code",
    title: "Submit HTML form",
    codeString: `<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>`,
    content: `If we want our form to work or submit we need to defines <input type="submit"> a button`,
    contentList: [
      `The form-handler is typically a file on the server with a script for processing input data.`,
      `The form-handler is specified in the form's action attribute.`,
      `Note: This is a html tool (Will not be going in to details with data bases and servers)`,
    ],
    hasVideo: true,
    topic: "forms",
  },
  {
    type: "code",
    title: "HTML JavaScript",
    codeString: `<h2>Use JavaScript to Change Text</h2>

<p>This example writes "Hello JavaScript!" into an HTML element with id="demo":</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script> `,
    content: ``,
    contentList: [
      `The HTML <script> tag is used to define a client-side script (JavaScript).`,
      `Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.`,
      `To select an HTML element, JavaScript most often uses the document.getElementById() method.`,
      `This JavaScript example writes "Hello JavaScript!" into an HTML element with id="demo"`,
      `Note: This is a html tool (Will not be going in to details of JavaScript)`,
    ],
    hasVideo: true,
    topic: "javascript",
  },
];

let videoContent = [
  {
    language: "xml",
    topic: "forms",
    codeString: `<form></form>`,
    videoLink: "https://www.youtube.com/embed/fNcJuPIZ2WE",
  },
  {
    language: "javascript",
    topic: "javascript",
    codeString: `<script></script>`,
    videoLink: "https://www.youtube.com/embed/hdI2bqOjy3c",
  },
  {
    language: "xml",
    topic: "tables",
    codeString: `<table></table>`,
    videoLink: "https://www.youtube.com/embed/6RE5vCsPOS4",
  },
];

export default {
  htmlIntroContent,
  htmlBasicsContent,
  htmlAdvancedContent,
  videoContent,
};
