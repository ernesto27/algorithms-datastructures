// Complete the isValid function below.
function isValid(s) {

    var lettersObj = {};
    for ( var x = 0; x < s.length; x++ ) {
        if(lettersObj[s[x]] === undefined) {
            lettersObj[s[x]] = 1;
        } else {
            lettersObj[s[x]] = lettersObj[s[x]] + 1;
        }
    }

    var firstValue;
    var changesCount = 0;
    for ( var prop in lettersObj) {
        if(changesCount > 1) break;

        if(firstValue === undefined) {
            firstValue = lettersObj[prop];
        } else if(firstValue !== lettersObj[prop]) {
                changesCount += 1;
        }
    }

    console.log(changesCount)
    if(changesCount > 1) {
        console.log('No');
        return 'NO';
    }

    console.log('YES')
    return 'YES';
}








//var s = 'aabbcd';
var s = 'abcdefghhgfedecba'
isValid(s);