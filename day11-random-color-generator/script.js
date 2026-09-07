// ==========================
// Select HTML Elements
// ==========================

const generateBtn = document.getElementById("generateBtn");

const colorCode = document.getElementById("colorCode");

const colorBox = document.querySelector(".color-box");

const message = document.getElementById("message");


// ==========================
// Generate Random Color
// ==========================

function generateRandomColor() {

    const characters = "0123456789ABCDEF";

    let color = "#";


    for (let i = 0; i < 6; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        color += characters[randomIndex];

    }


    // Change page background
    document.body.style.background = color;


    // Change color box
    colorBox.style.background = color;


    // Display color code
    colorCode.textContent = color;


    // Update message
    message.textContent =
        "New color generated!";
}


// ==========================
// Button Event
// ==========================

generateBtn.addEventListener(
    "click",
    generateRandomColor
);