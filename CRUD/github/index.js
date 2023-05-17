class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };


insert(val) {
    let node = new Node(val);
    if(!this.head) {
        this.head = node;
        this.tail = this.head;
    } else {
        this.tail = node 
        this.next = node;

        this.length++
        return this;
    }
}
}