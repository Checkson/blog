/**
 * 冒泡排序
 * @param {array}  arr   待排序数组
 * @param {string} type  排序类型：asc / desc
 */
function bubble (arr, type) {
    // 记录数组长度
    var len = arr.length;
    // 标识是否有交换
    var hasExchange = false;
    // 外层循环遍历数组每一个元素
    for (var i = 0; i < len - 1; i++) {
        // 重置
        hasExchange = false;
        // 内层循环用于比较元素
        for (var j = 0; j < len - i - 1; j++) {
            if ((!type || type === 'asc') && arr[j] > arr[j + 1]) { // 顺序排序
                hasExchange = true;
                swap(arr, j, j+1);
            } else if (type === 'desc' && arr[j] < arr[j + 1]) {    // 逆序排序
                hasExchange = true;
                swap(arr, j, j+1);
            }
        }
        // 如果没有任何交换，直接跳出循环
        if (!hasExchange) {
            break;
        }
    }
}

/**
 * 交换数组里面的两个元素
 * @param {array} arr 待交换元素的数组
 * @param {number} i  待交换元素下标1
 * @param {number} j  待交换元素下标2
 */
function swap (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}