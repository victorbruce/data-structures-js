// Node
/*
Example:
const n = new Node('There');
n.data // 'There'
n.next // null

const n2 = new Node('Hi', n);
n2.next // n
*/
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked List
/*
Example:
const list = new LinkedList();
list.head // null
*/
class LinkedList {
  constructor() {
    this.head = null;
  }

  /*
  Example:
  const list = new LinkedList();
  list.insertFirst('Hi there');
  */
  insertFirst(data) {
    const node = new Node(data, this.head);

    this.head = node;
  }

  /*
   Example:
   const list = new LinkedList();
   list.insertFirst('a');
   list.insertFirst('b');
   list.insertFirst('c');
   list.size() // returns 3
  */
  size() {
    let count = 0;

    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  /*
  Example:
  const list = new LinkedList();
  list.insertFirst('a');
  list.insertFirst('b');
  list.getFirst(); // returns Node instance with data 'b'
  */
  getFirst() {
    return this.head;
  }

  /*
  Example:
  const list = new LinkedList();
  list.insertFirst('a');
  list.insertFirst('b');
  list.geLast(); // returns Node instance with data 'a'
  */
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  /*
  Example:
  const list = new LinkedList();
  list.insertFirst('a');
  list.insertFirst('b');
  list.clear();
  list.size(); // returns 0
*/
  clear() {
    this.head = null;
  }

  /*
  Example:
  const list = new LinkedList();
  list.insertFirst('a');
  list.insertFirst('b');
  list.removeFirst(); // deletes node with data 'a'
  list.getFirst(); // returns node with data of 'b'
  */
  removeFirst() {
    if (!this.head) return null;

    this.head = this.head.next;
  }

  /*
  Example:
  const list = new LinkedList();
  list.insertFirst('a');
  list.insertFirst('b');
  list.removeLast(); // deletes node with data 'a'
  list.size(); // returns 1
  list.getLast(); // returns node with data of 'b'
  */
  removeLast() {
    if (!this.head) return null;

    // when list is of length one(1)
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previousNode = this.head;
    let node = this.head.next;

    while (node.next) {
      previousNode = node;
      node = node.next;
    }

    previousNode.next = null;
  }

  /*
  Example:
  const list = new LinkedList();
  list.insertFirst('a');
  list.insertFirst('b');
  list.insertLast('c');
  list.getLast() // returns node with data 'c'
  */
  insertLast(data) {
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      // the chain is empty
      this.head = new Node(data);
    }
  }

  /*
  Example: 
  const list = new LinkedList();
  list.insertFirst('a');
  list.insertFirst('b');
  list.insertFirst('c');
  list.getAt(1) // returns node with data 'b'
  */
  getAt(index) {
    let count = 0;
    let node = this.head;

    while (node) {
      if (index === count) {
        return node;
      }
      count++;
      node = node.next;
    }

    return null;
  }

  /*
  Example: 
  const list = new LinkedList();
  list.insertFirst('a');
  list.insertFirst('b');
  list.insertFirst('c');
  list.removeAt(1) // deletes node with data 'b'
  list.getAt(1); returns node with data 'a'
  list.size(); returns 2
  */
  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);

    if (!previousNode || !previousNode.next) {
      return;
    }
    previousNode.next = previousNode.next.next;
  }

  /*
  Example: 
  const list = new LinkedList();
  list.insertFirst('a');
  list.insertFirst('b');
  list.insertFirst('c');
  list.insertAt('Hi', 1);
  list.getAt(1); returns node with data 'Hi'

  */
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previousNode = this.getAt(index - 1) || this.getLast();
    let node = new Node(data, previousNode.next);
    previousNode.next = node;
  }
}

const list = new LinkedList();

list.insertFirst("a");
list.insertFirst("b");
list.insertFirst("c");

console.log(list.size());
console.log(list.getAt(1));
