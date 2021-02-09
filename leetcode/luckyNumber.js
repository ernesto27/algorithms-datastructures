function luckyNumbers(matrix) {
    const minArr = []
   const maxArr = []
   
   for(let i=0; i<matrix.length; i++) {
       minArr.push(Math.min(...matrix[i]))
   }
   
    for(let i=0; i<matrix[0].length; i++) {
        let max = 0
        for(let j=0; j<matrix.length; j++) {
            if(matrix[j][i] > max) {
                max = matrix[j][i]
            }
        }
        maxArr.push(max)
    }
    
    return minArr.filter((item) => maxArr.includes(item))
}
;
console.log(luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]));
