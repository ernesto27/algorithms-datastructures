function sortedSquares(A) {
    for (var x = 0; x < A.length; x++) {
        A[x] = A[x] * A[x];
    }
    A.sort(function (a, b) {
        return a - b;
    });
    return A;
}
;
console.log(sortedSquares([-4, -1, 0, 3, 10]));
