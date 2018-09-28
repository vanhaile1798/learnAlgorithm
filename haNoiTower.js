function move(n, x, y) {
	if (n === 1) {
		console.log(`Move 1 disc from ${x} to ${y}`);
	} else {
		move(n-1, x, 6 - x - y);
		move(1, x, y);
		move(n - 1, 6 - x - y, y);
	}
}

move(3, 1, 2);
/*
function ucln(a, b) {
	while (a !== b) {
		if (a > b) {
			a = a - b;
		} else {
			b = b - a;
		}
	}
}
*/
function ucln(a, b) {
	if (b === 0) {
		console.log(a);
	} else {
		ucln(b, a % b);
	}
}
ucln(8, 12);