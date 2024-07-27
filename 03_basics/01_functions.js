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
// console.log(loginUserMessage());
// console.log(loginUserMessage("Suyog"));

function calculateCartPrice(val1, val2, ...prices){
    return prices;
}

// console.log(calculateCartPrice(200, 500, 111, 800));

const user = {
    username : "suyog",
    price : 888
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//     username : "Sam",
//     price: 566
// });

const myNewArray = [200, 466, 700, 1000];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 466, 700, 1000]));
