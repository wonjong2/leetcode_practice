/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let subPaths = {};
    //let result = 0;

    return goFinish(0, 0);

    //return result;

    function goFinish(low, column) {
        if (subPaths[`(${low}, ${column})`]) return subPaths[`(${low}, ${column})`];

        if (low === m - 1 && column === n - 1) {
            return 1;
        }

        // if (low === m || column === n) return 0;

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
};

console.log(uniquePaths(4, 2));
console.log(uniquePaths(23, 12));
console.log(uniquePaths(3, 2));