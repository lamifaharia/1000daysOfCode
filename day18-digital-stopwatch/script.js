// Select elements
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");


// Stopwatch variables
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;


// Format time with two digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


// Update the display
function updateDisplay() {
    display.textContent =
        `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}


// Start stopwatch
function startStopwatch() {

    // Prevent multiple timers
    if (timer !== null) {
        return;
    }

    timer = setInterval(() => {

        seconds++;

        // 60 seconds = 1 minute
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        // 60 minutes = 1 hour
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);
}


// Pause stopwatch
function pauseStopwatch() {

    clearInterval(timer);

    timer = null;
}


// Reset stopwatch
function resetStopwatch() {

    clearInterval(timer);

    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
}


// Button events
startBtn.addEventListener("click", startStopwatch);

pauseBtn.addEventListener("click", pauseStopwatch);

resetBtn.addEventListener("click", resetStopwatch);