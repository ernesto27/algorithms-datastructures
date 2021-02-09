function decompressRLElist(nums) {
    var resp = [];
    for (var i = 0; i < nums.length; i += 2) {
        // console.log(nums[i]);
        for (var x = 0; x < nums[i]; x++) {
            resp.push(nums[i + 1]);
        }
    }
    return resp;
}
;
console.log(decompressRLElist([1, 2, 3, 4]));
