class Node7{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Linkedlist7{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    insert(val){
        let node7 = new Node7(val)
        if (!this.head) {
            this.head= node7;
            this.tail = this.head;
        } else {
            this.tail = node7;
            this.tail.next = node7;
        }

        this.length++;
        return this;
    }

    remove(){
        if (!this.head) {
            return undefined
        } else {
            let currentTl4  = this.tail;
            let newTail = currentTl4;

            while (currentTl4.next) {
                this.tail = newTail;
                this.tail.next = null;
            }

            this.length--;
            return currentTl4
        }
    }
}

console.clear()
let linkedlist7 = new Linkedlist7()
console.log(linkedlist7.insert("Hunger"));
console.log(linkedlist7.insert(789));
console.log(linkedlist7.insert({number: 7}));
console.log(linkedlist7.insert(["food"]));

console.log(linkedlist7.length)
console.log("");

linkedlist7.remove()
console.log(linkedlist7.length)