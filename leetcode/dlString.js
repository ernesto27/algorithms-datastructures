function diStringMatch(S) {
    var resp = [];
    var ICount = 0;
    var DCount = S.length;
    for (var i = 0; i <= S.length; i++) {
        if (S[i] === 'D') {
            resp.push(DCount);
            DCount -= 1;
        }
        else if (S[i] === 'I') {
            resp.push(ICount);
            ICount += 1;
        }
    }
    resp.push(ICount);
    return resp;
}
;
console.log(diStringMatch("IDID"));
