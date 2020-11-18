/** Using the Constructor function */
const Stack = function() {
  this.storage = "";
  this.size = 0;
}

Stack.prototype.push = function(val) {
  this.storage = this.storage.concat("***", val);

  this.size++
};

Stack.prototype.pop = function() {
  // get the last item in the string
  const str = this.storage.slice(this.storage.lastIndexOf("***") + 3);

  // Update the storage with the exclusion of the last item
  this.storage = this.storage.substring(0, this.storage.lastIndexOf("***"));

  // Return storage size
  this.size--;
  // Return the poped item
  return str;
};

Stack.prototype.peek = function() {
  const str = this.storage.substring(this.storage.lastIndexOf("***") + 3);
  console.log(str);
}

Stack.prototype.length = function() {
  return this.size;
};

Stack.prototype.print = function() {
  console.log(this.storage);
}

const myStack = new Stack();

myStack.push("design");
myStack.push("eat");
myStack.push("code");
myStack.peek();
myStack.pop();
myStack.peek();
