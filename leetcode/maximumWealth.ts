function maximumWealth(accounts: number[][]): number {
    let resp:number = 0;

    for ( let x:number = 0; x < accounts.length; x++ ) {
        let sum:number = 0;
        for ( let i:number = 0; i < accounts[x].length; i++) {
            sum += accounts[x][i];
        }

        if (sum > resp) {
            resp = sum;
        }
    }

    return resp;


};

maximumWealth([[1,2,3],[3,2,1]])