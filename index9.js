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

