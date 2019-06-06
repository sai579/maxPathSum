class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertNode(nodeArr, root, i) {

        if (i < nodeArr.length) {
            const newNode = new Node(nodeArr[i]);
            root = newNode;

            root.left = this.insertNode(nodeArr, root.left, 2 * i + 1);

            root.right = this.insertNode(nodeArr, root.right, 2 * i + 2);
        }
        return root;
    }

    maxPathSum(tree) {
        // base case: tree is empty
        if (tree === null || tree === undefined) {
            return 0;
        }
        if (tree.left === null && tree.right === null) {
            return tree.value;
        }

        let left = this.maxPathSum(tree.left);
        let right = this.maxPathSum(tree.right);

        return parseInt(Math.max(left, right)) + parseInt(tree.value);
    }

}


module.exports = BinaryTree;