var array = [1, 3, 2, 8, 7, 6, 5]
var length = array.length;

Qsort(array, 0, length - 1);
console.log(array)

function Qsort(array, lower, high) {
    if( lower < high) {
        var p = partition(array, lower, high);
        Qsort(array, lower, p - 1);
        Qsort(array, p + 1, high);
    }
}

function partition(array, lower, high) {
    var pivot = array[high];
    var i = lower;
    for ( var j = lower; j < high; ++j){
        if(array[j] < pivot) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
        }
    }
    var temp = array[i];
    array[i] = array[high];
    array[high] = temp;
    return i;
}