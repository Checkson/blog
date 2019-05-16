/**
 * 快速排序 - 迭代实现
 * @param {array}  arr   待排序数组
 * @param {string} type  asc / desc
 */
function quick_iteration (arr, type) {
    // 记录数组长度
    var len = arr.length;
    // 栈、栈顶指针
    var st = [], top = -1;
    // 入栈
    st[++top] = {
        low: 0,
        high: len
    };
    // 遍历
    while (top > -1) {
        // 取栈栈顶元素
        var el = st[top--];
        if (el.low < el.high) {
            var idx = partition(arr, el.low, el.high, type);
            st[++top] = { low: el.low, high: idx - 1 };
            st[++top] = { low: idx + 1, high: el.high };
        }
    }
}

/**
 * 将pivot放在适合的位置
 * @param {array}  arr  待排序数组
 * @param {number} low  排序最小下标
 * @param {number} high 排序最大下标
 * @param {string} type 排序类型
 */
function partition (arr, low, high, type) {
    var pivot = arr[low],
        tmpIdx = low;
    for (var i = low + 1; i <= high; i++) {
        if ((!type || type === 'asc') && arr[i] < pivot) { // 顺序排序
            tmpIdx++;
            swap(arr, tmpIdx, i);
        } else if (type === 'desc' && arr[i] > pivot) {    // 逆序排序
            tmpIdx++;
            swap(arr, tmpIdx, i);
        } 
    }
    swap(arr, low, tmpIdx);
    return tmpIdx;
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
