let lines = [];
require('readline').createInterface({input: process.stdin,output: process.stdout})
				.on('line', line => {lines.push(line);})
				.on('close', () => {main(lines)});

const main = (input) => {
	input = parseInt(input);
	var hundreds = Math.floor(input / 100);
	var counter = hundreds;
	input -= hundreds * 100;
	while(input > 0) {
		counter++;
		if (input >= 100) {
			input -= 100;
		} else if (input >= 20) {
			input -= 20;
		} else if (input >= 10) {
			input -= 10;
		} else if (input >= 5) {
			input -= 5;
		} else if (input >= 1) {
			input -= 1;
		}
	}
	console.log(counter);
}