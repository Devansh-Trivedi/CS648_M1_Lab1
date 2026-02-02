var num = parseInt(prompt('Enter a number to count down from:'), 10);

if (isNaN(num)) {
  console.log('Please refresh and enter a valid number.');
} else {
  for (var i = num; i >= 0; i--) {
    console.log(i);
  }
}
