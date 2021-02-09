function removeOuterParentheses(S) {
    var parenthesesCount = 0;
    var result = '';
    for (var x = 0; x < S.length; x++) {
        var char = S[x];
        if (char === '(') {
            if (parenthesesCount) {
                result += char;
            }
            parenthesesCount++;
        }
        if (char === ')') {
            parenthesesCount--;
            if (parenthesesCount) {
                result += char;
            }
        }
    }
    return result;
}
;
console.log(removeOuterParentheses("(()())(())"));
