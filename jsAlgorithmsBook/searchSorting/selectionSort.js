function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function selectionSort(items) {
    var len = items.length;
    var min;

    for ( var i = 0; i < len; i++ ) {
        min = i;

        for ( var j = i + 1; j < len; j++ ) {
            if ( items[j] < items[min]) {
                min = j;
            }
        }

        if ( i != min ) {
            swap(items, i , min);
        }
    }

    return items;
}

console.log(selectionSort([6,1,23,4,2,3]));