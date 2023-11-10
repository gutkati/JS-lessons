// урок №1
let dataOne = new Date(1988, 2, 1)
let dataTwo = new Date(2000, 0, 10)

let num = dataTwo.getTime() - dataOne.getTime()

let res = num / (1000 * 60 * 60 * 24)
console.log(res)

// урок №2
let date = new Date()
let myDate = new Date(1988, 1, 25)

let resNum = date.getTime() - myDate.getTime()
let result = Math.floor(resNum / (1000 * 60 * 60 * 24 * 30))
console.log(result)