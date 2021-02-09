class Noded {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
class MyLinkedList {
    constructor() {
        this.listNodes = [];
    }
    get(index) {
        let current = this.head;
        let i = 0;
        while (current !== null) {
            if (i === index) {
                return current.value;
            }
            current = current.next;
            i += 1;
        }
        return -1;
    }
    addAtHead(val) {
        if (this.head) {
            const prevHead = this.head;
            const newNode = new Noded(val, null, prevHead);
            prevHead.prev = newNode;
            this.head = newNode;
            this.listNodes.push(newNode);
        }
        else {
            const n = new Noded(val, null, null);
            this.head = n;
            this.listNodes.push(n);
        }
    }
    addAtTail(val) {
        if (this.head) {
            let current = this.head;
            let tail;
            while (current !== null) {
                tail = current;
                current = current.next;
            }
            const n = new Noded(val, tail, null);
            tail.next = n;
        }
        else {
            const n = new Noded(val, null, null);
            this.head = n;
            this.listNodes.push(n);
        }
    }
    addAtIndex(index, val) {
        let current = this.head;
        let i = 0;
        while (current !== null) {
            if (i === index) {
                const n = new Noded(val, current.prev, current);
                current.prev.next = n;
                break;
            }
            current = current.next;
            i += 1;
        }
    }
    deleteAtIndex(index) {
    }
    getAll() {
        let current = this.head;
        while (current !== null) {
            console.log(current);
            current = current.next;
        }
        return [];
    }
}
var obj = new MyLinkedList();
obj.addAtHead(2);
obj.addAtHead(1);
//   obj.addAtHead(3);
obj.addAtTail(99);
obj.addAtTail(50);
//   obj.getAll();
//   console.log(obj.get(3))
obj.addAtIndex(1, 666);
obj.getAll();
//   var param_1 = obj.get(index)
//   obj.addAtHead(val)
//   obj.addAtTail(val)
//   obj.addAtIndex(index,val)
//   obj.deleteAtIndex(index)
//# sourceMappingURL=linkedList.js.map