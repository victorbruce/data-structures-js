/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let arrayDigits;
  let reversedNum;

  if (x === 0) return 0;

  if (x < 0) {
    arrayDigits = Array.from(String(x * -1), Number).reverse();
    reversedNum = Number(arrayDigits.join(""));

    if (reversedNum > Math.pow(2, 31)) return 0;

    return reversedNum * -1;
  }

  arrayDigits = Array.from(String(x), Number).reverse();
  console.log(arrayDigits);
  reversedNum = Number(arrayDigits.join(""));

  if (reversedNum > Math.pow(2, 31)) return 0;

  return reversedNum;
};

console.log(reverse(1534236469));
