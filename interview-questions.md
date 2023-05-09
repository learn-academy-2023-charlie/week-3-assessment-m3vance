# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: 
JSX is a hybrid language that uses HTML code within a JS file. JS logic must also be within curly braces. One syntax difference is the naming convention of the properties. In JSX, camelCase is used (eg backgroundColor), while the hyphen is used in HTML (eg background-color).

Researched answer:
JSX stands for JavaScript XML. It is a syntactic sugar for react. It is an extension that allows most HTML code to be used in a javascript file. There are a few differences such as HTML being able to return multiple elements. HTML can create classes, but since class is a keyword in JS, we have to use className. In HTML, almost all tags have an opening and closing tag, however in JSX, any element can be written as a self closing tag.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: 
Yet another resource negotiator is a resource package manager. It imports different packages of code snippets, and also runs prebuilt code, from those different packages. When adding a package, it imports all the different code snippets and methods into a folder, within the directory you are in. 

Researched answer:
Yarn was created by Facebook in 2016. It also installs packages in parallel, compared to NPM, which performs serial installation. 

3. What is a React component?

Your answer: 
A react component is a child js file used to compartmentalize code. Having seperate components for various functions, ensures that if a section of the code is broken, it is much easier to diagnos and fix, as opposed to having all the code in one file. 

Researched answer:
Component functions must use PascalCase naming convention. Props are used to send info between JS files. Components are displayed by using a component call.

4. What is the difference between state values and props in React?

Your answer:
State values are the containers for property values. State values are dynamic. Props is short for properties. They send information one way, and are static. They are also sent as an object. 

Researched answer:
The difference between a state and prop is that state data is local and the component itself updates it, while props are read only and owned by the parent. 

5. What is the DOM?

Your answer: 
Digital object model is the visual representation of logic on a UI. For example, clickable buttons or images. They bring the logic together in a coherent way, that makes it easy for the user to navigate through the app or website. 

Researched answer:
DOCUMENT* object model is the data representation of the objects on the web. Document refers to the data structure, object refers to the visual representation. The type of data DOM represents is a data structure called a tree. This means that the object in a DOM is under another object. 

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:
A div tag is a container that holds HTML. We can assign attributes to the div tag to apply to everything inside it. They are useful for dividing sections of HTML code. A span tag is used to span dex. Get it? spandex? I dunno. 

Researched answer:
A div tag is used as a container block for code, while a span tag is used inside other code. For example, a div tag can be styled a certain background color while a span tag can be used in a paragraph tag, in the div tag, to style a specific text a certain way.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Programming around objects, instead of functions and logic. 

2. Ruby: A programming language in which everything is an object.

3. Implicit return: If a return is the last expression in a code, then the return keyword is not necessary.

4. Ruby blocks: Blocks of code that are wrapped in a do-end statement and {}

5. Ruby hashes: A data structure that allows us to store unique data in key-value pairs.
