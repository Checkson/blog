// 循环链表构造函数
function CLink () {
    this.head = new Node('head');
    this.head.next = this.head;
}

// 向循环链表结尾新增一个节点
CLink.prototype.append = function (el) {
    var currNode = this.head;
    while (currNode.next != null && currNode.next != this.head) {
        currNode = currNode.next;
    }
    var newNode = new Node(el);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

// 根据节点的值查找链表节点
CLink.prototype.find = function (el) {
    var currNode = this.head;
    while (currNode && currNode.el != el && currNode.next != this.head) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入一个节点
CLink.prototype.insert = function (newEl, oldEl) {
    var newNode = new Node(newEl);
    var currNode = this.find(oldEl);
    if (currNode) {
        newNode.next = currNode.next;
        currNode.next = newNode;
    } else {
        throw new Error('未找到指定要插入节点位置对应的值！');
    }
}

// 展示链表元素节点
CLink.prototype.display = function () {
    var currNode = this.head.next;
    while (currNode && currNode != this.head) {
        console.log(currNode.el);
        currNode = currNode.next;
    }
}

// 寻找前一个节点
CLink.prototype.findPrev = function (el) {
    var currNode = this.head;
    while (currNode.next && currNode.next.el !== el) {
        currNode = currNode.next;
    }
    return currNode;
}

// 删除给定的节点
CLink.prototype.remove = function (el) {
    var prevNode = this.findPrev(el);
    if (prevNode.next != null) {
        prevNode.next = prevNode.next.next;
    } else {
        throw new Error('找不到要删除的节点');
    }
}
