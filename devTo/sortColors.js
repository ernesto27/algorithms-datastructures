function sortColors(nums) {

    var smaller = 0;
    var eq = 0;
    var larger = nums.length - 1;

    while(eq <= larger) {
        if(nums[eq] === 0) {
            swap(smaller, eq);
            ++smaller;
            ++eq;
        } else if (nums[eq] == 2) {
            swap(larger, eq);
            --larger;
        } else {
            eq++;
        }
    }
}

function swap(index1, index2){
    var temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

var nums = [2, 1, 2, 1, 1, 0, 1, 0, 2];
console.log(nums)
sortColors(nums)
console.log(nums)