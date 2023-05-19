function getComputerChoice() {
    let threeOptions = ['Rock', 'Paper', 'Scissor'];
    let computerSelectionNumber = Math.floor(Math.random() * 3);
    let computerSelectionString = threeOptions[computerSelectionNumber];
    return computerSelectionString;
} 

