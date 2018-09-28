var a ;

function solve(x) {
	if (x === 1) {
		a = `${x}`;
	} else if (x % 2 === 0) {
			solve(x / 2);
			a += ' * 2';
		} else {
		solve(x * 3 + 1);
		a += ' / 3';
	}
	if (x === 10) {
		console.log(a);
	}
}

solve(10);