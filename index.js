console.log("This is the best Class Ever");

//Terminologies to be gotten used to
//Head is the value that begins the list
//The node that end is pointing to null is the Tail
//The data that the node contain is the value

//The first thing is to define the node

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push
  // add
  // insert
  insert(val) {
    let node = new Node(val);
    //a node is empty when the head is null
    if (!this.head) {
      this.tail = this.head;
      this.head = node;
    } else {
      this.tail = node;
      this.tail.next = node;
    }

    this.length++;
    return this;
  }
  remove() {
    if (!this.head) {
      3;

      return undefined;
    } else {
      let current = this.tail;
      let newTail = current;

      while (current.next) {
        this.tail = newTail;
        this.tail.next = null;
      }

      this.length--;
      return current;
    }
  }
}

console.clear();
let linkedList = new Linklist();
console.log(linkedList.insert(39));
console.log(linkedList.insert(34));

console.log(linkedList.insert([6, 8, 9]));
console.log(linkedList.insert(79));
console.log(linkedList.insert({ name: "Peter" }));
console.log(linkedList.insert(09));
console.log("");
console.log(linkedList.length);
linkedList.remove();
console.log("");
console.log(linkedList.length);
