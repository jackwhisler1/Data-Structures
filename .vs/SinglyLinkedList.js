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
}

let sll = new SinglyLinkedList();
sll.push("hello");
sll.push("hi");
sll.shift();
console.log(sll);
sll.pop();
console.log(sll);
sll.pop();
console.log(sll);
sll.shift();
console.log(sll);
sll.shift();
console.log(sll);
