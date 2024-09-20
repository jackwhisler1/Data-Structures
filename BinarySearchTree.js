class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    } else if (value === this.root.value) {
      return null;
    } else {
      let compareNode = this.root;
      let found = false;
      while (!found) {
        if (compareNode.value === value) {
          return null;
        }
        if (compareNode.value > value) {
          if (!compareNode.left) {
            found = true;
            compareNode.left = new Node(value);
            return this;
          }
          compareNode = compareNode.left;
        }
        if (compareNode.value < value) {
          if (!compareNode.right) {
            found = true;
            compareNode.right = new Node(value);
            return this;
          }
          compareNode = compareNode.right;
        }
      }
    }
  }
}

var tree = new BinarySearchTree();
tree.insert(4);
tree.insert(8);
tree.insert(3);
tree.insert(2);
tree.insert(5);
tree.insert(2.3);
console.log(tree);
