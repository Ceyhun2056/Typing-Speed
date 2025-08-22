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

// Numbers for number mode (mixed with words)
const numberWords = [
    '123', '456', '789', '012', '345', '678', '901', '234', '567', '890',
    '1234', '5678', '9012', '3456', '7890', '1357', '2468', '1472', '2583', '3694',
    '12345', '67890', '13579', '24680', '11111', '22222', '33333', '44444', '55555',
    '123456', '789012', '345678', '901234', '567890', 'user123', 'pass456', 'code789',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20', '25', '30', '35', '40', '45', '50', '60', '70', '80', '90', '100',
    '101', '102', '103', '200', '300', '400', '500', '600', '700', '800', '900', '1000',
    'room101', 'level42', 'page99', 'year2024', 'day365', 'hour24', 'age25', 'score100',
    'number', 'count', 'total', 'amount', 'value', 'price', 'cost', 'sum', 'digit', 'figure',
    'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth',
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
    'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million'
];

// Words with punctuation for punctuation mode
const punctuationWords = [
    "Hello,", "world!", "How's", "everything?", "I'm", "fine.", "What's", "up?", "It's", "great!",
    "Don't", "worry.", "Can't", "wait!", "Won't", "you", "come?", "We'll", "see.", "They're", "here!",
    "I'll", "go.", "You're", "right!", "She's", "coming.", "He's", "late.", "We're", "ready!",
    "Isn't", "it", "amazing?", "Doesn't", "matter.", "Wouldn't", "you", "agree?", "Couldn't", "be", "better!",
    "That's", "wonderful!", "Here's", "the", "plan:", "Let's", "begin.", "There's", "more!", "Who's", "next?",
    "coffee;", "tea,", "milk.", "bread!", "butter?", "jam:", "honey;", "water,", "juice.", "wine!",
    "car;", "bike,", "train.", "plane!", "ship?", "bus:", "walk;", "run,", "jump.", "swim!",
    "book;", "pen,", "paper.", "desk!", "chair?", "lamp:", "door;", "window,", "wall.", "floor!",
    "morning,", "afternoon.", "evening!", "night?", "today:", "tomorrow;", "yesterday,", "week.", "month!", "year?",
    "happy,", "sad.", "angry!", "excited?", "calm:", "nervous;", "brave,", "scared.", "proud!", "shy?"
];

// Quote collections for quote mode
const quotes = {
    short: [
        "The only way to do great work is to love what you do.",
        "Life is what happens to you while you're busy making other plans.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It is during our darkest moments that we must focus to see the light.",
        "The way to get started is to quit talking and begin doing."
    ],
    medium: [
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. Nelson Mandela taught us that courage is not the absence of fear, but the mastery of it.",
        "In the end, it's not the years in your life that count. It's the life in your years. Make each day count and live with purpose and passion.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. Einstein's wisdom reminds us to stay humble and curious."
    ],
    long: [
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. Ralph Waldo Emerson understood that authenticity requires courage, especially when society pressures us to conform. The path to self-discovery is often lonely, but it leads to the most fulfilling life possible.",
        "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. This simple truth reminds us that the present moment is all we truly have. We cannot change the past, nor can we control the future, but we can make the most of each moment we are given."
    ]
};

// Achievement System
const achievements = [
    {
        id: 'first_test',
        title: 'Getting Started',
        description: 'Complete your first typing test',
        icon: '🌟',
        condition: (stats) => stats.testsCompleted >= 1
    },
    {
        id: 'speed_30',
        title: 'Speed Demon',
        description: 'Reach 30 WPM',
        icon: '⚡',
        condition: (stats) => stats.bestWPM >= 30
    },
    {
        id: 'speed_50',
        title: 'Lightning Fast',
        description: 'Reach 50 WPM',
        icon: '🚀',
        condition: (stats) => stats.bestWPM >= 50
    },
    {
        id: 'speed_70',
        title: 'Typing Master',
        description: 'Reach 70 WPM',
        icon: '👑',
        condition: (stats) => stats.bestWPM >= 70
    },
    {
        id: 'accuracy_95',
        title: 'Precision Typist',
        description: 'Achieve 95% accuracy',
        icon: '🎯',
        condition: (stats) => stats.bestAccuracy >= 95
    },
    {
        id: 'accuracy_100',
        title: 'Perfect Score',
        description: 'Achieve 100% accuracy',
        icon: '💯',
        condition: (stats) => stats.bestAccuracy >= 100
    },
    {
        id: 'marathon_10',
        title: 'Marathon Typist',
        description: 'Complete 10 tests',
        icon: '🏃',
        condition: (stats) => stats.testsCompleted >= 10
    },
    {
        id: 'marathon_50',
        title: 'Dedicated Learner',
        description: 'Complete 50 tests',
        icon: '🎓',
        condition: (stats) => stats.testsCompleted >= 50
    },
    {
        id: 'numbers_master',
        title: 'Numbers Master',
        description: 'Complete 5 number tests',
        icon: '🔢',
        condition: (stats) => stats.numberTests >= 5
    },
    {
        id: 'punctuation_pro',
        title: 'Punctuation Pro',
        description: 'Complete 5 punctuation tests',
        icon: '❗',
        condition: (stats) => stats.punctuationTests >= 5
    },
    {
        id: 'quote_collector',
        title: 'Quote Collector',
        description: 'Complete 10 quote tests',
        icon: '📚',
        condition: (stats) => stats.quoteTests >= 10
    },
    {
        id: 'consistency_king',
        title: 'Consistency King',
        description: 'Complete 5 tests in a row with 90%+ accuracy',
        icon: '👑',
        condition: (stats) => stats.consistentStreak >= 5
    }
];

// Application State
class TypingTest {
    constructor() {
        this.mode = 'words'; // 'time', 'words', 'quote', 'numbers', 'punctuation'
        this.timeLimit = 60; // in seconds
        this.wordLimit = 10; // number of words
        this.quoteLength = 'short'; // 'short', 'medium', 'long'
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
        this.theme = localStorage.getItem('typingTheme') || 'dark';
        this.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
        
        // Enhanced statistics tracking
        this.stats = this.loadStats();
        this.currentCPM = 0;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.loadBestWPM();
        this.setTheme(this.theme);
        
        // Initialize sound system
        this.initSounds();
        this.initSoundButton();
        
        // Initialize button states
        this.startBtn.style.display = 'inline-block';
        this.restartBtn.style.display = 'none';
        
        // Set up initial mode and options properly
        
        // Force generate words for initial display
        this.words = this.generateWords(10);
        this.renderWords();
        this.resetStats();
        
        // Then set mode and option to ensure UI is in sync
        this.setMode('words');
        this.setOption('10');
        
        // Disable typing input until start button is clicked
        this.typingInput.disabled = true;
    }
    
    // Simple sound effects using Web Audio API
    initSounds() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
            this.soundEnabled = false;
        }
    }
    
    playSound(frequency, duration = 0.1, type = 'sine') {
        if (!this.soundEnabled || !this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }
    
    initSoundButton() {
        if (this.soundToggle) {
            const icon = this.soundToggle.querySelector('.sound-icon');
            if (icon) {
                icon.textContent = this.soundEnabled ? '🔊' : '🔇';
            }
            this.soundToggle.classList.toggle('muted', !this.soundEnabled);
        }
    }

    initializeElements() {
        // DOM Elements
        this.typingArea = document.getElementById('typing-area');
        this.typingInput = document.getElementById('typing-input');
        this.liveWPM = document.getElementById('live-wpm');
        this.liveAccuracy = document.getElementById('live-accuracy');
        this.liveTimer = document.getElementById('live-timer');
        this.liveChars = document.getElementById('live-chars');
        this.liveErrors = document.getElementById('live-errors');
        this.liveCPM = document.getElementById('live-cpm');
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeSelector = document.getElementById('theme-select');
        this.soundToggle = document.getElementById('sound-toggle');
        this.bestWPMSpan = document.getElementById('best-wpm');
        this.resultsModal = document.getElementById('results-modal');
        this.closeResults = document.getElementById('close-results');
        this.achievementsBtn = document.getElementById('achievements-btn');
        this.achievementsModal = document.getElementById('achievements-modal');
        this.closeAchievements = document.getElementById('close-achievements');
        
        // Mode and option buttons
        this.modeButtons = document.querySelectorAll('.mode-btn');
        this.timeOptions = document.getElementById('time-options');
        this.wordOptions = document.getElementById('word-options');
        this.quoteOptions = document.getElementById('quote-options');
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

        // Sound toggle
        if (this.soundToggle) {
            this.soundToggle.addEventListener('click', () => this.toggleSound());
        }

        // Theme selection
        if (this.themeSelector) {
            this.themeSelector.addEventListener('change', (e) => {
                this.setTheme(e.target.value);
            });
        }

        // Theme toggle (fallback)
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Typing input
        this.typingInput.addEventListener('input', (e) => this.handleInput(e));
        this.typingInput.addEventListener('keydown', (e) => this.handleKeyDown(e));

        // Control buttons
        this.startBtn.addEventListener('click', () => this.startTest());
        this.restartBtn.addEventListener('click', () => this.restartTest());
        this.closeResults.addEventListener('click', () => this.closeResultsModal());
        
        // Achievements modal
        if (this.achievementsBtn) {
            this.achievementsBtn.addEventListener('click', () => this.showAchievements());
        }
        if (this.closeAchievements) {
            this.closeAchievements.addEventListener('click', () => this.hideAchievements());
        }

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
        if (this.mode === 'quote') {
            this.generateQuoteText();
        } else if (this.mode === 'numbers') {
            this.words = this.generateNumberWords(50); // Fixed 50 number sequences
        } else if (this.mode === 'punctuation') {
            this.words = this.generatePunctuationWords(50); // Fixed 50 punctuation words
        } else if (this.mode === 'words') {
            this.words = this.generateWords(this.wordLimit);
        } else {
            // For time mode, generate enough words (estimate ~60 words for 60 seconds)
            const estimatedWords = Math.max(50, this.timeLimit * 1.5);
            this.words = this.generateWords(estimatedWords);
        }
        this.renderWords();
        this.resetStats();
    }

    generateQuoteText() {
        const quoteArray = quotes[this.quoteLength];
        const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
        this.words = randomQuote.split(' ');
    }

    generateNumberWords(count) {
        const words = [];
        for (let i = 0; i < count; i++) {
            const randomWord = numberWords[Math.floor(Math.random() * numberWords.length)];
            words.push(randomWord);
        }
        return words;
    }

    generatePunctuationWords(count) {
        const words = [];
        for (let i = 0; i < count; i++) {
            const randomWord = punctuationWords[Math.floor(Math.random() * punctuationWords.length)];
            words.push(randomWord);
        }
        return words;
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
        if (!this.typingArea) {
            return;
        }
        
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
        
        // Show/hide relevant options - only show options for time/words/quote modes
        this.timeOptions.classList.add('hidden');
        this.wordOptions.classList.add('hidden');
        if (this.quoteOptions) this.quoteOptions.classList.add('hidden');
        
        if (mode === 'time') {
            this.timeOptions.classList.remove('hidden');
        } else if (mode === 'words') {
            this.wordOptions.classList.remove('hidden');
        } else if (mode === 'quote' && this.quoteOptions) {
            this.quoteOptions.classList.remove('hidden');
        }
        // numbers and punctuation modes don't need option panels
        
        this.generateTest();
    }

    setOption(value) {
        if (this.mode === 'time') {
            this.timeLimit = parseInt(value);
            this.timeLeft = this.timeLimit;
            this.liveTimer.textContent = this.timeLimit;
        } else if (this.mode === 'words') {
            this.wordLimit = parseInt(value);
        } else if (this.mode === 'quote') {
            this.quoteLength = value;
        }
        
        // Update active option button
        const relevantOptions = this.mode === 'time' ? this.timeOptions : 
                               this.mode === 'words' ? this.wordOptions : 
                               this.quoteOptions;
        
        if (relevantOptions) {
            relevantOptions.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.value === value);
            });
        }
        
        this.generateTest();
    }

    startTest() {
        if (this.isActive) return;
        
        this.isActive = true;
        this.isFinished = false;
        this.startTime = Date.now();
        this.timeLeft = this.timeLimit;
        
        // Reset timer display styling
        this.liveTimer.style.color = '';
        this.liveTimer.style.fontWeight = '';
        this.liveTimer.style.animation = '';
        
        // Enable typing input
        this.typingInput.disabled = false;
        
        this.typingArea.classList.add('active');
        this.startBtn.style.display = 'none'; // Hide start button
        this.restartBtn.style.display = 'inline-block'; // Show restart button
        this.focusInput();
        
        if (this.mode === 'time') {
            this.liveTimer.textContent = this.timeLeft;
            this.startTimer();
        }
    }

    startTimer() {
        // Add active timer styling
        const timerStatItem = this.liveTimer.closest('.stat-item');
        if (timerStatItem) {
            timerStatItem.classList.add('timer-active');
        }
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.liveTimer.textContent = this.timeLeft;
            
            // Update timer styling based on remaining time
            if (timerStatItem) {
                timerStatItem.classList.remove('timer-warning', 'timer-danger');
                
                if (this.timeLeft <= 5) {
                    timerStatItem.classList.add('timer-danger');
                } else if (this.timeLeft <= 10) {
                    timerStatItem.classList.add('timer-warning');
                }
            }
            
            // Flash effect for last 5 seconds
            if (this.timeLeft <= 5 && this.timeLeft > 0) {
                this.playSound(400, 0.1); // Warning beep
            }
            
            if (this.timeLeft <= 0) {
                this.finishTest();
            }
        }, 1000);
    }

    handleInput(e) {
        // Don't auto-start anymore - require manual start button click
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
            this.playSound(800, 0.05); // Correct word sound
        } else {
            this.incorrectWords++;
            this.errors += Math.abs(typedWord.length - currentWord.length);
            this.playSound(200, 0.1); // Error sound
        }
        
        this.totalChars += typedWord.length + 1;
        
        // Mark word as completed
        this.markWordAsCompleted(typedWord === currentWord);
        
        // Move to next word
        this.currentWordIndex++;
        this.currentLetterIndex = 0;
        this.typingInput.value = '';
        
        // Check if test is complete (word-based modes)
        if ((this.mode === 'words' || this.mode === 'quote' || this.mode === 'numbers' || this.mode === 'punctuation') 
            && this.currentWordIndex >= this.words.length) {
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
        if (!this.startTime) return;
        
        // Calculate WPM
        const timeElapsed = (Date.now() - this.startTime) / 1000 / 60; // in minutes
        const wordsTyped = this.correctWords + this.incorrectWords;
        const wpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
        
        // Calculate accuracy
        const accuracy = this.totalChars > 0 ? 
            Math.round(((this.totalChars - this.errors) / this.totalChars) * 100) : 100;
        
        // Update displays
        this.liveWPM.textContent = wpm;
        this.liveAccuracy.textContent = accuracy + '%';
        
        // Calculate CPM (Characters Per Minute)
        this.currentCPM = timeElapsed > 0 ? Math.round(this.correctChars / timeElapsed) : 0;
        
        // Update enhanced stats if elements exist
        if (this.liveChars) {
            this.liveChars.textContent = this.totalChars;
        }
        if (this.liveErrors) {
            this.liveErrors.textContent = this.errors;
        }
        if (this.liveCPM) {
            this.liveCPM.textContent = this.currentCPM;
        }
    }

    finishTest() {
        this.isActive = false;
        this.isFinished = true;
        this.endTime = Date.now();
        
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        // Reset timer styling
        const timerStatItem = this.liveTimer.closest('.stat-item');
        if (timerStatItem) {
            timerStatItem.classList.remove('timer-active', 'timer-warning', 'timer-danger');
        }
        
        this.typingArea.classList.remove('active');
        this.startBtn.style.display = 'none'; // Keep start button hidden
        this.restartBtn.style.display = 'inline-block'; // Keep restart visible
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
        const finalCPM = minutes > 0 ? Math.round(this.correctChars / minutes) : 0;
        
        // Update enhanced statistics
        this.updateStatsAfterTest(finalWPM, finalAccuracy, finalCPM, timeElapsed);
        
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
        
        // Disable typing input until start button is clicked again
        this.typingInput.disabled = true;
        
        this.typingArea.classList.remove('active');
        this.startBtn.style.display = 'inline-block'; // Show start button again
        this.restartBtn.style.display = 'none'; // Hide restart button
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
        
        // Reset timer styling
        const timerStatItem = this.liveTimer?.closest('.stat-item');
        if (timerStatItem) {
            timerStatItem.classList.remove('timer-active', 'timer-warning', 'timer-danger');
        }
        
        // Reset enhanced stats
        if (this.liveChars) this.liveChars.textContent = '0';
        if (this.liveErrors) this.liveErrors.textContent = '0';
        if (this.liveCPM) this.liveCPM.textContent = '0';
    }

    focusInput() {
        this.typingInput.focus();
    }

    // Theme functionality
    setTheme(themeName) {
        this.theme = themeName;
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('typingTheme', themeName);
        
        // Update theme selector if it exists
        if (this.themeSelector) {
            this.themeSelector.value = themeName;
        }
        
        // Update theme toggle icon if it exists
        if (this.themeToggle) {
            const icon = this.themeToggle.querySelector('.theme-icon');
            if (icon) {
                icon.textContent = themeName === 'dark' ? '🌙' : '☀️';
            }
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('typingTheme') || 'dark';
        this.setTheme(savedTheme);
    }
    
    // Sound functionality
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        localStorage.setItem('soundEnabled', this.soundEnabled.toString());
        
        if (this.soundToggle) {
            const icon = this.soundToggle.querySelector('.sound-icon');
            if (icon) {
                icon.textContent = this.soundEnabled ? '🔊' : '🔇';
            }
            this.soundToggle.classList.toggle('muted', !this.soundEnabled);
        }
        
        // Play a test sound when enabling
        if (this.soundEnabled) {
            this.playSound(440, 0.1);
        }
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
    
    // Enhanced Statistics System
    loadStats() {
        const defaultStats = {
            testsCompleted: 0,
            bestWPM: 0,
            bestAccuracy: 0,
            bestCPM: 0,
            totalTime: 0,
            totalChars: 0,
            totalErrors: 0,
            numberTests: 0,
            punctuationTests: 0,
            quoteTests: 0,
            consistentStreak: 0,
            currentStreak: 0,
            unlockedAchievements: []
        };
        
        const savedStats = localStorage.getItem('typingStats');
        return savedStats ? { ...defaultStats, ...JSON.parse(savedStats) } : defaultStats;
    }
    
    saveStats() {
        localStorage.setItem('typingStats', JSON.stringify(this.stats));
    }
    
    updateStatsAfterTest(wpm, accuracy, cpm, testDuration) {
        this.stats.testsCompleted++;
        this.stats.bestWPM = Math.max(this.stats.bestWPM, wpm);
        this.stats.bestAccuracy = Math.max(this.stats.bestAccuracy, accuracy);
        this.stats.bestCPM = Math.max(this.stats.bestCPM, cpm);
        this.stats.totalTime += testDuration;
        this.stats.totalChars += this.totalChars;
        this.stats.totalErrors += this.errors;
        
        // Track mode-specific stats
        if (this.mode === 'numbers') this.stats.numberTests++;
        if (this.mode === 'punctuation') this.stats.punctuationTests++;
        if (this.mode === 'quote') this.stats.quoteTests++;
        
        // Track consistency streak
        if (accuracy >= 90) {
            this.stats.currentStreak++;
            this.stats.consistentStreak = Math.max(this.stats.consistentStreak, this.stats.currentStreak);
        } else {
            this.stats.currentStreak = 0;
        }
        
        this.saveStats();
        this.checkAchievements();
    }
    
    // Achievement System
    checkAchievements() {
        const newAchievements = [];
        
        achievements.forEach(achievement => {
            if (!this.stats.unlockedAchievements.includes(achievement.id) && 
                achievement.condition(this.stats)) {
                this.stats.unlockedAchievements.push(achievement.id);
                newAchievements.push(achievement);
            }
        });
        
        if (newAchievements.length > 0) {
            this.saveStats();
            this.showNewAchievements(newAchievements);
            
            // Update achievements button with notification
            if (this.achievementsBtn) {
                this.achievementsBtn.classList.add('has-new');
                setTimeout(() => {
                    this.achievementsBtn.classList.remove('has-new');
                }, 3000);
            }
        }
    }
    
    showNewAchievements(newAchievements) {
        newAchievements.forEach((achievement, index) => {
            setTimeout(() => {
                this.playSound(600 + (index * 100), 0.3); // Achievement sound
                this.showAchievementNotification(achievement);
            }, index * 500);
        });
    }
    
    showAchievementNotification(achievement) {
        // Create floating notification
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-notification-content">
                <span class="achievement-notification-icon">${achievement.icon}</span>
                <div>
                    <div class="achievement-notification-title">Achievement Unlocked!</div>
                    <div class="achievement-notification-desc">${achievement.title}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    showAchievements() {
        if (!this.achievementsModal) return;
        
        const grid = document.getElementById('achievements-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        achievements.forEach(achievement => {
            const isUnlocked = this.stats.unlockedAchievements.includes(achievement.id);
            const progress = this.getAchievementProgress(achievement);
            
            const card = document.createElement('div');
            card.className = `achievement-card ${isUnlocked ? 'unlocked' : ''}`;
            
            card.innerHTML = `
                <div class="achievement-header">
                    <span class="achievement-icon">${achievement.icon}</span>
                    <span class="achievement-title">${achievement.title}</span>
                </div>
                <div class="achievement-description">${achievement.description}</div>
                ${!isUnlocked && progress !== null ? `
                    <div class="achievement-progress">
                        Progress: ${Math.min(progress.current, progress.target)}/${progress.target}
                        <div class="achievement-progress-bar">
                            <div class="achievement-progress-fill" style="width: ${Math.min(100, (progress.current / progress.target) * 100)}%"></div>
                        </div>
                    </div>
                ` : ''}
            `;
            
            grid.appendChild(card);
        });
        
        this.achievementsModal.classList.remove('hidden');
    }
    
    hideAchievements() {
        if (this.achievementsModal) {
            this.achievementsModal.classList.add('hidden');
        }
    }
    
    getAchievementProgress(achievement) {
        const id = achievement.id;
        const stats = this.stats;
        
        const progressMap = {
            'first_test': { current: stats.testsCompleted, target: 1 },
            'speed_30': { current: stats.bestWPM, target: 30 },
            'speed_50': { current: stats.bestWPM, target: 50 },
            'speed_70': { current: stats.bestWPM, target: 70 },
            'accuracy_95': { current: stats.bestAccuracy, target: 95 },
            'accuracy_100': { current: stats.bestAccuracy, target: 100 },
            'marathon_10': { current: stats.testsCompleted, target: 10 },
            'marathon_50': { current: stats.testsCompleted, target: 50 },
            'numbers_master': { current: stats.numberTests, target: 5 },
            'punctuation_pro': { current: stats.punctuationTests, target: 5 },
            'quote_collector': { current: stats.quoteTests, target: 10 },
            'consistency_king': { current: stats.consistentStreak, target: 5 }
        };
        
        return progressMap[id] || null;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const typingTest = new TypingTest();
    
    // Ensure words are displayed after everything is initialized
    setTimeout(() => {
        typingTest.words = typingTest.generateWords(10);
        typingTest.renderWords();
    }, 100);
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
