function buildArray(target, n) {
    let resp = [];
    let indexArr = 0;
    for (let i = 1; i <= n; i++) {
        if (resp.length === target.length)
            break;
        resp.push('Push');
        if (i !== target[indexArr]) {
            resp.push('Pop');
            i--;
        }
        else {
            indexArr += 1;
        }
    }
    return resp;
}
;
console.log(buildArray([1, 2], 4));
//# sourceMappingURL=buildArray.js.map