/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 3) return n;

    let numberOfWays = {}

    let result = 0;

    result += climb(n - 2);
    if (!numberOfWays[String(n - 2)]) numberOfWays[String(n - 2)] = result;
    result += climb(n - 1);

    return result;

    function climb(steps) {
        let tempResult = 0;

        if (steps < 0) return 0;

        if (steps < 3) {
            return steps;
        }

        if (numberOfWays[String(steps)]) return numberOfWays[String(steps)];

        tempResult = climb(steps - 2);
        if (!numberOfWays[String(steps - 2)]) numberOfWays[String(steps - 2)] = tempResult;
        tempResult = climb(steps - 1);
        if (!numberOfWays[String(steps - 1)]) numberOfWays[String(steps - 1)] = tempResult;

        return numberOfWays[String(steps - 2)] + numberOfWays[String(steps - 1)];
    }
};
console.log(climbStairs(4));
console.log(climbStairs(2));
console.log(climbStairs(3));