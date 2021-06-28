function largestRange(array) {
  let nums = {}
  let bestRange = [];
  let longestLength = 0;


  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if (!nums[num]) {
      nums[num] = true;
    }
  }

  for(let num of array) {
    if (!nums[num]) {
      continue;
    }
    nums[num] = false;

    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    
    while (nums[left]) {
      nums[left] = false;
      currentLength++;
      left -= 1;
    }
    while(nums[right]) {
      nums[right] = false;
      currentLength++;
      right += 1;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left+1, right-1];
    }
  }

  return bestRange;
}

// O(n) time | O(n) space

let ans = largestRange([1,11,3,0,15,5,2,4,10,7,12,6]);
console.log(ans)