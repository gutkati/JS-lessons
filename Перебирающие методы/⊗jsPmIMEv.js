// урок №1
let array1 = [1, 5, 22, 4, 5, 9, 10]

let arrNum = array1.every(el => el > 0)
console.log(arrNum)

// урок №5
let array2 = [1, 5, 3, 4, 6]
let arrNum2 = array2.every((el, i) => {
    return (el*i) < 30
})

console.log(arrNum2)