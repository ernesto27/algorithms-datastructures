function reverseOnlyLetters(S: string): string {

    let resp: string;
    let reverse: string[];
    let indexSign = {};

    for ( let x: number = 0; x < S.length; x++ ) {
        if ( S[x].match(/[a-zA-Z]/g) === null) {
            indexSign[x] = S[x];
        }
    }

    resp = S.replace(/[^a-zA-Z]/g, "");
    reverse = resp.split('').reverse();

    for ( let prop in indexSign ) {
        reverse.splice(Number(prop), 0, indexSign[prop]);
    }

    console.log(reverse.join(''))
    return reverse.join('');
};

// reverseOnlyLetters("a-bC-dEf-ghIj")
reverseOnlyLetters("Test1ng-Leet=code-Q!")

