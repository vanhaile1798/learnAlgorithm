function solve(x) {
	if (x === 1) {
		console.log(x);
	} else if (x % 2 === 1) {
		solveOdd(x);
	} else {
		solveEven(x);
	}
}

function solveOdd(x) {
	solve(x * 3 + 1);
	console.log(' / 3');
}

function solveEven(x) {
	solve(x / 2);
	console.log(' * 2');
}

solve(10);