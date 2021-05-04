// SOLUTION 1:

function reverseInt(n) {
  let numString = n.toString().split('').reverse().join('');
  
  // return n < 0 ? parseInt(numString) * -1 : parseInt(numString);
  return parseInt(numString) * Math.sign(n);
}

// TIME COMPLEXITY: O(1)
// SPACE COMPLEXITY: O(1)
console.log(reverseInt(-500));