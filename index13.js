// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser
// and providesyou with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document,
// and structures all the elements in a tree-like representation.
// Javascript can access the DOM to dynamically change the content
// structure and style of a web page.

// const username = "";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? `Guest` : username;

// console.dir(document);

// ---------------------------------------------------------------
// Element selectors = Methods used to target and manipulate HTML elements
//                      They allow you to select one or manipulate HTML elements
//                      from the DOM (Document Object Model)

// document.getElementById()             // element or null
// document.getElementsByClassName()     // html collection
// document.getElementsByTagName()       // html collection
// document.querySelector()              // element or null
// document.querySelectorAll()           // nodelist

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "red";
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "green";
// })
// fruits.forEach();              // gives error = html collections cannot be used with forEach methods
// for(let fruit of fruits){
//     fruit.style.backgroundColor = "red";
// }
// console.log(fruits);

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }
// h4Elements[0].style.backgroundColor = "yellow";
// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });


// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";

// const fruits = document.querySelectorAll(".fruits");
// const foods = document.querySelectorAll("li");

// foods[0].style.backgroundColor = "cyan";

// foods.forEach(food => {
//     food.style.backgroundColor = "lightgreen";
// })

// --------------------------------------------------------

// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ----------------.firstElementChild------------------
// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
    // const firstChild = ulElement.firstElementChild;
    // firstChild.style.backgroundColor = "pink";
// })     // selects first child of all ul elements

// --------------------.lastElementChild--------------------
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "red";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "pink";
// })     // selects last child of all ul elements

// ---------------------.nextElementSibling---------------------
// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "red";

// ---------------------.previousElementSibling----------------------
// const element = document.getElementById("desserts");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "pink";

// ----------------------.parentElement--------------------------
// const element = document.getElementById("cake");
// const parent = element.parentElement;
// parent.style.backgroundColor = "pink";

//-----------------------.children---------------------------
const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "pink";
});

children[1].style.backgroundColor = "yellow"