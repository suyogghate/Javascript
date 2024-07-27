function sayMyName(){
    console.log("Suyog");
}

// sayMyName();

// function addTwoNumbers(num1, num2){     // parameters
//    console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){     
    // let result = num1 + num2;
    // return result;

    return num1+num2;
}

const result = addTwoNumbers(5, 9);    //arguments
// console.log(result);

function loginUserMessage(username = "Sam"){
    if (!username){
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

// const message = loginUserMessage("Suyog");
console.log(loginUserMessage());
console.log(loginUserMessage("Suyog"));