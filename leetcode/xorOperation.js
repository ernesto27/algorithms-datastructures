function xorOperation(n, start) {
    var operation;
    var nums = [];
    for (var i = 0; i < n; i++) {
        nums.push(start);
        start += 2;
    }
    operation = nums.join('^');
    console.log(operation);
    console.log(nums);
    return eval(operation);
}
;
console.log(xorOperation(5, 0));
