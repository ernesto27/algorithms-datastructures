// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    console.log(n)

    var people = 5;
    var sum = 0;

    for ( var x = 0; x < n; x++ ) {
        people = Math.floor(people / 2);
        sum += people;
        people *= 3;
    }

    return sum;

}

viralAdvertising(3)