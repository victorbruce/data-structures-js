// Given a string, return a new string with the reversed order of characters
// apple => elppa

// SOLUTION 1:
// function reverse(str) {
//   return str.split('').reverse().join('');
// }


// SOLUTION 2:
function reverse(str) {
  let reverseStr = '';

  for (let character of str) {
    reverseStr = character + reverseStr;
  }

  return reverseStr;
}

// TIME COMPLEXIY: O(n)
// SPACE COMPLEXITY: O(1)

console.log(reverse('apple'));

