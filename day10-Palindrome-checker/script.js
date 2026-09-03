// ==========================
// Select HTML Elements
// ==========================

const textInput = document.getElementById("textInput");

const checkBtn = document.getElementById("checkBtn");

const result = document.getElementById("result");


// ==========================
// Check Palindrome
// ==========================

function checkPalindrome() {

    const text = textInput.value.trim();


    // Check if input is empty
    if (text === "") {

        result.textContent = "Please enter a word or number.";

        return;
    }


    // Convert text to lowercase
    const lowerText = text.toLowerCase();


    // Reverse the text
    const reversedText =
        lowerText.split("").reverse().join("");


    // Compare original and reversed text
    if (lowerText === reversedText) {

        result.textContent =
            `"${text}" is a palindrome!`;

    } else {

        result.textContent =
            `"${text}" is not a palindrome.`;

    }

}


// ==========================
// Check Button
// ==========================

checkBtn.addEventListener(
    "click",
    checkPalindrome
);


// ==========================
// Enter Key
// ==========================

textInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        checkPalindrome();

    }

});