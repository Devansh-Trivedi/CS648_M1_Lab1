var num1 = parseInt(prompt('Enter the first integer:'), 10);
var num2 = parseInt(prompt('Enter the second integer:'), 10);

var result = '';

if (num1 > num2) {
  result = num1;
} else if (num2 > num1) {
  result = num2;
} else {
  result = 'Both numbers are equal: ' + num1;
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.innerHTML = result;
});
