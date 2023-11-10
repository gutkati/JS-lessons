// урок №1
let now = new Date()
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12)
if (now > date1) {
    console.log("Полдень уже прошел")
} else if(now < date1) {
    console.log("Полдень еще не наступил")
}

// урок №2
let now2 = new Date()
let date2 = new Date(now2.getFullYear(), now2.getMonth(), 15)
if (now2 > date2) {
    console.log("Половина месяца прошла")
} else if(now < date1) {
    console.log("Половина еще не прошла")
} else if (now2 === date2) {
    console.log("Сецчас половина месяца")
}