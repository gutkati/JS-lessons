// урок №1
let now = new Date()
let date = new Date(now.getFullYear() + 1, 11, 31)
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[date.getDay()])

// урок №2
let now2 = new Date()
let date2 = new Date(now2.getFullYear() + 1, now2.getMonth(), now2.getDate())
let days2 = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days2[date2.getDay()])

// урок №3
let now3 = new Date()
let date3 = new Date(now3.getFullYear() - 1, now3.getMonth(), now3.getDate())
let days3 = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days3[date3.getDay()])