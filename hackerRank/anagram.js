// Complete the makeAnagram function below.
function makeAnagram(a, b) {

    var a = a.split("");
    var b = b.split("");
    var countA = a.length;
    var countB = b.length;
    var count = countA + countB;
    var pair = 0;
    for(var i = 0; i < countA;i++){
        for(var j = 0; j < countB; j++){
            if(a[i] == b[j]){
                b.splice(j,1);
                pair++;
                break;
            }
        }
    }
    console.log(count - (pair*2));
    return count - (pair * 2)
}

var a = 'fcrxzwscanmligyxyvym';
var b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';

// var a = 'cde';
// var b = 'abcc';

makeAnagram(a, b);