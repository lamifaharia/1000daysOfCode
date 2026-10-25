// Select HTML elements
const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const message = document.getElementById("message");

// Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}?";

// Update password length display
lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

// Generate password
function generatePassword() {
    const length = Number(lengthInput.value);

    // Build the available character set
    let availableChars = "";
    const requiredChars = [];

    if (uppercaseCheckbox.checked) {
        availableChars += uppercaseChars;
        requiredChars.push(uppercaseChars);
    }

    if (lowercaseCheckbox.checked) {
        availableChars += lowercaseChars;
        requiredChars.push(lowercaseChars);
    }

    if (numbersCheckbox.checked) {
        availableChars += numberChars;
        requiredChars.push(numberChars);
    }

    if (symbolsCheckbox.checked) {
        availableChars += symbolChars;
        requiredChars.push(symbolChars);
    }

    // Validate options
    if (availableChars === "") {
        message.textContent = "Please select at least one character type.";
        passwordInput.value = "";
        return;
    }

    if (requiredChars.length > length) {
        message.textContent =
            "Increase the password length or select fewer character types.";
        passwordInput.value = "";
        return;
    }

    // Ensure the password contains each selected character type
    const passwordChars = requiredChars.map((charSet) => {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        return charSet[randomIndex];
    });

    // Fill the remaining positions
    while (passwordChars.length < length) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        passwordChars.push(availableChars[randomIndex]);
    }

    // Shuffle the characters
    for (let i = passwordChars.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [passwordChars[i], passwordChars[randomIndex]] =
            [passwordChars[randomIndex], passwordChars[i]];
    }

    // Display the password
    passwordInput.value = passwordChars.join("");
    message.textContent = "";
    copyBtn.textContent = "Copy";
}

// Copy password to clipboard
async function copyPassword() {
    const password = passwordInput.value;

    if (!password) {
        message.textContent = "Generate a password first.";
        return;
    }

    try {
        await navigator.clipboard.writeText(password);
        message.textContent = "Password copied successfully!";
        message.style.color = "#15803d";
        copyBtn.textContent = "Copied!";
    } catch (error) {
        message.textContent = "Could not copy. Please copy the password manually.";
        message.style.color = "#dc2626";
    }
}

// Button events
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);