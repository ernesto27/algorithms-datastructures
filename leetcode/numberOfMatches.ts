function numberOfMatches(n: number): number {
    if (n === 1) {
        return 0;
    }

    if (n % 2 === 0) {
        return n/2 + numberOfMatches(n/2);
    } 
    return (n-1)/2 + numberOfMatches(((n-1)/2) + 1);

};




console.log(numberOfMatches(7));