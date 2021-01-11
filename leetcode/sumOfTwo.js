var twoSum = function (nums, target) {
  for (let pointer = 0; pointer < nums.length - 1; pointer++) {
    for (let j = pointer + 1; j < nums.length; j++) {
      if (nums[pointer] + nums[j] === target) {
        return [pointer, j];
      }
    }
  }
};

console.log(twoSum([2,7,11,15], 9));
