// All the area calculation function

// get input section
function getElementField(elementField) {
  const inputField = document.getElementById(elementField);
  const inputFieldText = inputField.value;
  const input = parseFloat(inputFieldText);

  return input;
}
// set input section

function setElementField(elementId, area) {
  const elementField = document.getElementById(elementId);
  elementField.innerText = area;
}
