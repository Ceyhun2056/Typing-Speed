// MonkeyType-inspired Typing Speed Test App
// Complete rewrite with all requested features

// Word lists for different test types
const commonWords = [
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
    'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their',
    'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when', 'make', 'can', 'like', 'time', 'no', 'just', 'him',
    'know', 'take', 'people', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look', 'only',
    'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want',
    'because', 'any', 'these', 'give', 'day', 'most', 'us', 'is', 'was', 'are', 'been', 'has', 'had', 'were', 'said', 'each', 'which', 'their',
    'time', 'will', 'about', 'if', 'up', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'into', 'him',
    'two', 'more', 'very', 'what', 'know', 'just', 'first', 'get', 'over', 'think', 'where', 'much', 'go', 'well', 'were', 'been', 'have',
    'through', 'when', 'who', 'oil', 'sit', 'but', 'now'
];

// Application State
class TypingTest {
    constructor() {
        this.mode = 'time'; // 'time' or 'words'
        this.timeLimit = 60; // in seconds
        this.wordLimit = 10; // number of words
        this.isActive = false;
        this.isFinished = false;
        this.startTime = null;
        this.endTime = null;
        this.currentWordIndex = 0;
        this.currentLetterIndex = 0;
        this.words = [];
        this.userInput = '';
        this.timer = null;
        this.timeLeft = 60;
        this.errors = 0;
        this.correctChars = 0;
        this.totalChars = 0;
        this.correctWords = 0;
        this.incorrectWords = 0;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.loadBestWPM();
        this.generateTest();
    }

    initializeElements() {
        // DOM Elements
        this.typingArea = document.getElementById('typing-area');
        this.typingInput = document.getElementById('typing-input');
        this.liveWPM = document.getElementById('live-wpm');
        this.liveAccuracy = document.getElementById('live-accuracy');
        this.liveTimer = document.getElementById('live-timer');
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.themeToggle = document.getElementById('theme-toggle');
        this.bestWPMSpan = document.getElementById('best-wpm');
        this.resultsModal = document.getElementById('results-modal');
        this.closeResults = document.getElementById('close-results');
        
        // Mode and option buttons
        this.modeButtons = document.querySelectorAll('.mode-btn');
        this.timeOptions = document.getElementById('time-options');
        this.wordOptions = document.getElementById('word-options');
        this.optionButtons = document.querySelectorAll('.option-btn');
    }

    initializeEventListeners() {
        // Mode switching
        this.modeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.setMode(btn.dataset.mode));
        });

        // Option selection
        this.optionButtons.forEach(btn => {
            btn.addEventListener('click', () => this.setOption(btn.dataset.value));
        });

        // Typing input
        this.typingInput.addEventListener('input', (e) => this.handleInput(e));
        this.typingInput.addEventListener('keydown', (e) => this.handleKeyDown(e));

        // Control buttons
        this.startBtn.addEventListener('click', () => this.startTest());
        this.restartBtn.addEventListener('click', () => this.restartTest());
        this.closeResults.addEventListener('click', () => this.closeResultsModal());

        // Theme toggle
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Click to focus
        this.typingArea.addEventListener('click', () => this.focusInput());
        
        // Prevent context menu on typing area
        this.typingArea.addEventListener('contextmenu', (e) => e.preventDefault());

        // Load theme
        this.loadTheme();
    }

    generateTest() {
        if (this.mode === 'words') {
            this.words = this.generateWords(this.wordLimit);
        } else {
            // For time mode, generate enough words (estimate ~60 words for 60 seconds)
            const estimatedWords = Math.max(50, this.timeLimit * 1.5);
            this.words = this.generateWords(estimatedWords);
        }
        this.renderWords();
        this.resetStats();
    }

    generateWords(count) {
        const words = [];
        for (let i = 0; i < count; i++) {
            const randomWord = commonWords[Math.floor(Math.random() * commonWords.length)];
            words.push(randomWord);
        }
        return words;
    }

    renderWords() {
        this.typingArea.innerHTML = '';
        this.words.forEach((word, wordIndex) => {
            const wordElement = document.createElement('div');
            wordElement.className = 'word';
            
            word.split('').forEach((letter, letterIndex) => {
                const letterElement = document.createElement('span');
                letterElement.className = 'letter';
                letterElement.textContent = letter;
                
                if (wordIndex === 0 && letterIndex === 0) {
                    letterElement.classList.add('current');
                }
                
                wordElement.appendChild(letterElement);
            });
            
            this.typingArea.appendChild(wordElement);
        });
    }

    setMode(mode) {
        this.mode = mode;
        
        // Update active mode button
        this.modeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
        
        // Show/hide relevant options
        if (mode === 'time') {
            this.timeOptions.classList.remove('hidden');
            this.wordOptions.classList.add('hidden');
        } else {
            this.timeOptions.classList.add('hidden');
            this.wordOptions.classList.remove('hidden');
        }
        
        this.generateTest();
    }

    setOption(value) {
        const numValue = parseInt(value);
        
        if (this.mode === 'time') {
            this.timeLimit = numValue;
            this.timeLeft = numValue;
            this.liveTimer.textContent = numValue;
        } else {
            this.wordLimit = numValue;
        }
        
        // Update active option button
        const relevantOptions = this.mode === 'time' ? 
            this.timeOptions.querySelectorAll('.option-btn') : 
            this.wordOptions.querySelectorAll('.option-btn');
            
        relevantOptions.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.value === value);
        });
        
        this.generateTest();
    }

    startTest() {
        if (this.isActive) return;
        
        this.isActive = true;
        this.isFinished = false;
        this.startTime = Date.now();
        this.timeLeft = this.timeLimit;
        
        this.typingArea.classList.add('active');
        this.startBtn.disabled = true;
        this.focusInput();
        
        if (this.mode === 'time') {
            this.startTimer();
        }
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.liveTimer.textContent = this.timeLeft;
            
            if (this.timeLeft <= 0) {
                this.finishTest();
            }
        }, 1000);
    }

    handleInput(e) {
        if (!this.isActive || this.isFinished) return;
        
        const inputValue = e.target.value;
        const currentWord = this.words[this.currentWordIndex];
        
        // Handle space (word completion)
        if (inputValue.endsWith(' ')) {
            this.handleWordCompletion(inputValue.slice(0, -1));
            return;
        }
        
        this.updateWordDisplay(inputValue, currentWord);
        this.updateStats();
    }

    handleKeyDown(e) {
        if (!this.isActive || this.isFinished) return;
        
        // Prevent backspace from going to previous word
        if (e.key === 'Backspace' && this.typingInput.value === '' && this.currentWordIndex > 0) {
            e.preventDefault();
        }
    }

    handleWordCompletion(typedWord) {
        const currentWord = this.words[this.currentWordIndex];
        
        // Check if word is correct
        if (typedWord === currentWord) {
            this.correctWords++;
            this.correctChars += currentWord.length + 1; // +1 for space
        } else {
            this.incorrectWords++;
            this.errors += Math.abs(typedWord.length - currentWord.length);
        }
        
        this.totalChars += typedWord.length + 1;
        
        // Mark word as completed
        this.markWordAsCompleted(typedWord === currentWord);
        
        // Move to next word
        this.currentWordIndex++;
        this.currentLetterIndex = 0;
        this.typingInput.value = '';
        
        // Check if test is complete (word mode)
        if (this.mode === 'words' && this.currentWordIndex >= this.words.length) {
            this.finishTest();
            return;
        }
        
        // Update current letter highlight
        this.updateCurrentLetter();
        this.updateStats();
    }

    updateWordDisplay(inputValue, currentWord) {
        const wordElement = this.typingArea.children[this.currentWordIndex];
        const letters = wordElement.children;
        
        // Reset all letters in current word
        Array.from(letters).forEach((letter, index) => {
            letter.className = 'letter';
            
            if (index < inputValue.length) {
                if (inputValue[index] === currentWord[index]) {
                    letter.classList.add('correct');
                } else {
                    letter.classList.add('incorrect');
                }
            } else if (index === inputValue.length) {
                letter.classList.add('current');
            }
        });
        
        // Handle extra characters
        if (inputValue.length > currentWord.length) {
            // Add extra character indicators
            for (let i = currentWord.length; i < inputValue.length; i++) {
                if (!letters[i]) {
                    const extraLetter = document.createElement('span');
                    extraLetter.className = 'letter extra';
                    extraLetter.textContent = inputValue[i];
                    wordElement.appendChild(extraLetter);
                }
            }
        } else {
            // Remove extra character indicators
            while (letters.length > currentWord.length) {
                wordElement.removeChild(letters[letters.length - 1]);
            }
        }
    }

    markWordAsCompleted(isCorrect) {
        const wordElement = this.typingArea.children[this.currentWordIndex];
        const letters = wordElement.children;
        
        Array.from(letters).forEach(letter => {
            letter.classList.remove('current', 'incorrect', 'extra');
            if (isCorrect) {
                letter.classList.add('correct');
            } else {
                letter.classList.add('incorrect');
            }
        });
    }

    updateCurrentLetter() {
        // Remove current class from all letters
        this.typingArea.querySelectorAll('.letter.current').forEach(letter => {
            letter.classList.remove('current');
        });
        
        // Add current class to next letter
        if (this.currentWordIndex < this.words.length) {
            const wordElement = this.typingArea.children[this.currentWordIndex];
            if (wordElement && wordElement.children[0]) {
                wordElement.children[0].classList.add('current');
            }
        }
    }

    updateStats() {
        // Calculate WPM
        const timeElapsed = (Date.now() - this.startTime) / 1000 / 60; // in minutes
        const wordsTyped = this.correctWords + this.incorrectWords;
        const wpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
        
        // Calculate accuracy
        const accuracy = this.totalChars > 0 ? 
            Math.round(((this.totalChars - this.errors) / this.totalChars) * 100) : 100;
        
        this.liveWPM.textContent = wpm;
        this.liveAccuracy.textContent = accuracy + '%';
    }

    finishTest() {
        this.isActive = false;
        this.isFinished = true;
        this.endTime = Date.now();
        
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        this.typingArea.classList.remove('active');
        this.startBtn.disabled = false;
        this.typingInput.blur();
        
        this.showResults();
    }

    showResults() {
        const timeElapsed = (this.endTime - this.startTime) / 1000;
        const minutes = timeElapsed / 60;
        const wordsTyped = this.correctWords + this.incorrectWords;
        const finalWPM = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;
        const finalAccuracy = this.totalChars > 0 ? 
            Math.round(((this.totalChars - this.errors) / this.totalChars) * 100) : 100;
        
        // Update results modal
        document.getElementById('final-wpm').textContent = finalWPM;
        document.getElementById('final-accuracy').textContent = finalAccuracy + '%';
        document.getElementById('final-chars').textContent = this.totalChars;
        document.getElementById('final-correct').textContent = this.correctWords;
        document.getElementById('final-incorrect').textContent = this.incorrectWords;
        document.getElementById('final-time').textContent = Math.round(timeElapsed) + 's';
        
        // Check and update best WPM
        this.updateBestWPM(finalWPM);
        
        // Show modal
        this.resultsModal.classList.remove('hidden');
    }

    closeResultsModal() {
        this.resultsModal.classList.add('hidden');
    }

    restartTest() {
        this.isActive = false;
        this.isFinished = false;
        this.currentWordIndex = 0;
        this.currentLetterIndex = 0;
        this.typingInput.value = '';
        
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        this.typingArea.classList.remove('active');
        this.startBtn.disabled = false;
        this.closeResultsModal();
        
        this.generateTest();
        this.focusInput();
    }

    resetStats() {
        this.errors = 0;
        this.correctChars = 0;
        this.totalChars = 0;
        this.correctWords = 0;
        this.incorrectWords = 0;
        this.timeLeft = this.timeLimit;
        
        this.liveWPM.textContent = '0';
        this.liveAccuracy.textContent = '100%';
        this.liveTimer.textContent = this.timeLeft;
    }

    focusInput() {
        this.typingInput.focus();
    }

    // Theme functionality
    toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        this.themeToggle.querySelector('.theme-icon').textContent = newTheme === 'dark' ? '🌙' : '☀️';
        
        localStorage.setItem('typing-test-theme', newTheme);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('typing-test-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.themeToggle.querySelector('.theme-icon').textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }

    // Best WPM functionality
    updateBestWPM(currentWPM) {
        const bestWPM = localStorage.getItem('typing-test-best-wpm') || 0;
        if (currentWPM > bestWPM) {
            localStorage.setItem('typing-test-best-wpm', currentWPM);
            this.bestWPMSpan.textContent = currentWPM;
            
            // Add celebration animation
            this.bestWPMSpan.style.animation = 'none';
            setTimeout(() => {
                this.bestWPMSpan.style.animation = 'pulse 0.5s ease-in-out';
            }, 10);
        }
    }

    loadBestWPM() {
        const bestWPM = localStorage.getItem('typing-test-best-wpm') || 0;
        this.bestWPMSpan.textContent = bestWPM;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TypingTest();
});

// Add pulse animation for best WPM
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
