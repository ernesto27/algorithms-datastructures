function merge(leftA, rightA) {
    var results = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while ( leftIndex < leftA.length && rightIndex < rightA.length) {
        if( leftA[leftIndex] < rightA[rightIndex] ) {
            results.push(leftA[leftIndex++]);
        } else {
            results.push(rightA[rightIndex++]);
        }
    }

    var leftRemains = leftA.slice(leftIndex);
    var rightRemains = rightA.slice(rightIndex);

    return results.concat(leftRemains).concat(rightRemains);
}


function mergeSort(array) {
    if(array.length < 2) {
        return array;
    }

    var midPoint = Math.floor((array.length) / 2)
    var leftArray = array.slice(0, midPoint);
    var rightArray = array.slice(midPoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([6,1,23,4,2,3]));