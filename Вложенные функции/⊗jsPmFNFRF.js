// урок №1
function func1() {
    return function () {
        return 1
    }
}

function funk2() {
    return function () {
        return 2
    }
}

console.log(func1()() + funk2()())