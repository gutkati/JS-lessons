// Чтобы понять рекурсию, надо понять рекурсию))

// урок №1
let object = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}

function getElement(obj) {
    for (let elem in obj) {
        if (typeof obj[elem] === 'object') {
            getElement(obj[elem])
        } else {
            console.log(obj[elem])
        }
    }
}

getElement(object)

// урок №2
let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
let newArr = []

function getArray(arr) {

    for (let element of arr) {
        if (typeof element == 'object') {
            getArray(element)
        } else {
            newArr.push(element)
        }
    }
    return newArr
}

getArray(arr)
