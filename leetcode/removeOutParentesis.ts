function removeOuterParentheses(S: string): string {
    let parenthesesCount: number = 0;
    let result: string = '';

    for( let x: number = 0; x < S.length; x++ ) {
        const char: string = S[x];
        if ( char === '(' ) {
            if( parenthesesCount ) {
                result += char;
            }
            parenthesesCount++;
        }
        if ( char === ')' ) {
            parenthesesCount--;
            if( parenthesesCount ) {
                result += char;
            }
        }
    }
    return result;
};


console.log(removeOuterParentheses("(()())(())"))