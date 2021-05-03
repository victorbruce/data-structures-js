class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(element) {
    return this.storage.push(element);
  }

  dequeue() {
    return this.storage.shift();
  }

  front() {
    return this.storage[0];
  }

  size() {
    return this.storage.length;
  }

  print() {
    console.log(this.storage);
  }
}

const myq = new Queue;
myq.enqueue("one");
myq.enqueue("two");
myq.enqueue("three");

console.log(myq.size());

myq.dequeue();
console.log(myq.size());
myq.print();

myq.dequeue();
myq.print();