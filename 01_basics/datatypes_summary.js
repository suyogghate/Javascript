// Primitive
// 7 types : String, Number, Boolean, Null(empty), undefined, Symbol(unique), BigInt(large values)
const score = 100;
const value = 10.3;

const isLoggedIn = false;
const temp = null;
let user_email;  //undefined

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 35168168165181961315n

// Reference type(Non primitive)
// Arrays, Objects, Functions

const heroes = ["Ironman", "Superman", "Batman"];

let obj = {
    name: "suyog",
    age: 22,
};

const someFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes);