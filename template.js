const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

reader.on('line', line => {
    lines.push(line);
});

reader.on('close', () => {
	//Code goes here. Input is in lines
});