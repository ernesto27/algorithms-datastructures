function matrixReshape(nums, r, c) {
    var resp = [[]];
    if (nums.length === 0 || r * c !== nums.length * nums[0].length) {
        return nums;
    }
    var queue = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums[0].length; j++) {
            queue.push(nums[i][j]);
        }
    }
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            resp[i][j] = queue.shift();
            //resp[i][j] = 0;
        }
    }
    console.log(resp);
    return resp;
}
;
// matrixReshape([[1,2],[3,4]], 1, 4)
matrixReshape([[1, 2], [3, 4]], 4, 1);
