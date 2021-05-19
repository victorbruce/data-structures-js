/**
 * @param {number[]} nums
 * @return {number[]}
 */

// SOLUTION 1:
var sortedSquares = function (nums) {
  if (!nums) {
    return;
  }

  const squaredArr = [];
  for (num of nums) {
    squaredArr.push(num * num);
  }

  squaredArr.sort((a, b) => a - b);
  return squaredArr;
};

// Time complexity: O(nlogn) + O(n), Space complexity: O(n)

console.log(sortedSquares([-7,-3,2,3,11]));
