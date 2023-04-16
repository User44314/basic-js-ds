const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0)
      return "Underflow";
    return this.items.pop();
  }

  shift() {
    return this.items[this.items.length - 1]; // the same
  }

  peek() {
    return this.items[this.items.length - 1]; // the same
  }
}

module.exports = {
  Stack
};

function arrayItems() {
  console.log('add element in stack');
  st.push(1);
  st.push(2);
  st.push(3);
  st.push(4);

  console.log(st);
  console.log(st.shift());
  console.log(st);
  console.log(st.peek());
  console.log(st);
  console.log(st.pop());
  console.log(st);
}

let st = new Stack();
arrayItems();