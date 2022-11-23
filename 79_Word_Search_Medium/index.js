/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let result = false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (word.length === 1) return true;
                let temp = board[i][j];
                board[i][j] = 0;
                checkChar(i, j + 1, 1);
                checkChar(i + 1, j, 1);
                checkChar(i, j - 1, 1);
                checkChar(i - 1, j, 1);

                if (result === true) return true;
                else board[i][j] = temp;
            }
        }
    }

    return false;

    function checkChar(row, column, index) {
        if (index >= word.length) {
            result = true;
            return;
        }

        if (result === true) return;

        if (row < 0 || row >= board.length || column < 0 || column >= board[0].length) return;

        if (board[row][column] === word[index]) {
            let temp = board[row][column];
            board[row][column] = 0;
            checkChar(row, column + 1, index + 1);
            checkChar(row + 1, column, index + 1);
            checkChar(row, column - 1, index + 1);
            checkChar(row - 1, column, index + 1);

            if (result === false) board[row][column] = temp;
        }

        return;
    }
};

console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]],
    "AAB"));

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"));

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"));