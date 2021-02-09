/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    
    let countDel:number = 0;
    for (let x:number = 0; x < nums.length; x++ ) {
        if(nums[x] === 0) {
            nums.splice(x, 1);
            x -= 1;
            countDel += 1;
        }
    }

    for( let y:number = 0; y < countDel; y++) {
        nums.push(0);
    }

    console.log(nums)
    console.log(countDel)
};

moveZeroes([0,0,1])