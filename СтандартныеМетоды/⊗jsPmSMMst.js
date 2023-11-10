// урок №1
let num = 12345;
let arr = num.toString().split('');
console.log(arr)

let sum = 0;
for (let digit of arr) {
	sum += +digit;
}

console.log(sum);

// урок №2
let num2 = 12345;
let arr2 = String(num2).split('');

let sum2 = 0;
for (let digit of arr2) {
	sum2 += +digit;
}
console.log(sum2);

// урок №3
let num3 = 12345;
let arr3 = String(num3).split('');

let sum3 = 0;
for (let digit of arr3) {
	sum3 += Number(digit);
}

console.log(sum3)

// урок №4
let num4 = 12345;
let arr4 = String(num4).split('');

let sum4 = 0;
for (let digit of arr4) {
	sum4 += Number(digit);
}

console.log(sum4);

// урок №5
let num5 = 12345;
let arr5 = String(num5).split('');

let prod5 = 0;
for (let digit of arr5) {
	prod5 += Number(digit);
}

console.log(prod5);