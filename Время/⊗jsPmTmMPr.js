let now = new Date()
// урок №1
let startDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
let res1 = (now - startDay) / 1000
console.log(res1)

// урок №2
let finishDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24)
let res2 = (finishDay - now) / 1000
console.log(res2)

// урок №3
let dayNewYear = new Date(now.getFullYear() + 1, 0, 1)
let res3 = Math.floor((dayNewYear - now) / (1000 * 60 * 60 * 24))
console.log(res3)

// урок №4
let date4 = new Date(now.getFullYear())
let res4 = 0
for (let month = 0; month <= 11; month++) {
    let newDat = new Date(date4, month, 13)
    if (newDat.getDay() === 5) {
        res4 += 1
    }
}
console.log(res4)

// урок №5
let date5 = new Date(now.getFullYear(), now.getMonth() - 3)
console.log(date5.getFullYear())

// урок №6
let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0)
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[lastDay.getDay()])

// урок №7 Исправила!
let year7 = new Date(now.getFullYear(), 1, 29).getDate() //зная год, вы устанавливаете дату 29-е
// февраля и запрашиваете у объекта текущий день: если год високосный, то вернётся число 29, если же нет,
// то объект "автоисправит" дату на 1-е марта
if (year7 === 29) {
    console.log("Год високосный")
} else {
    console.log("Год не високосный")
}

// урок №8
let year8 = new Date(now.getFullYear())
console.log(year8)
for (let i = year8; i > 0; i--) {
    if (i % 4 === 0) {
        console.log(i)
        break
    }
}

// урок №9
let year9 = new Date(now.getFullYear())
let res9 = year9
while (year9 % 4 !== 0){
    res9++
    break
}

console.log(res9)