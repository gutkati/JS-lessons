// урок №1
let obj1 = {
    func1: function () {
        return 1
    },
    func2: function () {
        return 2
    },
    func3: function () {
        return 3
    }
}

console.log(obj1["func1"]() + obj1["func2"]() + obj1["func3"]())

// урок №2
for (let key in obj1) {
    console.log(obj1[key]())
}