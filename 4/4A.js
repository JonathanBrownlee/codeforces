let lines = [];
require('readline').createInterface({input: process.stdin,output: process.stdout})
				.on('line', line => {lines.push(line);})
				.on('close', () => {main(lines)});

const main = (input) => {
	if (input % 2 == 0 && input != 2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
