const accountId = 148496;
let accountEmail = "suyog@gmail.com";
var accountPassword = "12345";
accountCity = "Pune";
let accountState;       //undefined
// accountId = 5;  not allowed

console.log(accountId);

accountEmail = "another@gmail.com";
accountPassword = "54789";
accountCity = "Bengaluru";

console.table([accountEmail, accountPassword, accountCity, accountId, accountState]);

/*
    Prefer not to use var : 
    Because of issue in in block and functional scope
*/