# Depth First Search for Graphs

In graphs, you will want to know if there is a path from one node to the other. Depth First Search is one of the traversal methods you can apply to achieve that. 

Depth First Search in graphs is almost similar to DFS in tress. The only catch here is, unlike trees, **graphs can have cycles**. Thus, a node maybe visited twice. To avoid processing a node more than once, **use a boolean array visited**.


### High Level Implementation

1. Depth First Search is a recursive method which takes in a start node initially and a visited array as arguments. 
2. Add initial or start node to visited nodes array.
3. Get all the adjacent unvisited nodes, continue this loop until there is no unvisited nodes.
4. Backtrack and check for other unvisited nodes and traverse them.
5. Finally print the nodes to the path.