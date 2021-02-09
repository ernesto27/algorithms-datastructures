function findLucky(arr) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            map[arr[i]] += 1;
        }
        else {
            map[arr[i]] = 1;
        }
    }
    console.log(map);
    var resp = [];
    for (var prop in map) {
        console.log(prop);
        console.log(map[prop]);
        if (Number(prop) === map[prop]) {
            resp.push(map[prop]);
        }
    }
    if (resp.length === 0)
        return -1;
    console.log(arr);
    return Math.max.apply(Math, resp);
}
;
console.log(findLucky([2, 2, 3, 4]));
