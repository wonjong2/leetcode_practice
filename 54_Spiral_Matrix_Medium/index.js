/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let numOfElements = matrix.length * matrix[0].length;
    let result = [];

    let i = 0, j = 0;

    while (result.length < numOfElements) {
        goRight();
        goDown();
        goLeft();
        goUp();
    }

    return result;

    function goRight() {
        while (j < matrix[0].length && matrix[i][j] != undefined) {
            result.push(matrix[i][j]);
            matrix[i][j] = undefined;
            j++;
        }
        j--;
        i++;
        return;
    }

    function goDown() {
        while (i < matrix.length && matrix[i][j] != undefined) {
            result.push(matrix[i][j]);
            matrix[i][j] = undefined;
            i++;
        }
        i--;
        j--;
        return;
    }

    function goLeft() {
        while (j >= 0 && matrix[i][j] != undefined) {
            result.push(matrix[i][j]);
            matrix[i][j] = undefined;
            j--;
        }
        j++;
        i--;
        return;
    }

    function goUp() {
        while (i >= 0 && matrix[i][j] != undefined) {
            result.push(matrix[i][j]);
            matrix[i][j] = undefined;
            i--;
        }
        i++;
        j++;
        return;
    }
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
