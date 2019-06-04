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
    this.adj[v1].push(v2);
    this.adj[v2].push(v1);
    this.edges++;
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
