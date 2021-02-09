function merge(nums1, m, nums2, n) {
    // console.log(nums1)
    nums1.splice(m, (nums1.length - m) + 1);
    nums2.splice(n, (nums2.length - m) + 1);
    for (var x = 0; x < nums2.length; x++) {
        nums1.push(nums2[x]);
    }
    nums1.sort(function (a, b) {
        return a - b;
    });
    console.log(nums1);
}
;
// var a = [1,2,3,0,0,0]
// var b = [2,5,6]
var a = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
var m = 6;
var b = [1, 2, 2];
var n = 3;
merge(a, m, b, n);
