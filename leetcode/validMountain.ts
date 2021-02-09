function validMountainArray(A: number[]): boolean {
    if ( A.length < 3 ) return false;
    
    const mid : number = Math.ceil(A.length / 2);
    const left = A.slice(0, mid );
    const right = A.slice(mid , A.length);

    console.log(left);
    console.log(right);

    let prev: number = 0;
    // Check left
    for ( let x: number = 0; x < left.length; x++ ) {
        if ( x === 0 ) {
            prev = left[x];
        } else {
            if( left[x] <= prev) {
                return false;
            }
            prev = left[x];
        }
    }

    for ( let x: number = 0; x < right.length; x++ ) {
        if ( right[x] >= prev) {
            return false;
        }
    }


    console.log(prev)

    return true;

};



// console.log(validMountainArray([0,3,2,1]))
console.log(validMountainArray([0,1,2,4,2,1]))

