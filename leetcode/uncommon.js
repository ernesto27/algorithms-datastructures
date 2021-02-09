function uncommonFromSentences(A, B) {
    var map = {};
    var concatArrays = A.split(' ').concat(B.split(' '));
    console.log(concatArrays);
    for (var i = 0; i < concatArrays.length; i++) {
        if (map[concatArrays[i]] !== undefined) {
            map[concatArrays[i]] += 1;
        }
        else {
            map[concatArrays[i]] = 1;
        }
    }
    var resp = [];
    for (var item in map) {
        if (map[item] === 1) {
            resp.push(item);
        }
    }
    console.log(resp);
    return resp;
}
;
uncommonFromSentences("this apple is sweet", "this apple is sour");
