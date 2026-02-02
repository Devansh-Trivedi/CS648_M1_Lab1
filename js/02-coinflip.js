const coinFlip = Math.floor(Math.random() * 2);
const choice = (prompt('Heads or Tails?') || '').trim().toLowerCase();

const isHeads = coinFlip === 0;

if (isHeads && choice === 'heads') {
  alert('The flip was heads and you chose heads...you win!');
} else if (isHeads && choice === 'tails') {
  alert('The flip was heads but you chose tails...you lose!');
} else if (!isHeads && choice === 'heads') {
  alert('The flip was tails but you chose heads...you lose!');
} else if (!isHeads && choice === 'tails') {
  alert('The flip was tails and you chose tails...you win!');
} else {
  alert('Please refresh and type exactly: Heads or Tails');
}
