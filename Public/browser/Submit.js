const submit = document.getElementById('submit')

let gUserInput = [];
// Get user input data from grid
function submitUserVals() {
  for (i = 0; i < curValues.length; i++) {
    // Check if data is complete
    if (curValues[i].value === '') {
      alert('You must solve all fields first! ⚠️');
      return;
    }
    // Else push values in tempVariable
    else if (curValues[i].value != '') {
      gUserInput.push((curValues[i].value))
    }
  }
  addMissingVals()
}

// Update DOM with user input data.
function addMissingVals() {
  let sum = 0;
  for (j = 0; j < curInputs.length; j++) {
    if (curInputs[j].innerText === '') {
      curInputs[j].innerText = parseInt(gUserInput[sum]);
      curInputs[j].style.backgroundColor = '';
      curInputs[j].style.width = '45px';
      curInputs[j].style.height = '45px';
      sum += 1
    }
  }
  alert('Your solution was successfully submitted! 🏁');
}

submit.addEventListener("click", submitUserVals)