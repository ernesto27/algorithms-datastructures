function repeatedNTimes(A: number[]): number {
    const obj = {} as any;
    let resp: number = 0;

    for ( let x: number = 0;  x < A.length; x++ ) {
        if(obj[A[x]] !== undefined) {
            resp = A[x];
            break;
        } else {
            obj[A[x]] = 1;
        }
    }
    return resp;
};

console.log(repeatedNTimes([1,2,3,3]))