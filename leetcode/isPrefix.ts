// interface String {    
//     endsWith(searchString: string, endPosition?: number): boolean;
// };

function isPrefixOfWord(sentence: string, searchWord: string): number {
    const sentenceArray: string[] = sentence.split(' ');

    let resp: number = -1;
    for ( let i: number = 0; i < sentenceArray.length; i++ ) {
        console.log(sentenceArray[i].startsWith(searchWord))
        if ( sentenceArray[i].startsWith(searchWord) === true) { 
            resp = i + 1;
            break;
        }
    }
    console.log(resp)
    return resp;
};

isPrefixOfWord("i love eating burger", "burg")