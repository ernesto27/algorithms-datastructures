function containsDuplicate(nums: number[]): boolean {

    nums.sort((a, b) => a - b);
    console.log(nums);

    for ( let i:number = 0; i < nums.length - 1; i++ ) {
        console.log(nums[i])
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]))