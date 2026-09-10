// ==========================
// Select HTML Elements
// ==========================

const counterElement = document.getElementById("counter");

const decreaseBtn = document.getElementById("decreaseBtn");

const resetBtn = document.getElementById("resetBtn");

const increaseBtn = document.getElementById("increaseBtn");

const message = document.getElementById("message");


// ==========================
// Counter Value
// ==========================

let count = 0;


// ==========================
// Update Counter
// ==========================

function updateCounter() {

    counterElement.textContent = count;

    message.textContent =
        `Current value: ${count}`;
}


// ==========================
// Increase Counter
// ==========================

increaseBtn.addEventListener("click", () => {

    count++;

    updateCounter();

});


// ==========================
// Decrease Counter
// ==========================

decreaseBtn.addEventListener("click", () => {

    count--;

    updateCounter();

});


// ==========================
// Reset Counter
// ==========================

resetBtn.addEventListener("click", () => {

    count = 0;

    updateCounter();

});