var plusOne = function(digits) {
  if (digits.length < 1) {
      return -1;
  }

  let size = digits.length - 1;

  while (size >= 0) {
    if (digits[size] !== 9) {
      digits[size] = digits[size] + 1;
      return digits
    }
    digits[size] = 0;
    size--
  }

  digits.unshift(1);
  return digits;
};


console.log(plusOne([9,9,9]))
