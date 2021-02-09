function buildArray(target, n) {
    var resp = [];
    var indexArr = 0;
    for (var i = 1; i <= n; i++) {
        if (resp.length === target.length)
            break;
        resp.push('Push');
        if (i !== target[indexArr]) {
            resp.push('Pop');
        }
        else {
            indexArr += 1;
        }
    }
    return resp;
}
;
console.log(buildArray([1, 2], 4));
