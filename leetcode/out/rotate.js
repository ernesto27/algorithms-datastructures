function rotate(nums, k) {
    for (let x = 1; x <= k; x++) {
        const temp = nums[nums.length - 1];
        // Remove latest
        nums.pop();
        nums.unshift(temp);
    }
    console.log(nums);
}
;
rotate([1, 2, 3, 4, 5, 6, 7], 3);
//# sourceMappingURL=rotate.js.map