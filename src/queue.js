const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.value = {};
    this.head = 0;
    this.tail = 0;
  }
  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    this.value[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    const value = this.value[this.head];
    delete this.value[this.head];
    this.head++;
    return value;

  }
}

module.exports = {
  Queue
};

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

console.log(queue.dequeue(queue));
console.log(queue);
