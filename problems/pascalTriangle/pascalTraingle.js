var generate = function (numRows) {
  let length = numRows;

  for (let i = 1; i <= length; i++) {
    console.log("+");
    for (let j = 0; j < i; j++) {
      console.log("*");
    }
  }
};

generate(5);
