class Node2{
    constructor(val){
        this.value= val;
        this.next= null;
    }
}

class Linkedlist2{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val) {
        let node= new Node2(val)
        if (!this.head) {
            this.tail = this.head;
            this.head = node;
        } else{
            this.tail = node;
            this.tail.next= node;
        }
        this.length++
        return this
    }

    remove() {
        if(!this.head){
            return undefined
        } else {
            let currentT = this.tail;
            let newTail = currentT;

            while (currentT.next) {
                this.tail.next = null
                this.tail = newTail
            }

            this.length--
            return this
        }
    }
}
console.clear()
let linklist = new Linkedlist2()
console.log(linklist.insert(45));
console.log(linklist.insert(34));
console.log(linklist.insert(70));

console.log(this.length);
console.log("")

console.log(linklist.remove())
console.log(this.length)