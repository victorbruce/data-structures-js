var MyLinkedList = function() {
  this.length = 0;
  this.head = null;
};

var Node = function(element) {
  this.element = element;
  this.next = null;
}

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.length) {
      return -1;
  }
  let currentNode = this.head;
  let currentIndex = 0;
  
  if (index === 0) {
      return currentNode.element;
  } else {
      while(currentIndex < index) {
          currentIndex++;
          currentNode = currentNode.next;
      }
      return currentNode.element;
  }
  
  return -1;
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  let node = new Node(val);
  
  let currentNode = this.head;
  
  node.next = currentNode;
  this.head = node;
  
  this.length++;
  return;
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new Node(val);
  
  if (this.head === null) {
      this.head = node;
  } else {
      let currentNode = this.head;
      while (currentNode.next) {
          currentNode = currentNode.next;
      }
      currentNode.next = node;
  }
  this.length++;
  return;
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.length) {
      return;
  }
  
  let node = new Node(val);
  let currentNode = this.head;
  let previousNode;
  let currentIndex = 0;
  
  if (index === 0) {
      node.next = currentNode;
      this.head = node;
  } else {
      while(currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
      }
      
      node.next = currentNode;
      previousNode.next = node;
  }
  this.length++;
  return;
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index > this.length) {
      return;
  }
  
  let currentNode = this.head;
  let currentIndex = 0;
  let previousNode;
  
  if (index === 0) {
      this.head = currentNode.next;
  } else {
      while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
      }
      
      previousNode.next = currentNode.next;
  }
  this.length--;
  return currentNode.element;
};
