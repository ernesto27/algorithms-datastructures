function commonChars(A) {
    var newArr = [];
    var resp = [];
    for (var i = 0; i < A.length; i++) {
        newArr.push(A[i].split(''));
    }
    for (var i = 0; i < newArr[0].length; i++) {
        var strToCheck = A[0][i];
        var count = 1;
        for (var x = 1; x < newArr.length; x++) {
            for (var z = 0; z < newArr[x].length; z++) {
                if (strToCheck === newArr[x][z]) {
                    count += 1;
                    newArr[x].splice(z, 1);
                    break;
                }
            }
        }
        if (count === A.length) {
            resp.push(strToCheck);
        }
    }
    return resp;
}
;
// console.log(commonChars(["bella","label","roller"]))
console.log(commonChars(["cool", "lock", "cook"]));
