// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/** USING RECURSION */
function reverse(str) {
  let reversedStr = []; // o(1)
  let i = 0; // o(1)

  let addItems = function (orderedStr) {
    // o(1)
    if (i < orderedStr.length) {
      reversedStr.unshift(orderedStr.slice(i, i + 1));
      i++;
      // o(logn)
      addItems(orderedStr);
    }
    return;
  };

  debugger;
  addItems(str);

  return reversedStr.join("");
}


/** USING A FOR LOOP */
// function reverse(str) {
//   let reversedStr = [];

//   // O(n)
//   for (let i = 0; i < str.length; i++) {
//     reversedStr.unshift(str.slice(i, i+1)) // O(n)
//   }

//   return reversedStr.join('');
// }



console.log(reverse("apple"));

module.exports = reverse;
