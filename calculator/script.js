// variable let,const,var

let age = 25;
const name = 'Alice';
let isStudent = true;

console.log('Name:', name, '| Age:', age, '| Student:', isStudent);

// operator + ,-,*,\
// let a = parseFloat(prompt('enter a number:'));
// let b = parseFloat(prompt('enter 2nd number:'));

// console.log('Sum:', a + b);
// console.log('Difference:', a - b);
// console.log('Product:', a * b);
// console.log('Quotient:', a / b);
// console.log('Is a greater than b?', a > b);

// dispaly output
// let c = parseFloat(prompt('Enter the first number:'));
// let d = parseFloat(prompt('Enter the second number:'));

// document.write('Sum: ' + (c + d) + '<br>');
// document.write('Difference: ' + (c - d) + '<br>');
// document.write('Product: ' + c * d + '<br>');
// document.write('Quotient: ' + c / d + '<br>');
// document.write('Is a greater than b? ' + (c > d) + '<br>');
// user can  input value with html tag
// function calculate() {
//   let e = parseFloat(document.getElementById('num1').value);
//   let f = parseFloat(document.getElementById('num2').value);

//   document.write('Sum: ' + (e + f) + '<br>');
//   document.write('Difference: ' + (e - f) + '<br>');
//   document.write('Product: ' + e * f + '<br>');
//   document.write('Quotient: ' + e / f + '<br>');
//   document.write('Is a greater than b? ' + (e > f) + '<br>');}

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
