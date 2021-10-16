class Graph {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices;
    this.adjacentList = new Map();
  }

  addVertex(vertex = null) {
    this.adjacentList.set(vertex, []);
  }

  addEdge(src = null, destination = null) {
    this.adjacentList.get(src).push(destination);
    this.adjacentList.get(destination).push(src);
  }

  printGraph() {
    const getKeys = this.adjacentList.keys();

    for (let key of getKeys) {
      let getValues = this.adjacentList.get(key);

      let str = "";

      for (let value of getValues) {
        str += value + ' '; 
      }

      console.log(key + "->" + str);
    }
  }

  bfs(startNode) {
    let queue = [startNode];
    let visited = new Set();

    while (queue.length > 0) {
      let vertex = queue.shift();
      let edges = this.adjacentList.get(vertex);

      for (const edge of edges) {
        if (!visited.has(edge)) {
          visited.add(edge);
          queue.push(edge);
        }
      }
    }

  }

  dfs(startNode, visited = new Set()) {

    visited.add(startNode)
    let edges = this.adjacentList.get(startNode);

    for (let edge of edges) {
      if (!visited.has(edge)) {
        this.dfs(edge, visited);
      }
    }
  }
}

let g = new Graph(6);
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let vertex of vertices) {
  g.addVertex(vertex);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph()
