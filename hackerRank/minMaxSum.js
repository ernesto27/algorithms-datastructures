// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

    const arraySum = [];
    for ( var x = 0; x < arr.length; x++ ) {
       var copyArray = [...arr];
       copyArray.splice(x, 1);

       const currentSum = copyArray.reduce((a, b) => a + b, 0);
       arraySum.push(currentSum);
    } 

    const maxValue = Math.max(...arraySum);
    const minValue = Math.min(...arraySum);
    console.log(minValue + ' ' + maxValue);
}


var arr = [ 1, 2, 3, 4, 5 ];
miniMaxSum(arr)