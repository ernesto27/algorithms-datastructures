function specialArray(nums) {
    nums.sort((a, b) => a - b);
    let j = 0;
    for (let i = 1; i <= nums.length; i++) {
        var a = nums[j];
        while (a < i)
            j++;
        if (i === nums.length - j)
            return i;
    }
    return -1;
}
;
// specialArray([3,5]);
console.log(specialArray([0, 4, 3, 0, 4]));
//# sourceMappingURL=specialArrays.js.map