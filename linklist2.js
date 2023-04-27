class Node2 {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Linkedlist2 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let node2 = new Node2(val);
    if (!this.head) {
        this.head = node2;
      this.tail = this.head;
    } else {
      this.tail = node2;
      this.tail.next = node2;
    }
    this.length++;
    return this;
  }

  remove() {
    if (!this.head) {
      return undefined;
    } else {
      let currentT = this.tail;
      let newTail = currentT;

      while (currentT.next) {
        this.tail = newTail;
        this.tail.next = null;
    }
    this.length--;
    return currentT;
    }
  }
}
console.clear();
let linklist = new Linkedlist2();
console.log(linklist.insert(45));
console.log(linklist.insert(34));
console.log(linklist.insert(70));

console.log(linklist.length);
console.log("");

console.log(linklist.remove());
console.log(linklist.length);
