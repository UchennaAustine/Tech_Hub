class Node10{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Linkedlist10{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val){
        let node10 = new Node10(val);
        if (!this.head) {
            this.head = node10;
            this.tail = this.head;
        } else{
            this.tail.next = node10;
            this.tail = node10;
        }

        this.length++;
        return this;
    }

    remove(){
        if (!this.head) {
            return undefined
        } else {
            let currentTl7 = this.tail;
            let newTail = currentTl7;

            while (currentTl7.next) {
                this.tail.next = null;
                this.tail = newTail;
            }

            this.length--;
            return currentTl7
        }
    }
}

console.clear()
let linkedlist10 = new Linkedlist10()
console.log(linkedlist10.insert("fhvhk"));
console.log(linkedlist10.insert(345));
console.log(linkedlist10.insert({hjdf: "jhb"}));
console.log(linkedlist10.insert(["fjfj"]));

console.log(linkedlist10.length);
console.log("");

linkedlist10.remove()
console.log(linkedlist10.length);