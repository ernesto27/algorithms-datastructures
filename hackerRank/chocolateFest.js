function chocolateFeast(n, c, m) {
    console.log(n, c, m)

    let count = 0;
    let wrappers = 0;
    // Initial buy
    count = Math.floor(n / c);
    wrappers = count;

    while(wrappers >= m) {
        count += 1;
        wrappers -= m - 1;
    }

    console.log(count)
    return count;

}


// let n = 10;
// let c = 2;
// let m = 5;

// let n = 12;
// let c = 4;
// let m = 4;

let n = 6;
let c = 2;
let m = 2;

chocolateFeast(n, c, m)