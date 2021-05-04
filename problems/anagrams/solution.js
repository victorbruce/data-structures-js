// PROBLEM:
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case
// Examples: anagrams('rail safety', 'fairy tales') --> True

// SOLUTION 3:
function anagrams(stringA, stringB) {
  let cleanStringA = stringA
    .toLowerCase()
    .replace(/[^\w]/g, "")
    .trim()
    .split("")
    .sort()
    .join("");

  let cleanStringB = stringB
    .toLowerCase()
    .replace(/[^\w]/g, "")
    .trim()
    .split("")
    .sort()
    .join("");

  if (cleanStringA.length !== cleanStringB.length) {
    return false;
  }

  return cleanStringA === cleanStringB;
}

console.log(anagrams("rail safety", "fairy tales"));


// TIME COMPLEXITY: O(n);
// SPACE COMPLEXITY: O(1);


// SOLUTION 2:
// function anagrams(stringA, stringB) {
//   let mapStringA = buildStringMap(stringA);
//   let mapStringB = buildStringMap(stringB);

//   if (Object.keys(mapStringA).length !== Object.keys(mapStringB).length) {
//     return false;
//   }

//   for (let char in mapStringA) {
//     if (mapStringA[char] !== mapStringB[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// // helper function
// function buildStringMap(str) {
//   const newStr = str.toLowerCase().replace(/[^\w]/g, "").trim();
//   const strMap = {};

//   for (let char of newStr) {
//     strMap[char] = strMap[char]++ || 1;
//   }

//   return strMap;
// }



// SOLUTION 1:
// function anagrams(stringA, stringB) {
//   let lowcaseStringA = stringA.toLowerCase().replace(/[^\w]/g, "").trim();
//   let lowercaseStringB = stringB.toLowerCase().replace(/[^\w]/g, "").trim();
//   let stringAMap = {};
//   let stringBMap = {};

//   for (let char of lowcaseStringA) {
//     if (char.charCodeAt(0) >= 97 || char.charCodeAt(0) <= 122) {
//       if (stringAMap[char]) {
//         stringAMap[char]++;
//       } else {
//         stringAMap[char] = 1;
//       }
//     }
//   }

//   for (let char of lowercaseStringB) {
//     if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//       if (stringBMap[char]) {
//         stringBMap[char]++;
//       } else {
//         stringBMap[char] = 1;
//       }
//     }
//   }

//   if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//     return false;
//   }

//   for (let char in stringAMap) {
//     if (stringAMap[char] !== stringBMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
