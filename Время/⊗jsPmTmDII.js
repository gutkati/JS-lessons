function checkDate(date) {
if (date >= '03-21' && date <= '04-20'){
    console.log('Овен')
}
else if (date >= '04-21' && date <= '05-20') {
    console.log('Телец')
}
else if (date >= '05-21' && date <= '06-21') {
    console.log('Близнецы')
}
else if (date >= '06-22' && date <= '07-22') {
    console.log('Рак')
}
else if (date >= '07-23' && date <= '08-23') {
    console.log('Лев')
}
else if (date >= '08-24' && date <= '09-23') {
    console.log('Дева')
}
else if (date >= '09-24' && date <= '10-23') {
    console.log('Весы')
}
else if (date >= '10-24' && date <= '11-22') {
    console.log('Скорпион')
}
else if (date >= '11-23' && date <= '12-21') {
    console.log('Стрелец')
}
else if (date >= '12-22' || date <= '01-20') {
    console.log('Козерог')
}
else if (date >= '01-21' && date <= '02-20') {
    console.log('Водолей')
}
else if (date >= '02-21' && date <= '03-20') {
    console.log('Рыбы')
}
}
checkDate('12-31')
