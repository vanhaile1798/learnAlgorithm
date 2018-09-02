/*
c = {true, true, true, true}
i = 0
	
	j = 0
		i = 0
		j = 0
			c[0] = false

i = 1
	j = 0 false
	j = 1
		i = 1
		j = 1
			c[1] = false

i = 2
	j = 0 false
	j = 1 false
	j = 2
		i = 2
		i = 2
			c[2] = false

i = 3
	j 0 1 2 false
	j = 3
		i = 3
		j = 3
		console.log

c[2] = true
c[1] = true
c[0] = true
	*/

var c = [true, true, true, true],
	x = [];

(function attempt(i) {
	for (var j = 0; j < 4; j++) {
		if (c[j]) {
			x[i] = j
			if (i === 3) {
				console.log(x.toString());
			} else {
				c[j] = false;
				attempt(i + 1);
				c[j] = true;
			}
		}
	}
})(0);