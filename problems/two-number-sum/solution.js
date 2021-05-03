

// SOLUTION 1

// function twoNumberSum(arr, target) {
//   let sum = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       sum = arr[i] + arr[j];

//       if (sum === target) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return [];
// }
//   TIME COMPLEXITY: O(n^2)
//   SPACE COMPLEXITY: O(1)


// SOLUTION 2:

// function twoNumberSum(arr, target) {
//   const nums = {};

//   for (let i = 0; i < arr.length; i++) {
//     let result = target - arr[i];

//     if (nums[result]) {
//       return [arr[i], result];
//     } else {
//       nums[arr[i]] = true;
//     }
//   }

//   return [];
// }


// TIME COMPLEXITY: O(n);
// SPACE COMPLEXITY: O(n);
 

// SOLUTION 3:

function twoNumberSum(arr, target) {
  const sortedArr = arr.sort((a,b) => a - b);

  let leftPointer = 0
  let rightPointer = sortedArr.length - 1;

  while (leftPointer !== rightPointer) {

    let potentialMatch = sortedArr[leftPointer] + sortedArr[rightPointer];
    
    if (potentialMatch === target) {
      return [sortedArr[leftPointer], sortedArr[rightPointer]]
    }

    potentialMatch < target ? leftPointer++ : rightPointer--;
  }

  return []
}

// TIME COMPLEXITY: O(nlog(n));
// SPACE COMPLEXITYL O(1);

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10));