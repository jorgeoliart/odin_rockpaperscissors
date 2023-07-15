// Function for computer to generate a random option
function getComputerChoice() {
    let threeOptions = ['rock', 'paper', 'scissors'];
    let computerSelectionNumber = Math.floor(Math.random() * 3);
    let computerSelectionString = threeOptions[computerSelectionNumer];
    return computerSelectionString;
}

// Function that runs the game, with no arguments
function game() {
    // Declare variables that track the # of computer and player wins, and the winner of the whole game
    let playerWins = 0;
    let computerWins = 0;
    let gameWinner = ""; // empty string variable

    // Add event listeners for buttons + play round on click + track and end game
    const buttons = document.querySelectorAll('.game-button'); // Select the three buttons and create variable
    buttons.forEach((button) => { // Create a "loop" for each of the selected buttons
        button.addEventListener ('click', () => { // add an event listener to each of the selected buttons, by click
            const playerChoice = button.id; // declare player choice variable and assign it the clicked button's id
            const computerChoice = getComputerChoice(); // declare computer choice variable and assign it the result from the corresponding function
            roundWinText.textContent =(playRound(playerChoice, computerChoice)); // display text that is the result of a round of play
            playerWinsTrack.textContent = "Player wins: " + playerWins;
            computerWinsTrack.textContent = "Computer wins: " + computerWins;
        })
    })

    // function to play each round and determine winner of it
    function playRound(playerChoice, computerChoice) {
        // Declare the string variables for each possible result and result message
        let tie = "It's a tie! You selected " + playerChoice + " and the computer selected " + computerChoice + ".";
        let paperBeatRockWin = "You fuckin win! You selected " + playerChoice + " and the damn computer selected " + computerChoice + ".";
        let paperBeatRockLoss = "Fuck! You lost! You selected " + playerChoice + " and the mutherfuckin machine selected " + computerChoice + ".";
        let rockBeatScissorsWin = "You are the fuckin rock master! You selected " + playerChoice + " and your sorry asss rival selected " + computerChoice + ".";
        let rockBeatScissorsLoss = "You are a fuckin loser! You selected " + playerChoice + " and the pc selected " + computerChoice + ".";
        let scissorsBeatPaperWin = "You're the man! You selected " + playerChoice + " and this piece of shit machine selected " + computerChoice + ".";
        let scissorsBeatPaperLoss = "Shame! You selected " + playerChoice + " while the machine selected " + computerChoice + ".";

        // Define the conditions for each pairing between choices
        if (playerChoice === computerChoice) {
            return tie;
        } else if ((playerChoice === "paper") && (computerChoice === "rock")) {
            return paperBeatRockWin;
        } else if ((playerChoice === "rock") && (computerChoice === "paper")) {
            return paperBeatRockLoss;
        } else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
            return rockBeatScissorsWin;
        } else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
            return rockBeatScissorsLoss;
        } else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
            return scissorsBeatPaperWin;
        } else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
            return scissorsBeatPaperLoss;
        }
    }

    // create div DOM for all results
    const container = document.querySelector("#container"); // declare variable to select the container div
    const resultsDiv = document.createElement("div"); // create new div and name it as a variable
    resultsDiv.style.marginTop = "20x"; // add style to this div (margin-top)
    container.appendChild(resultsDiv); // append newly created div

    // create text on DOM to track number of player wins
    const playerWinsTrack = document.createElement("p");
    playerWinsTrack.style.color = "blue";
    playerWinsTrack.textContent = "Player wins: " + playerWins;
    resultsDiv.appendChild(playerWinsTrack);

    // create text on DOM to track number of computer wins
    const computerWinsTrack = document.createElement("p");
    computerWinsTrack.style.color = "green";
    computerWinsTrack.textContent = "Computer wins: " + computerWins;
    resultsDiv.appendChild(computerWinsTrack);

    // create text on DOM to display who wins a round. div is empty because it will only be populated when the function is run.
    const roundWinText = document.createElement("p");
    roundWinText.style.color = "black";
    resultsDiv.appendChild(roundWinText);

    // create text on DOM to display who wins the whole game
    const gameWinText = document.createElement("p");
    gameWinText.style.color = "orange";
    gameWinText.textContent = gameWinner; // this variable vas declared globally and has values assigned to in the function "endGame"
    resultsDiv.appendChild(gameWinText);





}