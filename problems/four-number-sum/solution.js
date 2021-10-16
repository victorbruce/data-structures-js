function fourNumberSum(array, target) {
  let allPairSums = {};
  let quadruplets = [];

  array.sort((a,b) => a - b)

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let currentSum = array[i] + array[j];
      let difference = target - currentSum;

      if (allPairSums[difference]) {
        for (let pair of allPairSums[difference]) {
          quadruplets.push(pair.concat(array[i], array[j]));
        }
      }
    }

    for (let k = 0; k < i; k++) {
      let currentSum = array[i] + array[k];

      if (!allPairSums[currentSum]) {
        allPairSums[currentSum] = [[array[i], array[k]]];
      } else {
        allPairSums[currentSum].push([array[i], array[k]])
      }
    }
  }

  console.log(allPairSums)

  return quadruplets;
}

// T: O(n^2) | S: O(n^2)



// let ans = fourNumberSum([2,2,2,2,2], 8);
let ans = fourNumberSum([7,6,4,-1,1,2], 16);
console.log(ans)