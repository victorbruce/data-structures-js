// SOLUTION 1:

// function validateSubsequence(array, sequence) {
//   let seqIndex = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (seqIndex === sequence.length) {
//       return true;
//     }
//     if (sequence[seqIndex] === array[i]) {
//       seqIndex++;
//     }
//   }

//   return seqIndex === sequence.length;

// }

// Time Complexity: O(n) where n is the number of element in the array
// Space Complexity: O(1)


// SOLUTION 2:

function validateSubsequence(array, sequence) {
  let seqIndex = 0;
  let arrayIndex = 0;

  while (seqIndex < sequence.length && arrayIndex < array.length) {
    if (sequence[seqIndex] === array[arrayIndex]) {
      seqIndex++;
    }
    arrayIndex++;
  }

  return seqIndex === sequence.length;
}

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));