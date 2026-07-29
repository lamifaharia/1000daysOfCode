// ==========================
// Select HTML Elements
// ==========================

const birthDateInput = document.getElementById("birthDate");

const calculateBtn = document.getElementById("calculateBtn");

const years = document.getElementById("years");

const months = document.getElementById("months");

const days = document.getElementById("days");

const totalDays = document.getElementById("totalDays");

const nextBirthday = document.getElementById("nextBirthday");

const weekday = document.getElementById("weekday");


// ==========================
// Button Click Event
// ==========================

calculateBtn.addEventListener("click", calculateAge);


// ==========================
// Main Function
// ==========================

function calculateAge() {

    // Get the value from the input
    const birthDateValue = birthDateInput.value;

    // Check if the user selected a date
    if (birthDateValue === "") {

        alert("Please select your birth date.");

        return;

    }

    // Convert input into a Date object
    const birthDate = new Date(birthDateValue);

    // Today's date
    const today = new Date();

    // Prevent future dates
    if (birthDate > today) {

        alert("Birth date cannot be in the future.");

        return;

    }

    // ------------------------
    // Calculate Years
    // ------------------------

    let ageYears = today.getFullYear() - birthDate.getFullYear();

    let ageMonths = today.getMonth() - birthDate.getMonth();

    let ageDays = today.getDate() - birthDate.getDate();


    // If days become negative
    if (ageDays < 0) {

        ageMonths--;

        // Number of days in previous month
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        ageDays += previousMonth;

    }

    // If months become negative
    if (ageMonths < 0) {

        ageYears--;

        ageMonths += 12;

    }

    // ------------------------
    // Show Result
    // ------------------------

    years.textContent = ageYears;

    months.textContent = ageMonths;

    days.textContent = ageDays;


    // ------------------------
    // Total Days Lived
    // ------------------------

    const difference = today - birthDate;

    const livedDays = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    totalDays.textContent = `Total Days: ${livedDays}`;


    // ------------------------
    // Weekday Born
    // ------------------------

    const weekdays = [

        "Sunday",

        "Monday",

        "Tuesday",

        "Wednesday",

        "Thursday",

        "Friday",

        "Saturday"

    ];

    weekday.textContent =
        `Born On: ${weekdays[birthDate.getDay()]}`;


    // ------------------------
    // Next Birthday
    // ------------------------

    let nextBirthdayDate = new Date(

        today.getFullYear(),

        birthDate.getMonth(),

        birthDate.getDate()

    );

    if (nextBirthdayDate < today) {

        nextBirthdayDate.setFullYear(
            today.getFullYear() + 1
        );

    }

    const birthdayDifference =
        nextBirthdayDate - today;

    const daysLeft = Math.ceil(

        birthdayDifference /

        (1000 * 60 * 60 * 24)

    );

    nextBirthday.textContent =
        `Days Until Next Birthday: ${daysLeft}`;

}