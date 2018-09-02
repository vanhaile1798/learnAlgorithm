var x = [];

function attempt(i) {

	/*for (var j = x[i - 1] + 1; j <= 10 - 5 + i; j++) {
		x[i] = j;
		if (i === 5) {
			console.log(x.toString());
		} else {
			attempt(i + 1);
		}
	}*/

	if (i === 0) {
		for (var j = 0; j <= 10 - 5 + i; j++) {
			x[i] = j;
			attempt(i + 1);
		}
	} else {
		for (var j = x[i - 1] + 1; j <= 10 - 5 + i; j++) {
			x[i] = j;
			if (i === 4) {
				console.log(x.toString());
			} else {
				attempt(i + 1);
			}
		}
	}
}

// x[0] = 0;
attempt(0);


/*
n = 10, k = 5

attemp(1);
x[0] = 0;
i = 1
	j = x[ 1 - 1] + 1 to 10 - 5 + 1
		x[1] = 1
		i === 5 console.log
		else attempt(2)

i = 2
	j = x[2 - 1] + 1 to 10 - 5 + 2
		x[2] = 2
		attempt(3)
i = 3
	j = x[2] + 1 to 10 - 5 + 3
		x[3] = 3
		attempt(4)
i = 4
	j = 4 to 9
		x[4] = 4
		attempt(5)

i = 5
	j = 5 to 10
		x[5] = 5
		console.log(1, 2 ,3 ,4, 5);
*/