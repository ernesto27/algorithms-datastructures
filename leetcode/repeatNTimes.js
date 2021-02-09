function repeatedNTimes(A) {
    var obj = {};
    var resp = 0;
    for (var x = 0; x < A.length; x++) {
        if (obj[A[x]] !== undefined) {
            resp = A[x];
            break;
        }
        else {
            obj[A[x]] = 1;
        }
    }
    return resp;
}
;
console.log(repeatedNTimes([1, 2, 3, 3]));
