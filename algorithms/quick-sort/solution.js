const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];

  let less = [];
  let greater = [];

  for (let i in arr) {
    if (i !== pivotIndex) {
      arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i]);
    }
  }


  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort[4, 16, 1, 32, 8])

// time complexity O(n log n)