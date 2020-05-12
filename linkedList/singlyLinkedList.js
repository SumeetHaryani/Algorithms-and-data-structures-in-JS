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
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let cur = this.head;
    let prev = cur;
    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    // if only one node
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return cur;
  }

  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    // if only one node
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
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
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(val, index) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const prevNode = this.get(index - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    // prev cur next 
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    while (node) {
      next = node.next;
      node.next = prev;
      prev=node
      node = next;
    }
    return this;
  }
}
const list = new SinglyLinkedList();
list.push('hey');
list.push('hello');

console.log(list.shift());
list.unshift('jai');
console.log(list.set('jp', 1));
console.log(list);
console.log(list.reverse());
