// Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element(the next one to be returned) from
// the queue *without* removing it.

class Queue {
  constructor() {
    this.storage = [];
  }

  add(val) {
    this.storage.unshift(val);
  }

  remove() {
    this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }
}

const q = new Queue();
q.add(1);
q.add(2);

module.exports = Queue;
