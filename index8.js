// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//          person.name = this.name

// const person1 = {
//     name: "Spongebob",
//     favFood: "hamburgers",
//     sayHello: function(){console.log(`Hi! I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// const person2 = {
//     name: "Patrik",
//     favFood: "pizza",
//     sayHello: function(){console.log(`Hi! I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// person1.sayHello();
// person1.eat();

// person2.sayHello();
// person2.eat();

// console.log(this);
// ------------------------------------------------------------
// constructor = special method for defining the 
//               properties and methods of objects

// function Car(make, model , year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new Car("Ford", "Mustang", 2024, "Red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "Black");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();

// console.log(car2);
// car2.drive();

// -------------------------------------------------------------
// class = (ES6 feature) provide a more structured and cleaner way to 
//          work with objects compared to traditional constructor function
//          ex. static keyword, encapsulation, inheritance

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.66);
// const product2 = new Product("Pants", 20.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const total = product1.calculateTotal(salesTax);
// console.log(`Total price (including tax): $${total.toFixed(2)}`);

// ------------------------------------------------------------------

// static = keyword that defines properties or methods that belong
//          to class itself rather than the objects created from 
//          that class (class owns anythin static, not the objects)

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }

//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * radius ** 2;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`);
//     }

//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`);
        
//     }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");

// console.log(user1.username);
// console.log(user2.username);
// console.log(User.userCount);

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

// User.getUserCount();

// ---------------------------------------------------------------

// Inheritance = allows a new class to inherit properties and methods
//              from an existing class (parent -> child)
//              helps with acode reusability

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit";

//     run(){
//         console.log(`This ${this.name} can run.`);
//     }
// }

// class Fish extends Animal{
//     name = "fish";

//     swim(){
//         console.log(`This ${this.name} can swim`);
//     }
// }

// class Hawk extends Animal{
//     name = "hawk";

//     fly(){
//         console.log(`This ${this.name} can fly.`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(fish.alive);
// rabbit.eat();
// rabbit.sleep();

// fish.eat();
// fish.sleep();

// hawk.eat();
// hawk.sleep();

// rabbit.run();
// fish.swim();
// hawk.fly();