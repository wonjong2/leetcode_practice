/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    // let distObj = {};
    let distArray = [];
    let result = [];

    for (let i = 0; i < points.length; i++) {
        let dist = distance(points[i]);
        distArray.push(dist);
    }

    distArray.sort((a, b) => a - b);

    for (let j = 0; j < points.length; j++) {
        if (distance(points[j]) <= distArray[k - 1]) {
            result.push(points[j]);
        }
    }

    return result;

    function distance(spot) {
        return spot[0] ** 2 + spot[1] ** 2;
    }
};

//console.log(kClosest([[1, 3], [-2, 2]], 1)); // [[-2, 2]]
// console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2)); // [[3,3],[-2,4]]
console.log(kClosest([[6, 10], [-3, 3], [-2, 5], [0, 2]], 3)); // [[0,2],[-3,3],[-2,5]]