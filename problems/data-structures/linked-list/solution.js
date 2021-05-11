// Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);

    this.head = node;
  }

  size() {
    let count = 0;

    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

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

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;

    this.head = this.head.next;
  }

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

  insertLast(data) {
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      // the chain is empty
      this.head = new Node(data);
    }
  }

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
