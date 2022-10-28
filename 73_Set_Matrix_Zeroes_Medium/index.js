/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let zeroAt = [];
    let rows = {};
    let column = {};

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) zeroAt.push([i, j]);
        }
    }

    for (let k = 0; k < zeroAt.length; k++) {
        if (!rows[String(zeroAt[k][0])]) {
            for (let l = 0; l < matrix[0].length; l++) {
                matrix[zeroAt[k][0]][l] = 0;
            }
            rows[String(zeroAt[k][0])] = 1;
        }

        if (!column[String(zeroAt[k][1])]) {
            for (let m = 0; m < matrix.length; m++) {
                matrix[m][zeroAt[k][1]] = 0;
            }
            column[String(zeroAt[k][1])] = 1;
        }
    }

    return matrix;
};

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));