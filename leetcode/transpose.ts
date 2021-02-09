function transpose(A: number[][]): number[][] {
    const resp: number[][] = [[]]

    for ( let i: number = 0; i < A.length; i++ ) {
        for ( let x: number = 0; x < A[i].length; x++ ) {
            if (resp[x] === undefined) resp[x] = []
            resp[x].push(A[i][x])
        }


    }

    return resp;
    
    // return [[A[0][0],A[1][0],A[2][0]], [A[0][1],A[1][1],A[2][1]], [A[0][2],A[1][2],A[2][2]]   ]

};

// [[1,4,7],[2,5,8],[3,6,9]]
transpose([[1,2,3],[4,5,6],[7,8,9]])