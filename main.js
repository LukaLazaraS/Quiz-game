//Selectors
const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const questionDiv = document.querySelector('.question');
const answersDiv = document.querySelector('.answers');
const answerDiv = document.querySelectorAll('.answer');

var i = 0;     
var correctAnswer;
var questions = [{
"question": "What's the Highest mountain on Earth?",
    "answer1": "Everest",
    "answer2": "Kangchenjunga",
    "answer3": "Annapurna",
    "answer4": "Manaslu",
    "correctans": "Everest"
},{
    "question": "What's the deepest trench on Earth?",
    "answer1": "Challenger",
    "answer2": "Java",
    "answer3": "Puerto Rico",
    "answer4": "Mariana",
    "correctans": "Mariana"
},{
    "question": "4+4/2",
    "answer1": "4",
    "answer2": "8",
    "answer3": "6",
    "answer4": "0",
    "correctans": "6"
},{
    "question": "9*9/9*9",
    "answer1": "79",
    "answer2": "91",
    "answer3": "81",
    "answer4": "1",
    "correctans": "81"
},{
    "question": "Which year was league of legends first release?",
    "answer1": "2008",
    "answer2": "2009",
    "answer3": "2010",
    "answer4": "2011",
    "correctans": "2009"
},{
    "question": "Which champion was available at the first League Of Legends launch?",
    "answer1": "Poppy",
    "answer2": "Lulu",
    "answer3": "Annie",
    "answer4": "Kled",
    "correctans": "Annie"
},{
    "question": "What genre is the League Of Legends?",
    "answer1": "Racing",
    "answer2": "Simulator",
    "answer3": "Shooter",
    "answer4": "MOBA",
    "correctans": "MOBA"
},{
    "question": "Which one is a markup language?",
    "answer1": "HTML",
    "answer2": "C++",
    "answer3": "JavaScript",
    "answer4": "C#",
    "correctans": "HTML"
},{
    "question": "Which one is the youngest programing language?",
    "answer1": "Python",
    "answer2": "C#",
    "answer3": "Swift",
    "answer4": "F#",
    "correctans": "Swift"
},{
    "question": "What's the fourth planet from the sun in the solar system?",
    "answer1": "Mercury",
    "answer2": "Mars",
    "answer3": "Earth",
    "answer4": "Saturn",
    "correctans": "Mars"
}];

//Event Listeners
document.addEventListener("DOMContentLoaded", randColors);
document.addEventListener("DOMContentLoaded", startQuiz);

//Functions
function startQuiz(){
    
    questionDiv.innerHTML = questions[i].question;
    answerDiv[0].innerHTML = questions[i].answer1;
    answerDiv[1].innerHTML = questions[i].answer2;
    answerDiv[2].innerHTML = questions[i].answer3;
    answerDiv[3].innerHTML = questions[i].answer4;
    answersDiv.addEventListener('click', checkAnswer);


}

function checkAnswer(e){
    const item = e.target;
    // console.log(questions[i].correctans);

    // console.log(item.innerHTML);
    // console.log(questions[i].correctans);
    if(item.classList[0] == "answer" && item.innerHTML == questions[i].correctans){
        correctAnswer = item.innerHTML;
        item.classList.add("correct-answer-color-green");
        console.log(item.innerHTML);
    }else if(item.classList[0] == "answer"){
        item.classList.add("correct-answer-color-red");
        answerDiv.forEach(answer => {
            if(answer.classList[0] == "answer" && answer.innerHTML == questions[i].correctans){
                answer.classList.add("correct-answer-color-green");
            }
        })
    }
}

function randColors(){
    header.style.color = `#${randColor()}`;
    let randBorderColor = randColor();
    main.style.borderColor = `#${randBorderColor}`;
    answerDiv.forEach(answer => {
        answer.style.borderColor = `#${randBorderColor}`;
    })
}

function randColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}