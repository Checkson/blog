// 双链表构造函数
function DLink () {
    this.head = new DNode('head');
}

// 在链表结尾添加一个新的节点
DLink.prototype.append = function (el) {
    var currNode = this.head;
    while (currNode.next != null) {
        currNode = currNode.next;
    }
    var newNode = new Node(el);
    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;
}

// 根据节点的值查找链表节点
DLink.prototype.find = function (el) {
    var currNode = this.head;
    while (currNode && currNode.el != el) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入一个节点
DLink.prototype.insert = function (newEl, oldEl) {
    var newNode = new DNode(newEl);
    var currNode = this.find(oldEl);
    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;
}

// 顺序展示链表节点
DLink.prototype.display = function () {
    var currNode = this.head.next;
    while (currNode) {
        console.log(currNode.el);
        currNode = currNode.next;
    }
}

// 查找最后一个节点
DLink.prototype.findLast = function () {
    var currNode = this.head;
    while (currNode.next != null) {
        currNode = currNode.next;
    }
    return currNode;
}

// 逆序展示链表节点
DLink.prototype.dispReverse = function () {
    var currNode = this.head;
    currNode = this.findLast();
    while (currNode.prev != null) {
        console(currNode.el);
        currNode = currNode.prev;
    }
}

// 删除给定的节点
DLink.prototype.remove = function (el) {
    var currNode = this.find(el);
    if (currNode && currNode.next != null) {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        currNode.next = null;
        currNode.previous = null;
    } else {
        throw new Error('找不到要删除对应的节点');
    }
}