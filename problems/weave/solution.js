// DIRECTIONS
/*
  1) Complete the task in weave/queue.js
  2) Implement the 'weave' function. Weave receives two queues as 
  arguments and combines the contents of each into a new, third queue.
  The third queue should contain the *alterating* content of the two queues. The
  function  should handle queues of different lengths without inserting 'undefined'
  into the new one.
  *Do not* access the array inside of any queue, only use 'add', 'remove', and 'peek' functions.
  Example:
  const queueOne = new Queue();
  queueOne.add(1);
  queueOne.add(2);
  const queueTwo = new Queue();
  queueTwo.add('Hi');
  queueTwo.add('There');
*/

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const result = new Queue();

  while(sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      result.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      result.add(sourceTwo.remove());
    }
  }

  return result;
}

console.log(weave([2,1], ['There', 'Hi']));