# Breadth First Search For Graphs

Breadth first search for Graphs is similar to Breadth First Search for Trees. The catch here is that Graphs can have cycles. Hence to avoid visiting a node more than once we **we use a booldean visited array**

Breadth first search traverses through a graph **level-by-level**. We first of all visit neighbours(go broad) before going deep.

### High Level Implementation

- Breadth First Search is implemented using a **Queue** in an iterative manner. 
- Have a red flag or someway of preventing infinite loops (**visited array**)
- We go ahead to store the start node or vertex to the queue.
- We then retrieve the first element in the queue.
- Then check if it has paths. If yes, add it to the end of the queue.


