// date object = Objects that contain values that represent dates and times
//              These date objects can be changed and formatted
// Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2025, 0, 1, 2, 3, 4, 5);
// const date = new Date("2025-01-02T12:00:00Z");
// const date = new Date(17000000000000);
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(5);

// console.log(date);

// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");

// if(date2 > date1){
//     console.log("HAPPY NEW YEAR!"); 
// }

// closure = A function defined inside another function, the inner
//          function has access to the variables and scope of the
//          outer function.
//          Allow for private varibles and state maintenance
//          Used frequently in JS framework: React, Vue, Angular

// function outer(){
//     let msg = "Hello";
//     function inner(){
//         console.log(msg); 
//     }
//     inner();
// }

// outer();

// function createCounter(){
//     let count = 0;

//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment, getCount};
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`);

// function createGame(){
//     let score = 0;
//     function increaseScore(points){
//         score += points;
//         console.log(`+${points} pts`);
//     }

//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points} pts`);
//     }

//     function getScore(){
//         return score;
//     }

//     return {increaseScore, decreaseScore, getScore};
// }

// const game = createGame();

// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);

// console.log(`Then final score is ${game.getScore()} pts`);

// setTimeout() = function in Javascript that allows you to schedule
//                  the execution of a function after an amount of time(milliseconds)
//                  Times are approximate( varies based on the workload of thw Javascript runtime env.)

//              setTimeout(callback, delay);
// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello, 3000);
// const timeOutId = setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(timeOutId);
let timeOutId;

function startTimer(){
    timeOutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeOutId);
    console.log("CLEARED");
}

