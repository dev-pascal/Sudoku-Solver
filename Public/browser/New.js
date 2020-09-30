const start = document.getElementById('start')

// Ask user to confirm new board.
function userConfirmBoard() {
  if (confirm('Do you really want to start a new board? 🈸')) createBoard();
  else console.log('User aborted a new game.');
}

// Generate the new game board.
function createBoard() {
  // Start new games with clean variables.
  gContainer.splice(0, gContainer.length);
  gUserInput.splice(0, gUserInput.length);
  matrix.splice(0, matrix.length);

  // Create a random board.
  let board = [
    [2, 8, 6, 7, 5, 4, 9, 3, 1],
    [9, 3, 1, 2, 8, 6, 7, 5, 4],
    [7, 5, 4, 9, 1, 3, 8, 6, 2],
    [8, 9, 2, 6, 7, 5, 4, 1, 3],
    [6, 7, 5, 4, 3, 1, 2, 9, 8],
    [4, 1, 3, 8, 9, 2, 6, 7, 5],
    [5, 6, 9, 3, 4, 8, 1, 2, 7],
    [3, 4, 7, 1, 2, 9, 5, 8, 6],
    [1, 2, 8, 5, 6, 7, 3, 4, 9]
  ];
  // Create random numbers.
  let random10 = Math.floor((Math.random() * 10) + 1);
  for (r = 0; r < random10; r++) {
    for (i = 0; i < 9; i++) {
      for (j = 0; j < 9; j++) {
        board[i][j] = board[i][j] + 1;
        if (board[i][j] == 10) board[i][j] = 1;
      }
    }
  }
  // Select game difficulties.
  let min = numDifficulty - 1;
  let max = min + 2;
  // Generate row numbers.
  board.forEach((row) => {
    let toReplace = twistArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    for (i = 0; i < Math.floor(Math.random() * (max - min + 1) + min); i++) row[toReplace[i]] = '';
  });
  valuesToBoard(board);
}

function valuesToBoard(boardToRender) {
  // Create temp variables.
  const board = boardToRender;
  const temp_container = [];

  // Calculate numbers and empty cells.
  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (Math.round(Math.random()) === 1) temp_container.push(board[i][j])
      else temp_container.push(0);
    };
  }

  // Push values back to DOM.
  for (k = 0; k < 81; k++) {
    if (temp_container[k] > 0) {
      curInputs[k].innerText = temp_container[k];
      curInputs[k].style.textAlign = 'center';
      curInputs[k].style.fontSize = '1.75rem';
      curInputs[k].style.textAlign = 'center';
      curInputs[k].style.width = '44px';
      curInputs[k].style.height = '44px';
      curInputs[k].style.backgroundColor = '';
      curInputs[k].style.backgroundColor = 'background-color: rgb(223, 223, 223)';
      curInputs[k].style.pointerEvents = '';
      curInputs[k].style.pointerEvents = "none";
    } else {
      curInputs[k].innerHTML = `<input type="text" maxlength="1" class="freeCells" oninput="this.value=this.value.replace(/[^1-9]/g,'');" />`;
      curInputs[k].style.textAlign = 'center';
      curInputs[k].style.fontSize = '1.75rem';
      curInputs[k].style.width = '44px';
      curInputs[k].style.height = '44px';
      curInputs[k].style.backgroundColor = '';
      curInputs[k].style.backgroundColor = 'white';
      curInputs[k].style.pointerEvents = '';
      curInputs[k].style.pointerEvents = 'auto';
    }
  }
}

// Specific helper function
function twistArray(arr) {
  let cur_index = arr.length,
    temp_value, ran_index;
  while (0 !== cur_index) {
    ran_index = Math.floor(Math.random() * cur_index);
    cur_index -= 1;
    temp_value = arr[cur_index];
    arr[cur_index] = arr[ran_index];
    arr[ran_index] = temp_value;
  }
  return arr;
}

// Event listener
start.addEventListener("click", userConfirmBoard);