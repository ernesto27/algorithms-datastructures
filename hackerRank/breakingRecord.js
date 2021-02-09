// Complete the breakingRecords function below.
function breakingRecords(scores) {
    // console.log(scores)

    var minValue = scores[0];
    var maxValue = scores[0];
    var minCount = 0;
    var maxCount = 0;

    for ( var x = 1; x < scores.length; x++ ) {
        var item = scores[x];  

        if( item > maxValue ) {
            maxValue = item;
            maxCount += 1;
            continue;
        }

        if( item < minValue ) {
            minValue = item;
            minCount += 1;
        }
   };

   console.log(maxCount)
   console.log(minCount)

}

var scores = [ 10, 5, 20, 20, 4, 5, 2, 25, 1 ];
breakingRecords(scores);