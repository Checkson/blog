// 列表构造函数
function List () {
    var args = [].slice.call(arguments);
    this.size = args.length;
    this.pos = -1;
    this.dataList = args;
}

// 给列表添加元素
List.prototype.append = function (el) {
    this.dataList[this.size++] = el;
}

// 查找列表中的元素下标位置
List.prototype.find = function (el) {
    for (var i = 0, len = this.dataList.length; i < len; i++) {
        if (this.dataList[i] === el) {
            return i;
        }
    }
    return -1;
}

// 从列表中删除元素
List.prototype.remove = function (el) {
    var findIdx = this.find(el);
    if (findIdx > -1) {
        this.dataList.splice(findIdx, 1);
        this.size--;
        return true;
    }
    return false;
}

// 返回列表中又多少哥元素
List.prototype.length = function () {
    return this.size;
}

// 以字符串的形式显示列表中的元素
List.prototype.toString = function () {
    return this.dataList.join();
}

// 向列表中插入一个元素
List.prototype.insert = function (el, pos) {
    if (pos > -1 && pos < this.size) {
        this.dataList.splice(pos, 0, el);
        this.size++;
        return true;
    }
    return false;
}

// 清空列表中所有的元素
List.prototype.clear = function () {
    delete this.dataList;
    this.dataList = [];
    this.size = 0;
    this.pos = -1;
}

// 判断给定的值是否在列表中
List.prototype.contains = function (el) {
    for (var i = 0, len = this.dataList.length; i < len; i++) {
        if (this.dataList[i] === el) {
            return true;
        }
    }
    return false;
}

// 遍历列表的相关方法
List.prototype.front = function () {
    this.pos = 0;
}

List.prototype.end = function () {
    this.pos = this.size -1;
}

List.prototype.prev = function () {
    if (this.pos > -1) {
        this.pos--;
    }
}

List.prototype.next = function () {
    if (this.pos < this.size) {
        this.pos++;
    }
}

List.prototype.currPos = function () {
    return this.pos;
}

List.prototype.moveTo= function (pos) {
    this.pos = pos;
}

List.prototype.getElement = function () {
    if (this.pos > -1 && this.pos < this.size) {
        return this.dataList[this.pos];
    } else {
        console.warning('当前列表位置越界，请调整指针');
        return null;
    }
}
