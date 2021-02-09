function sumOddLengthSubarrays(arr) {
    var subGroup = [];
    var sum = 0;
    for (var y = 1; y <= arr.length; y += 2) {
        console.log(y);
        if (y === 1) {
            for (var x = 0; x < arr.length; x++) {
                subGroup.push([arr[x]]);
            }
            continue;
        }
        for (var x = 0; x < arr.length; x++) {
            var item = arr.slice(x, y + x);
            if (item.length < y) {
                break;
            }
            subGroup.push(item);
        }
    }
    for (var i = 0; i < subGroup.length; i++) {
        var currItem = subGroup[i];
        var currSum = 0;
        if (currItem.length > 1) {
            currSum = currItem.reduce(function (a, b) { return a + b; }, 0);
        }
        else {
            currSum = currItem[0];
        }
        sum += currSum;
    }
    console.log(subGroup);
    console.log(sum);
    return sum;
}
;
sumOddLengthSubarrays([1, 4, 2, 5, 3]);
