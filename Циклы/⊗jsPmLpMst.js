// урок №1
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// урок №2
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// урок №3
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// урок №4
let i = 0;
while (i <= 10) {
	console.log(i);
	i++;
}
// урок №5
let res = 0;
for (let i = 1; i <= 10; i++) {
	res += i;
}
console.log(res);

// Урок №6
let res2 = 1;
for (let i = 1; i <= 10; i++) {
	res2 *= i;
}
console.log(res2);

// урок №7
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}
console.log(sum);

// урок №8
let arr2 = ['1', '2', '3', '4', '5'];
let sum2 = 0;

for (let elem of arr2) {
	sum2 += +elem;
}
console.log(sum2);

// урок №9
let arr3 = ['1', '2', '3', '4', '5'];
let sum3 = 0;

for (let elem of arr3) {
	sum3 += +elem;
}
console.log(sum3);

// урок №10
let arr4 = ['1', '2', '3', '4', '5'];
let sum4 = 0;

for (let i = 0; i < arr4.length; i++) {
	sum4 += +arr4[i];
}
console.log(sum4);

// урок №11
let arr5 = ['1', '2', '3', '4', '5'];
let sum5 = 0;

for (let i = 0; i <= arr5.length - 1; i++) {
	sum5 += +arr5[i];
}
console.log(sum5);

// урок №12
let arr6 = ['1', '2', '3', '4', '5'];
let sum6 = 0;

for (let i = 0; i < arr6.length; i++) {
	sum6 += +arr6[i];
}
console.log(sum6);

// урок №13
let arr7 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr7.length; i++) {
	arr7[i] = arr7[i]**2;
}
console.log(arr7);

// урок №14
let arr8 = [];
for (let i = 1; i <= 5; i++) {
	arr8.push(i);
}
console.log(arr8);

//  урок №15
let obj9 = {a: 1, b: 2, c: 3};
let sum9 = 0;

for (let elem in obj9) {
	sum9 += obj9[elem];
}
console.log(sum9);

// урок №16
let obj16 = {a: 1, b: 2, c: 3};
let sum16 = 0;

for (let key in obj16) {
	sum16 += obj16[key];
}
console.log(sum16);

// урок №17
let arr17 = [1, 2, 3, 4, 5];
let res17 = '';

for (let elem of arr17) {
	if (elem === 3) {
		res17 = '+++';
		break
	} else {
		res17 = '---';
	}
}
console.log(res17);

// урок №18
let  arr18 = []
for (let i = 1; i <= 5; i++) {
	arr18.push(i);
}
console.log(arr18);

// урок №19
let arr19 = [1, 2, 3, 4, 5];
let res19 = false;

for (let elem of arr19) {
	if (elem === 3) {
		res19 = true;
		break;
	}
}
console.log(res19);

// урок №20
let arr20 = [1, 2, 3, 4, 5];

for (let elem of arr20) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
}

// урок №21
let arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let  newArr21 = []

for (let elem of arr21) {
	if (elem % 2 !== 0) {
		newArr21.push(elem);
	}
}
console.log(newArr21);
