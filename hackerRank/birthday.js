// Complete the birthday function below.
function birthday(s, d, m) {
    console.log(s);
    console.log(d);
    console.log(m);

    let result = 0;
    for ( var x = 0; x < s.length; x++ ) {
        let sum = 0;
        if( m > 1 ) {
            for ( var y = x + 1 ; y < m + 1; y ++) {
                sum += s[y];
            }
        }
        

        if(s[x] + sum ===  d) {
            result += 1;
        }
    }

    console.log('Result ' + result)

}


// var s = [ 1, 2, 1, 3, 2 ];
// var d = 3;
// var m = 2;

var s  = [1, 1, 1, 1, 1, 1];
var d = 3;
var m = 2;

birthday(s, d, m)