function threeNumberSum(arr, target) {
  arr.sort((a,b) => (a-b));
  console.log(arr)
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i+1;
    let right = arr.length - 1;

    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum === target) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      }
    }
  }

  return result;
}

let ans = threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
console.log(ans);