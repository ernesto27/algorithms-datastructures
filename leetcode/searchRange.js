function searchRange(nums, target) {
    var resp = [];
    nums.forEach(function (item, index) {
        if (item === target) {
            resp.push(index);
        }
    });
    return resp;
}
;
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
