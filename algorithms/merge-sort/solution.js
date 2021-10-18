const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  let results = [...sorted, ...left, ...right];
  return results;
}

console.log(mergeSort([4, 16, 1, 32, 8]))

// time complexity: O(n log n)