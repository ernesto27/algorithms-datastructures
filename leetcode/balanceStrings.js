/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let countR = 0;
    let countL = 0;
    let lastValue = s[0];
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== lastValue) {
            if (countL === countR) count += 1;

            countL = 0;
            countR = 0;
            i -= 1;
            continue;
        }

        if (s[i] === 'R') {
            countR += 1;
            lastValue = 'R';
        } else if (s[i] === 'L') {
            countL += 1;
            lastValue = 'L';
        }
    }

    return count;
};


console.log(balancedStringSplit("RLRRLLRLRL"))



