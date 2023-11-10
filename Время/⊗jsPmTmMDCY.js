let year = new Date()
let date = new Date(year.getFullYear(), 11, 31)
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[date.getDay()])