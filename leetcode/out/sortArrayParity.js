function sortArrayByParity(A) {
    const even = [];
    const odd = [];
    for (let x = 0; x < A.length; x++) {
        if (A[x] % 2 !== 0) {
            odd.push(A[x]);
        }
        else {
            even.push(A[x]);
        }
    }
    return even.concat(odd);
}
;
console.log(sortArrayByParity([3, 1, 2, 4]));
//# sourceMappingURL=sortArrayParity.js.map