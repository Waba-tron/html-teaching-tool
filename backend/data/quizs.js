import bcrypt from "bcryptjs";

const allQuestions = [
  {
    quizId: 1,
    questions: [
      {
        questionText: "What does HTML stand for?",
        answerOptions: [
          { answerText: "High Text Markup Language", isCorrect: false },
          { answerText: "Hyper Tabular Markup Language", isCorrect: false },
          { answerText: "Hyper Text Markup Language", isCorrect: true },
          { answerText: "None of these", isCorrect: false },
        ],
      },
      {
        questionText:
          "Which of the following tag is used to mark a begining of paragraph ?",
        answerOptions: [
          { answerText: "<br>", isCorrect: false },
          { answerText: "<p>", isCorrect: true },
          { answerText: "<ul>", isCorrect: false },
          { answerText: "<paragraph>", isCorrect: false },
        ],
      },
      {
        questionText: "How would you specify a comment in HTML?",
        answerOptions: [
          { answerText: "<--- --->", isCorrect: false },
          { answerText: "<!-- -->", isCorrect: true },
          { answerText: "< >", isCorrect: false },
          { answerText: "// comment", isCorrect: false },
        ],
      },
      {
        questionText: "Which of the following is the end of a h1 tag",
        answerOptions: [
          { answerText: "/h1", isCorrect: false },
          { answerText: "</h1>", isCorrect: true },
          { answerText: "<h1>", isCorrect: false },
          { answerText: "end h1 tag", isCorrect: false },
        ],
      },
      {
        questionText: "Web pages starts with which ofthe following tag?",
        answerOptions: [
          { answerText: "<html>", isCorrect: true },
          { answerText: "<body>", isCorrect: false },
          { answerText: "<title>", isCorrect: false },
          { answerText: "<form", isCorrect: false },
        ],
      },
      {
        questionText: "What tag do I use to change the browsers title bar",
        answerOptions: [
          { answerText: "<titlebar>", isCorrect: false },
          { answerText: "None of these", isCorrect: false },
          { answerText: "<browerTitle>", isCorrect: false },
          { answerText: "<title>", isCorrect: true },
        ],
      },
      {
        questionText:
          "Which element defines the document's body headings, paragraphs and images",
        answerOptions: [
          { answerText: "<BODYTAG>", isCorrect: false },
          { answerText: "<body>", isCorrect: true },
          { answerText: "<html>", isCorrect: false },
          { answerText: "<title>", isCorrect: false },
        ],
      },
      {
        questionText: "What are Empty elements and is it valid?",
        answerOptions: [
          {
            answerText: "No, there is no such terms as Empty Element",
            isCorrect: false,
          },
          {
            answerText: "No, it is not valid to use Empty Element",
            isCorrect: false,
          },
          {
            answerText: "Empty elements are element with no data",
            isCorrect: true,
          },
          { answerText: "None of these", isCorrect: false },
        ],
      },
      {
        questionText: "Is this valid html",
        answerOptions: [
          { answerText: "Yes", isCorrect: false },
          { answerText: "No", isCorrect: true },
        ],
      },
    ],
  },
  {
    quizId: 2,
    questions: [
      {
        questionText: "Web pages starts with which of the following tag?",
        answerOptions: [
          { answerText: "<html>", isCorrect: true },
          { answerText: "<body>", isCorrect: true },
          { answerText: "<title>", isCorrect: true },
          { answerText: "<form", isCorrect: true },
        ],
      },
      {
        questionText: "What are Empty elements and is it valid?",
        answerOptions: [
          {
            answerText: "No, there is no such terms as Empty Element",
            isCorrect: true,
          },
          {
            answerText: "No, it is not valid to use Empty Element",
            isCorrect: true,
          },
          {
            answerText: "Empty elements are element with no data",
            isCorrect: true,
          },
          { answerText: "None of these", isCorrect: true },
        ],
      },
      {
        questionText: "Which gives a bigger heading tag",
        answerOptions: [
          {
            answerText: "<h1>",
            isCorrect: true,
          },
          {
            answerText: "<h6>",
            isCorrect: true,
          },
        ],
      },
      {
        questionText: "Does a img tag need a closing tag",
        answerOptions: [
          {
            answerText: "Yes",
            isCorrect: true,
          },
          {
            answerText: "No",
            isCorrect: true,
          },
        ],
      },
      {
        questionText: "Which tag is used to take to the user to a new website",
        answerOptions: [
          {
            answerText: "<ul>",
            isCorrect: true,
          },
          {
            answerText: "<link>",
            isCorrect: true,
          },
          {
            answerText: "<a>",
            isCorrect: true,
          },
          {
            answerText: "<linkpage>",
            isCorrect: true,
          },
        ],
      },
      {
        questionText:
          "What is the purpose of the source property in the img tag",
        answerOptions: [
          {
            answerText: "There is no source property",
            isCorrect: true,
          },
          {
            answerText: "Specifies the path to the image",
            isCorrect: true,
          },
          {
            answerText: "holds link to img",
            isCorrect: true,
          },
          {
            answerText: "<linkpage>",
            isCorrect: true,
          },
        ],
      },
      {
        questionText: "Which tag is used to generate an unordered list",
        answerOptions: [
          {
            answerText: "<unorderedlist>",
            isCorrect: true,
          },
          {
            answerText: "<list>",
            isCorrect: true,
          },
          {
            answerText: "<li>",
            isCorrect: true,
          },
          {
            answerText: "<ul>",
            isCorrect: true,
          },
        ],
      },
      {
        questionText: "What is the purpose of the style attribute",
        answerOptions: [
          {
            answerText:
              "add styles to an element, such as color, font, size, and more.",
            isCorrect: true,
          },
          {
            answerText: "add styles to an element, such as color",
            isCorrect: true,
          },
        ],
      },
    ],
  },
];

export default allQuestions;
