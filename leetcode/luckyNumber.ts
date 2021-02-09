function luckyNumbers (matrix: number[][]): number[] {

    const index: number[] = [];
    
    const maximun: number = 0;
    for ( let x: number = 0; x < matrix.length; x++ ) {
        let i = matrix[x].indexOf(Math.min(...matrix[x]));
        index.push(i);
    }

    const arr: number[][] = [];
    for ( let x: number = 0; x < index.length; x++ ) {
        const current: number[] = [];
        for( let y: number = 0; y < matrix.length; y++ ) {
            current.push(matrix[y][index[x]]);
        }
        arr.push(current);

    }

    for ( let x: number = 0; x < arr.length; x++ ) {
        let i = arr[x].indexOf(Math.max(...arr[x]));
        if( i === index[0] ) {
            return [matrix[x][i]];
        }
    }
    
    console.log(index)
    console.log(arr)

};

console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));