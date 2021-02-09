function frequencySort(nums) {
    const map = {};
    let resp = [];
    nums.forEach((item) => {
        if (map[item] !== undefined) {
            map[item] += 1;
        }
        else {
            map[item] = 1;
        }
    });
    const a = Object.entries(map).sort((a, b) => b[1] - a[1]);
    console.log(map);
    console.log(resp);
    return [];
}
;
frequencySort([1, 1, 2, 2, 2, 3]);
//# sourceMappingURL=freqSort.js.map