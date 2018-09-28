var x = [],
	t = [];


x[0] = 1;
t[0] = 0;
(function attempt(i) {
	n = parseInt((6 - t[i - 1]) / 2);
	j1 = x[i - 1];
	
	for (var j = x[i - 1]; j <= parseInt((6 - t[i - 1]) / 2); j++) {
		x[i] = j;
		t[i] = t[i - 1] + j;
		attempt(i + 1);
	}
	x[i] = 6 - t[i - 1];
	// x.splice(0, 1);
	console.log(x.slice(1, i + 1).toString());
})(1);


/* 
i = 1
	for j = 1 j <= 3
		i = 1
		j = 1
		t[1] = 1


i = 2
	for j = 1 j <= 2
		i = 2
		j = 1
		t[2] = 2

i = 3
	for j = 1 j <= 2
		i = 3
		j = 1
		t[3] = 3

i = 4
	for j = 1 j <= 1
		i = 4
		j = 1
		t[4] = 4

i = 5
	for j = 1 j <= 1
		i = 5
		j = 1
		t[5] = 5

i = 6
	for j = 1 j <= 0

	i = 6
	x[6] = 1
1 1 1 1 1 1

i = 5
	i = 5
	x[5] = 2

1 1 1 1 2

i = 4
	i = 4
	x[4] = 3

i = 3
	j = 2 j <= 2
		i = 3
		j = 2
		t[3] = 4
i = 4
	x[4] = 2
*/

// Lỗi do thiếu var trong vòng for, khi i = 6, i giảm dần, j sẽ tăng từ 1 lên. Nhận biết bằng cách dùng chrome devtool