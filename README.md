# ⌨️ TypingSpeed - MonkeyType Clone

A modern, minimalistic typing speed test application inspired by MonkeyType. Built with pure vanilla HTML, CSS, and JavaScript - no frameworks required!

## ✨ Features

### 🎯 Multiple Test Modes
- **Time Mode**: 15s, 30s, 60s, 120s duration tests
- **Word Mode**: 10, 25, 50, 100 word count tests
- **Smart Word Generation**: Uses common English words for realistic typing practice

### 📊 Real-Time Analytics
- **Live WPM Calculation**: Words per minute updated in real-time
- **Accuracy Tracking**: Percentage accuracy with character-level precision
- **Performance Stats**: Correct/incorrect word counts and character statistics
- **Personal Best**: Automatically saves and displays your highest WPM

### 🎨 Modern UI/UX
- **Clean Design**: MonkeyType-inspired minimalistic interface
- **Dark/Light Themes**: Toggle between themes with persistent storage
- **Responsive Layout**: Perfect on desktop, tablet, and mobile devices
- **Smooth Animations**: Professional hover effects and transitions

### ⚡ Advanced Features
- **Subtle Visual Feedback**: Non-distracting cursor and error indicators
- **Keyboard-First Experience**: Hidden input field for seamless typing
- **Results Modal**: Detailed statistics after each test completion
- **No Distractions**: Clean, focused typing environment

## 🚀 Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Ceyhun2056/Typing-Speed.git
   cd Typing-Speed
   ```

2. **Open in Browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html  # macOS
   start index.html # Windows
   ```

3. **Start Typing!**
   - Choose your preferred mode (time/words)
   - Select duration or word count
   - Click "Start Test" or just begin typing
   - Track your progress in real-time

## 📁 Project Structure

```
Typing-Speed/
│
├── index.html          # Main HTML structure
├── src/
│   ├── style.css       # Complete styling with themes
│   └── app.js          # Full application logic
├── LICENSE             # MIT License
└── README.md           # This file
```

## 🛠️ Technical Implementation

### Architecture
- **Class-Based JavaScript**: Modular ES6 class structure for maintainability
- **Event-Driven Design**: Efficient event handling for responsive user interaction
- **State Management**: Clean state management without external libraries

### Key Components
- **TypingTest Class**: Main application controller
- **Word Generation**: Dynamic random word selection from curated list
- **Statistics Engine**: Real-time WPM and accuracy calculations
- **Theme System**: CSS custom properties with localStorage persistence

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🎮 How to Use

### Getting Started
1. **Select Mode**: Choose between "time" or "words" mode
2. **Pick Duration/Count**: Select your preferred test length
3. **Start Typing**: Click "Start Test" or begin typing immediately
4. **View Results**: See detailed statistics when the test completes

### Pro Tips
- **Focus Mode**: Click anywhere in the typing area to maintain focus
- **No Backspace Limits**: Type naturally without restrictions
- **Theme Toggle**: Use the moon/sun icon to switch themes
- **Personal Records**: Your best WPM is automatically saved

## 📈 Features Breakdown

| Feature | Description | Status |
|---------|-------------|---------|
| Time Tests | 15s, 30s, 60s, 120s modes | ✅ Complete |
| Word Tests | 10, 25, 50, 100 word modes | ✅ Complete |
| Live WPM | Real-time words per minute | ✅ Complete |
| Accuracy | Character-level precision tracking | ✅ Complete |
| Themes | Dark/Light mode with persistence | ✅ Complete |
| Best Score | Personal record tracking | ✅ Complete |
| Mobile Support | Responsive design | ✅ Complete |
| Results Modal | Detailed test completion stats | ✅ Complete |

## 🎨 Customization

### Themes
The application supports easy theme customization through CSS custom properties:

```css
:root {
  --bg-primary: #121212;     /* Main background */
  --text-primary: #e4e4e7;   /* Primary text */
  --accent: #f59e0b;         /* Accent color */
  --correct: #22c55e;        /* Correct letters */
  --incorrect: #ef4444;      /* Incorrect letters */
}
```

### Word Lists
Extend the word list in `app.js`:

```javascript
const commonWords = [
  // Add your custom words here
  'example', 'custom', 'words'
];
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit Your Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and structure
- Test on multiple browsers and devices
- Ensure responsive design principles
- Maintain accessibility standards


## 🙏 Acknowledgments

- **MonkeyType**: Inspiration for the clean, minimalistic design
- **Inter Font**: Modern typography via Google Fonts
- **CSS Grid & Flexbox**: For responsive layout architecture
