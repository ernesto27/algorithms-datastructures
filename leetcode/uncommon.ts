function uncommonFromSentences(A: string, B: string): string[] {

    const map = {};
    const concatArrays: string[] = A.split(' ').concat(B.split(' '));
    console.log(concatArrays)

    for( let i: number = 0; i < concatArrays.length; i++ ) {
        if(map[concatArrays[i]] !== undefined) {
            map[concatArrays[i]] += 1;
        } else {
            map[concatArrays[i]] = 1;
        }
    }

    const resp: string[] = [];

    for (let item in map) {
        if(map[item] === 1) {
            resp.push(item);
        }
    }


    console.log(resp)
    return resp;
};

uncommonFromSentences("this apple is sweet", "this apple is sour")