//  Callback = a function that is passed as an argument
//              to another function.

//              used to handle asynchronous operations:
//              1. Reading a file
//              2. Network requests
//              3. Interacting with databases

// hello(wait);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function wait(){
//     console.log("Wait!");
// }

// function leave(){
//     console.log("Leave!");
// }

// function goodbye(){
//     console.log("Goodbye!");
// }

// sum(displayPage, 1, 2);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

// -------------------------------------
// forEach() = method used to iterate over the elements
//              of any array and apply a specified function (callback)
//              to each element

//              array.forEach(callback)
//              element, index, array are provided

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "grapes"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }

// ----------------------------------------------------
// .map() = accepts a callback and applies that funtion
//          to each element of an array, then return a new array.

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentUpper = students.map(upperCase);
// const studentLower = students.map(lowerCase);

// console.log(studentLower);

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }

// const dates = ["2024-01-15", "2025-02-10", "2026-03-20"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

// -----------------------------------------------------
// .filter() = creates a new array by filtering out elements

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums);

// function isEven(element){
//     return element % 2 == 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }

// const ages = [16, 1, 18, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);

// console.log(children);

// function isAdult(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }

const words = ["apple", "orange", "kiwi", "banana", "coconut", "pomagranate"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}