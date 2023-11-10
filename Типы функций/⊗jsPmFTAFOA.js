// урок №1
let obj = {
    func1: function (arr) {
        let res = 0
        for (let elem of arr) {
            res += elem
        }
        return res
    },
    func2: function (arr) {
        let res = 0
        for (let elem of arr) {
            res += (elem**2)
        }
        return res
    },
    func3: function (arr) {
        let res = 0
        for (let elem of arr) {
            res += Math.pow(elem, 3)
        }
        return res
    }
}
for (let func in obj) {
    console.log(obj[func]([1, 2, 3]))
}