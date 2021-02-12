function containsDuplicate(nums) {
    nums.sort(function (a, b) { return a - b; });
    console.log(nums);
    for (var i = 0; i < nums.length - 1; i++) {
        console.log(nums[i]);
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}
;
console.log(containsDuplicate([1, 2, 3, 1]));
