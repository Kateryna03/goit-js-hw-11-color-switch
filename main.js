const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const refStartButton = document.querySelector('.button[data-action="start"]')
console.log(refStartButton);
const refStopButton = document.querySelector('.button[data-action="stop"]');
console.log(refStopButton);
const refBody = document.querySelector("body");

const randomIntegerFromInterval = (num) => {
    return Math.ceil(Math.random() * num);
};

refStartButton.addEventListener("click", startChangeColor);
refStopButton.addEventListener("click", stopChangeColor)

let intervallId= null;
 
function startChangeColor() {
    intervallId=setInterval(() => {
        refBody.style.background = colors[randomIntegerFromInterval(colors.length - 1)];
        console.log("start")
    }, 500);
    refStartButton.setAttribute('disabled', true);
    refStopButton.removeAttribute('disabled');
    }
    
;
//const intervalID = setInterval(startChangeColor, 2000, 1000);

function stopChangeColor () {
    clearInterval(intervallId);
    refStartButton.removeAttribute("disabled");
    refStopButton.setAttribute('disabled', true);
    console.log('stop');
};

