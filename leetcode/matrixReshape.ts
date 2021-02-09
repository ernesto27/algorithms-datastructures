function matrixReshape(nums: number[][], r: number, c: number): number[][] {
    
    const resp: number[][] = [[]];
    
    if (nums.length === 0 || r * c !== nums.length * nums[0].length) {
        return nums;
    }
    
    const queue: number[] = [];
    
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; j < nums[0].length; j++) {
            queue.push(nums[i][j]);
        }
    }
    
    for ( let i: number = 0; i < r; i++) {
        for ( let j: number = 0; j < c; j++) {
            resp[i][j] = queue.shift();
            //resp[i][j] = 0;
        }
    }

    console.log(resp)
    
    return resp;

};

// matrixReshape([[1,2],[3,4]], 1, 4)
matrixReshape([[1,2],[3,4]], 4, 1)