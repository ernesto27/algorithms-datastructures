// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    // console.log(k);
    // console.log(height);

    let response = 0;
    // height.forEach(item => {
    //     if(item > k) {
    //         // change something
    //         response = item - k;
    //     }
    // });

    height.sort((a, b) => {
        return b - a;
    })

    if(height[0] > k) {
        response = height[0] - k;
    }

    return response;

}

var k = 4;
var height = [ 1, 6, 3, 5, 2 ];

console.log(hurdleRace(k, height));