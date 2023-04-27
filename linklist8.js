class Node8{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}


class Linkedlist8{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val){
        let node8 = new Node8(val)
        if (!this.head) {
            this.head = node8;
            this.tail = this.head;
        } else {
            this.tail = node8;
            this.tail.next = node8;
        }

        this.length++;
        return this;
    }

    remove(){
        if (!this.head) {
            return undefined
        } else {
            let currentTl5 = this.tail;
            let newTail = currentTl5;

            while (currentTl5.next) {
                this.tail = newTail;
                this.tail.next = null;
            }

            this.length--;
            return currentTl5;
        }
    }
}

console.clear()
let linkedlist8 = new Linkedlist8()
console.log(linkedlist8.insert("gun"));
console.log(linkedlist8.insert(564));
console.log(linkedlist8.insert({gun: "Ak47"}));
console.log(linkedlist8.insert(["kaboom"]));

console.log(linkedlist8.length);
console.log("");

linkedlist8.remove()
console.log(linkedlist8.length);