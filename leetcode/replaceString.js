function reverseString(s) {
    for (var i = 0; i < Math.floor(s.length / 2); i++) {
        var first = s[i];
        var latest = s[s.length - (i + 1)];
        s[i] = latest;
        s[s.length - (i + 1)] = first;
    }
    console.log(s);
}
;
reverseString(["h", "e", "l", "l", "o"]);
