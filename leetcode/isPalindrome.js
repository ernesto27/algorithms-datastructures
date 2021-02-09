function isPalindrome(s) {
    var cleanString = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    var mid = Math.floor(cleanString.length / 2);
    for (var x = 0; x < mid; x++) {
        var first = cleanString[x];
        var last = cleanString[cleanString.length - (x + 1)];
        if (first !== last) {
            return false;
        }
    }
    return true;
}
;
console.log(isPalindrome("A man, a plan, a canal: Panama"));
