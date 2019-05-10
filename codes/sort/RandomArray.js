/**
 * 随机生成指定长度的数值数组
 * @param {number} len 数组长度
 */
function RandomArray (len) {
    var res = [];
    for (var i = 0; i < len; i++) {
        res.push(parseFloat((Math.random() * len).toFixed(2)));
    }
    return res;
}
