    function uniqueMorseRepresentations(words: string[]): number {

        const morseCodes:string[] = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."] 
        const map = {};
        let resp:number = 0;

        words.forEach((word, index) => {
            let currentWord:string = '';
            for ( let i:number = 0; i < word.length; i++) {
                currentWord += morseCodes[word[i].charCodeAt(0) - 97];
            }

            console.log(currentWord);
            console.log('**************')

            if (map[currentWord] === undefined) {
                map[currentWord] = true;
                resp += 1;
            } else {
            }

        });

        return resp;
    };

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))








