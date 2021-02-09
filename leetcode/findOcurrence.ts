function findOcurrences(text: string, first: string, second: string): string[] {

    const resp: string[] = [];
    const textArr: string[] = text.split(' ');

    for ( let i: number = 0; i < textArr.length; i++ ) {
        if(textArr[i] === first && textArr[i + 1] === second && textArr[i + 2] !== undefined) {
            resp.push(textArr[i + 2]);
        } else {
            continue;
        }
    }

    console.log(resp)

    return resp;

};

findOcurrences("ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk", "lnlqhmaohv", "ypkk" );