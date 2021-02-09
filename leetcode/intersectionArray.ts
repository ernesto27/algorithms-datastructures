function intersect(nums1: number[], nums2: number[]): number[] {
    const response:number[] = [];
    
    for ( let x:number=0; x < nums1.length; x++) {
        for( let y:number= 0; y < nums2.length; y++) {
            if(nums1[x] === nums2[y]) {
                response.push(nums2[y]);
                nums2.splice(y, 1);
            
            }
        }
    }
    
    console.log(response)
    return response;

};

intersect([1, 2, 2, 1], [2,2])