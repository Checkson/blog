/**
 * 快速排序
 * @param {array}  arr   待排序数组
 * @param {string} type  asc / desc
 */
function quick (arr, type) {
    // 记录数组长度
    var len = arr.length;
    // 若果数组长度为空
    if (len === 0) {
        return [];
    }
    var left = [],
        right = [];
    var pivot = arr[0];
    for (var i = 0; i < len; i++) {
        if (arr[i] < pivot) {
            if (!type || type === 'asc') { // 顺序排序
                left.push(arr[i]);
            } else if (type === 'desc') {
                right.push(arr[i]);        // 逆序排序
            }
        } else if (arr[i] > pivot) {
            if (!type || type === 'asc') { // 顺序排序
                right.push(arr[i]);
            } else if (type === 'desc') {
                left.push(arr[i]);        // 逆序排序
            }
        }
    }
    return quick(left, type).concat(pivot, quick(right, type));
}