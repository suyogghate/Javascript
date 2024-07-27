// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Suyog";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        firstName : "Suyog",
        lastName : "Ghate"
    }
}

// console.log(regularUser.fullName.lastName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj4 = {5 : "e", 6 : "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
                    //   target  source

const obj3 = {...obj1, ...obj2, ...obj4}       // spread oprtr
// console.log(obj3);

const users = [
    {
        id: 1,
        email : "abc1@gmail.com"
    },
    {
        id: 2,
        email : "abc2@gmail.com"
    },
    {
        id: 3,
        email : "abc3@gmail.com"
    },
    {
        id: 4,
        email : "abc4@gmail.com"
    },
];

console.log(users[2].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Suyog' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

