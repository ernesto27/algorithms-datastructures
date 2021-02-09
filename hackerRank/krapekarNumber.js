// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {

    const response = [];

    for ( let x = p; x <= q; x++ ) {
        if(check(x)) {
            response.push(x);
        }
    }
    
    // check(45)
    console.log(response)

}

function check(number) {
    let square = number * number;
    let squareString = String(square);
    let left = squareString.substr(0, squareString.length / 2);
    let rigth = squareString.substr(squareString.length / 2);
    let numLeft = (left.length === 0) ? 0 : parseInt(left);
    let numRigth = (rigth.length === 0) ? 0 : parseInt(rigth);

    if(numLeft + numRigth === number) {
        return true;
    }

    return false;



    
}

var p = 1;
var q = 100;

kaprekarNumbers(p, q)