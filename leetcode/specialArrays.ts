function specialArray(nums: number[]): number {

    nums.sort((a, b) => a - b);

    let j: number = 0
    for ( let i: number = 1;  i <= nums.length; i++ ) {
        var a = nums[j];
        while(a < i) j++;
        if( i === nums.length - j ) return i;
    }

    return -1;
    
};

// specialArray([3,5]);
console.log(specialArray([0,4,3,0,4]));

