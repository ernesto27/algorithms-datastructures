function bynarySearch(array , value) {
    let lowerBound = 0;
    let upperBound = array.length - 1;

    console.log('binarySearch')
    while (lowerBound <= upperBound) {
        let midPoint = Math.ceil((upperBound + lowerBound) / 2);
        console.log(midPoint)
        let valueAtMidPoint = array[midPoint];

        // console.log(valueAtMidPoint)
        if (value < valueAtMidPoint) {
            upperBound = midPoint - 1;
        } else if (value > valueAtMidPoint) {
            lowerBound = midPoint + 1;
        } else if ( value === valueAtMidPoint) {
            return midPoint;
        }
    }
    return null;
}


const result = bynarySearch([1,2,3,4,5,6,7,8,9,10], 200);