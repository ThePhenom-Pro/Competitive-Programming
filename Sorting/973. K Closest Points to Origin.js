var kClosest = function(points, k) {
    if(points.length === 1) return points;
    let array = [];
    for (let i = 0; i < points.length; i++) {
        array[i] = [Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2), i];
    }
    array.sort((a, b) => a[0] - b[0]);
    if (k === 1)return points[array[0][1]];
    else {
        let returnArray = [];
        for (let i = 0; i < k; i++) returnArray.push(points[array[i][1]]);
        return returnArray;
    }
};