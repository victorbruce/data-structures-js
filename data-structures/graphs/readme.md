# Graphs

Graph is a collection of things and the relationships between them.

**Key Terms:**

- vertices/node: data within the graph
- edges: the connection between the vertices or nodes

### Types of Graphs

1. Directed Graph: contains edges which function similarly to a one-way street; they have direction. Example: Web links, internet, people can have favourite movies but movies don't have favourite people.

2. Undirected Graph: contains edges which flow bi-directional, like a two-way street. For example you can have a graph of pets where people have pets and pets have owners. The relationship goes both ways.

### Graph Representation
1. Adjacency List: this representation of graph associates each vertex or node in the graph with the collection of its' neighbouring vertices or nodes and edges.

Example:

[a]-->[b]-->[c]

Showing adjacency list relationship with text:

NodeA: NodeB
NodeB: NodeA, NodeC
NodeC: NodeB

Showing adjacency list relationship with javacript:

```javascript
// an associative array
let undirectedArray = [
  'NodeA': ['NodeB'],
  'NodeB': ['NodeA', 'NodeB'],
  'NodeC': ['NodeB']
]

// another example

let undirectedArray = [
  ['a'], // NodeA
  ['a','c'], // NodeB
  ['b'], //NodeC
]
```

### Adjacency List (Pros):

1. Space efficient for representing sparse graphs
2. Iterating over all edges is efficient

### Adjacency List (Cons):

1. Less space efficient for representing dense graphs
2. Edge weight lookup is O(E) where E is the number of edges
3. Slightly a more complex graph representation


2. Adjency Matrix: uses both rows and columns to represent nodes. 

### Adjency Matrix (Pros):

1. Space efficient for representing dense graph.
2. Edge weight lookup is O(1)


### Adjency Matrix (cons):

1. Requires O(V^2) space where V is the number of vertices in a graph.
2. Iterating over all edges takes O(V^2) time.

**Note:** Only consider adjacency matrix when dealing with dense graph and not sparse graph.

**Note** An alternative is using an **Adjacency List** which is a way of representing graph as a map from nodes to lists of edges. 


3. Incidence Matrix: A 2D array but the rows and columns means something different. The adjancency matrix uses both rows and columns to represent nodes. Incidence uses rows to represent nodes and columns to represent edges. Which means that we can have an uneven number of rows and columns.

### Weighted Graphs
Many graphs can have edges that contain weight to represent an arbituary value such as **cost**, **distance**, **quantity**, etc.


### Common Graph Theory Problems:

Ask Yourself:
1. Is the graph directed or undirected.
2. Are the edges of the graph weighted?
3. Is the graph sparse or dense with edges
4. Shoud I use an adjacency matrix or list or edge list or other structure to represent the graph efficiently.

### Problems you can solve with Graphs:

- Shortest Path
  - Solutions: BFS(unweighted graph), Dijkstra's, Bellman-Ford, and many more.

- Connectivity: does there a exist a path between NodeA and NodeB?
  - solutions: Any search algorithm(DFS)

- Negative Cycles: does my weighted graph have any cycles? If so where?
` - solutions: Bellman-Ford and Floyd-Warshall

- Strongly Connected Components
- Bridges
- Articulation point
- Spanning tree