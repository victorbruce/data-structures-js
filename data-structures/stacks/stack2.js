/* ES6 Implementation */

class Stack {
  constructor() {
    this.storage = "";
    this.size = 0;
  }

  push(val) {
    this.storage = this.storage.concat("***", val);

    this.size++;
  }

  pop() {
    const str = this.storage.slice(this.storage.lastIndexOf("***"));

    this.storage = this.storage.substring(0, this.storage.lastIndexOf("***"));

    this.size--;
    return str;
  }

  peek() {
    const str = this.storage.substring(this.storage.lastIndexOf("***") + 3);
    console.log(str);
  }

  length() {
    return this.size;
  }

  printStack() {
    console.log(this.storage);
  }
}

const myStack = new Stack();

myStack.push("design");
myStack.push("eat");
myStack.push("code");
myStack.peek();
myStack.pop();
myStack.peek();
console.log(myStack.length());