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
