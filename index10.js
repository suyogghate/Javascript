// Nested objects = Objects inside of other objects.
//                  Allows you to represent more complex data structures
//                  Child object is enclosed by a parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 28,
//     isStudent: true,
//     hobbies: ["Karate", "Jelly fishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Waters"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.country);

// for(const property in person.address){
//     console.log(person.address[property]);
// }

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
// const person2 = new Person("Patrick", 24, "127 Conch St.", "Bikini Bottom", "Int. Waters");
// const person3 = new Person("Squidward", 22, "129 Conch St.", "Bikini Bottom", "Int. Waters");

// console.log(person1);
// console.log(person2);
// console.log(person3);

// Array of objects in Javascript
// const fruits = [{name: "apple", color: "red", calories: 98},
//                 {name: "banana", color: "yellow", calories: 78},
//                 {name: "orange", color: "orange", calories: 66},
//                 {name: "pineapple", color: "yellow", calories: 101},
//                 {name: "coconut", color: "white", calories: 157}];

// console.log(fruits[3].calories);
// fruits.push({name: "grapes", color: "purple", calories: 88});
// console.log(fruits);
// fruits.pop();
// fruits.splice(1, 2);
// console.log(fruits);

// ----------------------forEach()----------------------
// fruits.forEach(fruit => console.log(fruit.calories));

// map()
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);
// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// filter()
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
// console.log(highCalFruits);

// reduce()
// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
// const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
// console.log(maxFruit);
// console.log(minFruit);

// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical,
//          lexicographic = (alphabet + numbers + symbols) as strings

// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
// let numbers = [1, 10, 2, 7, 4, 3, 5, 8, 9, 6];

// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);

// fruits.sort();

// console.log(fruits);
// console.log(numbers);


// const fruits = [{name: "apple", color: "red", calories: 98},
//                     {name: "banana", color: "yellow", calories: 78},
//                     {name: "orange", color: "orange", calories: 66},
//                     {name: "pineapple", color: "yellow", calories: 101},
//                     {name: "coconut", color: "white", calories: 157}];

// fruits.sort((a, b) => b.color.localeCompare(a.color));

// console.log(fruits);

// How to shuffle an algorithm
// Fisher-Yates algorithm
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}

shuffle(cards);
console.log(cards);



