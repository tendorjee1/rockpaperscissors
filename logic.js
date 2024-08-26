let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let value = Math.random();
    if (value < 0.33) {
        return "rock";
    } else if (value < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function getHumnanChoice(){
    let userOpt = prompt("select rock paper or scissor")
    if (userOpt.toLowerCase() == "rock"){
        return "rock"
    }
    else if (userOpt.toLowerCase() == "paper"){ 
        return "paper"
    }
    else if (userOpt.toLowerCase() == "scissor"){ 
        return "scissor"
    }
}

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
        return console.log("Tie!")
    }
    else if (HumanChoice == "rock"){
        if (ComputerChoice == "paper") {
            computerScore++;
            return console.log("you lose")
        }
        else {
            humanScore++;
            return console.log("you won!")
        }
        }
    else if (HumanChoice == "paper"){
        if (ComputerChoice == "scissor"){
            computerScore++;
            return console.log("you lose")
        }
        else {
            humanScore++;
            return console.log("you won!")

        }

        
    }
    else if (HumanChoice == "scissor"){
        if (ComputerChoice == "rock"){
            computerScore++;
            return console.log("you lose")
        }
        else {
            humanScore++;
            return console.log("you won!")

        }

    }

    

}

const humanSelection = getHumnanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);
playRound(humanSelection, computerSelection)

