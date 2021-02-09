function flipAndInvertImage(A) {
    for (var x = 0; x < A.length; x++) {
        A[x] = A[x].reverse();
        for (var y = 0; y < A[x].length; y++) {
            if (A[x][y] === 0) {
                A[x][y] = 1;
            }
            else if (A[x][y] === 1) {
                A[x][y] = 0;
            }
        }
    }
    console.log(A);
    return A;
}
;
flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]);
