// урок №1
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false
for (let elem of arr) {
    if (elem === 'c') {
        flag = true
        break
    }
}
if (flag === true) {
    console.log('+++')
} else {
    console.log('---')
}

// урок №2
let array = [1, 2, 3, 4, 5, 6, 7, 8]
let flag2 = false
for (let element of array) {
    if (element % 2) {
        flag2 = true
        console.log("простое")
    }else {
        console.log("непростое")
    }
}
