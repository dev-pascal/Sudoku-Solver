class Entries {
  constructor(row, col, choices) {
    this.row = row;
    this.col = col;
    this.choices = choices;
  }
  setData(row, col, choices) {
    this.row = row;
    this.col = col;
    this.choices = choices;
  }
}

function BestFirstSearch() {
  // Get board & time data.
  setEnable = true;
  parseInput();
  arrayToMatrix(gContainer);
  let start = new Date().getTime();
  findBestFirst(matrix);

  // Run the algorithm.
  function findBestFirst(matrix) {
    // Search best entry.
    let bestChoice = new Entries(-1, -1, 100);
    for (i = 0; i < 9; i++) {
      for (j = 0; j < 9; j++) {
        if (matrix[i][j] === 0) {
          let numChoices = countChoi(matrix, i, j);
          if (bestChoice.choices > numChoices) bestChoice.setData(i, j, numChoices);
        }
      }
    }

    // Enable algorithm on / off.
    if (bestChoice.choices === 100) {
      setEnable = false; return;
    }
    // Define row and column.
    let row = bestChoice.row;
    let col = bestChoice.col;

    // Define row and column.
    for (let j = 1; j <= 9; j++) {
      if (!setEnable) return;
      matrix[row][col] = j;
      if (checkVal(matrix, row, col)) findBestFirst(matrix);
    }
    if (!setEnable)
      return;
    matrix[row][col] = 0;
  }

  // Counting possibilities for an entry.
  function countChoi(matrix, i, j) {
    let possibilities = Array(10).fill(true);

    // Check row and column.
    for (let k = 0; k < 9; k++) possibilities[matrix[i][k]] = false;
    for (let k = 0; k < 9; k++) possibilities[matrix[k][j]] = false;

    // Check a square.
    let r = Math.floor(i / 3);
    let c = Math.floor(j / 3);
    for (let row = r * 3; row < r * 3 + 3; row++) {
      for (let col = c * 3; col < c * 3 + 3; col++) possibilities[matrix[row][col]] = false;
    }

    // Create Counter.
    let count = 0;
    for (let k = 1; k <= 9; k++) {
      if (possibilities[k]) count++;
    }
    return count;
  }

  // Check found values.
  function checkVal(matrix, row, col) {
    // Check row.
    for (let c = 0; c < 9; c++) {
      if (matrix[row][col] !== 0 && col !== c && matrix[row][col] === matrix[row][c]) return false;
    }

    // Check column.
    for (let r = 0; r < 9; r++) {
      if (matrix[row][col] !== 0 && row !== r && matrix[row][col] === matrix[r][col]) return false;
    }

    // Check square.
    let r = Math.floor(row / 3);
    let c = Math.floor(col / 3);
    for (let i = r * 3; i < r * 3 + 3; i++) {
      for (let j = c * 3; j < c * 3 + 3; j++) {
        if ((row !== i || col !== j) && matrix[i][j] !== 0 && matrix[i][j] === matrix[row][col]) return false;
      }
    }
    return true;
  }
  // Push solution to board.
  pushSolution(matrix);
  setTimeout(function () {
    let end = new Date().getTime();
    alert('Best First Search has solved the board in ' + `${end - start}` + ' milliseconds! ✔️');
    console.log('Best First Search has solved the board in ' + `${end - start}` + ' milliseconds! ✔️');
  }, 0);
}
