class Node {
  constructor(value, next = null, prev=null) {
    this.value = data;
    this.next = next;
    this.prev = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail === null) {
      this.setHead(node)
    }
    this.insertAfter(this.tail, node)
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    remove(nodeToInsert);

    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev === null) {
      this.head = nodeToInsert
    } else {
      node.prev.next = nodeToInsert
    }

    node.prev = nodeToInsert;

  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }

    node.next = nodeToInsert;
  }

  insertAt(index, nodeToInsert) {
    if (index === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    
    let node = this.head;
    let currentIndex = 1;

    while(node !== null && currentIndex !== index) {
      node = node.next;
      currentIndex += 1;
    }

    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }

  }

  removeNodesWithValue(value) {
    let node = this.head;

    while(node) {
      let nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) {
        this.remove(node);
      }
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    this.removeNodeBindings(node);

  }

  constainsNodeWithValue(value) {
    let node = this.head;

    while(node && node.value !== value) {
      node = node.next;
    }

    return node !== null;
  }

  removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    node.prev = null;
    node.next = null;
  }
}