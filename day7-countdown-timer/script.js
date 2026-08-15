// ==========================
// Select HTML Elements
// ==========================

const timerElement = document.getElementById("timer");

const secondsInput = document.getElementById("secondsInput");

const startBtn = document.getElementById("startBtn");

const pauseBtn = document.getElementById("pauseBtn");

const resetBtn = document.getElementById("resetBtn");

const statusMessage = document.getElementById("statusMessage");


// ==========================
// Timer Variables
// ==========================

let timeLeft = 0;

let timerInterval = null;


// ==========================
// Start Timer
// ==========================

startBtn.addEventListener("click", startTimer);


function startTimer() {

    // If timer is already running, don't create another interval
    if (timerInterval !== null) {
        return;
    }

    // If there is no time left, get time from input
    if (timeLeft <= 0) {

        const inputSeconds = parseInt(secondsInput.value);

        // Validate input
        if (isNaN(inputSeconds) || inputSeconds <= 0) {

            alert("Please enter a valid number of seconds.");

            return;
        }

        timeLeft = inputSeconds;
    }


    // Update display immediately
    updateTimerDisplay();

    statusMessage.textContent = "▶️ Timer is running...";


    // Start countdown
    timerInterval = setInterval(() => {

        timeLeft--;

        updateTimerDisplay();


        // Check if timer has finished
        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            timerInterval = null;

            timeLeft = 0;

            updateTimerDisplay();

            statusMessage.textContent = "⏰ Time's up!";

        }

    }, 1000);

}


// ==========================
// Pause Timer
// ==========================

pauseBtn.addEventListener("click", pauseTimer);


function pauseTimer() {

    if (timerInterval === null) {
        return;
    }

    clearInterval(timerInterval);

    timerInterval = null;

    statusMessage.textContent = "⏸️ Timer paused";

}


// ==========================
// Reset Timer
// ==========================

resetBtn.addEventListener("click", resetTimer);


function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    timeLeft = 0;

    secondsInput.value = "";

    timerElement.textContent = "00:00";

    statusMessage.textContent = "Ready to start!";

}


// ==========================
// Update Timer Display
// ==========================

function updateTimerDisplay() {

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");

    timerElement.textContent =
        `${formattedMinutes}:${formattedSeconds}`;

}