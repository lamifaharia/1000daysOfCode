
// Get HTML elements
const emojiDisplay = document.getElementById("emojiDisplay");
const emojiName = document.getElementById("emojiName");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

// Emoji collection
const emojis = [
    { emoji: "😊", name: "Smiling Face" },
    { emoji: "😂", name: "Face with Tears of Joy" },
    { emoji: "😍", name: "Heart Eyes" },
    { emoji: "🥳", name: "Party Face" },
    { emoji: "😎", name: "Cool Face" },
    { emoji: "🤩", name: "Star-Struck Face" },
    { emoji: "😭", name: "Crying Face" },
    { emoji: "🥰", name: "Smiling Face with Hearts" },
    { emoji: "🤔", name: "Thinking Face" },
    { emoji: "😴", name: "Sleeping Face" },
    { emoji: "🤗", name: "Hugging Face" },
    { emoji: "😇", name: "Smiling Face with Halo" },
    { emoji: "🔥", name: "Fire" },
    { emoji: "❤️", name: "Red Heart" },
    { emoji: "🌸", name: "Cherry Blossom" },
    { emoji: "🌈", name: "Rainbow" },
    { emoji: "⭐", name: "Star" },
    { emoji: "🦋", name: "Butterfly" },
    { emoji: "🐱", name: "Cat Face" },
    { emoji: "🐼", name: "Panda" },
    { emoji: "🍕", name: "Pizza" },
    { emoji: "🍓", name: "Strawberry" },
    { emoji: "🎯", name: "Bullseye" },
    { emoji: "🚀", name: "Rocket" },
    { emoji: "🎉", name: "Party Popper" }
];

// Store current emoji
let currentEmoji = emojis[0];

// Generate a random emoji
function generateRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);

    currentEmoji = emojis[randomIndex];

    // Update emoji and name
    emojiDisplay.textContent = currentEmoji.emoji;
    emojiName.textContent = currentEmoji.name;

    message.textContent = "Enjoy your new emoji!";
}

// Copy emoji to clipboard
async function copyEmoji() {
    try {
        await navigator.clipboard.writeText(currentEmoji.emoji);

        message.textContent = "Emoji copied successfully!";
    } catch (error) {
        message.textContent = "Copy unavailable. Please copy the emoji manually.";
    }
}

// Button events
generateBtn.addEventListener("click", generateRandomEmoji);
copyBtn.addEventListener("click", copyEmoji);
