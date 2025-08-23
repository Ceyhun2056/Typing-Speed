const wordBox = document.getElementById("word-box");
const input = document.getElementById("input");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const timeDisplay = document.getElementById("time");
const restartBtn = document.getElementById("restart");
const timeSelect = document.getElementById("timeSelect");

const words = [
    "hello", "keyboard", "javascript", "speed", "typing", "programming",
    "developer", "challenge", "computer", "interface", "random", "function",
    "variable", "object", "design", "performance", "coding", "practice",
    "accuracy", "project", "learning", "algorithm", "python", "browser"
];

let currentWords = [];
let currentIndex = 0;
let correctChars = 0;
let totalChars = 0;
let timeLeft = 60;
let timer = null;
let started = false;

// Generate random words
function generateWords() {
    wordBox.innerHTML = "";
    currentWords = [];
    for (let i = 0; i < 50; i++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        currentWords.push(randomWord);

        const span = document.createElement("span");
        span.innerText = randomWord;
        span.classList.add("word");
        wordBox.appendChild(span);
    }
    highlightWord();
}

function highlightWord() {
    document.querySelectorAll(".word").forEach((el, idx) => {
        el.style.backgroundColor = idx === currentIndex ? "#444" : "transparent";
    });
}

function startTimer() {
    if (started) return;
    started = true;

    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            input.disabled = true;
        }
    }, 1000);
}

input.addEventListener("input", () => {
    startTimer();
    const typed = input.value.trim();
    const currentWord = currentWords[currentIndex];
    const currentSpan = document.querySelectorAll(".word")[currentIndex];

    if (typed === currentWord && input.value.endsWith(" ")) {
        currentSpan.classList.add("correct");
        correctChars += currentWord.length;
        totalChars += currentWord.length + 1;
        currentIndex++;
        input.value = "";
        highlightWord();
    } else if (!currentWord.startsWith(typed)) {
        currentSpan.classList.add("incorrect");
    } else {
        currentSpan.classList.remove("incorrect");
    }

    // Calculate accuracy & WPM
    totalChars++;
    const accuracy = totalChars === 0 ? 100 : Math.round((correctChars / totalChars) * 100);
    accuracyDisplay.innerText = accuracy + "%";

    const elapsed = (parseInt(timeSelect.value) - timeLeft) / 60;
    const wpm = elapsed > 0 ? Math.round(correctChars / 5 / elapsed) : 0;
    wpmDisplay.innerText = wpm;
});

restartBtn.addEventListener("click", () => {
    clearInterval(timer);
    started = false;
    timeLeft = parseInt(timeSelect.value);
    timeDisplay.innerText = timeLeft;
    input.disabled = false;
    input.value = "";
    currentIndex = 0;
    correctChars = 0;
    totalChars = 0;
    wpmDisplay.innerText = "0";
    accuracyDisplay.innerText = "100%";
    generateWords();
});

timeSelect.addEventListener("change", () => {
    timeLeft = parseInt(timeSelect.value);
    timeDisplay.innerText = timeLeft;
    restartBtn.click();
});

// Initialize game
generateWords();
