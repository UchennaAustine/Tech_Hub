class Node6{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Linkedlist6{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    insert(val){
        let node6 = new Node6(val)
        if(!this.head){
            this.head = node6;
            this.tail = this.head;
        } else{
            this.tail = node6;
            this.tail.next = node6;
        }

        this.length++;
        return this
    }

    remove(){
        if (!this.head) {
            return undefined
        } else{
            let currentTl3 = this.tail;
            let newTail = currentTl3;

            while (currentTl3.next) {
                this.tail = newTail;
                this.tail.next = null;
            }

            this.length--;
            return currentTl3
        }
    }
}

console.clear()
let linkedlist6= new Linkedlist6();
console.log(linkedlist6.insert("Brother"));
console.log(linkedlist6.insert(2,5));
console.log(linkedlist6.insert({machine: "plougher"}));

console.log(linkedlist6.length)
console.log("");

linkedlist6.remove()
console.log(linkedlist6.length)