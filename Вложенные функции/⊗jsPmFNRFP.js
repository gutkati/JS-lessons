// урок №1
function func1(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3
        }
    }
}

func1(2)(3)(4)

// урок №2
function func2(num1) {
    let arr = []
    arr.push(num1)
    return function (num2) {
        arr.push(num2)
        return function (num3) {
            arr.push(num3)
            return function (num4) {
                arr.push(num4)
                return function () {
                    return arr
                }
            }
        }
    }
}

func2(2)(3)(4)(5)()