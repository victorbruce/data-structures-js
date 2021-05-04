// PROBLEM:
// Given an array and chunk size, divide the array into many
// subarrays where each subarray is of length size
// Example chunk([1,2,3,4,5], 4) --> [[1,2,3,4], [5]]

// SOLUTION 1:

// function chunk(array, size) {
//   let chunkArray = [];

//   for (let element of array) {
//     let last = chunkArray[chunkArray.length - 1];

//     if (!last || last.length === size) {
//       chunkArray.push([element])
//     } else {
//       last.push(element);
//     }
//   }

//   return chunkArray;
// }

// SOLUTION 2:
function chunk(array, size) {
  let chunkArray = [];
  let index = 0;

  while (index < array.length) {
    chunkArray.push(array.slice(index, index + size))
    index += size;
  }

  return chunkArray;
}


console.log(chunk([1,2,3,4], 2));

/*
 time complexity is O(n) 
 space complexity is O(n)
*/