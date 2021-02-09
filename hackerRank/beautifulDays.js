// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {

    let response = 0;
    for(var x = i; x <= j; x++ ) {
        console.log(x)
        if(isBeautiful(x)) {
            response += 1;
        }
    }

    function isBeautiful(num) {
        let reversedNum = parseInt(String(num).split("").reverse().join(""));
        let rest = num - reversedNum;
        const isEven = rest % k;
        if(isEven === 0) {
            return true;
        }
        return false;
    } 

    return response;

}


// var i = 20;
// var j = 23;
// var k = 6;

var i = 13;
var j = 45;
var k = 3;

console.log(beautifulDays(i, j, k));
