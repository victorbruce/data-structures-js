// PROBLEM
// Write a function that accepts a string. The function should
// capitalize the first letter of each word in the string then
// return the capitalized string. Example capitalize('a short sentence') --> 'A Short Sentence'

// SOLUTION 2: (BRUTE FORCE)
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(capitalize("a short setence"));

// SOLUTION1
// function capitalize(str) {
//   const capitalizeStr = []

//   for (let word of str.split(' ')) {
//     capitalizeStr.push(word[0].toUpperCase() + word.slice(1))
//   }

//   return capitalizeStr.join(' ');
// }
// Time complexity: O(n) Space Complexity: O(n)
