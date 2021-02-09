
function reverseString(s: string[]): void {
    
    for( let i:number = 0; i < Math.floor(s.length / 2); i++ ) {
        let first:string = s[i];
        let latest:string = s[s.length - ( i + 1)];

        s[i] = latest;
        s[s.length - ( i + 1)] = first;
    }

};


reverseString(["h","e","l","l","o"])