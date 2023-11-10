// урок №1
function getLastDay(year, month) {
let date = new Date(year, month, 0)
    return date.getDate()
}
getLastDay(2023, 10)

// урок №2
let date2 = new Date(2025, 5, 0)
let num = date2.getDay()
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[num])