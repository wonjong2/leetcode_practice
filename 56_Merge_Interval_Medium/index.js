/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let result = [];
    let range = [];
    let newRange = true;
    let tempEnd = -1;

    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        if (newRange) {
            range = [];
            range.push(intervals[i][0]);
            tempEnd = intervals[i][1];
            newRange = false;
        }

        if (i === intervals.length - 1) {
            range.push(intervals[i][1] > tempEnd ? intervals[i][1] : tempEnd);
            result.push(range);
            break;
        }

        if (range[0] === intervals[i + 1]) {
            if (tempEnd < intervals[i + 1][1]) tempEnd = intervals[i + 1][1];
        }
        else {
            if (tempEnd < intervals[i + 1][0]) {
                range.push(tempEnd);
                result.push(range);
                tempEnd = -1;
                newRange = true;
            }
            else if (tempEnd < intervals[i + 1][1]) {
                tempEnd = intervals[i + 1][1];
            }
        }
    }

    return result;
};

console.log(merge([[3, 3], [0, 1], [0, 0]]));
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [4, 5]]));
console.log(merge([[1, 4], [0, 4]]));
console.log(merge([[1, 4], [0, 1]]));

[[3, 3], [0, 1], [0, 0]]
