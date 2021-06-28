

// solution 1: O(n^2) time | O(n) space
// function minRewards(scores) {
//   let rewards = scores.map(score => 1);
  
//   for (let i = 1; i < scores.length; i++) {
//     let j = i - 1;

//     if (scores[i] > scores[j]) {
//       rewards[i] = rewards[j] + 1;
//     } else {
//       while (j >= 0 && scores[j] > scores[j+1]) {
//         rewards[j] = Math.max(rewards[j], rewards[j+1] + 1);
//         j--
//       }
//     }
//   }

//   return rewards.reduce((a,b) => a + b);
// }


// solution 2: O(n) time | O(n) space
// function minRewards(scores) {
//   let rewards = scores.map(score => 1);

//   let localMinIdxs = getLocalMinIdx(scores);

//   for (let localMinIdx of localMinIdxs) {
//     expandFromLocalMinIdx(localMinIdx, scores, rewards);
//   }

//   return rewards.reduce((a,b) => a+b);
// }

// function getLocalMinIdx(array) {
//   if (array.length === 1) {
//     return [0]
//   }
//   localMinIdxs = [];
//   for (i = 0; i < array.length; i++) {
//     if (i === 0 && array[i] < array[i+1]) {
//       localMinIdxs.push(i);
//     }
//     if (i === array.length - 1 && array[i] < array[i - 1]) {
//       localMinIdxs.push(i);
//     }
//     if (i === 0 || i === array.length - 1) continue;
//     if (array[i] < array[i+1] && array[i] < array[i-1]) {
//       localMinIdxs.push(i);
//     }
//     return localMinIdxs;
//   }
// }

// function expandFromLocalMinIdx(localIdx, scores, rewards) {
//   let leftIdx = localIdx - 1;
//   while (leftIdx >= 0 && scores[leftIdx] > scores[leftIdx + 1]) {
//     rewards[leftIdx] = Math.max(rewards[leftIdx], rewards[leftIdx + 1] + 1);
//     leftIdx--;
//   }

//   let rightIdx = localIdx + 1;
//   while (rightIdx < scores.length && scores[rightIdx] > scores[leftIdx - 1]) {
//     rewards[rightIdx] = rewards[rightIdx - 1] + 1;
//     rightIdx++;
//   }
// }

function minRewards(scores) {
  let rewards = scores.map(score => 1);

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i-1]) {
      rewards[i] = rewards[i-1] + 1;
    }
  }

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i+1]) {
      rewards[i] = Math.max(rewards[i], rewards[i+1] + 1);
    }
  }

  return rewards.reduce((a,b) => a+b);
}

let ans = minRewards([8,4,2,1,3,6,7,9,5]);
console.log(ans)