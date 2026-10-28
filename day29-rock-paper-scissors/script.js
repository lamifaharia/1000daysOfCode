// Select HTML elements
const choiceButtons = document.querySelectorAll(".choice-btn");
const userScoreElement = document.getElementById("userScore");
const computerScoreElement = document.getElementById("computerScore");
const resultElement = document.getElementById("result");
const choicesElement = document.getElementById("choices");
const resetBtn = document.getElementById("resetBtn");

// Available choices
const choices = ["rock", "paper", "scissors"];

// Track scores
let userScore = 0;
let computerScore = 0;

// Generate computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Play a round
function playGame(userChoice) {
    const computerChoice = getComputerChoice();

    // Display both choices
    choicesElement.textContent =
        `Your choice: ${userChoice} | Computer: ${computerChoice}`;

    // Determine the winner
    if (userChoice === computerChoice) {
        resultElement.textContent = "It's a draw! 🤝";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        resultElement.textContent = "You win this round! 🎉";
    } else {
        computerScore++;
        resultElement.textContent = "Computer wins this round! 🤖";
    }

    // Update scoreboard
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}

// Listen for choice button clicks
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        playGame(userChoice);
    });
});

// Reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;

    userScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;

    resultElement.textContent = "Make your first move!";
    choicesElement.textContent = "Your choice: - | Computer: -";
}

// Reset button event
resetBtn.addEventListener("click", resetGame);