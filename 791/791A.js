let lines = [];
require('readline').createInterface({input: process.stdin,output: process.stdout})
				.on('line', line => {lines.push(line);})
				.on('close', () => {console.log(main(lines));});

const main = (input) => {
	let [a, b] = input[0].split(" ").map(num => parseInt(num));
	let counter = 0;
	while (a <= b) {
		counter++;
		a *= 3;
		b *= 2;
	}
	return counter;
}