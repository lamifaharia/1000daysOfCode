// ==========================
// Select HTML Elements
// ==========================

const passwordElement = document.getElementById("password");

const copyBtn = document.getElementById("copyBtn");

const lengthInput = document.getElementById("length");

const lengthValue = document.getElementById("lengthValue");

const numbersCheckbox = document.getElementById("numbers");

const symbolsCheckbox = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");

const statusMessage = document.getElementById("status");


// ==========================
// Character Sets
// ==========================

const lowercase =
    "abcdefghijklmnopqrstuvwxyz";

const uppercase =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers =
    "0123456789";

const symbols =
    "!@#$%^&*()_+-=[]{}";


// ==========================
// Update Length Display
// ==========================

lengthInput.addEventListener("input", () => {

    lengthValue.textContent = lengthInput.value;

});


// ==========================
// Generate Password
// ==========================

function generatePassword() {

    const length = Number(lengthInput.value);

    let characters = lowercase + uppercase;


    // Add numbers if selected
    if (numbersCheckbox.checked) {

        characters += numbers;

    }


    // Add symbols if selected
    if (symbolsCheckbox.checked) {

        characters += symbols;

    }


    // Create password
    let password = "";


    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];

    }


    // Display password
    passwordElement.value = password;

    statusMessage.textContent =
        "Password generated successfully!";

}


// ==========================
// Generate Button
// ==========================

generateBtn.addEventListener(
    "click",
    generatePassword
);


// ==========================
// Copy Password
// ==========================

copyBtn.addEventListener("click", async () => {

    const password = passwordElement.value;


    if (password === "") {

        statusMessage.textContent =
            "Generate a password first.";

        return;
    }


    try {

        await navigator.clipboard.writeText(password);

        statusMessage.textContent =
            "📋 Password copied to clipboard!";

    } catch (error) {

        statusMessage.textContent =
            "Unable to copy password.";

    }

});