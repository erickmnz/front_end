const cchoiceDisplay = document.getElementById('c-choice' ); 
const uchoiceDisplay = document.getElementById('u-choice' ); 
const result = document.getElementById('result' ); 
const choices = document.querySelectorAll('button' );
let uchoice;
let cchoice;

function generateCChoice(){
    const randNumber = Math.floor(Math.random()*choices.length)+1;
    switch (randNumber){
        case 1:
            cchoice = 'rock';
            break;
        case 2: 
            cchoice = 'scissors';
            break;
        case 3: 
            cchoice = 'paper';
            break;
        default:
            cchoice = 'error';
    }
    cchoiceDisplay.innerHTML = cchoice;
}

function getResult(){
    if(cchoice === uchoice){
        result.innerHTML = "it's a draw";
    }else if(cchoice === 'rock' && uchoice === 'paper'){
        result.innerHTML = "you won";
    }else if(cchoice === 'rock' && uchoice === 'scissors'){
        result.innerHTML = "you lose";
    }else if(cchoice === 'paper' && uchoice === 'scissors'){
        result.innerHTML = "you won";
    }else if(cchoice === 'paper' && uchoice === 'rock'){
        result.innerHTML = "you lose";
    }else if(cchoice === 'scissors' && uchoice === 'paper'){
        result.innerHTML = "you lose";
    }else if(cchoice === 'scissors' && uchoice === 'rock'){
        result.innerHTML = "you won";
    }
}

choices.forEach((choices) => {choices.addEventListener('click', (e)=> {
    uchoice = e.target.id;
    uchoiceDisplay.innerHTML = uchoice;
    generateCChoice();
    getResult();
    })})




