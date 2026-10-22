
/* Select HTML elements */
const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// Store jokes in an array
const jokes = [
    {
        question: "Why don't scientists trust atoms?",
        answer: "Because they make up everything!"
    },
    {
        question: "Why did the computer go to the doctor?",
        answer: "Because it had a virus!"
    },
    {
        question: "What do you call a fake noodle?",
        answer: "An impasta!"
    },
    {
        question: "Why was the math book sad?",
        answer: "Because it had too many problems!"
    },
    {
        question: "What do you call cheese that isn't yours?",
        answer: "Nacho cheese!"
    },
    {
        question: "Why did the bicycle fall over?",
        answer: "Because it was two-tired!"
    },
    {
        question: "What kind of tree fits in your hand?",
        answer: "A palm tree!"
    },
    {
        question: "Why did the developer go broke?",
        answer: "Because they used up all their cache!"
    }
];

// Generate a random joke
function generateJoke() {
    // Pick a random index
    const randomIndex = Math.floor(Math.random() * jokes.length);

    // Get the selected joke
    const randomJoke = jokes[randomIndex];

    // Display the question and answer
    jokeElement.textContent =
        `${randomJoke.question} ${randomJoke.answer}`;
}

// Handle button click
jokeBtn.addEventListener("click", generateJoke);
