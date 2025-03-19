// JSON = (Javascript Object Notation) dta-interchange format
// Use for exchanging data between a server and a web application
// JSON file {text:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object.

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["jellyfishing", "karate", "cooking"]}`;
// const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
//                 {"name": "Patrick","age": 34,"isEmployed": false},
//                 {"name": "Squidward","age": 20,"isEmployed": true},
//                 {"name": "Sandy","age": 27,"isEmployed": false}]`;

// const jsonString = JSON.stringify(names);

// console.log(jsonString);
// const jsonString = JSON.stringify(person)
// const jsonString = JSON.stringify(people)
// console.log(jsonString);

// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);

// fetch("people.json")
//     .then(response => response.json())
//     .then(value => console.log(value))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error))