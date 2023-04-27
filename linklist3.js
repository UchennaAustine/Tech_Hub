class Node3 {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Linkedlist3 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let node3 = new Node3(val);
    if (!this.head) {
     this.head = node3;
     this.tail = this.head
    } else {
        this.tail.next = node3;
      this.tail = node3;
    }
    this.length++;
    return this;
  }

  remove() {
    if (!this.head) {
      return undefined;
    } else {
      let currentTl = this.tail;
      let newTail = currentTl;

      while (currentTl.next) {
        this.tail = newTail;
        this.tail.next = null;

        this.length--;
        return currentTl;
      }
    }
  }
}

console.clear();
let linkedlist3 = new Linkedlist3();
console.log(linkedlist3.insert(3));
console.log(linkedlist3.insert(4));
console.log(linkedlist3.insert(5));
console.log(linkedlist3.insert(6));
console.log(linkedlist3.insert(7));

console.log(linkedlist3.length);

linkedlist3.remove();
console.log("");
console.log(linkedlist3.length);

