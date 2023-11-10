// урок №1
function test(num, func1, func2) {
return func1(num) + func2(num)
}

function func1(num) {
return Math.pow(num, 2)
}
function func2(num) {
return Math.pow(num, 3)
}

test(3, func1, func2)