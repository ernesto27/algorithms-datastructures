// Complete the utopianTree function below.
function utopianTree(n) {

    let height = 0;
    for ( var x = 0; x <= n; x++ ) {
        if ( x < 3) {
            height += 1;
        }
        else if ( x % 2 == 0) {
            height += 1;
            
        } else {
            height += height;
        }
    }
    return height;

}


console.log(utopianTree(5));