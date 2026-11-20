
// Get HTML elements
const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

const upperBtn = document.getElementById("upperBtn");
const lowerBtn = document.getElementById("lowerBtn");
const titleBtn = document.getElementById("titleBtn");
const sentenceBtn = document.getElementById("sentenceBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const message = document.getElementById("message");

// Update character and word counts
function updateCounts() {
    const text = textInput.value;

    charCount.textContent = text.length;

    const words = text.trim() === ""
        ? []
        : text.trim().split(/\s+/);

    wordCount.textContent = words.length;
}

// Display converted text
function displayText(convertedText) {
    if (textInput.value.trim() === "") {
        message.textContent = "Please enter some text first!";
        return;
    }

    output.textContent = convertedText;
    message.textContent = "Text converted successfully!";
}

// Convert to uppercase
upperBtn.addEventListener("click", () => {
    displayText(textInput.value.toUpperCase());
});

// Convert to lowercase
lowerBtn.addEventListener("click", () => {
    displayText(textInput.value.toLowerCase());
});

// Convert to title case
titleBtn.addEventListener("click", () => {
    const convertedText = textInput.value.toLowerCase().replace(
        /\b\w/g,
        letter => letter.toUpperCase()
    );

    displayText(convertedText);
});

// Convert to sentence case
sentenceBtn.addEventListener("click", () => {
    const convertedText = textInput.value
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, letter => letter.toUpperCase());

    displayText(convertedText);
});

// Clear all text
clearBtn.addEventListener("click", () => {
    textInput.value = "";
    output.textContent = "Your converted text will appear here...";
    message.textContent = "Text cleared!";

    updateCounts();
});

// Copy converted text
copyBtn.addEventListener("click", async () => {
    const convertedText = output.textContent;

    if (
        !convertedText ||
        convertedText === "Your converted text will appear here..."
    ) {
        message.textContent = "Convert some text before copying!";
        return;
    }

    try {
        await navigator.clipboard.writeText(convertedText);
        message.textContent = "Text copied successfully!";
    } catch (error) {
        message.textContent = "Copy unavailable. Please copy manually.";
    }
});

// Update counts while typing
textInput.addEventListener("input", updateCounts);

// Initial count
updateCounts();
