// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null == 0);
//Equality check and comparison check works differently
//Comparison converts null to a number, treating it as 0.
//That's why null>=0 is true and null > 0 is false.
//Avoid this type of conversion to avoid confusion.

console.log(undefined == 0);
console.log(undefined > 0);

// ===
console.log("2" === 2);