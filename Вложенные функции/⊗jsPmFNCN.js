// урок №1
let array = [1, 2, 3, 4]
function cube(num) {
	return num ** 3;
}

function each(arr, callback) {
let res = []
    for (let element of arr) {
        res.push(callback(element))
    }
    return res
}

each(array, cube)