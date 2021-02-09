const array = [0, 5, 2, 1, 6, 3];

function defPartition(array, leftPointer, rightPointer) {
    console.log(rightPointer)
    const pivotPosition = rightPointer;
    const pivot = array[pivotPosition];

    rightPointer -= 1;

    while(true) {
        while(array[leftPointer] < pivot) {
            leftPointer += 1;
        }

        while(array[rightPointer] > pivot) {
            rightPointer -= 1;
        }
        
        if(leftPointer >= rightPointer) {
            break;
        } else {
            array = swap(array, leftPointer, rightPointer);
        }
    }

    array = swap(array, leftPointer, pivotPosition);
    console.log('array', array);
    return leftPointer;
}


function swap(array, pointer1, pointer2) {
    const tempValue = array[pointer1];
    array[pointer1] = array[pointer2];
    array[pointer2] = tempValue;
    return array;
}

function quickSort(array, leftIndex, rightIndex) {
    if (rightIndex - leftIndex <= 0) {
        return false;
    }

    let pivotPosition = defPartition(array, leftIndex, rightIndex);

    quickSort(array, leftIndex, pivotPosition - 1);
    quickSort(array, pivotPosition +  1, rightIndex);
}

// console.log(defPartition(array, 0, array.length - 1))

quickSort(array,  0, array.length - 1)