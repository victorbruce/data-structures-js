// function decrypt(word) {
//   let secondStep = 1;
//   let decryption = "";
//   let newLetterAscii;

  // first step
  // for (let i=0; i < word.length; i++) {
  //   newLetterAscii  = word.charCodeAt(i);
  //   newLetterAscii = newLetterAscii + secondStep;

  //   while (newLetterAscii < 97) {
  //     newLetterAscii += 26;
  //   }

  //   decryption = decryption + String.fromCharCode(newLetterAscii);
  //   secondStep += newLetterAscii;

  // }

  // return decryption;

//   for (let i = 0; i < word.length; i++) {
//     newLetterAscii = word.charCodeAt(i)
//     newLetterAscii + secondStep;

//     while (newLetterAscii < 'a'.charCodeAt()) {
//       console.log('before', newLetterAscii)
//       newLetterAscii += 26;
//       console.log('after', newLetterAscii)

//     }
//   }
// }

// console.log(decrypt("dnotq"));

function decrypt(word) {
  
  let secondStep = 1;
  let decryption = "";
  let newLetterAscii;
  
  // first step
  for (let i=0; i < word.length; i++) {
    newLetterAscii  = word.charCodeAt(i);
    newLetterAscii = newLetterAscii - secondStep;
    
    

    while (newLetterAscii < 'a'.charCodeAt()) {
      newLetterAscii += 26;
    }
    
    decryption = decryption + String.fromCharCode(newLetterAscii);
    secondStep += newLetterAscii;
    
  }

  return decryption;

}

console.log(decrypt('dnotq'));