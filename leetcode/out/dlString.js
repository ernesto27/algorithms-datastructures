function diStringMatch(S) {
    let resp = [];
    let ICount = 0;
    let DCount = S.length;
    for (let i = 0; i <= S.length; i++) {
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
//# sourceMappingURL=dlString.js.map