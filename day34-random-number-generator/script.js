
// Get HTML elements
const minInput = document.getElementById("minNumber");
const maxInput = document.getElementById("maxNumber");
const result = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

// Store the generated number
let generatedNumber = null;

// Generate a random number
function generateRandomNumber() {
    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    // Validate empty inputs
    if (minInput.value.trim() === "" || maxInput.value.trim() === "") {
        message.textContent = "Please enter both minimum and maximum numbers.";
        result.textContent = "?";
        generatedNumber = null;
        return;
    }

    // Validate integer inputs
    if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
        message.textContent = "Please enter valid whole numbers.";
        result.textContent = "?";
        generatedNumber = null;
        return;
    }

    // Validate range
    if (min > max) {
        message.textContent = "Minimum number cannot be greater than maximum.";
        result.textContent = "?";
        generatedNumber = null;
        return;
    }

    // Generate random number within the range
    generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Display result
    result.textContent = generatedNumber;
    message.textContent = "Your random number is ready!";
}

// Copy generated number
async function copyNumber() {
    if (generatedNumber === null) {
        message.textContent = "Generate a number first!";
        return;
    }

    try {
        await navigator.clipboard.writeText(String(generatedNumber));
        message.textContent = "Number copied successfully!";
    } catch (error) {
        message.textContent = "Copy unavailable. Please copy the number manually.";
    }
}

// Button events
generateBtn.addEventListener("click", generateRandomNumber);
copyBtn.addEventListener("click", copyNumber);
