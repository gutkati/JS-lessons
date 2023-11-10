// урок №1
let date = new Date()
console.log(date.getDay())

// урок №2
let numDay = (num) => {
    if (num > 0 && num < 6) {
        return 'Рабочий день'
    } else if (num === 0 || num === 6) {
        return 'Выходной день'
    }
}

numDay(date.getDay())

// урок №3
function getDay(num) {
    let day = 6 - num
    if (day === 6 || day === 5 || day === 0) {
        return day + '-' + 'дней'
    } else if (day > 1 && day < 5) {
        return day + '-' + 'дня'
    } else if (day === 1) {
        return day + '-' + 'день'
    }
}

getDay(3)

