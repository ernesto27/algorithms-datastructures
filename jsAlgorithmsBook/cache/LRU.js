function DLLNode(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
}

function LRUCache(capacity) {
    this.keys = {};
    this.capacity = capacity;
    this.head = new DLLNode('', null);
    this.tail = new DLLNode('', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

LRUCache.prototype.removeNode = function(node) {
    var prev = node.prev;
    var next = node.next;
    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.addNode = function(node) {
    var realTail = tail.prev.prev;
    realTail.next = node;

    this.tail.prev = node;
    node.prev = realTail;
    node.next = this.tail;
}

























