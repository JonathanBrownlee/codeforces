let lines = [];
require('readline').createInterface({input: process.stdin,output: process.stdout})
				.on('line', line => {lines.push(line);})
				.on('close', () => {main(lines)});

const main = (input) => {
	var num = parseInt(input);
	
	console.log(Math.floor(num / 2));
	
	var ans = "";
	
	if (num % 2 == 1) {
		num -= 3;
		ans += "3 ";
	}
	
	for (var i = 0; i < num; i += 2) {
		ans += "2 ";
	}
	
	console.log(ans.trim());
}