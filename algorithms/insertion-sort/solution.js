const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let [item] = arr.splice(i, 1);
        arr.splice(j, 0, item);
      }
    }
  }

  return arr;
};

console.log(insertionSort([4, 16, 1, 32, 8]));
