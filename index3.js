// Method chaining = Calling one method after 
//                   another in one continous line of code

// let username = window.prompt("Enter your username: ");
// -------------No method chaining-------------

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

// -------------Method chaining---------------
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// Logical opearators = used to calculate or manipulate boolean values
    //                  (true or false)
// AND = &&
// OR = ||
// NOT = !

// const temp = 250;

// if (temp <= 0 || temp > 30){
//     console.log("The weather is Bad.");
// } else {
//     console.log("The weather is Good.");
// }

// const isSunny = false;

// if(!isSunny) {
//     console.log("It is SUNNY");
// } else {
//     console.log("It is CLOUDY");
// }

// = assigment operator
// == comparison operator
// === strict equality operator
// != inequality opearator
// !== strict inequality opearator

// const PI = "3.14";

// if(PI !== "3.14"){
//     console.log("That is NOT PI");
// } else {
//     console.log("That is PI");
// }

// while loop = repeat some code WHILE some consdition is true

// let username;

// while(username === "" || username === null){
//     username = window.prompt(`Enter your name: `);
// }

// do{
//     username = window.prompt(`Enter your name: `);
// }while(username === "" || username === null);

// console.log(`Hello ${username}`);

// let loggedIn = true;
// let username;
// let password;

// do{
//     username = window.prompt(`Enter your username: `);
//     password = window.prompt(`Enter your password: `);

//     if (username === "myUsername"  && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     } else {
//         console.log("Invalid credentials, Please try again");
//     }
// }while(!loggedIn)

// for loop = repeat some code for limited amount of times

// for(let i = 10; i > 0; i-=2){
//     console.log(i+" Hello");
// }

// console.log("HAPPY NEW YEAR");

// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         // continue;
//         break;
//     } else{
//         console.log(i);
//     }
// }

// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Please enter a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number.");
    } else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    } else {
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        } else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        } else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}
