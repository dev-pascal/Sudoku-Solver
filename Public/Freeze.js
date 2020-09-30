const freeze = document.getElementById('freeze');
let freeCells = document.getElementsByClassName('freeCells');

function toggleFreeze() {
  freeze.getAttribute('aria-pressed') === 'false' ? freezeCells() : defreezeCells()
}

function freezeCells() {
  Array.from(freeCells).forEach(element =>
    element.style.pointerEvents = "none");
  alert('Freeze Mode is ACTIVATED');
}

function defreezeCells() {
  Array.from(freeCells).forEach(element =>
    element.style.pointerEvents = "auto");
  alert('Freeze Mode is DEACTIVATED');
}

// Event listeners
freeze.addEventListener("click", toggleFreeze);