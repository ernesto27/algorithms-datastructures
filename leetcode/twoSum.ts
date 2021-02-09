function twoSum(nums: number[], target: number): number[] {
    let lookup: {[id: number]: number} = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const match = target - current;
        if (match in lookup) {
            return [lookup[match], i];
        }
        lookup[current] = i;
    }
    throw new Error('I was promised a match');
};

twoSum([3,2,4], 6)