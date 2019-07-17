/**
 * 判断坐标（row,col）是否安全
 * @param {array}  arr 
 * @param {number} row 
 * @param {number} col 
 */
function isSafe (arr, row, col) {
    for (var i = 0; i < row; i++) {
        if (col === arr[i] || Math.abs(arr[i] - col) === Math.abs(i - row)) {
            return false;
        }
    }
    return true;
}

/**
 * 寻找N皇后问题的解法数
 * @param {number} row 
 * @param {array}  arr 
 * @param {number} n 
 */
function NQueen (row, arr, n) {
    // 若所有行都被搜索完，则说明本次方案可靠！
    if (row === n) {
        return 1;
    }
    // 返回的结果
    var ans = 0;
    
    // 对于第row行，每一列都可能是皇后的摆放位置
    for (var col = 0; col < n; col++) {
        //如果该列满足条件，递归寻找下一行皇后可以摆放的位置
        if (isSafe(arr, row, col)) {
            arr[row] = col;
            ans += NQueen(row + 1, arr, n);
        }
    }

    return ans;
}
