// const myButton = document.getElementById("myBtn");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {
    // if(myImg.style.display === "none"){
    //     myImg.style.display = "block";
    //     myButton.textContent = "Hide";
    // } else {
    //     myImg.style.display = "none";
    //     myButton.textContent = "Show";
    // }
//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible";
//         myButton.textContent = "Hide";
//     } else {
//         myImg.style.visibility = "hidden";
//         myButton.textContent = "Show";
//     }
// })

// -------------------------------------------------------------

// NodeList = Static collection of HTML elements by (id, class, element)
//              Can be created by using querySelectorAll()
//              Similar to an array, but no (map, filter, reduce)
//              NodeList won't update to automatically reflect changes

// let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES

// buttons.forEach(button => {
//     button.style.backgroundColor = "lightgreen";
//     button.textContent += "😃";
// })

// CLICK event listener

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     })
// })

// MOUSEOVER + MOUSEOUT event listener

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });

// ADD AN ELEMENT
// const newButton = document.createElement("button");  //step1
// step2
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);  //step3

// buttons = document.querySelectorAll(".myButtons");

// REMOVE AN ELEMENT

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//     });
// });

// classList = Element property in Javascript used to interact
//              with an element's list of classes (CSS classes)
//              Allows you to make reusable classes for many elements
//              across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()
// const myH1 = document.getElementById("myH1");
// const myButton = document.getElementById("myButton");

// myH1.classList.add("enabled");
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event => {
//     // event.target.classList.add("hover");
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     // event.target.classList.remove("hover");
//     event.target.classList.toggle("hover");
// });

// myButton.classList.add("enabled");

// myH1.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😍";
//     } else {
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😍";
//     } else {
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🙄";
        } else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});