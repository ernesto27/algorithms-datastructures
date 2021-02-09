function isPalindrome(s: string): boolean {
    const cleanString:string = s.replace(/[^a-zA-Z]/g,'').toLowerCase();
    const mid = Math.floor(cleanString.length / 2);
    for ( let x:number = 0; x <= mid; x++) {
        let first = cleanString[x];
        let last = cleanString[cleanString.length - (x + 1)]
        if(first !== last) {
            return false;
        }
    }
    
    return true;

};


console.log(isPalindrome("0P"))