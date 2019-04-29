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

// 查找二叉查找树中给定的值
BST.prototype.find = function (data) {
    var current = this.root;
    while (current) {
        if (current.data === data) {
            return current;
        } else if (current.data > data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}

// 删除二叉树上给定的节点
BST.prototype.remove = function (data) {
    this.removeNode(this.root, data);
}

BST.prototype.removeNode = function (node, data) {
    if (!node) {
        return null;
    }
    if (data === node.data) {
        if (!node.left && !node.right) {
            return null;
        } else if (!node.left) {
            return node.right;
        } else if (!node.right) {
            return node.left;
        } else {
            var tempNode = this.getSmallestNode(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
        }
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
    } else {
        node.right = this.removeNode(node.right, data);
    }
    return node;
}

// 获取最小值的节点
BST.prototype.getSmallestNode = function (node) {
    if (!node) {
        return null;
    }
    while (node.left) {
        node = node.left;
    }
    return node;
}