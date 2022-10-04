/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
 Complexity Analysis
 Time Complexity: O(R*C)O(R∗C), where RR is the number of rows in the given grid, and CC is the number of columns. We visit every square once.
 Space complexity: O(R*C)O(R∗C), the space used by seen to keep track of visited squares, and the space used by the call stack during our recursion.
*/

var maxAreaOfIsland = function (grid) {
    let lows = grid.length;
    let columns = grid[0].length;
    let maxArea = 0;

    for (let i = 0; i < lows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                let area = 0;
                area = searchArea(i, j) + 1;
                if (area > maxArea) maxArea = area;
            }
        }
    }

    return maxArea;

    function searchArea(low, column) {
        let area = 0;
        // check upper side
        if (low > 0) {
            if (grid[low - 1][column] === 1) {
                grid[low - 1][column] = 0;
                area = searchArea(low - 1, column) + 1;
            }
        }
        // check right side
        if (column < columns - 1) {
            if (grid[low][column + 1] === 1) {
                grid[low][column + 1] = 0;
                area += (searchArea(low, column + 1) + 1);
            }
        }
        // check lower side
        if (low < lows - 1) {
            if (grid[low + 1][column] === 1) {
                grid[low + 1][column] = 0;
                area += (searchArea(low + 1, column) + 1);
            }
        }
        // check left side
        if (column > 0) {
            if (grid[low][column - 1] === 1) {
                grid[low][column - 1] = 0;
                area += (searchArea(low, column - 1) + 1);
            }
        }

        return area;
    }
};

console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]])); // 6

console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]])); // 0