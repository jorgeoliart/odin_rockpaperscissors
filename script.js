// Start by setting both the player's and the computer's score at 0
let playerScore = 0;
let computerScore = 0;

// Give the player the chance to click from three possible buttons

// Create three buttons as variables in JS
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Add event listener for button ROCK that executes playRound()
rockButton.addEventListener('click', playRound);

// Add event listener for button PAPER that executes playRound()
paperButton.addEventListener('click', playRound);

// add event listener for button SCISSORS that executes playRound()
scissorsButton.addEventListener('click', playRound);


// Make function to get player choice

function playRound() {


}

/* 
function getComputerChoice() {
    let threeOptions = ['rock', 'paper', 'scissors'];
    let computerSelectionNumber = Math.floor(Math.random() * 3);
    let computerSelectionString = threeOptions[computerSelectionNumber];
    return computerSelectionString;
} 

// a function that gets the player's choice

function getPlayerChoice() {
    let playerSelectionString = prompt("Make your choice: Rock, Paper, or Scissors. The best score after five rounds wins.");
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
        winner = "It's a tie"
    } else if ((playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")) {
        winner = "You win this round";
    } else {
         winner = "You lose this round";
    }
    return winner;
}

// Game function that runs five player rounds

function game() {
    let winner;
    console.log("ROUND 1");
    winner = playerRound();
    console.log(winner);
    // add points according to winner
    if (winner === "It's a tie") {
        playerScore++;
        computerScore++;
    } else if (winner === "You win this round") {
        playerScore++;
    } else {
        computerScore++;
    }
    
    console.log("ROUND 2");
    winner = playerRound();
    console.log(winner);
    if (winner === "It's a tie") {
        playerScore++;
        computerScore++;
    } else if (winner === "You win this round") {
        playerScore++;
    } else {
        computerScore++;
    }
    
    console.log("ROUND 3");
    winner = playerRound();
    console.log(winner);
    if (winner === "It's a tie") {
        playerScore++;
        computerScore++;
    } else if (winner === "You win this round") {
        playerScore++;
    } else {
        computerScore++;
    }
 
    console.log("ROUND 4");
    winner = playerRound();
    console.log(winner);
    if (winner === "It's a tie") {
        playerScore++;
        computerScore++;
    } else if (winner === "You win this round") {
        playerScore++;
    } else {
        computerScore++;
    }
   
    console.log("ROUND 5");
    winner = playerRound();
    console.log(winner);
    if (winner === "It's a tie") {
        playerScore++;
        computerScore++;
    } else if (winner === "You win this round") {
        playerScore++;
    } else {
        computerScore++;
    }

    console.log("FINAL RESULTS");
    if (playerScore === computerScore) {
        console.log(`It's a tie! Both you and the computer got ${playerScore} points.`)
    } else if (playerScore > computerScore) {
        console.log(`You won this five-round game. You got ${playerScore} points the the computer got ${computerScore} points`);
    } else {
        console.log(`You lost this five-round-game. You got ${playerScore} points the the computer got ${computerScore} points`);
    }
}
*/

/*game();
playerRound();*/

