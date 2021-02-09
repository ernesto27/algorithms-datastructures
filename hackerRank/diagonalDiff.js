function diagonalDifference(arr) {
    // Write your code here
    // console.log(arr)
    // const leftToRight = arr[0][0] + arr[1][1] + arr[2][2]; 
    // const rigthtToLeft = arr[0][2] + arr[1][1] + arr[2][0];
    // const diff = leftToRight - rigthtToLeft;
    // console.log(Math.abs(diff))
    // return Math.abs(diff);

    // Left to right
    const lefToRight = [];
    const rightToLeft = [];
    for( var x = 0; x < arr.length; x++ ) {
        lefToRight.push(arr[x][x]);
        rightToLeft.push(arr[x][(arr.length - 1) - x]);
    }

    const sumLeft = lefToRight.reduce((a, b) => {
        return a + b
    });
    const sumRigth = rightToLeft.reduce((a, b) => {
        return a + b
    });

    const diff = sumLeft -  sumRigth;
    console.log(Math.abs(diff))
    return Math.abs(diff);
}


var arr = [
    [-1, 1, -7, -8],
    [-10, -8, -5, -2],
    [0, 9, 7, -1],
    [4, 4, -2, 1]
];

diagonalDifference(arr);