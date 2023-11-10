// урок №1
function func1(num) {
    let i = 1
    while (true) {
        num = num / 2
        if (num < 10) {
            return i
        }
        i++
    }
}
console.log(func1(100))