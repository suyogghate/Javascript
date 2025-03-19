// Callback Hell = Situation in Javascript where callbacks
//                  are nested within other callbacks to the
//                  degree where the code is difficult to read.
//                  Old pattern to handle asynchronous functions.
//                  Use Promises + async/await to avoid Callback Hell.

// function task1(callback){
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);
// }

// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000);
// }

// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000);
// }

// function task4(callback){
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1500);
// }

// task1();
// task2();
// task3();
// task4();
// console.log("All tasks completed!!");

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log("All tasks completed!!");
//             })
//         })
//     })
// });

// Promises = An object that manages asynchronous operations.
//              Wrap a Promise object around {asynchronous code}
//              "I want to return a value"
//              PENDING => RESOLVED or REJECT
//              new Promise((resolve, reejct) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true;
//             if(dogWalked) {
//                 resolve("You walked the dog 🐕");
//             } else {
//                 reject("You didn't walk the dog 🐕");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = false;
//             if(kitchenCleaned){
//                 resolve("You cleaned the kitchen 🧹");
//             } else {
//                 reject("You didn't cleaned the kitchen 🧹");
//             }
//         }, 2500);
//     });
// }

// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = true;
//             if(trashTakenOut){
//                 resolve("You took out trash ♻");
//             } else {
//                 reject("You didn't take out the trash ♻");
//             }
//         }, 500);
//     });
// }
// 
// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You fiished all the chores!");
//         })
//     })
// })

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You finished all the chores!")
//          .catch(error => console.error(error));   
// });

// Async/Await = Async = makes a function return a promise
//              Await = makes an async function wait for a promise

// Allows you to write asynchronous code in a synchronous manner
// Async doesn't have reslove or reject parameters
// Everything after Await is placed in an event queue

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked) {
                resolve("You walked the dog 🐕");
            } else {
                reject("You didn't walk the dog 🐕");
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You cleaned the kitchen 🧹");
            } else {
                reject("You didn't cleaned the kitchen 🧹");
            }
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You took out trash ♻");
            } else {
                reject("You didn't take out the trash ♻");
            }
        }, 500);
    });
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        
        console.log("You finished all the chores!");
    } catch (error){
        console.error(error);
    }
}

doChores();