// Given two finite non empty states, find their cartesian product

let products = [];

function cartesianProduct(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			let newArr = new Array(arr1[i], arr2[j]);

			products.push(newArr);
		}
	}

    return products
}

const arr1 = [1, 2,3];
const arr2 = [3, 4, 5, 6];

console.log(cartesianProduct(arr1, arr2));
