function numSpecial(mat) {
    var resp = 0;
    for (var x = 0; x < mat[0].length; x++) {
        console.log(mat[0][x]);
        var countOne = 0;
        var valid = false;
        if (mat[0][x] === 1) {
            countOne += 1;
            valid = true;
        }
        for (var i = 1; i < mat.length; i++) {
            console.log(mat[i][x]);
            if (mat[i][x] === 1) {
                valid = true;
                countOne += 1;
                if (countOne > 1) {
                    valid = false;
                    break;
                }
            }
        }
        if (valid === true) {
            resp += 1;
        }
        console.log('-------');
    }
    return resp;
}
;
var mat = [[1, 0, 0], [0, 0, 1], [1, 0, 0]];
mat = [[0, 0, 0, 1], [1, 0, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
console.log(numSpecial(mat));
