function canBeEqual(target, arr) {
    arr.sort((a, b) => a - b);
    return arrayEquals(target, arr);
}
;
function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3, 3]));
//# sourceMappingURL=canbeEqual.js.map