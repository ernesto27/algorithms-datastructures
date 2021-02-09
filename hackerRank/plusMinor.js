// Complete the plusMinus function below.
function plusMinus(arr) {
   
    var positiveArray = [];
    var negativeArray = [];
    var equalsArray = [];

    for ( var x = 0; x < arr.length; x++ ) {
        if(arr[x] > 0) {
            positiveArray.push(arr[x]);
        } else if (arr[x] < 0) {
            negativeArray.push(arr[x]);
        } else {
            equalsArray.push(arr[x]);
        }
    }

    var positive = positiveArray.length / arr.length;
    var negative = negativeArray.length / arr.length;
    var equals = equalsArray.length / arr.length;
    console.log(positive.toFixed(6))
    console.log(negative.toFixed(6))
    console.log(equals.toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1 ])