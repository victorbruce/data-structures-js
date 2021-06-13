// SOLUTION 2
function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIndex, endIndex) {
  if (endIndex < startIndex) return;

  let middleIndex = Math.floor((startIndex + endIndex) / 2);

  let newBstNode = new BST(array[middleIndex]);

  if (newBstNode === null) {
    bst = newBstNode;
  } else {
    if (array[middleIndex] < bst.value) {
      bst.left = newBstNode;
      bst = bst.left;
    } else {
      bst.right = newBstNode;
      bst - bst.right;
    }
  }

  constructMinHeightBst(array, bst, startIndex, middleIndex - 1);
  constructMinHeightBst(array, bst, middleIndex + 1, endIndex);
  return bst;
}

// SOLUTION 1
// function minHeightBst(array) {
//   return constructMinHeightBst(array, null, 0, array.length - 1);
// }

// function constructMinHeightBst(array, bst, startIndex, endIndex) {
//   if (endIndex < startIndex) return;

//   let middleIndex = Math.floor((startIndex + endIndex) / 2);
//   let value = array[value];

//   if (bst === null) {
//     let bst = new BST(value);
//   } else {
//     bst.insert(value);
//   }

//   constructMinHeightBst(array, bst, startIndex, middleIndex - 1);
//   constructMinHeightBst(array, bst, middleIndex + 1, endIndex);
//   return bst;
// }

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right = null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}