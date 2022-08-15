function onClickAdd() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateAddLabel();
}

function onClickMultiply() {
  if (inputsAreEmpty()) {
    updateMultiplyLabel();
    return;
  }
  label.textContent = 'Error: one or both inputs are empty.';
}

function onClickDivide() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateDivideLabel();
}

function onClickSubtract() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateSubtractLabel();
}


function onClickSave() {
  if (labelisempty()) {
    return;
  }
  if (labelIsDuplicate()) {
    return;
  }
  if (labelIsError()) {
    return;
  }
  updateSaveLabel();
}

function onClickClear() {
  clearInputs()
  clearLabel()
  clearHistory()
}

function onClickAns() {
  if (noSavedResults()) { 
    return;
  }
  updateInputs();
}

function clearInputs() {
  inputs[1].value = ""
  inputs[2].value = ""
}

function clearLabel() {
  label.textContent = ""
}

function clearHistory() {
  savedResults = null
  savedHistory.innerHTML = ""
}

function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}

function labelIsEmpty() {
  if (getLabel() === '') {
    return true;
  } else {
    return false;
  }
}

function labelIsDuplicate() {
  if (getLabel() === savedResults[0]) {
    return true;
  } else {
    return false;
  }
}

function labelIsError() {
  if (getLabel().includes("Error:")) {
    return true;
  } else {
    return false;
  }
}

function noSavedResults() {
  if (savedResults.length === 0) {
    return true;
  } else {
    return false;
  }
}

function updateAddLabel() {
  var number1 = getNumber1();
  var number2 = getNumber2();
  var sum = number1 + number2;
  label.textContent = number1 + ' + ' + number2 + ' = ' + sum;
}

function updateMultiplyLabel() {
  var number1 = getNumber1();
  var number2 = getNumber2();
  var result = number1 ** number2;
  label.textContent = number1 + ' x ' + number2 + ' = ' + result;
}

function updateDivideLabel() {
  var number1 = getNumber1();
  var number2 = getNumber2();
  var result = number1 / number2;
  label.textContent = number1 + ' / ' + number2 + ' = ' + result;
}

function updateSubtractLabel() {
  var number1 = getNumber1();
  var number2 = getNumber1();
  var result = number1 - number2;
  label.textContent = number1 + ' - ' + number1 + ' = ' + result;
}

var savedResults = []
function updateSaveLabel() {
  savedResults.unshift(label.textContent);
  
  var combined = ""
  savedResults.forEach((res, index) => {
    const colour = getColour(res)
    const style = getStyle(index)
    combined += `<div style="color:${colour ?? "#ff000000"}; font-weight: ${style};"> ${res}</div>`
  })
  
  savedHistory.innerHTML = combined
}

function updateInputs() {
  var lastValue = savedResults[savedResults.length]
  inputs[0].value = lastValue
  inputs[1].value = ""
}

function getColour(res) {
  if (res.includes("+")) { 
    return 'red' 
  } 
  else if (res.includes("x")) { 
    return 'blue' 
  }
  else if (res.includes("-")) { 
    return 'purple' 
  }
}
  
function getStyle(index) {
  return index < 1 ? "bold" : "normal"
}

function getNumber1() {
  return inputs[0].value;
}

function getNumber2() {
  return inputs[1].value;
}

function getLabel() {
  return label.textContent;
}

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var savedHistory = document.querySelector('#history');

var addButton = document.getElementById('addButton');
addButton.addEventListener('click', onClickAdd);

var multiplyButton = document.getElementById('multiplyButton');
multiplyButton.addEventListener('click', onClickMultiply);

var divideButton = document.getElementById('divideButton');
divideButton.addEventListener('click', onClickAdd);

var subtractButton = document.getElementById('subtractButton');
subtractButton.addEventListener('click', onClickSubtract);

var saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', onClickSave);

var clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', onClickClear);

var ansButton = document.getElementById('ansButton');
ansButton.addEventListener('click', onClickAns);