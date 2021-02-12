function maxSubArray(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        //sum += nums[i];
        var curLen = nums.length;
        var innerSum = 0;
        for (var j = i + 1; j < curLen; j++) {
            innerSum += nums[j];
        }
        curLen -= 1;
        console.log(nums[i] + innerSum);
    }
    return sum;
}
;
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
