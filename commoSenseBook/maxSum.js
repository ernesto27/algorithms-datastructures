function maxSum(array) {
    let currentSum = 0;
    let greatestSum = 0;

    array.forEach(num => {
        if (currentSum + num < 0) {
            currentSum = 0;
        } else {
            currentSum += num;
            if (currentSum > greatestSum) {
                greatestSum = currentSum;
            }
        }
    });

    return greatestSum;
}

console.log(maxSum([3, -4, 4, -3, 5, -9]));