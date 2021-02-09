function diStringMatch(S: string): number[] {
    let resp:number[] = [];
    let ICount:number = 0;
    let DCount:number = S.length;

    for (let i:number = 0; i <= S.length; i++) {
        if (S[i] === 'D') {
            resp.push(DCount);
            DCount -= 1;
        } else if(S[i] === 'I') {
            resp.push(ICount);
            ICount += 1;
        }
    }

    resp.push(ICount)

    return resp;
};

console.log(diStringMatch("IDID"))