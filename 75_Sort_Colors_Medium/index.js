/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    /* Fist approach */
    /*
    let changed = false;

    do {
        changed = false;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                let temp;
                temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                changed = true;
            }
        }
    } while (changed);

    return nums;
    */
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));