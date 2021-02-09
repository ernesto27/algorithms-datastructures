function thirdMax(nums) {
    var response = 0;
    nums.sort(function (a, b) {
        return b - a;
    });
    nums = nums.filter(function (v, i) { return nums.indexOf(v) === i; });
    if (nums.length < 3) {
        return nums[0];
    }
    return nums[2];
}
;
console.log(thirdMax([1, 2]));
