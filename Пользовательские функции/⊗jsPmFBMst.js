// урок 1
function func1() {
    return 3;
}

function func2() {
    return 5;
}

console.log(func1() + func2());

// урок №2

function sum(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;

    }
    return res;
}

console.log(sum([1, 2, 3, 4, 5]));

// урок №3
let arr3 = [1, 2, 3, 4, 5];

function func(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

func(arr3)

// урок №4
function func4() {
    return 3;
}

function func5() {
    return 5;
}

console.log(func4() + func5());

// урок №5
let sum15 = [1, 2, 3, 4, 5];

function sum5(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;
}

sum5(sum15)

// урок №6
let res16 = [1, 2, 3, 4, 5]

function sum6(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }
    return sum
}

sum6(res16)

// урок №7
function add(num) {
    if (num <= 9) {
        return '0' + num;
    }
    return num
}

add(12)
add(2)

// урок №8
let arr8 = [1, 2, 3, 4, 5];

function sum18(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

sum18(arr8)

// урок №9
let num = 12345;

function getDigitsSum(num) {
    let arr = String(num).split('');
    let sum = 0;

    for (let elem of arr) {
        sum += +elem;
    }

    return sum;
}

getDigitsSum(num);

// №10

function isPrime(num) {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }

}

isPrime(12)