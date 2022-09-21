// const fibonacci = (n) => {
// 	let arr = [0, 1];
// 	let newNum;
// 	for (let i = 0; i < n - 2; i++) {
// 		newNum = arr[i] + arr[i + 1];

// 		arr.push(newNum);
// 	}
// 	return arr;
// };

// console.log(fibonacci(6));

const fibonacci = (n) => {
	let arr = [0, 1];
	let newNum;
	for (let i = 0; i < n - 2; i++) {
		newNum = arr[i] + arr[i + 1];

		arr.push(newNum);
	}

	if (n === 1 || n === 0) {
		return n;
	} else {
		return arr[n - 1] + arr[n - 2];
	}
	// return arr;
};

const fib = () => {
	if (n === 0 || n === 1) return n;
	else return fib(n - 1) + fib(n - 2);
};

console.log(fibonacci(2));
