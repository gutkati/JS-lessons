// урок №1
function sqrt(num) {
    return Math.sqrt(num)
}

function round(num) {
    return num.toFixed(3)
}

let res3 = round(sqrt(2))
console.log(res3)

// урок №2
function sqrt2(num) {
	return Math.sqrt(num);
}

function sum2(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round7(num) {
	return num.toFixed(3);
}

let  res4 = round7(sum2(sqrt2(2), sqrt2(3), sqrt2(4)))
console.log(res4)


