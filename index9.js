// super = keyword is used in classes to call the constructor or
//          access the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed} mph.`);
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run.`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim(){
//         console.log(`This ${this.name} can run.`);
//         super.move(this.swimSpeed);
//     }
// }

// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly(){
//         console.log(`This ${this.name} can fly.`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("Rabbit", 34, 56);
// const fish = new Fish("Fish", 23, 44);
// const hawk = new Hawk("Hawk", 22, 48);

// console.log(rabbit);
// console.log(fish);
// console.log(hawk);

// rabbit.run();
// fish.swim();
// hawk.fly();

// -------------------------------------------------------------
// getter = special method that makes a property readable.
// setter = special method that makes a property writable.

// validate and modify a value when reading/writing a property.

// class Rectangle{
//     constructor(heigth, width){
//         this.heigth = heigth;
//         this.width = width;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         } else {
//             console.error("Width must be a positive number.");
//         }
//     }
    
//     set heigth(newHeigth){
//         if(newHeigth > 0){
//             this._heigth = newHeigth;
//         } else {
//             console.error("Height must be a positive number.");
//         }
//     }

//     get width(){
//         return `${this._width.toFixed(1)} cm`;
//     }

//     get heigth(){
//         return `${this._heigth.toFixed(1)} cm`;
//     }

//     get area(){
//         return `${(this._width * this._heigth).toFixed(1)} cm^2`;
//     }
// }

// const rectangle = new Rectangle(3, 4);

// console.log(rectangle.width);
// console.log(rectangle.heigth);
// console.log(rectangle.area);

// destructuring = extract values from arrays and objects,
//                  then assign them to variables in a convenient way
//                  [] = to perform array destructuring
//                  {} = to perform object destructuring

// Swap the value of two variables
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// Swap two elements in an array
// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);


// Assign array elements to variables
// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor, secondColor, thirdColor);
// console.log(extraColors);

// Extract values from objects
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Sqaurepants",
//     age: 30,
//     job: "Fry Cook"
// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 24,
// }

// const {firstName, lastName, age, job="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// Destructure in function parameters

// function displayPerson({firstName, lastName, age, job="Unemployed"}){
//     console.log(`Name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// displayPerson(person1);
