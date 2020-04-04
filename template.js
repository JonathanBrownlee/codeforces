let lines = [];
require('readline').createInterface({input: process.stdin,output: process.stdout})
				.on('line', line => {lines.push(line);})
				.on('close', () => {console.log(main(lines));});

const main = (input) => {
	// Code goes here
}