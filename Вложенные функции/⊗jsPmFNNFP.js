// урок №1
function test(func1, func2, func3) {
    return (func1() + func2() + func3())
}

function func1() {
    return 1
}

function func2() {
    return 2
}

function func3() {
    return 3
}

test(func1, func2, func3)

let func11 = function () {
    return 1
}

let func22 = function () {
    return 2
}

let func33 = function () {
    return 3
}

test(func11, func22, func33)