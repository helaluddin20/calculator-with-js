
// build a calculator
const display = document.getElementById('display');
function appendToDispaly(value) {
  if (display.value === '0') {
    display.value = value;
  } else {
    display.value += value;
  }
}
function clearDisplay() {
  display.value = '0';
}
function calculate() {
  try {
    display.value = eval(display.value) || '0';
  } catch (error) {
    display.value = 'error';
  }
}
function lastDelete() {
  display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
}
