# 🧩 DFS Sudoku Solver with Educational Visualization

An interactive web-based Sudoku Solver that uses **Depth First Search (DFS) with Backtracking** and provides **real-time visual animation** along with **step-by-step educational explanations** of the solving process.

This project is built using **Flask (Python backend)** and **vanilla HTML, CSS, and JavaScript** for the frontend.

---

## 🔍 Project Overview

Sudoku is a classic **Constraint Satisfaction Problem (CSP)**.  
This project models Sudoku as a **state-space search problem** and solves it using **Depth First Search (DFS)** with backtracking.

Unlike traditional solvers that only return the final solution, this system:
- Visualizes every step of the DFS process
- Shows backtracking explicitly
- Explains algorithm decisions in real time (Educational Mode)

---

## ✨ Key Features

- ✅ Manual Sudoku input (9×9 grid)
- ✅ DFS + Backtracking algorithm
- ✅ Real-time step-by-step visualization
- ✅ Color-coded cell states:
    - Try (Yellow)
    - Accepted (Green)
    - Backtracking (Red)
- ✅ Educational Mode with live explanations
- ✅ Clean and attractive UI
- ✅ Flask-based backend
- ✅ GitHub & LinkedIn ready project structure

---

## 🧠 Algorithm: Depth First Search (DFS) with Backtracking

**Steps:**
1. Find the next empty cell
2. Try numbers from 1 to 9
3. Check constraints:
     - Row
     - Column
     - 3×3 Sub-grid
4. If valid, place the number and recurse
5. If no number works, backtrack

Each attempt, acceptance, and backtrack is logged and visualized.

---

## 🧑‍🏫 Educational Mode

When Educational Mode is enabled:
- Every algorithm step is explained in text
- Examples:
    - *Trying 5 at row 3, column 7*
    - *Conflict detected — backtracking*
- Makes the project ideal for:
    - Learning DFS
    - Faculty evaluation
    - Interview explanations

---

## 🏗️ Project Architecture

```
dfs-sudoku-solver/
├── app.py
├── requirements.txt
├── solver/
│   ├── __init__.py
│   └── dfs_solver.py
├── templates/
│   └── index.html
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/your-username/dfs-sudoku-solver.git
cd dfs-sudoku-solver
```

### Create a Virtual Environment
```bash
python -m venv venv
```

**Activate the virtual environment:**

**Windows:**
```bash
venv\Scripts\activate
```

**Mac / Linux:**
```bash
source venv/bin/activate
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run the Application
```bash
python app.py
```

### Open in Browser
Visit `http://127.0.0.1:5000/` to access the Sudoku solver.

---

## 🧪 How to Use

1. Enter numbers (1–9) into the grid
2. Enable or disable Educational Mode
3. Click Solve
4. Watch the algorithm solve step by step
5. Observe explanations and backtracking in real time

---

## 📌 Learning Outcomes

- Understanding DFS & Backtracking
- Constraint Satisfaction Problems
- Algorithm visualization
- Frontend–Backend communication
- Clean project structuring

---

## 🔮 Future Enhancements

- Speed control slider
- MRV heuristic optimization
- Dark mode
- Invalid Sudoku detection
- BFS vs DFS comparison

---

## 👤 Author

Developed as an academic and learning-focused project to demonstrate algorithmic reasoning, system design, and visualization.

---

## 📜 License

This project is open for educational use.

---
