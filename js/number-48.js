function test(arr_nums) {
    for (n of arr_nums) {
        if (n == 1 | n > 2 & n % 2 == 0)
            return false;
    }
    return true;
}

nums = [2, 3, 5, 7]
console.log("Original array of integers: " + nums)
console.log("In the said array check every numbers are prime or not! " + test(nums));
nums = [2, 3, 5, 7, 8]
console.log("Original array of integers: " + nums)
console.log("In the said array check every numbers are prime or not! " + test(nums));
