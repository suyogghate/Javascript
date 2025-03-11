// console.log('Hello');
// console.log('I like Pizza!');

// window.alert('This is an alert!');
// window.alert('I like Pizza!');

// This is a comment
/*
    this
    is
    a
    comment
*/
// document.getElementById('myH1').textContent = `Python`;
// document.getElementById('myP').textContent = `Java`;

// Variables-----------------------
// let x;
// x = 100;

// console.log(x);

// Datatypes-----------------
// let age = 25;
// let price = 15.66;
// let gpa = 4.5;

// let str = "String in Javascript"
// let favFood = "Pizza"
// let email = "suyog@gmail.com"

// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(age);
// console.log(price);
// console.log(gpa);
// console.log(typeof fName);
// console.log(`You are ${age} years old`);
// console.log(`The price is ${price}.`);
// console.log(`Your GPA is ${gpa}.`);
// console.log(`I am learning ${str} in my laptop.`);
// console.log(`My favorite food is ${favFood}.`);
// console.log(`My email is ${email}.`);

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// let fullName = "Bro Code"
// let age = 25;
// let student = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old.`;
// document.getElementById("p3").textContent = `Enrolled: ${student}`;

//Arithmetic operators--------------------------------
let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 4;
// students = students / 4;

// students = students ** 3;    // power
// let extraStudent = students % 4;        // remainder

// students += 2
// students -= 2
// students *= 2
// students /= 2
// students **= 2
// students %= 2
// students++;
// students--;
// console.log(students);

/*
Operator precedence
1. paranthesis()
2. exponent
3. multiplication & division & modulo
4. addition & subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;
// let result = 12 % 5 + 8 / 2;
// let result = 6 / 2 ** (2 + 5);

// console.log(result);

// Accept user input
// let username;
// username = window.prompt("What's your username?");
// console.log(username);

// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`   
// }

// Type conversion in JS
// let age = window.prompt("How old are you?");
// // age = Number(age);
// age += 1;
// console.log(age, typeof age);

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const = a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = Number(radius);


// document.getElementById("mySubmit").onclick = function() {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + " cm"
// }

// Math = built-in object that provides a collection of properties and methods
// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(y);
// z = Math.ceil(y);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);

// RANDOM NUMBER GENERATOR
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

//Conditional statements------------------------------
// let age = 25;

// if(age >= 18){
//     console.log("You can vote!");
// } else {
//     console.log("You cannot vote! You age must be greater than or equal to 18.");
// }

// let time = 9;

// if(time < 12){
//     console.log("Good Morning!");
// } else {
//     console.log("Good Afternoon!");
// }

// let isStudent = false;

// if(isStudent){
//     console.log("You are a student");
// } else {
//     console.log("You are not a student");
// }

// let age = 18;
// let hasLiscense = true;

// if(age >= 16){
//     console.log("You are old enough to drive!");
//     if(hasLiscense){
//         console.log("You have your license");
//     } else {
//         console.log("You do not have your license yet!");
//     }
// } else {
//     console.log("You must be 16+ to have a license.");
// }
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){
        // console.log("You are too old to enter this site.");
        resultElement.textContent = `You are too old to enter this site.`;
    } else if(age == 0) {
        // console.log("You can't enter this site. You were just born.");
        resultElement.textContent = `You can't enter this site. You were just born.`;
    } else if(age >= 18){
        // console.log("You are old enough to enter this site.");
        resultElement.textContent = "You are old enough to enter this site.";
    } else if(age < 0){
        // console.log("You are not even born yet!");
        resultElement.textContent = `You are not even born yet!`;
    } else {
        // console.log("You must be 18+ to enter this site!");
        resultElement.textContent = `You must be 18+ to enter this site!`;
    }
}













