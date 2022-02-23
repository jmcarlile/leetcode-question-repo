/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // find index of nums1[i] in num2, 
    //starting at j+1 loop to j<num2.length()
    // return value found if num2[j] > nums1[i]
    let solution = [];
    let found = false
    
    for (value of nums1) {
        found = false
        let index = nums2.indexOf(value)
        for (var j = index; j < nums2.length; j++) {
            if (value < nums2[j]) {
                solution.push(nums2[j]);
                found = true
                break;
            }
        }
        if (found == false) {
            solution.push(-1)
        }
    }
    return solution
};