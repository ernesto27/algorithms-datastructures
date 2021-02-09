function frequencySort(nums) {
    var map = {};
    var resp = [];
    nums.forEach(function (item) {
        if (map[item] !== undefined) {
            map[item] += 1;
        }
        else {
            map[item] = 1;
        }
    });
    var a = Object.entries(map).sort(function (a, b) { return b[1] - a[1]; });
    console.log(map);
    console.log(resp);
    return [];
}
;
frequencySort([1, 1, 2, 2, 2, 3]);
