var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function heightChecker(heights) {
    var originalArray = __spreadArrays(heights);
    heights.sort(function (a, b) {
        return a - b;
    });
    var response = 0;
    for (var x = 0; x < heights.length; x++) {
        if (heights[x] !== originalArray[x]) {
            response += 1;
        }
    }
    return response;
}
;
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
