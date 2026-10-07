// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("[data-value]");
const clearBtn = document.getElementById("clearBtn");
const equalsBtn = document.getElementById("equalsBtn");


// Store the current calculation
let currentInput = "";


// Add button value to display
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const value = button.dataset.value;

        currentInput += value;

        display.value = currentInput;
    });
});


// Clear calculator
clearBtn.addEventListener("click", () => {

    currentInput = "";

    display.value = "0";
});


// Calculate result
equalsBtn.addEventListener("click", () => {

    if (currentInput === "") {
        return;
    }

    try {

        const result = eval(currentInput);

        display.value = result;

        currentInput = result.toString();

    } catch (error) {

        display.value = "Error";

        currentInput = "";
    }
});