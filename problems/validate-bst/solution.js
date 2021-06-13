// -- Directions
// Given a node, validate the binary search tree, ensuring
// that every node's left hand child is less than the parent
// node's value, and that every node's right hand child is greater
// than the parent

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  if (tree === null) return true;

  if (tree.value < minValue || tree.value >= maxValue) return false;

  let leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  let rightIsValid = validateBstHelper(tree.right, tree.value, maxValue);

  return leftIsValid && rightIsValid;
}
