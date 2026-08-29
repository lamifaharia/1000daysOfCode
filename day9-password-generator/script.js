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

const statusElement = document.getElementById("status");


// ==========================
// Character Sets
// ==========================

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+-=[]{}";


// ==========================
// Update Password Length
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


    // Generate password
    let password = "";


    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];

    }


    // Display password
    passwordElement.value = password;

    statusElement.textContent =
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

        statusElement.textContent =
            "Generate a password first.";

        return;
    }


    try {

        await navigator.clipboard.writeText(password);

        statusElement.textContent =
            "✅ Password copied to clipboard!";

    } catch (error) {

        statusElement.textContent =
            "Unable to copy password.";

    }

});