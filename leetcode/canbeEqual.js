function canBeEqual(target, arr) {
    arr.sort(function (a, b) { return a - b; });
    return arrayEquals(target, arr);
}
;
function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every(function (val, index) { return val === b[index]; });
}
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3, 3]));
