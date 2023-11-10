// урок №1

function test(func) {
    console.log(func(3));
}

function func(num) {
    return Math.pow(num, 3);
}

test(func);

//  урок №3

function test1(func) {
    console.log(func(2, 3));
}

let func1 = function (num1, num2) {
    return num1 + num2
}

test1(func1)