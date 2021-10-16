class Graph {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices;
    this.adjacentList = new Map();
  }

  addVertex(vertex=null) {
    this.adjacentList.set(vertex, []);
  }

  addEdge(src=null, destination=null) {
    this.adjacentList.get(src).push(destination);
    this.adjacentList.get(destination).push(src);
  }

  dfs(startNode, visited=new Set()) {
    visited.add(startNode);
    let edges = this.adjacentList.get(startNode);

    for (let edge of edges) {
      if (!visited.has(edge)) {
        this.dfs(edge, visited);
      }
    }
  }
}