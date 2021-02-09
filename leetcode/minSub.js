function minSubsequence(nums) {
    nums.sort(function (a, b) { return b - a; });
    var resp = [];
    if (nums.length <= 1) {
        return nums;
    }
    for (var x = 0; x < nums.length; x++) {
        var subSum = 0;
        if (x === 0) {
            resp.push(nums[x]);
            subSum = nums[x];
        }
        else {
            resp.push(nums[x]);
            subSum = resp.reduce(function (a, b) { return a + b; }, 0);
        }
        var restArray = nums.slice(x + 1);
        var sumArray = restArray.reduce(function (a, b) { return a + b; }, 0);
        if (subSum > sumArray) {
            break;
        }
    }
    console.log(resp);
    return resp;
}
;
// minSubsequence([4,3,10,9,8])
minSubsequence([4, 4, 7, 6, 7]);
//minSubsequence([10, 2, 5])
