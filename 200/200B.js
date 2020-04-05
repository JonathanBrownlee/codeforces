let lines = [];
require('readline').createInterface({input: process.stdin,output: process.stdout})
				.on('line', line => {lines.push(line);})
				.on('close', () => {main(lines)});

const main = (input) => {
	var n = parseInt(input[0]);
	var percentages = input[1].split(" ").map(num => parseInt(num));
	var sum = 0;
	for (var i = 0; i < n; i++) {
		sum += percentages[i];
	}
	console.log(sum/n);
}