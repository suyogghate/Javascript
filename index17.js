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

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.isEmployed)))
//     .catch(error => console.error(error))

// ---------------------------------------------------
// fetch = Function used for making HTTP requests to fetch resources.
//          (JSON style data, image, file)
//          Simplifies asynchronous data fetching in Javascript and
//          used for interacting with APIs to retrieve and send
//          data asynchronously over the web.
//          fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resources");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// fetchData();

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        imgElement.style.height = "200px";
        imgElement.style.width = "200px";
        
    } catch(error) {
        console.error(error);
    }
}