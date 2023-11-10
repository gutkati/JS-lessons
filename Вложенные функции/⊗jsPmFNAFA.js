// урок №1

function filter(arr, callback) {
	let res = [];

	for (let elem of arr) {
		if ( callback(elem) === true ) {
			res.push(elem);
		}
	}

	return res;
}

let result = filter([1, 2, 3, 4, -3], elem => elem > 0);
console.log(result)

