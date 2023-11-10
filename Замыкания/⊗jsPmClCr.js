// урок №1
function test1() {
    let num = 1
    return function () {
        return num++
    }
}

let func1 = test1()
func1()
func1()
func1()

let func11 = test1()
func11()
func11()
func11()
func11()
func11()
func11()

// урок №2
function test2() {
    let num = 10
    return function () {
        return num--
    }
}

let func2 = test2()
func2()
func2()
func2()
func2()
func2()
func2()
func2()
func2()
func2()

// урок №3

function test3() {
    let num = 10
    return function () {
        if (num < 0) {
            return 'Отсчет окончен'
        }
        return num--

    }

}

let func3 = test3()
func3()
func3()
func3()
func3()
func3()
func3()
func3()
func3()
func3()
func3()
func3()
func3()
func3()
func3()

