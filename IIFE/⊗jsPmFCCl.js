// урок №1
let result = (function () {
    let num = 1
    return function () {
        return num++
    }
})()
result()
result()
result()
result()
result()

// урок №2 неуверана, что правильно описала условие, но код отрабатывает,
// если логика не совсем верная, намекни)

let result2 = (function () {
    let num = 0
    return function () {
        if (num > 4) {
            return num = 1
        }
        return ++num
    }
})()
result2()
result2()
result2()
result2()
result2()
result2()
result2()
result2()
result2()
result2()
result2()
result2()
result2()