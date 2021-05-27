
var reverseStr = function(s, k) {
  let result = '';
  let notReversed = true;
  
  for (let i = 0; i < s.length; i = i + k) {
    if (notReversed) {
      result += s.slice(i, i+k).split('').reverse().join('');
      notReversed = false;
    } else {
      result += s.slice(i, i+k);
      notReversed = true;
    }
  }
  
  return result;
};

reverseStr("abcdefg", 2);