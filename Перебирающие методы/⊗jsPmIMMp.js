// урок №1

let array1 = [1, 2, 3, 4]
let res1 = array1.map(el => Math.sqrt(el))
console.log(res1)

// урок №2
let arrStr = ['Hello', 'Hi', 'By']
const res2 = (arr) => {
    return arr.map(el => el + '!')
}
res2(arrStr)

// урок №3
let arrStr2 = ['HTML', 'CSS', 'Java Script']
const getNewStr = (arr) => {
    return arr.map(el => el.split('').reverse().join(''))
}

getNewStr(arrStr2)

// урок №4

let arr = ['123', '456', '789'];

function getArray(arr) {
    return arr.map(el => el.split('').map(num => Number(num)))
}
getArray(arr)

// урок №5

let arrNum = [1, 2, 3, 4, 5]

const getNewEl = (arr) => {
    return arr.map((el, index) => el * index
    )
}
getNewEl(arrNum)