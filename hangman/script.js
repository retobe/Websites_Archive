const threeLetterWords = [
    'cat',
    'dog',
    'bat',
    'man',
    'pen',
    'cup',
    'jar',
    'map',
    'tax',
    'sky',
    'red',
    'bus',
    'bed',
    'cow',
    'fly',
    'fox',
    'hat',
    'key',
    'leg',
    'log',
    'pie',
    'sun',
    'top',
    'toy',
    'van',
    'web'
];

const fourLetterWords = [
    'bird',
    'cake',
    'door',
    'echo',
    'frog',
    'gold',
    'hill',
    'jazz',
    'kite',
    'lamp',
    'moon',
    'nose',
    'open',
    'pink',
    'quiz',
    'rain',
    'star',
    'time',
    'urge',
    'vase',
    'wolf',
    'yarn'
];


const fiveLetterWords = [
    'apple',
    'beach',
    'cloud',
    'daisy',
    'earth',
    'fruit',
    'grape',
    'honey',
    'igloo',
    'juice',
    'kite',
    'lemon',
    'music',
    'night',
    'ocean',
    'peach',
    'quiet',
    'rainy',
    'sunny',
    'table',
    'umbra',
    'virus',
    'waltz',
    'young'
];

const sixLetterWords = [
    'banana',
    'circle',
    'dancer',
    'eleven',
    'flavor',
    'guitar',
    'honest',
    'insect',
    'jacket',
    'kettle',
    'laptop',
    'magnet',
    'noodle',
    'oxygen',
    'pencil',
    'quartz',
    'rocket',
    'sunset',
    'thirst',
    'unique',
    'violet',
    'window',
    'xyloph',
    'yellow',
    'zebra'
];

const sevenLetterWords = [
    'bicycle',
    'chimney',
    'diamond',
    'elephant',
    'forever',
    'giraffe',
    'holiday',
    'inspire',
    'justice',
    'kitchen',
    'library',
    'mission',
    'novelty',
    'octopus',
    'passion',
    'quality',
    'rainbow',
    'silence',
    'trouble',
    'undergo',
    'venture',
    'weather',
    'xenon',
    'yogurt',
    'zeppelin'
];

const eightLetterWords = [
    'building',
    'calendar',
    'diamonds',
    'elephant',
    'favorite',
    'gentleman',
    'happiness',
    'influence',
    'jewellery',
    'knowledge',
    'landscape',
    'medicine',
    'naturally',
    'overcome',
    'personal',
    'quantity',
    'resource',
    'strength',
    'tomorrow',
    'umbrella',
    'velocity',
    'whatever',
    'xenology',
    'yellowed',
    'zeppelin'
];

const nineLetterWords = [
    'beginning',
    'chocolate',
    'delicious',
    'essential',
    'fortunate',
    'gratitude',
    'happiness',
    'influence',
    'jewellery',
    'knowledge',
    'landscape',
    'medicinal',
    'necessary',
    'operation',
    'pleasure',
    'quantity',
    'remember',
    'symphony',
    'tomorrow',
    'ultimate',
    'velocity',
    'whispering',
    'xylophone',
    'yearning',
    'zeppelin'
];


const range = document.getElementById("range_diff");
const customWord = document.getElementById("custom_textbox");
range.addEventListener("change", function (event) {
    let secretWord;
    switch (parseInt(event.target.value)) {
        case 3:
            secretWord = threeLetterWords[Math.floor(Math.random() * threeLetterWords.length)];
            localStorage.setItem("secretWord1", secretWord);
            console.log("changed to 3")
            break;
        case 4:
            secretWord = fourLetterWords[Math.floor(Math.random() * fourLetterWords.length)]
            console.log("changed to 4")
            localStorage.setItem("secretWord1", secretWord);
            break;
        case 5:
            secretWord = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]
            console.log("changed to 5")
            localStorage.setItem("secretWord1", secretWord);
            break;
        case 6:
            secretWord = sixLetterWords[Math.floor(Math.random() * sixLetterWords.length)]
            console.log("changed to 6")
            localStorage.setItem("secretWord1", secretWord);
            break;
        case 7:
            secretWord = sevenLetterWords[Math.floor(Math.random() * sevenLetterWords.length)]
            console.log("changed to 7")
            localStorage.setItem("secretWord1", secretWord);
            break;
        case 8:
            secretWord = eightLetterWords[Math.floor(Math.random() * eightLetterWords.length)]
            console.log("changed to 8")
            localStorage.setItem("secretWord1", secretWord);
            break;
        case 9:
            secretWord = nineLetterWords[Math.floor(Math.random() * nineLetterWords.length)]
            console.log("changed to 9")
            localStorage.setItem("secretWord1", secretWord);
            break;
        default:
            secretWord = threeLetterWords[Math.floor(Math.random() * threeLetterWords.length)];
            console.log("changed to 3 (default)")
            localStorage.setItem("secretWord1", secretWord);
            break;
    }
    console.log(secretWord)
})

const keys = document.querySelectorAll(".key")

// Get elements from the DOM
const wordDisplay = document.getElementById("word");
const endMessage = document.getElementById("result")
const letterButtons = document.querySelectorAll(".key");
let guessedLetters = [];
let remainingGuesses = 6;


function isValid(inputString) {
    const regex = /[^a-zA-Z]/; // This regular expression matches any digit (0-9)
    return regex.test(inputString);
}

function game() {
    document.getElementById("settings").remove();
    // Update the word display with underscores
    let secretWord = localStorage.getItem("secretWord1");
    if (customWord.value != 0) {
        if (isValid(customWord.value) === true) {
            alert('Please enter a valid word.');
            return setTimeout(function () {
                location.reload();
            }, 100);
        } else {
            secretWord = customWord.value
            console.log(secretWord)
        }
    }
    const initializeWordDisplay = () => {
        wordDisplay.textContent = secretWord
            .split("")
            .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
            .join(" ");
    };

    // Update the hangman display
    const updateHangmanDisplay = () => {
        // Implement logic to update hangman display
        const element = document.getElementById("guesses");
        element.textContent += "❌"
    };

    // Handle letter button clicks
    letterButtons.forEach(div => {
        div.addEventListener("click", () => {
            const guessedLetter = div.textContent.toLowerCase();
            const xElement = document.getElementById("guesses");


            if (!guessedLetters.includes(guessedLetter)) {
                guessedLetters.push(guessedLetter);

                if (secretWord.includes(guessedLetter)) {
                    // Correct guess
                    div.classList.add("correct");
                    initializeWordDisplay();
                } else {
                    // Incorrect guess
                    remainingGuesses--;
                    div.classList.add("wrong");
                    updateHangmanDisplay();
                }
            }

            if (remainingGuesses === 0) {
                // Handle game over (e.g., display a message)
                endMessage.textContent = "Game over.";
                wordDisplay.textContent = `Your word was "${secretWord}"`
                endMessage.classList.add("lost")
                for (const key of keys) {
                    key.remove();
                }
            } else if (wordDisplay.textContent.indexOf("_") === -1) {
                // Handle win (e.g., display a message)
                xElement.textContent = "";
                endMessage.classList.add("won")
                endMessage.textContent = "You Win!";
                for (const key of keys) {
                    key.remove();
                }
            }
        });
    });
    initializeWordDisplay();
}