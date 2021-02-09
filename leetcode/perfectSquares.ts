function numSquares(n: number): number {
    if(n === 0) {
        return 0;
    }
    const result = Array(n + 1).fill(0);
    for(let i = 1 ; i < n + 1; i++) {
        result[i] = i;
        for(let j = 1; j*j <= i ; j++) {
            result[i] = Math.min(result[i], result[ i - j*j] + 1);
        }
    }
    return result[n];
    
};

console.log(numSquares(12));
//console.log(numSquares(2));
//console.log(numSquares(13));
// console.log(numSquares(6));
//console.log(numSquares(9));