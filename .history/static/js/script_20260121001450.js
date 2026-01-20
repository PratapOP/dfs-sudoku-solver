const gridDiv = document.getElementById("grid");
const logDiv = document.getElementById("log");

let cells = [];

function createGrid() {
    gridDiv.innerHTML = "";
    cells = [];

    for (let i = 0; i < 81; i++) {
        const input = document.createElement("input");
        input.maxLength = 1;

        input.addEventListener("input", () => {
            input.value = input.value.replace(/[^1-9]/g, "");
        });

        gridDiv.appendChild(input);
        cells.push(input);
    }
}

createGrid();

function getGrid() {
    const grid = [];
    for (let r = 0; r < 9; r++) {
        const row = [];
        for (let c = 0; c < 9; c++) {
            const val = cells[r * 9 + c].value;
            row.push(val ? parseInt(val) : 0);
        }
        grid.push(row);
    }
    return grid;
}

function clearGrid() {
    cells.forEach(c => {
        c.value = "";
        c.className = "";
    });
    logDiv.innerHTML = "";
}

async function solve() {
    logDiv.innerHTML = "";

    const response = await fetch("/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            grid: getGrid(),
            educational_mode: document.getElementById("eduMode").checked
        })
    });

    const data = await response.json();

    if (!data.success) {
        logDiv.innerHTML += "<div>❌ No solution found or step limit reached.</div>";
    }

    animateSteps(data.steps);
}

function animateSteps(steps) {
    let i = 0;

    function run() {
        if (i >= steps.length) return;

        const s = steps[i];
        const idx = s.row * 9 + s.col;

        // 🔧 CLEAR PREVIOUS STATES
        cells.forEach(c => c.classList.remove("try", "accept", "backtrack"));

        cells[idx].classList.add(s.action.toLowerCase());
        cells[idx].value = s.action === "BACKTRACK" ? "" : s.value;

        if (s.explanation) {
            const entry = document.createElement("div");
            entry.textContent = s.explanation;
            logDiv.appendChild(entry);
            logDiv.scrollTop = logDiv.scrollHeight;
        }

        i++;
        setTimeout(run, 180);
    }

    run();
}
