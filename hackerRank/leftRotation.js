// Complete the rotLeft function below.
function rotLeft(a, d) {

    // var rigthArray = a.slice(0, d);
    // var leftArray = a.slice(d);
    // const response = leftArray.concat(rigthArray);
    // console.log(response)
    // return response;

    // Resolve without splice
    for(var x = 0; x < d; x++){
        var temp = a.shift();
        a.push(temp);
    }

    console.log(a)
    return a;

}


var a =  4;
var d = [1, 2, 3, 4, 5];

rotLeft(d, a);