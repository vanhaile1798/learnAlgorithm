var x = [];
function attempt(i) {
	for (var j = 0; j <=1; j++) {
		x[i] = j;
		if (i === 2) {
			console.log(x.toString());
		} else {
			attempt(i + 1);
		}
	}
};

attempt(0);

// Explanation for above code
// At first we have 0 0, and then we have 0 and 1
/*
i 0
j 0
	i 1
	j 0
		i 2
		j 0
		i 2 
		j 1
	i 1
	j 1
		i 2
		j 0
		i 2 
		j 1
i 0
j 1
	i 1
	j 0
		i 2
		j 0
		i 2
		j 1
	i 1
	j 1
		i 2
		j 0
		i 2
		j 1
	i 1
	j 2
i 0
j 2
*/