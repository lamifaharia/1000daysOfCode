
// Get HTML elements
const textInput = document.getElementById("textInput");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const charNoSpaceCount = document.getElementById("charNoSpaceCount");
const sentenceCount = document.getElementById("sentenceCount");
const paragraphCount = document.getElementById("paragraphCount");
const readingTime = document.getElementById("readingTime");

const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");

// Update all statistics
function updateStatistics() {
    const text = textInput.value;

    // Word count
    const words = text.trim() === ""
        ? []
        : text.trim().split(/\s+/);

    wordCount.textContent = words.length;

    // Character count
    charCount.textContent = text.length;

    // Character count without spaces
    charNoSpaceCount.textContent = text.replace(/\s/g, "").length;

    // Sentence count
    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [];

    sentenceCount.textContent = sentences.filter(
        sentence => sentence.trim() !== ""
    ).length;

    // Paragraph count
    const paragraphs = text
        .trim()
        .split(/\n\s*\n/)
        .filter(paragraph => paragraph.trim() !== "");

    paragraphCount.textContent = paragraphs.length;

    // Estimated reading time (average 200 words per minute)
    const minutes = words.length / 200;

    readingTime.textContent = words.length === 0
        ? "0 min"
        : `${Math.max(1, Math.ceil(minutes))} min`;
}

// Copy text
async function copyText() {
    const text = textInput.value;

    if (text.trim() === "") {
        message.textContent = "Please enter some text first!";
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
        message.textContent = "Text copied successfully!";
    } catch (error) {
        message.textContent = "Copy unavailable. Please copy manually.";
    }
}

// Clear text
function clearText() {
    textInput.value = "";

    updateStatistics();

    message.textContent = "All text cleared!";
}

// Event listeners
textInput.addEventListener("input", updateStatistics);

copyBtn.addEventListener("click", copyText);

clearBtn.addEventListener("click", clearText);

// Initial statistics
updateStatistics();
