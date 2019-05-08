/**
 * 选择排序
 * @param {array}  arr 
 * @param {string} type  asc / desc
 */
function select (arr, type) {
    // 获取数组长度
    var len = arr.length;
    // 外循环遍历数组元素
    for (var i = 0; i < len - 1; i++) {
        // 临时最小值下标
        let idx = i;
        // 内循环比较数组大小
        for (var j = i + 1; j < len; j++) {
            if ((!type || type === 'asc') && arr[idx] > arr[j]) { // 顺序
                idx = j;
            } else if (type === 'desc' && arr[idx] < arr[j]) {    // 逆序
                idx = j
            }
        }
        // 如果下标有变
        if (idx !== i) {
            swap(arr, idx, i);      
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