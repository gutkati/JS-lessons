// урок №1
function func() {
    return function () {
        return function () {
            return function () {
                return function () {
                    return "!"
                }
            }
        }
    }
}

func()()()()()