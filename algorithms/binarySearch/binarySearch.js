function binarySearch(arr, value) {
  let high = arr.length - 1;
  let middle = 0;
  let low = 0;

  while (low <= high) {
    middle = Math.floor(high + low) / 2;

    if (arr[middle] === value) {
      return arr[middle];
    } else if (value > arr[middle]) {
      low = middle + 1;
    } else {
      low = middle - 1;
    }
  }

  return null;
}

const value = binarySearch([1, 4, 8, 16, 32], 16);
console.log(value);
