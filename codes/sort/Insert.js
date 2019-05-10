/**
 * 插入排序
 * @param {array}  arr   待排序数组
 * @param {string} type  asc / desc
 */
function insert (arr, type) {
    // 记录数组长度
    var len = arr.length;
    // 外循环记录已排序最后下标
    for (var i = 1; i < len; i++) {
        // 临时变量
        var temp = arr[i];
        // 内循环进行数组元素比较
        for (var j = i; j > 0; j--) {
            if ((!type || type === 'asc') && arr[j - 1] > temp) { // 顺序排序
                // 往后挪一位
                arr[j] = arr[j - 1];
                continue;
            } else if (type === 'desc' && arr[j - 1] < temp) {    // 逆序排序
                // 往后挪一位
                arr[j] = arr[j - 1];
                continue;
            }
            break;
        }
        // 放入合适的位置
        arr[j] = temp;
    }
}