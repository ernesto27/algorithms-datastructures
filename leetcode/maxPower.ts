function maxPower(s: string): number {
    let resp: number = 1;
    const values: number[] = [];

    for ( let i: number = 0; i < s.length; i++ ) {
        for ( let x: number = i + 1; x < s.length; x++ ) {      
            if( s[x] !== s[i]) {
                values.push(resp);
                resp = 1;
                break;
            } else {
                resp += 1;
                i += 1;
            }

            if( s.length - 1 === x ) {
                values.push(resp)
            }
             
        }   
    }

    return Math.max(...values);
};

// console.log(maxPower("leetcode"));
// console.log(maxPower("abbcccddddeeeeedcba"));

// console.log(maxPower("aabbbbbccccdddddddeffffffggghhhhhiiiiijjjkkkkkllllmmmmmnnnnnoopppqrrrrsssttttuuuuvvvvwwwwwwwxxxxxyyyzzzzzzzz"));

console.log(maxPower("c"));
// console.log(maxPower("cc"));

