function stringMatching(words: string[]): string[] {

    const resp: string[] = [];

    for ( let i: number = 0; i < words.length; i++ ) {

        for ( let x: number = 0; x < words.length; x++ ) {
            if ( i === x ) continue;
            if ( words[x].indexOf(words[i]) !== - 1) {
                resp.push(words[i]);
                break;
            }
        }
    }
    return resp;
};

stringMatching(["mass","as","hero","superhero"])