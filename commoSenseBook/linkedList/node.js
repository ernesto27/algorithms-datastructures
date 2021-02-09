class Node {

    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}

var n1 = new Node('node1');
var n2 = new Node('node2');
var n3 = new Node('node3');

n1.nextNode = n2;
n2.nextNode = n3;
n3.nextNode = null;

// console.log(n1)

class LinkedList {
    constructor(firstNode) {
        this.firstNode = firstNode;
    }

    read(index) {
        let currenNode = this.firstNode;
        let currentIndex = 0;

        while (currentIndex < index) {
            currenNode = currenNode.nextNode;
            currentIndex += 1;

            if (currenNode === null) {
                return false;
            }
        }

        return currenNode.data;
    }

    indexOf(value) {
        let currenNode = this.firstNode;
        let currentIndex = 0;

        while (currenNode !== null) {
            if (currenNode.data === value) {
                return currentIndex;
            }

            currenNode = currenNode.nextNode;
            currentIndex += 1;
        }

        return false;
    }

    insertAtIndex(index, value) {
        let newNode = new Node(value);

        if (index === 0) {
            newNode.nextNode = this.firstNode;
            this.firstNode = newNode;
            return false;
        }

        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentIndex < (index - 1)) {
            currentNode = currentNode.nextNode;
            currentIndex += 1;
        }

        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;

        console.log(newNode)
    }

    deleteAtIndex(index) {
        if (index === 0) {
            this.firstNode = this.firstNode.nextNode;
            return;
        }
        
        let currentNode = this.firstNode;
        let currentIndex = 0;

        while (currentIndex < index -1) {
            currentNode = currentNode.nextNode;
            currentIndex += 1;
        }

        let nodeAfterDeleteNode = currentNode.nextNode.nextNode;
        currentNode.nextNode = nodeAfterDeleteNode;
    }
}

var list = new LinkedList(n1);
console.log(list.read(100));
console.log(list.indexOf('node3'))
list.insertAtIndex(2, 'OTHER NODE');

















