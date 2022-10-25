/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) return 0;
    if (x === 1) return 1;

    let temp = x;
    let pow = 0;

    while ((temp = Math.floor(temp / 2)) >= 1) {
        pow++;
    }

    let higher = 2 ** ((Math.floor(pow / 2)) + 1);
    if (higher * higher === x) return higher;

    let lower = 2 ** (Math.floor(pow / 2));
    if (lower * lower === x) return lower;

    while (higher > lower) {
        let center = Math.floor((higher + lower) / 2);
        if (center * center == x) return center;
        if (center * center > x) {
            higher = center - 1;
            if (higher * higher === x) return higher;
            if (higher * higher === x) return center;
        }
        else {
            lower = center + 1;
            if (lower * lower === x) return lower;
            if (lower * lower > x) return center;
        }
    }

    return lower;
};
console.log(mySqrt(10));
console.log(mySqrt(9));
console.log(mySqrt(4));
console.log(mySqrt(8));