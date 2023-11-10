let date1 = '12-01';
let date2 = '11-01';

function checkDate(date1, date2) {
if (date1 > date2) {
    console.log(date1 + "-" + "эта дата больше")
} else if (date2 > date1) {
    console.log(date2 + "-" + "эта дата больше")
}
}
checkDate(date1, date2)