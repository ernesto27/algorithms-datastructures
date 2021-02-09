
function getMoneySpent(keyboards, drives, b) {
    var response = -1;

    for ( var x = 0; x < keyboards.length; x++ ) {
        for ( var y = 0; y < drivers.length; y++ ) {
            const sum = keyboards[x] + drivers[y]; 
            if( sum <= b && sum > response) {
                response = sum;
            }
        }
    }
    console.log(response)
    return response;

}

var keyboards = [ 3, 1 ];
var drivers = [ 5, 2, 8 ];
var b = 10;

getMoneySpent(keyboards, drivers, b)