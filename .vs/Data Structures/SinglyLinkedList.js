class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) {
      return undefined;
    }
    var current = this.head;
    var newTail = current;
    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    } else {
      var prevHead = this.head;
      this.head = prevHead.next;
      this.length--;
      return prevHead;
    }
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (
      index < this.length &&
      typeof index === "number" &&
      index >= 0 &&
      this.head
    ) {
      var counter = 0;
      var current = this.head;
      while (counter <= index) {
        if (counter < index) {
          counter++;
          current = current.next;
        } else {
          return current;
        }
      }
    }
    return undefined;
  }

  set(index, value) {
    var foundNode = this.get(index);
    if (!foundNode) {
      return false;
    } else {
      foundNode.val = value;
      return true;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length || typeof index !== "number") {
      return false;
    } else if (index === this.length) {
      !!this.push(value);
    } else if (index === 0) {
      !!this.unshift(value);
    } else {
      var newNode = new Node(value);
      var prev = this.get(index - 1);
      var temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length || typeof index !== "number") {
      return undefined;
    } else if (index === this.length - 1) {
      this.pop();
    } else if (index === 0) {
      this.shift();
    } else {
      var prev = this.get(index - 1);
      var removed = prev.next;
      prev.next = removed.next;
      this.length--;
      return prev.next;
    }
  }

  reverse() {
    if (this.head) {
      var node = this.head;
      this.head = this.tail;
      this.tail = node;

      var next;
      var prev = null;
      for (var i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let sll = new SinglyLinkedList();
sll.push("hello");
sll.push("hi");
// sll.shift();
console.log(sll);
// sll.pop();
sll.unshift("howdy");
console.log(sll);
// console.log(sll.get(1));
// console.log(sll.get(2));
console.log(sll.get("helo"));
console.log(sll.set(0, "bullocks"));
// console.log(sll);
console.log(sll.insert(1, "one"));
sll.push("hi hi");
sll.print();
sll.reverse();
sll.print();
