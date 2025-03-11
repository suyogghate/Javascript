// .reduce() = reduce the elements of an array to a single value
// const prices = [5, 30, 10, 25, 16, 20];
// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element){
//     return accumulator + element;
// }

// const grades = [76, 50, 90, 80, 65, 95];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);

// console.log(minimum);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

// function getMin(accumulator, element){
//     return Math.min(accumulator, element);
// }

// --------------------------------------------------
// function declaration = define a reusable block of code
//                          that performs a specific task

// function hello(){
//     console.log("Hello!");
// }

// function expression = a way to define functiona as 
//                      values or variables

// const hello = function() {
//     console.log("Hello!");
// }

// hello();

// setTimeout(hello, 3000);
// setTimeout(function hello(){
//     console.log("Hello!");
// }, 4000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// const cubes = numbers.map(function(element){
//     return Math.pow(element, 3);
// });

// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// });

// const oddNums = numbers.filter(function(element){
//     return element % 2 !== 0;
// });

// const total = numbers.reduce(function(accumulator, element){
//     return accumulator + element;
// });

// console.log(total);

// -----------------------------------------------
// arrow functions = a concise way to write function expressions
//                  good for simple fnctions that you use only once
//                  (parameters) => some code

// const hello = (name, age) => {console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old`)};

// hello("Suyog", 25);

// setTimeout(() => console.log("Hello"), 3000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element);

// console.log(total);

// -------------------------------------------------------

// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value, 
//                    function()}

// const person1 = {
//     firstName : "Spongebob",
//     lastName : "Squarepants",
//     age : 30,
//     isEmployed : true,
//     sayHello: function(){
//         console.log("Hi! I am Spongebob!");
//     },
//     eat: () => {console.log("I am eating a Krabby Patty")}
// }

// const person2 = {
//     firstName : "Patrick",
//     lastName : "Star",
//     age : 42,
//     isEmployed : false,
//     sayHello: () => {console.log("Hey! I am Patrick!")},
//     eat: () => {console.log("I am eating roast beef, chicken and pizza")},
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello();
// person1.eat();

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello();
// person2.eat();


