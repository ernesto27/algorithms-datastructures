class Node {

    constructor(data) {
        this.data = data;
        this.nextNode;
        this.prevNode;
    }
}

class DoubleLinkedList {
    constructor(firstNode = null, lastNode = null) {
        this.firstNode = firstNode;
        this.lastNode = lastNode;
    }

    insertAtEnd(value) {
        let newNode = new Node(value);

        if (!this.firstNode) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else {
            newNode.prevNode = this.lastNode;
            this.lastNode.nextNode = newNode;
            this.lastNode = newNode;
        }
    }

    removeFromFront() {
        let removedNode = this.firstNode;
        this.firstNode = this.firstNode.nextNode;
        return removedNode;
    }
}

class Queue {

    constructor() {
        this.data = new DoubleLinkedList();
    }

    enqueue(element) {
        this.data.insertAtEnd(element);
    }

    dequeue() {
        let removedNode = this.data.removeFromFront();
        return removedNode.data;
    }
}


var q = new Queue();
console.log(q)
q.enqueue('First')
q.enqueue('Second')
q.enqueue('Three')
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())