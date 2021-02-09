// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    var response = 'Bon Appetit'

    bill.splice(k, 1);

    // Get sum of array 
    var sum = bill.reduce(( a, b ) => a + b, 0);
    // Divide by 2 
    var payAmount = sum / 2;

    // Check if b is diff by calculation
    if ( payAmount !== b ) {
        response = b - payAmount;
        return response;
    }
    return response;
}

var bill = [ 3, 10, 2, 9 ];
var k = 1;
var b = 12;

console.log(bonAppetit(bill, k, b));