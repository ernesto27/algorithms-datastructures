function exist(board, word) {
    var index = 0;
    for (var x = 0; x < board.length; x++) {
        console.log(board[x]);
        for (var i = 0; i < board[x].length; i++) {
            console.log(board[x][i]);
            var cur = board[x][i];
            if (cur === word[index]) {
                if (i === 0 && x === 0) {
                    // Search right and below
                    if (board[x][i + 1] === word[index + 1]) {
                        index += 1;
                        continue;
                    }
                    if (board[x + 1][i] === word[index + 1]) {
                        index += 1;
                        continue;
                    }
                }
                else {
                    // Search right, left and below
                    if (board[x][i + 1] === word[index + 1]) {
                        index += 1;
                        continue;
                    }
                    if (board[x + 1][i] === word[index + 1]) {
                        index += 1;
                        continue;
                    }
                }
            }
        }
        console.log(index);
        console.log('-------------');
    }
    return false;
}
;
exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED");
