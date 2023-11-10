let date = new Date()
let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate())
let res = Math.floor((date - date1) / (1000 * 60 * 60))
console.log(res)

