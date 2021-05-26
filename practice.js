// // Node of a tree
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.children = children;
//   }

//   add(data) {
//     this.children.push(data);
//   }

//   remove(data) {
//     this.children = this.children.filter((node) => (
//       node.data !== data;
//     ))
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   traverseBf(fn) {
//     const arr = [this.root];

//     while (arr.length) {
//       let node = arr.shift();

//       arr.push(...node.children);

//       fn(node);
//     }
//   }

//   traverseDF(fn) {
//     const arr = [this.root];
    
//     while(arr.length) {
//       let node = arr.shift();

//       arr.unshift(...node.children);

//       fn(node);
//     }
//   }
// }

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null; 
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }
    
    if (data < this.data && this.left) {
      return this.left.contains(data)
    }

    if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

function validate(node, min = null, max = null) {
  
}