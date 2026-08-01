// ==========================
// Select HTML Elements
// ==========================

const temperatureInput = document.getElementById("temperature");

const convertBtn = document.getElementById("convertBtn");

const result = document.getElementById("result");


// ==========================
// Button Click Event
// ==========================

convertBtn.addEventListener("click", convertTemperature);


// ==========================
// Main Function
// ==========================

function convertTemperature() {

    // Get the user's input
    const temperature = Number(temperatureInput.value);

    // Get the selected radio button
    const conversionType = document.querySelector(
        'input[name="conversion"]:checked'
    ).value;

    // Check if the input is valid
    if (temperatureInput.value === "") {

        result.textContent = "Please enter a temperature.";

        return;

    }

    let convertedTemperature;

    // ==========================
    // Celsius ➜ Fahrenheit
    // ==========================

    if (conversionType === "cToF") {

        convertedTemperature = (temperature * 9 / 5) + 32;

        result.textContent =
            `${convertedTemperature.toFixed(2)} °F`;

    }

    // ==========================
    // Fahrenheit ➜ Celsius
    // ==========================

    else {

        convertedTemperature = (temperature - 32) * 5 / 9;

        result.textContent =
            `${convertedTemperature.toFixed(2)} °C`;

    }

}