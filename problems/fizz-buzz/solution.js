// write a program that console logs the numbers from 1 to n.
// but for multiples of 3 prints 'fizz' instead of the number
// and for the multiples of 5 print 'buzz'. For numbers which
// are multiples of both three and five print 'fizzbuzz'

// SOLUTION:
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
