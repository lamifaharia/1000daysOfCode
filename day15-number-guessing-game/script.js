// ==========================
// Select HTML Elements
// ==========================

const guessInput = document.getElementById("guessInput");

const guessBtn = document.getElementById("guessBtn");

const result = document.getElementById("result");

const attemptsElement = document.getElementById("attempts");

const resetBtn = document.getElementById("resetBtn");


// ==========================
// Game Variables
// ==========================

let secretNumber;

let attempts;


// ==========================
// Start New Game
// ==========================

function startGame() {

    secretNumber =
        Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    guessInput.value = "";

    result.textContent = "Start guessing!";

    attemptsElement.textContent = "Attempts: 0";

}


// ==========================
// Check Guess
// ==========================

function checkGuess() {

    const guess = Number(guessInput.value);


    // Check empty input
    if (guessInput.value === "") {

        result.textContent =
            "Please enter a number.";

        return;
    }


    // Check range
    if (guess < 1 || guess > 100) {

        result.textContent =
            "Please enter a number between 1 and 100.";

        return;
    }


    // Increase attempts
    attempts++;

    attemptsElement.textContent =
        `Attempts: ${attempts}`;


    // Check the guess
    if (guess === secretNumber) {

        result.textContent =
            "🎉 Correct! You guessed the number!";

    } else if (guess > secretNumber) {

        result.textContent =
            "Too high! ⬆️ Try again.";

    } else {

        result.textContent =
            "Too low! ⬇️ Try again.";

    }

}


// ==========================
// Button Events
// ==========================

guessBtn.addEventListener(
    "click",
    checkGuess
);


resetBtn.addEventListener(
    "click",
    startGame
);


// ==========================
// Enter Key
// ==========================

guessInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        checkGuess();

    }

});


// ==========================
// Start Game
// ==========================

startGame();