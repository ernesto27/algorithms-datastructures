function minSubsequence(nums: number[]): number[] {
    
    nums.sort(( a, b ) => b - a );
    const resp: number[] = [];
    
    if ( nums.length <= 1 ) {
        return nums;
    }
    
    for ( let x: number = 0; x < nums.length; x++ ) {
        let subSum: number = 0;
        if ( x === 0 ) {
            resp.push(nums[x]);
            subSum = nums[x];
    
        } else {
            resp.push(nums[x]);
            subSum = resp.reduce((a, b) => a + b, 0);            
        }


        let restArray = nums.slice(x + 1);
        let sumArray = restArray.reduce((a, b) => a + b, 0);
        
        if( subSum > sumArray ) {
            break;
        }
    }
    
    console.log(resp)
    return resp;
};


// minSubsequence([4,3,10,9,8])
 minSubsequence([4,4,7,6,7])
//minSubsequence([10, 2, 5])

