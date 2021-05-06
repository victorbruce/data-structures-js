// PROBLEM:
// Write a function that takes a positive number N
// The function should console log a step shape
// with N levels using the # character. Make sure the step
// has spaces on the right hand side!
// Examples:
// steps(3)
// '# '
// '## '
// '###'

// SOLUTION 2: Recursion
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

console.log(steps(3));

// SOLUTION 1:
// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let stair = ''
//     for (let column = 1; column <= n; column++) {
//       if(column > row) {
//         stair += ' '
//       } else {
//         stair += '#'
//       }
//     }
//     console.log(stair)
//   }
// }