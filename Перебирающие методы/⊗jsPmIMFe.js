// урок №1

let array = [1, 2, 3, 4, 5]
let sum = 0

array.forEach(el => {
    sum += Math.pow(el, 2)
})

console.log(sum)