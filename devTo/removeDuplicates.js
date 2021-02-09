function removeDuplicates(nums) {

    var n = 0;
    for ( var i = 0; i < nums.length; i++ ) {
        if( i === 0 || nums[i] != nums[i - 1]) {
            nums[n++] = nums[i];
        }
    }
    return n;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));