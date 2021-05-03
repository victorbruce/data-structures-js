/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  if (nums.length < 1) {
      return -1;
  }
  
  let maxSum = nums[0];
  let totalSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      totalSum = Math.max(totalSum + nums[i], nums[i]);
      maxSum = Math.max(totalSum, maxSum);
  }
  
  return maxSum;
  
};