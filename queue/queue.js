// Queue linked list based implementation
class Queue {
  constructor() {
    this.first = null;
    this.last == null;
    this.size = 0;
  }

  // adding at end and removing at beginning.
  enqueue(val) {
    const newNode = new Node(val);
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
    const removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return removedNode.value;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const queue = new Queue();
queue.enqueue('hey');
queue.enqueue('hello');
queue.enqueue('great');
console.log('queue', queue.dequeue());
console.log('queue', queue);
