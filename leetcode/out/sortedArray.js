function removeDuplicates(nums) {
    let objNum = {};
    for (let x = 0; x < nums.length; x++) {
        if (objNum[nums[x]] === true) {
            nums.splice(x, 1);
            x -= 1;
        }
        else {
            objNum[nums[x]] = true;
        }
    }
    console.log(nums);
    return nums.length;
}
;
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
//# sourceMappingURL=sortedArray.js.map