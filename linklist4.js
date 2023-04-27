class Node4 {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Linkedlist4 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let node4 = new Node4(val);
    if (!this.head) {
      this.head = node4;
      this.tail = this.head;
    } else {
      this.tail.next = node4;
      this.tail = node4;
    }

    this.length++;
    return this;
  }

  remove() {
    if (!this.head) {
      return undefined;
    } else {
      let currentTl1 = this.tail;
      let newTail = currentTl1;

      while (currentTl1.next) {
        this.tail.next = null;
        this.tail = newTail;
      }
      this.length--;
      return currentTl1;
    }
  }
}

console.clear();
let linkedlist4 = new Linkedlist4();
console.log(linkedlist4.insert(3));
console.log(linkedlist4.insert("God"));
console.log(linkedlist4.insert(["God"]));
console.log(linkedlist4.insert({ item: "bread" }));
console.log(linkedlist4.insert({ car: "Lexus" }));
console.log(linkedlist4.insert([{ food: "Beans" }]));
console.log(linkedlist4.insert([{ houses: "Bungalow" }]));

console.log(linkedlist4.length);
console.log("");

linkedlist4.remove();
console.log(linkedlist4.length);
