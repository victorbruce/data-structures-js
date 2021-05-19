/**
 * @param {number[]} nums
 * @return {number}
 */

// SOLUTION 2:
 var findNumbers = function(nums) {
  if (!nums) {
    return;
  }

  let count = 0;

  for (num of nums) {
    if (num.toString().length % 2 === 0) {
      count++
    }
  }

  return count;
};

// Time Complexity: O(n) Space Complexity: O(1);

console.log(findNumbers([555,901,482,1771]))


// SOLUTION 1:
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var findNumbers = function(nums) {
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if ((nums[i] === 100000) || (nums[i] >= 1000 && nums[i] < 10000) || (nums[i] >= 10 && nums[i] < 100)) {
//       count++
//     }
//   }

//   return count;
// };