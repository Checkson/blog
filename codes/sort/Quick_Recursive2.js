/**
 * 快速排序 - 递归实现2
 * @param {array}  arr   待排序数组
 * @param {string} type  asc / desc
 */
function quick_recursive2 (arr, type) {
    // 记录数组长度
    var len = arr.length;
    // 快速排序
    quick_sort (arr, 0, len - 1, type);
}

/**
 * 快速排序
 * @param {array}  arr  待排序数组
 * @param {number} low  排序最小下标
 * @param {number} high 排序最大下标
 * @param {string} type 排序类型
 */
function quick_sort (arr, low, high, type) {
    if (low < high) {
        var idx = partition(arr, low, high, type);
        quick_sort(arr, low, idx - 1, type);
        quick_sort(arr, idx + 1, high, type);
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
