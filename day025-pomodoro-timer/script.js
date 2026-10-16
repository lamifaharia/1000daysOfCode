
/* Select HTML elements */
const timerDisplay = document.getElementById("timer");
const statusText = document.getElementById("status");

const focusBtn = document.getElementById("focusBtn");
const breakBtn = document.getElementById("breakBtn");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Timer settings (in seconds)
const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

// Timer variables
let timeLeft = FOCUS_TIME;
let timer = null;
let currentMode = "focus";

// Display the timer
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Start countdown
function startTimer() {
    // Prevent multiple timers from running
    if (timer !== null) {
        return;
    }

    statusText.textContent = "Timer is running...";

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        }

        if (timeLeft === 0) {
            clearInterval(timer);
            timer = null;

            statusText.textContent =
                currentMode === "focus"
                    ? "Focus session complete! Take a break 🎉"
                    : "Break complete! Ready to focus? 💪";
        }
    }, 1000);
}

// Pause countdown
function pauseTimer() {
    clearInterval(timer);
    timer = null;
    statusText.textContent = "Timer paused.";
}

// Reset current session
function resetTimer() {
    clearInterval(timer);
    timer = null;

    timeLeft = currentMode === "focus" ? FOCUS_TIME : BREAK_TIME;

    statusText.textContent =
        currentMode === "focus" ? "Time to focus!" : "Time to relax!";

    updateDisplay();
}

// Switch between focus and break
function setMode(mode) {
    clearInterval(timer);
    timer = null;

    currentMode = mode;

    timeLeft = mode === "focus" ? FOCUS_TIME : BREAK_TIME;

    focusBtn.classList.toggle("active", mode === "focus");
    breakBtn.classList.toggle("active", mode === "break");

    statusText.textContent =
        mode === "focus" ? "Time to focus!" : "Time to relax!";

    updateDisplay();
}

// Button events
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

focusBtn.addEventListener("click", () => {
    setMode("focus");
});

breakBtn.addEventListener("click", () => {
    setMode("break");
});

// Initial display
updateDisplay();