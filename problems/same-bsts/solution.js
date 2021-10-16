// O(n^2) time | O(n^2) space
function sameBsts(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true;
  }

  if (arrayOne[0] !== arrayTwo[0]) {
    return false;
  }

  let leftOne = getSmaller(arrayOne);
  let leftTwo = getSmaller(arrayTwo);
  let rightOne = getBiggerOrEqual(arrayOne);
  let rightTwo = getBiggerOrEqual(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array) {
  let smaller = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) {
      smaller.push(array[i]);
    }
  }

  return smaller;
}

function getBiggerOrEqual(array) {
  let biggerOrEqual = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) {
      biggerOrEqual.push(array[i]);
    }
  }

  return biggerOrEqual;
}

let ans = sameBsts(
  [10, 15, 8, 12, 94, 81, 5, 2, 11],
  [10, 8, 5, 15, 2, 12, 11, 94, 81]
);

console.log(ans);
