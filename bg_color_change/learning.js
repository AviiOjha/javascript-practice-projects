//Generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
} 

let intervalId
//Change the color of the background every 2 seconds
const startChangingColor = function () {
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

//Stop changing color
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)