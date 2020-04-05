let lines = [];
require('readline').createInterface({input: process.stdin,output: process.stdout})
				.on('line', line => {lines.push(line);})
				.on('close', () => {main(lines)});

const main = (input) => {
	var ret = "";
	for (var i = 1; i <= input; i++) {
		if (i % 2 == 1) {
			ret += "I hate ";
		} else {
			ret += "I love ";
		}
		if (i == input) {
			ret += "it ";
		} else {
			ret += "that ";
		}
	}
	console.log(ret);
}
