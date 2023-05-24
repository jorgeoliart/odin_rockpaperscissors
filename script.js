function getComputerChoice() {
    let threeOptions = ['rock', 'paper', 'scissors'];
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
    console.log(`You chose ${playerChoice}`);
    console.log(`The computer chose ${computerChoice}`);
    }

playerRound();