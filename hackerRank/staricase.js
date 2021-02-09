// Complete the staircase function below.
function staircase(n) {

    for ( var x = 1; x <= n; x++ ) {
        var res = '';
        res +=  ' '.repeat(n - x); 
        res += "#".repeat(x);
        console.log(res)
    }

}

staircase(6);