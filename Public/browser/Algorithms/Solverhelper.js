// Create global variables.
const curInputs = document.getElementsByTagName('td');
const curValues = document.getElementsByTagName('input');

let gContainer = [];
let matrix = [];

// Switch algorithm.
const solve = document.getElementById('solve')
solve.addEventListener("click", solverSwitcher)

function solverSwitcher() {
  switch (+numAlgorithm) {
    case 1:
      Backtracking()
      break;
    case 2:
      BestFirstSearch()
      break;
    case 3:
      Knuth();
      break;
    case 4:
      SimuAnneal();
      break;
    default:
      alert('You must select an Algorithm first!');
      break;
  }
}

// Parse input data from DOM.
function parseInput() {
  for (k = 0; k < 81; k++) {
    parseInt(curInputs[k].outerText) ? gContainer.push(parseInt(curInputs[k].outerText)) : gContainer.push(0);
  }
}

// Transform 81x1 to 9x9 object.
function arrayToMatrix(input) {
  for (i = 0, j = -1; i < input.length; i++) {
    if (i % 9 === 0) {
      j++;
      matrix[j] = [];
    }
    matrix[j].push(input[i]);
  }
}

// Transform 9x9 to 81x1 object.
function matrixToArray(input) {
  let copy = [];
  for (i = 0; i < input.length; i++) {
    copy[i] = input[i].slice();
  }
  return copy;
}

// Push solution back to DOM.
function pushSolution(input) {
  const newMatrix = [].concat(...input);
  for (z = 0; z < 81; z++) {
    curInputs[z].innerText = newMatrix[z];
    curInputs[z].style.backgroundColor = '';
    curInputs[z].style.backgroundColor = 'background-color: rgb(223, 223, 223)';
    curInputs[z].style.width = '45px';
    curInputs[z].style.height = '45px';
  }
}

// Draw random integers.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}