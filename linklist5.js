class Node5 {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Linkedlist5 {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let node5 = new Node5(val);
    if (!this.head) {
      this.head = node5;
      this.tail = this.head;
    } else {
      this.tail = node5;
      this.tail.next = node5;
    }

    this.length++;
    return this;
  }

  remove(){
    if (!this.head) {
        return undefined
    } else{
        let currentTl2 = this.tail;
        let newTail = currentTl2

        while (currentTl2.next) {
            this.tail= currentTl2
            this.tail.next= null
        }

        this.length--
        return currentTl2
    }

  }
}

console.clear()
let linkedlist5 = new Linkedlist5()
console.log(linkedlist5.insert("me"));
console.log(linkedlist5.insert(1));
console.log(linkedlist5.insert({name: "Austine"}));

console.log(linkedlist5.length);
console.log("");

linkedlist5.remove()
console.log(linkedlist5.length);