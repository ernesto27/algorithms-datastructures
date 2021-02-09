function sumOddLengthSubarrays(arr: number[]): number {
    const subGroup:number[][] = [];
    let sum: number = 0;
        
    for ( let y: number = 1; y <= arr.length; y += 2 ) {
        if ( y === 1) {
            for ( let x: number = 0; x < arr.length; x++ ) {
                subGroup.push([arr[x]])
            }    
            continue;
        }

        for ( let x: number = 0; x < arr.length; x++ ) {
            let item: number[] = arr.slice(x, y + x);
            if(item.length < y) {
                break;
            }
            subGroup.push(item) 
        }
    }

    for ( let i: number = 0; i < subGroup.length; i++ ) {
        const currItem = subGroup[i];
        let currSum: number = 0;
        if(currItem.length > 1) {
            currSum = currItem.reduce((a, b) => a + b, 0);
        } else {
            currSum = currItem[0];
        }
        sum += currSum;

    }
    return sum;
};

sumOddLengthSubarrays([1,4,2,5,3]);