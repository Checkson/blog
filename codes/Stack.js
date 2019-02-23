// 构造函数
function Stack () {
    this.dataList = [];
    this.top = -1;
}

// 入栈操作
Stack.prototype.push = function (el) {
    this.dataList[++this.top] = el;
}

// 出栈操作
Stack.prototype.pop = function () {
    return this.dataList[this.top--];
}

// 获取栈顶元素
Stack.prototype.peek = function () {
    return this.dataList[this.top];
}

// 去除栈中所有元素
Stack.prototype.clear = function () {
    delete this.dataList;
    this.dataList = [];
    this.top = -1;
}

// 获取栈中元素个数
Stack.prototype.length = function () {
    return this.top + 1;
}