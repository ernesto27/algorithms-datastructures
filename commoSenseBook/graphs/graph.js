class Vertex {
    constructor(value) {
        this.value = value;
        this.adjancenVertices = [];
    }

    addAdjancentVertices(vertex) {
        if (this.adjancenVertices.includes(vertex)) {
            return false;
        }
        this.adjancenVertices.push(vertex);
        vertex.addAdjancentVertices(this);
    }

    dfsTraverse(vertex = this, visitedVertices = {}) {
        visitedVertices[vertex.value] = true;

        console.log(vertex.value);

        vertex.adjancenVertices.forEach(item => {
            if (!visitedVertices[item.value]) {
                this.dfsTraverse(item, visitedVertices);
            }
        });
    }

    bfsTraverse(startingVertex = this) {
        let queue = [];

        let visitedVertices = {};
        visitedVertices[startingVertex.value] = true;
        queue.push(startingVertex);

        while (queue.length > 0) {
            var currentVertex =  queue.shift();
            console.log(currentVertex.value);

            currentVertex.adjancenVertices.forEach(item => {
                if (!visitedVertices[item.value]) {
                    visitedVertices[item.value] = true;
                    queue.push(item);
                }
            });
        }
    }
}

// var alice = new Vertex('alice');
// var bob = new Vertex('bob');
// var cynthia = new Vertex('cynthia');

// alice.addAdjancentVertices(bob);
// alice.addAdjancentVertices(cynthia);

// bob.addAdjancentVertices(cynthia);

// cynthia.addAdjancentVertices(bob);

var bob = new Vertex('bob');
var alice = new Vertex('alice');
var cynthia = new Vertex('cynthia');

var jose = new Vertex('jose');
var luca = new Vertex('luca');
jose.addAdjancentVertices(luca)

bob.addAdjancentVertices(alice);
bob.addAdjancentVertices(cynthia);
bob.addAdjancentVertices(luca);

// console.log(bob)
// console.log(bob.adjancenVertices['alice'])

// bob.dfsTraverse()
bob.bfsTraverse();










