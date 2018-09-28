var x = [],
	a = [],
	b = [],
	c = [];

for (var i2 = 0; i2 <= 20; i2++) {
	a[i2] = true;
	b[i2] = true;
	
}

for (var j1 = -6; j1 <= 6; j1++) {
	c[j1] = true;
}

(function attempt(i) {

	for (var j = 1; j <= 5; j++) {
		if (a[j] && b[i + j] && c[i - j]) {
			x[i] = j;
			if (i === 5) {
				console.log('one way of arrangement');
				for (var i1 = 1; i1 <= 5; i1++) {
					console.log(i1, x[i1]);
				}

				// console.log(x.toString());
			} else {
				a[j] = false;
				b[i + j] = false;
				c[i - j] = false;
				attempt(i + 1);
				a[j] = true;
				b[i + j] = true;
				c[i - j] = true;
			}
		}
	}
})(1); 