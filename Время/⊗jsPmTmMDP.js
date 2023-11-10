// урок №1
let date = new Date()
let date1 = new Date(date.getFullYear(), 0, 1)
let date2 = new Date(date.getFullYear(), 8, 10)
console.log(date2 - date1)

// урок №2
let date3 = new Date(date.getFullYear(), date2.getMonth(), 20)
let date4 = new Date(date.getFullYear(), date2.getMonth() + 1 , 10)
let result = (date4 - date3) / (1000 * 60 * 60 * 24)
console.log(result)