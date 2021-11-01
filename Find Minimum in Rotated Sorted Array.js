#JavaScript
var findMin = function(nums) {
    
        // Special case
    if (nums === null || nums.length === 0) {
        return -1;
    }
    
    let left = 0;
    let right = nums.length - 1;
    // cibler pivot de rotation bach t3raf fin t9lab
    
    while (left < right) {
        // Middle pointer
        let middle = left + parseInt((right - left) / 2);
        console.log(middle);
        console.log(nums[middle]);
        if (nums[middle] > nums[right]) {
            left = middle + 1; // akhir valeur b9at hna hiya pivot
        }
        else {
            right = middle; // rja3 lor rak khliti pivot wra lmiddle
        }
    }
    return nums[left];
    
};
______________________________________________________________________________
#Java
