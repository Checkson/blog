// 构造函数
function Set (arr) {
    if (arr && !Array.isArray(arr)) {
        throw new Error('传入的参数是非数组类型！');
    }
    this.dataStore = [];
    if (arr && arr.length) {
        var _this = this;
        arr.forEach(function (item) {
            _this.dataStore.push(item);
        });
    }
}

// 向集合中添加元素
Set.prototype.add = function (data) {
    if (!this.has(data)) {
        this.dataStore.push(data);
        return true;
    }
    return false;    
}

// 判断集合中是否存在某个元素
Set.prototype.has = function (data) {
    return this.dataStore.indexOf(data) > -1;
}

// 删除集合中的元素
Set.prototype.remove = function (data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    return false;
}

// 消除集合中的所有成员
Set.prototype.clear = function () {
    delete this.dataStore;
    this.dataStore = [];
}

// 获取集合元素个数
Set.prototype.size = function () {
    return this.dataStore.length;
}

// 返回集合中的元素
Set.prototype.show = function () {
    return this.dataStore;
}

// 求集合的并集
Set.prototype.union = function (set) {
    var tempSet = new Set();
    this.dataStore.forEach(function (item) {
        tempSet.add(item);
    });
    set.show().forEach(function (item) {
        if (!tempSet.has(item)) {
            tempSet.add(item);
        }
    });
    // 返回集合并集
    return tempSet;
}

// 求集合的交集
Set.prototype.intersect = function (set) {
    var tempSet = new Set();
    this.dataStore.forEach(function (item) {
        if (set.has(item)) {
            tempSet.add(item);
        }
    });
    return tempSet;
}

// 判断一个集合是否是另一个集合的子集
Set.prototype.subSet = function (set) {
    if (this.size() > set.size()) {
        return false;
    } 
    this.dataStore.forEach(function (item) {
        if (!set.has(item)) {
            return false;
        }
    });
    return true;
}
