// Write a function that returns the number of vowels
// used in a string. Vowels are the characters 'a', 'e', 'i', 'o', and 'u'
// Examples
// vowels ('Hi there!') -- > 3
// vowels 

// SOLUTION 2:
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

// SOLUTION 1:
// function vowels(str) {
//   const vowel =  ['a', 'e', 'i', 'o', 'u'];

//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowel.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

console.log(vowels('Why do you ask?'));