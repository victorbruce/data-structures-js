function wordCountEngine(document) {
  document = document.toLowerCase();
  document = document.replace(/[^a-z ]/g, "");

  let documentArray = document.split(" ");
  let hash = {};
  let result = [];

  for (let word in documentArray) {
    if (hash[documentArray[word]]) {
      hash[documentArray[word]] += 1;
    } else {
      hash[documentArray[word]] = 1;
    }
  }

  let keyOrder = Object.keys(hash).sort((element, comparedElement) => {
    return hash[comparedElement] - hash[element];
  });

  for (let word of keyOrder) {
    result.push([word, hash[word].toString()])
  }

  return result;
}

let result = wordCountEngine(
  "Practice makes perfect. you'll only get Perfect by practice. just practice!"
);

console.log(result);
