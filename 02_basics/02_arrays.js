const marvelHeroes = ["IronMan", "Spiderman", "Thor"];
const dcHeroes = ["Batman", "Superman", "Flash"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes]; //spread operator
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
const realAnotherArray = anotherArray.flat(Infinity);
//Returns a new array with all sub-array elements concatenated 
//into it recursively up to the specified depth.
// console.log(realAnotherArray);

console.log(Array.isArray("Suyog"));
console.log(Array.from("Suyog"));
console.log(Array.from({name: "suyog"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
