// Write a function that accepts a positive number N.
// The function should console log a pyramid shape with N
// levels using the # character. Make sure the pyramid has 
// spaces on both the left and right hand sides

// SOLUTION 2: RECURSION
function pyramid(n) {
  // findout the bare minimum piece of information to repesent your problem
  // base case
  // provide reasonable defaults
  // make changes to arguements to reach base case

  return pyramidHelper(n);
}

function pyramidHelper(size, row = 0, level='') {
  if (row === size) {
    return;
  }

  if (level.length === 2 * size-1) {
    console.log(level);
    return pyramidHelper(size, row + 1);
  }

  const midpoint = Math.floor((2 * size - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramidHelper(size, row, level + add);
}

pyramid(3);

// SOLUTION 1: ITERATION
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < ((n * 2) - 1); column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level)
//   }
// }

// pyramid(3);