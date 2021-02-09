function freqAlphabets(s: string): string {
    const map = {
        '1': 'a',
        '2': 'b',
        '3':'c',
        '4':'d',
        '5':'e',
        '6':'f',
        '7':'g',
        '8':'h',
        '9':'i',
        '10#':'j',
        '11#':'k',
        '12#':'l',
        '13#':'m',
        '14#':'n',
        '15#':'o',
        '16#':'p',
        '17#':'q',
        '18#':'r',
        '19#':'s',
        '20#':'t',
        '21#':'u',
        '22#':'v',
        '23#':'w',
        '24#':'x',
        '25#':'y',
        '26#':'z'
    }

    let resp: string = '';
    for ( let x: number = 0; x < s.length; x++ ) {
        if ( s[x + 2 ] === '#') {
            resp += map[s[x] + s[x + 1] + '#']
            x += 2;
        } else {
            resp += map[s[x]];
        }
    }

    console.log(resp)
    return resp;

};


freqAlphabets("1326#")