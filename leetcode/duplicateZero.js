function duplicateZeros(arr) {
    const tempLength = arr.length;
    for (var x = 0; x <= arr.length; x++) {
        if (arr[x] === 0) {
            arr.splice(x, 0, 0);
            x += 1;
        }
    }

    arr.splice(tempLength, arr.length)

    console.log(arr);
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
