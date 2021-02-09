function xorOperation(n, start) {
    let operation;
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(start);
        start += 2;
    }
    operation = nums.join('^');
    return eval(operation);
}
;
console.log(xorOperation(5, 0));
//# sourceMappingURL=xorOperation.js.map