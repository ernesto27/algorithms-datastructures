function bynarySearch(array: number[] , value: number): number{
    let lowerBound:number = 0;
    let upperBound:number = array.length - 1;

    while (lowerBound <= upperBound) {
        let midPoint:number = Math.ceil((upperBound + lowerBound) / 2);
        console.log(midPoint)
        let valueAtMidPoint:number = array[midPoint];

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