/**
 * 汉诺塔递归解法
 * @param {number} n 盘数
 * @param {string} A A柱名称
 * @param {string} B B柱名称
 * @param {string} C C柱名称
 */
function hanoi (n, A, B, C) {
    if (n === 1) {
        move(n, A, C);
        return;
    }
    hanoi(n - 1, A, C, B);
    move(n, A, C);
    hanoi(n - 1, B, A, C);
}

/**
 * 移动圆盘
 * @param {number} n 第几号圆盘
 * @param {string} N 起始柱子编号
 * @param {string} M 结束柱子编号
 */
function move (n, N, M) {
    console.log('把第' + n + '号圆盘从 ' + N + ' 柱移到 ' + M + ' 柱');
}
