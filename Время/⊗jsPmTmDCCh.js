function checkDate(year, month, day) {
    let date = new Date(year, month, day)
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day

}
checkDate(2025, 0, 32)