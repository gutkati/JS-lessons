// урок №1
let array = [1, 2, 3, 4]

function changeNum(num) {
    return num * 2
}

function each(arr, callback) {
    let newArr = []
    for (let elem of arr) {
        newArr.push(callback(elem))
    }
    return newArr
}

each(array, changeNum)

// урок №2
let arrStr = ['one', 'two', 'three']

function changeStr(str) {
    return str.split('').reverse().join('')
}

function each1(array, callback) {
    let res = []
    for (let element of array) {
        res.push(callback(element))
    }
    return res
}

each1(arrStr, changeStr)

// урок №3
let arrStr3 = ['one', 'two', 'three']

function changeStr3(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function each3(array, callback) {
    let res = []
    for (let element of array) {
        res.push(callback(element))
    }
    return res
}

each3(arrStr3, changeStr3)