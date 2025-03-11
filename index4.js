// function = A section of reusable code.
//              declare code once, use it whenever you want
//              Call the function to execute that code.

// function wish(username, age) {
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${username}`);
//     console.log(`You are ${age} years old.`);
// }

// wish("BroCode", 25);
// wish("SpongeBob", 30);
// wish("Suyog", 28);

// function add(x, y) {
    // let result = x + y;
    // return result;

//     return x + y;
// }

// function sub(x, y){
//     return x - y;
// }

// function mul(x, y){
//     return x * y;
// }

// function div(x, y){
//     return x / y;
// }

// let ans = add(4, 6);
// console.log(ans);

// console.log(add(3, 6));

// console.log(sub(4, 8));
// console.log(mul(4, 8));
// console.log(div(4, 8));

// function isEven(num){
//     return num % 2 === 0 ? true : false;
// }

// console.log(isEven(33));

// function isValidEmail(email){
    // if(email.includes("@")){
    //     return true;
    // } else {
    //     return false;
    // }

//     return email.includes("@") ? true : false;
// }

// console.log(isValidEmail("Bro@fake.com"));
// console.log(isValidEmail("ElonMusk.com"));

// Variable scope in JS: where a variable is recognized and accessible
//                       (local vs global)

// let x = 3;

// fun1();

// function fun1(){
//     let x = 1;
//     console.log(x);
// }

// function fun2(){
//     let x = 2;
//     console.log(x);
// }

// Array = a variable like structure that 
//          can hold more than 1 value
// let fruits = ["apple", "banana", "orange", "grapes"];

// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits[3]);

// fruits[2] = "coconut";

// fruits.push("mango");  // add at last of array
// console.log(fruits);

// fruits.pop();         // remove at last
// console.log(fruits);

// fruits.unshift("mango");   // add at first
// console.log(fruits);

// console.log(fruits.length);

// console.log(fruits.indexOf("banana"));

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let i=fruits.length - 1; i>=0; i--){
//     console.log(fruits[i]);
// }

// fruits.sort();
// fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }


// spread operator = ... allows an iterable such as an array or string
//                      to be expanded into separate elements
//                       (unpacks the elements)

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);

// let username = "Bro Code";
// // let letters = [...username];
// let letters = [...username].join("-");

// console.log(letters);

let fruits = ["apple", "banana", "orange", "grapes"];
let vegetables = ["carrots", "celery", "potatoes"];
// let newFruits = [...fruits];

// console.log(newFruits);

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);

