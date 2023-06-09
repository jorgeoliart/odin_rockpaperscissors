let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let threeOptions = ['rock', 'paper', 'scissors'];
    let computerSelectionNumber = Math.floor(Math.random() * 3);
    let computerSelectionString = threeOptions[computerSelectionNumber];
    return computerSelectionString;
} 

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

game();
/*playerRound();*/

