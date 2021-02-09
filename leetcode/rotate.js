function rotate(nums, k) {
    for (var x = 1; x <= k; x++) {
        var temp = nums[nums.length - x];
        // Remove latest
        nums.splice(1, nums.length - x);
        nums.unshift(temp);
    }
    console.log(nums);
}
;
rotate([1, 2, 3, 4, 5, 6, 7], 3);
