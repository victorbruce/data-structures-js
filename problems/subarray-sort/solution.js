function subarraySort(array) {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }

  // check if input array is already sorted
  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }

  let subarrayLeftIdx = 0;
  while (minOutOfOrder >= array[subarrayLeftIdx]) {
    subarrayLeftIdx++;
  }

  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIdx]) {
    subarrayRightIdx--;
  }

  return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(index, num, array) {
  if (index === 0) {
    return num > array[index+1];
  } else if (index === array.length - 1) {
    return num < array[index-1];
  } else {
    return num > array[index+1] || num < array[index-1];
  }
}

let ans = subarraySort([1,2,4,7,10,11,7,12,6,7,16,18,19]);
console.log(ans)