// Array of countries and corresponding hints
let a = [10, 20, 30, 40];
const flags = ["India", "Sweden", "Japan", "Brazil", "Australia"];
const hints = [
    "Tricolor with Ashoka Chakra in the center",
    "Blue and yellow cross",
    "Red circle on a white background",
    "Green and yellow with a blue globe in the center",
    "Union Jack in the corner and a starry sky"
];

//multiple time occour
// Validate user input

function isValidInput(input) {
    return /^[a-zA-Z]+$/.test(input); // Check for alphabetic characters only
}

// Randomly choose a flag and its hint
const randomIndex = Math.floor(Math.random() * flags.length);
const chosenFlag = flags[randomIndex];
const chosenHint = hints[randomIndex];

let gotValidWord = false;
let isGuessedCorrectly = false;
let userGuess = "";
alert("Welcome to the Flag Guessing Game! You have 3 attempts to guess the country based on its flag description.");


for (let attempt = 1; attempt <= 3; attempt++) {
    gotValidWord = false;

    while (!gotValidWord) {
        userGuess = prompt(`Hint: ${chosenHint}\nEnter your guess (Attempt ${attempt}/3):`);
        if (!isValidInput(userGuess)) {
            alert("Invalid input! Please enter a valid country name using letters only.");
        } else { gotValidWord = true; break; }
    }

    if (userGuess == null) {
        alert("Game canceled. Goodbye!");
        break;
    }
    if (userGuess.trim().toLowerCase() === chosenFlag.toLowerCase()) {
        alert("Congratulations! You guessed it right!");
        isGuessedCorrectly = true;
        break;
    } else {
        if (attempt < 3) {
            alert(`Wrong guess! You have ${3 - attempt} attempt(s) left.`);
        } else {
            alert(`Game Over! The correct answer was: ${chosenFlag}.`);
        }
    }
}

// Closing message
if (!isGuessedCorrectly) {
    alert("Better luck next time!");
}
alert("Thank you for playing the Flag Guessing Game!");
