/**
 * 希尔排序
 * @param {array}  arr   待排序数组
 * @param {string} type  asc / desc
 */
function shell (arr, type) {
    // 声明间隔
    var gaps = [5, 3, 1];
    // 记录数组长度
    var len = arr.length;
    // 最外层循环遍历间隔数组
    for (var i = 0, len0 = gaps.length; i < len0; i++) {
        // 临时变量
        var gap = gaps[i];
        // 第二层循环按间隔遍历数组
        for (var j = gap; j < len; j++) {
            // 临时变量
            var temp = arr[j];
            // 第三层循环比较数组元素大小
            for (var k = j; k >= gap; k -= gap) {
                if ((!type || type === 'asc') && arr[k - gap] > temp) { // 顺序排序
                    // 往后挪gap位
                    arr[k] = arr[k - gap];
                    continue;
                } else if (type === 'desc' && arr[k - gap] < temp) {    // 逆序排序
                    // 往后挪gap位
                    arr[k] = arr[k - gap];
                    continue;
                }
                break;
            }
            arr[k] = temp;
        }
    }
}