function findMaxConsecutiveOnes(nums) {
    var count = 0;
    var countArray = [];
    for (var x = 0; x < nums.length; x++) {
        if (nums[x] === 1) {
            count += 1;
        }
        else {
            if (count > 0) {
                countArray.push(count);
                count = 0;
            }
        }
    }
    if (countArray.length === 0) {
        countArray.push(count);
    }
    return Math.max.apply(Math, countArray);
}
;
console.log(findMaxConsecutiveOnes([1]));
