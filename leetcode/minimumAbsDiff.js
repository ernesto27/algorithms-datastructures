function minimumAbsDifference(arr) {
    var resp = [];
    for (var i = 0; i < arr.length; i++) {
        var absVal = 999999;
        for (var x = 0; x < arr.length; x++) {
            if (i === x)
                continue;
            var currAbsVal = Math.abs(arr[i] - arr[x]);
            if (currAbsVal < absVal) {
                absVal = currAbsVal;
                resp[i] = [arr[i], arr[x]];
            }
        }
        console.log(resp);
    }
    return resp;
}
;
console.log(minimumAbsDifference([4, 2, 1, 3]));
