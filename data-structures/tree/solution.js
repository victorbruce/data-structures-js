// -- Directions
// 1) Creact a node class. The constructor should 
// accept an argument that gets assigned to the data
// property and initialize an empty array for storing children.
// The node class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor shoud initialize a
// 'root' property to null.
// 3) Implement 'traverseBFS' and 'traverseDFS' on the tree class

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBFS(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDFS(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  } 
}

const t = new Tree()
t.root = new Node(1);