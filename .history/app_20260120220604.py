from flask import Flask, render_template, request, jsonify
from solver.dfs_solver import solve_sudoku

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/solve', methods=['POST'])
def solve():
    data = request.get_json()
    grid = data.get("grid")
    educational_mode = data.get("educational_mode", True)

    result = solve_sudoku(grid, educational_mode)

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
