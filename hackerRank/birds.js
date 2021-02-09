function migratoryBirds(arr) {
    var obj = {};

    arr.forEach(element => {
        if(obj[element]) {
            obj[element] += 1;
        } else {
            obj[element] = 1;
        }
    });

    var response = [];
    var maxValue = 1;
    for (prop in obj) {
        if(obj[prop] == maxValue) {
            response.push(obj[prop]);
        } else if (obj[prop] > maxValue) {
            response.push(obj[prop]);
            maxValue = obj[prop];
        }
    }

    console.log(obj)
    console.log(response)
}


var arr = [1, 4, 4, 4, 5, 5, 5, 3];

migratoryBirds(arr)