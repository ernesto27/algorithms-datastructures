function Queue(array) {
    this.array = [];
    if(array) this.array = array;
}

Queue.prototype.getBuffer = function() {
    return this.array.slice();
}

Queue.prototype.isEmpty = function() {
    return this.array.length === 0;
}

Queue.prototype.peek = function() {
    return this.array[0];
}

Queue.prototype.enqueue = function(value) {
    return this.array.push(value);
}

Queue.prototype.dequeue = function() {
    return this.array.shift();
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue);
queue.dequeue();
console.log(queue);












