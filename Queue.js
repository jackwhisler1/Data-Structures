class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    var temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}
var q = new Queue();
q.enqueue(3);
q.enqueue(35);
q.enqueue(33);
console.log(q);
q.dequeue();
console.log(q);
