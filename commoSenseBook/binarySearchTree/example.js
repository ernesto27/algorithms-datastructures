class TreeNode {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.leftChild = left;
        this.rightChild = right;
    }

    search(searchValue, node) {
        if (!node || node.value === searchValue) {
            return node;
        } else if (searchValue < node.value) {
            return this.search(searchValue, node.leftChild);
        } else {
            return this.search(searchValue, node.rightChild);
        }
    }

    insert(value, node) {
        if ( value < node.value) {
            if (!node.leftChild) {
                node.leftChild = new TreeNode(value);
            } else {
                this.insert(value, node.leftChild);      
            }
        } else if (value > node.value) {
            if (!node.rightChild) {
                node.rightChild = new TreeNode(value);
            } else {
                this.insert(value, node.rightChild);
            }
        }
    }
}

var node1 = new TreeNode(22);
var node2 = new TreeNode(75);
var root = new TreeNode(50, node1, node2);
console.log(root)
// console.log(root.search(753, root))
root.insert(15,root);
console.log(root)