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
    let roundWinner = ""; // empty string variable

    // Add event listeners for buttons + play round on click + track and end game
    const buttons = document.querySelectorAll('.game-button'); // Select the three buttons and create variable
    buttons.forEach((button) => { // Create a "loop" for each of the selected buttons
        button.addEventListener ('click', () => { // add an event listener to each of the selected buttons, by click
            const playerChoice = button.id; // declare player choice variable and assign it the clicked button's id
            const computerChoice = getComputerChoice(); // declare computer choice variable and assign it the result from the corresponding function
        })
    })

    // function to play each round and determine winner of it
    function playRound(playerChoice, computerChoice) {
        
    }

    
}