function permute(nums) {
    if (nums.length === 0) {
        return [];
    }
    let res = [];
    function backtrack(curr) {
        if (curr.length === nums.length) {
            res.push(curr);
            return;
        }
        else {
            const used = new Set(curr);
            for (const num of nums) {
                if (!used.has(num)) {
                    backtrack([...curr, num]);
                }
            }
        }
    }
    backtrack([]);
    return res;
}
permute([1, 2, 3]);
//# sourceMappingURL=permutation.js.map