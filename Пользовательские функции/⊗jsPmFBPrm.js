// Урок №1
let array1 = [10, 20, 30]

function getSumArr(arr) {
    let res = 0
    for (let elem of arr) {
        res += elem
    }
    return res
}

getSumArr(array1)

// урок №2
function getArr(num) {
    let array = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            array.push(i)
        }
    }
    return array
}

getArr(35)

// урок №3
function getArraySymbol(str) {
    return str.split('')
}

getArraySymbol('Hello')

// урок №4
function getReverseStr(str) {
    let array = str.split('')
    let newArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray
//return str.split('').reverse().join('')
}

getReverseStr('hello')

// урок №5
function changeOneSymbol(str) {
    return str[0].toUpperCase() + str.slice(1)
}

changeOneSymbol('hello!')

// урок №6
function changeString(str) {
    let arr = str.split(' ')
    let newArr = []
    for (let i = 0; i <= arr.length - 1; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    }
    return newArr.join(' ')
}

changeString('hello world, people, children')

// урок №7
function createArrayNum(num) {
    let array = []
    for (let i = 1; i <= num; i++) {
        array.push(i)
    }
    return array
}

createArrayNum(10)

// урок №8
function calcSumNumber(num) {
    let array = num.toString().split("")
    let res = 0
    for (let element of array) {
        res += +element
    }
    return res
}

calcSumNumber(1234)

// урок №9
function checkYear(num) {
    if (num % 4 === 0) {
        return "Год високосный"
    }
    return 'Не високосный'
}

checkYear(2016)

// урок №10
function calcDay(sec) {
    let res = (sec / 86400).toFixed()
    if (res < 1) {
        return 'Идут первые сутки'
    }
    else if (res >= 2) {
        return res + ' ' + 'суток'
    }
    else if (res >= 1) {
        return res + ' ' + 'сутки'
    }

}

calcDay(100000)

// урок №11
function showRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

showRandomElement([5, 9, 7, 8, 6])

// урок №12
function checkNumber(num) {
    if (num % 2) {
        return true
    }
    return false
}

checkNumber(10)

