// ==========================
// Select HTML Elements
// ==========================

const textInput = document.getElementById("textInput");

const characterCount = document.getElementById("characterCount");

const remainingCount = document.getElementById("remainingCount");

const statusMessage = document.getElementById("statusMessage");


// ==========================
// Character Limit
// ==========================

const maxCharacters = 200;


// ==========================
// Input Event
// ==========================

textInput.addEventListener("input", updateCounter);


// ==========================
// Main Function
// ==========================

function updateCounter() {

    // Get the text entered by the user
    const text = textInput.value;

    // Count the characters
    const currentCharacters = text.length;

    // Calculate remaining characters
    const remainingCharacters =
        maxCharacters - currentCharacters;


    // ==========================
    // Update Character Count
    // ==========================

    characterCount.textContent =
        `${currentCharacters} / ${maxCharacters}`;


    // ==========================
    // Update Remaining Count
    // ==========================

    remainingCount.textContent =
        remainingCharacters;


    // ==========================
    // Update Status
    // ==========================

    if (remainingCharacters === 0) {

        statusMessage.textContent =
            "⚠️ Character limit reached!";

    }

    else if (remainingCharacters <= 20) {

        statusMessage.textContent =
            "⚠️ Almost at the limit!";

    }

    else {

        statusMessage.textContent =
            "✅ You can still write...";

    }

}