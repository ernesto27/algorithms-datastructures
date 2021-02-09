var Noded = /** @class */ (function () {
    function Noded(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
    return Noded;
}());
var MyLinkedList = /** @class */ (function () {
    function MyLinkedList() {
        this.listNodes = [];
        this.countNodes = 0;
    }
    MyLinkedList.prototype.get = function (index) {
        var current = this.head;
        var i = 0;
        while (current !== null) {
            if (i === index) {
                return current.value;
            }
            current = current.next;
            i += 1;
        }
        return -1;
    };
    MyLinkedList.prototype.addAtHead = function (val) {
        if (this.head) {
            var prevHead = this.head;
            var newNode = new Noded(val, null, prevHead);
            prevHead.prev = newNode;
            this.head = newNode;
            this.listNodes.push(newNode);
        }
        else {
            var n = new Noded(val, null, null);
            this.head = n;
            this.listNodes.push(n);
        }
    };
    MyLinkedList.prototype.addAtTail = function (val) {
        if (this.head) {
            var current = this.head;
            var tail = void 0;
            while (current !== null) {
                tail = current;
                current = current.next;
            }
            var n = new Noded(val, tail, null);
            tail.next = n;
        }
        else {
            var n = new Noded(val, null, null);
            this.head = n;
            this.listNodes.push(n);
        }
    };
    MyLinkedList.prototype.addAtIndex = function (index, val) {
        
        var current = this.head;
        var i = 0;
        while (current) {
            if (i === index) {
                var n = new Noded(val, current.prev, current);
                current.prev.next = n;
                current.prev = n;
                break;
            }
            current = current.next;
            i += 1;
        }

        this.getAll();
        if(index === this.countNodes) {
            this.addAtTail(val)
        }

        if(index === 0) {
            var n = new Noded(val, null, (current) ? current : null);
            this.head = n;
            return false;
        }
    };
    MyLinkedList.prototype.deleteAtIndex = function (index) {
        var current = this.head;

        if(index === 0) {
            this.head = current.next;
            return false;
        }
        
        var i = 0;
        while (current !== null) {
            if (i === index) {
                current.next.prev = current.prev;
                current.prev.next = current.next;
                break;
            }
            current = current.next;
            i += 1;
        }
    };
    MyLinkedList.prototype.getAll = function () {
        var current = this.head;
        while (current) {
            console.log(current)
            this.countNodes += 1;
            current = current.next;
        }
        return [];
    };
    return MyLinkedList;
}());

/*
["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
[[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]
*/

/*
["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
[[],[1],[3],[1,2],[1],[0],[0]]
*/

var obj = new MyLinkedList();
obj.addAtIndex(0, 10)
// obj.deleteAtIndex(0);
// obj.addAtHead(1);
// //   obj.addAtHead(3);
// obj.addAtTail(3);
// //   obj.getAll();
// //   console.log(obj.get(3))
// obj.addAtIndex(1, 2);
// console.log(obj.get(1));
// //   obj.getAll();
// obj.deleteAtIndex(1);
// obj.getAll();
//   var param_1 = obj.get(index)
//   obj.addAtHead(val)
//   obj.addAtTail(val)
//   obj.addAtIndex(index,val)
//   obj.deleteAtIndex(index)
