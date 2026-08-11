// ==========================
// Select HTML Elements
// ==========================

const timeElement = document.getElementById("time");

const dateElement = document.getElementById("date");


// ==========================
// Function to Update Clock
// ==========================

function updateClock() {

    // Get the current date and time
    const now = new Date();


    // ==========================
    // Get Time
    // ==========================

    let hours = now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();


    // ==========================
    // AM / PM
    // ==========================

    const period = hours >= 12 ? "PM" : "AM";


    // ==========================
    // Convert 24-hour to 12-hour
    // ==========================

    hours = hours % 12;

    // 0 should become 12
    if (hours === 0) {

        hours = 12;

    }


    // ==========================
    // Add Leading Zeros
    // ==========================

    const formattedHours =
        String(hours).padStart(2, "0");

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");


    // ==========================
    // Display Time
    // ==========================

    timeElement.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;


    // ==========================
    // Display Date
    // ==========================

    const dateOptions = {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric"

    };


    dateElement.textContent =
        now.toLocaleDateString("en-US", dateOptions);

}


// ==========================
// Run Immediately
// ==========================

updateClock();


// ==========================
// Update Every Second
// ==========================

setInterval(updateClock, 1000);