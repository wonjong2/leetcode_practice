/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let distObj = {};
    let distArray = [];
    let result = [];

    for (let i = 0; i < points.length; i++) {
        let dist = (points[i][0]) ** 2 + (points[i][1]) ** 2;
        let distStr = String(dist);
        if (!distObj[String(dist)]) {
            distObj[String(dist)] = [points[i]];
            distArray.push(dist);
        }
        else {
            distObj[String(dist)].push(points[i]);
        }
    }

    distArray.sort((a, b) => a - b);

    let numOfSpots = 0;

    for (let j = 0; j < k && numOfSpots < k; j++) {
        for (let l = 0; l < distObj[String(distArray[j])]?.length; l++) {
            result.push(distObj[String(distArray[j])][l]);
            numOfSpots += distObj[String(distArray[j])]?.length;
        }
    }

    return result;
};

//console.log(kClosest([[1, 3], [-2, 2]], 1)); // [[-2, 2]]
// console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2)); // [[3,3],[-2,4]]
console.log(kClosest([[6, 10], [-3, 3], [-2, 5], [0, 2]], 3)); // [[0,2],[-3,3],[-2,5]]