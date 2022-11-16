/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let temp = [];
        result.forEach((item) => temp.push(item.concat([nums[i]])));
        temp.push([nums[i]]);
        // console.log(temp);
        result = result.concat(temp);
        // console.log(result);
    }

    result.push([]);

    return result;
};

console.log(subsets([1, 2, 3]));