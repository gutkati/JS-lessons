// урок №1
function test(func1, func2, func3) {
    console.log(func1() + func2() + func3())
}

test(
    function () {
        return 1
    },
    function () {
        return 2
    },
    function () {
        return 3
    }
)