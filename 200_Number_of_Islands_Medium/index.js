/**
 * @param {character[][]} grid
 * @return {number}
 */

// Time complexity : O(M * N) where M is the number of rows and N is the number of columns
// Space complexity : O(M * N)
var numIslands = function (grid) {
    let result = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                grid[i][j] = '0';
                result++;
                searchIsland(i, j);
            }
        }
    }

    return result;

    function searchIsland(row, column) {
        if (row > 0) {
            if (grid[row - 1][column] === '1') {
                grid[row - 1][column] = '0';
                searchIsland(row - 1, column);
            }
        }

        if (column < grid[0].length - 1) {
            if (grid[row][column + 1] === '1') {
                grid[row][column + 1] = '0';
                searchIsland(row, column + 1);
            }
        }

        if (row < grid.length - 1) {
            if (grid[row + 1][column] === '1') {
                grid[row + 1][column] = '0';
                searchIsland(row + 1, column);
            }
        }

        if (column > 0) {
            if (grid[row][column - 1] === '1') {
                grid[row][column - 1] = '0';
                searchIsland(row, column - 1);
            }
        }
    }
};

console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]));