// var c = 300;
let a = 300;

if(true){
    let a = 10;
    const b = 20;
    // console.log(a);
}

// console.log(a);
// console.log(b);

function one(){
    const username = "suyog"

    function two()
    {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if(true){
    const username = "suyog"
    if(username === "suyog"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// =============================================
console.log(addone(6));

function addone(num){
    return num + 1
}

addtwo(5);

const addtwo = function(num){
    return num + 2
}
