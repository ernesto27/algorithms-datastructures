function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    console.log(p, d , m , s)

    let sum = 0;
    let count = [];

    while(sum <= s) {
        sum += p;
        count.push(p);
        if(p - d >= m) {
            p -= d;
        } else {
            p = m;
        }
        //console.log(p)
    }

    console.log(count.length - 1)

}

const p = 20;
const d = 3;
const m = 6;
const s = 80;

howManyGames(p, d, m , s)