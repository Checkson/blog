// 图构造函数
function Graph (v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.init();
}

// 数据初始化
Graph.prototype.init  = function () {
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
    }
}

// 添加边
Graph.prototype.addEdge = function (v1, v2) {
    !this.isExist(v1, v2) && this.adj[v1].push(v2);
    !this.isExist(v2, v1) && this.adj[v2].push(v1);
    this.edges++;
}

// 判重
Graph.prototype.isExist = function (v1, v2) {
    if (this.adj[v1].indexOf(v2) > -1) {
        return true;
    }
    return false;
}

// 输出图信息
Graph.prototype.showGraph = function () {
    for (var i = 0; i < this.vertices; ++i) {
        var logMsg = i + ' -->';
        for (var j = 0; j < this.vertices; j++ ) {
            if (this.adj[i][j] != undefined) { 
                logMsg += ' ' + this.adj[i][j]
            }
        }
        console.log(logMsg);
    }
}

// 深度优先搜索
Graph.prototype.dfs = function (v) {
    var st = [], top = -1;
    var visited = [];
    st[++top] = v;
    visited[v] = true;
    while (top !== -1) {
        var vertex = st[top--];
        console.log('Visited --> ' + vertex);
        for (var i = this.adj[vertex].length - 1; i >= 0; i--) {
            if (!visited[this.adj[vertex][i]]) {
                st[++top] = this.adj[vertex][i];
                visited[this.adj[vertex][i]] = true;
            }
        }
    }
}

// 广度优先搜索
Graph.prototype.bfs = function (v) {
    var rear = -1, front = -1;
    var queue = [], visited = [];
    queue[++rear] = v;
    visited[v] = true;
    while (rear != front) {
        var vertex = queue[++front];
        console.log('Visited --> ' + vertex);
        for (var i = 0; i < this.adj[vertex].length; i++) {
            var tempVertex = this.adj[vertex][i];
            if (!visited[tempVertex]) {
                queue[++rear] = tempVertex;
                visited[tempVertex] = true;
            }
        }
    }
}
