function intersetc(array1, array2) {
    var i = 0;
    var j = 0;
    var response = [];
    while( i < array1.length && j < array2.length) {
        if(array1[i] === array2[j]) {
            response.push(array1[i]);
            i++;
            j++;
        } else if(array1[i] > array2[j]) {
            j++;
        } else {
            i++;
        }
    }
    return response;
}

var array1 = [1,2,2,1]
var array2 = [2,2];

console.log(intersetc(array1, array2));