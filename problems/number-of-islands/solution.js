var numIslands = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  if (rows === 0) return 0;

  let numberOfIslands = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        markCurrentIsland(grid, r, c, rows, cols);
        numberOfIslands++;
      }
    }
  }

  return numberOfIslands;
};

function markCurrentIsland(grid, row, col, rows, cols) {
  if (col < 0 || row < 0 || col >= cols || row >= rows || grid[row][col] !== 1) {
    return;
  }

  // mark current cell as visited
  grid[row][col] = 2;

  // make recursive call in all four adjacent directions
  markCurrentIsland(grid, row - 1, col, rows, cols) // Up
  markCurrentIsland(grid, row + 1, col, rows, cols) // Down
  markCurrentIsland(grid, row, col - 1, rows, cols) // Left
  markCurrentIsland(grid, row, col + 1, rows, cols) // Right
}

console.log(
  numIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ])
);
