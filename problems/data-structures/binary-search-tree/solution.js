// -- Directions
// 1) Implement the node class to create a binary search tree. The
// constructor should initialize values 'data', 'left', and 'right'.
// 2) Implement the 'insert' method for the Node class. Insert should accept
// an argument 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node class. Contains should accept
// a 'data' argument and return the Node in the tree with the same value.
// If the value isn't in the tree return null.


class BST {
  constructor(val, left=null, right=null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }

  insert(value){
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
 
      } else {
        this.right.insert(value);
      }
    }
    return this;
  };

  contains(value){
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  };

  remove(value, parentNode=null){
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parentNode === null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          
        }
      } else if (parentNode.left === this) {
        parentNode.left = this.left !== null ? this.left : this.right;
      } else if (parentNode.right === this) {
        parentNode.right = this.left !== null ? this.left : this.right;
      }
    }
  };

  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}


// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }

//   insert(data) {
//     if (data < this.data && this.left) {
//       this.left.insert(data);
//     } else if (data < this.data) {
//       this.left = new Node(data);
//     } else if ( data > this.data && this.right) {
//       this.right.insert(data);
//     } else if (data > this.data) {
//       this.right = new Node(data);
//     }
//   }

//   contains(data) {
//     if (data === this.data) {
//       return this;
//     }

//     if (data < this.data && this.left) {
//       return this.left.constains(data);
//     } else if (data > this.data && this.right) {
//       this.right.contains(data);
//     }

//     return null;
//   }
// }