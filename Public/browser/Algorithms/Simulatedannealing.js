function SimuAnneal() {
  // Get board & time data.
  let start = new Date().getTime();

  // Create variables.
  let deep_copy = [];
  let simulation = [];
  for (i = 0; i < 9; i++) {
    simulation[i] = [];
    deep_copy[i] = [];
  }

  // Getting data from DOM into function.
  for (i = 0; i < 81; i++) {
    let col = i % 9;
    let row = (i - col) / 9;
    parseInput();
    // Import user data from board.
    simulation[row][col] = gContainer[i];
    //Store original board data.
    deep_copy[row][col] = simulation[row][col];
  }

  // Initial point for simulated annealing.
  let n = 0;

  while (n < 7) {
    let m = 0;
    while (m < 7) {
      // Search for missing numbers in 3x3 square.
      let index_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let index_2 = [];
      let counter = 0;
      for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
          let k = simulation[n + i][m + j];
          if (k > 0) {
            index_1[k - 1] = 0;
            counter += 1;
          }
        }
      }
      index_1 = index_1.sort((a, b) => b - a);
      index_2 = index_1.slice(0, 9 - counter);
      counter = 0;
      // Fill missing values with rest numbers.
      for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
          let k = simulation[n + i][m + j];
          if (k === 0) {
            simulation[n + i][m + j] = index_2[counter];
            counter += 1;
          }
        }
      }
      m += 3
    }
    n += 3
  }
  let current_points = scoring(simulation);


  // Start Simulated Annealing.
  const temperature_0 = 2 / 3;
  const number_iterations = 120000;

  for (iteration = 0; iteration < number_iterations; iteration++) {
    let Temperature = temperature_0 * (0.99 ** iteration);
    let n = (iteration % 9) % 3;
    let m = ((iteration % 9) - n) / 3;
    let pairs = [];
    let counter = 0;

    for (i = 3 * n; i < (3 * (n + 1)); i++) {
      for (j = 3 * m; j < (3 * (m + 1)); j++) {
        if (deep_copy[i][j] === 0) {
          pairs[counter] = [i, j];
          counter += 1;
        }
      }
    }

    // Check new & current data.
    let first = Math.floor(Math.random() * counter);
    let second = Math.floor(Math.random() * (counter - 1));
    if (second === first) second = counter - 1;

    // Switch values.
    let temp = simulation[pairs[first][0]][pairs[first][1]];
    let updated = true;
    simulation[pairs[first][0]][pairs[first][1]] = simulation[pairs[second][0]][pairs[second][1]];
    simulation[pairs[second][0]][pairs[second][1]] = temp;

    // Check for values.
    let new_points = scoring(simulation);
    if (new_points >= current_points) {
      if (Math.random() > Math.exp((current_points - new_points) / Temperature)) {
        let temp = simulation[pairs[first][0]][pairs[first][1]];
        simulation[pairs[first][0]][pairs[first][1]] = simulation[pairs[second][0]][pairs[second][1]];
        simulation[pairs[second][0]][pairs[second][1]] = temp;
        updated = false;
      }
    }
    // Check for values.
    if (updated) current_points = new_points;
    if (current_points === 0) break;
  }
  let temp_array = [];
  for (row = 0; row < 9; row++) {
    for (col = 0; col < 9; col++) {
      temp_array.push(simulation[row][col]);
    }
  }
  pushSolution(temp_array)
  setTimeout(function () {
    let end = new Date().getTime();
    alert('Simulated Annealing has solved the board in ' + `${end - start}` + ' milliseconds! ✔️');
    console.log('Simulated Annealing has solved the board in ' + `${end - start}` + ' milliseconds! ✔️');
  }, 0);
}

/* Specific helper functions. */
function checkrow(simulation, r) {
  let duplicates = 0;
  for (n = 1; n < 9; n++) {
    for (m = 0; m < n; m++) {
      if (simulation[r][n] === simulation[r][m]) duplicates += 1;
    }
  }
  return duplicates;
}

function checkcol(simulation, c) {
  let duplicates = 0;
  for (n = 1; n < 9; n++) {
    for (m = 0; m < n; m++) {
      if (simulation[n][c] === simulation[m][c]) duplicates += 1;
    }
  }
  return duplicates;
}

function scoring(simulation) {
  let result = 0;
  for (i = 0; i < 9; i++) {
    result += checkrow(simulation, i);
  }
  for (i = 0; i < 9; i++) {
    result += checkcol(simulation, i);
  }
  return result;
}