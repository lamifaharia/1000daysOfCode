// Select elements
const questionNumber = document.getElementById("questionNumber");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextBtn = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");


// Quiz questions
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: 0
    },

    {
        question: "Which language is used to style a webpage?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correctAnswer: 1
    },

    {
        question: "Which language makes webpages interactive?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correctAnswer: 2
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        answers: [
            ".",
            "#",
            "*",
            "@"
        ],
        correctAnswer: 1
    },

    {
        question: "Which method is used to select an element by its ID?",
        answers: [
            "getElementById()",
            "getElementByClass()",
            "selectById()",
            "queryById()"
        ],
        correctAnswer: 0
    }
];


// Quiz variables
let currentQuestion = 0;
let score = 0;
let answered = false;


// Show question
function showQuestion() {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionElement.textContent = current.question;

    answerButtons.innerHTML = "";

    answered = false;


    // Create answer buttons
    current.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer-btn");

        button.addEventListener("click", () => {
            checkAnswer(button, index);
        });

        answerButtons.appendChild(button);
    });


    // Hide next button until an answer is selected
    nextBtn.style.display = "none";
}


// Check answer
function checkAnswer(button, selectedAnswer) {

    // Prevent answering twice
    if (answered) {
        return;
    }

    answered = true;

    const correctAnswer = questions[currentQuestion].correctAnswer;

    const allButtons =
        document.querySelectorAll(".answer-btn");


    // Show correct answer
    allButtons[correctAnswer].classList.add("correct");


    if (selectedAnswer === correctAnswer) {

        score++;

        scoreElement.textContent = `Score: ${score}`;

    } else {

        button.classList.add("wrong");
    }


    // Show next button
    nextBtn.style.display = "block";
}


// Next question
nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();
    }
});


// Show final result
function showResult() {

    questionNumber.textContent = "Quiz Complete!";

    questionElement.textContent =
        `You scored ${score} out of ${questions.length}!`;

    answerButtons.innerHTML = "";

    nextBtn.style.display = "none";
}


// Start quiz
showQuestion();