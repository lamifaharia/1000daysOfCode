
// Get HTML elements
const letterDisplay = document.getElementById("letterDisplay");
const letterName = document.getElementById("letterName");
const letterType = document.getElementById("letterType");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

// Alphabet collections
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const vowels = ["A", "E", "I", "O", "U"];

const consonants = alphabet.filter(letter => !vowels.includes(letter));

// Store current letter
let currentLetter = "A";

// Generate a random letter
function generateRandomLetter() {
    let availableLetters = [];

    // Select letters based on user choice
    switch (letterType.value) {
        case "uppercase":
            availableLetters = alphabet;
            break;

        case "lowercase":
            availableLetters = alphabet.map(letter => letter.toLowerCase());
            break;

        case "vowels":
            availableLetters = vowels;
            break;

        case "consonants":
            availableLetters = consonants;
            break;

        default:
            availableLetters = alphabet;
    }

    // Generate random letter
    const randomIndex = Math.floor(
        Math.random() * availableLetters.length
    );

    currentLetter = availableLetters[randomIndex];

    // Update display
    letterDisplay.textContent = currentLetter;
    letterName.textContent = `Your Letter: ${currentLetter}`;

    message.textContent = "New letter generated successfully!";
}

// Copy current letter
async function copyLetter() {
    try {
        await navigator.clipboard.writeText(currentLetter);
        message.textContent = "Letter copied successfully!";
    } catch (error) {
        message.textContent = "Copy unavailable. Please copy manually.";
    }
}

// Button events
generateBtn.addEventListener("click", generateRandomLetter);
copyBtn.addEventListener("click", copyLetter);

// Update letter when selection changes
letterType.addEventListener("change", generateRandomLetter);
