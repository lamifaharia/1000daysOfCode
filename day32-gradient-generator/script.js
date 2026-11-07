// Get HTML elements
const colorOne = document.getElementById("colorOne");
const colorTwo = document.getElementById("colorTwo");
const direction = document.getElementById("direction");
const gradientPreview = document.getElementById("gradientPreview");
const cssCode = document.getElementById("cssCode");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

// Update gradient preview and CSS code
function updateGradient() {
    const firstColor = colorOne.value.toUpperCase();
    const secondColor = colorTwo.value.toUpperCase();
    const selectedDirection = direction.value;

    const gradient = `linear-gradient(${selectedDirection}, ${firstColor}, ${secondColor})`;

    // Update preview
    gradientPreview.style.background = gradient;

    // Update CSS output
    cssCode.textContent = `background: ${gradient};`;

    message.textContent = "";
}

// Listen for color changes
colorOne.addEventListener("input", updateGradient);
colorTwo.addEventListener("input", updateGradient);

// Listen for direction changes
direction.addEventListener("change", updateGradient);

// Copy CSS code
copyBtn.addEventListener("click", async () => {
    const css = cssCode.textContent;

    try {
        await navigator.clipboard.writeText(css);
        message.textContent = "CSS code copied successfully!";
    } catch (error) {
        message.textContent = "Copy unavailable. Please copy the CSS manually.";
    }
});

// Initialize gradient
updateGradient();