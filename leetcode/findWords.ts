function findWords(words: string[]): string[] {
    const firstMap: {} = {
        'q': true,
        'w': true,
        'e': true,
        'r': true,
        't': true,
        'y': true,
        'u': true,
        'i': true,
        'o': true,
        'p': true
    };

    const secondMap: {} = {
        'a': true,
        's': true,
        'd': true,
        'f': true,
        'g': true,
        'h': true,
        'j': true,
        'k': true,
        'l': true,
    };

    const thirdMap: {} = {
        'z': true,
        'x': true,
        'c': true,
        'v': true,
        'b': true,
        'n': true,
        'm': true,
    };

    const resp: string[] = [];

    for ( let i: number = 0; i < words.length; i++ ) {
        const word: string = words[i].toLowerCase();
        const currentArray: string[] = word.split('');
        // console.log(currentArray) 

        let checkFirst: boolean = currentArray.every((item) => {
            return firstMap[item] !== undefined;
        });
        if(checkFirst === true) {
            resp.push(words[i]);
            continue;
        }

        let checkSecond: boolean = currentArray.every((item) => {
            return secondMap[item] !== undefined;
        });
        if(checkSecond === true) {
            resp.push(words[i]);
            continue;
        }

        let checkThird: boolean = currentArray.every((item) => {
            return thirdMap[item] !== undefined;
        });
        if(checkThird === true) {
            resp.push(words[i]);
            continue;
        }
    }

    console.log(resp)
    return resp;
};


findWords(["Hello", "Alaska", "Dad", "Peace"]);
//findWords(["Alasdka"]);