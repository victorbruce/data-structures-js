function maxChar(str) {
  const obj = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    }
  }

  return maxChar;
};

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)

console.log(maxChar('abcccccccd'));