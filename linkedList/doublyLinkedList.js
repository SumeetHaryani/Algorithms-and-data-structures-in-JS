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
    const newNode = new Node(val);
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
    const node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }

  shift() {
    if (!this.head) return undefined;
    const node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return node;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      let count = 0;
      let cur = this.head;
      while (count != index) {
        cur = cur.next;
        count++;
      }
      return cur;
    }

    let count = this.length - 1;
    let cur = this.tail;
    while (count != index) {
      cur = cur.prev;
      count--;
    }
    return cur;
  }

  set(val, index) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const afterNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
