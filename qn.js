// Define career categories for evaluation
const careerCategories = {
    "science": 0,
    "arts": 0,
    "business": 0,
    "technology": 0
};

// Define questions and options with scores for evaluation
const questions = [
    {
        question: "What is your favorite subject?",
        options: [
            { text: "Mathematics", scores: { "science": 2, "technology": 2 } },
            { text: "Science", scores: { "science": 3 } },
            { text: "Literature", scores: { "arts": 3 } },
            { text: "Art", scores: { "arts": 2 } }
        ]
    },
    {
        question: "Which skill do you excel at?",
        options: [
            { text: "Problem-solving", scores: { "science": 3, "technology": 2 } },
            { text: "Communication", scores: { "business": 2 } },
            { text: "Creativity", scores: { "arts": 3 } },
            { text: "Leadership", scores: { "business": 2 } }
        ]
    },
    {
        question: "What kind of work environment do you prefer?",
        options: [
            { text: "Office", scores: { "business": 3 } },
            { text: "Outdoor", scores: { "arts": 2 } },
            { text: "Remote", scores: { "technology": 3 } },
            { text: "In a team", scores: { "business": 2, "technology": 1 } }
        ]
    },
    {
        question: "What motivates you the most?",
        options: [
            { text: "Learning", scores: { "science": 2, "technology": 2 } },
            { text: "Helping others", scores: { "arts": 3 } },
            { text: "Innovation", scores: { "technology": 3 } },
            { text: "Challenges", scores: { "business": 2, "technology": 2 } }
        ]
    }
];

// Variables to track the current question and user responses
let currentQuestionIndex = 0;
let userResponses = [];  // Array to store user-selected scores

// HTML elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.querySelector('.left-arrow');

// Function to load the current question and its options
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    // Clear existing options
    optionsContainer.innerHTML = '';

    // Create buttons for each option
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option-btn');
        button.setAttribute('data-index', index);

        // Add click event to capture selected option
        button.addEventListener('click', () => {
            userResponses[currentQuestionIndex] = option.scores;  // Store the selected option's scores
        });

        optionsContainer.appendChild(button);
    });
}

// Handle the "Next" button click
nextBtn.addEventListener('click', () => {
    if (userResponses[currentQuestionIndex]) {  // Ensure the user selected an option
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();  // Load the next question
        } else {
            evaluateResponses();  // If it's the last question, evaluate the responses
        }
    } else {
        alert("Please select an option before proceeding.");
    }
});

// Handle the "Previous" button click
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();  // Load the previous question
    }
});

// Function to evaluate the user's responses
function evaluateResponses() {
    // Reset the category scores before evaluation
    for (const category in careerCategories) {
        careerCategories[category] = 0;
    }

    // Sum up the scores for each category based on the user's responses
    userResponses.forEach(response => {
        for (const category in response) {
            if (response.hasOwnProperty(category)) {
                careerCategories[category] += response[category];
            }
        }
    });

    // Find the category with the highest score
    let recommendedCareer = '';
    let highestScore = 0;
    for (const category in careerCategories) {
        if (careerCategories[category] > highestScore) {
            highestScore = careerCategories[category];
            recommendedCareer = category;
        }
    }

    // Store the result and redirect to results page (result.html)
    localStorage.setItem('recommendedCareer', recommendedCareer);
    window.location.href = './result.html';  // Redirect to result page
}

// Load the first question when the page loads
loadQuestion();
