//урок №1
let array1 = [1, -5, 22, 4, 0, 9, -10]
let res1 = array1.some(el => el > 0)
console.log(res1)

// урок №2
let array2 = [1, 5, 3, 4, 16]
let arrNum2 = array2.some((el, i) => {
    return (el*i) > 30
})

console.log(arrNum2)