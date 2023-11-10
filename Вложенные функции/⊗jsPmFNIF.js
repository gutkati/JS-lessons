// урок №1
function func(num1, num2) {
    function square(num) {
        return Math.pow(num, 2)
    }

    function cube(num) {
        return Math.pow(num, 3)
    }
    return square(num1) + cube(num2)
}

func(2, 3)