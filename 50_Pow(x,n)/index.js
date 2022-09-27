/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;

    if (n === 1) return x;
    if (n === -1) return 1 / x;

    let result = 1;

    if (n % 2 === 0) {
        for (let i = 0; i < Math.abs(n) / 2; i++) {
            result = result * x;
        }
        result = result * result;
    }
    else {
        for (let i = 0; i < Math.floor(Math.abs(n) / 2); i++) {
            result = result * x;
        }
        result = result * result * x;
    }

    if (n < 0) {
        result = 1 / result;
    }

    return result;
};

console.log(myPow(2.1, 3));