/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    const halfPow = (x, n) => {
        if (n === 0) return 1;

        let half = halfPow(x, Math.floor(n / 2));

        if (n % 2 === 0) return half * half;
        return half * half * x;
    }

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    return halfPow(x, n);
};

console.log(myPow(2.1, 3));