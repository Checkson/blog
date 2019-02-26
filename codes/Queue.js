// 队列构造函数
function Queue () {
    var args = [].slice.call(arguments);
    this.dataList = args;
}

// 入队
Queue.prototype.enqueue = function (el) {
    this.dataList.push(el);
}

// 出队
Queue.prototype.dequeue = function () {
    return this.dataList.shift();
}

// 获取队头元素
Queue.prototype.peek = function () {
    return this.dataList[0];
}

// 获取队列元素个数
Queue.prototype.length = function () {
    return this.dataList.length;
}

// 清除队列种所有元素
Queue.prototype.clear = function () {
    delete this.dataList;
    this.dataList = [];
}

// 将队列转换为字符串
Queue.prototype.toString = function () {
    return this.dataList.join();
}
