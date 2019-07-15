/**
 * 排列组合递归实现
 * @param {array}  arr    待排列数组
 * @param {number} start  开始坐标
 * @param {number} end    结束坐标
 */
function permute (arr, start, end) {
    if (start === end) {
        echo(arr);
        return;
    }
    for (var i = start; i <= end; i++) {
        swap(arr, start, i);
        permute(arr, start + 1, end);
        swap(arr, start, i);
    }
}

/**
 * 输出数组排列结果
 * @param {array} arr 
 */
function echo (arr) {
    console.log(arr.join(''));
}

/**
 * 交换数组中指定坐标的两个元素的值
 * @param {*} arr 待交换值的数组
 * @param {*} i   下标i
 * @param {*} j   下标j
 */
function swap (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}