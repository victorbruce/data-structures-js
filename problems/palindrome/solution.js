// SOLUTION 1:
// function palindrome(str) {
//   const arrayStr = str.split('');
//   let reversedStr = '';
  
//   for(let i = arrayStr.length - 1; i >= 0; i--) {
//     reversedStr += arrayStr[i];
//   }
  
//   return str === reversedStr;
// }

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)


// SOLUTION 2:
function palindrome(str) {
  let reversedStr = str.split('').reverse().join('');

  return reversedStr === str;
}

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

console.log(palindrome('abba'));