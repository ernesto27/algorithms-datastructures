class Heap {
    constructor(data) {
        this.data = data;
    }

    rooNode() {
        return this.data[0];
    }

    lastNode() {
        return this.data[this.data.length - 1];
    }

    lefChildIndex(index) {
        return (index * 2) + 1;
    }

    rigthChildIndex(index) {
        return (index * 2) + 2;
    }

    parentIndex(index) {
        return parseInt((index -1) / 2);
    }

    insert(value) {
        this.data.push(value);

        let newNodeIndex = this.data.length - 1;

       

        while (newNodeIndex > 0 && this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]) {
            console.log('new node', this.data[newNodeIndex])
            console.log('parent node', this.data[this.parentIndex(newNodeIndex)])
            var temp = this.data[this.parentIndex(newNodeIndex)];
            this.data[this.parentIndex(newNodeIndex)] = this.data[newNodeIndex];
            this.data[newNodeIndex] = temp;

            newNodeIndex = this.parentIndex[newNodeIndex];
        }
    }
}

var data = [100, 88, 25, 87, 16, 8, 12, 86, 50, 2, 15, 3];
var heap = new Heap(data);
// console.log(heap)
// console.log(heap.parentIndex(2))
heap.insert(30);
// console.log(heap)
