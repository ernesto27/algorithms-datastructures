function intersect(nums1, nums2) {
    var response = [];
    for (var x = 0; x < nums1.length; x++) {
        for (var y = 0; y < nums2.length; y++) {
            if (nums1[x] === nums2[y]) {
                response.push(nums2[y]);
                nums2.splice(y, 1);
            }
        }
    }
    console.log(response);
    return response;
}
;
intersect([1, 2, 2, 1], [2, 2]);
