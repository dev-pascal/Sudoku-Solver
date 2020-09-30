const check = document.getElementById('check')

function checkBoard() {
  // Create temp variables.
  const temp_board_1 = [];
  const temp_board_2 = [];

  // Parse temp values.
  for (q = 0; q < 81; q++) {
    !isNaN(curInputs[q].innerText) ? temp_board_1.push(curInputs[q].innerText) : temp_board_1.push(0);
  }
  // Create 9x9 object.
  for (i = 0, j = -1; i < temp_board_1.length; i++) {
    if (i % 9 === 0) {
      j++;
      temp_board_2[j] = [];
    }
    temp_board_2[j].push(temp_board_1[i]);
  }
  // Check solution validity for falseness.
  function checkValid(input) {
    for (m = 0; m < 3; m++) {
      for (n = 0; n < 3; n++) {
        if (parseSec(m, n, input).sort((a, b) => a - b).join("-") !== "1-2-3-4-5-6-7-8-9") {
          return alert('Your solution is false! 👎')
        }
      }
    }
    // Check solution validity for correctness.
    for (k = 0; k < 9; k++) {
      var arr_col = [];
      if (input[k].slice().sort((a, b) => a - b).join("-") !== "1-2-3-4-5-6-7-8-9") return false;
      for (j = 0; j < 9; j++) arr_col.push(input[j][k]);
      if (arr_col.sort((a, b) => a - b).join("-") !== "1-2-3-4-5-6-7-8-9") return false;
    }
    return alert('Your solution rocks! 👍');
  }
  // Parse values of square sections.
  function parseSec(m, n, input) {
    var arr = [];
    for (i = 3 * m; i < 3 * (m + 1); i++) arr = arr.concat(input[i].slice(3 * n, 3 * (n + 1)));
    return arr;
  }
  checkValid(temp_board_2)
}

// Event listeners
check.addEventListener("click", checkBoard);