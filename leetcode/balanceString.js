function balancedStringSplit(s) {
    var countR = 0;
    var countL = 0;
    var resp = 0;
    for (var x = 0; x < s.length; x++) {
        if (s[x] === 'L') {
            countR += 1;
        }
        else {
            countL += 1;
        }
        if (countR === countL) {
            resp += 1;
        }
    }
    return resp;
}
;
console.log(balancedStringSplit("RLRRLLRLRL"));
