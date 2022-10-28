/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    /* Dinamic Programing */

    let paths = [];

    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            // if (i === 0 || j === 0) paths[i][j] = 1;
            // else paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
            if (i === 0 || j === 0) row.push(1);
            else row.push(paths[i - 1][j] + row[j - 1]);
        }
        paths.push(row);
    }

    return paths[m - 1][n - 1];


    /* Brute Force, Recusion with Memoziation */
    /*
    let subPaths = {};

    return goFinish(0, 0);

    function goFinish(low, column) {
        if (subPaths[`(${low}, ${column})`]) return subPaths[`(${low}, ${column})`];

        if (low === m - 1 && column === n - 1) {
            return 1;
        }

        let result = 0;
        let result2 = 0;

        if (column < n - 1) {
            result = goFinish(low, column + 1);
            if (!subPaths[`(${low}, ${column + 1})`]) subPaths[`(${low}, ${column + 1})`] = result;
        }

        if (low < m - 1) {
            result2 = goFinish(low + 1, column);
            if (!subPaths[`(${low + 1}, ${column})`]) subPaths[`(${low + 1}, ${column})`] = result2;
        }

        return result + result2;;
    }
    */
};

console.log(uniquePaths(4, 2));
console.log(uniquePaths(23, 12));
console.log(uniquePaths(3, 2));