//Following approach prints 1-10 together infinitely with 2 sec gap between two lots

// const num = function() {
    // setInterval(printNum, 2000)
        
    // function printNum() {
    //     for(i = 1; i <= 10; i++) {
    //         console.log(i)
    //     }
    // }
// }

// num()


//Following approach prints 1-10 one-by-one with 2 sec gap between two numbers

let num = 1

const intervalId = setInterval(function() {
    console.log(num);
    num++;

    if(num > 10) {
        clearInterval(intervalId);
    }
}, 2000)