// -- Directions
// Create a stack data structure. The stack should be a class with methods 'push', 'pop', and 'peek'.
// Adding an element to the stack should store it until it is removed
// Examples
// const s = new Stack();
// s.push(1);
// s.push(2);
// s.pop(); // returns 2
// s.pop(); // returns 1

class Stack {
  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.push(val);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }
}

const s = new Stack();
s.push(1);
s.push(2);
console.log(s.peek());