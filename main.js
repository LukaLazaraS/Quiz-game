//Selectors
const body = document.querySelector('body');
const main = document.querySelector('main');
const answerDiv = document.querySelectorAll('.answer');

//Event Listeners
document.addEventListener("DOMContentLoaded", randColors);

//Functions
function randColors(){
    console.log(randColor());
    body.style.color = `#${randColor()}`;
    let randBorderColor = randColor();
    main.style.borderColor = `#${randBorderColor}`;
    answerDiv.forEach(answer => {
        answer.style.borderColor = `#${randBorderColor}`;
    })
}

function randColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}