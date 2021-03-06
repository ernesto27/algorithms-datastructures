function isValidSudoku(board) {
    // Colums
    var colums = [];
    for (var c = 0; c < 9; c++) {
        for (var r = 0; r < 9; r++) {
            var current = board[r][c];
            if (colums.indexOf(current) !== -1) {
                console.log('Number repeat', current);
                return false;
            }
            if (current !== '.') {
                colums.push(current);
            }
        }
        colums = [];
    }
    // Rows
    var rows = [];
    for (var c = 0; c < 9; c++) {
        for (var r = 0; r < 9; r++) {
            var current = board[c][r];
            if (rows.indexOf(current) !== -1) {
                console.log('Number repeat', current);
                return false;
            }
            if (current !== '.') {
                rows.push(current);
            }
        }
        rows = [];
    }
    // SUB GROUP
    // [0][0]
    // [0][1]
    // [0][2]
    // [1][0]
    // [1][1]
    // [1][2]
    // [2][0]
    // [2][1]
    // [2][2]
    // *********************************
    // [0][3]
    // [0][4]
    // [0][5]
    // [1][3]
    // [1][4]
    // [1][5]
    // [2][3]
    // [2][4]
    // [2][5]
    // *********************************
    // [0][6]
    // [0][7]
    // [0][8]
    // [1][6]
    // [1][7]
    // [1][8]
    // [2][6]
    // [2][7]
    // [2][8]
    var indexRow = 0;
    var indexColumn = 0;
    for (var x = 0; x <= 9; x++) {
        for (var y = 0; y <= 2; y++) {
            for (var i = indexRow; i < indexRow + 3; i++) {
                console.log(board[indexColumn][i]);
            }
            indexColumn += 1;
        }
        console.log('**************');
    }
    console.log('TRUE RESPONSE');
    return true;
}
;
var arr1 = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
//var arr2 = [["7",".",".",".","4",".",".",".","."],[".",".",".","8","6","5",".",".","."],[".","1",".","2",".",".",".",".","."],[".",".",".",".",".","9",".",".","."],[".",".",".",".","5",".","5",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".","2",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]];
//var arr3 = [[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]];
isValidSudoku(arr1);
