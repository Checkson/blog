// 构造函数
function Link () {
    this.head = new Node('head');
}

// 链表结尾追加一个节点
Link.prototype.append = function (el) {
    var currNode = this.head;
    while (currNode.next != null) {
        currNode = currNode.next;
    }
    currNode.next = new Node(el);
}

// 按节点的值查找节点
Link.prototype.find = function (el) {
    var currNode = this.head;
    while (currNode && currNode.el != el) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入一个节点
Link.prototype.insert = function (newEl, oldEl) {
    var newNode = new Node(newEl);
    var findNode = this.find(oldEl);
    if (findNode) {
        newNode.next = findNode.next;
        findNode.next = newNode;
    } else {
        throw new Error('找不到给定插入的节点');
    }
}

// 展示链表中的元素
Link.prototype.display = function () {
    var currNode = this.head.next;
    while (currNode) {
        console.log(currNode.el);
        currNode = currNode.next;
    }
}

// 寻找给定节点的前一个节点
Link.prototype.findPrev = function (el) {
    var currNode = this.head;
    while (currNode.next && currNode.next.el !== el) {
        currNode = currNode.next;
    }
    return currNode;
}

// 删除给定的节点
Link.prototype.remove = function (el) {
    var prevNode = this.findPrev (el);
    if (prevNode.next != null) {
        prevNode.next = prevNode.next.next;
    } else {
        throw new Error('找不到要删除的节点');
    }
}
