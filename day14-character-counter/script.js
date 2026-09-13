// ==========================
// Select HTML Elements
// ==========================

const textInput = document.getElementById("textInput");

const countElement = document.getElementById("count");

const message = document.getElementById("message");


// ==========================
// Update Character Count
// ==========================

function updateCharacterCount() {

    const currentLength = textInput.value.length;

    const maxLength = textInput.maxLength;


    // Update count
    countElement.textContent = currentLength;


    // Update message
    if (currentLength === maxLength) {

        message.textContent =
            "You have reached the character limit!";

    } else {

        message.textContent =
            `You can type ${maxLength - currentLength} more characters.`;

    }

}


// ==========================
// Listen for Typing
// ==========================

textInput.addEventListener(
    "input",
    updateCharacterCount
);