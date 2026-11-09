const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null; // корень дерева (root), пока дерево пустое: null
  }

  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);
    if (!this._root) {
      this._root = node;
      return;
    }
    let cur = this._root;
    while (true) {
      if (data === cur.data) return; // дубликаты не добавляем
      if (data < cur.data) {
        if (!cur.left) {
          cur.left = node;
          return;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = node;
          return;
        }
        cur = cur.right;
      }
    }
  }

  find(data) {
    let cur = this._root;
    while (cur) {
      if (data === cur.data) return cur;
      cur = data < cur.data ? cur.left : cur.right;
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    }
    // нашли нужный узел: у него 0 или 1 потомок
    if (!node.left) return node.right;
    if (!node.right) return node.left;
    // 2 потомка: заменяем значение минимумом из правой ветки и удаляем его оттуда
    let minRight = node.right;
    while (minRight.left) minRight = minRight.left;
    node.data = minRight.data;
    node.right = this._removeNode(node.right, minRight.data);
    return node;
  }

  min() {
    if (!this._root) return null;
    let cur = this._root;
    while (cur.left) cur = cur.left;
    return cur.data;
  }

  max() {
    if (!this._root) return null;
    let cur = this._root;
    while (cur.right) cur = cur.right;
    return cur.data;
  }
}

module.exports = {
  BinarySearchTree
};
