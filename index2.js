// checked property = property that determines the 
//                    checked state of an HTML checkbox or radio button
// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");


// mySubmit.onclick = function() {
//     if(myCheckBox.checked){
//         subResult.textContent = `You are subscribed`;
//     } else {
//         subResult.textContent = `You are NOT subscribed`;
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = `You are paying with Visa.`;
//     } else if(masterCardBtn.checked){
//         paymentResult.textContent = `You are paying with Master Card.`
//     } else if(payPalBtn.checked){
//         paymentResult.textContent = `You are paying with Paypal.`
//     } else {
//         paymentResult.textContent = `You must select a payment type.`
//     }
// }

//ternary operator = a shortcut to if() and else() statements
//                  helps to assign  a variable based on a condition
//                  condition ? true : false

// let age = 12;
// let message = age >= 18 ? "You are an adult" : "You are a minor";

// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

// let purchaseAmount = 99;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount/100)}`);

// SWITCH = can be an efficient replacement to many else if statements

// let day = "pizza";

// switch(day) {
//     case 1: 
//         console.log("It is Monday");
//         break;
//     case 2: 
//         console.log("It is Tuesday");
//         break;
//     case 3: 
//         console.log("It is Wednesday");
//         break;
//     case 4: 
//         console.log("It is Thursday");
//         break;
//     case 5: 
//         console.log("It is Friday");
//         break;
//     case 6: 
//         console.log("It is Saturday");
//         break;
//     case 7: 
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }   

// let testScore = 33;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     default:
//         letterGrade = "F";
// }

// console.log(letterGrade);

//String methods = allow you to manipulate and work ith text (strings)

// let username = "Suyog";

// console.log(username.charAt(2));
// console.log(username.indexOf("o"));
// console.log(username.lastIndexOf("o"));
// console.log(username.length);
// username = username.trim();
// username = username.toUpperCase();
// username = username.toLowerCase();
// username = username.repeat(3);
// result = username.startsWith(" ");
// result = username.endsWith(" ");
// result = username.includes(" ");

// let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll("-", "")
// phoneNumber = phoneNumber.padStart(15, "*");
// phoneNumber = phoneNumber.padEnd(15, "*");
// console.log(phoneNumber);

// String slicing = creating substring from a portion od substring
// string.slice(start, end) (end is exclusive)

// const fullName = "Broseph Code";

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4, 8);
// let lastName = fullName.slice(4);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-2);

// console.log(firstName);
// console.log(lastName);
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ")+1);

// console.log(firstName);
// console.log(lastName);

// const email = "suyog@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(username);
// console.log(extension);
