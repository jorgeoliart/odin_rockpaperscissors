let playerScore = 0;
let computerScore = 0;

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
    let winner;

    if (playerChoice === computerChoice) {
        console.log("It's a tie.");
        winner = "Tie";
    } else if ((playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win this round");
        winner = "Player";
    } else {
         console.log("You lose this round");
         winner = "Computer";
    }
    return winner;
}

// Game function that runs five player rounds

function game() {
    let winner;
    console.log("ROUND 1");
    winner = playerRound();
    console.log(winner);
    
    console.log("ROUND 2");
    winner = playerRound();
    
    console.log("ROUND 3");
    winner = playerRound();
 
    console.log("ROUND 4");
    winner = playerRound();
   
    console.log("ROUND 5");
    winner = playerRound();
  
}

game();
/*playerRound();*/