class Node9{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Linkedlist9{
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val){
        let node9 = new Node9(val)
        if (!this.head) {
            this.head = node9;
            this.tail = this.head;
        } else{
            this.tail = node9;
            this.tail.next = node9;
        }

        this.length++;
        return this;
    }

    remove(){
        if (!this.head) {
            return undefined
        } else{
            let currentTl6 = this.tail;
            let newTail = currentTl6;

            while (currentTl6.next) {
                this.tail = newTail;
                this.tail.next = null;
            }

            this.length--;
            return currentTl6;
        }
    }
}

console.clear()
let linkedlist9 = new Linkedlist9()
console.log(linkedlist9.insert("kjnvb"));
console.log(linkedlist9.insert(564));
console.log(linkedlist9.insert({jv: "hjfvv"}));
console.log(linkedlist9.insert(["jjkfjvn"]));

console.log(linkedlist9.length);
console.log("");

linkedlist9.remove()
console.log(linkedlist9.length);