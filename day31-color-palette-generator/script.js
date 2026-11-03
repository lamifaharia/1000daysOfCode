// Get HTML elements
const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const message = document.getElementById("message");

// Generate a random HEX color
function generateRandomColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);

    return "#" + randomNumber.toString(16).padStart(6, "0").toUpperCase();
}

// Copy color code to clipboard
async function copyColor(color) {
    try {
        await navigator.clipboard.writeText(color);
        message.textContent = `${color} copied to clipboard!`;
    } catch (error) {
        message.textContent = `Copy unavailable. Please copy ${color} manually.`;
    }
}

// Create a color card
function createColorCard(color) {
    const card = document.createElement("div");
    card.className = "color-card";

    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = color;

    const colorCode = document.createElement("p");
    colorCode.className = "color-code";
    colorCode.textContent = color;
    colorCode.title = "Click to copy";

    colorCode.addEventListener("click", () => {
        copyColor(color);
    });

    card.append(colorBox, colorCode);

    return card;
}

// Generate five random colors
function generatePalette() {
    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();
        const colorCard = createColorCard(color);

        palette.appendChild(colorCard);
    }

    message.textContent = "New palette generated! Click a color code to copy it.";
}

// Generate button event
generateBtn.addEventListener("click", generatePalette);

// Generate a palette when the page loads
generatePalette();