let startButton = document.querySelector(".start-reset-button");
let gameState = false;
let answer = 0;
let time = 60;

startButton.addEventListener("click",function(){
    if(!gameState){
        init();
        startButton.innerHTML="Reset";
    }
})

function init(){

    initChoices();
    startTimer();
    nextQuestion();
    
}

// Adds event listener to each of the choices.
function initChoices(){
    let choices = document.querySelectorAll(".choices div");

    for(let i = 0; i < choices.length; i++){
        choices[i].addEventListener("click",function(){checkAnswer(choices[i])});
    }
}

function nextQuestion(){
    loadQuestion();
    loadChoices();
}

function loadQuestion(){
    let randX = Math.floor(Math.random()*9)+1;
    let randY = Math.floor(Math.random()*9)+1;
    let question = `${randX}x${randY}`;
    answer = randX*randY;
    document.querySelector(".question-box").innerHTML = question;
}

function loadChoices(){
    let choices = document.querySelectorAll(".choices div");
    let answerSlot = Math.floor(Math.random()*4);

    for(let i = 0; i < 4; i++){
        let randX = Math.floor(Math.random()*9)+1;
        let randY = Math.floor(Math.random()*9)+1;

        if(i == answerSlot)
            choices[i].innerHTML = answer;
        else
            choices[i].innerHTML = randX*randY;
    }
}

function checkAnswer(obj){
    if(obj.innerHTML == answer){
        console.log("correct!");
        nextQuestion();
    }
    else
        console.log("wrong answer. Try Again");
}

function startTimer(){
    let timebox = document.querySelector(".time-value");
    let interval = setInterval(() => {
        if(time != 0){
            time-=1;
        }
        else
            clearInterval(interval);
        
        timebox.innerHTML=time;
    }, 1000);
}








