//DOM = DOCUMENT OBJECT MODEL

//      Object{} that represents the page you see in the web browser
//      and provides you with an API to interact with it.
//      web browser constructs the DOM with it loads an HTML document.
//      and structures all the elements in a tree like representation.
//      JavaScript can access the DOM to dynamically
//      change the content, structure, and style of a web page.

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? 'Guest' : username;

console.log(document)



//element selectors = Methods used to target and manipulate HTML elements
//                      They allow you to select one or multiple HTML elements
//                      from the DOM (Document Object Model)

//1. document.getElementById()       //ELEMENT OR NULL
//2. document.getElementClassName()  // HTML COLLECTION
//3. document.getEementByTagName()   //HTML COLLECTION
//4. document.querySelector()        // ELEMENT OR NULL
//5. document.querySelectorAll()      //NODELIST

