let lines = [];
require('readline').createInterface({input: process.stdin,output: process.stdout})
				.on('line', line => {lines.push(line);})
				.on('close', () => {main(lines)});

const main = (input) => {
	for (var i = 1; i <= parseInt(input[0]); i++) {
		var [a, b,c,d, k] = input[i].split(" ").map(num => parseInt(num));
		var aTotal = Math.ceil(a / c);
		var bTotal = Math.ceil(b / d);
		if (aTotal + bTotal <= k) {
			console.log(aTotal, bTotal);
		} else {
			console.log(-1);
		}
	}
}