function isMonotonic(arr) {
  if (arr.length <= 2) return true;

  let nonDecreasing = true;
  let nonIncreasing = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] > arr[i]) {
      nonIncreasing = false;
    } else if (arr[i+1] < arr[i]) {
      nonDecreasing = false;
    } 
  }

  return nonDecreasing || nonIncreasing;
} 

// Solution 1:
// function isMonotonic(arr) {
//   if (arr.length <= 2) return true;

//   let direction = arr[1] - arr[0];
  
//   for (let i = 2; i < arr.length; i++) {
//     if (direction === 0) {
//       direction =  arr[i] - arr[i - 1];
//       continue;
//     }
//     if (breakDirection(arr, arr[i - 1], arr[i])) {
//       return false;
//     }
//   }

//   return true;
// }

// function breakDirection(array, previousInt, currentInt) {
//   let diff = currentInt - previousInt;

//   if (direction > 0) {
//     return diff < 0;
//   }
//   return diff > 0;
// }

console.log(isMonotonic([4,4,2,1]));