var a = [];

var n = 5;

for (var i = 0; i < n; i++) {
	a[i] = 0;
}

a[0][0] = 1;

for (var m = 1; m < n; m++) {
	for (var v = 0; v < n; v++) {
		if (v < m) {
			a[m][v] = a[m-1][v];
		} else {
			a[m][v] = a[m-1][v] + a[m][v-m];
		}
	}
}

console.log(a[n][n]);