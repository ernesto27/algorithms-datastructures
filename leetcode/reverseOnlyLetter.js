function reverseOnlyLetters(S) {
    var resp;
    var reverse;
    var indexSign = {};
    for (var x = 0; x < S.length; x++) {
        if (S[x].match(/[a-zA-Z]/g) === null) {
            indexSign[x] = S[x];
        }
    }
    resp = S.replace(/[^a-zA-Z]/g, "");
    console.log(resp);
    reverse = resp.split('').reverse();
    console.log(indexSign);
    for (var prop in indexSign) {
        reverse.splice(Number(prop), 0, indexSign[prop]);
    }
    console.log(reverse.join(''));
    return reverse.join('');
}
;
// reverseOnlyLetters("a-bC-dEf-ghIj")
reverseOnlyLetters("Test1ng-Leet=code-Q!");
