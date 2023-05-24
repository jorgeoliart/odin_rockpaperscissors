function getComputerChoice() {
    let threeOptions = ['rock', 'paper', 'scissor'];
    let computerSelectionNumber = Math.floor(Math.random() * 3);
    let computerSelectionString = threeOptions[computerSelectionNumber];
    return computerSelectionString;
} 

function getPlayerChoice() {
    let playerSelectionString = prompt("Make your choice: Rock, Paper, or Scissors");
    playerSelectionString = playerSelectionString.toLowerCase();
    return playerSelectionString;
}

// playRound function that takes the choices as arguments and states the winner

function playerRound(playerChoice, computerChoice) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    }

playerRound();