function birthdayCakeCandles(candles) {
    // Write your code here
    var countRepeat = {};

    for ( var x = 0; x < candles.length; x++) {
        if(countRepeat[candles[x]] === undefined) {
            countRepeat[candles[x]] = 1;
        } else {
            countRepeat[candles[x]] = countRepeat[candles[x]] + 1;

        }
    }

    console.log(countRepeat);
    let arrayValues = Object.values(countRepeat);
    const max = Math.max(...arrayValues);
    return max;
}


const arr = [3,2,1,3];

birthdayCakeCandles(arr);