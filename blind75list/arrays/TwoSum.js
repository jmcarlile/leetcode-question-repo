// https://leetcode.com/problems/two-sum/

/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

/*
notes:
iterate over array, for each item, check if compliment is in map. if it is return both, if not add current item to hashset

TC: O(n) // iterate over array once (or twice depending on implementation)
SC:O(n) // each item can be added to Map
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let processed = new Map();

    let index = 0;
    for (num of nums) {
        let compliment = target - num;
        if (processed.has(compliment)) {
            return [processed.get(compliment), index];
        }
        processed.set(num, index);
        index++;
    }
};