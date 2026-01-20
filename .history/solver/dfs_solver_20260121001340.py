import copy

def find_empty_cell(grid):
    for r in range(9):
        for c in range(9):
            if grid[r][c] == 0:
                return r, c
    return None


def is_valid(grid, row, col, num):
    if num in grid[row]:
        return False

    for r in range(9):
        if grid[r][col] == num:
            return False

    box_r = (row // 3) * 3
    box_c = (col // 3) * 3

    for r in range(box_r, box_r + 3):
        for c in range(box_c, box_c + 3):
            if grid[r][c] == num:
                return False

    return True


def solve_sudoku(grid, educational_mode=True):
    steps = []
    MAX_STEPS = 5000  # 🔒 SAFETY LIMIT
    board = copy.deepcopy(grid)

    def dfs():
        if len(steps) >= MAX_STEPS:
            return False

        empty = find_empty_cell(board)
        if not empty:
            return True

        row, col = empty

        for num in range(1, 10):
            steps.append({
                "row": row,
                "col": col,
                "value": num,
                "action": "TRY",
                "explanation": f"Trying {num} at row {row+1}, column {col+1}"
                if educational_mode else ""
            })

            if is_valid(board, row, col, num):
                board[row][col] = num

                steps.append({
                    "row": row,
                    "col": col,
                    "value": num,
                    "action": "ACCEPT",
                    "explanation": f"{num} accepted at row {row+1}, column {col+1}"
                    if educational_mode else ""
                })

                if dfs():
                    return True

                board[row][col] = 0

                steps.append({
                    "row": row,
                    "col": col,
                    "value": num,
                    "action": "BACKTRACK",
                    "explanation": f"Backtracking from row {row+1}, column {col+1}"
                    if educational_mode else ""
                })

        return False

    success = dfs()

    return {
        "success": success,
        "steps": steps
    }
