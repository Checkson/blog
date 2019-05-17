/**
 * 归并排序 - 递归实现
 * @param {array}  arr   待排序数组
 * @param {string} type  asc / desc
 */
function merge_recursive (arr, type) {
    // 记录数组长度
    let len = arr.length;
    // 归并排序
    merge_sort(arr, 0, len - 1, type);
}

/**
 * 归并排序
 * @param {array}  arr  数组
 * @param {number} low  最小下标
 * @param {number} high 最大下标
 * @param {string} type 排序类型
 */
function merge_sort(arr, low, high, type) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        merge_sort(arr, low, mid, type);
        merge_sort(arr, mid + 1, high, type);
        merge(arr, low, mid, high, type);
    }
}

/**
 * 按大小顺序合并数组
 * @param {array}  arr  数组
 * @param {number} low  最小下标
 * @param {number} mid  中间下标
 * @param {number} high 最大下标
 * @param {string} type 排序类型
 */
function merge (arr, low, mid, high, type) {
    let left = low,
        right = mid + 1,
        t = 0;
    let tempArr = [];
    while (left <= mid && right <= high) {
        if (!type || type === 'asc') { //  顺序排序
            if (arr[left] < arr[right]) {
                tempArr[t++] = arr[left++];
            } else {
                tempArr[t++] = arr[right++];
            }
        } else if (type === 'desc') {  // 逆序排序
            if (arr[left] > arr[right]) {
                tempArr[t++] = arr[left++];
            } else {
                tempArr[t++] = arr[right++];
            }
        }
        
    }
    while (left <= mid) {
        tempArr[t++] = arr[left++];
    }
    while (right <= high) {
        tempArr[t++] = arr[right++];
    }
    while (t > 0) {
        arr[high--] = tempArr[--t];
    }
}