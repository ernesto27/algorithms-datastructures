function freqAlphabets(s) {
    var map = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10#': 'j',
        '11#': 'k',
        '12#': 'l',
        '13#': 'm',
        '14#': 'n',
        '15#': 'o',
        '16#': 'p',
        '17#': 'q',
        '18#': 'r',
        '19#': 's',
        '20#': 't',
        '21#': 'u',
        '22#': 'v',
        '23#': 'w',
        '24#': 'x',
        '25#': 'y',
        '26#': 'z'
    };
    var resp = '';
    for (var x = 0; x < s.length; x++) {
        // Check number with #
        if (s[x + 2] === '#') {
            console.log(s[x] + s[x + 1]);
            resp += map[s[x] + s[x + 1] + '#'];
            x += 2;
        }
        else {
            resp += map[s[x]];
        }
    }
    console.log(resp);
    return '';
}
;
freqAlphabets("1326#");
