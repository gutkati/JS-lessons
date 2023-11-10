// урок №1

let array1 = [1, 5, -9, 4, 89, 0, -3]
const arrNum1 = (arr) => {
    return arr.filter(el => el >= 0)
}
arrNum1(array1)

// урок №2
let array2 = [1, 5, -9, 4, 89, 0, -3]
const arrNum2 = (arr) => {
    return arr.filter(el => el < 0)
}
arrNum2(array2)

// урок №3
let array3 = [1, 5, -9, 4, 89, 0, -3]
const arrNum3 = (arr) => {
    return arr.filter(el => el >= 0 && el < 10)
}
arrNum3(array3)

// урок №4

let array4 = ['number', 'string', 'true', 'false', 'undefined']
let arrStr4 = array4.filter(el => {
    return el.length > 5
})
console.log(arrStr4)


// урок №5
let array5 = [1, 5, 22, 4, 5, 9, 10]

function getNum5(array) {
    return array.filter((el, i) => {
        return (el * i) < 30
    })
}

getNum5(array5)

// урок №6

let array6 = [1, 2, [3, 4], 5, [6, 7]]

const res6 = array6.filter(el => typeof el === "number");
console.log(res6)