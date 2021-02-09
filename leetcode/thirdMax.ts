function thirdMax(nums: number[]): number {
    const response: number = 0;

    nums.sort((a, b) => {
        return b - a;
    });

    nums = nums.filter((v,i) => nums.indexOf(v) === i)

    if ( nums.length < 3 ) {
        return nums[0];
    }

    return nums[2];
};

console.log(thirdMax([1, 2]));