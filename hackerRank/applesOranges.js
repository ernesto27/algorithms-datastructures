// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // console.log(s)
    // console.log(t)
    // console.log(a)
    // console.log(b)
    // console.log(apples)
    // console.log(oranges)

    const applesDistance = [];
    const orangeDistance = [];

    let applesCount = 0;
    let orangesCount = 0;

    apples.forEach(element => {
        console.log(element)
        //applesDistance.push(a + element);
        var appleDistance = a + element;
        if ( appleDistance >= s && appleDistance <= t ) {
            applesCount += 1;
        }

    });

    oranges.forEach(element => {
        //orangeDistance.push(b + element);
        var orangeDistance = b + element;
        if ( orangeDistance >= s && orangeDistance <= t ) {
            orangesCount += 1;
        }
    });

    console.log(applesCount);
    console.log(orangesCount);
    return;

    // // Count frutis on house land
    // let applesCount = 0;
    // let orangesCount = 0;
    // applesDistance.forEach(item => {
    //     if ( item >= s && item <= t ) {
    //         applesCount += 1;
    //     }
    // });

    // orangeDistance.forEach(item => {
    //     if ( item >= s && item <= t ) {
    //         orangesCount += 1;
    //     }
    // });

    // console.log(applesCount);
    // console.log(orangesCount);

}

var s = 7;
var t = 11;
var a = 5
var b = 15
var apples = [ -2, 2, 1 ]
var oranges = [ 5, -6 ]

countApplesAndOranges(s, t, a, b, apples, oranges)