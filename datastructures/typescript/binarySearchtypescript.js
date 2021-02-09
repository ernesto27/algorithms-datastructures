function bynarySearch(array, value) {
    var lowerBound = 0;
    var upperBound = array.length - 1;
    while (lowerBound <= upperBound) {
        var midPoint = Math.ceil((upperBound + lowerBound) / 2);
        console.log(midPoint);
        var valueAtMidPoint = array[midPoint];
        if (value < valueAtMidPoint) {
            upperBound = midPoint - 1;
        }
        else if (value > valueAtMidPoint) {
            lowerBound = midPoint + 1;
        }
        else if (value === valueAtMidPoint) {
            return midPoint;
        }
    }
    return null;
}
var result = bynarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 200);
