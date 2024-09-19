const m = prompt('son kriting');
const n = prompt('ustun sonini kriting');

for (let i = 0; i < m; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === m - 1 || j === 0 || j === n - 1 || i === j || i + j === n - 1) {
      row += '⬛';
    } else {
      row += '⬜';
    }
  }
  console.log(row);
}
