function shuffle(nums, n) {
    var resp = [];
    var leftPointer = 0;
    var rightPointer = n;
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            resp[i] = nums[leftPointer];
            leftPointer += 1;
        }
        else {
            resp[i] = nums[rightPointer];
            rightPointer += 1;
        }
    }
    console.log(resp);
    return resp;
}
;
shuffle([2, 5, 1, 3, 4, 7], 3);
// [2,3,5,4,1,7] 
