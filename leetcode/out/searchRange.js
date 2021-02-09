function searchRange(nums, target) {
    const resp = [];
    nums.forEach((item, index) => {
        if (item === target) {
            if (resp.length === 2) {
                resp[1] = index;
            }
            else {
                resp.push(index);
            }
        }
    });
    if (resp.length === 0)
        return [-1, -1];
    if (resp.length === 1)
        resp.push(resp[0]);
    return resp;
}
;
//# sourceMappingURL=searchRange.js.map