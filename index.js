function writeCards(arr, m) {
	
	const newArr = [];

	arr.forEach(e => {
		newArr.push(`Thank you, ${e}, for the wonderful ${m} gift!`);
	});

	return newArr;
}

function  countDown(i) {
	while (i >= 0) {
		console.log(i);
		i -= 1;
	}
}
