// Select elements
const choiceButtons = document.querySelectorAll(".choice");

const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");
const resultElement = document.getElementById("result");

const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");

const resetBtn = document.getElementById("resetBtn");


// Game variables
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];


// Generate computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


// Play the game
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    // Show choices
    playerChoiceElement.textContent = `You: ${playerChoice}`;
    computerChoiceElement.textContent = `Computer: ${computerChoice}`;


    // Check the result
    if (playerChoice === computerChoice) {

        resultElement.textContent = "It's a draw! 🤝";

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        playerScore++;

        playerScoreElement.textContent = playerScore;

        resultElement.textContent = "You win! 🎉";

    } else {

        computerScore++;

        computerScoreElement.textContent = computerScore;

        resultElement.textContent = "Computer wins! 🤖";
    }
}


// Add click event to choice buttons
choiceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const playerChoice = button.dataset.choice;

        playGame(playerChoice);
    });
});


// Reset the game
resetBtn.addEventListener("click", () => {

    playerScore = 0;
    computerScore = 0;

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    playerChoiceElement.textContent = "You: —";
    computerChoiceElement.textContent = "Computer: —";

    resultElement.textContent = "Make your choice!";
});