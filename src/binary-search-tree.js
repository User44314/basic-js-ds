const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
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

  has(value) {
    return searchWithinData(this.root, value);

    function searchWithinData(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value ?
        searchWithinData(node.left, value) :
        searchWithinData(node.right, value);
    }
  }

  rightTraverse(cb) {  // cb - callback
    doRight(this.root, cb);

    function doRight(node, cb) {
      if (node) {
        doRight(node.right, cb);
        cb(node.value);
        doRight(node.left, cb);
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return false;
    }

    let node = this.root;
    let found = false;
    while (node && !found) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        found = node;
      }
    }
    return found ? true : false;
  }


    remove(value) {
      this.root = removeNode(this.root, value);

      function removeNode(node, value) {
        if (!node) {
          return null;
        }

        if (value < node.value) {
          node.left = removeNode(node.left, value);
          return node;
        } else if (node.value < value) {
          node.right = removeNode(node.right, value);
          return node;
        } else {
          // equal - should remove this item
          if (!node.left && !node.right) {
            // put null instead of item
            return null;
          }

          if (!node.left) {
            // set right child instead of item
            node = node.right;
            return node;
          }

          if (!node.right) {
            // set left child instead of item
            node = node.left;
            return node;
          }

          // both children exists for this item
          let minFromRight = node.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          node.value = minFromRight.value;

          node.right = removeNode(node.right, minFromRight.value);

          return node;
        }
      }
    }

    min() {
      if (!this.root) {
        return;
      }

      let node = this.root;
      while (node.left) {
        node = node.left;
      }

      return node.value;
    }

    max() {
      if (!this.root) {
        return;
      }

      let node = this.root;
      while (node.right) {
        node = node.right;
      }

      return node.value;
    }
  }




function addItems() {


  bst.add(1);
  bst.add(2);
  bst.add(3);
  bst.add(4);
  bst.add(5);
  bst.add(6);
  bst.add(7);

  console.log(bst);


  console.log('min:', bst.min());
  console.log('max:', bst.max());

  console.log('  Right Traverse:');
  bst.rightTraverse((val) => console.log(val));

  console.log('find 4 ', bst.find(4));
}

function getItems() {

  console.log('has 3', bst.has(3));
  console.log('has 55', bst.has(55));
  console.log('\n', bst);

}



function removeItem() {
  console.log('  Remove Item');

  bst.remove(7);
  console.log('remove 7');
  console.log(bst);


}

const bst = new BinarySearchTree();



addItems();
getItems();
removeItem();



module.exports = {
  BinarySearchTree
};