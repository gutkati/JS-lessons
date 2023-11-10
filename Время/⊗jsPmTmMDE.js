let now = new Date()
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24)
let res = Math.floor((date - now) / (1000 * 60 * 60))
console.log(res)