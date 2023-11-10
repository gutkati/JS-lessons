// урок №1
let now = new Date()
let date = new Date(now.getFullYear(), 0 - 1, 1)
console.log(date.getDay()) // проблем нет!)

// урок №2
let now2 = new Date()
let date2 = new Date(now2.getFullYear(), now2.getMonth() - 1, now2.getDate())
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[date2.getDay()])