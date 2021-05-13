// -- Direction
// Implement selection sort

function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (j= i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (i !== indexOfMin) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

console.log(selectionSort([4,5,6,1,2]));