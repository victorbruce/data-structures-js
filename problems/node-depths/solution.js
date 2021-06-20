// solution 3: Recursive Approach
function nodeDepths(root) {
  if (!root) return 0

  return 1 + Math.max(nodeDepths(root.left), maxDepths(root.right))
}

// solution 2: DFS Approach
function nodeDepths(root) {
  if (!root) return 0;

  let sumOfDepths = 0;
  const stack = [{"node": root, "depth": 0}]

  while (stack.length > 0) {
    let nodeInfo = stack.pop();
    let node, depth = nodeInfo["node"], nodeInfo["depth"]

    if (!node) {
      continue;
      sumOfDepths += depth
      stack.push({"node": node.left, "depth": depth + 1})
      stack.push({"node": node.right, "depth": depth + 1})
    }
  }
}

// solution 1: BFS Approach
function nodeDepths(root) {
  if (!root) return 0;

  let queue = [];
  queue.push(root);
  let sumOfDepths = 0;

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      let currentNode = queue.shift();

      if (currentNode.left !== null) { queue.push(currentNode.left) }
      if (currentNode.right !== null) { queue.push(currentNode.right)}

      size--;
    }
    sumOfDepths++;
  } 

  return sumOfDepths;
}