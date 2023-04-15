const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  root(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  root() {
    this.root = null;
  }

  add(value) {
    this.root = addWithin(this.root, value); // положи в наш корень то что вернет наша функция т.е какое то под дерево(this.root) некоторое значение (value)

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};


function addItems() {
  console.log('\n  Add Items');
  console.log('add 13, 15, 9, 20, 18, 32, 25');

  bst.add(13);
  bst.add(15);
  bst.add(9);
  bst.add(20);
  bst.add(18);
  bst.add(32);
  bst.add(25);

  console.log(bst);
}

const bst = new BinarySearchTree();

addItems();