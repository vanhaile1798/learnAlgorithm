function solve(x) {
	if (x === 1) {
		console.log(x);
	} else if (x % 2 === 0) {
			solve(x / 2);
			console.log(' * 2');
		} else {
		solve(x * 3 + 1);
		console.log(' / 3');
	}
}

solve(10);