function sortArrayByParity(A: number[]): number[] {

    const even: number[] = [];
    const odd: number[] = [];
    for ( let x:number = 0; x < A.length; x++ ) {
        if(A[x] % 2 !== 0) {
            odd.push(A[x]);
        } else {
            even.push(A[x]);
        }
    }
    return even.concat(odd);
};

console.log(sortArrayByParity([3,1,2,4]))
