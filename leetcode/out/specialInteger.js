function findSpecialInteger(arr) {
    let map = {};
    arr.forEach((item, index) => {
        if (map[item] === undefined) {
            map[item] = 1;
        }
        else {
            map[item] = map[item] + 1;
        }
    });
    console.log(map);
    let resp = 0;
    let greather = 0;
    for (let prop in map) {
        if (map[prop] > greather) {
            resp = Number(prop);
            greather = map[prop];
        }
    }
    return resp;
}
;
// counsole.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
console.log(findSpecialInteger([6700, 8858, 8858, 8858, 8858]));
//# sourceMappingURL=specialInteger.js.map