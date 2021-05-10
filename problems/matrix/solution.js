// PROBLEM
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.

function spiralMatrix(n) {
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  while (startRow <= endRow && startColumn <= endColumn) {
    // Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right Column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Start Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++
    }
    startColumn++;
 
  }

  console.log(results);
}

spiralMatrix(3);
