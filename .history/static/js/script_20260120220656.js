const gridDiv = document.getElementById("grid");
const logDiv = document.getElementById("log");

let cells = [];

function createGrid() {
    gridDiv.innerHTML = "";
    cells = [];

    for (let i = 0; i < 81; i++) {
        let input = document.createElement("input");
        input.maxLength = 1;
        input.oninput = () => {
            input.value = input.value.replace(/[^1-9]/g, "");
        };
        gridDiv.appendChild(input);
        cells.push(input);
    }
}

createGrid();

function getGrid() {
    let grid = [];
    for (let r = 0; r < 9; r++) {
        let row = [];
        for (let c = 0; c < 9; c++) {
            let val = cells[r * 9 + c].value;
            row.push(val === "" ? 0 : parseInt(val));
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
    clearHighlights();
    logDiv.innerHTML = "";

    const response = await fetch("/solve", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            grid: getGrid(),
            educational_mode: document.getElementById("eduMode").checked
        })
    });

    const data = await response.json();
    animateSteps(data.steps);
}

function clearHighlights() {
    cells.forEach(c => c.className = "");
}

function animateSteps(steps) {
    let i = 0;

    function step() {
        if (i >= steps.length) return;

        const s = steps[i];
        const idx = s.row * 9 + s.col;

        cells[idx].value = s.action === "BACKTRACK" ? "" : s.value;
        cells[idx].className = s.action.toLowerCase();

        if (s.explanation) {
            logDiv.innerHTML += `<div>${s.explanation}</div>`;
            logDiv.scrollTop = logDiv.scrollHeight;
        }

        i++;
        setTimeout(step, 200);
    }

    step();
}
