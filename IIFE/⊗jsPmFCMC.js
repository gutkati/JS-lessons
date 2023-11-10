// урок №1
(function () {
    return function () {
        return function () {
            return "!"
        }
    }
})()()()

    // урок №2
    (function (num1) {
        return function (num2) {
            return num1 + num2
        }
    })(1)(2)

    // урок №3
    (function (num1) {
        return function (num2) {
            return function (num3) {
                return num1 + num2 + num3
            }
        }
    })(1)(2)(3)