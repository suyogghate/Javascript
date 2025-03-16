// -------- EXAMPLE 1 <H1> ----------------

// STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");
// --------------------------------------
// const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like Pizza.";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box4 = document.getElementById("box4");
// document.body.insertBefore(newH1, box4);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);


// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// const listItem = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItem[3]);

// STEP 4 HTML ELEMENT
// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

// document.getElementById("fruits").removeChild(newListItem);

// --------------------------------------------------------------

// event listner = Listen for specific events to create interactive web pages
//                  events: click, mouseover, mouseout
//                  .addEventListener(click, callback);

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😮";
});

myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😉";
});