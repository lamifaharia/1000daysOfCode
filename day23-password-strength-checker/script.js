
/* Select HTML elements */
const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

// Select requirement elements
const lengthCheck = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("number");
const specialCheck = document.getElementById("special");

// Check password strength whenever the user types
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    // Check each password requirement
    const checks = [
        password.length >= 8,
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /[0-9]/.test(password),
        /[^A-Za-z0-9]/.test(password)
    ];

    const elements = [
        lengthCheck,
        uppercaseCheck,
        lowercaseCheck,
        numberCheck,
        specialCheck
    ];

    const labels = [
        "At least 8 characters",
        "Contains uppercase letter",
        "Contains lowercase letter",
        "Contains a number",
        "Contains special character"
    ];

    // Update requirement indicators
    elements.forEach((element, index) => {
        element.textContent =
            `${checks[index] ? "✅" : "❌"} ${labels[index]}`;
    });

    // Count satisfied requirements
    const score = checks.filter(Boolean).length;

    // Reset when the input is empty
    if (password === "") {
        strengthBar.style.width = "0%";
        strengthBar.style.backgroundColor = "transparent";
        strengthText.textContent = "Password strength";
        return;
    }

    // Update strength bar
    strengthBar.style.width = `${score * 20}%`;

    // Show strength level
    if (score <= 2) {
        strengthBar.style.backgroundColor = "#ef4444";
        strengthText.textContent = "Weak Password";
    } else if (score <= 4) {
        strengthBar.style.backgroundColor = "#f59e0b";
        strengthText.textContent = "Medium Password";
    } else {
        strengthBar.style.backgroundColor = "#22c55e";
        strengthText.textContent = "Strong Password";
    }
});

// Show or hide password
toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleBtn.textContent = "Show";
    }
});