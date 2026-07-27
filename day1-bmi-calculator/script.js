// Select all required HTML elements

const weightInput = document.getElementById("weight");

const heightInput = document.getElementById("height");

const calculateBtn = document.getElementById("calculateBtn");

const result = document.getElementById("result");

const status = document.getElementById("status");


// When button is clicked
calculateBtn.addEventListener("click", function () {

    // Get values from inputs
    const weight = Number(weightInput.value);

    const height = Number(heightInput.value);

    // Check if inputs are empty
    if (weight <= 0 || height <= 0) {

        result.textContent = "Please enter valid values.";

        status.textContent = "";

        return;

    }

    // Convert cm into meter
    const heightInMeter = height / 100;

    // BMI Formula
    const bmi = weight / (heightInMeter * heightInMeter);

    // Show BMI with 2 decimal places
    result.textContent = `Your BMI: ${bmi.toFixed(2)}`;

    // Decide BMI Category
    if (bmi < 18.5) {

        status.textContent = "Underweight";

    }

    else if (bmi < 25) {

        status.textContent = "Normal";

    }

    else if (bmi < 30) {

        status.textContent = "Overweight";

    }

    else {

        status.textContent = "Obese";

    }

});