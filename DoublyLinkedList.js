class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return this.poppedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    var temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return this.temp;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length || typeof index !== "number") {
      return null;
    }
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, value) {
    var node = get(index);
    if (node) {
      node.val = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else if (index >= this.length || index < 0) {
      return false;
    } else {
      var newNode = new Node(value);

      var prevNode = get(index - 1);
      var nextNode = get(index);
      set(index, value);
      prevNode.next = newNode;
      nextNode.prev = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      this.length++;
      return newNode;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift(value);
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    var itemToBeRemoved = this.get(index);
    if (itemToBeRemoved) {
      prevItem = itemToBeRemoved.prev;
      nextItem = itemToBeRemoved.next;
      prevItem.next = nextItem;
      nextItem.prev = prevItem;
      itemToBeRemoved.prev = null;
      itemToBeRemoved.next = null;
    }
    this.length--;
    return itemToBeRemoved;
  }
}

let dll = new DoublyLinkedList();
dll.push("Chicago Cubs");
dll.push("Arizona Diamondbacks");
dll.push("St Louis Cardinals");
console.log(dll);
dll.push("LA Dodgers");
console.log(dll.get(3));
console.log(dll);
