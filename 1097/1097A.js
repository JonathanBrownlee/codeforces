let lines = [];
require('readline').createInterface({input: process.stdin,output: process.stdout})
				.on('line', line => {lines.push(line);})
				.on('close', () => {main(lines)});

const main = (input) => {
	var tableCard = input[0].split("");
	var tableValue = tableCard[0];
	var tableSuit = tableCard[1];
	var handCards = input[1].split(" ");
	
	for (var i = 0; i < 5; i++) {
		if (handCards[i][0] == tableValue || handCards[i][1] == tableSuit) {
			console.log("YES");
			return;
		}
	}
	console.log("NO");
}