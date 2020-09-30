function Knuth() {
  // Creating variables and getting data from DOM.
  parseInput();
  let start = new Date().getTime();
  for (cell = 0; cell < 9; cell++) board[cell] = new Array();
  for (row = 0; row < 9; row++) {
    for (column = 0; column < 9; column++) {
      const cell = column + row * 9;
      let number = gContainer[cell];
      if (number != 0) {
        const square = Math.floor(column / 3) + Math.floor(row / 3) * 3;
        board[number - 1].push(column, row, square);
      }
    }
  }

  // Define header nodes.
  function HeaderNode(id, left, type) {
    this.left = left;
    this.right = null;
    this.up = null;
    this.down = null;
    this.type = type;
    this.id = id;
  }

  function Node(head, left, top) {
    this.left = left;
    this.right = null;
    this.up = top;
    this.down = null;
    this.header = head;
  }

  const directions = 81 * 4;
  let root = new HeaderNode("root", null, "root");
  let header = new Array(directions);
  let base = root;

  for (cell = 0; cell < directions; cell++) {
    if (cell >= 81) {
      if (cell >= 81 * 2) new_header = new HeaderNode(cell - 81 * 2, base, "quadrant");
      else new_header = new HeaderNode(cell - 81, base, "col");
    }
    else new_header = new HeaderNode(cell, base, "row");
    header[cell] = new_header;
    base.right = new_header;
    base = new_header;
  }
  base.right = root;
  root.left = base;

  const ruler = new Array(directions);
  for (cell = 0; cell < directions; cell++) ruler[cell] = header[cell];

  const select = function (row_item, col_item, quadrant, sym, header, ruler) {
    const case_1 = col_item * 9 + row_item;
    const case_2 = row_item * 9 + sym + 81;
    const case_3 = col_item * 9 + sym + 81 * 2;
    const case_4 = quadrant * 9 + sym + 81 * 3;

    const posFlag = new Node(header[case_1], null, ruler[case_1]);
    posFlag.up = ruler[case_1];
    ruler[case_1].down = posFlag;

    const rowFlag = new Node(header[case_2], posFlag, ruler[case_2]);
    rowFlag.up = ruler[case_2];
    ruler[case_2].down = rowFlag;

    const colFlag = new Node(header[case_3], rowFlag, ruler[case_3]);
    colFlag.up = ruler[case_3];
    ruler[case_3].down = colFlag;

    const quadFlag = new Node(header[case_4], colFlag, ruler[case_4]);
    quadFlag.up = ruler[case_4];
    ruler[case_4].down = quadFlag;
    posFlag.left = quadFlag;
    posFlag.right = rowFlag;
    rowFlag.right = colFlag;
    colFlag.right = quadFlag;
    quadFlag.right = posFlag;
    ruler[case_1] = posFlag;
    ruler[case_2] = rowFlag;
    ruler[case_3] = colFlag;
    ruler[case_4] = quadFlag;
  };

  let rows = 0;
  for (row = 0; row < 9; row++) {
    let temp = board[row];
    for (square = 0; square < temp.length; square += 3) {
      let opt_1 = temp[square + 0];
      let opt_2 = temp[square + 1];
      let opt_3 = temp[square + 2];
      select(opt_1, opt_2, opt_3, row, header, ruler);
      rows++;
    }
  }

  // Generating every feasible board row.
  for (row = 0; row < 9; row++) {
    const row_item = board[row];

    // Check all 9 squares.
    for (square_row = 0; square_row < 3; square_row++) {
      for (square_col = 0; square_col < 3; square_col++) {
        const index = square_col + square_row * 3;
        let feasible = true;
        for (y = 0; y < row_item.length; y += 3) {
          if (index == row_item[y + 2]) {
            feasible = false;
            break;
          }
        }
        if (!feasible) continue;
        // Check each square item.
        for (cell_row = 0; cell_row < 3; cell_row++) {
          for (cell_col = 0; cell_col < 3; cell_col++) {
            let ident_x = square_col * 3 + cell_col;
            let ident_y = square_row * 3 + cell_row;
            feasible = true;
            // Not feasible for duplicates.
            for (temp_count = 0; temp_count < row_item.length; temp_count += 3) {
              if (ident_x == row_item[temp_count + 0] || ident_y == row_item[temp_count + 1]) {
                feasible = false;
                break;
              }
            }
            // Select feasible rows.
            if (feasible) {
              select(ident_x, ident_y, index, row, header, ruler);
              rows++;
            }
          }
        }
      }
    }
  }

  // Link columns at top and bottom.
  for (index = 0; index < directions; index++) {
    header[index].up = ruler[index];
    ruler[index].down = header[index];
  }

  // Execute the algorithm.
  const success = new Array(81);
  const solution = new Array(directions);
  const solved = { done: false };
  for (index = 0; index < 81; index++) success[index] = 0;
  knuthsolve(root, 0, solution, success, solved);
  setTimeout(function () {
    let end = new Date().getTime();
    alert('Dancing Links has solved the board in ' + `${end - start}` + ' milliseconds! ✔️');
    console.log('Dancing Links solved the board in ' + `${end - start}` + ' milliseconds! ✔️');
  }, 0);
}

// Solver functions
function cover(column) {
  column.right.left = column.left;
  column.left.right = column.right;
  for (r = column.down; r != column; r = r.down) {
    for (c = r.right; c != r; c = c.right) {
      c.up.down = c.down;
      c.down.up = c.up;
    }
  }
}

function uncover(column) {
  for (c = column.up; c != column; c = c.up) {
    for (r = c.left; r != c; r = r.left) {
      r.up.down = r;
      r.down.up = r;
    }
  }
  column.right.left = column;
  column.left.right = column;
}

function knuthsolve(root, k, partial, solution, done) {
  if (done.done) return;
  if (root.right == root || root.left == root) {
    for (var i = 0; i < k; i++) {
      let n = partial[i];
      while (n.header.type != "quadrant") n = n.left;
      const sym = n.header.id % 9 + 1;
      n = n.right;
      solution[n.header.id] = sym;
    }
    const matrix = solution
    pushSolution(matrix);
    done.done = true;
    return;
  }

  const col = root.right;
  cover(col);

  for (let row = col.down; row != col; row = row.down) {
    partial[k] = row;
    for (let n = row.right; n != row; n = n.right) cover(n.header);
    knuthsolve(root, k + 1, partial, solution, done);
    for (let n = row.left; n != row; n = n.left) uncover(n.header);
  }
  uncover(col);
}