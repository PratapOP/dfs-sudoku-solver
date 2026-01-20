from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/solve', methods=['POST'])
def solve_sudoku():
    data = request.get_json()
    
    # Placeholder response (DFS not implemented yet)
    return jsonify({
        "status": "received",
        "message": "Sudoku grid received successfully",
        "steps": []
    })


if __name__ == '__main__':
    app.run(debug=True)
