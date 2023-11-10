function isLeap(year) {
    let date = new Date(year, 2, 0)
    let day = date.getDate()
    return day === 29;
}

isLeap(2024)