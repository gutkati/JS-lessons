// урок №1

let date = new Date(2000, 8, 1)
let date2 = new Date(2010, 1, 15)
let resDay = (date2 - date) / (1000 * 60 * 60 * 24)
let resMonth = (date2 - date) / (1000 * 60 * 60 * 24 * 30)
let resYear = (date2 - date) / (1000 * 60 * 60 * 24 * 30 * 12)
console.log(resDay)
console.log(resMonth)
console.log(resYear)