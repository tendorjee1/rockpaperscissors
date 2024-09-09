let humanScore = 0;
let computerScore = 0;
let roundWinner = '';
function getcomputerSelection(){
    let value = Math.random();
    console.log(value);
    if (value < 0.33) {
        return "ROCK";
    } else if (value < 0.66) {
        return "PAPER";
    } else {
        return "SCISSORgit ";
    }
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = "tie"
    }
    else if (playerSelection == "ROCK"){
        if (computerSelection == "PAPER") {
            computerScore++;
            roundWinner = "comp";
        }
        else {
            humanScore++;
            roundWinner = "player";
        }
        }
    else if (playerSelection == "PAPER"){
        if (computerSelection == "SCISSOR"){
            computerScore++;
            roundWinner = "comp";
        }
        else {
            humanScore++;
            roundWinner = "player";

        }

        
    }
    else if (playerSelection == "SCISSOR"){
        if (computerSelection == "ROCK"){
            computerScore++;
            roundWinner = "comp";
        }
        else {
            humanScore++;
            roundWinner = "player";

        }

    }

    

}



const scoreInfo = document.getElementById('scoreInfo');
const playerScores = document.getElementById('playerScore');
const computerScores = document.getElementById('computerScore')
const playerSelections = document.getElementById('playerSelection')
const computerSelections = document.getElementById('computerSelection')
const rockbtn = document.getElementById('rockBox')
const paperbtn= document.getElementById('paperBox')
const scissorbtn = document.getElementById('scissorBox')


rockbtn.addEventListener('click', () => handleClick('ROCK'))
paperbtn.addEventListener('click', () => handleClick('PAPER'))
scissorbtn.addEventListener('click', () => handleClick('SCISSOR'))

function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }

function handleClick(playerSelection){
    if (isGameOver()) {
        console.log("gameover")
    }

    const computerSelection = getcomputerSelection()
    playRound(playerSelection, computerSelection)

    updateChoices(playerSelection,computerSelection)
    updateScore();
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'ROCK':
        playerSelections.textContent = '✊'
        break
      case 'PAPER':
        playerSelections.textContent = '✋'
        break
      case 'SCISSOR':
        playerSelections.textContent = '✌️'
        break
    }
  
    switch (computerSelection) {
      case 'ROCK':
        computerSelections.textContent = '✊'
        break
      case 'PAPER':
        computerSelections.textContent = '✋'
        break
      case 'SCISSOR':
        computerSelections.textContent = '✌️'
        break
    }
  }

  function updateScore() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'comp') {
      scoreInfo.textContent = 'You lost!'
    }
}


