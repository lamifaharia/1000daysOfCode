
/* Select HTML elements */
const textInput = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrContainer");
const downloadBtn = document.getElementById("downloadBtn");
const message = document.getElementById("message");

// Generate QR code
function generateQRCode() {
    const text = textInput.value.trim();

    // Validate input
    if (text === "") {
        message.textContent = "Please enter some text or a URL.";
        qrContainer.innerHTML = "";
        downloadBtn.hidden = true;
        return;
    }

    // Clear previous QR code and messages
    qrContainer.innerHTML = "";
    message.textContent = "";
    downloadBtn.hidden = true;

    // Create new QR code
    new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Allow the library to render the QR code
    setTimeout(() => {
        const qrImage = qrContainer.querySelector("img");
        const qrCanvas = qrContainer.querySelector("canvas");

        let imageUrl = "";

        if (qrImage && qrImage.src) {
            imageUrl = qrImage.src;
        } else if (qrCanvas) {
            imageUrl = qrCanvas.toDataURL("image/png");
        }

        if (imageUrl) {
            downloadBtn.href = imageUrl;
            downloadBtn.download = "qr-code.png";
            downloadBtn.hidden = false;
        } else {
            message.textContent = "Could not create the download. Try again.";
        }
    }, 100);
}

// Generate button event
generateBtn.addEventListener("click", generateQRCode);

// Allow Enter? Textarea supports multiple lines, so use the button.
