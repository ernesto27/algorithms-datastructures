var trimMean = function(arr) {
    arr.sort((a,b) => a-b);
    let total = 0;
    // remove elements from start and end
    const removeIndex = Math.round(arr.length * .05);
    for (let i = removeIndex; i < arr.length - removeIndex; i++) {
        total += arr[i]
    }
    return total / (arr.length - 2 * removeIndex);
};

trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4])