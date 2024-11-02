function updateTime() {
    const date = new Date();
    let hour = date.getHours() + ":" + date.getMinutes();
    document.getElementById("hour").innerHTML = hour;
}

setInterval(updateTime, 1000);

const display = document.getElementById("display");

function addToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}

function plusMinus() {
    let currentValue = display.value;
    display.value = currentValue * -1;
}




