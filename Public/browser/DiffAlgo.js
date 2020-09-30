// Difficulty variables.
const difficulty = document.getElementById('difficulty')
const easy = document.getElementById('dropdown-item-a');
const normal = document.getElementById('dropdown-item-b');
const heroic = document.getElementById('dropdown-item-c');
const legendary = document.getElementById('dropdown-item-d');

// Algorithm variables.
const algorithm = document.getElementById('algorithm');
const backtracking = document.getElementById('dropdown-item-i');
const bestfirstsearch = document.getElementById('dropdown-item-ii');
const knuth = document.getElementById('dropdown-item-iii');
const simuanneal = document.getElementById('dropdown-item-iv')

//  Set Difficulty index.
let numDifficulty = [];
// Set Algorithm index.
let numAlgorithm = [];

// Difficulties to DOM.
// Set difficulty to easy (=1).
function difficultyEasy() {
  easy.innerText = "Easy ✓";
  normal.innerText = "Normal";
  heroic.innerText = "Heroic";
  legendary.innerText = "Legendary";
  difficulty.innerText = "☑ Game Difficulty ";
  numDifficulty.length != 0 ? numDifficulty.splice(0, 1, 1) : numDifficulty.push(1)
}

// Set difficulty to normal (=2).
function difficultyNormal() {
  easy.innerText = "Easy";
  normal.innerText = "Normal ✓";
  heroic.innerText = "Heroic";
  legendary.innerText = "Legendary";
  difficulty.innerText = "☑ Game Difficulty ";
  numDifficulty.length != 0 ? numDifficulty.splice(0, 1, 2) : numDifficulty.push(2)
}

// Set difficulty to heroic (=3).
function difficultyHeroic() {
  easy.innerText = "Easy";
  normal.innerText = "Normal";
  heroic.innerText = "Heroic ✓";
  legendary.innerText = "Legendary";
  difficulty.innerText = "☑ Game Difficulty ";
  numDifficulty.length != 0 ? numDifficulty.splice(0, 1, 3) : numDifficulty.push(3)
}

// Set difficulty to legendary (=4).
function difficultyLegendary() {
  easy.innerText = "Easy";
  normal.innerText = "Normal";
  heroic.innerText = "Heroic";
  legendary.innerText = "Legendary ✓";
  difficulty.innerText = "☑ Game Difficulty ";
  numDifficulty.length != 0 ? numDifficulty.splice(0, 1, 4) : numDifficulty.push(4)
}

// Algorithms to DOM.
// Set Backtracking (=1).
function algoBacktrack() {
  backtracking.innerText = "Backtracking ✓";
  bestfirstsearch.innerText = "Best First Search";
  knuth.innerText = "Knuth's Dancing Links";
  simuanneal.innerText = "Simulated Annealing";
  algorithm.innerText = "☑ Algorithm Solver ";
  numAlgorithm.length != 0 ? numAlgorithm.splice(0, 1, 1) : numAlgorithm.push(1);
}

// Set Best First Search (=2).
function algoBest() {
  backtracking.innerText = "Backtracking";
  bestfirstsearch.innerText = "Best First Search ✓";
  knuth.innerText = "Knuth's Dancing Links";
  simuanneal.innerText = "Simulated Annealing";
  algorithm.innerText = "☑ Algorithm Solver ";
  numAlgorithm.length != 0 ? numAlgorithm.splice(0, 1, 2) : numAlgorithm.push(2);
}

// Set Knuth (=3).
function algoKnuth() {
  backtracking.innerText = "Backtracking";
  bestfirstsearch.innerText = "Best First Search";
  knuth.innerText = "Knuth's Dancing Links ✓";
  simuanneal.innerText = "Simulated Annealing";
  algorithm.innerText = "☑ Algorithm Solver ";
  numAlgorithm.length != 0 ? numAlgorithm.splice(0, 1, 3) : numAlgorithm.push(3);
}

// Set Simulated Annealing (=4).
function algoSimu() {
  backtracking.innerText = "Backtracking";
  bestfirstsearch.innerText = "Best First Search";
  knuth.innerText = "Knuth's Dancing Links";
  simuanneal.innerText = "Simulated Annealing ✓";
  algorithm.innerText = "☑ Algorithm Solver ";
  numAlgorithm.length != 0 ? numAlgorithm.splice(0, 1, 4) : numAlgorithm.push(4);
}

// Add Event listeners.
easy.addEventListener("click", difficultyEasy);
normal.addEventListener("click", difficultyNormal);
heroic.addEventListener("click", difficultyHeroic);
legendary.addEventListener("click", difficultyLegendary);

backtracking.addEventListener("click", algoBacktrack);
bestfirstsearch.addEventListener("click", algoBest);
knuth.addEventListener("click", algoKnuth);
simuanneal.addEventListener("click", algoSimu);