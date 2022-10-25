/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carryOut = false;
    let index = digits.length - 1;

    do {
        if (index < 0) {
            digits.unshift(1);
            break;
        }

        let value = digits[index];

        value++;

        if (value === 10) {
            carryOut = true;
            value = 0;
            digits[index] = value;
            index--;
        }
        else {
            digits[index] = value;
            carryOut = false;
        }

    } while (carryOut);

    return digits;
};

console.log((plusOne([1, 2, 3])));
console.log((plusOne([4, 3, 2, 1])));
console.log((plusOne([9])));