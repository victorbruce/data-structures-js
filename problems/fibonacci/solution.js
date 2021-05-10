// SOLUTION 3:
function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

console.log(slowFib(4))

// SOLUTION 2:
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// Time complexity: O(2^n)



// SOLUTION 1:
// function fib(n) {
//   const series = [0, 1];
//   let leftPointer = 0;
//   let rightPointer = 1;

//   for (let i = 2; i <= n; i++) {
//     let nextNumber = series[leftPointer] + series[rightPointer];
//     series.push(nextNumber);
//     leftPointer++;
//     rightPointer++;
//   }

//   return series[n];

// }

// Time Complexity: O(n)

// console.log(fib(4));