// 二叉查找树构造函数
function BST () {
    this.root = null;
}

// 二叉查找树插入一个节点
BST.prototype.insert = function (data) {
    var node = new Node(data, null, null);
    if (!this.root) {
        this.root = node;
        return;
    }
    var current = this.root,
        parent;
    do {
        parent = current;
        if (data < current.data) {
            current = current.left;
            if (!current) {
                parent.left = node;
                break;
            }
        } else {
            current = current.right;
            if (!current) {
                parent.right = node;
                break;
            }
        }
    } while (true);
}

// 二叉查找树中序遍历
BST.prototype.inOrder = function (node) {
    if (node) {
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
}

// 二叉查找书先序遍历
BST.prototype.preOrder = function (node) {
    if (node) {
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}

// 二叉查找树后序遍历
BST.prototype.postOrder = function (node) {
    if (node) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }
}

// 查找二叉查找树中的最小值
BST.prototype.getMin = function () {
    if (!this.root) {
        return null;
    }
    var current = this.root;
    while (current.left) {
        current = current.left;
    }
    return current.data;
}

// 查找二叉查找树中最大值
BST.prototype.getMax = function () {
    if (!this.root) {
        return null;
    }
    var current = this.root;
    while (current.right) {
        current.right;
    }
    return current.data;
}

// 判断某个值是否在二叉查找树中
BST.prototype.contains = function (data) {
    var current = this.root;
    while (current) {
        if (current.data === data) {
            return true;
        } else if (current.data > data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return false;
}

// 删除二叉树上给定的节点
// pass