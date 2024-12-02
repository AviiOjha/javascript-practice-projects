console.log("Hello World!")

const accountId = 41530
var accountEmail = "avinash@gmail.org";
let accountPassword = "12345#";
accountCity = "Bengaluru";

/*
    prefer not to use var because it has global scope, it can lead to errors if some other files has a variable with same name
*/

console.log(accountId);

accountEmail = "ojha.avinash@engineer.com";
accountPassword = "@gym123"

console.table([accountId, accountEmail, accountPassword, accountCity]);

alert("3+3") //Not defined in Node.js


let currentDate = new Date()
console.log(currentDate.toString())
console.log(currentDate.toISOString())
console.log(currentDate.toJSON())
console.log(currentDate.toDateString());
console.log(currentDate.toLocaleDateString())
console.log(currentDate.toLocaleString());