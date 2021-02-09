function halvesAreAlike(s) {
    let word = s.toLowerCase().split('');
    let left = word.slice(0, Math.ceil(word.length / 2));
    let right = word.slice(Math.ceil(word.length / 2));
    console.log(left);
    console.log(right);
    let countLeft = 0;
    let countRigth = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    left.forEach((item, index) => {
        if (vowels.indexOf(item) !== -1) {
            countLeft += 1;
        }
    });
    right.forEach((item, index) => {
        if (vowels.indexOf(item) !== -1) {
            countRigth += 1;
        }
    });
    return countLeft === countRigth;
}
;
console.log(halvesAreAlike("book"));
console.log(halvesAreAlike("MerryChristmas"));
//# sourceMappingURL=halvesAlike.js.map