/* Linked List */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /* utility functions */
  length() {
    return this.size;
  }

  head() {
    return this.head;
  }

  isEmpty() {
    // returns true if the linked list is empty else returns false
    return this.size === 0;
  }

  /* add data to a linked list */
  insert(data) {
    let node = new Node(data);
    // Edge case: if there is no data in the linked list,
    // set the head to the node we want to pass.
    if (!this.head) {
      this.head = node;
    } else {
      // Edge case: if there is data, start from the head,
      // by setting the currentNode/Pointer to the head
      let currentNode = this.head;

      // While there is a next node, keep updating the current node,
      // this will move the current node from the head to the tail in the linked list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // Once at the tail, set the current node to the node/data we want to add.
      currentNode.next = node;
    }

    // Increment the size of the linked list.
    this.size++;
  }

  delete(data) {
    let currentNode = this.head;
    let previousNode;

    // Check to see if the data we want to delete is in the head node
    if (currentNode.data === data) {
      // If it is, set the head pointer to be the next node.
      this.head = currentNode.next;
    } else {
      // If the data is not found
      while (currentNode.data !== data) {
        // set the current node to the previous node
        previousNode = currentNode;
        // update the current node to the next node
        currentNode = currentNode.next;
      }

      // set the next node of the current node to the previous node
      previousNode.next = currentNode.next;
    }

    // reduce the size of the linked list
    this.size--;
  }

  // find the index of an element/data in a linked list
  indexOf(data) {
    let currentNode = this.head;
    let index = -1;

    // if there is a node in the linked list
    while (currentNode) {
      // start at the head
      index++;
      // if current node is equal to the data we want the index of,
      if (currentNode.data === data) {
        // return the index of the data in the linked list
        return index;
      }
      // jump to the next node if data does not match.
      currentNode = currentNode.next;
    }

    return -1;
  }

  // find the element or data at a particular index within our linked list
  dataAt(index) {
    // set the current node to the first node, head
    let currentNode = this.head;
    // set count to 0
    let count = 0;

    // if index is out of range, exit;
    if (index > this.size) {
      return;
    }

    // else if count is not equal to index,
    while (count < index) {
      // increment count
      count++;
      // set the currnet node to the next node
      currentNode = currentNode.next;
    }
    // return data when found
    return currentNode.data;
  }

  insertAt(data, index) {
    // create a new node and pass in your data
    let node = new Node(data);

    let currentNode = this.head;
    let previous;
    let currentIndex = 0;

    // out of range
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      // set the next node to currentNode(head pointer)
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previous = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previous.next = currentNode.next;
    }
    this.size++;
  }

  deleteAt(index) {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    // if index is negative or out of range, quit
    if (index < 0 || index > this.size) {
      return null;
    }

    if (index === 0) {
      // set the head to the next node
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        // jump from one node to the other
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.size--;
    return currentNode.data;
  }

  printList() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

let todo = new LinkedList();

todo.insert("Design a website");
todo.insert("Practice Ds");
todo.insert("Work on some side project");

console.log("size of linked list", todo.length());
console.log(todo.printList());
console.log('-----------------------');
console.log(todo.deleteAt(0));
console.log(todo.insertAt("I am first", 0))
console.log(todo.printList());
console.log('-----------------------');
console.log(todo.indexOf("Practice Ds"))
console.log('-----------------------');
console.log(todo.dataAt(2));
