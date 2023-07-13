let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

updateScoreElement();


/* if(!score){
score={
    wins:0,
    losses:0,
    ties:0
};
}*/

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove){
    const compMove=pickComputerMove();

    if(playerMove === 'Scissors'){
        if(compMove ==='Rock'){
            result='You loss.';
        }
        else if(compMove ==='Paper'){
            result='You win!!!';
        }
        else if(compMove ==='Scissors'){
            result='Tie.';
        }
    }

    else if(playerMove === 'Paper'){
        if(compMove ==='Rock'){
            result='You win!!!';
        }
        else if(compMove ==='Paper'){
            result='Tie.';
        }
        else if(compMove ==='Scissors'){
            result='You loss.';
        }
    }

    else if(playerMove === 'Rock'){
        if(compMove ==='Rock'){
            result='Tie.';
        }
        else if(compMove ==='Paper'){
            result='You loss.';
        }
        else if(compMove ==='Scissors'){
            result='You win!!!';
        }
    }

    if(result==='You win!!!'){
        score.wins += 1;
    }
    else if(result==='You loss.'){
        score.losses += 1;
    }
    else if(result==='Tie.'){
        score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-move').innerHTML=`You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${compMove}-emoji.png" class="move-icon">
    Computer`;

}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
const randomNumber=Math.random();
let compMove='';
let result='';
if(randomNumber >= 0 && randomNumber < 1/3){
    compMove='Rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3){
    compMove='Paper';
}
else{
    compMove='Scissors';
}
return compMove;
}