let now = new Date()
let yearOne = new Date(2000)
let yearNow = new Date(now.getFullYear())
let res = 0
for (let year = yearOne; year <= yearNow; year++) {
    let sumYear = new Date(year, 0, 1)

    if(sumYear.getDay() === 0 || sumYear.getDay() === 6) {
         res += 1
    }

}
console.log(res)