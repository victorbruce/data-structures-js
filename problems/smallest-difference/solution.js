function smallestDifference(a, b) {
  a.sort((a,b) => (a-b));
  b.sort((a,b) => (a-b));
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  let left = 0;
  let right = 0;


  while (left < a.length && right < b.length) {
    let firstNum = a[left];
    let secondNum = b[right];
    let current = Math.abs(firstNum - secondNum);

    if (firstNum < secondNum) {
      left++;
    } else if (firstNum > secondNum) {
      right++;
    } else {
      return [firstNum, secondNum]
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum]
    }
  }

  return smallestPair;
}

console.log(smallestDifference([-1,5,10,20,28,3], [26,134,135,15,17]));