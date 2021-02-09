function decompressRLElist(nums: number[]): number[] {
    const resp: number[] = [];
    for ( let i:number = 0; i < nums.length; i += 2) {
        // console.log(nums[i]);

        for (let x:number = 0; x < nums[i]; x++) {
            resp.push(nums[i + 1]);
        }
    }
    return resp;
};

console.log(decompressRLElist([1,2,3,4]));