// singleton
Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "Suyog",
    [mySym] : "myKey1",
    "full name" : "Suyog Ghate",          
    age : 25,
    location : "Pune",
    email : "suyog@gmail.com",
    isLogggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abc@gmail.com";
// Object.freeze(JsUser);          // used to freeze the objects, 
                                // so that anyone cannot change the properties of it
JsUser.email = "abc123@gmail.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Good Morning");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());