const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root ? this._root.value : null;
  }

  add(data) {
    const node = { value: data, left: null, right: null };

    if (!this._root) {
      this._root = node;
      return;
    }

    let curr = this._root;
    while (true) {
      if (data < curr.value) {
        if (!curr.left) {
          curr.left = node;
          break;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = node;
          break;
        }
        curr = curr.right;
      }
    }
  }

  has(data) {
    let curr = this._root;
    while (curr) {
      if (data === curr.value) {
        return true;
      } else if (data < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }

  find(data) {
    let curr = this._root;
    while (curr) {
      if (data === curr.value) {
        return curr;
      } else if (data < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;

      if (data < node.value) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.value) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.value = minRight.value;
        node.right = removeNode(node.right, minRight.value);
        return node;
      }
    };

    this._root = removeNode(this._root, data);
  }

  min() {
    if (!this._root) return null;

    let curr = this._root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.value;
  }

  max() {
    if (!this._root) return null;

    let curr = this._root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.value;
  }
}





module.exports = {
  BinarySearchTree
};