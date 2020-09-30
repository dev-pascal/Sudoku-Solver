function Backtracking() {
  // Get board & time data.
  parseInput();
  arrayToMatrix(gContainer);
  let start = new Date().getTime();

  // Start algorithm.
  function solveBacktrack(input) {
    for (let cell_col = 0; cell_col < 9; cell_col++) {
      for (let cell_row = 0; cell_row < 9; cell_row++) {
        if (input[cell_col][cell_row] == '0') {
          for (let value = 1; value <= 9; value++) {
            if (checkVal(input, cell_col, cell_row, value)) {
              input[cell_col][cell_row] = `${value}`;
              if (solveBacktrack(input)) return true;
              else input[cell_col][cell_row] = '0';
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  solveBacktrack(matrix);

  // Check validity.
  function checkVal(matrix, row, column, value) {
    for (cell = 0; cell < 9; cell++) {
      const square_row = 3 * Math.floor(row / 3) + Math.floor(cell / 3);
      const square_col = 3 * Math.floor(column / 3) + cell % 3;
      if (matrix[row][cell] == value || matrix[cell][column] == value || matrix[square_row][square_col] == value) return false;
    }
    return true;
  }
  // Push solution to board.
  pushSolution(matrix);
  setTimeout(function () {
    let end = new Date().getTime();
    alert('Backtracking has solved the board in ' + `${end - start}` + ' milliseconds! ✔️');
    console.log('Backtracking has solved the board in ' + `${end - start}` + ' milliseconds! ✔️');
  }, 0);
}