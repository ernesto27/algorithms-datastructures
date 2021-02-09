function checkIfExist(arr) {
    for (var x = 0; x < arr.length; x++) {
        for (var y = 0; y < arr.length; y++) {
            if (x === y)
                continue;
            var sum = arr[y] * 2;
            if (sum === arr[x]) {
                return true;
            }
        }
    }
    return false;
}
;
console.log(checkIfExist([10, 2, 5, 3]));
