// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

// SOLUTION 2:
 var findMaxConsecutiveOnes = function(nums) {
   let count = 0;
   const results = [];

   for (let i = 0; i < nums.length; i++) {
     if (nums[i] === 1) {
       count++;
     } else {
       results.push(count);
       count = 0;
     }
   }

   results.push(count);
   return Math.max(...results);
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));


// SOLUTION 1:
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var findMaxConsecutiveOnes = function(nums) {
//   let numOfOnes = 0;
//   let max = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       numOfOnes++;
//     } else {
//       if(numOfOnes > max) {
//         max = numOfOnes;
//       } else if (max >= nums.length / 2) {
//         return max;
//       }
//       numOfOnes = 0;
//     }
//   }

//   return Math.max(numOfOnes, max);
// };

