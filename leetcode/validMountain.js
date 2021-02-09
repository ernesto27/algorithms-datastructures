function validMountainArray(A) {
    if (A.length < 3)
        return false;
    var mid = Math.ceil(A.length / 2);
    var left = A.slice(0, mid);
    var right = A.slice(mid, A.length);
    console.log(left);
    console.log(right);
    var prev = 0;
    // Check left
    for (var x = 0; x < left.length; x++) {
        if (x === 0) {
            prev = left[x];
        }
        else {
            if (left[x] <= prev) {
                return false;
            }
            prev = left[x];
        }
    }
    for (var x = 0; x < right.length; x++) {
        if (right[x] >= prev) {
            return false;
        }
    }
    console.log(prev);
    return true;
    // let prev: number = 0;
    // for ( let x: number = 0; x < A.length; x++ ) {
    //     if ( x === 0) {
    //         prev = A[x];
    //     } else {
    //         if ( x < mid ) {
    //             if( A[x] <= prev ) {
    //                 return false;
    //             }
    //         } else {
    //             if ( A[x] >= prev ){
    //                 return false;
    //             }
    //         }
    //         prev = A[x];
    //     }
    // }
    // return true;
}
;
// console.log(validMountainArray([0,3,2,1]))
console.log(validMountainArray([0, 1, 2, 4, 2, 1]));
