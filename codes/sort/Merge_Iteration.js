/**
 * 归并排序 - 迭代实现
 * @param {array}  arr   待排序数组
 * @param {string} type  asc / desc
 */
function merge_iteration (arr, type) {
    // 记录数组长度
    var len = arr.length;
    // 若数组为空或者只有一个元素
    if (len < 2) {
        return;
    }
    // 归并跨度
    var span = 2;
    // 归并
    while (span < len) {
        // 遍历数组
        var i = 0;
        while (i + span <= len) {
            var mid = i + Math.floor(span / 2) - 1;
            merge(arr, i, mid, i + span - 1, type)
            i += span;
        }
        // 遗漏修正
        if (i < len) {
            var temp = i + Math.floor(span / 2) - 1,
                mid = Math.min(temp, len - 1);
            merge(arr, i, mid, len - 1, type);
        }
        // 归并跨度翻倍
        span *= 2;
    }
    // 顶层修正
    merge(arr, 0, span / 2 - 1, len - 1, type);
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
    var left = low,
        right = mid + 1,
        t = 0;
    var tempArr = [];
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


var arr = [3, 1, 4];

merge_iteration(arr);

console.log(arr);