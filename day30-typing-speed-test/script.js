
// Select HTML elements
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const textDisplay = document.getElementById("textDisplay");
const textInput = document.getElementById("textInput");
const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

// Test settings
const testDuration = 60;

let timeLeft = testDuration;
let timer = null;
let testStarted = false;
let testFinished = false;

// Store the original text
const originalText = textDisplay.textContent.trim();

// Start the typing test
function startTest() {
    if (testStarted || testFinished) return;

    testStarted = true;
    textInput.disabled = false;
    textInput.focus();

    message.textContent = "Start typing as fast as you can!";
    startBtn.disabled = true;

    // Start countdown
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `${timeLeft}s`;

        updateStats();

        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

// Calculate WPM and accuracy
function updateStats() {
    const typedText = textInput.value;

    // Count correct characters
    let correctCharacters = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === originalText[i]) {
            correctCharacters++;
        }
    }

    // Calculate errors
    const errors = typedText.length - correctCharacters;

    // Calculate elapsed time in minutes
    const elapsedTime = (testDuration - timeLeft) / 60;

    // Calculate words per minute
    const wpm = elapsedTime > 0
        ? Math.round((typedText.length / 5) / elapsedTime)
        : 0;

    // Calculate accuracy
    const accuracy = typedText.length > 0
        ? Math.round((correctCharacters / typedText.length) * 100)
        : 100;

    // Update UI
    wpmElement.textContent = wpm;
    accuracyElement.textContent = `${accuracy}%`;

    message.textContent = `Errors: ${errors}`;

    // Finish when all text is typed
    if (typedText === originalText) {
        endTest();
    }
}

// End the test
function endTest() {
    clearInterval(timer);

    testFinished = true;
    testStarted = false;

    textInput.disabled = true;
    startBtn.disabled = true;

    message.textContent =
        `Test completed! Final WPM: ${wpmElement.textContent}`;
}

// Reset the test
function resetTest() {
    clearInterval(timer);

    timeLeft = testDuration;
    testStarted = false;
    testFinished = false;

    timerElement.textContent = `${testDuration}s`;
    wpmElement.textContent = "0";
    accuracyElement.textContent = "100%";

    textInput.value = "";
    textInput.disabled = true;

    startBtn.disabled = false;

    message.textContent = "Click Start Test to begin.";
}

// Event listeners
startBtn.addEventListener("click", startTest);
resetBtn.addEventListener("click", resetTest);

textInput.addEventListener("input", updateStats);
