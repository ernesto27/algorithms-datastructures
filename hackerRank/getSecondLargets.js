function getSecondLargest(nums) {
    // Complete the function

    nums.sort((a, b) => a - b);
    console.log(nums)
    const uniq =  [...new Set(nums)];
    console.log(uniq[uniq.length - 2])
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

getSecondLargest(arr)