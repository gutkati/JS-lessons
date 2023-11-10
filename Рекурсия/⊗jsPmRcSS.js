// урок №1
let object = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}

function getSum(obj) {
    let sum = 0
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            sum += getSum(obj[key])
        } else {
            sum += obj[key]
        }
    }
    return sum
}

getSum(object)

// урок №2
let array = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]

function getStr(arr) {
    let newArr = []
    for (let elem of arr) {
        if (typeof elem == 'object') {
            newArr.push(getStr(elem))
        } else {
            newArr.push(elem)
        }
    }
    return newArr.join("")
}

getStr(array)