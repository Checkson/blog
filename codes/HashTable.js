// 哈希表类
function HashTable () {
    this.table = new Array(137);
}

// 简单哈希函数
HashTable.prototype.simpleHash = function (data) {
    var total = 0;
    for (var i = 0, len = data.length; i < len; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

// 更好哈希函数
HashTable.prototype.betterHash = function (data) {
    const H = 37;
    var total = 0;
    for (var i = 0, len = data.length; i < len; i++) {
        total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    return parseInt(total);
}

// 向哈希表中添加新的元素
HashTable.prototype.put = function (key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
}

// 根据传入的key值来获取哈希表中相应的值
HashTable.prototype.get = function (key) {
    return this.table[this.betterHash(key)];
}

// 显示散列表中的元素
HashTable.prototype.showDistro = function () {
    for (var i = 0, len = this.table.length; i < len; i++) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}
