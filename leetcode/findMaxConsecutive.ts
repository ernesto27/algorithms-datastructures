function findMaxConsecutiveOnes(nums: number[]): number {
    let count: number = 0;
    let countArray: number[] = [];
    for ( let x: number = 0; x < nums.length; x++ ) {
        if (nums[x] === 1) {
            count += 1;
        } else {
            if( count > 0 ) {
                countArray.push(count);
                count = 0;
            }
        }
    }

    if(countArray.length === 0) {
        countArray.push(count);
    }

    if (count > 0) {
        countArray.push(count);
    }


    return Math.max(...countArray);

};

console.log(findMaxConsecutiveOnes([1]));