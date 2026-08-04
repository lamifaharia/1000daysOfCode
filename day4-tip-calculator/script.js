// ==========================
// Select HTML Elements
// ==========================

const billAmountInput = document.getElementById("billAmount");

const tipPercentageInput = document.getElementById("tipPercentage");

const peopleInput = document.getElementById("people");

const calculateBtn = document.getElementById("calculateBtn");

const tipAmount = document.getElementById("tipAmount");

const totalBill = document.getElementById("totalBill");

const perPerson = document.getElementById("perPerson");


// ==========================
// Button Click Event
// ==========================

calculateBtn.addEventListener("click", calculateTip);


// ==========================
// Main Function
// ==========================

function calculateTip() {

    // Get input values
    const bill = Number(billAmountInput.value);

    const tipPercent = Number(tipPercentageInput.value);

    const people = Number(peopleInput.value);

    // ==========================
    // Validation
    // ==========================

    if (
        bill <= 0 ||
        tipPercent < 0 ||
        people <= 0
    ) {

        alert("Please enter valid values.");

        return;

    }

    // ==========================
    // Tip Calculation
    // ==========================

    const tip = (bill * tipPercent) / 100;

    // ==========================
    // Total Bill
    // ==========================

    const total = bill + tip;

    // ==========================
    // Per Person
    // ==========================

    const splitAmount = total / people;

    // ==========================
    // Show Results
    // ==========================

    tipAmount.textContent =
        `$${tip.toFixed(2)}`;

    totalBill.textContent =
        `$${total.toFixed(2)}`;

    perPerson.textContent =
        `$${splitAmount.toFixed(2)}`;

}