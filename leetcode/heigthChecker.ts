function heightChecker(heights: number[]): number {

    const originalArray: number[] = [...heights];
    heights.sort((a,b) => {
        return a - b 
    });

    let response: number = 0;
    for ( let x: number = 0; x < heights.length; x++ ) {
        if ( heights[x] !== originalArray[x]) {
            response += 1;
        }
    }

    return response;
};

console.log(heightChecker([1,1,4,2,1,3]))