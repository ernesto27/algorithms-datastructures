function uncommonFromSentences(A, B) {
    const map = {};
    const concatArrays = A.split(' ').concat(B.split(' '));
    console.log(concatArrays);
    for (let i = 0; i < concatArrays.length; i++) {
        if (map[concatArrays[i]] !== undefined) {
            map[concatArrays[i]] += 1;
        }
        else {
            map[concatArrays[i]] = 1;
        }
    }
    const resp = [];
    for (let item in map) {
        if (map[item] === 1) {
            resp.push(item);
        }
    }
    console.log(resp);
    return resp;
}
;
uncommonFromSentences("this apple is sweet", "this apple is sour");
//# sourceMappingURL=uncommon.js.map