class Node11{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Linkedlist11{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val) {
        let node11 = new Node11(val)
        if (!this.head) {
            this.head = node11;
            this.tail = this.head;
        } else{
            this.tail = node11;
            this.tail.next = node11;
        }

        this.length++;
        return this;
    }

    remove(){
        if (!this.head) {
            return undefined
        } else{
            let currentTl8 = this.tail;
            let newTail = currentTl8;

            while (currentTl8.next) {
                this.tail = newTail;
                this.tail.next = null;
            }

            this.length--;
            return currentTl8;
        }
    }
}

console.clear()
let linkedlist11 = new Linkedlist11()
console.log(linkedlist11.insert(789));
console.log(linkedlist11.insert("gfyjy"));

console.log(linkedlist11.length);
console.log("");

linkedlist11.remove()
console.log(linkedlist11.length);