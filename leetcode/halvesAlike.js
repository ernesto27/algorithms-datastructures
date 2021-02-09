function halvesAreAlike(s) {
    var word = s.toLowerCase().split('');
    var left = word.slice(0, Math.ceil(word.length / 2));
    var right = word.slice(Math.ceil(word.length / 2));
    console.log(left);
    console.log(right);
    var countLeft = 0;
    var countRigth = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    left.forEach(function (item, index) {
        if (vowels.indexOf(item) !== -1) {
            countLeft += 1;
        }
    });
    right.forEach(function (item, index) {
        if (vowels.indexOf(item) !== -1) {
            countRigth += 1;
        }
    });
    return countLeft === countRigth;
}
;
console.log(halvesAreAlike("book"));
console.log(halvesAreAlike("MerryChristmas"));
