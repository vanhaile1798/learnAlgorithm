var fac = 1,
	x = [];
(function factorial(n) {
	if (n === 0) {
		x[0] = 1;
	} else {
		factorial(n - 1);
		x[n] = x[n - 1] * (n+1);
		if (n === 4) {
			console.log(x[n]);
		}
	}
})(4);