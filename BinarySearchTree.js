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
        } else if (compareNode.value > value) {
          if (!compareNode.left) {
            found = true;
            compareNode.left = new Node(value);
            return this;
          }
          compareNode = compareNode.left;
        } else if (compareNode.value < value) {
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
  find(value) {
    if (!this.root) {
      return false;
    } else if (value === this.root.value) {
      return true;
    } else {
      let current = this.root;
      while (current) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }
      return false;
    }
  }

  breadthFirstSearch() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  // preorder
  DFSPreOrder() {
    let data = [],
      current = this.root;
    traverse(current);
    return data;
    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
  }

  DFSPostOrder() {
    let data = [],
      current = this.root;
    traverse(current);
    return data;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }
  }

  DFSInOrder() {
    let data = [],
      current = this.root;
    traverse(current);
    return data;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);

      if (node.right) {
        traverse(node.right);
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
tree.insert(1);
/**
 *      4
 *    3   8
 *  2    5
 *   2.3
 */
console.log(tree);
console.log(tree.find(55));
console.log(tree.breadthFirstSearch());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
