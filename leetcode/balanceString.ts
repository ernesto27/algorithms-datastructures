function balancedStringSplit(s: string): number {
    let countR: number = 0;
    let countL: number = 0;
    let resp: number = 0;
    
    for ( let x: number = 0; x < s.length; x++ ) {
        if ( s[x] === 'R' ) {
            countR += 1;
        } else {
            countL += 1;
        }
        
        if( countR === countL) {
            resp += 1;
        }
    }
    
    return resp;
    
};


console.log(balancedStringSplit("RLRRRLLRLL"))