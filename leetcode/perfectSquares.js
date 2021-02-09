function numSquares(n) {
    var squareNumbers = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
    var prevIndex = 0;
    var resp = 0;
    var newArr = [];
    for (var x = 0; x < squareNumbers.length; x++) {
        // console.log(squareNumbers[x])
        // if (squareNumbers[x] > n) {
        //     prevIndex = x - 1;
        //     break;
        // }
        if (squareNumbers[x] <= n) {
            newArr.push(squareNumbers[x]);
        }
    }
    console.log(newArr);
    // First check if n is on array
    if (newArr.indexOf(n) !== -1) {
        return 1;
    }
    // Check sum of two numbers until N is equal to n required
    for (var x = newArr.length; x > 0; x--) {
        for (var y = newArr.length; y > 0; y--) {
            if (y === x)
                continue;
            if (newArr[x] + newArr[y] === n) {
                return 2;
            }
        }
    }
    // last check every 
    for (var x = newArr.length - 1; x >= 0; x--) {
        // console.log(squareNumbers[x])
        var curr = newArr[x];
        var sum = 0;
        var count = 0;
        var found = false;
        while (sum < n) {
            sum += curr;
            count += 1;
            if (sum === n) {
                found = true;
                break;
            }
        }
        if (found === true) {
            resp = count;
            break;
        }
    }
    return resp;
}
;
// console.log(numSquares(12));
console.log(numSquares(2));
//console.log(numSquares(13));
// console.log(numSquares(6));
//console.log(numSquares(9));
