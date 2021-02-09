function findSpecialInteger(arr) {
    var map = {};
    arr.forEach(function (item, index) {
        if (map[item] === undefined) {
            map[item] = 1;
        }
        else {
            map[item] = map[item] + 1;
        }
    });
    console.log(map);
    var resp = 0;
    var greather = 0;
    for (var prop in map) {
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
