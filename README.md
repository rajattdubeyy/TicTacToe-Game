# 🎮 Tic-Tac-Toe Game

A modern and interactive Tic-Tac-Toe game built using **React.js**. The application features a responsive user interface, turn-based gameplay, automatic winner detection, draw detection, and a clean glassmorphism-inspired design.

---

## 📌 Features

- 🎲 Two-player gameplay (Player X vs Player O)
- 🏆 Automatic winner detection
- 🤝 Draw detection
- 🔄 Reset game functionality
- 🎨 Modern responsive UI
- ⚡ Fast rendering using React Hooks
- 🖱️ Interactive hover effects
- 📱 Mobile-friendly layout

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- React Hooks (`useState`)

---

## 📂 Project Structure

```
src/
│
├── App.js
├── App.css
│
└── TicTacToeGame/
    ├── board.jsx
    └── Square.jsx
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/tic-tac-toe.git
```

### Navigate to the project folder

```bash
cd tic-tac-toe
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The application will run on:

```
http://localhost:3000
```

---

## 🎮 How to Play

1. The game starts with **Player X**.
2. Players take turns clicking an empty square.
3. The first player to align three symbols horizontally, vertically, or diagonally wins.
4. If all squares are filled without a winner, the game ends in a draw.
5. Click **Reset Game** to start a new match.

---

## 🧠 Game Logic

The application uses:

- React state management using `useState`
- A winning combinations array to detect victories
- Conditional rendering for:
  - Current player
  - Winner announcement
  - Draw message
- Immutable state updates for efficient rendering

Winning combinations checked:

```
Rows
0 1 2
3 4 5
6 7 8

Columns
0 3 6
1 4 7
2 5 8

Diagonals
0 4 8
2 4 6
```

---

## 📸 Preview

<img width="700" alt="Game Preview" src="https://via.placeholder.com/700x400?text=Tic+Tac+Toe+Game"/>

---

## 🌟 Future Improvements

- 🤖 AI opponent using the Minimax Algorithm
- 🎵 Sound effects
- 🏅 Scoreboard
- 🌙 Dark/Light mode
- ✨ Winning animations
- 💾 Save scores using Local Storage
- ⏪ Undo move feature
- 🌐 Online multiplayer using WebSockets

---

## 📚 Learning Outcomes

This project demonstrates:

- React Components
- Props
- State Management
- Event Handling
- Conditional Rendering
- Array Manipulation
- JavaScript ES6 Features
- Responsive CSS Design

---

## 👩‍💻 Author

**Shubhi Garg**

GitHub: https://github.com/ShubhiGarg0026

LinkedIn: https://www.linkedin.com/in/shubhi-garg-80297128b

---

## 📄 License

This project is developed for educational and learning purposes.
