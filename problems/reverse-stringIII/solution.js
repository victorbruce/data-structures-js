/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const sentence = s.split(" ");
  let count = 0;

  for (let word of sentence) {
    let reverseWord = word.split("").reverse().join("");
    sentence[count] = reverseWord;
    count++;
  }

  return sentence.join(" ");
};

reverseWords("Let's take LeetCode contest");
