// PROBLEM: FIND THE CLOSEST VALUE IN A BINARY SEARCH TREE

// SOLUTION 2:
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  const currentNode = tree;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      return break;
    }

  }

  return closest;
}
// Time Complexity: Avg => O(log n) | Worst => O(n)
// Space Complexity: Avg => O(1) | Worst => O(1)


// SOLUTION 1:
// function findClosestValueInBst(tree, target) {
//   return findClosestValueInBstHelper(tree, target, Infinity);
// }

// function findClosestValueInBstHelper(tree, target, closest) {
//   // base case: when we have a leaf node
//   if (tree === null) return closest;

//   if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
//     closest = tree.value;
//   }

//   if (target < tree.value) {
//     return findClosestValueInBstHelper(tree.value, target, closest);
//   } else if (target > tree.value) {
//     return findClosestValueInBstHelper(tree.right, target, closest);
//   } else {
//     return closest;
//   }
// }

// Time complexity: Avg =>(O(log n) worst => O(n))
// Space complexity: Avg =>(O(log n)  worst => O(n))