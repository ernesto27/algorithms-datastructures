function decompressRLElist(nums) {
    const resp = [];
    for (let i = 0; i < nums.length; i += 2) {
        // console.log(nums[i]);
        for (let x = 0; x < nums[i]; x++) {
            resp.push(nums[i + 1]);
        }
    }
    return resp;
}
;
console.log(decompressRLElist([1, 2, 3, 4]));
//# sourceMappingURL=decompressList.js.map