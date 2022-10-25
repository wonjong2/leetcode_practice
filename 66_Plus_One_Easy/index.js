/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = false;
    let index = digits.length - 1;

    do {
        if (index < 0) {
            digits.unshift(1);
            break;
        }

        let value = digits[index];

        value++;

        if (value === 10) {
            carry = true;
            value = 0;
            digits[index] = value;
            index--;
        }
        else {
            digits[index] = value;
            carry = false;
        }

    } while (carry);

    return digits;
};

console.log((plusOne([1, 2, 3])));
console.log((plusOne([4, 3, 2, 1])));
console.log((plusOne([9])));