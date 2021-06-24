function findPairWithGivenDiff(arr, k) {
  if (k === 0) {
    return [];
  }
  
  let map = {};
  let answer = [];
  
  for (let x of arr) {
    map[x-k] = x
  }
  
  for (let y of arr) {
    if (map[y]) {
      console.log(map[y])
      answer.push([map[y], y])
    }
  }
  
  return answer;
}

console.log(findPairWithGivenDiff([0, -1, -2, 2, 1], k = 1))