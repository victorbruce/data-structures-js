class Graph {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices;
    this.adjacentList = new Map();
  }

  addVertex(vertex=null) {
    this.adjacentList.set(vertex, []); // adjacentList = {vertex: []}
  }

  addEdge(src=null, destination=null) {
    this.adjacentList.get(src).push(destination);
    this.adjacentList.get(destination).puhs(src);
  }

  bfs(startNode) {
    let queue = [startNode];
    let visited = new Set();

    while(queue.length > 0) {
      let vertex = queue.shift();
      // get all the nodes or vertices connected to this vertex
      let edges = this.adjacentList.get(vertex);

      for (let edge of edges) {
        // check if the current vertex can be found in the visited array.
        if (!visited.has(edge)) {
          visited.add(edge);
          // push vertex into the queue
          queue.push(edge);
        }
      }
    }
  }
}