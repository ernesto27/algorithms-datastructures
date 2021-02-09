class TreeNode:
    def __init__(self,val,left=None,rigth=None):
        self.value = val 
        self.leftChild = left
        self.rigthChild = rigth 

    def search(self,value, node):
        if node is None or node.value == value:
            return node 
        elif value < node.value:
            return self.search(value, node.leftChild)
        else:
            return self.search(value, node.rigthChild)
    
    def insert(self, value, node):
        if value < node.value:
            if node.leftChild is None:
                node.leftChild = TreeNode(value)
            else:
                self.insert(value, node.leftChild)
        elif value > node.value:
            if node.rigthChild is None:
                node.rigthChild = TreeNode(value)
            else:
                self.insert(value, node.rigthChild)


node = TreeNode(1) 
node2 = TreeNode(10)
root = TreeNode(5, node, node2)

# root.search(10, root)
root.insert(33, root)
# root.search(4)