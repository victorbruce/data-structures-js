function absoluteValueSort(arr) {
  arr.sort((element, comparedElement) => {
    if (Math.abs(element) === Math.abs(comparedElement)) {
      return element - comparedElement;
    } else {
      return Math.abs(element) - Math.abs(comparedElement);
    }
  });

  return arr;
}

// solution 1
// function absoluteValueSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let nextValue = Math.abs(arr[j]); // -2
//       let currentValue = Math.abs(arr[i]); // 2

//       if (currentValue > nextValue) {
//         [arr[i], arr[j]] = [arr[j],arr[i]]
//         // let less = arr[j];
//         // arr[j] = arr[i];
//         // arr[i] = less;
//       } else if (currentValue === nextValue) {
//         if (arr[i] > arr[j]) {
//           [arr[i], arr[j]] = [arr[j],arr[i]]
//           // let less = arr[j];
//           // arr[j] = arr[i];
//           // arr[i] = less;
//         }
//       }
//     }
//   }

//   return arr;
// }

let result = absoluteValueSort([2, -7, -2, -2, 0]);
console.log(result);
