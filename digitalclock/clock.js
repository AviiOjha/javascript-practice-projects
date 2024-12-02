// console.log("Hello World!")

// const accountId = 41530
// var accountEmail = "avinash@gmail.org";
// let accountPassword = "12345#";
// accountCity = "Bengaluru";

/*
    prefer not to use var because it has global scope, it can lead to errors if some other files has a variable with same name
*/

// console.log(accountId);

// accountEmail = "ojha.avinash@engineer.com";
// accountPassword = "@gym123"

// console.table([accountId, accountEmail, accountPassword, accountCity]);

// alert("3+3") //Not defined in Node.js


// let currentDate = new Date()
// console.log(currentDate.toString())
// console.log(currentDate.toISOString())
// console.log(currentDate.toJSON())
// console.log(currentDate.toDateString());
// console.log(currentDate.toLocaleDateString())
// console.log(currentDate.toLocaleString());

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
