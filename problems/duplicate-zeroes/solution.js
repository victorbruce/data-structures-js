/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }

      i++
    }
  }
};

// time complexity: O(n^2) | space: O(1)
duplicateZeros([1, 0, 2, 3, 0, 4, 5,0]);
